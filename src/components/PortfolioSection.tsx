import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import portfolio1 from '@/assets/1.png';
import portfolio2 from '@/assets/2.png';
import portfolio3 from '@/assets/3.png';
import portfolio4 from '@/assets/4.png';
import portfolio5 from '@/assets/5.png';
import portfolio6 from '@/assets/6.png';
import portfolio7 from '@/assets/7.png';


const PortfolioSection = () => {
  const projects = [
    {
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Engaging social media graphics and campaign materials for lifestyle brand.',
      image: portfolio1,
      tags: ['Social Media', 'Campaign', 'Digital']
    },
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      image: portfolio2,
      tags: ['Logo Design', 'Brand Identity', 'Guidelines']
    },
    {
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Engaging social media graphics and campaign materials for lifestyle brand.',
      image: portfolio3,
      tags: ['Social Media', 'Campaign', 'Digital']
    },
    {
      title: 'Marketing Materials',
      category: 'Print Design',
      description: 'Professional marketing collateral including flyers, brochures, and posters.',
      image: portfolio4,
      tags: ['Print Design', 'Marketing', 'Collateral']
    },
    {
      title: 'Product Packaging',
      category: 'Packaging',
      description: 'Creative packaging design that stands out on shelves and communicates brand values.',
      image: portfolio5,
      tags: ['Packaging', 'Product Design', 'Retail']
    },
    {
      title: 'Website Graphics',
      category: 'Digital',
      description: 'Modern web graphics and digital assets for online presence enhancement.',
      image: portfolio6,
      tags: ['Web Design', 'Digital Assets', 'UI Elements']
    },
    {
      title: 'Corporate Identity',
      category: 'Corporate',
      description: 'Professional corporate identity system for established business.',
      image: portfolio7,
      tags: ['Corporate', 'Professional', 'Business']
    }
  ];

  const categories = ['All', 'Branding', 'Social Media', 'Print Design', 'Digital', 'Packaging', 'Corporate'];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my latest design work showcasing creativity, strategy, and visual excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "gradient-bg" : "hover-lift"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-lift">
            <ExternalLink className="mr-2 h-5 w-5" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
