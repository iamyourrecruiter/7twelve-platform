import React from 'react';

const AdCards = () => {
  // TODO: Fetch from API - Admin managed
  const adCards = [
    {
      id: 1,
      imageUrl: "/ads/card1.jpg",
      linkType: "whatsapp", // or "website"
      link: "https://wa.me/919876543210",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      imageUrl: "/ads/card2.jpg",
      linkType: "website",
      link: "https://example.com",
      bgColor: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      imageUrl: "/ads/card3.jpg",
      linkType: "whatsapp",
      link: "https://wa.me/919876543211",
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      imageUrl: "/ads/card4.jpg",
      linkType: "website",
      link: "https://example2.com",
      bgColor: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      imageUrl: "/ads/card5.jpg",
      linkType: "whatsapp",
      link: "https://wa.me/919876543212",
      bgColor: "from-indigo-500 to-purple-500"
    }
  ];

  const handleConnect = (card) => {
    window.open(card.link, '_blank');
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {adCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image/Gradient Placeholder */}
              <div className={`h-40 bg-gradient-to-br ${card.bgColor} flex items-center justify-center`}>
                {card.imageUrl ? (
                  <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white text-center p-4">
                    <h3 className="text-2xl font-raleway font-bold">{card.title}</h3>
                  </div>
                )}
              </div>
              
              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-raleway font-bold text-[#161a5a] mb-2">{card.title}</h3>
                <p className="text-gray-600 font-raleway text-sm mb-4">{card.description}</p>
                
                <button
                  onClick={() => handleConnect(card)}
                  className="w-full py-2 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all flex items-center justify-center space-x-2"
                >
                  {card.linkType === 'whatsapp' ? (
                    <>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-raleway">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <g fillRule="evenodd">
                            <path d="M1.5 7a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H8.167L4.3 20.4a.5.5 0 0 1-.8-.4v-2.5H2a.5.5 0 0 1-.5-.5V7Zm1 .5v9H4a.5.5 0 0 1 .5.5v2l3.2-2.4a.5.5 0 0 1 .3-.1h7.5v-9h-13Z" />
                            <path d="M23 4a.5.5 0 0 0-.5-.5h-14A.5.5 0 0 0 8 4v3h1V4.5h13v9h-1.5a.5.5 0 0 0-.5.5v2l-3.2-2.4a.5.5 0 0 0-.6.8l4 3a.5.5 0 0 0 .8-.4v-2.5h1.5a.5.5 0 0 0 .5-.5V4ZM4.5 10.5A.5.5 0 0 1 5 10h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5ZM4.5 13.5A.5.5 0 0 1 5 13h7a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z" />
                            </g>
                        </svg>

                        </span>
                      <span>Connect Now</span>
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-raleway">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <g fillRule="evenodd">
                            <path d="M9.142 4.898C8.295 6.677 7.75 9.187 7.75 12c0 2.813.545 5.323 1.392 7.102.873 1.835 1.934 2.648 2.858 2.648.924 0 1.985-.813 2.858-2.648.847-1.779 1.392-4.289 1.392-7.102 0-2.813-.545-5.323-1.392-7.102C13.985 3.063 12.924 2.25 12 2.25c-.924 0-1.985.813-2.858 2.648Zm-1.355-.645C8.723 2.287 10.163.75 12 .75c1.837 0 3.277 1.537 4.213 3.503.962 2.021 1.537 4.761 1.537 7.747 0 2.986-.575 5.726-1.537 7.747-.936 1.966-2.376 3.503-4.213 3.503-1.837 0-3.277-1.537-4.213-3.503C6.825 17.726 6.25 14.986 6.25 12c0-2.986.575-5.726 1.537-7.747Z" />
                            <path d="M1.25 9A.75.75 0 0 1 2 8.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9ZM1.25 15a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" />
                            <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM.75 12C.75 5.787 5.787.75 12 .75S23.25 5.787 23.25 12 18.213 23.25 12 23.25.75 18.213.75 12Z" />
                            </g>
                        </svg>
                        </span>
                      <span>Visit Website</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdCards;