import { ArrowDown, Palette, Figma, Camera, Layers, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/chika-profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    // Placeholder for CV download functionality
    console.log("CV download would be implemented here");
  };

  const floatingIcons = [
    { Icon: Palette, className: "top-20 left-20 float-animation", delay: "float-delay-1" },
    { Icon: Figma, className: "top-32 right-32 float-animation", delay: "float-delay-2" },
    { Icon: Camera, className: "bottom-40 left-16 float-animation", delay: "float-delay-3" },
    { Icon: Layers, className: "bottom-32 right-20 float-animation", delay: "float-delay-1" },
    { Icon: Zap, className: "top-40 left-1/2 float-animation", delay: "float-delay-2" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, delay }, index) => (
        <div
          key={index}
          className={`hidden lg:block absolute ${className} ${delay} w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl shadow-float flex items-center justify-center`}
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>
      ))}

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <img
                  src={profileImage}
                  alt="CHIKA FAVOR - Graphic Designer"
                  className="w-full h-full object-cover rounded-3xl drip-bottom shadow-brand"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl drip-bottom"></div>
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          {/* Hello Text */}
          <div className="mb-4">
            <p className="text-lg md:text-xl text-muted-foreground font-medium">Hello</p>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              I'm <span className="brand-gradient bg-clip-text text-transparent">CHIKA FAVOR</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Graphic Designer
            </h2>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-foreground font-medium italic">
              "Giving every pixel a voice"
            </p>
          </div>

          {/* Description */}
          <div className="mb-10">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm a passionate creative and brand designer based in Nigeria, specializing in transforming ideas into stunning visuals that communicate powerfully and create lasting impact.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={downloadCV}
              size="lg"
              className="btn-hero px-8 py-3 text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="btn-outline-brand px-8 py-3 text-lg font-semibold"
            >
              About Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;