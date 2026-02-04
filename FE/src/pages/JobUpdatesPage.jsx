import React, { useEffect, useState } from 'react';
import api from '../services/api';

const JobUpdatesPage = () => {
  const [rssUrl, setRssUrl] = useState('https://rss.nytimes.com/services/xml/rss/nyt/Business.xml');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRss();
  }, []);

  const fetchRss = async () => {
    setLoading(true);
    try {
      const res = await api.marketAPI.getRss(`?feed_url=${encodeURIComponent(rssUrl)}&limit=10`);
      setEntries(res.entries || []);
    } catch (err) {
      console.error(err);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-alike text-[#161a5a] mb-4">Real-time Job & RSS Updates</h1>
        <p className="text-gray-600 mb-6">Subscribe to RSS feeds and get the latest job market articles and company expansion news.</p>

        <div className="flex items-center gap-3 mb-6">
          <input value={rssUrl} onChange={e => setRssUrl(e.target.value)} className="flex-1 px-4 py-2 border rounded-lg" />
          <button onClick={() => fetchRss()} className="px-4 py-2 bg-[#161a5a] text-white rounded-lg">Fetch RSS</button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {entries.map((e, i) => (
              <div key={i} className="border rounded-lg p-4">
                <a href={e.link} target="_blank" rel="noreferrer" className="font-semibold text-[#161a5a] hover:underline">{e.title}</a>
                <p className="text-sm text-gray-600 mt-2">{e.summary}</p>
                <div className="mt-3 text-sm text-gray-500">{e.published}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobUpdatesPage;
