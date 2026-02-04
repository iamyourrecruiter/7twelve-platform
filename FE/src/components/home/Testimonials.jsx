import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Abhinav Gorantla",
      role: "Digital Performance Manager",
      text: "Emanuvel is a LinkedIn expert and a great communicator. His guidance helped our business improve visibility and results."
    },
    {
      id: 2,
      name: "Monisha B",
      role: "Marketing Executive",
      text: "I was overwhelmed in my job search, but Jayadasan Emanuvel guided me step-bystep. I landed my job in less than 15 days."
    },
    {
      id: 3,
      name: "Safiya Pendhari",
      role: "Software Engineer",
      text: "The consultation was eye-opening. I learned how to build my CV and turn LinkedIn into a real professional website."
    },
    {
      id: 4,
      name: "Sam Noronha",
      role: "Pharmacist",
      text: "Emanuvel optimized my LinkedIn in less than a month. My visibility improved and opportunities started coming in."
    },
    {
      id: 5,
      name: "Vida Mateko Azietaku",
      role: "Executive Assistant",
      text: "Emanuvel is a LinkedIn expert and a great communicator. His guidance helped our business improve visibility and results."
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
        <section className="pt-0.5 py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-raleway font-bold text-[#161a5a] text-center mb-6">
          What Our Users Say
        </h2>

        <div className="relative">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-md">
                   <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#161a5a] to-[#8b0000] rounded-full flex items-center justify-center text-xl mr-3">
                    {testimonial.image}
                </div>

                    <div>
                        <h4 className="font-raleway font-semibold text-base text-[#161a5a]">
                        {testimonial.name}
                        </h4>
                        <p className="font-raleway text-gray-600 text-xs">
                        {testimonial.role}
                        </p>
                        <p className="font-raleway text-gray-500 text-[11px]">
                        {testimonial.company}
                        </p>
                    </div>
                    </div>

                    <p className="font-raleway text-gray-700 text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-[#161a5a] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;