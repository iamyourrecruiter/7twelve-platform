import React, { useState } from 'react';
import api from '../services/api';

export default function AISalaryCalculator() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [years, setYears] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.aiAPI.salaryCalc({ title, location, years_experience: Number(years) });
      setResult(res);
    } catch (err) {
      setResult({ error: err.message });
    } finally { setLoading(false); }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Salary Calculator</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job title" className="input" />
        <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location (optional)" className="input" />
        <input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="Years experience" className="input" />
        <button className="btn" disabled={loading}>{loading ? 'Calculating…' : 'Calculate'}</button>
      </form>

      {result && (
        <div className="mt-4 bg-gray-50 p-4 rounded">
          {result.error ? <div className="text-red-600">{result.error}</div> : (
            <div>
              <div><strong>Estimated salary (USD):</strong> {result.estimated_salary_usd}</div>
              <div className="text-sm text-gray-600">{result.note}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
