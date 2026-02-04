import './styles/premium.css';
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
import InterviewTipsPage from './pages/blogs/InterviewTipsPage';
import ResumePage from './pages/blogs/ResumePage';
import RemoteWorkPage from './pages/blogs/RemoteWorkPage';
import MarketPage from './pages/MarketPage';
import JobUpdatesPage from './pages/JobUpdatesPage';
import AIResumeBuilder from './pages/AIResumeBuilder';
import AIResumeAnalyzer from './pages/AIResumeAnalyzer';
import AISalaryCalculator from './pages/AISalaryCalculator';
import AIJobListings from './pages/AIJobListings';

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
          <Route path="/blog/interview-tips" element={<InterviewTipsPage />} />
          <Route path="/blog/winning-resume" element={<ResumePage />} />
          <Route path="/blog/remote-work" element={<RemoteWorkPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/jobs" element={<JobUpdatesPage />} />
          <Route path="/ai/resume-builder" element={<AIResumeBuilder />} />
          <Route path="/ai/resume-analyzer" element={<AIResumeAnalyzer />} />
          <Route path="/ai/salary" element={<AISalaryCalculator />} />
          <Route path="/ai/jobs" element={<AIJobListings />} />
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