import React, { useState } from 'react';
import api from '../services/api';

export default function AIJobListings(){
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (e) => {
    e?.preventDefault();
    setLoading(true);
    try{
      const res = await api.aiAPI.getJobs({ search, industry, limit: 50 });
      setJobs(res.jobs || []);
    }catch(err){
      setJobs([]);
      console.error(err);
    }finally{ setLoading(false); }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Job Listings (Remotive)</h2>
      <form onSubmit={fetchJobs} className="flex gap-2 mb-4">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search" className="input" />
        <input value={industry} onChange={e=>setIndustry(e.target.value)} placeholder="Industry (category)" className="input" />
        <button className="btn" disabled={loading}>{loading? 'Loading…':'Search'}</button>
      </form>

      <div className="grid gap-3">
        {jobs.map(j=> (
          <div key={j.id} className="p-3 border rounded">
            <a href={j.url} target="_blank" rel="noreferrer" className="text-lg font-medium">{j.title}</a>
            <div className="text-sm text-gray-600">{j.company_name} — {j.candidate_required_location}</div>
            <div className="mt-2 text-sm">{j.description ? j.description.slice(0,200) + '...' : ''}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
