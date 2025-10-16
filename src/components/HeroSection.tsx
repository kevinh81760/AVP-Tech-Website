import { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitText } from '../utils/textSplit';
import AVPLandingIMG from './figma/AVPLandingIMG.jpg';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use Lenis for smooth scroll if available, fallback to native
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: 0, duration: 1.5 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Hero entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.3, // Small delay after preloader
      });

      // Split heading text into words
      if (headingRef.current) {
        const words = splitText(headingRef.current, { type: 'words' });
        
        // Animate words with stagger
        timeline.from(words, {
          opacity: 0,
          y: 50,
          rotationX: -90,
          transformOrigin: 'top center',
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Accent bar width expansion
      if (accentBarRef.current) {
        timeline.from(
          accentBarRef.current,
          {
            width: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // Tagline fade up
      if (taglineRef.current) {
        timeline.from(
          taglineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      }

      // Buttons fade up with stagger
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll('button');
        timeline.from(
          buttons,
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.6,
            ease: 'back.out(1.2)',
          },
          '-=0.4'
        );
      }

      // Scroll indicator
      if (scrollIndicatorRef.current) {
        timeline.from(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.2'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Background parallax on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Button magnetic effect
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Dark Blue Overlay */}
      <div ref={backgroundRef} className="absolute inset-0">
        <img
          src={AVPLandingIMG}
          alt="AVP Technology - Thin film equipment services"
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
            ref={headingRef}
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

          <div ref={accentBarRef} className="w-24 h-1 mb-8" style={{ backgroundColor: '#0099FF' }} />

          <p
            ref={taglineRef}
            className="text-white/90 mb-12 max-w-2xl"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6'
            }}
          >
            The most innovative and fastest growing thin film equipment services company in Silicon Valley.
          </p>

          <div ref={buttonsRef} className="flex gap-4">
            <button
              onClick={() => scrollToSection('about')}
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
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
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
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
        ref={scrollIndicatorRef}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </button>
    </section>
  );
}
