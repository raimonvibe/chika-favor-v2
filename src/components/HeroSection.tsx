import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink } from 'lucide-react';
import designerPortrait from '@/assets/new_profile_picture.JPG';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hello</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                I'm <span className="gradient-text">CHIKA</span>
                <br />
                <span className="gradient-text">FAVOR</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light">
                Graphic Designer
              </h2>
            </div>

            <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6">
              "Giving every pixel a voice"
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a passionate creative and brand designer based in Nigeria, specializing in 
              transforming ideas into stunning visuals that communicate powerfully and create 
              lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg hover:opacity-90">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={designerPortrait}
                alt="Chika Favor - Graphic Designer"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl hover-lift animate-float"
              />
              
              {/* Floating Badge */}
              <Badge className="absolute top-6 right-6 gradient-bg-secondary text-white px-4 py-2 text-sm font-medium">
                Available for Projects
              </Badge>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

