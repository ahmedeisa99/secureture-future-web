
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Home } from "lucide-react";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-navy border-t border-cyber-light-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-cyber-gray mb-4">
              Providing leading cybersecurity solutions to protect your digital assets and secure your future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-gray hover:text-cyber-green">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-cyber-gray hover:text-cyber-green">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Network Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Cloud Services & Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  AI Models
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cyber-gray hover:text-cyber-green transition-colors">
                  SOC Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Home className="h-5 w-5 text-cyber-green mr-3 mt-0.5" />
                <span className="text-cyber-gray">
                  Gehan Street, Mansoura<br />
                  Dakahlia Governorate, Egypt
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cyber-green mr-3" />
                <a href="tel:+201092401964" className="text-cyber-gray hover:text-cyber-green">
                  +20 (109) 240-1964
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cyber-green mr-3" />
                <a href="mailto:info@secureture.com" className="text-cyber-gray hover:text-cyber-green">
                  info@secuture.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyber-light-blue mt-12 pt-8 text-center text-cyber-gray">
          <p>&copy; {currentYear} Secuture. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-cyber-green">Privacy Policy</Link>
            {' '} | {' '}
            <Link to="/terms-of-service" className="hover:text-cyber-green">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
