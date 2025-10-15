export function ProductsSection() {
  const products = [
    {
      title: 'CLUSTER PVD',
      subtitle: 'HIGH THROUGHPUT SYSTEMS',
      description: 'Industry proven thin film equipment with high throughput and long-term reliability. Optimized magnetron for Al₂O₃ and NiFe productivity.',
      image: 'https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDUwMjg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'CLUSTER HR PVD',
      subtitle: 'REACTIVE DEPOSITION',
      description: 'High ionization reactive deposition, low wafer temperature, and excellent uniformity.',
      image: 'https://images.unsplash.com/photo-1597207837475-ea1f19435b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBzaWxpY29uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1NjA2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'IN-LINE PVD',
      subtitle: 'AUTOMATED MULTI-CHAMBER',
      description: 'Fully automated multi-chamber deposition and etching with modular design.',
      image: 'https://images.unsplash.com/photo-1759159091682-3b98f4759367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NjA1NjA2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'IBE SYSTEM',
      subtitle: 'ION BEAM ETCHING',
      description: 'Wafer processing tool with high flexibility and low ownership cost.',
      image: 'https://images.unsplash.com/photo-1723549645135-ae1127f5cd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcHJlY2lzaW9uJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MDU2MDYwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'REMANUFACTURED',
      subtitle: 'REFURBISHED SYSTEMS',
      description: 'Refurbished PVD, GMR, IBE, ICP RIE tools with modern controls.',
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNTYwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="products" className="py-32" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#0099FF' }} />
          <h2
            className="uppercase mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em',
              color: 'white',
              lineHeight: '1',
            }}
          >
            PRODUCTS
          </h2>
          <p
            className="uppercase tracking-wider"
            style={{
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.2em',
            }}
          >
            ADVANCED THIN FILM DEPOSITION SYSTEMS
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-0">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="grid lg:grid-cols-2 border-t border-white/10 hover:bg-white/5 transition-colors duration-300"
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-12 lg:p-16">
                <div className="text-sm uppercase tracking-widest mb-4" style={{ color: '#0099FF', letterSpacing: '0.2em' }}>
                  {product.subtitle}
                </div>
                <h3
                  className="uppercase mb-6"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    color: 'white',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.1',
                  }}
                >
                  {product.title}
                </h3>
                <p
                  className="mb-8"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '1.0625rem',
                    lineHeight: '1.7',
                  }}
                >
                  {product.description}
                </p>
                <button
                  className="self-start uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  style={{
                    color: 'white',
                    letterSpacing: '0.15em',
                  }}
                >
                  REQUEST INFO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
