import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const portfolioItems = [
  {
    title: "Fresco Naturals",
    category: "Web Designing",
    image: "/images/portfolio/fresco.jpeg",
    url: "https://www.fresconaturals.in",
    description: "Fresco Naturals is a leading provider of natural and organic skincare products. Our mission is to help you achieve healthy, radiant skin with our high-quality, ethically sourced ingredients."
  },
  {
    title: "The Career Recruitment",
    category: "Web Designing",
    image: "/images/portfolio/thecareer.jpeg",
    url: "https://thecareerrecruitment.co.uk",
    description: "Building Careers, Building Companies: Partner with Our Proven Recruitment Firm."
  },
  {
    title: "RVR Hospitals",
    category: "Video Editing",
    image: "/images/portfolio/7p10.jpg",
    url: "https://www.instagram.com/dr_chethana_gynaecologist/reels/",
    description: "High-end commercial video production with cinematic quality and storytelling."
  },
  {
    title: "Video Editing Works",
    category: "Video Editing",
    image: "https://media.istockphoto.com/id/1427009873/photo/male-editor-working-on-video-on-pc.jpg?s=612x612&w=0&k=20&c=U8ZdgkLn-4afSiIzOGHncy2RBCfcnatXYPx_jxdRB9o=",
    url: "https://drive.google.com/drive/folders/1r2cRiebo_E7p2fY-GIlAGBAHKoA3H0wO",
    description: "High-end commercial video production with cinematic quality and storytelling."
  },
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const isMobile = useIsMobile();
  const visibleItems = isMobile ? 1 : 3;
  const maxIndex = portfolioItems.length - visibleItems;

  const next = () => {
    setActiveIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoScroll, maxIndex]);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Take a look at some of our recent projects and see what we can do for you.
          </p>
        </div>
        
        <div className="mb-8 hidden md:block">
          <div className="relative overflow-hidden"
               onMouseEnter={() => setAutoScroll(false)}
               onMouseLeave={() => setAutoScroll(true)}>
            <div className="flex gap-6 transition-all duration-500" 
                 style={{ transform: `translateX(-${activeIndex * (33.33 + 1.5)}%)` }}>
              {portfolioItems.map((item, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-none relative group overflow-hidden rounded-2xl cursor-pointer"
                  style={{ transition: 'all 0.5s ease' }}
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="relative h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs rounded-full mb-2">{item.category}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90 mb-4 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            
            <button 
              onClick={prev}
              disabled={activeIndex === 0}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg z-10 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={next}
              disabled={activeIndex === maxIndex}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg z-10 ${activeIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'}`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
         
        {/* Mobile portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {portfolioItems.slice(0, 4).map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5">
                    <span className="inline-block px-2 py-1 bg-primary/80 text-white text-xs rounded-full mb-2">{item.category}</span>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/90 mb-3 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;