import { Wrench, Cpu, Palette, Settings } from 'lucide-react';

export function ServicesSection() {
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

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#003366' }} />
          <h2
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
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: '#003366' }}>
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white p-12 hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div
                  className="text-6xl opacity-20"
                  style={{
                    color: '#003366',
                    lineHeight: '1',
                  }}
                >
                  {service.number}
                </div>
                <service.icon
                  className="w-12 h-12 transition-colors duration-300"
                  style={{ color: '#003366', opacity: 0.6 }}
                />
              </div>

              <h3
                className="uppercase mb-4 tracking-wide"
                style={{
                  color: '#003366',
                  fontSize: '1.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                {service.title}
              </h3>

              <p
                className="mb-8"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  lineHeight: '1.7',
                }}
              >
                {service.description}
              </p>

              <div
                className="w-12 h-0.5 transition-all duration-300 group-hover:w-24"
                style={{ backgroundColor: '#0099FF' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
