import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
// Import other pages as they are created

// Import Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Alike&family=Raleway:wght@300;400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Header Component
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#161a5a] to-[#8b0000] rounded-lg flex items-center justify-center">
            <span className="text-white font-alike text-xl font-bold">7T</span>
          </div>
          <span className="text-2xl font-alike font-bold text-[#161a5a]">7 Twelve</span>
        </Link>
        
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
          <Link to="/services" className={`font-raleway font-medium transition-colors ${
            isActive('/services') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Services</Link>
          <Link to="/blog" className={`font-raleway font-medium transition-colors ${
            isActive('/blog') ? 'text-[#161a5a]' : 'text-gray-600 hover:text-[#161a5a]'
          }`}>Blog</Link>
        </nav>
        
        <Link to="/contact" className="hidden md:block px-6 py-2.5 bg-[#8b0000] text-white font-raleway font-medium rounded-lg hover:bg-[#6d0000] transition-all duration-300 shadow-md hover:shadow-lg">
          Contact Us
        </Link>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#161a5a] to-[#0d0f3a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#161a5a] font-alike text-lg font-bold">7T</span>
              </div>
              <span className="text-xl font-alike font-bold">7 Twelve</span>
            </div>
            <p className="text-gray-300 font-raleway text-sm">
              Simplifying careers, hiring, and growth for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="font-alike text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-raleway">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-alike text-lg font-bold mb-4">For You</h3>
            <ul className="space-y-2 font-raleway">
              <li><Link to="/for-candidates" className="text-gray-300 hover:text-white transition-colors">For Candidates</Link></li>
              <li><Link to="/for-companies" className="text-gray-300 hover:text-white transition-colors">For Companies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-alike text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 font-raleway text-gray-300">
              <li>Location: India</li>
              <li>Email: info@7twelve.com</li>
              <li>Phone: +91 XXX XXX XXXX</li>
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

// Home Page Component
const HomePage = () => {
  const [currentText, setCurrentText] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const heroTexts = [
    "Job Search, Made Simple",
    "Advertising, Made Simple",
    "Recruitment, Made Simple"
  ];

  const dummyAds = [
    { id: 1, title: "Ad 1", bgColor: "from-purple-500 to-pink-500" },
    { id: 2, title: "Ad 2", bgColor: "from-blue-500 to-cyan-500" },
    { id: 3, title: "Ad 3", bgColor: "from-green-500 to-emerald-500" },
    { id: 4, title: "Ad 4", bgColor: "from-orange-500 to-red-500" },
    { id: 5, title: "Ad 5", bgColor: "from-indigo-500 to-purple-500" },
    { id: 6, title: "Ad 6", bgColor: "from-yellow-500 to-orange-500" },
    { id: 7, title: "Ad 7", bgColor: "from-rose-500 to-pink-500" }
  ];

  const dummyPartners = [
    { id: 1, name: "Partner 1" },
    { id: 2, name: "Partner 2" },
    { id: 3, name: "Partner 3" },
    { id: 4, name: "Partner 4" },
    { id: 5, name: "Partner 5" },
    { id: 6, name: "Partner 6" }
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 2500);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % dummyAds.length);
      }, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-24 mb-6 flex items-center justify-center">
            <h1 className="text-6xl md:text-7xl font-alike font-bold text-[#161a5a] animate-fade-in">
              {heroTexts[currentText]}
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-raleway mb-12 max-w-3xl mx-auto">
            One platform connecting talent and companies with speed, simplicity, and smart solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => navigate('/for-candidates')}
              className="px-10 py-4 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              I'm a Candidate
            </button>
            <button 
              onClick={() => navigate('/for-companies')}
              className="px-10 py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              I'm a Company
            </button>
          </div>
        </div>
      </section>

      {/* Advertisement Sliders */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-12">Featured Opportunities</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96">
                {dummyAds.map((ad, index) => (
                  <div
                    key={ad.id}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${ad.bgColor} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <h3 className="text-5xl font-alike font-bold mb-4">{ad.title}</h3>
                        <p className="text-xl font-raleway">Advertisement Content Here</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 text-gray-800 font-raleway rounded-lg hover:bg-white transition-all shadow-lg"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {dummyAds.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-[#161a5a] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl font-alike font-bold text-[#161a5a] mb-2">500+</div>
              <p className="text-gray-600 font-raleway">Companies Trust Us</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl font-alike font-bold text-[#8b0000] mb-2">5000+</div>
              <p className="text-gray-600 font-raleway">Candidates Placed</p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl font-alike font-bold text-[#161a5a] mb-2">98%</div>
              <p className="text-gray-600 font-raleway">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 font-raleway mb-12 text-lg">
            Simple, effective solutions designed for hiring, job search, and brand growth.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Recruitment Services", desc: "End-to-end hiring solutions" },
              { title: "Job Advertising", desc: "Promote job openings effectively" },
              { title: "Employer Branding", desc: "Showcase your company culture" },
              { title: "Talent Solutions", desc: "Access verified talent pool" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#161a5a] to-[#8b0000] rounded-lg mb-4 flex items-center justify-center text-white font-alike text-xl group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-xl font-alike font-bold text-[#161a5a] mb-2">{service.title}</h3>
                <p className="text-gray-600 font-raleway text-sm mb-4">{service.desc}</p>
                <Link to="/services" className="text-[#8b0000] font-raleway font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-12">Our Partners</h2>
          <div className="relative">
            <div className="flex animate-scroll space-x-12">
              {[...dummyPartners, ...dummyPartners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group"
                >
                  <span className="font-alike font-bold text-2xl text-gray-600 group-hover:text-[#161a5a]">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-alike font-bold text-[#161a5a] text-center mb-8 animate-fade-in">
            We Simplify Careers, Hiring, and Growth — For Everyone
          </h1>
          <p className="text-xl text-gray-600 font-raleway text-center leading-relaxed mb-16">
            In a world where job searching is overwhelming and hiring is time-consuming, we decided to change the way talent and companies connect. Our platform is built to remove complexity, save time, and create meaningful opportunities — for candidates and companies alike.
          </p>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] mb-6">Our Motto</h2>
          <div className="text-5xl font-alike font-bold text-[#8b0000] mb-6">"Make It Simple."</div>
          <p className="text-lg text-gray-600 font-raleway">
            Whether it's job search, recruitment, or advertising, our focus is simple experiences, smarter processes, and better outcomes.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">Our Vision</h2>
            <p className="text-gray-600 font-raleway leading-relaxed text-lg">
              To become the most trusted and simple career and recruitment platform, empowering individuals and organizations to grow together.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-alike font-bold text-[#8b0000] mb-6">Our Mission</h2>
            <p className="text-gray-600 font-raleway leading-relaxed text-lg">
              Our mission is to bridge the gap between talent and opportunity by creating a platform that is fast, transparent, and focused on real results — not complexity.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-12">Why We Exist</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "We focus on clarity over clutter",
              "We value people before processes",
              "We believe hiring and job search should be human, not frustrating",
              "We design solutions that actually work in the real world"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="w-8 h-8 bg-[#161a5a] text-white rounded-full flex items-center justify-center flex-shrink-0 font-alike">✓</div>
                <p className="text-gray-700 font-raleway font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-6">What We Do</h2>
          <p className="text-center text-gray-600 font-raleway mb-12 text-lg max-w-3xl mx-auto">
            We provide end-to-end solutions designed to simplify job search, recruitment, and business visibility. Our services are crafted to serve both candidates and companies with efficiency and impact.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Recruitment Solutions", desc: "Helping companies hire the right talent faster through smart and structured hiring solutions." },
              { title: "Job Advertising", desc: "Promote job opportunities and reach the right audience with targeted visibility." },
              { title: "Candidate Opportunities", desc: "Providing candidates with access to relevant roles and simplified application processes." },
              { title: "Employer Branding", desc: "Helping companies showcase their culture and values to attract quality talent." }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{['🎯', '📢', '💼', '🏆'][index]}</div>
                <h3 className="text-xl font-alike font-bold text-[#161a5a] mb-3">{service.title}</h3>
                <p className="text-gray-600 font-raleway text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-12">Meet the Founder</h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <div className="w-40 h-40 bg-gradient-to-br from-[#161a5a] to-[#8b0000] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-6xl font-alike">
              F
            </div>
            <h3 className="text-2xl font-alike font-bold text-[#161a5a] mb-2">Founder Name</h3>
            <p className="text-[#8b0000] font-raleway font-medium mb-4">Founder & CEO</p>
            <p className="text-gray-600 font-raleway leading-relaxed">
              Driven by a passion to simplify hiring and job search, the founder brings together technology, strategy, and people-first thinking to build solutions that truly matter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// For Candidates Page Component
const ForCandidatesPage = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', age: '', gender: '',
    country: '', state: '', city: '', relocate: '',
    qualification: '', stream: '', experience: '', currentRole: '',
    skills: [], resume: null, jobType: '', salary: '', noticePeriod: '', summary: ''
  });

  const [phoneCode, setPhoneCode] = useState('+91');

  const countries = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile submitted successfully! Our team will review it and connect you with suitable opportunities.');
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-6">
            Join Our Talent Network
          </h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-12">
            Submit your profile and get connected with exciting opportunities
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-8">
            {/* Personal Details */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Personal Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway" 
                    value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Phone Number *</label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                      value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
                      {countries.map(c => <option key={c.code} value={c.code}>{c.code} ({c.name})</option>)}
                    </select>
                    <input type="tel" required className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Age *</label>
                  <input type="number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] focus:border-transparent font-raleway"
                    value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Gender</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Location</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Country *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}>
                    <option value="">Select Country</option>
                    {countries.map(c => <option key={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">State *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">City *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Professional Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Highest Qualification *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.qualification} onChange={(e) => setFormData({...formData, qualification: e.target.value})}>
                    <option value="">Select</option>
                    <option>Graduate</option>
                    <option>Postgraduate</option>
                    <option>Diploma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Stream/Field *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.stream} onChange={(e) => setFormData({...formData, stream: e.target.value})}>
                    <option value="">Select</option>
                    <option>IT/Software</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Years of Experience *</label>
                  <input type="number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Upload Resume (PDF) *</label>
                  <input type="file" accept=".pdf,.doc,.docx" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                    onChange={(e) => setFormData({...formData, resume: e.target.files[0]})} />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all text-lg shadow-lg">
              Submit Profile
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// For Companies Page Component
const ForCompaniesPage = () => {
  const [formData, setFormData] = useState({
    companyName: '', email: '', phone: '', website: '',
    country: '', state: '', city: '',
    companyType: '', companySize: '',
    services: [],
    roles: '', positions: '', experienceLevel: '', timeline: '',
    brandingObjective: '', platforms: '', campaignDuration: '',
    budget: '', decisionTimeline: '',
    contactPerson: '', designation: '', preferredContact: '',
    message: ''
  });

  const [phoneCode, setPhoneCode] = useState('+91');

  const countries = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Company details submitted successfully! Our team will review and get back to you soon.');
    console.log(formData);
  };

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-12">
            Let's work together to build your team and brand
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-8">
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Company Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Official Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Phone Number *</label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                      value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}>
                      {countries.map(c => <option key={c.code} value={c.code}>{c.code} ({c.name})</option>)}
                    </select>
                    <input type="tel" required className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Company Website *</label>
                  <input type="url" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.website} onChange={(e) => setFormData({...formData, website: e.target.value})} />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Location</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Country *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})}>
                    <option value="">Select Country</option>
                    {countries.map(c => <option key={c.name}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">State *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">City *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
              </div>
            </div>

            {/* Company Profile */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Company Profile</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Company Type *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.companyType} onChange={(e) => setFormData({...formData, companyType: e.target.value})}>
                    <option value="">Select</option>
                    <option>Startup</option>
                    <option>SME</option>
                    <option>Enterprise</option>
                    <option>Agency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Company Size *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.companySize} onChange={(e) => setFormData({...formData, companySize: e.target.value})}>
                    <option value="">Select</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Services Interested In *</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {['Recruitment/Hiring', 'Job Advertising', 'Employer Branding', 'Talent Pool Access', 'End-to-End Hiring Support'].map(service => (
                  <label key={service} className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" checked={formData.services.includes(service)} onChange={() => toggleService(service)}
                      className="w-5 h-5 text-[#8b0000] focus:ring-[#8b0000]" />
                    <span className="font-raleway">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Contact Person */}
            <div>
              <h2 className="text-2xl font-alike font-bold text-[#161a5a] mb-6">Contact Person</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-raleway font-medium mb-2">Designation *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                    value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Additional Requirements</label>
              <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b0000] font-raleway"
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            </div>

            <button type="submit" className="w-full py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all text-lg shadow-lg">
              Submit Company Details
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Services Page Component
const ServicesPage = () => {
  const services = [
    {
      title: "Recruitment Services",
      desc: "End-to-end hiring solutions helping companies find the right talent faster and more efficiently.",
      icon: "🎯",
      target: "Companies"
    },
    {
      title: "Job Advertising",
      desc: "Promote job openings to reach relevant candidates through targeted visibility.",
      icon: "📢",
      target: "Companies"
    },
    {
      title: "Candidate Profile Management",
      desc: "Structured collection and management of candidate profiles to enable faster matching with companies.",
      icon: "👤",
      target: "Platform"
    },
    {
      title: "Employer Branding",
      desc: "Help companies showcase their culture, values, and opportunities to attract quality talent.",
      icon: "🏆",
      target: "Companies"
    },
    {
      title: "Talent Pool Access",
      desc: "Access a curated pool of verified candidate profiles based on role, skill, and experience.",
      icon: "💼",
      target: "Companies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-alike font-bold text-[#161a5a] text-center mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-16 max-w-3xl mx-auto">
            Simple, effective solutions designed for hiring, job search, and brand growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-alike font-bold text-[#161a5a] mb-4">{service.title}</h3>
                <p className="text-gray-600 font-raleway mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-raleway text-gray-500">For {service.target}</span>
                  <button className="px-4 py-2 bg-[#8b0000] text-white font-raleway rounded-lg hover:bg-[#6d0000] transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog Page Component
const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Top 10 Interview Tips for 2026",
      description: "Master your next interview with these proven strategies and expert advice.",
      image: "📝",
      source: "Internal Blog",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "How to Build a Winning Resume",
      description: "Learn the secrets to creating a resume that stands out from the crowd.",
      image: "📄",
      source: "Medium",
      link: "#",
      featured: false
    },
    {
      id: 3,
      title: "Remote Work Best Practices",
      description: "Tips and tools for maximizing productivity while working from home.",
      image: "💻",
      source: "LinkedIn",
      link: "#",
      featured: true
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-alike font-bold text-[#161a5a] text-center mb-6">Blog & Insights</h1>
          <p className="text-xl text-gray-600 font-raleway text-center mb-16 max-w-3xl mx-auto">
            Expert insights, career tips, and industry trends to help you succeed.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden ${
                blog.featured ? 'ring-2 ring-[#8b0000]' : ''
              }`}>
                <div className="h-48 bg-gradient-to-br from-[#161a5a] to-[#8b0000] flex items-center justify-center text-8xl">
                  {blog.image}
                </div>
                <div className="p-6">
                  {blog.featured && (
                    <span className="inline-block px-3 py-1 bg-[#8b0000] text-white text-xs font-raleway rounded-full mb-3">Featured</span>
                  )}
                  <h3 className="text-2xl font-alike font-bold text-[#161a5a] mb-3">{blog.title}</h3>
                  <p className="text-gray-600 font-raleway mb-4">{blog.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-raleway text-gray-500">{blog.source}</span>
                    <a href={blog.link} className="px-4 py-2 bg-[#161a5a] text-white font-raleway rounded-lg hover:bg-[#0d0f3a] transition-all">
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Submission Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-alike font-bold text-[#161a5a] mb-6">Share Your Story</h2>
          <p className="text-lg text-gray-600 font-raleway mb-8">
            Have insights to share? Submit your blog and help others in their career journey.
          </p>
          <Link to="/submit-blog" className="inline-block px-8 py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all shadow-lg">
            Submit Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

// Blog Submission Page
const BlogSubmitPage = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    authorEmail: '',
    blogTitle: '',
    description: '',
    content: '',
    coverImage: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Blog submitted successfully! Our team will review it shortly.');
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-6">Submit Your Blog</h1>
          <p className="text-lg text-gray-600 font-raleway text-center mb-12">
            Share your knowledge and experiences with our community
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-raleway font-medium mb-2">Your Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                  value={formData.authorName} onChange={(e) => setFormData({...formData, authorName: e.target.value})} />
              </div>
              <div>
                <label className="block text-gray-700 font-raleway font-medium mb-2">Email *</label>
                <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                  value={formData.authorEmail} onChange={(e) => setFormData({...formData, authorEmail: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Blog Title *</label>
              <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={formData.blogTitle} onChange={(e) => setFormData({...formData, blogTitle: e.target.value})} />
            </div>

            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Short Description *</label>
              <input type="text" required maxLength="150" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="1-2 lines describing your blog" />
            </div>

            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Blog Content *</label>
              <textarea rows="10" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} />
            </div>

            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Cover Image</label>
              <input type="file" accept="image/*" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                onChange={(e) => setFormData({...formData, coverImage: e.target.files[0]})} />
            </div>

            <button type="submit" className="w-full py-4 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all text-lg shadow-lg">
              Submit Blog
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Admin Panel Component
const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('candidates');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-6">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
          <h1 className="text-4xl font-alike font-bold text-[#161a5a] text-center mb-8">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 font-raleway font-medium mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full py-3 bg-[#161a5a] text-white font-raleway font-semibold rounded-lg hover:bg-[#0d0f3a] transition-all">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] mb-8">Admin Dashboard</h1>

          {/* Tabs */}
          <div className="flex space-x-4 mb-8 border-b border-gray-300">
            {['candidates', 'companies', 'advertisements', 'blogs'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-raleway font-medium transition-all ${
                  activeTab === tab 
                    ? 'text-[#161a5a] border-b-2 border-[#161a5a]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {activeTab === 'candidates' && (
              <div>
                <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">Candidate Applications</h2>
                <p className="text-gray-600 font-raleway mb-4">View and manage all candidate submissions</p>
                <div className="border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-500 font-raleway text-center">No candidates yet</p>
                </div>
              </div>
            )}

            {activeTab === 'companies' && (
              <div>
                <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">Company Submissions</h2>
                <p className="text-gray-600 font-raleway mb-4">Review and approve company registrations</p>
                <div className="border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-500 font-raleway text-center">No companies yet</p>
                </div>
              </div>
            )}

            {activeTab === 'advertisements' && (
              <div>
                <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">Manage Advertisements</h2>
                <button className="mb-6 px-6 py-3 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all">
                  Add New Advertisement
                </button>
                <div className="grid md:grid-cols-3 gap-4">
                  {[1,2,3,4,5,6,7].map(i => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-3"></div>
                      <p className="font-raleway text-sm text-gray-600">Ad Slot {i}</p>
                      <button className="mt-2 text-sm text-[#8b0000] font-raleway hover:underline">Edit</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'blogs' && (
              <div>
                <h2 className="text-3xl font-alike font-bold text-[#161a5a] mb-6">Blog Management</h2>
                <button className="mb-6 px-6 py-3 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all">
                  Add New Blog
                </button>
                <div className="border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-500 font-raleway text-center">No blog submissions yet</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-alike font-bold text-[#161a5a] text-center mb-12">Contact Us</h1>
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Name *</label>
              <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Email *</label>
              <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-gray-700 font-raleway font-medium mb-2">Message *</label>
              <textarea rows="6" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#161a5a] font-raleway"
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
            </div>
            <button type="submit" className="w-full py-4 bg-[#8b0000] text-white font-raleway font-semibold rounded-lg hover:bg-[#6d0000] transition-all text-lg shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/for-candidates" element={<ForCandidatesPage />} />
          <Route path="/for-companies" element={<ForCompaniesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/submit-blog" element={<BlogSubmitPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// CSS Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }

  * {
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Alike', serif;
  }

  .font-alike {
    font-family: 'Alike', serif;
  }

  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
`;
document.head.appendChild(style);
