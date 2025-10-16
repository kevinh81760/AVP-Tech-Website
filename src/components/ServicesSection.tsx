import { useRef, useEffect } from 'react';
import { Wrench, Cpu, Palette, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitText } from '../utils/textSplit';

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      icon: Wrench,
      number: '01',
      title: 'FIELD SERVICE',
      description: 'On/Off-site support on thin film deposition tools.',
    },
    {
      icon: Cpu,
      number: '02',
      title: 'HARDWARE UPGRADES',
      description: 'Enhance performance, extend system life.',
    },
    {
      icon: Palette,
      number: '03',
      title: 'CUSTOM DESIGN',
      description: 'Tailored configurations for unique process needs.',
    },
    {
      icon: Settings,
      number: '04',
      title: 'SYSTEM CONTROLS UPGRADE',
      description: 'Advanced automation and software updates.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      // Accent bar
      if (accentBarRef.current) {
        timeline.from(accentBarRef.current, {
          width: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      // Heading
      if (headingRef.current) {
        const chars = splitText(headingRef.current, { type: 'chars' });
        timeline.from(
          chars,
          {
            opacity: 0,
            x: -20,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // Subtitle
      if (subtitleRef.current) {
        timeline.from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      }

      // Service cards
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.service-card');
        
        cards.forEach((card, index) => {
          const delay = index * 0.15;
          
          // Card container
          timeline.from(
            card,
            {
              opacity: 0,
              y: 60,
              duration: 0.8,
              ease: 'power3.out',
            },
            `-=${0.6 - delay}`
          );

          // Number
          const number = card.querySelector('.service-number');
          if (number) {
            timeline.from(
              number,
              {
                opacity: 0,
                scale: 1.2,
                duration: 0.6,
                ease: 'power2.out',
              },
              `-=${0.6 - delay}`
            );
          }

          // Icon
          const icon = card.querySelector('.service-icon');
          if (icon) {
            timeline.from(
              icon,
              {
                scale: 0,
                rotation: -90,
                duration: 0.5,
                ease: 'back.out(1.7)',
              },
              `-=${0.5 - delay}`
            );
          }

          // Title
          const title = card.querySelector('.service-title');
          if (title) {
            timeline.from(
              title,
              {
                opacity: 0,
                y: 10,
                duration: 0.5,
                ease: 'power2.out',
              },
              `-=${0.4 - delay}`
            );
          }

          // Description
          const description = card.querySelector('.service-description');
          if (description) {
            timeline.from(
              description,
              {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
              },
              `-=${0.3 - delay}`
            );
          }

          // Underline
          const underline = card.querySelector('.service-underline');
          if (underline) {
            timeline.from(
              underline,
              {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 0.4,
                ease: 'power2.out',
              },
              `-=${0.2 - delay}`
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div ref={accentBarRef} className="w-16 h-1 mb-6" style={{ backgroundColor: '#003366' }} />
          <h2
            ref={headingRef}
            className="uppercase mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em',
              color: '#003366',
              lineHeight: '1',
            }}
          >
            SERVICES
          </h2>
          <p
            ref={subtitleRef}
            className="max-w-2xl"
            style={{
              color: '#003366',
              fontSize: '1.125rem',
              lineHeight: '1.7',
            }}
          >
            Customer satisfaction is our ultimate commitment and the cornerstone of our success.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: '#003366' }}>
          {services.map((service) => (
            <div
              key={service.number}
              className="service-card bg-white p-12 hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div
                  className="service-number text-6xl opacity-20"
                  style={{
                    color: '#003366',
                    lineHeight: '1',
                  }}
                >
                  {service.number}
                </div>
                <service.icon
                  className="service-icon w-12 h-12 transition-colors duration-300"
                  style={{ color: '#003366', opacity: 0.6 }}
                />
              </div>

              <h3
                className="service-title uppercase mb-4 tracking-wide"
                style={{
                  color: '#003366',
                  fontSize: '1.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                {service.title}
              </h3>

              <p
                className="service-description mb-8"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  lineHeight: '1.7',
                }}
              >
                {service.description}
              </p>

              <div
                className="service-underline w-12 h-0.5 transition-all duration-300 group-hover:w-24"
                style={{ backgroundColor: '#0099FF' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
