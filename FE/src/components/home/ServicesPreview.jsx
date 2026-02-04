import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    { title: "Recruitment Services", desc: "End-to-end hiring solutions" },
    { title: "Job Advertising", desc: "Promote job openings effectively" },
    { title: "Employer Branding", desc: "Showcase your company culture" },
    { title: "Talent Solutions", desc: "Access verified talent pool" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 font-raleway mb-12 text-lg">
          Simple, effective solutions designed for hiring, job search, and brand growth.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#161a5a] to-[#8b0000] rounded-lg mb-4 flex items-center justify-center text-white font-alike text-xl group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <h3 className="text-xl font-alike font-bold text-[#161a5a] mb-2">{service.title}</h3>
              <p className="text-gray-600 font-raleway text-sm mb-4">{service.desc}</p>
              <Link to="/services" className="text-[#8b0000] font-raleway font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;