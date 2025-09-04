import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const infoRef = useScrollAnimation({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@chikafavor.com',
      icon: '✉️',
      link: 'mailto:hello@chikafavor.com'
    },
    {
      title: 'Phone',
      value: '+234 (0) 123 456 789',
      icon: '📞',
      link: 'tel:+2341234567890'
    },
    {
      title: 'Location',
      value: 'Lagos, Nigeria',
      icon: '📍',
      link: '#'
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours',
      icon: '⏰',
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Behance', icon: '🎨', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
  ];

  return (
    <section id="contact" className="py-section bg-background">
      <div className="max-w-container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life 
            with creative design solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-coral rounded-full mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div ref={infoRef} className="scroll-reveal space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold gradient-text">
                Get in Touch
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ready to start your next project? I'd love to hear about your ideas and 
                discuss how we can work together to create something amazing.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="group p-6 bg-surface rounded-2xl border border-border hover:border-accent-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-3">{info.icon}</div>
                  <h4 className="font-semibold text-text-primary mb-1 group-hover:text-accent-gold transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-text-secondary text-sm">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-text-primary">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-center w-12 h-12 bg-surface rounded-full border border-border hover:border-accent-gold hover:bg-accent-gold hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-gradient-to-br from-accent-gold-muted to-accent-coral-muted rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-text-primary">Available for Projects</span>
              </div>
              <p className="text-text-secondary text-sm">
                Currently accepting new projects for Q1 2024. Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="scroll-reveal">
            <div className="bg-surface p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-text-primary">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full border-border focus:border-accent-gold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full border-border focus:border-accent-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full border-border focus:border-accent-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="w-full min-h-[120px] border-border focus:border-accent-gold resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent-gold hover:bg-accent-coral text-white font-semibold py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-text-secondary">
            © 2024 Chika Favor. All rights reserved. | Giving every pixel a voice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;