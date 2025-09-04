import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import chikaPortrait from '@/assets/chika-portrait.jpg';

const HeroSection = () => {
  const heroRef = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-dim" />
      
      {/* Floating Design Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-gold-muted rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-accent-coral-muted rounded-full blur-2xl opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent-purple-muted rounded-full blur-xl opacity-30" />

      <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div ref={heroRef} className="scroll-reveal space-y-8">
          <div className="space-y-2">
            <p className="text-text-secondary text-lg font-medium tracking-wide">Hello</p>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-none">
              I'm <span className="gradient-text">CHIKA</span>
              <br />
              <span className="gradient-text">FAVOR</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-text-secondary font-light">
              Graphic Designer
            </h2>
          </div>

          <div className="space-y-6">
            <blockquote className="text-xl lg:text-2xl font-serif italic text-text-primary border-l-4 border-accent-gold pl-6">
              "Giving every pixel a voice"
            </blockquote>
            
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              I'm a passionate creative and brand designer based in Nigeria, specializing in 
              transforming ideas into stunning visuals that communicate powerfully and create 
              lasting impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-accent-gold hover:bg-accent-coral text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Download CV
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative">
            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-gold-muted to-accent-coral-muted p-1">
              <div className="bg-background rounded-3xl p-2">
                <img
                  src={chikaPortrait}
                  alt="Chika Favor - Graphic Designer"
                  className="w-full h-auto rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent-purple text-white px-6 py-3 rounded-2xl font-semibold shadow-2xl animate-bounce">
              Available for Projects
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -z-10 top-8 right-8 w-full h-full border-2 border-accent-gold rounded-3xl opacity-30" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-accent-gold to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;