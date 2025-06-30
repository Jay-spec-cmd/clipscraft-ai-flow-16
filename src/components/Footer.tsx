
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/bee0ca78-94c2-4bb3-8e9e-962038d21dd3.png" 
                alt="JP Interios Logo" 
                className="h-16 mb-4 brightness-0 invert"
              />
              <p className="font-inter text-gray-400 max-w-md leading-relaxed font-light">
                JP Interios is your trusted partner in creating beautiful, functional living spaces. 
                With 20 years of experience, we transform houses into dream homes.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span className="font-inter">info@jpinterios.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span className="font-inter">+91 98765 43210</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                <span className="font-inter">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="font-inter hover:text-white transition-colors">Full Home Interiors</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Modular Kitchen</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Custom Furniture</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Space Planning</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Lighting Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="font-inter hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="font-inter hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-inter text-gray-400 mb-4 md:mb-0">
            © 2024 JP Interios. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
