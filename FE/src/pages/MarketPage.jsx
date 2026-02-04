import React, { useEffect, useState, useRef } from 'react';
import api from '../services/api';

const MarketPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('jobs OR hiring OR recruitment');

  const evtRef = useRef(null);
  const [retry, setRetry] = useState(0);
  const [summaries, setSummaries] = useState({});

  useEffect(() => {
    fetchNews();
    let mounted = true;

    const connect = () => {
      if (evtRef.current) {
        try { evtRef.current.close(); } catch(e) {}
      }
      const url = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000') + '/api/market/stream';
      const s = new EventSource(url);
      evtRef.current = s;
      s.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data);
          if (mounted) setNews(payload.results || []);
        } catch (err) {
          console.error('SSE parse error', err);
        }
      };
      s.onerror = () => {
        // exponential backoff reconnect
        try { s.close(); } catch(e) {}
        const next = Math.min(6, retry + 1);
        setRetry(next);
        const delay = Math.pow(2, next) * 1000;
        setTimeout(() => connect(), delay);
      };
    };

    connect();
    return () => {
      mounted = false;
      if (evtRef.current) try { evtRef.current.close(); } catch(e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNews = async (q = query) => {
    setLoading(true);
    try {
      const res = await api.marketAPI.getNews(`?query=${encodeURIComponent(q)}`);
      setNews(res.results || []);
    } catch (err) {
      console.error(err);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async (item) => {
    if (!item.link) return;
    if (summaries[item.link]) return; // cached locally
    try {
      const res = await api.marketAPI.generate(`?url=${encodeURIComponent(item.link)}&max_tokens=150`);
      setSummaries(prev => ({ ...prev, [item.link]: res.summary || 'No summary available' }));
    } catch (err) {
      console.error(err);
      setSummaries(prev => ({ ...prev, [item.link]: 'Error generating summary' }));
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-alike text-[#161a5a] mb-4">Real-time Market & Recruitment Updates</h1>
        <p className="text-gray-600 mb-6">Live aggregated news about hiring trends, company expansions, salary insights, and role growth.</p>

        <div className="flex items-center gap-3 mb-6">
          <input value={query} onChange={e => setQuery(e.target.value)} className="flex-1 px-4 py-2 border rounded-lg" />
          <button onClick={() => fetchNews()} className="px-4 py-2 bg-[#161a5a] text-white rounded-lg">Search</button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((n, idx) => (
              <article key={idx} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <a href={n.link} target="_blank" rel="noreferrer" className="text-lg font-semibold text-[#161a5a] hover:underline">{n.title}</a>
                  <button onClick={() => handleGenerate(n)} className="ml-4 px-3 py-1 bg-[#8b0000] text-white rounded-md text-sm">Summarize</button>
                </div>
                <p className="text-sm text-gray-600 mt-2">{n.description}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>{n.source}</span>
                  <span>{n.pubDate}</span>
                </div>
                {summaries[n.link] && (
                  <div className="mt-3 p-3 bg-gray-50 rounded border">
                    <strong className="block mb-2">AI Summary</strong>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{summaries[n.link]}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPage;
