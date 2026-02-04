import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/blog/BlogCard';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 10 Interview Tips for 2026",
      description: "Master your next interview with these proven strategies and expert advice.",
      image: "📝",
      source: "Internal Blog",
      link: "#",
      internalLink: "/blog/interview-tips",
      featured: true,
      author: "7 Twelve Team",
      date: "2026-01-25"
    },
    {
      id: 2,
      title: "How to Build a Winning Resume",
      description: "Learn the secrets to creating a resume that stands out from the crowd.",
      image: "📄",
      source: "Medium",
      link: "#",
      internalLink: "/blog/winning-resume",
      featured: false,
      author: "Career Expert",
      date: "2026-01-20"
    },
    {
      id: 3,
      title: "Remote Work Best Practices",
      description: "Tips and tools for maximizing productivity while working from home.",
      image: "💻",
      source: "LinkedIn",
      link: "#",
      internalLink: "/blog/remote-work",
      featured: true,
      author: "HR Professional",
      date: "2026-01-15"
    },
    {
      id: 4,
      title: "Navigating Career Transitions",
      description: "A comprehensive guide to successfully changing careers in today's market.",
      image: "🚀",
      source: "Internal Blog",
      link: "#",
      featured: false,
      author: "7 Twelve Team",
      date: "2026-01-10"
    },
    {
      id: 5,
      title: "Salary Negotiation Tactics",
      description: "Proven strategies to negotiate the salary you deserve.",
      image: "💰",
      source: "Instagram",
      link: "https://instagram.com",
      featured: false,
      author: "Negotiation Coach",
      date: "2026-01-05"
    },
    {
      id: 6,
      title: "Building Professional Networks",
      description: "How to expand and leverage your professional network effectively.",
      image: "🤝",
      source: "LinkedIn",
      link: "https://linkedin.com",
      featured: true,
      author: "Networking Expert",
      date: "2026-01-01"
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredBlogs = filter === 'all' 
    ? blogs 
    : filter === 'featured'
    ? blogs.filter(blog => blog.featured)
    : blogs.filter(blog => blog.source === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-alike font-bold text-[#161a5a] text-center mb-6"><span className="text-[#8b0000]">Blog</span> & Insights</h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-12 max-w-3xl mx-auto">
            Expert insights, career tips, and industry trends to help you succeed.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-raleway font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-[#161a5a] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-lg font-raleway font-medium transition-all ${
                filter === 'featured' 
                  ? 'bg-[#161a5a] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('Internal Blog')}
              className={`px-6 py-2 rounded-lg font-raleway font-medium transition-all ${
                filter === 'Internal Blog' 
                  ? 'bg-[#161a5a] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Internal
            </button>
            <button
              onClick={() => setFilter('Medium')}
              className={`px-6 py-2 rounded-lg font-raleway font-medium transition-all ${
                filter === 'Medium' 
                  ? 'bg-[#161a5a] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setFilter('LinkedIn')}
              className={`px-6 py-2 rounded-lg font-raleway font-medium transition-all ${
                filter === 'LinkedIn' 
                  ? 'bg-[#161a5a] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              LinkedIn
            </button>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-raleway text-lg">No blogs found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Blog CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] mb-6">Share Your Story</h2>
          <p className="text-lg text-gray-600 font-raleway mb-8">
            Have insights to share? Submit your blog and help others in their career journey.
          </p>
          <Link to="/submit-blog" className="inline-block px-8 py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all shadow-lg">
            Submit Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;