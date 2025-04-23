import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Animated Background with grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
      
      {/* Enhanced animated circles with Framer Motion */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyber-green filter blur-3xl"
      />
      <motion.div 
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-cyber-red filter blur-3xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Secure Your Future with{" "}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-cyber-green"
            >
              Secuture
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-cyber-gray mb-8"
          >
            Comprehensive cybersecurity solutions tailored for modern enterprises. Protect your digital assets and stay ahead of evolving threats.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="cta-button relative overflow-hidden group">
                <Link to="/contact">
                  Request a Consultation
                  <div className="absolute inset-0 bg-cyber-green opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="secondary-button">
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            {/* Keep existing certifications with added hover animations */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <div className="bg-cyber-green p-2 rounded">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-cyber-dark-blue"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </motion.svg>
              </div>
              <span className="ml-2 text-cyber-white">SOC 2 Type II Certified</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <div className="bg-cyber-green p-2 rounded">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-cyber-dark-blue"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </motion.svg>
              </div>
              <span className="ml-2 text-cyber-white">ISO 27001 Compliant</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <div className="bg-cyber-green p-2 rounded">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-cyber-dark-blue"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </div>
              <span className="ml-2 text-cyber-white">24/7 Monitoring</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
