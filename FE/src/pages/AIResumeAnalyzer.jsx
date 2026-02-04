import React, { useState } from 'react';
import api from '../services/api';

export default function AIResumeAnalyzer() {
  const [text, setText] = useState('');
  const [role, setRole] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.aiAPI.analyzeResume({ text, target_role: role });
      setResult(res.analysis || JSON.stringify(res));
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (role) formData.append('target_role', role);
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api') + '/ai/resume/analyze-file', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResult(data.analysis || JSON.stringify(data));
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">AI Resume Analyzer</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste resume text" className="textarea" />
        <input value={role} onChange={e => setRole(e.target.value)} placeholder="Target role (optional)" className="input" />
        <button type="submit" className="btn" disabled={loading}>{loading ? 'Analyzing…' : 'Analyze Resume'}</button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Analysis</h3>
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded mt-2">{result}</pre>
      </div>
    </div>
  );
}
