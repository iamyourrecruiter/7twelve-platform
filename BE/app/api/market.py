from fastapi import APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse
import os
import httpx
import asyncio
import feedparser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
from app.services.market_cache import get_cached_news
from fastapi.responses import StreamingResponse
import json
import asyncio
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
if OPENAI_KEY:
    try:
        import openai
        openai.api_key = OPENAI_KEY
    except Exception:
        openai = None
else:
    openai = None

router = APIRouter()

# Config via environment variables (set in .env)
NEWSAPI_KEY = os.getenv("NEWSAPI_KEY")
GNEWS_KEY = os.getenv("GNEWS_KEY")
NEWSDATA_KEY = os.getenv("NEWSDATA_KEY")
CURRENTS_KEY = os.getenv("CURRENTS_KEY")
MEDIASTACK_KEY = os.getenv("MEDIASTACK_KEY")


async def fetch_newsdata(query: str, country: str = None):
    if not NEWSDATA_KEY:
        return []
    url = "https://newsdata.io/api/1/news"
    params = {"apikey": NEWSDATA_KEY, "q": query}
    if country:
        params["country"] = country
    async with httpx.AsyncClient(timeout=15) as client:
        r = await client.get(url, params=params)
        if r.status_code != 200:
            return []
        data = r.json()
        items = []
        for article in data.get("results", []):
            items.append({
                "title": article.get("title"),
                "link": article.get("link"),
                "pubDate": article.get("pubDate"),
                "source": article.get("source_id"),
                "description": article.get("description"),
            })
        return items


async def fetch_currents(query: str, country: str = None):
    if not CURRENTS_KEY:
        return []
    url = "https://api.currentsapi.services/v1/search"
    params = {"apiKey": CURRENTS_KEY, "keywords": query, "language": "en"}
    async with httpx.AsyncClient(timeout=15) as client:
        r = await client.get(url, params=params)
        if r.status_code != 200:
            return []
        data = r.json()
        items = []
        for article in data.get("news", []):
            items.append({
                "title": article.get("title"),
                "link": article.get("url"),
                "pubDate": article.get("published"),
                "source": article.get("author") or article.get("source"),
                "description": article.get("description"),
            })
        return items


async def fetch_gnews(query: str, country: str = None):
    if not GNEWS_KEY:
        return []
    url = "https://gnews.io/api/v4/search"
    params = {"token": GNEWS_KEY, "q": query, "max": 10}
    if country:
        params["country"] = country
    async with httpx.AsyncClient(timeout=15) as client:
        r = await client.get(url, params=params)
        if r.status_code != 200:
            return []
        data = r.json()
        items = []
        for article in data.get("articles", []):
            items.append({
                "title": article.get("title"),
                "link": article.get("url"),
                "pubDate": article.get("publishedAt"),
                "source": article.get("source", {}).get("name"),
                "description": article.get("description"),
            })
        return items


@router.get("/news")
async def combined_news(query: str = Query("jobs OR hiring OR recruitment", min_length=1), country: str = None, sources: str = None):
    """
    Fetch combined news from configured free APIs. Query defaults to recruitment-related keywords.
    Optional `country` (ISO code) and `sources` (comma-separated: newsdata,currents,gnews) to limit.
    """
    tasks = []
    allowed = {"newsdata", "currents", "gnews"}
    requested = set()
    if sources:
        requested = set([s.strip().lower() for s in sources.split(",")])
    else:
        requested = allowed

    if "newsdata" in requested:
        tasks.append(fetch_newsdata(query, country))
    if "currents" in requested:
        tasks.append(fetch_currents(query, country))
    if "gnews" in requested:
        tasks.append(fetch_gnews(query, country))

    if not tasks:
        raise HTTPException(status_code=400, detail="No news sources available or requested")

    results = await asyncio.gather(*tasks)
    combined = []
    for res in results:
        combined.extend(res)

    # basic dedupe by link and title
    seen = set()
    deduped = []
    for item in combined:
        key = (item.get("link"), item.get("title"))
        if key in seen:
            continue
        seen.add(key)
        deduped.append(item)

    # sort by pubDate if available
    def key_fn(x):
        return x.get("pubDate") or ""

    deduped = sorted(deduped, key=key_fn, reverse=True)

    return JSONResponse({"count": len(deduped), "results": deduped})


