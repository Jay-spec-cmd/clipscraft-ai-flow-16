import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/7f0ff9ec-b7fa-44d9-a2ba-1f1fd7763760.png')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Background decoration - keeping some subtle effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/bee0ca78-94c2-4bb3-8e9e-962038d21dd3.png" 
            alt="JP Interios Logo" 
            className="h-24 mx-auto mb-6 hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          Home to Dream
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Interiors</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
          Transform your living space with JP Interios. We create personalized interior designs that reflect your style and enhance your lifestyle with expert craftsmanship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 font-inter backdrop-blur-sm">
            <Play className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20">
            <div className="font-playfair text-3xl font-bold text-amber-400">5k</div>
            <div className="font-inter text-white/90 font-medium">Completed Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20">
            <div className="font-playfair text-3xl font-bold text-amber-400">20</div>
            <div className="font-inter text-white/90 font-medium">Years of Excellence</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20">
            <div className="font-playfair text-3xl font-bold text-amber-400">9k</div>
            <div className="font-inter text-white/90 font-medium">Satisfied Clients</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/20">
            <div className="font-playfair text-3xl font-bold text-amber-400">99%</div>
            <div className="font-inter text-white/90 font-medium">Happy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
