import React from 'react';

const PartnersSection = () => {
  const dummyPartners = [
  { id: 1, name: "Partner 1", logo: "/partners/partner1.png" },
  { id: 2, name: "Partner 2", logo: "/partners/partner2.png" },
  { id: 3, name: "Partner 3", logo: "/partners/partner3.png" },
  { id: 4, name: "Partner 4", logo: "/partners/partner4.png" },
  { id: 5, name: "Partner 5", logo: "/partners/partner5.png" },
  { id: 6, name: "Partner 6", logo: "/partners/partner6.png" },
  { id: 7, name: "Partner 7", logo: "/partners/partner7.png" },
  { id: 8, name: "Partner 8", logo: "/partners/partner8.png" },
  { id: 9, name: "Partner 9", logo: "/partners/partner9.png" },
  { id: 10, name: "Partner 10", logo: "/partners/partner10.png" },
  { id: 11, name: "Partner 11", logo: "/partners/partner11.png" },
  { id: 12, name: "Partner 12", logo: "/partners/partner12.png" },
  { id: 13, name: "Partner 13", logo: "/partners/partner13.png" },
  { id: 14, name: "Partner 14", logo: "/partners/partner14.png" },
  { id: 15, name: "Partner 15", logo: "/partners/partner15.png" },
];

  return (
    <section className="pt-6 py-16 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-raleway font-bold text-[#161a5a] text-center mb-8 -mt-2">Trusted by</h2>
        <div className="relative">
          <div className="flex w-max animate-scroll-fast space-x-6">
            {[...dummyPartners, ...dummyPartners, ...dummyPartners].map((partner, index) => (
              <div
                className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                bg-white rounded-full flex items-center justify-center 
                grayscale hover:grayscale-0 transition-all duration-300 
                cursor-pointer group shadow-lg overflow-hidden">
                <img
                src={partner.logo}
                alt={partner.name}
                className="
                    w-[70%] h-[70%] object-contain 
                    transition-transform duration-300 ease-out
                    group-hover:scale-125
                "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;