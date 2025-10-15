import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { AutomationSection } from './components/AutomationSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AutomationSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
