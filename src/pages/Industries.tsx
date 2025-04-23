
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const industries = [
  {
    id: "finance",
    name: "Finance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Protect sensitive financial data and transactions with our tailored security solutions for banks, investment firms, and fintech companies.",
    challenges: [
      "Regulatory compliance (PCI-DSS, SOX)",
      "Protection of sensitive customer financial data",
      "Fraud prevention and detection",
      "Continuous availability of online services"
    ],
    solutions: [
      "Comprehensive compliance frameworks",
      "Advanced fraud detection systems",
      "Secure payment processing protection",
      "Real-time transaction monitoring"
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    description: "Secure patient data and medical systems with HIPAA-compliant security solutions designed for healthcare providers and medical technology companies.",
    challenges: [
      "HIPAA compliance and patient data protection",
      "Medical device security",
      "Telehealth platform protection",
      "Legacy systems integration"
    ],
    solutions: [
      "HIPAA compliance frameworks",
      "Medical IoT device security",
      "Secure telehealth platforms",
      "PHI data encryption and protection"
    ]
  },
  {
    id: "government",
    name: "Government",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    description: "Protect critical infrastructure and sensitive government data with high-security solutions designed for public sector requirements.",
    challenges: [
      "Protection of critical infrastructure",
      "Compliance with government security standards",
      "Advanced persistent threats (APTs)",
      "Secure public service delivery"
    ],
    solutions: [
      "FedRAMP and CMMC compliance",
      "Critical infrastructure protection",
      "Advanced threat hunting",
      "Secure citizen data management"
    ]
  },
  {
    id: "energy",
    name: "Energy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Safeguard energy infrastructure with OT/IT security solutions designed for the unique challenges facing power generation and distribution companies.",
    challenges: [
      "OT/IT convergence security",
      "SCADA and ICS protection",
      "Critical infrastructure resilience",
      "Regulatory compliance"
    ],
    solutions: [
      "OT security monitoring",
      "NERC CIP compliance frameworks",
      "Industrial system hardening",
      "Resilient infrastructure design"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Protect manufacturing operations, intellectual property, and connected industrial systems with comprehensive security solutions.",
    challenges: [
      "Industrial IoT device security",
      "Intellectual property protection",
      "Supply chain security",
      "Production continuity"
    ],
    solutions: [
      "IIoT security frameworks",
      "IP protection strategies",
      "Secure supply chain management",
      "Resilient manufacturing systems"
    ]
  },
  {
    id: "retail",
    name: "Retail",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: "Secure e-commerce platforms, customer data, and retail operations with solutions tailored for modern retail businesses.",
    challenges: [
      "E-commerce platform security",
      "PCI-DSS compliance",
      "Customer data protection",
      "Omnichannel security"
    ],
    solutions: [
      "Secure payment processing",
      "PCI-DSS compliance programs",
      "Customer data encryption",
      "Unified commerce security"
    ]
  }
];

const Industries = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-cyber-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-cyber-gray">
              Industry-specific security solutions tailored for the unique challenges facing different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry) => (
              <div key={industry.id} className="cyber-card group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-cyber-green">{industry.icon}</div>
                  <a href={`#${industry.id}`} className="text-cyber-green hover:text-cyber-green/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-cyber-gray mb-4">{industry.description}</p>
                <a 
                  href={`#${industry.id}`} 
                  className="inline-flex items-center text-cyber-green hover:text-cyber-green/80 font-medium"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div key={industry.id} id={industry.id} className="pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="mb-4">{industry.icon}</div>
                    <h2 className="text-3xl font-bold mb-6">{industry.name}</h2>
                    <p className="text-cyber-gray mb-8">
                      {industry.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="text-cyber-green mr-2 mt-1">•</div>
                            <span className="text-cyber-gray">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Our Solutions</h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="text-cyber-green mr-2 mt-1">•</div>
                            <span className="text-cyber-gray">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="cta-button">
                      <Link to="/contact">Request a Consultation</Link>
                    </Button>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} cyber-card h-72 flex items-center justify-center`}>
                    <div className="text-center p-4">
                      <div className="mb-6">
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                      <p className="text-cyber-gray">Industry-specific security solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24">
            <div className="cyber-card text-center">
              <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-cyber-gray mb-8 max-w-2xl mx-auto">
                Every industry has unique security challenges. Whether your sector is listed here or not, our team can create a tailored security strategy for your specific needs.
              </p>
              <Button asChild className="cta-button">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Industries;
