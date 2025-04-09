import { Quote } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "Working with Visual Creative was an absolute pleasure. They delivered our website project on time and exceeded our expectations in every way.",
    name: "Sarah Johnson",
    company: "Techwave Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The team's attention to detail and creativity transformed our promotional video into something truly special. I highly recommend their services.",
    name: "Michael Chen",
    company: "Innovate Media",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Professional, responsive, and incredibly talented. Visual Creative helped us bring our vision to life with their camera equipment and expertise.",
    name: "Emily Rodriguez",
    company: "Horizon Events",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "The quality of work delivered by Visual Creative is outstanding. Their creative approach to our brand redesign project helped us stand out in a competitive market.",
    name: "David Williams",
    company: "Elevate Marketing",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    quote: "From concept to execution, Visual Creative exceeded our expectations. Their team is professional, creative, and a pleasure to work with on all our projects.",
    name: "Jennifer Thompson",
    company: "Global Media Group",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  }
];

const Testimonials = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<any>(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-slate-900">What Our Clients Say</h2>
          <p className="section-subtitle text-slate-700">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>
        
        <div className="mb-12 relative">
          <Carousel 
            opts={{ 
              loop: true,
              align: "start",
            }}
            className="w-full max-w-5xl mx-auto px-4"
            setApi={setApi}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
                  <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                    <Quote className="text-primary h-10 w-10 mb-4" />
                    <p className="text-slate-700 mb-6 relative z-10 min-h-[100px] leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="rounded-full overflow-hidden border-2 border-primary/20 mr-4 shadow-sm">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                        <p className="text-primary font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="Client logo" className="h-8" />
          </div>
          <div className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png" alt="Client logo" className="h-8" />
          </div>
          <div className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/195px-Apple_logo_black.svg.png" alt="Client logo" className="h-8" />
          </div>
          <div className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="Client logo" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
