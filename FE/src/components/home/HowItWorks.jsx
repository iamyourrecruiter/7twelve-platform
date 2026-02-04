import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">For Candidates</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#161a5a] text-white rounded-full flex items-center justify-center font-alike font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-raleway font-semibold text-lg mb-1">Discover Opportunities</h4>
                  <p className="text-gray-600 font-raleway">Browse through curated job listings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#161a5a] text-white rounded-full flex items-center justify-center font-alike font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-raleway font-semibold text-lg mb-1">Apply Effortlessly</h4>
                  <p className="text-gray-600 font-raleway">Simple application process</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#161a5a] text-white rounded-full flex items-center justify-center font-alike font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-raleway font-semibold text-lg mb-1">Get Hired Faster</h4>
                  <p className="text-gray-600 font-raleway">Direct connection with employers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-alike font-bold text-[#8b0000] mb-6">For Companies</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8b0000] text-white rounded-full flex items-center justify-center font-alike font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-raleway font-semibold text-lg mb-1">Post Jobs or Advertise</h4>
                  <p className="text-gray-600 font-raleway">Share your requirements easily</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8b0000] text-white rounded-full flex items-center justify-center font-alike font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-raleway font-semibold text-lg mb-1">Reach the Right Talent</h4>
                  <p className="text-gray-600 font-raleway">Access verified candidate profiles</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#8b0000] text-white rounded-full flex items-center justify-center font-alike font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-raleway font-semibold text-lg mb-1">Hire Efficiently</h4>
                  <p className="text-gray-600 font-raleway">Streamlined hiring process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;