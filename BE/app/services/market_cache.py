import asyncio
import os
from typing import List, Dict, Any
from app.api import market as market_api

CACHE: Dict[str, Any] = {
    "news": [],
    "updated_at": None
}

POLL_INTERVAL = int(os.getenv("MARKET_POLL_INTERVAL", "60"))  # seconds
# maximum number of cached items
CACHE_MAX = int(os.getenv("MARKET_CACHE_SIZE", "200"))

async def _poll_once():
    """Fetch latest market news from the market API helper functions (server-side)"""
    try:
        # Use the same fetch helpers in market.py by importing functions
        # Note: market_api module defines async fetch_* helpers
        results = []
        if hasattr(market_api, "fetch_newsdata"):
            results.extend(await market_api.fetch_newsdata("jobs OR hiring OR recruitment"))
        if hasattr(market_api, "fetch_currents"):
            results.extend(await market_api.fetch_currents("jobs OR hiring OR recruitment"))
        if hasattr(market_api, "fetch_gnews"):
            results.extend(await market_api.fetch_gnews("jobs OR hiring OR recruitment"))

        # basic dedupe
        seen = set()
        deduped = []
        for item in results:
            key = (item.get("link"), item.get("title"))
            if key in seen:
                continue
            seen.add(key)
            deduped.append(item)

        # sort
        deduped.sort(key=lambda x: x.get("pubDate") or "", reverse=True)

        # enforce cache size limit
        CACHE["news"] = deduped[:CACHE_MAX]
        import datetime
        CACHE["updated_at"] = datetime.datetime.utcnow().isoformat()
    except Exception:
        # swallow errors to keep loop running
        pass

async def _poll_loop():
    while True:
        await _poll_once()
        await asyncio.sleep(POLL_INTERVAL)

# startup function to be called by FastAPI on startup
async def start_background_loop(app):
    loop = asyncio.get_event_loop()
    task = loop.create_task(_poll_loop())
    app.state.market_task = task

# shutdown function to cancel the task
async def stop_background_loop(app):
    task = getattr(app.state, "market_task", None)
    if task:
        task.cancel()
        try:
            await task
        except asyncio.CancelledError:
            pass

# getter
def get_cached_news(limit: int = 50) -> List[Dict[str, Any]]:
    return CACHE.get("news", [])[:limit]
