import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Lightbulb, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Graphic Design (Logos, Flyers, Posters)', percentage: 95 },
    { name: 'Branding & Rebranding', percentage: 90 },
    { name: 'Social Media Design', percentage: 88 },
    { name: 'Adobe Photoshop, Illustrator, Figma', percentage: 92 },
    { name: 'Creative Strategy', percentage: 85 }
  ];

  const strengths = [
    {
      icon: Palette,
      title: 'Creative Excellence',
      description: 'Transforming ideas into visually compelling designs'
    },
    {
      icon: Lightbulb,
      title: 'Brand Strategy',
      description: 'Strategic approach to visual communication'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Understanding and exceeding client expectations'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Staying ahead with modern design trends'
    }
  ];

  const languages = ['English (Native)', 'Igbo'];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm <strong>CHIKA FAVOR</strong>, a passionate creative and brand designer with a keen 
                eye for detail. I specialize in transforming ideas into stunning visuals that 
                communicate powerfully.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                From logos and brand identities to social media creatives and advertising designs, 
                I help businesses and individuals bring their vision to life. Every design I create 
                carries my brand philosophy — <em className="gradient-text font-medium">giving every pixel a voice</em>.
              </p>
            </div>

            {/* Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <strength.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{strength.title}</h3>
                    <p className="text-sm text-muted-foreground">{strength.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Design Philosophy */}
            <Card className="border-0 shadow-lg gradient-bg-secondary">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-white">My Design Philosophy</h3>
                <p className="text-white/90 leading-relaxed">
                  Every design tells a story. I believe in creating visuals that don't just look good, 
                  but communicate effectively and leave a lasting impression. Each project is an 
                  opportunity to give voice to ideas through thoughtful design.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <div>
              <h3 className="font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
