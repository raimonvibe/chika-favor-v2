import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PortfolioSection = () => {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation({ threshold: 0.1 });

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity package for tech startup',
      image: '/placeholder.svg',
      color: 'accent-gold'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Creative social media templates and campaigns',
      image: '/placeholder.svg',
      color: 'accent-coral'
    },
    {
      id: 3,
      title: 'Marketing Materials',
      category: 'Print Design',
      description: 'Flyers, posters, and promotional materials',
      image: '/placeholder.svg',
      color: 'accent-purple'
    },
    {
      id: 4,
      title: 'Website UI Design',
      category: 'Digital Design',
      description: 'Modern website interface and user experience',
      image: '/placeholder.svg',
      color: 'accent-gold'
    },
    {
      id: 5,
      title: 'Logo Collection',
      category: 'Logo Design',
      description: 'Diverse logo designs for various industries',
      image: '/placeholder.svg',
      color: 'accent-coral'
    },
    {
      id: 6,
      title: 'Package Design',
      category: 'Product Design',
      description: 'Creative packaging solutions that sell',
      image: '/placeholder.svg',
      color: 'accent-purple'
    }
  ];

  const categories = ['All', 'Branding', 'Social Media', 'Print Design', 'Digital Design', 'Logo Design'];

  return (
    <section id="portfolio" className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore my creative journey through diverse projects spanning branding, 
            digital design, and visual communication.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-coral rounded-full mx-auto mt-8" />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full border border-border hover:border-accent-gold hover:bg-accent-gold hover:text-white transition-all duration-300 text-text-secondary hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-surface border border-border hover:border-accent-gold transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br from-${item.color}-muted to-${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-${item.color}-muted text-text-primary`}>
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                  <button className="bg-white text-black px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-gold-muted via-accent-coral-muted to-accent-purple-muted p-12 rounded-3xl">
            <h3 className="text-3xl font-serif font-semibold mb-4 text-text-primary">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Let's work together to bring your creative vision to life with stunning design solutions.
            </p>
            <button className="bg-accent-gold hover:bg-accent-coral text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;