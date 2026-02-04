import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ForCandidatesPage from './pages/ForCandidatesPage';
import ForCompaniesPage from './pages/ForCompaniesPage';
//import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogSubmitPage from './pages/BlogSubmitPage';
import AdminPanel from './pages/AdminPanel';
import ContactPage from './pages/ContactPage';
import AllJobsPage from './pages/Alljobspage';

// Import Google Fonts
const loadFonts = () => {
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Alike&family=Raleway:wght@300;400;500;600;700&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
};

function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/for-candidates" element={<ForCandidatesPage />} />
          <Route path="/for-companies" element={<ForCompaniesPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/submit-blog" element={<BlogSubmitPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/all-jobs" element={<AllJobsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;