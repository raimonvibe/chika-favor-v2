import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Monitor, 
  Printer, 
  Share2, 
  Package, 
  Megaphone,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Logo & Brand Identity',
      description: 'Custom logo design and complete brand identity packages that capture your essence and resonate with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography Selection'],
      price: 'Starting at $299'
    },
    {
      icon: Monitor,
      title: 'Digital Design',
      description: 'Modern digital graphics for websites, apps, and online platforms that enhance user experience and brand consistency.',
      features: ['Web Graphics', 'UI Elements', 'Digital Banners', 'Icon Design'],
      price: 'Starting at $199'
    },
    {
      icon: Printer,
      title: 'Print Design',
      description: 'Professional print materials including business cards, brochures, flyers, and marketing collateral.',
      features: ['Business Cards', 'Brochures', 'Flyers', 'Posters'],
      price: 'Starting at $149'
    },
    {
      icon: Share2,
      title: 'Social Media Design',
      description: 'Engaging social media graphics and templates that boost your online presence and engagement rates.',
      features: ['Post Templates', 'Story Graphics', 'Cover Images', 'Ad Creatives'],
      price: 'Starting at $99'
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Eye-catching packaging solutions that make your products stand out on shelves and communicate brand values.',
      features: ['Product Packaging', 'Label Design', 'Box Design', 'Retail Ready'],
      price: 'Starting at $399'
    },
    {
      icon: Megaphone,
      title: 'Marketing Materials',
      description: 'Comprehensive marketing design services including campaigns, advertisements, and promotional materials.',
      features: ['Ad Campaigns', 'Promotional Items', 'Trade Show Materials', 'Direct Mail'],
      price: 'Starting at $249'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span> I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift border-0 shadow-lg h-full">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl gradient-bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <ArrowRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                  <Button className="w-full gradient-bg hover:opacity-90">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
            </p>
            <Button size="lg" className="gradient-bg hover:opacity-90">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
