import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1597531036650-afc0f6d32ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDU2MDYwNHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Semiconductor wafer technology"
          className="w-full h-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 20, 40, 0.85) 0%, rgba(0, 51, 102, 0.75) 50%, rgba(0, 0, 0, 0.9) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
        <div className="max-w-4xl">
          <h1
            className="text-white mb-8 uppercase leading-[0.9]"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            PRECISION. <span style={{ color: '#0099FF' }}>QUALITY.</span>
            <br />
            EFFICIENCY.
          </h1>

          <div className="w-24 h-1 mb-8" style={{ backgroundColor: '#0099FF' }} />

          <p
            className="text-white/90 mb-12 max-w-2xl"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6'
            }}
          >
            The most innovative and fastest growing thin film equipment services company in Silicon Valley.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 uppercase tracking-widest transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: '#0099FF',
                color: 'white',
                letterSpacing: '0.15em',
              }}
            >
              LEARN MORE
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 uppercase tracking-widest border-2 transition-all duration-300 hover:bg-white/10"
              style={{
                borderColor: 'white',
                color: 'white',
                letterSpacing: '0.15em',
              }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </button>
    </section>
  );
}
