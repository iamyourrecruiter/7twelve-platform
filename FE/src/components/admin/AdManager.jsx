import React, { useState } from 'react';

const AdManager = () => {
  const [ads, setAds] = useState([
    { id: 1, position: 1, active: true },
    { id: 2, position: 2, active: true },
    { id: 3, position: 3, active: true },
    { id: 4, position: 4, active: true },
    { id: 5, position: 5, active: true },
    { id: 6, position: 6, active: true },
    { id: 7, position: 7, active: true }
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-2">Manage Advertisements</h2>
          <p className="text-gray-600 font-raleway">Upload and manage advertisement images for the home page slider</p>
        </div>
        <button 
          onClick={() => setShowUploadForm(!showUploadForm)}
          className="px-6 py-3 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all"
        >
          {showUploadForm ? 'Close Form' : 'Add New Advertisement'}
        </button>
      </div>

      {showUploadForm && (
        <div className="bg-gray-50 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-alike font-bold text-[#161a5a] mb-4">Upload New Advertisement</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Advertisement Title</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                placeholder="Enter advertisement title"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Position (1-7)</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway">
                {[1,2,3,4,5,6,7].map(i => <option key={i} value={i}>Position {i}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Upload Image</label>
              <input 
                type="file" 
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              />
              <p className="text-sm text-gray-500 font-raleway mt-1">Recommended size: 1200x600px</p>
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Link URL (optional)</label>
              <input 
                type="url" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                placeholder="https://example.com"
              />
            </div>
            <button 
              type="submit"
              className="px-6 py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all"
            >
              Upload Advertisement
            </button>
          </form>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        {ads.map((ad) => (
          <div key={ad.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all">
            <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-3 flex items-center justify-center text-white text-2xl font-alike">
              Ad {ad.position}
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-raleway text-sm text-gray-600">Position {ad.position}</p>
              <span className={`px-2 py-1 rounded text-xs font-raleway ${
                ad.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {ad.active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 text-sm px-3 py-2 bg-[#161a5a] text-white font-raleway rounded hover:bg-[#0d0f3a] transition-all">
                Edit
              </button>
              <button className="flex-1 text-sm px-3 py-2 bg-red-600 text-white font-raleway rounded hover:bg-red-700 transition-all">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm font-raleway text-blue-800">
          💡 <strong>Tip:</strong> Images should be 1200x600px for best display. Advertisements auto-rotate every 3 seconds on the home page.
        </p>
      </div>
    </div>
  );
};

export default AdManager;