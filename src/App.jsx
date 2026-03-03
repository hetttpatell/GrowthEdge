// App.jsx
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { AwardsSection } from './components/sections/AwardsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { Footer } from './components/layout/Footer';
import { AnimatedLoader } from './components/ui/AnimatedLoader';
import { ServicesPage } from './components/pages/ServicesPage';
import { ServicesSection } from './components/sections/ServicesSection';
import { AwardsPage } from './components/pages/AwardsPage';
import { ContactPage } from './components/pages/ContactPage';
import { AboutPage } from './components/pages/AboutPage';

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown in this session
    const loaderAlreadyShown = sessionStorage.getItem('loaderShown');

    if (!loaderAlreadyShown) {
      // Show loader for first-time visitors
      setShowLoader(true);
      sessionStorage.setItem('loaderShown', 'true');

      // Hide loader after animation
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 3000); // Adjust timing based on your loader animation
      return () => clearTimeout(timer);
    }
  }, []);

  const HomePage = () => {
    const navigate = useNavigate();

    return (
      <>
        {showLoader && <AnimatedLoader onComplete={() => setShowLoader(false)} />}
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        {/* <AwardsSection /> */}
        <TestimonialsSection />
        {/* <ContactSection /> */}
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;