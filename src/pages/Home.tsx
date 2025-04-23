
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import AboutSection from '@/components/home/AboutSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import CtaSection from '@/components/home/CtaSection';

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <IndustriesSection />
      <CtaSection />
    </Layout>
  );
};

export default Home;
