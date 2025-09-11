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
      description: 'Logos and full brand identity packages to help your business stand out.',
      tiers: [
        { name: 'Starter', price: '$25', features: ['1 Logo + 1 Revision', '1 Mockup'] },
        { name: 'Standard', price: '$70', features: ['2 Concepts + 3 Revisions', 'Social Media Kit', '3 Mockups'] },
        { name: 'Premium', price: '$150', features: ['3 Concepts + Unlimited Revisions', 'Full Branding Guide', '5 Mockups'] },
      ]
    },
    {
      icon: Monitor,
      title: 'Digital Design',
      description: 'Graphics for websites, ads, banners, and online platforms.',
      tiers: [
        { name: 'Starter', price: '$10', features: ['2 Graphics', '1 Mockup'] },
        { name: 'Standard', price: '$30', features: ['6 Graphics', '2 Mockups'] },
        { name: 'Premium', price: '$60', features: ['12 Graphics + Templates', '4 Mockups'] },
      ]
    },
    {
      icon: Printer,
      title: 'Print Design',
      description: 'Professional flyers, posters, brochures, and marketing materials.',
      tiers: [
        { name: 'Starter', price: '$10', features: ['1 Flyer/Poster', '1 Mockup'] },
        { name: 'Standard', price: '$25', features: ['3 Flyers/Posters', '2 Mockups'] },
        { name: 'Premium', price: '$50', features: ['5 Flyers/Posters + Social Resize', '4 Mockups'] },
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Design',
      description: 'Engaging post templates and graphics for all platforms.',
      tiers: [
        { name: 'Starter', price: '$10', features: ['2 Graphics', '1 Mockup'] },
        { name: 'Standard', price: '$25', features: ['6 Graphics', '2 Mockups'] },
        { name: 'Premium', price: '$50', features: ['12 Graphics + Templates', '4 Mockups'] },
      ]
    },
    {
      icon: Package,
      title: 'Packaging Design',
      description: 'Creative product packaging and labels that stand out.',
      tiers: [
        { name: 'Starter', price: '$10', features: ['1 Packaging/Label', '1 Mockup'] },
        { name: 'Standard', price: '$40', features: ['3 Packages', '2 Mockups'] },
        { name: 'Premium', price: '$80', features: ['Full Product Line Packaging', '4 Mockups'] },
      ]
    },
    {
      icon: Megaphone,
      title: 'Marketing Materials',
      description: 'Campaigns, promotional materials, and trade show designs.',
      tiers: [
        { name: 'Starter', price: '$10', features: ['2 Materials (Flyer/Brochure)', '1 Mockup'] },
        { name: 'Standard', price: '$35', features: ['5 Materials', '2 Mockups'] },
        { name: 'Premium', price: '$70', features: ['Full Campaign Pack', '4 Mockups'] },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Services</span> I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Affordable and professional design solutions with flexible packages to fit your needs.
          </p>
        </div>

        {/* Services Grid */}
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
                {service.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="mb-6 p-4 rounded-lg border bg-white/50 shadow-sm">
                    <h4 className="text-sm font-medium text-gray-700">{tier.name}</h4>
                    <div className="text-2xl font-bold text-blue-500 mb-2">{tier.price}</div>
                    <ul className="space-y-1 text-sm">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <ArrowRight className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="border-t pt-4 mt-auto">
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
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique. Let’s create a tailored design solution that perfectly fits your needs.
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
