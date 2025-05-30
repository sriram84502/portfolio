import { Heart, ArrowUpRight, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <p className="text-slate-300 mt-4 max-w-md">
              Your partner for creative visual solutions, helping businesses and individuals bring their vision to life with expert design and production.
            </p>
            <div className="flex space-x-4 mt-6">
            <a 
                href="https://wa.me/918074022822" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-[18px] h-[18px] fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/swetha_42713?igsh=dmNnc3E2YXhqcjFw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                     className="text-slate-300 hover:text-primary transition-colors flex items-center group">
                    <span>{item}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                'Video Editing',
                'Website Design',
                'Camera Rentals',
                'Social Media Management'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#services" 
                     className="text-slate-300 hover:text-primary transition-colors flex items-center group">
                    <span>{item}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-3 text-primary h-5 w-5" />
                <a href="mailto:swethamaganti218@gmail.com" className="text-slate-300 hover:text-primary transition-colors">
                  swethamaganti218@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary h-5 w-5" />
                <a href="tel:+918074022822" className="text-slate-300 hover:text-primary transition-colors">
                  +91 80740 22822
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Whitemate Solutions. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-accent" /> by Whitemate Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
