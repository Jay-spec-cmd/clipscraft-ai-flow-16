
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/921fc471-d2b5-4620-b9c6-ed6d4dfce764.png" 
            alt="ClipsCraft Logo" 
            className="h-20 mx-auto mb-6 hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Automate Your Business with
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> AI Agents</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your workflows with intelligent AI automation. ClipsCraft builds custom AI agents that work 24/7 to streamline your operations and boost productivity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Businesses Automated</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">10M+</div>
            <div className="text-gray-600">Tasks Completed</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">85%</div>
            <div className="text-gray-600">Time Saved</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
