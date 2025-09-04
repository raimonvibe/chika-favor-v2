import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface z-50">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-accent-gold via-accent-coral to-accent-purple transition-all duration-300"
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="text-2xl font-serif font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              CHIKA FAVOR
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              variant="default"
              className="bg-accent-gold hover:bg-accent-coral text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              onClick={() => scrollToSection('contact')}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;