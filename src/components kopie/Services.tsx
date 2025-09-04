import { Palette, Megaphone, FileImage, Building2, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design & Branding",
      description: "Create memorable brand identities that capture your essence and resonate with your target audience. From concept to final design, I'll help you build a brand that stands out.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"],
      price: "Starting from $500",
    },
    {
      icon: Megaphone,
      title: "Social Media Design",
      description: "Engaging social media graphics that boost your online presence and drive engagement. Consistent, on-brand visuals across all your social platforms.",
      features: ["Instagram Posts", "Facebook Covers", "LinkedIn Graphics", "Story Templates"],
      price: "Starting from $200",
    },
    {
      icon: FileImage,
      title: "Flyer & Poster Design",
      description: "Eye-catching promotional materials that effectively communicate your message and drive action. Perfect for events, campaigns, and announcements.",
      features: ["Event Flyers", "Promotional Posters", "Church Materials", "Concert Designs"],
      price: "Starting from $150",
    },
    {
      icon: Building2,
      title: "Corporate Brand Identity",
      description: "Comprehensive brand solutions for businesses looking to establish a professional and cohesive visual identity across all touchpoints.",
      features: ["Complete Brand Package", "Business Cards", "Letterheads", "Marketing Materials"],
      price: "Starting from $800",
    },
    {
      icon: Sparkles,
      title: "Advertisement Graphics",
      description: "Compelling advertising designs that capture attention and drive conversions. From digital ads to print campaigns, I create visuals that sell.",
      features: ["Digital Ad Banners", "Print Advertisements", "Campaign Graphics", "Product Promotions"],
      price: "Starting from $300",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We discuss your vision, goals, and requirements to understand your project needs."
    },
    {
      step: "02",
      title: "Concept",
      description: "I create initial concepts and present design directions for your feedback."
    },
    {
      step: "03",
      title: "Design",
      description: "Refining the chosen concept into polished, professional designs."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Final files delivered in all required formats with ongoing support."
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="brand-gradient bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive design solutions tailored to elevate your brand and communicate your message effectively.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover-lift border-none shadow-float card-gradient h-full"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {service.price}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                My Design <span className="brand-gradient bg-clip-text text-transparent">Process</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to ensure every project delivers exceptional results and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary transform translate-x-4 -translate-y-1/2"></div>
                  )}
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="inline-block border-none shadow-brand card-gradient max-w-2xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Let's collaborate to create something amazing together. Every great design starts with a conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero px-8">
                    Get Started
                  </Button>
                  <Button variant="outline" className="btn-outline-brand px-8">
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;