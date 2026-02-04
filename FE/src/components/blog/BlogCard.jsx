import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (blog.link && blog.link !== '#') {
      window.open(blog.link, '_blank');
    } else if (blog.internalLink) {
      navigate(blog.internalLink);
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden cursor-pointer ${
        blog.featured ? 'ring-2 ring-[#8b0000]' : ''
      }`}
    >
      <div className="h-48 bg-gradient-to-br from-[#161a5a] to-[#8b0000] flex items-center justify-center text-8xl">
        {blog.image}
      </div>
      <div className="p-6">
        {blog.featured && (
          <span className="inline-block px-3 py-1 bg-[#8b0000] text-white text-xs font-raleway rounded-full mb-3">
            Featured
          </span>
        )}
        <h3 className="text-2xl font-alike font-bold text-[#161a5a] mb-3">{blog.title}</h3>
        <p className="text-gray-600 font-raleway mb-4">{blog.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="font-raleway text-gray-500">{blog.source}</span>
          <span className="font-raleway text-gray-400">{blog.date}</span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm font-raleway text-gray-500">By {blog.author}</span>
          <button 
            onClick={handleReadMore}
            className="px-4 py-2 bg-[#161a5a] text-white font-raleway rounded-lg hover:bg-[#0d0f3a] transition-all text-sm"
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;