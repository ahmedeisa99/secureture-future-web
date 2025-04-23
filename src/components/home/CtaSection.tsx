
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-cyber-navy to-cyber-dark-blue">
      <div className="container mx-auto px-4">
        <div className="bg-cyber-light-blue/20 border border-cyber-light-blue rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-red/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-cyber-gray text-lg mb-8">
              Get in touch with our security experts for a free initial consultation. We'll help you identify vulnerabilities and build a tailored security strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="cta-button">
                <Link to="/contact">Request a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="secondary-button">
                <Link to="/services">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
