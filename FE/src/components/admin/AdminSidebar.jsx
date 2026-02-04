import React from 'react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'candidates', label: 'Candidates', icon: '👤' },
    { id: 'companies', label: 'Companies', icon: '🏢' },
    { id: 'advertisements', label: 'Advertisements', icon: '📢' },
    { id: 'blogs', label: 'Blogs', icon: '📝' }
  ];

  return (
    <div className="flex space-x-4 border-b border-gray-300">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 font-raleway font-medium transition-all flex items-center space-x-2 ${
            activeTab === tab.id 
              ? 'text-[#161a5a] border-b-2 border-[#161a5a]' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="text-xl">{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default AdminSidebar;