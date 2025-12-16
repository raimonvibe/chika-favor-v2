import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Palette, Zap, TrendingUp, Users, Twitter } from "lucide-react";
import web3HeroImage from "@/assets/web3-design.jpeg";

const Web3Section = () => {
  const deliverables = [
    "Web3 landing page designs",
    "NFT collections & mint page designs",
    "Crypto & blockchain brand identity",
    "DAO dashboards & UI concepts",
    "Tokenomics visuals & pitch decks",
    "Social media & thread (𝕏 / Twitter) design assets"
  ];

  const strengths = [
    {
      icon: Palette,
      title: "Web3 Culture & Aesthetics",
      description: "Deep understanding of Web3 culture and visual language"
    },
    {
      icon: TrendingUp,
      title: "Conversion-Focused",
      description: "Clean, futuristic layouts designed for conversions"
    },
    {
      icon: Zap,
      title: "Mobile-First Design",
      description: "Responsive designs that work seamlessly across devices"
    },
    {
      icon: Users,
      title: "Investor-Ready",
      description: "Presentation-quality standards for stakeholder confidence"
    },
    {
      icon: Twitter,
      title: "Thread-Optimized",
      description: "Visuals crafted for Web3 storytelling on 𝕏 / Twitter"
    }
  ];

  return (
    <section id="web3" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header with Hero Image */}
      <div className="text-center mb-12 space-y-6">
        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
          Web3 Specialist
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Web3 Design Solutions
        </h2>
        
        {/* Web3 Hero Image */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
          <img
            src={web3HeroImage}
            alt="Web3 Design - Orderly Network"
            className="w-full h-auto"
          />
        </div>
        
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          I design high-impact Web3 visuals that bridge innovation, trust, and conversion. 
          From blockchain startups to NFT projects, my designs are crafted to communicate 
          complex decentralized ideas in a clear, modern, and investor-ready way.
        </p>
      </div>

      {/* Approach Statement */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mb-12 border border-purple-100">
        <div className="flex items-start gap-4">
          <Rocket className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">My Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              My approach blends futuristic aesthetics with strong UX principles, ensuring every 
              design not only looks cutting-edge but also guides users seamlessly through the product. 
              Whether it's a Web3 landing page, DAO branding, or NFT launch visuals, I focus on 
              <span className="font-semibold text-purple-700"> clarity, credibility, and scalability</span>.
            </p>
          </div>
        </div>
      </div>

      {/* What I Deliver */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What I Deliver</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Turnaround Time */}
      <div className="bg-sky-50 rounded-xl p-6 mb-12 text-center border border-sky-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
          <Zap className="h-6 w-6 text-sky-600" />
          Turnaround Time
        </h3>
        <p className="text-2xl font-bold text-sky-600 mb-1">2–3 days delivery per project</p>
        <p className="text-gray-600">Fast, efficient, and quality-driven without compromising detail.</p>
      </div>

      {/* Design Strengths */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Design Strengths</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{strength.title}</h4>
                  <p className="text-sm text-gray-600">{strength.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Why Work With Me */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Why Work With Me</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          I don't just design for Web3 — I design for <span className="font-bold">adoption</span>. 
          Every project is built to communicate value, build trust, and stand out in a 
          fast-moving decentralized ecosystem.
        </p>
      </div>
    </section>
  );
};

export default Web3Section;
