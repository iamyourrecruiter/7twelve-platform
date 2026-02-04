import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const topmateUrl = "https://topmate.io/jdemanuvel";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
            <img
                src="/logo.png"
                alt="7 Twelve Logo"
                className="w-full h-full object-contain p-0.5"
            />
        </div>


          <span className="text-2xl font-alike font-bold text-[#161a5a]">
            7 Twelve
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`font-raleway font-medium transition-colors ${
            isActive('/') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Home</Link>

          <Link to="/about" className={`font-raleway font-medium transition-colors ${
            isActive('/about') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>About Us</Link>

          <Link to="/for-candidates" className={`font-raleway font-medium transition-colors ${
            isActive('/for-candidates') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>For Candidates</Link>

          <Link to="/for-companies" className={`font-raleway font-medium transition-colors ${
            isActive('/for-companies') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>For Companies</Link>

         {/* <Link to="/services" className={`font-raleway font-medium transition-colors ${
            isActive('/services') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Services</Link>*/}

          <Link to="/blog" className={`font-raleway font-medium transition-colors ${
            isActive('/blog') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Blog</Link>
          <Link to="/market" className={`font-raleway font-medium transition-colors ${
            isActive('/market') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Market</Link>
          <Link to="/jobs" className={`font-raleway font-medium transition-colors ${
            isActive('/jobs') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Jobs</Link>
        </nav>

        {/* CTA Button */}
        <a
          href={topmateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2.5 bg-[#8b0000] text-white font-raleway font-medium rounded-lg hover:bg-[#6d0000] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Speak to Mentor
        </a>

      </div>
    </header>
  );
};

export default Header;
