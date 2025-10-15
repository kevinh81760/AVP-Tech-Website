import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'COMPANY', id: 'about' },
    { label: 'PRODUCTS', id: 'products' },
    { label: 'AUTOMATION', id: 'automation' },
    { label: 'SERVICES', id: 'services' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/60'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="tracking-tight uppercase"
            style={{ 
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            AVP TECHNOLOGY
          </button>

          <div className="flex gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group transition-colors duration-200 uppercase text-sm tracking-wider"
                style={{ 
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.1em'
                }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#0099FF' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
