import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Recruitment Services",
      desc: "End-to-end hiring solutions helping companies find the right talent faster and more efficiently.",
      icon: "🎯",
      target: "Companies",
      features: [
        "Talent sourcing and screening",
        "Interview coordination",
        "Candidate assessment",
        "Offer negotiation support"
      ]
    },
    {
      title: "Job Advertising",
      desc: "Promote job openings to reach relevant candidates through targeted visibility.",
      icon: "📢",
      target: "Companies",
      features: [
        "Multi-platform job posting",
        "Targeted candidate reach",
        "Application tracking",
        "Performance analytics"
      ]
    },
    {
      title: "Candidate Profile Management",
      desc: "Structured collection and management of candidate profiles to enable faster matching with companies.",
      icon: "👤",
      target: "Platform",
      features: [
        "Profile verification",
        "Skill assessment",
        "Career counseling",
        "Resume optimization"
      ]
    },
    {
      title: "Employer Branding",
      desc: "Help companies showcase their culture, values, and opportunities to attract quality talent.",
      icon: "🏆",
      target: "Companies",
      features: [
        "Company profile creation",
        "Culture showcase",
        "Employee testimonials",
        "Brand promotion"
      ]
    },
    {
      title: "Talent Pool Access",
      desc: "Access a curated pool of verified candidate profiles based on role, skill, and experience.",
      icon: "💼",
      target: "Companies",
      features: [
        "Pre-screened candidates",
        "Skills-based matching",
        "Industry-specific talent",
        "Quick hiring process"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-alike font-bold text-[#161a5a] text-center mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-16 max-w-3xl mx-auto">
            Simple, effective solutions designed for hiring, job search, and brand growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-alike font-bold text-[#161a5a] mb-4">{service.title}</h3>
                <p className="text-gray-600 font-raleway mb-6 leading-relaxed">{service.desc}</p>
                
                <div className="mb-6">
                  <h4 className="font-raleway font-semibold text-[#8b0000] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#161a5a] mt-1">•</span>
                        <span className="text-gray-600 font-raleway text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-raleway text-gray-500">For {service.target}</span>
                  <button className="px-4 py-2 bg-[#8b0000] text-white font-raleway rounded-lg hover:bg-[#6d0000] transition-all text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 font-raleway mb-8">
            Whether you're looking for talent or seeking opportunities, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/for-candidates" className="px-8 py-4 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all">
              I'm a Candidate
            </a>
            <a href="/for-companies" className="px-8 py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all">
              I'm a Company
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;