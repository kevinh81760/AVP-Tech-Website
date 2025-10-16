import { useRef, useEffect } from 'react';
import { Monitor, Zap, Gauge, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateCounter, parseStatValue } from '../utils/counterAnimation';

gsap.registerPlugin(ScrollTrigger);

export function AutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const features = [
    {
      icon: Monitor,
      title: 'UNIFIED GUI',
      description: 'Unified GUI across all products',
    },
    {
      icon: Zap,
      title: 'PLUG & PLAY',
      description: 'Plug & play upgrade support',
    },
    {
      icon: Gauge,
      title: '100MS RESPONSE',
      description: 'Fast 100ms response time',
    },
    {
      icon: Globe,
      title: '24/7 RELIABILITY',
      description: '24/7 fab reliability worldwide',
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
        timeline.from(
          headingRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // Grid boxes with stagger
      if (gridRef.current) {
        const boxes = gridRef.current.querySelectorAll('.feature-box');
        timeline.from(
          boxes,
          {
            opacity: 0,
            scale: 0.9,
            stagger: 0.12,
            duration: 0.6,
            ease: 'back.out(1.5)',
          },
          '-=0.4'
        );

        // Icons within boxes
        boxes.forEach((box, index) => {
          const icon = box.querySelector('.feature-icon');
          const text = box.querySelector('.feature-text');
          
          if (icon) {
            timeline.from(
              icon,
              {
                scale: 0,
                rotation: -180,
                duration: 0.5,
                ease: 'elastic.out(1, 0.6)',
              },
              `-=${0.4 - index * 0.12}`
            );
          }

          if (text) {
            timeline.from(
              text,
              {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out',
              },
              `-=${0.2 - index * 0.12}`
            );
          }
        });
      }

      // Right side - border
      if (borderRef.current) {
        timeline.from(
          borderRef.current,
          {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.8'
        );
      }

      // Quote text
      if (quoteRef.current) {
        timeline.from(
          quoteRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        );
      }

      // Badge
      if (badgeRef.current) {
        timeline.from(
          badgeRef.current,
          {
            opacity: 0,
            x: -20,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        );
      }

      // Stats counters
      if (statsContainerRef.current) {
        const statNumbers = statsContainerRef.current.querySelectorAll('.stat-counter');
        const statLabels = statsContainerRef.current.querySelectorAll('.stat-label');

        statNumbers.forEach((statEl, index) => {
          const originalText = statEl.textContent || '';
          const { number, suffix } = parseStatValue(originalText);

          timeline.add(() => {
            animateCounter(statEl as HTMLElement, number, suffix, {
              duration: 1.5,
              ease: 'power2.out',
            });
          }, `-=${0.2 - index * 0.1}`);
        });

        timeline.from(
          statLabels,
          {
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=1.0'
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="automation"
      ref={sectionRef}
      className="py-32"
      style={{ backgroundColor: '#003366' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div ref={accentBarRef} className="w-16 h-1 mb-6" style={{ backgroundColor: '#0099FF' }} />
          <h2
            ref={headingRef}
            className="uppercase"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em',
              color: 'white',
              lineHeight: '1',
            }}
          >
            AUTOMATION
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div ref={gridRef} className="grid grid-cols-2 gap-px bg-white/10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-box p-8 aspect-square flex flex-col items-start justify-between"
                style={{ backgroundColor: '#003366' }}
              >
                <feature.icon className="feature-icon w-10 h-10 mb-auto" style={{ color: '#0099FF' }} />
                <div className="feature-text">
                  <h3
                    className="uppercase mb-2 tracking-wide"
                    style={{
                      color: 'white',
                      fontSize: '1.125rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div>
            <div className="relative border-l-4 pl-8" style={{ borderColor: '#0099FF' }}>
              <div ref={borderRef} className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#0099FF' }} />
              <p
                ref={quoteRef}
                className="mb-8 leading-relaxed"
                style={{
                  color: 'white',
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  lineHeight: '1.5',
                }}
              >
                Our automation platform drives productivity and reliability across every AVP system.
              </p>
              <div ref={badgeRef} className="uppercase tracking-widest" style={{ color: '#0099FF', letterSpacing: '0.2em' }}>
                PLATFORM EXCELLENCE
              </div>
            </div>

            <div ref={statsContainerRef} className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div
                  className="stat-counter mb-2"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    lineHeight: '1',
                  }}
                >
                  100ms
                </div>
                <div className="stat-label uppercase text-sm tracking-wider" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
                  RESPONSE TIME
                </div>
              </div>
              <div>
                <div
                  className="stat-counter mb-2"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    lineHeight: '1',
                  }}
                >
                  99.9%
                </div>
                <div className="stat-label uppercase text-sm tracking-wider" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
                  UPTIME
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
