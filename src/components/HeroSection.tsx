import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail } from 'lucide-react';
import designerPortrait from '@/assets/new_profile_picture.png';
import cvFile from '@/assets/my_resume.pdf'; // ✅ place your CV here

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xl font-semibold tracking-wide text-gray-700 uppercase font-sans">
                Hello
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                I'm <span className="gradient-text">CHIKA</span>
                <br />
                <span className="gradient-text">FAVOR</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light font-sans">
                Graphic Designer
              </h2>
            </div>

            <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 font-serif">
              "Giving every pixel a voice"
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-sans">
              I'm a passionate creative and brand designer based in Nigeria, specializing in 
              transforming ideas into stunning visuals that communicate powerfully and create 
              lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Download CV */}
              <a
                href={cvFile}
                download="Chika_Favor_CV.pdf"
              >
                <Button size="lg" className="gradient-bg hover:opacity-90 font-sans">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>

              {/* Contact Button */}
              <a href="#contact">
                <Button variant="outline" size="lg" className="hover-lift font-sans">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <img
                src={designerPortrait}
                alt="Chika Favor - Graphic Designer"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:grayscale group-hover:brightness-110 group-hover:saturate-75"
              />

              {/* Golden Overlay on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-yellow-500/40 to-yellow-300/30 transition duration-500"></div>

              {/* Golden Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-yellow-500/70 transition duration-500"></div>
              
              {/* Floating Badge */}
              <Badge className="absolute top-6 right-6 gradient-bg-secondary text-white px-4 py-2 text-sm font-medium font-sans">
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

