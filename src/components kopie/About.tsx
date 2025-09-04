import { CheckCircle2, Globe, Palette, Users, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "Graphic Design (Logos, Flyers, Posters)", level: 95 },
    { name: "Branding & Rebranding", level: 90 },
    { name: "Social Media Design", level: 88 },
    { name: "Adobe Photoshop, Illustrator, Figma", level: 92 },
    { name: "Creative Strategy", level: 85 },
  ];

  const highlights = [
    {
      icon: Palette,
      title: "Creative Excellence",
      description: "Transforming ideas into visually compelling designs"
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Strategic approach to visual communication"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Understanding and exceeding client expectations"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with modern design trends"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="brand-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio Section */}
            <div className="space-y-8">
              <div className="card-gradient p-8 rounded-3xl shadow-float hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">About Me</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm <span className="font-semibold text-primary">CHIKA FAVOR</span>, a passionate creative and brand designer with a keen eye for detail. I specialize in transforming ideas into stunning visuals that communicate powerfully.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  From logos and brand identities to social media creatives and advertising designs, I help businesses and individuals bring their vision to life. Every design I create carries my brand philosophy — <em className="text-primary font-medium">giving every pixel a voice</em>.
                </p>

                {/* Languages */}
                <div className="flex items-center space-x-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-semibold">Languages:</span>
                    <span className="text-muted-foreground ml-2">English</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="hover-lift border-none shadow-float card-gradient">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <highlight.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="card-gradient p-8 rounded-3xl shadow-float">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Skills</h3>
                </div>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Touch */}
              <Card className="border-none shadow-float card-gradient">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">My Design Philosophy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every design tells a story. I believe in creating visuals that don't just look good, but communicate effectively and leave a lasting impression. Each project is an opportunity to give voice to ideas through thoughtful design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;