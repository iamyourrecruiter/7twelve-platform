import React, { useState } from 'react';

const BlogSubmitForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: '',
    blogTitle: '',
    description: '',
    content: '',
    coverImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, coverImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-raleway font-medium mb-2">Your Name *</label>
          <input 
            type="text" 
            name="authorName"
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
            value={formData.authorName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-raleway font-medium mb-2">Email *</label>
          <input 
            type="email" 
            name="authorEmail"
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
            value={formData.authorEmail}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Blog Title *</label>
        <input 
          type="text" 
          name="blogTitle"
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.blogTitle}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Short Description *</label>
        <input 
          type="text" 
          name="description"
          required 
          maxLength="150" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.description}
          onChange={handleChange}
          placeholder="1-2 lines describing your blog (max 150 characters)"
        />
        <p className="text-sm text-gray-500 font-raleway mt-1">{formData.description.length}/150 characters</p>
      </div>

      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Blog Content *</label>
        <textarea 
          name="content"
          rows="10" 
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your blog content here..."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Cover Image</label>
        <input 
          type="file" 
          accept="image/*" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          onChange={handleFileChange}
        />
        <p className="text-sm text-gray-500 font-raleway mt-1">Recommended size: 800x400px</p>
      </div>

      <button type="submit" className="w-full py-4 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all text-lg shadow-lg">
        Submit Blog
      </button>
    </form>
  );
};

export default BlogSubmitForm;