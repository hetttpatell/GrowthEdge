import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnimatedLoader } from './components/AnimatedLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading && <AnimatedLoader onComplete={() => setLoading(false)} />}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;