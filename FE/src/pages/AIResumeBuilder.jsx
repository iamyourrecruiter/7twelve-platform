import React, { useState } from 'react';
import api from '../services/api';

export default function AIResumeBuilder() {
  const [form, setForm] = useState({ name: '', title: '', experience: '', skills: '', education: '', summary: '' });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: form.name,
      title: form.title,
      experience: form.experience,
      skills: form.skills ? form.skills.split(',').map(s => s.trim()) : [],
      education: form.education,
      summary: form.summary
    };
    try {
      const res = await api.aiAPI.buildResume(payload);
      setResult(res.resume || JSON.stringify(res));
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
      if (form.name) formData.append('name', form.name);
      if (form.title) formData.append('title', form.title);
      const res = await fetch((import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api') + '/ai/resume/build-file', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResult(data.resume || JSON.stringify(data));
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">AI Resume Builder</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} className="input" />
        <input name="title" placeholder="Professional title" value={form.title} onChange={handleChange} className="input" />
        <textarea name="summary" placeholder="Short summary" value={form.summary} onChange={handleChange} className="textarea" />
        <textarea name="experience" placeholder="Experience (paste or describe)" value={form.experience} onChange={handleChange} className="textarea" />
        <input name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange} className="input" />
        <input name="education" placeholder="Education" value={form.education} onChange={handleChange} className="input" />
        <div className="flex items-center gap-3">
          <label className="btn cursor-pointer">
            Upload resume file
            <input type="file" onChange={handleFile} className="hidden" />
          </label>
          <button type="submit" className="btn" disabled={loading}>{loading ? 'Generating…' : 'Generate Resume'}</button>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Generated Resume</h3>
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded mt-2">{result}</pre>
      </div>
    </div>
  );
}
