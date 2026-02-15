// App.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnimatedLoader } from './components/AnimatedLoader';
import { ServicesPage } from './components/ServicesPage';
import { ServicesSection } from './components/ServicesSection';
import { AwardsPage } from './components/AwardsPage';
import { ContactPage } from './components/ContactPage';

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
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;