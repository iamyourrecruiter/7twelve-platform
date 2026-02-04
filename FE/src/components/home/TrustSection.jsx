import React from 'react';

const TrustSection = () => {
  return (
    <section className="pt-2 py-12 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="text-4xl font-alike font-bold text-[#161a5a] mb-1">
              500+
            </div>
            <p className="text-sm text-gray-600 font-raleway">
              Companies Trust Us
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="text-4xl font-alike font-bold text-[#8b0000] mb-1">
              5000+
            </div>
            <p className="text-sm text-gray-600 font-raleway">
              Candidates Placed
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="text-4xl font-alike font-bold text-[#161a5a] mb-1">
              98%
            </div>
            <p className="text-sm text-gray-600 font-raleway">
              Success Rate
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
