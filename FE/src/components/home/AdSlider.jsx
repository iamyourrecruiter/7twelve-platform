import React, { useState, useEffect } from 'react';

const AdSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dummyAds = [
    { id: 1, title: "Ad 1", bgColor: "from-purple-500 to-pink-500" },
    { id: 2, title: "Ad 2", bgColor: "from-blue-500 to-cyan-500" },
    { id: 3, title: "Ad 3", bgColor: "from-green-500 to-emerald-500" },
    { id: 4, title: "Ad 4", bgColor: "from-orange-500 to-red-500" },
    { id: 5, title: "Ad 5", bgColor: "from-indigo-500 to-purple-500" },
    { id: 6, title: "Ad 6", bgColor: "from-yellow-500 to-orange-500" },
    { id: 7, title: "Ad 7", bgColor: "from-rose-500 to-pink-500" }
  ];

  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % dummyAds.length);
      }, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [isPaused]);

  return (
    <div className="relative mb-4">
      <div className="overflow-hidden rounded-xl shadow-xl">
        <div className="relative h-50 sm:h-56 md:h-60 flex">
          {dummyAds.map((ad, index) => (
            <div
              key={ad.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${ad.bgColor} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-raleway font-bold mb-2">{ad.title}</h3>
                  <p className="text-base font-raleway">Advertisement Content Here</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/90 text-gray-800 font-raleway text-sm rounded-lg hover:bg-white transition-all shadow-lg"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
      <div className="flex justify-center mt-3 space-x-2">
        {dummyAds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#161a5a] w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdSlider;