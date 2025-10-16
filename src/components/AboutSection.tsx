import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitText } from '../utils/textSplit';
import { animateCounter, parseStatValue } from '../utils/counterAnimation';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textBlocksRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });

      // Accent bar expansion
      if (accentBarRef.current) {
        timeline.from(accentBarRef.current, {
          width: 0,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      // Heading character split animation
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

      // Text blocks stagger
      if (textBlocksRef.current) {
        const blocks = textBlocksRef.current.querySelectorAll('.text-block');
        timeline.from(
          blocks,
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.3'
        );
      }

      // Stats grid animation
      if (statsRef.current) {
        const statBoxes = statsRef.current.querySelectorAll('.stat-box');
        
        statBoxes.forEach((box, index) => {
          const border = box.querySelector('.stat-border') as HTMLElement;
          const numberEl = box.querySelector('.stat-number') as HTMLElement;
          const labelEl = box.querySelector('.stat-label') as HTMLElement;
          
          const delay = index * 0.1;

          // Border draw in
          if (border) {
            timeline.from(
              border,
              {
                scaleX: 0,
                transformOrigin: 'left',
                duration: 0.4,
                ease: 'power2.out',
              },
              `-=${0.4 - delay}`
            );
          }

          // Counter animation
          if (numberEl) {
            const originalText = numberEl.textContent || '';
            const { number, suffix } = parseStatValue(originalText);
            
            timeline.add(() => {
              animateCounter(numberEl, number, suffix, {
                duration: 1.2,
                ease: 'power2.out',
              });
            }, `-=${0.2 - delay}`);
          }

          // Label fade in
          if (labelEl) {
            timeline.from(
              labelEl,
              {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out',
              },
              `-=${0.6 - delay}`
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white">
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
            COMPANY
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text Content */}
          <div ref={textBlocksRef} className="space-y-8">
            <div className="text-block">
              <h3
                className="uppercase mb-4"
                style={{
                  color: '#003366',
                  letterSpacing: '0.1em',
                }}
              >
                FOUNDED 2005
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: '#003366',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                AVP Technology, LLC has quickly become the most innovative and fast growing company in thin film equipment & services industry in Silicon Valley.
              </p>
            </div>

            <div>
              <h3
                className="uppercase mb-4"
                style={{
                  color: '#003366',
                  letterSpacing: '0.1em',
                }}
              >
                EXPERTISE
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: '#003366',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                AVP employs many thin film equipment & service veterans in Silicon Valley, including design, manufacturing, automation, field service and process engineers.
              </p>
            </div>

            <div className="text-block">
              <h3
                className="uppercase mb-4"
                style={{
                  color: '#003366',
                  letterSpacing: '0.1em',
                }}
              >
                COMMITMENT
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: '#003366',
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                }}
              >
                Our focus is providing customers with state-of-the-art thin film equipment, cutting edge processes, and excellent service support for a reasonable cost delivered in a respectable timeframe.
              </p>
            </div>
          </div>

          {/* Right: Statistics Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-8">
            <div className="stat-box pl-6 relative">
              <div className="stat-border absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#0099FF' }} />
              <div
                className="stat-number mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                20+
              </div>
              <div
                className="stat-label uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                YEARS OF INNOVATION
              </div>
            </div>

            <div className="stat-box pl-6 relative">
              <div className="stat-border absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#0099FF' }} />
              <div
                className="stat-number mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                100%
              </div>
              <div
                className="stat-label uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                CUSTOMER SATISFACTION
              </div>
            </div>

            <div className="stat-box pl-6 relative">
              <div className="stat-border absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#0099FF' }} />
              <div
                className="stat-number mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                24/7
              </div>
              <div
                className="stat-label uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                GLOBAL SUPPORT
              </div>
            </div>

            <div className="stat-box pl-6 relative">
              <div className="stat-border absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: '#0099FF' }} />
              <div
                className="stat-number mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                #1
              </div>
              <div
                className="stat-label uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                SILICON VALLEY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
