
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/bee0ca78-94c2-4bb3-8e9e-962038d21dd3.png" 
            alt="JP Interios Logo" 
            className="h-24 mx-auto mb-6 hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Home to Dream
          <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Interiors</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Transform your living space with JP Interios. We create personalized interior designs that reflect your style and enhance your lifestyle with expert craftsmanship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 font-inter">
            <Play className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="font-playfair text-3xl font-bold text-amber-600">5k</div>
            <div className="font-inter text-gray-600 font-medium">Completed Projects</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="font-playfair text-3xl font-bold text-amber-600">20</div>
            <div className="font-inter text-gray-600 font-medium">Years of Excellence</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="font-playfair text-3xl font-bold text-amber-600">9k</div>
            <div className="font-inter text-gray-600 font-medium">Satisfied Clients</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="font-playfair text-3xl font-bold text-amber-600">99%</div>
            <div className="font-inter text-gray-600 font-medium">Happy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
