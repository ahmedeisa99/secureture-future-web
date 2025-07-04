
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
                    Secuture was born as a senior graduation project in 2024, created by a group of cybersecurity enthusiasts from diverse technical backgrounds—ranging from networks and cloud infrastructure to offensive security and AI.
                  </p>
                  <p className="text-cyber-gray mb-4">
                    We realized that while cyber threats are growing rapidly, most small and mid-sized organizations still lack accessible, affordable, and flexible security solutions tailored to their needs. That's where our idea started: building a unified platform that simulates real-world security services in a practical and educational way.
                  </p>
                  <p className="text-cyber-gray mb-6">
                    Our mission is to bridge the gap between theory and practice by offering a proof-of-concept platform that covers five critical domains:
                  </p>
                  <ul className="space-y-2 text-cyber-gray mb-4">
                    <li>🔐 Network Security</li>
                    <li>☁️ Cloud Security</li>
                    <li>🛡 SOC Operations</li>
                    <li>🕵️ Penetration Testing</li>
                    <li>🤖 AI-powered Security Tools</li>
                  </ul>
                  <p className="text-cyber-gray">
                    Each module in Secuture was designed, implemented, and tested by our team to reflect real-life use cases using open-source tools, automation, and integration.
                  </p>
                </div>
                <div className="bg-cyber-navy rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
                  <ul className="space-y-6">
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">📍</div>
                      <div>
                        <div className="font-medium text-white">March 2024 — Concept Initiation</div>
                        <p className="text-cyber-gray text-sm">The project idea was formed. We aimed to design a cybersecurity service platform that covers multiple domains under one brand: Secuture.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">📍</div>
                      <div>
                        <div className="font-medium text-white">May 2024 — Team Structuring & Scope Definition</div>
                        <p className="text-cyber-gray text-sm">The project was divided into sub-teams. Each team focused on a specific domain such as SOC, PenTest, Cloud, or AI Security, with clear deliverables and research goals.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">📍</div>
                      <div>
                        <div className="font-medium text-white">August 2024 — POC Development</div>
                        <p className="text-cyber-gray text-sm">Each team developed a proof-of-concept for their specific service using open-source tools, documentation, and simulation environments.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">📍</div>
                      <div>
                        <div className="font-medium text-white">March 2025 — Web Platform Design</div>
                        <p className="text-cyber-gray text-sm">A unified frontend website was developed to present the simulated services. The platform includes descriptions, booking forms, and a professional brand identity.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 text-cyber-green font-bold">📍</div>
                      <div>
                        <div className="font-medium text-white">June 2025 — Final Submission & Demo Preparation</div>
                        <p className="text-cyber-gray text-sm">The complete platform was packaged for presentation. While it doesn't run live backend services, it demonstrates deep understanding, planning, and technical execution of a real-world security company concept.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">🔐 Our Technical Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Aya Abdelaziz",
                  role: "Network Security Engineer",
                  bio: "Experienced in designing secure network architectures and implementing enterprise-grade firewall and segmentation strategies.",
                },
                {
                  name: "Mariam Mohamed",
                  role: "Network Security Engineer",
                  bio: "Specializes in securing critical infrastructure through advanced network protocols and continuous threat monitoring.",
                },
                {
                  name: "Farah Hossam",
                  role: "SOC Analyst",
                  bio: "Expert in real-time alert triage and incident handling, ensuring rapid response to emerging security threats.",
                },
                {
                  name: "Nancy Nasser",
                  role: "AI Engineer",
                  bio: "Focuses on developing AI-driven security models for threat prediction, anomaly detection, and automated defense.",
                },
                {
                  name: "Ahmed Eisa",
                  role: "SOC Analyst",
                  bio: "Security operations specialist with hands-on experience in threat detection, log analysis, and incident response across enterprise environments.",
                },
                {
                  name: "Mohammed Elsayed",
                  role: "Penetration Tester",
                  bio: "Ethical hacker with expertise in vulnerability assessment and offensive security testing across diverse systems.",
                },
                {
                  name: "Mohamed Elteir",
                  role: "Cloud Engineer",
                  bio: "Designs and secures scalable cloud infrastructures, with a focus on compliance, resilience, and access control.",
                },
                {
                  name: "Mahmoud Hassan",
                  role: "Network Security Engineer",
                  bio: "Delivers robust network protection through proactive monitoring, secure configuration, and policy enforcement.",
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
