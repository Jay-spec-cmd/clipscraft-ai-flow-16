
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurWork = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Residential",
      description: "Complete interior transformation of a 4BHK villa with contemporary design elements and premium finishes.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      title: "Corporate Office Design",
      category: "Commercial",
      description: "Sleek and functional office space design for a tech company, emphasizing productivity and collaboration.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Bangalore, Karnataka"
    },
    {
      id: 3,
      title: "Boutique Hotel Interiors",
      category: "Hospitality",
      description: "Elegant and comfortable interior design for a boutique hotel, blending luxury with local cultural elements.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Goa"
    },
    {
      id: 4,
      title: "Contemporary Apartment",
      category: "Residential",
      description: "Smart space utilization in a compact 2BHK apartment with modern amenities and stylish design.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Delhi, NCR"
    },
    {
      id: 5,
      title: "Restaurant Interior",
      category: "Commercial",
      description: "Warm and inviting restaurant design that creates the perfect ambiance for fine dining experiences.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Chennai, Tamil Nadu"
    },
    {
      id: 6,
      title: "Penthouse Living",
      category: "Residential",
      description: "Luxurious penthouse interior with panoramic city views, featuring bespoke furniture and artistic elements.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "Pune, Maharashtra"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Recent Work</span>
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Discover how we've transformed spaces into extraordinary experiences. Each project tells a unique story of design excellence and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold font-inter">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 hover:bg-gray-100 font-inter"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="font-inter text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-amber-600 font-medium">{project.location}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-amber-600 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="font-inter text-gray-500 mt-4 text-sm">
            Over 5000+ successful projects completed across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
