import { Video, Globe, Camera, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing services for all your needs, from commercial ads to personal projects.',
    icon: <Video className="w-12 h-12 text-primary" />,
    bgImage: "https://media.istockphoto.com/id/1427009873/photo/male-editor-working-on-video-on-pc.jpg?s=612x612&w=0&k=20&c=U8ZdgkLn-4afSiIzOGHncy2RBCfcnatXYPx_jxdRB9o=",
    href: "#contact"
  },
  {
    title: 'Website Design',
    description: 'Custom website design and development services that help your business stand out online.',
    icon: <Globe className="w-12 h-12 text-primary" />,
    bgImage: "https://images.ctfassets.net/wowgx05xsdrr/3TuTq2xQWcJsRBRkHbQSV4/56ed7aeff3e6312f6bcaec268bb7fb44/2019-August-Content-Blog-Headers-Batch-1-CBD-Marketing-4858-MT-v2-_1x.jpg?fm=webp&w=3840&q=75",
    href: "#contact"
  },
  {
    title: 'Camera Rentals',
    description: 'High-quality camera and equipment rentals for your photography and videography projects.',
    icon: <Camera className="w-12 h-12 text-primary" />,
    bgImage: "https://blog.online-convert.com/wp-content/uploads/2019/09/Renting-photography-gears-pros-and-cons.jpg",
    href: "#contact"
  },
  {
    title: 'Social Media Management',
    description: 'Grow online with expert content, strategy, and audience engagement support.',
    icon: <Users className="w-12 h-12 text-primary" />,
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    href: "#contact"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of creative services to help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-xl hover-scale"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              ></div>
              
              <div className="relative z-20 p-8 flex flex-col justify-end h-full min-h-[300px] md:min-h-[320px]">
                <div className="space-y-4">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-xl w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                  {/* <div className="pt-4">
                    <a href={service.href}>
                      <Button variant="default" className="bg-primary text-white hover:bg-primary/90 rounded-xl shadow-lg">
                        Learn More
                      </Button>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
