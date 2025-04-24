
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyber-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protecting Your Digital Assets
            </h2>
            <p className="text-cyber-gray mb-6">
              Secuture was founded with a mission to make advanced cybersecurity accessible to organizations of all sizes. Our team of seasoned security experts brings together decades of experience in defending against the most sophisticated cyber threats.
            </p>
            <p className="text-cyber-gray mb-8">
              We believe that security isn't just about deploying technology—it's about understanding your business, identifying what matters most, and building defense-in-depth strategies that evolve with the threat landscape.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-cyber-green mb-2">98%</div>
                <div className="text-cyber-gray">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyber-green mb-2">500+</div>
                <div className="text-cyber-gray">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyber-green mb-2">30+</div>
                <div className="text-cyber-gray">Security Experts</div>
              </div>
            </div>
            <Button asChild variant="outline" className="secondary-button">
              <Link to="/about">Learn more about us</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-cyber-navy border border-cyber-light-blue rounded-lg p-6 md:p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose Secureture?</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 bg-cyber-green/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Expert Team</h4>
                    <p className="text-cyber-gray">Certified security professionals with experience across industries.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-cyber-green/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Tailored Solutions</h4>
                    <p className="text-cyber-gray">Custom security strategies aligned with your business needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-cyber-green/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">24/7 Support</h4>
                    <p className="text-cyber-gray">Round-the-clock monitoring and emergency response.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-cyber-green/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyber-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Compliance Expertise</h4>
                    <p className="text-cyber-gray">Support for GDPR, HIPAA, SOC 2, ISO 27001, and more.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-cyber-green rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
