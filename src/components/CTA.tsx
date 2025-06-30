
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Home?
        </h2>
        <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
          Let JP Interios bring your dream interior to life. Book a free consultation today and discover how we can transform your space into something extraordinary.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Designer
          </Button>
        </div>
        
        <p className="text-amber-200 mt-6 text-sm">
          Free consultation • Custom design • Expert installation
        </p>
      </div>
    </section>
  );
};

export default CTA;
