
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Design",
      price: "₹1,50,000",
      period: "/project",
      description: "Perfect for single room makeovers and small spaces",
      features: [
        "Single room design",
        "2D floor plan",
        "Color consultation",
        "Basic furniture layout",
        "Material selection guide"
      ],
      popular: false
    },
    {
      name: "Complete Home",
      price: "₹5,00,000",
      period: "/project",
      description: "Comprehensive design solution for entire homes",
      features: [
        "Whole home design",
        "3D visualization",
        "Custom furniture design",
        "Lighting design",
        "Project management",
        "Installation supervision",
        "1 year warranty"
      ],
      popular: true
    },
    {
      name: "Luxury Premium",
      price: "Custom",
      period: "pricing",
      description: "Bespoke luxury interiors with premium materials",
      features: [
        "Luxury material selection",
        "Custom millwork",
        "Designer furniture",
        "Smart home integration",
        "Dedicated project manager",
        "Premium finishes",
        "Lifetime support",
        "International brands"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Design Packages
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> & Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect interior design package that fits your needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-2 border-amber-500 ring-4 ring-amber-100' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <Button 
                  className={`w-full mb-8 py-3 rounded-full font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white' 
                      : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Luxury Premium' ? 'Contact Us' : 'Get Started'}
                </Button>
                
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
