
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 section-padding bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Creative Design Services
            </span>
            <h1 className="heading-xl">
              <span className="hero-text-gradient">Creative Visual Solutions</span> for Your Brand
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-md">
              Your one-stop-shop for website design, video editing and camera rentals.
              Professional quality with a personal touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services">
                <Button className="btn-primary group w-full sm:w-auto">
                  Explore Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                  View Our Work
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-10 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-10 z-0"></div>
            
            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Creative workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <span className="text-white font-medium">Professional Creative Services</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl overflow-hidden shadow-xl -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt="Design elements"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
