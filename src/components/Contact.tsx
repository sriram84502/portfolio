import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct the Google Form URL with parameters
      const formUrl = new URL('https://docs.google.com/forms/d/e/1FAIpQLSdV1HNDpsF9-ncum1weYxzCsCTi_58jBTKD93Tw7a84Q1Ouyg/formResponse');
      const params = new URLSearchParams({
        'entry.1541172473': formData.name,
        'entry.1973774067': formData.email,
        'entry.1556521922': formData.message
      });

      // Send the form data
      await fetch(formUrl.toString() + '?' + params.toString(), {
        method: 'GET',
        mode: 'no-cors', // This is required for Google Forms
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
        duration: 3000,
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Contact Us</h2>
          <p className="text-slate-700 max-w-2xl mx-auto font-medium">
            Ready to bring your ideas to life? Reach out to us today and let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-900">Get In Touch</h3>
            <p className="text-slate-700 mb-8">
              Fill out the form and our team will get back to you as soon as possible.
              We're here to help and answer any question you might have.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Email</h4>
                  <a href="mailto:swethamaganti218@gmail.com" className="text-slate-700 hover:text-primary transition-colors">
                    swethamaganti218@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Phone</h4>
                  <a href="tel:+918074022822" className="text-slate-700 hover:text-primary transition-colors">
                    +91 80740 22822
                  </a>
                </div>
              </div>

            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-slate-900">Follow Us</h4>
              <div className="flex space-x-4">
              <a 
                  href="https://wa.me/918074022822" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-5 w-5 text-primary fill-current"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/swetha_42713?igsh=dmNnc3E2YXhqcjFw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-base font-semibold text-primary">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-slate-900"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-base font-semibold text-primary">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-slate-900"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-base font-semibold text-primary">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-slate-900"
                    placeholder="Your message"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
