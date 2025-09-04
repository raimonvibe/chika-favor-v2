import { useState } from "react";
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "church", name: "Church Fliers" },
    { id: "social", name: "Social Media" },
    { id: "ads", name: "Advertisement" },
    { id: "logos", name: "Logos" },
    { id: "branding", name: "Brand Design" },
  ];

  const projects = [
    {
      id: 1,
      category: "church",
      title: "Sunday Spirit",
      subtitle: "Community Worship Night",
      description: "A vibrant flyer design for a community worship event, featuring warm colors and spiritual imagery.",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop",
      tags: ["Flyer Design", "Religious", "Community"],
    },
    {
      id: 2,
      category: "church",
      title: "JoyFest Gospel Concert",
      subtitle: "Annual Music Festival",
      description: "Dynamic concert flyer with bold typography and musical elements.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Concert", "Gospel", "Music"],
    },
    {
      id: 3,
      category: "social",
      title: "Urban Youth Outreach",
      subtitle: "Community Campaign",
      description: "Social media campaign design targeting urban youth with modern, street-inspired aesthetics.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      tags: ["Social Media", "Youth", "Community"],
    },
    {
      id: 4,
      category: "social",
      title: "Weekend Market Spotlight",
      subtitle: "Local Business Promotion",
      description: "Engaging social media graphics promoting local weekend markets.",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
      tags: ["Market", "Local Business", "Promotion"],
    },
    {
      id: 5,
      category: "ads",
      title: "EcoClean Products",
      subtitle: "Sustainable Cleaning Solutions",
      description: "Advertisement poster emphasizing eco-friendly cleaning with green color palette.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
      tags: ["Eco-friendly", "Products", "Sustainability"],
    },
    {
      id: 6,
      category: "ads",
      title: "Music in the Park",
      subtitle: "Festival Advertisement",
      description: "Vibrant festival poster with musical elements and outdoor themes.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Festival", "Music", "Outdoor"],
    },
    {
      id: 7,
      category: "logos",
      title: "GreenLeaf Wellness Spa",
      subtitle: "Health & Wellness Logo",
      description: "Minimalist logo design incorporating natural elements for a wellness spa.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      tags: ["Logo", "Wellness", "Spa"],
    },
    {
      id: 8,
      category: "logos",
      title: "ByteForge Tech Solutions",
      subtitle: "Technology Company Logo",
      description: "Modern, tech-inspired logo design with clean lines and digital aesthetics.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      tags: ["Logo", "Technology", "Corporate"],
    },
    {
      id: 9,
      category: "branding",
      title: "Harvest & Hearth",
      subtitle: "Organic Bakery Branding",
      description: "Complete brand identity for an organic bakery including logo, packaging, and marketing materials.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      tags: ["Branding", "Organic", "Bakery"],
    },
    {
      id: 10,
      category: "branding",
      title: "AquaWave Fitness Center",
      subtitle: "Fitness Brand Identity",
      description: "Dynamic brand design for a modern fitness center with aquatic themes.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      tags: ["Branding", "Fitness", "Health"],
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="brand-gradient bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore my creative journey through diverse projects spanning branding, digital design, and visual communication.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "btn-hero"
                    : "btn-outline-brand"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden border-none shadow-float hover-lift portfolio-item card-gradient"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portfolio Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button variant="outline" size="sm" className="btn-outline-brand">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="sm"
                  className={page === 1 ? "btn-hero w-10 h-10 p-0" : "btn-outline-brand w-10 h-10 p-0"}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="btn-outline-brand">
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="inline-block border-none shadow-brand card-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Like what you see?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Let's work together to bring your vision to life with stunning designs that make an impact.
                </p>
                <Button className="btn-hero px-8">
                  Start a Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;