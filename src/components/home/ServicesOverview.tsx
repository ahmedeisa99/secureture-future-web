import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Network Design",
    description: "Custom secure network infrastructure planning to protect your data and systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyber-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Cloud Services & Integration",
    description: "Secure cloud migration, integration, and compliance solutions for your business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyber-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "AI Models",
    description: "Security-focused AI integrations and advanced threat detection models.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyber-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Penetration Testing",
    description: "Comprehensive offensive security testing and detailed vulnerability reporting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyber-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "SOC Monitoring",
    description: "24/7 security operation center with real-time threat response capabilities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyber-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  }
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-cyber-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-cyber-gray">
            Comprehensive cybersecurity solutions tailored to protect your digital assets and infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="cyber-card group">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-cyber-gray mb-6">
                  {service.description}
                </CardDescription>
                <Link 
                  to={`/services`} 
                  className="inline-flex items-center text-cyber-green hover:text-cyber-green/80 font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
