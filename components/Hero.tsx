import React from 'react';
import { Star } from 'lucide-react';
import { Button } from './Button';
import { BRAND_COLORS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="bg-paw-pattern relative overflow-hidden py-12 md:py-20 text-white pb-32">
      {/* Background decoration elements could go here */}
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Pet Cleanup Services <br/>
            <span className="text-action">in Bellingham WA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-lg leading-relaxed">
            Get your dog poop cleaned up today by subscribing to a plan. We handle the mess so you don't have to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="shadow-lg text-lg px-10 py-4">Subscribe</Button>
          </div>

          <div className="flex items-center gap-3 pt-4">
             <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} fill={BRAND_COLORS.accent} stroke={BRAND_COLORS.accent} size={24} />
                ))}
             </div>
             <span className="font-medium">5 Stars on Google</span>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl max-w-md w-full">
            {/* Using a high quality dog image as placeholder since exact asset is not available */}
            <img 
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1000&auto=format&fit=crop" 
              alt="Happy dog on green grass" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>

      {/* Decorative Wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};