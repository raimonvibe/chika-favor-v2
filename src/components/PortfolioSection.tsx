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
    title: 'Social Media Campaigns',
    category: 'Social Media',
    description: 'Creative and engaging social media graphics designed to boost brand visibility and connect with online audiences across multiple platforms.',
    image: portfolio1,
    tags: ['Social Media', 'Digital Marketing', 'Campaigns']
  },
  {
    title: 'Brand Identity Systems',
    category: 'Branding',
    description: 'Complete brand identity packages including logo, typography, and color systems that establish a strong and consistent visual presence.',
    image: portfolio2,
    tags: ['Brand Identity', 'Logo Design', 'Guidelines']
  },
  {
    title: 'Logo Design Collection',
    category: 'Logo Design',
    description: 'Unique and memorable logo designs tailored to reflect each brand’s personality, values, and market positioning.',
    image: portfolio7,
    tags: ['Logo', 'Brand Mark', 'Visual Identity']
  },
  {
    title: 'Event Posters & Flyers',
    category: 'Print Design',
    description: 'Bold and eye-catching event posters and flyers created to capture attention and communicate key event details effectively.',
    image: portfolio4,
    tags: ['Event Design', 'Posters', 'Flyers']
  },
  {
    title: 'Church Media Designs',
    category: 'Faith-Based',
    description: 'Inspirational flyers, posters, and digital banners crafted for church programs and events with clarity, warmth, and impact.',
    image: portfolio5,
    tags: ['Church Design', 'Media', 'Faith-Based']
  },
  {
    title: 'Corporate Design Solutions',
    category: 'Corporate',
    description: 'Professional corporate identity systems, including stationery and brand guidelines, designed for businesses to establish authority and trust.',
    image: portfolio6,
    tags: ['Corporate Identity', 'Professional', 'Business']
  },
  {
    title: 'Product Packaging Design',
    category: 'Packaging',
    description: 'Creative and functional product packaging that stands out on shelves while reflecting the brand’s values and appealing to its target market.',
    image: portfolio3,
    tags: ['Packaging', 'Product Design', 'Retail']
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

