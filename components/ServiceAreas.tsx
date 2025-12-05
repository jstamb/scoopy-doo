import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { locations } from '../data/locations';

export const ServiceAreas: React.FC = () => {
  // Get Bellingham neighborhoods with detailed pages
  const bellinghamLocations = locations.filter(loc => loc.parentLocation === '/service-areas/bellingham');

  return (
    <section className="py-16 bg-[#fdfaf4]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Service Areas</h2>
        <p className="text-lg text-gray-800 mb-10 font-medium">We service all of Whatcom County, Washington!</p>

        {/* Bellingham Neighborhoods with Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-bold text-action mb-6">Bellingham Neighborhoods</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {bellinghamLocations.map((location) => (
              <Link
                key={location.slug}
                to={location.path}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:text-action transition-colors">
                  <MapPin size={16} />
                  <span>{location.areaServed.split(',')[0]}</span>
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/service-areas/bellingham"
            className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:text-action transition-colors"
          >
            View all Bellingham neighborhoods
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Other Cities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Column 1 - Ferndale Area */}
          <div className="space-y-4">
            <h3 className="text-action font-display text-2xl font-bold">Ferndale Area</h3>
            <p className="text-xl font-medium">Ferndale</p>
            <p className="text-xl font-medium">Blaine</p>
            <p className="text-xl font-medium">Birch Bay</p>
          </div>

          {/* Column 2 - Lynden Area */}
          <div className="space-y-4">
            <h3 className="text-action font-display text-2xl font-bold">Lynden Area</h3>
            <p className="text-xl font-medium">Lynden</p>
            <p className="text-xl font-medium">Everson</p>
            <p className="text-xl font-medium">Nooksack</p>
          </div>

          {/* Column 3 - Other Areas */}
          <div className="space-y-4">
            <h3 className="text-action font-display text-2xl font-bold">East County</h3>
            <p className="text-xl font-medium">Sumas</p>
            <p className="text-xl font-medium">Deming</p>
            <p className="text-xl font-medium">Sudden Valley</p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            <MapPin size={18} />
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
};
