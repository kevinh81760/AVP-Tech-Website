import { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Columns stagger
      if (columnsRef.current) {
        const columns = columnsRef.current.querySelectorAll('.footer-column');
        timeline.from(
          columns,
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
          }
        );

        // Icons within columns
        const icons = columnsRef.current.querySelectorAll('.footer-icon');
        timeline.from(
          icons,
          {
            scale: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: 'back.out(1.5)',
          },
          '-=0.5'
        );
      }

      // Bottom bar
      if (bottomBarRef.current) {
        timeline.from(
          bottomBarRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={sectionRef} className="py-20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div ref={columnsRef} className="grid lg:grid-cols-3 gap-16 mb-16">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="uppercase mb-6 tracking-tight" style={{ color: 'white', fontSize: '1.5rem', letterSpacing: '-0.01em' }}>
              AVP TECHNOLOGY
            </h3>
            <p className="mb-4 uppercase text-sm tracking-widest" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>
              THIN FILM EQUIPMENT SERVICES
            </p>
            <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#0099FF' }} />
            <p className="uppercase tracking-widest" style={{ color: '#0099FF', letterSpacing: '0.1em' }}>
              PRECISION. QUALITY. EFFICIENCY.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="uppercase mb-6 tracking-wider" style={{ color: 'white', letterSpacing: '0.1em' }}>
              CONTACT
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="footer-icon w-5 h-5 mt-1" style={{ color: '#0099FF' }} />
                <div>
                  <div className="text-sm uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                    EMAIL
                  </div>
                  <a
                    href="mailto:info@avptechnology.com"
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'white' }}
                  >
                    info@avptechnology.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="footer-icon w-5 h-5 mt-1" style={{ color: '#0099FF' }} />
                <div>
                  <div className="text-sm uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                    PHONE
                  </div>
                  <a
                    href="tel:+14085550123"
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: 'white' }}
                  >
                    (408) 555-0123
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="footer-icon w-5 h-5 mt-1" style={{ color: '#0099FF' }} />
                <div>
                  <div className="text-sm uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                    LOCATION
                  </div>
                  <div style={{ color: 'white' }}>
                    Silicon Valley, California
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-column">
            <h4 className="uppercase mb-6 tracking-wider" style={{ color: 'white', letterSpacing: '0.1em' }}>
              SUPPORT
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                  AVAILABILITY
                </div>
                <div style={{ color: 'white' }}>
                  24/7 Global Support
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                  RESPONSE TIME
                </div>
                <div style={{ color: 'white' }}>
                  {'< 2 Hours'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div ref={bottomBarRef} className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
            © 2025 AVP TECHNOLOGY, LLC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <button className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
              PRIVACY
            </button>
            <button className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
              TERMS
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
