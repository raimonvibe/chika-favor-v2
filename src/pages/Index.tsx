import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Portfolio from '@/components/Portfolio';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Web3Section from "@/components/Web3Section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <Portfolio />
        <Web3Section />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

