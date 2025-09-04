import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      name: "Adaeze",
      role: "Event Planner",
      company: "Celebrations by Adaeze",
      review: "Chika delivered beyond my expectations! The flyer design he created for my event had people talking for weeks. His attention to detail and creative vision are exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Mr. Johnson",
      role: "CEO",
      company: "TechCorp Africa",
      review: "Our company's brand identity feels alive and professional now, thanks to Chika's creativity. He understood our vision perfectly and delivered results that exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sarah",
      role: "Social Media Manager",
      company: "Digital Marketing Pro",
      review: "What I loved most was his attention to detail. Every design felt personal and unique. Chika has an incredible ability to translate ideas into stunning visuals.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Pastor Michael",
      role: "Senior Pastor",
      company: "Grace Community Church",
      review: "The church flyers and promotional materials Chika designed have significantly improved our community engagement. His designs perfectly capture the spirit of our ministry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Kemi Oladele",
      role: "Business Owner",
      company: "Kemi's Kitchen",
      review: "From logo design to social media graphics, Chika transformed my small business's visual identity. Sales have increased by 40% since the rebrand!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "David Okoro",
      role: "Marketing Director",
      company: "Urban Fitness",
      review: "Professional, creative, and reliable. Chika's advertisement designs helped us reach our target audience effectively. Highly recommended for any design needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client <span className="brand-gradient bg-clip-text text-transparent">Reviews</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="group hover-lift border-none shadow-float card-gradient h-full relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    "{review.review}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center mt-auto">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-primary font-medium">{review.role}</p>
                      <p className="text-xs text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="inline-block border-none shadow-brand card-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Join My Happy Clients?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Experience the same level of creativity, professionalism, and results that my clients rave about.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-hero px-8 py-3 rounded-lg font-semibold">
                    Start Your Project
                  </button>
                  <button className="btn-outline-brand px-8 py-3 rounded-lg font-semibold">
                    View More Reviews
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;