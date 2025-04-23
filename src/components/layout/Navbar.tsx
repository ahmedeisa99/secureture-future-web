
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "bg-cyber-dark-blue/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-white">
            Secure<span className="text-cyber-green">ture</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-cyber-green transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-cyber-green transition-colors">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-cyber-green transition-colors">
            Services
          </Link>
          <Link to="/industries" className="text-white hover:text-cyber-green transition-colors">
            Industries
          </Link>
          <Link to="/contact" className="text-white hover:text-cyber-green transition-colors">
            Contact
          </Link>
          <Button asChild className="cta-button">
            <Link to="/contact">Get a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 h-auto" : "opacity-0 h-0 pointer-events-none"
      }`}>
        <div className="bg-cyber-navy/95 backdrop-blur-md px-4 py-8 space-y-4 mt-2">
          <Link 
            to="/" 
            className="block text-white hover:text-cyber-green py-2" 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:text-cyber-green py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="block text-white hover:text-cyber-green py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/industries" 
            className="block text-white hover:text-cyber-green py-2"
            onClick={() => setIsOpen(false)}
          >
            Industries
          </Link>
          <Link 
            to="/contact" 
            className="block text-white hover:text-cyber-green py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="cta-button w-full mt-4">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Consultation</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
