import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "chikafavor@ambpixeltech.com",
      action: () => window.open("mailto:chikafavor@ambpixeltech.com"),
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 901 234 5678",
      action: () => window.open("tel:+2349012345678"),
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Lagos, Nigeria",
      action: () => {},
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/ambpixeltech",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/chika-favor",
      color: "hover:text-blue-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/ambpixeltech",
      color: "hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/2349012345678",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="brand-gradient bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with creative minds. 
                  Whether you need a complete brand makeover or a simple flyer design, I'm here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index} 
                    className="hover-lift border-none shadow-float card-gradient cursor-pointer"
                    onClick={item.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <p className="text-muted-foreground">{item.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-brand card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's your project about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full md:w-auto px-8">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <Card className="inline-block border-none shadow-float card-gradient">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">
                  Prefer a Quick Chat?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Sometimes a conversation is better than an email. Feel free to reach out directly!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="btn-hero"
                    onClick={() => window.open("https://wa.me/2349012345678", "_blank")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Me
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-outline-brand"
                    onClick={() => window.open("mailto:chikafavor@ambpixeltech.com", "_blank")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;