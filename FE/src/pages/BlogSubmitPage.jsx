import React, { useState } from 'react';
import BlogSubmitForm from '../components/forms/BlogSubmitForm';

const BlogSubmitPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Blog submitted:', formData);
    setIsSubmitted(true);
    // TODO: Send to API
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-lg">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-4">Blog Submitted Successfully!</h2>
          <p className="text-gray-600 font-raleway mb-8">
            Thank you for your contribution! Our team will review your blog and get back to you shortly.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all"
            >
              Submit Another Blog
            </button>
            <a
              href="/blog"
              className="px-8 py-3 bg-white border-2 border-[#161a5a] text-[#161a5a] font-raleway font-semibold rounded-lg hover:bg-gray-50 transition-all"
            >
              View All Blogs
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-6">Submit Your Blog</h1>
          <p className="text-lg text-gray-600 font-raleway text-center mb-12">
            Share your knowledge and experiences with our community
          </p>

          <BlogSubmitForm onSubmit={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default BlogSubmitPage;