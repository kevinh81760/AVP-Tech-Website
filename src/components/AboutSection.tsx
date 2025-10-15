export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
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
            COMPANY
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div>
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

            <div>
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
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-4 pl-6" style={{ borderColor: '#0099FF' }}>
              <div
                className="mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                20+
              </div>
              <div
                className="uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                YEARS OF INNOVATION
              </div>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: '#0099FF' }}>
              <div
                className="mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                100%
              </div>
              <div
                className="uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                CUSTOMER SATISFACTION
              </div>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: '#0099FF' }}>
              <div
                className="mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                24/7
              </div>
              <div
                className="uppercase tracking-wider"
                style={{
                  color: '#003366',
                  opacity: 0.7,
                  letterSpacing: '0.1em',
                }}
              >
                GLOBAL SUPPORT
              </div>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: '#0099FF' }}>
              <div
                className="mb-2"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: '#003366',
                  lineHeight: '1',
                }}
              >
                #1
              </div>
              <div
                className="uppercase tracking-wider"
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
