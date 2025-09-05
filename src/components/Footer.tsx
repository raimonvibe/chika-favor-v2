import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              CHIKA <span className="text-primary">FAVOR</span>
            </h3>
            <p className="text-muted italic">
              "Giving every pixel a voice"
            </p>
          </div>

          {/* Status Badge */}
          <div>
            <Badge className="gradient-bg text-white px-4 py-2">
              Currently Available for Projects
            </Badge>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-muted/20">
            <p className="text-muted text-sm">
              © {currentYear} Chika Favor. All rights reserved. | Designed with ❤️ in Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;