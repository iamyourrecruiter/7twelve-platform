import React, { useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import CandidateTable from '../components/admin/CandidateTable';
import CompanyTable from '../components/admin/CompanyTable';
import AdManager from '../components/admin/AdManager';
import BlogManager from '../components/admin/BlogManager';

const AdminPanel = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('candidates');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
          <h1 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-8">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 font-raleway font-medium mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
              />
              <p className="mt-2 text-sm text-gray-500 font-raleway">Default password: admin123</p>
            </div>
            <button type="submit" className="w-full py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-alike font-bold text-[#161a5a]">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white font-raleway font-medium rounded-lg hover:bg-red-700 transition-all"
            >
              Logout
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-alike font-bold text-[#161a5a] mb-2">0</div>
              <p className="text-gray-600 font-raleway">Total Candidates</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-alike font-bold text-[#8b0000] mb-2">0</div>
              <p className="text-gray-600 font-raleway">Total Companies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-alike font-bold text-[#161a5a] mb-2">7</div>
              <p className="text-gray-600 font-raleway">Advertisements</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-alike font-bold text-[#8b0000] mb-2">0</div>
              <p className="text-gray-600 font-raleway">Blog Posts</p>
            </div>
          </div>

          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="bg-white p-8 rounded-2xl shadow-lg mt-6">
            {activeTab === 'candidates' && <CandidateTable />}
            {activeTab === 'companies' && <CompanyTable />}
            {activeTab === 'advertisements' && <AdManager />}
            {activeTab === 'blogs' && <BlogManager />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;