import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhyChoose } from '../components/WhyChoose';
import { Services } from '../components/Services';
import { ServiceAreas } from '../components/ServiceAreas';
import { CustomerPromise } from '../components/CustomerPromise';
import { Footer } from '../components/Footer';
import { HomeSEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f7f2] font-sans text-gray-900">
      <HomeSEO />
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Services />
        <ServiceAreas />
        <CustomerPromise />
      </main>
      <Footer />
    </div>
  );
};
