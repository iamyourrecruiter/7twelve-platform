import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Name *</label>
        <input 
          type="text" 
          name="name"
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Email *</label>
        <input 
          type="email" 
          name="email"
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Subject *</label>
        <input 
          type="text" 
          name="subject"
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-raleway font-medium mb-2">Message *</label>
        <textarea 
          name="message"
          rows="6" 
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="w-full py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all text-lg shadow-lg">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;