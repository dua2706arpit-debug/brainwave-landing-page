import React from 'react';
import Header from './components/Header';
import SalesNotification from './components/SalesNotification';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BonusesSection from './components/BonusesSection';
import CallToAction from './components/CallToAction';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <BenefitsSection />
      <BonusesSection />
      <CallToAction />
      <FAQSection />
      <Footer />
      <SalesNotification />
    </>
  );
}

export default App;
