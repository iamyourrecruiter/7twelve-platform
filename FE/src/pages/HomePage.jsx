import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HeroAdCards from '../components/home/Heroadcards';
import TrustSection from '../components/home/TrustSection';
import JobListings from '../components/home/Joblistings';
import AdCards from '../components/home/Adcards';
import Testimonials from '../components/home/Testimonials';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection />
      <HeroAdCards />
      <TrustSection />
      <JobListings />
      <AdCards />
      <Testimonials />
      <PartnersSection />
    </div>
  );
};

export default HomePage;