import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdSlider from './AdSlider';

const words = ["Job Search", "Advertising", "Recruitment"];

const TYPING_SPEED = 80;
const DELETING_SPEED = 80;
const PAUSE_AFTER_TYPING = 800;
const PAUSE_AFTER_DELETING = 300;

const HeroSection = () => {
  const navigate = useNavigate();

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    // ✍️ Typing
    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
      } else {
        // ⏸️ Pause after full word
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPING);
      }
    }

    // ⌫ Deleting
    else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, DELETING_SPEED);
      } else {
        // ⏸️ Pause before next word
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, PAUSE_AFTER_DELETING);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="pt-24 pb-0 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="h-16 mb-2 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-alike font-bold text-[#8b0000]">
              <span className="inline-block min-w-[200px] text-right">
                {displayText}
              </span>
              <span className="ml-2 text-[#162a5a]">Made Simple</span>
            </h1>
          </div>

          <p className="text-lg text-gray-600 font-raleway mb-6">
            One platform connecting talent and companies with speed, simplicity, and smart solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => navigate('/for-candidates')}
              className="px-8 py-3 bg-[#161a5a] text-white font-semibold rounded-lg"
            >
              I'm a Candidate
            </button>
            <button
              onClick={() => navigate('/for-companies')}
              className="px-8 py-3 bg-[#8b0000] text-white font-semibold rounded-lg"
            >
              I'm a Company
            </button>
          </div>
        </div>

        <AdSlider />
      </div>
    </section>
  );
};

export default HeroSection;
