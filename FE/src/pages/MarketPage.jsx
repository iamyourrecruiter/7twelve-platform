import React, { useEffect, useState } from 'react';
import api from '../services/api';

const MarketPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('jobs OR hiring OR recruitment');

  useEffect(() => {
    fetchNews();
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
                <a href={n.link} target="_blank" rel="noreferrer" className="text-lg font-semibold text-[#161a5a] hover:underline">{n.title}</a>
                <p className="text-sm text-gray-600 mt-2">{n.description}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>{n.source}</span>
                  <span>{n.pubDate}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketPage;
