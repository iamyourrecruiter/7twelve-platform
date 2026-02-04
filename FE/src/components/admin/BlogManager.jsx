import React, { useState } from 'react';

const BlogManager = () => {
  // TODO: Fetch from API
  const [blogs, setBlogs] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-2">Blog Management</h2>
          <p className="text-gray-600 font-raleway">Create and manage blog posts</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-6 py-3 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all"
        >
          {showCreateForm ? 'Close Form' : 'Add New Blog'}
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-gray-50 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-alike font-bold text-[#161a5a] mb-4">Create Internal Blog</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Blog Title</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Short Description</label>
              <input 
                type="text" 
                maxLength="150"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Content</label>
              <textarea 
                rows="8"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Cover Image</label>
              <input 
                type="file" 
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-5 h-5" />
              <label className="font-raleway">Mark as Featured</label>
            </div>
            <button 
              type="submit"
              className="px-6 py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all"
            >
              Publish Blog
            </button>
          </form>
        </div>
      )}

      {blogs.length === 0 ? (
        <div className="border border-gray-200 rounded-lg p-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-500 font-raleway text-lg">No blog submissions yet</p>
          <p className="text-gray-400 font-raleway text-sm mt-2">
            Blogs will appear here when users submit or you create internal blogs
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-alike font-bold text-[#161a5a] mb-2">{blog.title}</h3>
                  <p className="text-gray-600 font-raleway mb-4">{blog.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 font-raleway">
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span>{blog.source}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded ${
                      blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="px-4 py-2 text-sm bg-[#161a5a] text-white font-raleway rounded hover:bg-[#0d0f3a] transition-all">
                    Edit
                  </button>
                  <button className="px-4 py-2 text-sm bg-green-600 text-white font-raleway rounded hover:bg-green-700 transition-all">
                    Publish
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-600 text-white font-raleway rounded hover:bg-red-700 transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogManager;