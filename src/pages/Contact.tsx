
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received!",
        description: "Thank you for your inquiry. Our team will contact you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-cyber-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-cyber-gray">
              Get in touch with our security experts for a consultation or inquiry about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="cyber-card">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-cyber-white mb-2">
                      Full Name <span className="text-cyber-red">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-cyber-navy border-cyber-light-blue text-cyber-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cyber-white mb-2">
                      Email <span className="text-cyber-red">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-cyber-navy border-cyber-light-blue text-cyber-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-cyber-white mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-cyber-navy border-cyber-light-blue text-cyber-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-cyber-white mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-cyber-navy border-cyber-light-blue text-cyber-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-cyber-white mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-cyber-navy border border-cyber-light-blue rounded-md p-2 text-cyber-white"
                  >
                    <option value="">Select a service</option>
                    <option value="network-design">Network Design</option>
                    <option value="cloud-services">Cloud Services & Integration</option>
                    <option value="ai-models">AI Models</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="soc-monitoring">SOC Monitoring</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-cyber-white mb-2">
                    Message <span className="text-cyber-red">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-cyber-navy border-cyber-light-blue text-cyber-white min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="cta-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="cyber-card">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-green mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a href="mailto:secuture.info@gmail.com" className="text-cyber-gray hover:text-cyber-green">
                        secuture.info@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-green mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a href="tel:+201092401964" className="text-cyber-gray hover:text-cyber-green">
                        +20 (109) 240-1964
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-green mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <address className="text-cyber-gray not-italic">
                        Gehan Street, Mansoura<br />
                        Dakahlia Governorate, Egypt
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyber-green mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-cyber-gray">
                        Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                        <span className="text-cyber-green font-medium">Security Operations: 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card">
                <h2 className="text-2xl font-bold mb-6">Emergency Support</h2>
                <p className="text-cyber-gray mb-4">
                  For urgent security incidents or emergency assistance, please call our dedicated hotline:
                </p>
                <div className="bg-cyber-navy/50 p-4 rounded-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-red mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">Emergency Support Hotline</p>
                    <a href="tel:+201092401964" className="text-cyber-red text-lg font-bold hover:underline">
                      +20 (109) 240-1964
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
