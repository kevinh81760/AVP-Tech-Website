import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { AutomationSection } from './components/AutomationSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import Preloader from './components/Preloader';
import { useLenis } from './hooks/useLenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll after loading completes
  useLenis(isLoading);

  useEffect(() => {
    // Set minimum loading time to ensure smooth animation
    const minLoadTime = 2000; // 2 seconds
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <AutomationSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
