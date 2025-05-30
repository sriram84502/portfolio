import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking a nav item (improved UX on mobile)
  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-slate-900/95 shadow-lg backdrop-blur-md text-white' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              <span className="text-primary">Whitemate</span>
              <span className={isScrolled ? 'text-white' : 'text-foreground'}>Solutions</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`${isScrolled ? 'text-white' : 'text-foreground'} hover:text-primary transition-colors font-medium`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-xl">Get In Touch</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`${isScrolled ? 'text-white' : 'text-foreground'} focus:outline-none`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className={`${isScrolled ? 'text-white' : 'text-foreground'} hover:text-primary transition-colors block py-2`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a href="#contact">
                <Button className="bg-primary text-white hover:bg-primary/90 w-full rounded-xl">Get In Touch</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
