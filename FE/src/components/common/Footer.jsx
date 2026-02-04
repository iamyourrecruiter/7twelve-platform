import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#161a5a] to-[#0d0f3a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img
                    src="/logo.png"
                    alt="7T Logo"
                    className="h-7 w-auto"
                />
              </div>
              <span className="text-xl font-alike font-bold">7 Twelve</span>
            </div>
            <p className="text-gray-300 font-raleway text-sm">
              Simplifying careers, hiring, and growth for everyone.
            </p>
            <div className="flex items-center gap-4 mt-4">
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/_7twelve_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-gray-300 hover:text-white transition-transform hover:scale-110"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    >
                    <path d="M19.25 24H4.75A4.756 4.756 0 0 1 0 19.25V4.75A4.756 4.756 0 0 1 4.75 0h14.5A4.756 4.756 0 0 1 24 4.75v14.5A4.756 4.756 0 0 1 19.25 24zM4.75 1.5A3.254 3.254 0 0 0 1.5 4.75v14.5a3.254 3.254 0 0 0 3.25 3.25h14.5a3.254 3.254 0 0 0 3.25-3.25V4.75a3.254 3.254 0 0 0-3.25-3.25z"/>
                    <path d="M12 18.13c-3.38 0-6.13-2.75-6.13-6.13S8.62 5.87 12 5.87s6.13 2.75 6.13 6.13-2.75 6.13-6.13 6.13zm0-10.76c-2.553 0-4.63 2.077-4.63 4.63s2.077 4.63 4.63 4.63 4.63-2.077 4.63-4.63S14.553 7.37 12 7.37z"/>
                    <path d="M18.359 7.37a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46z"/>
                    </svg>
                </a>

                {/* Youtube */}
                <a
                href="https://www.youtube.com/@admin_channel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-300 hover:text-white transition-transform hover:scale-110"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                >
                    <g fillRule="evenodd">
                    <path d="M12 4.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Zm-1.614 4.107A.75.75 0 0 0 9.25 9v6a.75.75 0 0 0 1.136.643l5-3a.75.75 0 0 0 0-1.286l-5-3Z" />
                    <path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z" />
                    </g>
                </svg>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/company/7twelve/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-300 hover:text-white transition-transform hover:scale-110"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    >
                    <path d="M23.245 24H18.59a.75.75 0 0 1-.75-.75v-7.312c0-2.232-.242-3.228-1.675-3.228-1.296 0-2.046.507-2.046 3.102v7.438a.75.75 0 0 1-.75.75h-4.66a.75.75 0 0 1-.75-.75V8.228a.75.75 0 0 1 .75-.75h4.474a.75.75 0 0 1 .75.75v.12c.902-.709 2.155-1.247 3.729-1.247 5.618 0 6.338 4.22 6.338 7.896v8.252a.75.75 0 0 1-.75.75z"/>
                    <path d="M5.787 24H1.122a.75.75 0 0 1-.75-.75V8.229a.75.75 0 0 1 .75-.75h4.665a.75.75 0 0 1 .75.75V23.25a.75.75 0 0 1-.75.75z"/>
                    <path d="M3.452 6.929A3.456 3.456 0 0 1 0 3.452 3.456 3.456 0 0 1 3.452 0a3.456 3.456 0 0 1 3.451 3.452c0 1.917-1.549 3.477-3.451 3.477z"/>
                    </svg>
                </a>
                </div>



          </div>
          
          <div>
            <h3 className="font-raleway text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-raleway">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-raleway text-lg font-bold mb-4">For You</h3>
            <ul className="space-y-2 font-raleway">
              <li><Link to="/for-candidates" className="text-gray-300 hover:text-white transition-colors">For Candidates</Link></li>
              <li><Link to="/for-companies" className="text-gray-300 hover:text-white transition-colors">For Companies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-raleway text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 font-raleway text-gray-300">
              <li>Email: info@7twelve.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-gray-300 font-raleway text-sm">
            © 2026 7 Twelve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;