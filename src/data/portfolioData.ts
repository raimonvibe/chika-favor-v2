import socialMediaCampaigns from "@/assets/social-media-campaigns.png";
import brandIdentitySystems from "@/assets/brand-identity-systems.png";
import logoDesignCollection from "@/assets/logo-design-collection.png";
import eventPostersFlyers from "@/assets/event-posters-flyers.png";
import churchMediaDesigns from "@/assets/church-media-designs.jpg";
import corporateDesignSolutions from "@/assets/corporate-design-solutions.png";
import productPackagingDesign from "@/assets/product-packaging-design.png";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  specs: {
    client?: string;
    tools: string[];
    timeline: string;
    deliverables: string[];
  };
  tags: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "social-media-campaigns",
    title: "Social Media Campaigns",
    category: "Social Media",
    description: "Creative and engaging social media graphics designed to boost brand visibility and connect with online audiences across multiple platforms.",
    image: socialMediaCampaigns,
    specs: {
      client: "Various Brands",
      tools: ["Adobe Illustrator", "Photoshop", "Canva Pro"],
      timeline: "2-3 days",
      deliverables: ["Instagram posts", "Story templates", "Facebook graphics", "LinkedIn banners", "Brand guidelines"]
    },
    tags: ["Social Media", "Digital Marketing", "Campaigns"]
  },
  {
    id: "brand-identity-systems",
    title: "Brand Identity Systems",
    category: "Branding",
    description: "Complete brand identity packages including logo, typography, and color systems that establish a strong and consistent visual presence.",
    image: brandIdentitySystems,
    specs: {
      client: "Corporate Clients",
      tools: ["Adobe Illustrator", "Photoshop", "Figma"],
      timeline: "2-3 days",
      deliverables: ["Logo design", "Brand guidelines", "Color palette", "Typography guide", "Business cards"]
    },
    tags: ["Brand Identity", "Logo Design", "Guidelines"]
  },
  {
    id: "logo-design-collection",
    title: "Logo Design Collection",
    category: "Branding",
    description: "Unique and memorable logo designs tailored to reflect each brand's personality, values, and market positioning.",
    image: productPackagingDesign,
    specs: {
      client: "Startups & SMEs",
      tools: ["Adobe Illustrator", "Figma"],
      timeline: "2-3 days",
      deliverables: ["Primary logo", "Logo variations", "Favicon", "Social media logos", "Vector files"]
    },
    tags: ["Logo", "Brand Mark", "Visual Identity"]
  },
  {
    id: "event-posters-flyers",
    title: "Event Posters & Flyers",
    category: "Print Design",
    description: "Bold and eye-catching event posters and flyers created to capture attention and communicate key event details effectively.",
    image: eventPostersFlyers,
    specs: {
      client: "Event Organizers",
      tools: ["Adobe InDesign", "Illustrator", "Photoshop"],
      timeline: "2-3 days",
      deliverables: ["Event posters", "Flyers", "Digital versions", "Print-ready files", "Social media variants"]
    },
    tags: ["Event Design", "Posters", "Flyers"]
  },
  {
    id: "church-media-designs",
    title: "Church Media Designs",
    category: "Faith-Based",
    description: "Inspirational flyers, posters, and digital banners crafted for church programs and events with clarity, warmth, and impact.",
    image: churchMediaDesigns,
    specs: {
      client: "Religious Organizations",
      tools: ["Adobe Creative Suite", "Canva"],
      timeline: "2-3 days",
      deliverables: ["Church flyers", "Event banners", "Program covers", "Social media graphics", "Bulletin designs"]
    },
    tags: ["Church Design", "Media", "Faith-Based"]
  },
  {
    id: "corporate-design-solutions",
    title: "Corporate Design Solutions",
    category: "Corporate",
    description: "Professional corporate identity systems, including stationery and brand guidelines, designed for businesses to establish authority and trust.",
    image: corporateDesignSolutions,
    specs: {
      client: "Corporate Businesses",
      tools: ["Adobe InDesign", "Illustrator", "Photoshop"],
      timeline: "2-3 days",
      deliverables: ["Corporate identity", "Letterheads", "Business cards", "Email signatures", "Presentation templates"]
    },
    tags: ["Corporate Identity", "Professional", "Business"]
  },
  {
    id: "product-packaging-design",
    title: "Product Packaging Design",
    category: "Packaging",
    description: "Creative and functional product packaging that stands out on shelves while reflecting the brand's values and appealing to its target market.",
    image: logoDesignCollection,
    specs: {
      client: "Product Companies",
      tools: ["Adobe Illustrator", "Photoshop", "Dimension"],
      timeline: "2-3 days",
      deliverables: ["Package design", "Label design", "3D mockups", "Dieline files", "Print specifications"]
    },
    tags: ["Packaging", "Product Design", "Retail"]
  }
];

export const categories = ["All", "Branding", "Social Media", "Print Design", "Digital", "Packaging", "Corporate", "Faith-Based"];