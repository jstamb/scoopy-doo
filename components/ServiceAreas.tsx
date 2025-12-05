import React from 'react';
import { SERVICE_AREAS } from '../constants';

export const ServiceAreas: React.FC = () => {
  return (
    <section className="py-16 bg-[#fdfaf4]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Service Areas</h2>
        <p className="text-lg text-gray-800 mb-10 font-medium">We service all of Whatcom County, Washington!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
           {/* Column 1 */}
           <div className="space-y-6">
             <h3 className="text-action font-display text-2xl font-bold mb-4">Bellingham</h3>
             {SERVICE_AREAS.slice(3, 4).map(city => <p key={city} className="text-xl font-medium">{city}</p>)}
             {SERVICE_AREAS.slice(6, 7).map(city => <p key={city} className="text-xl font-medium">{city}</p>)}
           </div>

           {/* Column 2 */}
           <div className="space-y-6">
             <h3 className="text-action font-display text-2xl font-bold mb-4">Ferndale</h3>
             {SERVICE_AREAS.slice(4, 5).map(city => <p key={city} className="text-xl font-medium">{city}</p>)}
             {SERVICE_AREAS.slice(7, 8).map(city => <p key={city} className="text-xl font-medium">{city}</p>)}
           </div>

           {/* Column 3 */}
           <div className="space-y-6">
             <h3 className="text-action font-display text-2xl font-bold mb-4">Lynden</h3>
             {SERVICE_AREAS.slice(5, 6).map(city => <p key={city} className="text-xl font-medium">{city}</p>)}
             {SERVICE_AREAS.slice(8, 9).map(city => <p key={city} className="text-xl font-medium">{city}</p>)}
           </div>
        </div>
      </div>
    </section>
  );
};