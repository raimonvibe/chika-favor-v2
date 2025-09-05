import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle
} from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mjkeplpr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@chikafavor.com',
      href: 'mailto:hello@chikafavor.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 (0) 123 456 7890',
      href: 'tel:+2341234567890'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="gradient-bg-secondary text-white px-4 py-2">
                  Currently Available
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Accepting new projects
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new creative projects. Whether you need a complete 
                brand identity, stunning marketing materials, or just want to discuss your ideas, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-lift border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Proof */}
            <Card className="border-0 shadow-lg gradient-bg">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="font-bold text-white mb-2">Quick Response Guarantee</h4>
                <p className="text-white/90 text-sm">
                  I respond to all inquiries within 24 hours. Let's start the conversation today!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name *</label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="Project inquiry" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">Budget Range</label>
                  <Input 
                    id="budget" 
                    name="budget"
                    placeholder="e.g., $500 - $1000" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message *</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project..." 
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full gradient-bg hover:opacity-90"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By sending this message, you agree to my terms of service and privacy policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
