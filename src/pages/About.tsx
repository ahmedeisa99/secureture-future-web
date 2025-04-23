import React from 'react';
import Layout from '@/components/layout/Layout';

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16 md:pt-32 md:pb-24 bg-cyber-dark-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Secuture</h1>
            <p className="text-xl text-cyber-gray">
              Leading the way in cybersecurity solutions to protect organizations in an evolving threat landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="cyber-card">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-cyber-gray mb-6">
                To provide accessible, advanced cybersecurity solutions that enable organizations of all sizes to operate with confidence in an increasingly hostile digital environment.
              </p>
              <div className="h-1 w-20 bg-cyber-green"></div>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-cyber-gray mb-6">
                To create a digital world where businesses can innovate and grow without being constrained by security concerns or the fear of cyber threats.
              </p>
              <div className="h-1 w-20 bg-cyber-green"></div>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-cyber-gray mb-6">
                <li>• Integrity in all client relationships</li>
                <li>• Excellence in security execution</li>
                <li>• Innovation in threat response</li>
                <li>• Proactive protection strategies</li>
              </ul>
              <div className="h-1 w-20 bg-cyber-green"></div>
            </div>
          </div>

          <div className="mb-20">
            <div className="cyber-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-cyber-gray mb-4">
                    Founded in 2015 by a team of security professionals with backgrounds in government and enterprise security, Secuture was born out of a recognition that cybersecurity was becoming increasingly critical while remaining inaccessible to many organizations.
                  </p>
                  <p className="text-cyber-gray mb-4">
                    Our founders believed that security shouldn't just be available to large enterprises with massive IT budgets—it should be available to all organizations that need to protect their digital assets and customer data.
                  </p>
                  <p className="text-cyber-gray">
                    Since then, Secuture has grown to serve hundreds of clients across industries, from startups to Fortune 500 companies, government agencies, and critical infrastructure operators. Our approach combines technical expertise with a deep understanding of business needs to create security solutions that enable rather than restrict.
                  </p>
                </div>
                <div className="bg-cyber-navy rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
                  <ul className="space-y-6">
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">2015</div>
                      <div>
                        <div className="font-medium text-white">Company Founded</div>
                        <p className="text-cyber-gray text-sm">Established with a focus on making enterprise security accessible</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">2017</div>
                      <div>
                        <div className="font-medium text-white">SOC Service Launch</div>
                        <p className="text-cyber-gray text-sm">Introduced 24/7 Security Operations Center services</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">2019</div>
                      <div>
                        <div className="font-medium text-white">ISO 27001 Certification</div>
                        <p className="text-cyber-gray text-sm">Achieved key security certification</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">2021</div>
                      <div>
                        <div className="font-medium text-white">AI Security Division</div>
                        <p className="text-cyber-gray text-sm">Launched dedicated AI security services</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">2023</div>
                      <div>
                        <div className="font-medium text-white">Global Expansion</div>
                        <p className="text-cyber-gray text-sm">Opened offices in Europe and Asia Pacific regions</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "Chief Executive Officer",
                  bio: "Former cybersecurity advisor with 15+ years of experience in defense and enterprise security.",
                },
                {
                  name: "Sarah Chen",
                  role: "Chief Technology Officer",
                  bio: "Computer science PhD with expertise in AI security and critical infrastructure protection.",
                },
                {
                  name: "Miguel Rodriguez",
                  role: "Chief Security Officer",
                  bio: "Former head of security for a Fortune 100 company with deep expertise in threat intelligence.",
                },
                {
                  name: "Diana Park",
                  role: "VP of Operations",
                  bio: "Operational excellence expert who ensures seamless delivery of security services.",
                }
              ].map((member, index) => (
                <div key={index} className="cyber-card text-center">
                  <div className="w-24 h-24 bg-cyber-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-cyber-green text-sm mb-3">{member.role}</div>
                  <p className="text-cyber-gray text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-card text-center">
            <h2 className="text-3xl font-bold mb-8">Our Certifications & Partnerships</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "ISO 27001",
                  logo: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  name: "SOC 2 Type II",
                  logo: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  name: "CMMC Level 3",
                  logo: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  name: "HIPAA Compliant",
                  logo: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-cyber-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                }
              ].map((cert, index) => (
                <div key={index} className="bg-cyber-navy/50 rounded-lg p-6 flex flex-col items-center justify-center">
                  {cert.logo}
                  <div className="text-white font-medium mt-4">{cert.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
