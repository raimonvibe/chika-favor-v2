import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const aboutRef = useScrollAnimation();
  const skillsRef = useScrollAnimation({ threshold: 0.2 });
  const philosophyRef = useScrollAnimation({ threshold: 0.2 });

  const skills = [
    { name: 'Graphic Design (Logos, Flyers, Posters)', level: 95 },
    { name: 'Branding & Rebranding', level: 90 },
    { name: 'Social Media Design', level: 88 },
    { name: 'Adobe Photoshop, Illustrator, Figma', level: 92 },
    { name: 'Creative Strategy', level: 85 },
  ];

  const highlights = [
    {
      title: 'Creative Excellence',
      description: 'Transforming ideas into visually compelling designs',
      icon: '🎨',
    },
    {
      title: 'Brand Strategy',
      description: 'Strategic approach to visual communication',
      icon: '💡',
    },
    {
      title: 'Client-Focused',
      description: 'Understanding and exceeding client expectations',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Staying ahead with modern design trends',
      icon: '⚡',
    },
  ];

  return (
    <section id="about" className="py-section bg-surface">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div ref={aboutRef} className="scroll-reveal space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-serif font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-coral rounded-full" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-text-primary">
                I'm <strong className="gradient-text">CHIKA FAVOR</strong>, a passionate creative and 
                brand designer with a keen eye for detail. I specialize in transforming ideas into 
                stunning visuals that communicate powerfully.
              </p>
              
              <p className="text-text-secondary">
                From logos and brand identities to social media creatives and advertising designs, 
                I help businesses and individuals bring their vision to life. Every design I create 
                carries my brand philosophy — <em>giving every pixel a voice</em>.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group p-6 bg-background rounded-2xl border border-border hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{highlight.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Philosophy */}
          <div className="space-y-12">
            {/* Skills */}
            <div ref={skillsRef} className="scroll-reveal">
              <h3 className="text-3xl font-serif font-semibold mb-8 gradient-text">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-accent-gold font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface-dim rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-gold to-accent-coral rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div ref={philosophyRef} className="scroll-reveal">
              <div className="bg-gradient-to-br from-accent-gold-muted to-accent-coral-muted p-8 rounded-3xl">
                <h4 className="text-2xl font-serif font-semibold mb-4 text-text-primary">
                  My Design Philosophy
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  Every design tells a story. I believe in creating visuals that don't just 
                  look good, but communicate effectively and leave a lasting impression. 
                  Each project is an opportunity to give voice to ideas through thoughtful design.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-background p-6 rounded-2xl border border-border">
              <h4 className="font-semibold text-text-primary mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent-gold-muted text-text-primary rounded-full text-sm font-medium">
                  English (Native)
                </span>
                <span className="px-4 py-2 bg-accent-coral-muted text-text-primary rounded-full text-sm font-medium">
                  Igbo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;