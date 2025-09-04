import { Heart, ArrowUp, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Logo Design",
    "Brand Identity",
    "Social Media Design",
    "Flyer Design",
    "Advertisement Graphics",
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/ambpixeltech", name: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/in/chika-favor", name: "LinkedIn" },
    { icon: Facebook, url: "https://facebook.com/ambpixeltech", name: "Facebook" },
    { icon: MessageCircle, url: "https://wa.me/2349012345678", name: "WhatsApp" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold brand-gradient bg-clip-text text-transparent mb-3">
                  Ambpixeltech
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Giving every pixel a voice through creative design solutions that make an impact.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Connect With Me</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted hover:bg-gradient-primary rounded-lg flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:shadow-glow"
                      aria-label={social.name}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Services</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="text-muted-foreground">
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-3">
                <div className="text-muted-foreground">
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="text-muted-foreground">
                  <a 
                    href="mailto:chikafavor@ambpixeltech.com"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    chikafavor@ambpixeltech.com
                  </a>
                </div>
                <div className="text-muted-foreground">
                  <a 
                    href="tel:+2349012345678"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +234 901 234 5678
                  </a>
                </div>
              </div>
              
              <Button 
                className="btn-hero w-full"
                onClick={() => scrollToSection("#contact")}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Ambpixeltech. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by CHIKA FAVOR</span>
            </div>

            <div className="flex items-center space-x-6">
              <button 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => {}}
              >
                Privacy Policy
              </button>
              <button 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                onClick={() => {}}
              >
                Terms of Service
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary/10 group"
              >
                <ArrowUp className="h-4 w-4 group-hover:text-primary transition-colors duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-primary opacity-50"></div>
    </footer>
  );
};

export default Footer;