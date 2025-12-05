import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2070&auto=format&fit=crop" 
          alt="Green lawn background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#265958] bg-opacity-80 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
           <p className="text-[#7cdbd5] font-bold tracking-widest uppercase mb-2">Our Services</p>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Say Goodbye to Pet Waste!</h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl w-full">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-black mb-8">
              Bellingham Pooper <br /> Scooper Services
            </h3>

            <ul className="space-y-6">
              {[
                {
                  title: "Flexible Plans",
                  text: "Choose 2x weekly, weekly, bi-weekly, monthly, or one-time cleanups to suit your property."
                },
                {
                  title: "Odor Control",
                  text: "Optional deodorizing keeps your yard smelling fresh, even in Bellingham's rainy seasons."
                },
                {
                  title: "Trusted by Locals",
                  text: "Join hundreds of satisfied pet owners who rely on our dog poop cleanup in Bellingham."
                }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="text-[#84cc16]" strokeWidth={4} size={20} />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">{item.title}:</span>{" "}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button>Learn More</Button>
            </div>
          </div>
          
          {/* Right side spacer or image could go here if layout required, but screenshot shows left card */}
          <div className="hidden md:block w-full"></div>
        </div>
      </div>
    </section>
  );
};