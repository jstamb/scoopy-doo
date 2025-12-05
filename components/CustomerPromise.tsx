import React from 'react';
import { CheckCircle2, PawPrint, Sparkles } from 'lucide-react';

export const CustomerPromise: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#4a9ea6] font-bold tracking-widest uppercase mb-2">Our Customer Promise</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Scoopy Doo Customer Promise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <CheckCircle2 size={48} className="text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-action text-xl font-display font-bold mb-4">Reliable, Hassle-Free Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Our pooper scooper service in Bellingham is designed for your convenience. We show up on time, scoop thoroughly, and leave your yard spotless—no mess, no stress. Spend more time playing fetch at Whatcom Falls and less time cleaning up!
            </p>
          </div>

          <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <PawPrint size={48} className="text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-black text-xl font-display font-bold mb-4">Satisfaction Guaranteed</h3>
            <p className="text-gray-600 leading-relaxed">
              Your happiness is our priority. If our dog waste removal doesn't meet your expectations, we'll make it right at no extra cost. Scoopy Doo stands behind every cleanup.
            </p>
          </div>

          <div className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
               <Sparkles size={48} className="text-black" strokeWidth={1.5} />
            </div>
            <h3 className="text-action text-xl font-display font-bold mb-4">Health and Safety Commitment</h3>
            <p className="text-gray-600 leading-relaxed">
              We use sanitary practices and eco-friendly disposal to keep Whatcom County's pets, families, and waterways safe. Our pet waste removal eliminates harmful bacteria and protects Lake Whatcom from runoff pollution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};