
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "network-design",
      title: "Network Design",
      description: "Our secure network design services help organizations build robust, scalable, and secure network infrastructures that protect their data and systems while enabling business growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      offerings: [
        "Secure network architecture design",
        "Zero-trust implementation",
        "Network segmentation strategies",
        "VLAN configuration and management",
        "Firewall and IDS/IPS deployment",
        "Network monitoring and alerting"
      ]
    },
    {
      id: "cloud-services",
      title: "Cloud Services & Integration",
      description: "Our cloud security experts ensure your organization can leverage cloud resources safely while meeting compliance requirements and protecting sensitive data across hybrid environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      offerings: [
        "Secure cloud migration planning",
        "Multi-cloud security architecture",
        "Cloud configuration and hardening",
        "Identity and access management",
        "Data protection in cloud environments",
        "Continuous compliance monitoring"
      ]
    },
    {
      id: "ai-models",
      title: "AI Models",
      description: "Our AI security solutions help organizations implement and secure artificial intelligence models while leveraging AI for enhanced threat detection and automated responses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      offerings: [
        "Secure AI model development",
        "AI-driven threat detection",
        "Automated security response systems",
        "Machine learning for anomaly detection",
        "AI model vulnerability assessment",
        "Data poisoning prevention"
      ]
    },
    {
      id: "penetration-testing",
      title: "Penetration Testing",
      description: "Our offensive security testing identifies vulnerabilities before attackers can exploit them, providing detailed reporting and remediation guidance to strengthen your security posture.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      offerings: [
        "External and internal network testing",
        "Web application penetration testing",
        "Mobile application security assessment",
        "Social engineering exercises",
        "Red team operations",
        "IoT and embedded systems testing"
      ]
    },
    {
      id: "soc-monitoring",
      title: "SOC Monitoring",
      description: "Our 24/7 Security Operations Center provides continuous monitoring and rapid incident response to protect your organization from evolving threats at all times.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      offerings: [
        "24/7 security event monitoring",
        "Real-time threat detection",
        "Incident response and management",
        "Threat hunting and intelligence",
        "Security dashboard and reporting",
        "Compliance monitoring"
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-cyber-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-cyber-gray">
              Comprehensive cybersecurity solutions designed to protect your organization from evolving threats.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id={service.id}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-cyber-gray mb-8">
                    {service.description}
                  </p>
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                    {service.offerings.map((offering, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-cyber-green mr-2 mt-1">•</div>
                        <span className="text-cyber-gray">{offering}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="cta-button">
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} cyber-card h-72 flex items-center justify-center`}>
                  <div className="text-center p-4">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-cyber-gray">Security that evolves with your needs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 cyber-card text-center">
            <h2 className="text-3xl font-bold mb-8">Our Security Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {[
                {
                  step: "Assess",
                  description: "Identify vulnerabilities and understand your security posture"
                },
                {
                  step: "Architect",
                  description: "Design customized security solutions for your environment"
                },
                {
                  step: "Implement",
                  description: "Deploy and integrate security controls and technologies"
                },
                {
                  step: "Monitor",
                  description: "Continuously observe, detect and respond to threats"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-cyber-navy p-6 rounded-lg relative z-10">
                    <div className="w-12 h-12 rounded-full bg-cyber-green/20 text-cyber-green flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                    <p className="text-cyber-gray">{item.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button asChild className="cta-button">
              <Link to="/contact">Discuss Your Security Needs</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