@router.get("/rss")
async def fetch_rss(feed_url: str = Query(..., description="RSS/Atom feed URL"), limit: int = 10):
    """
    Fetch and parse RSS/Atom feed and return latest entries.
    """
    try:
        parsed = feedparser.parse(feed_url)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    entries = []
    for entry in parsed.entries[:limit]:
        entries.append({
            "title": entry.get("title"),
            "link": entry.get("link"),
            "published": entry.get("published") or entry.get("updated"),
            "summary": entry.get("summary"),
        })

    return {"count": len(entries), "entries": entries}


@router.get("/cache")
async def get_cache(limit: int = 50):
    """Return cached market news maintained by background poller."""
    data = get_cached_news(limit=limit)
    return {"count": len(data), "results": data}


@router.get('/stream')
async def stream_updates():
    """Server-sent events streaming of cached updates. Clients can connect to receive JSON payloads."""

    async def event_generator():
        while True:
            data = get_cached_news(limit=50)
            payload = {"results": data}
            text = f"data: {json.dumps(payload)}\n\n"
            yield text.encode('utf-8')
            await asyncio.sleep(int(os.getenv('MARKET_POLL_INTERVAL', '60')))

    return StreamingResponse(event_generator(), media_type='text/event-stream')


def summarize_text(text: str, sentences_count: int = 3):
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = LexRankSummarizer()
    summary = summarizer(parser.document, sentences_count)
    return "\n".join([str(sent) for sent in summary])


async def _generate_with_openai(text: str, max_tokens: int = 150):
    if not openai:
        return None

    def call_openai():
        return openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": f"Summarize the following text in 3 concise bullet points:\n\n{text}"}],
            max_tokens=max_tokens,
            temperature=0.2,
        )

    loop = asyncio.get_event_loop()
    try:
        resp = await loop.run_in_executor(None, call_openai)
        choices = resp.get("choices", [])
        if choices:
            return choices[0].get("message", {}).get("content")
    except Exception:
        return None
    return None


@router.get("/summary")
async def summarize_url(url: str = Query(..., description="URL to summarize"), sentences: int = 3):
    """
    Fetch a URL and return a short extractive summary. This is a light-weight summarizer for quick overviews.
    """
    try:
        async with httpx.AsyncClient(timeout=15) as client:
            r = await client.get(url)
            if r.status_code != 200:
                raise HTTPException(status_code=400, detail="Failed to fetch URL")
            text = r.text
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    # strip HTML for summarization (very basic)
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(text, "html.parser")
    for script in soup(["script", "style"]):
        script.decompose()
    plain = soup.get_text(separator="\n")
    # limit length
    if len(plain) > 20000:
        plain = plain[:20000]

    summary = summarize_text(plain, sentences_count=sentences)
    return {"summary": summary}


@router.get('/generate')
async def generate_summary(url: str = Query(..., description="URL to summarize using LLM"), max_tokens: int = 150):
    """Generate a short AI summary using OpenAI if configured, else fallback to extractive summary."""
    try:
        async with httpx.AsyncClient(timeout=15) as client:
            r = await client.get(url)
            if r.status_code != 200:
                raise HTTPException(status_code=400, detail="Failed to fetch URL")
            text = r.text
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    from bs4 import BeautifulSoup
    soup = BeautifulSoup(text, "html.parser")
    for script in soup(["script", "style"]):
        script.decompose()
    plain = soup.get_text(separator="\n")
    if len(plain) > 30000:
        plain = plain[:30000]

    if openai:
        ai_summary = await _generate_with_openai(plain, max_tokens=max_tokens)
        if ai_summary:
            return {"summary": ai_summary, "source": "openai"}

    # fallback
    summary = summarize_text(plain, sentences_count=3)
    return {"summary": summary, "source": "extractive"}
