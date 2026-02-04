import React from 'react';

const HeroAdCards = () => {
  // TODO: Fetch from API
  const heroAds = [
    {
      id: 1,
      title: "Featured Partner 1",
      description: "Exclusive partnership opportunity",
      imageUrl: "/hero-ads/ad1.jpg",
      link: "https://example1.com",
      bgColor: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Featured Partner 2",
      description: "Premium services available",
      imageUrl: "/hero-ads/ad2.jpg",
      link: "https://example2.com",
      bgColor: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Featured Partner 3",
      description: "Special offers this month",
      imageUrl: "/hero-ads/ad3.jpg",
      link: "https://example3.com",
      bgColor: "from-green-600 to-teal-600"
    },
    {
      id: 4,
      title: "Featured Partner 4",
      description: "Join our network today",
      imageUrl: "/hero-ads/ad4.jpg",
      link: "https://example4.com",
      bgColor: "from-orange-600 to-red-600"
    }
  ];

  const handleCardClick = (ad) => {
    window.open(ad.link, '_blank');
  };

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {heroAds.map((ad) => (
            <div
              key={ad.id}
              onClick={() => handleCardClick(ad)}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer group"
              style={{ aspectRatio: '16/4' }}
            >
              {/* Background Image or Gradient */}
              {ad.imageUrl ? (
                <img 
                  src={ad.imageUrl} 
                  alt={ad.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              
              {/* Gradient Fallback */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${ad.bgColor} ${ad.imageUrl ? 'hidden' : 'flex'} items-center justify-center`}
              >
                <div className="text-center text-white p-6">
                  <h3 className="text-2xl font-raleway font-bold mb-2">{ad.title}</h3>
                  <p className="font-raleway">{ad.description}</p>
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroAdCards;