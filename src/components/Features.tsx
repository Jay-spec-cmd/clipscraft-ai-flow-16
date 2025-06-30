
import { Home, Palette, Ruler, Sofa, Lightbulb, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Home,
      title: "Full Home Interiors",
      description: "Complete home makeovers with our comprehensive interior design services for every room."
    },
    {
      icon: Sofa,
      title: "Modular Kitchen & Furniture",
      description: "Custom-designed modular kitchens and furniture solutions tailored to your space and needs."
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color schemes and palette selection to create the perfect ambiance for your home."
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimal space utilization with smart design solutions that maximize functionality and aesthetics."
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Professional lighting solutions that enhance mood and highlight your interior's best features."
    },
    {
      icon: Users,
      title: "Personal Design Consultant",
      description: "Dedicated design consultants who work with you from concept to completion."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Interior Design
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto font-light">
            From concept to completion, we offer comprehensive interior design services to transform your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-amber-100"
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="font-inter text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
