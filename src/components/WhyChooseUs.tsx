
import { Award, Clock, Users, Shield, Star, Trophy } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "20+ Years of Excellence",
      description: "Two decades of proven expertise in transforming homes across India with award-winning designs."
    },
    {
      icon: Users,
      title: "Expert Design Team",
      description: "Certified interior designers with deep understanding of Indian homes and lifestyle needs."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your time. 95% of our projects are completed on schedule without compromising quality."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium materials, skilled craftsmanship, and comprehensive warranty on all our work."
    },
    {
      icon: Star,
      title: "5000+ Happy Homes",
      description: "Thousands of satisfied families trust us to create their dream living spaces."
    },
    {
      icon: Trophy,
      title: "Best Value Promise",
      description: "Competitive pricing without hidden costs. Get the most value for your interior design investment."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Choose
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> JP Interios?</span>
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We don't just design interiors, we create experiences. Here's what makes us the preferred choice for homeowners across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="font-inter text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="font-playfair text-2xl font-bold mb-4">Ready to Experience the JP Interios Difference?</h3>
            <p className="font-inter text-amber-100 mb-6 font-light">Join thousands of happy homeowners who chose quality, reliability, and exceptional design.</p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="font-playfair text-3xl font-bold">20+</div>
                <div className="font-inter text-amber-200 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold">5000+</div>
                <div className="font-inter text-amber-200 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold">99%</div>
                <div className="font-inter text-amber-200 text-sm">Customer Satisfaction</div>
              </div>
              <div>
                <div className="font-playfair text-3xl font-bold">50+</div>
                <div className="font-inter text-amber-200 text-sm">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
