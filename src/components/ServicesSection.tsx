import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const headerRef = useScrollAnimation();
  const servicesRef = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: 'Logo Design',
      description: 'Unique and memorable logos that capture your brand essence',
      icon: '🎨',
      features: ['Custom logo design', 'Brand guidelines', 'Multiple variations', 'Vector files'],
      price: 'From $200'
    },
    {
      title: 'Brand Identity',
      description: 'Complete visual identity systems for consistent branding',
      icon: '⚡',
      features: ['Logo design', 'Color palette', 'Typography', 'Brand applications'],
      price: 'From $500'
    },
    {
      title: 'Social Media Design',
      description: 'Eye-catching social media templates and campaigns',
      icon: '📱',
      features: ['Post templates', 'Story designs', 'Cover images', 'Ad creatives'],
      price: 'From $150'
    },
    {
      title: 'Print Design',
      description: 'Professional print materials that make an impact',
      icon: '📄',
      features: ['Flyers & brochures', 'Business cards', 'Posters', 'Packaging design'],
      price: 'From $100'
    },
    {
      title: 'Web Design',
      description: 'Modern website designs that convert visitors',
      icon: '💻',
      features: ['UI/UX design', 'Responsive layouts', 'Prototyping', 'Design systems'],
      price: 'From $800'
    },
    {
      title: 'Consultation',
      description: 'Strategic design consultation for your brand',
      icon: '🤝',
      features: ['Brand audit', 'Design strategy', 'Creative direction', 'Project planning'],
      price: 'From $120/hour'
    }
  ];

  return (
    <section id="services" className="py-section bg-surface">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Professional design services tailored to help your brand stand out and make a lasting impression.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-coral rounded-full mx-auto mt-8" />
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-background rounded-3xl p-8 border border-border hover:border-accent-gold transition-all duration-500 hover:shadow-2xl hover:-translate-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-semibold text-text-primary group-hover:text-accent-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-2xl font-bold gradient-text">{service.price}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-accent-coral/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-gold to-accent-coral p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-serif font-semibold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <button className="bg-white text-accent-gold px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;