import { Monitor, Zap, Gauge, Globe } from 'lucide-react';

export function AutomationSection() {
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

  return (
    <section
      id="automation"
      className="py-32"
      style={{ backgroundColor: '#003366' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#0099FF' }} />
          <h2
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
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 aspect-square flex flex-col items-start justify-between"
                style={{ backgroundColor: '#003366' }}
              >
                <feature.icon className="w-10 h-10 mb-auto" style={{ color: '#0099FF' }} />
                <div>
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
            <div className="border-l-4 pl-8" style={{ borderColor: '#0099FF' }}>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  color: 'white',
                  fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                  lineHeight: '1.5',
                }}
              >
                Our automation platform drives productivity and reliability across every AVP system.
              </p>
              <div className="uppercase tracking-widest" style={{ color: '#0099FF', letterSpacing: '0.2em' }}>
                PLATFORM EXCELLENCE
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    lineHeight: '1',
                  }}
                >
                  100ms
                </div>
                <div className="uppercase text-sm tracking-wider" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
                  RESPONSE TIME
                </div>
              </div>
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontSize: '2.5rem',
                    color: 'white',
                    lineHeight: '1',
                  }}
                >
                  99.9%
                </div>
                <div className="uppercase text-sm tracking-wider" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
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
