import { Clock, DollarSign, Camera, HeadsetIcon, IndianRupee } from 'lucide-react';
import React from 'react';

const features = [
  {
    title: 'Fast Turnaround',
    description: 'We deliver our projects on time, every time, without compromising on quality.',
    icon: <Clock className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive pricing with packages tailored to fit your specific needs and budget.',
    icon: <IndianRupee className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Professional Gear & Talent',
    description: 'Access to high-end equipment and experienced professionals for your project.',
    icon: <Camera className="w-10 h-10 text-primary" />,
  },
  {
    title: '24/7 Support',
    description: "We're always available to answer your questions and address your concerns.",
    icon: <HeadsetIcon className="w-10 h-10 text-primary" />,
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-slate-900">Why Choose Us</h2>
          <p className="section-subtitle text-slate-700">
            We provide exceptional creative services with a commitment to quality, timeliness, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl card-hover shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="mb-5 p-3 bg-primary/10 rounded-xl w-fit">
                {React.cloneElement(feature.icon, { className: "w-10 h-10 text-primary" })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
