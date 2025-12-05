import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import { locations } from '../data/locations';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LINKS } from '../constants';

export const ServiceAreasIndex: React.FC = () => {
  // Group locations by parent
  const bellinghamLocations = locations.filter(loc => loc.parentLocation === '/service-areas/bellingham');

  return (
    <div className="min-h-screen bg-[#f9f7f2] font-sans text-gray-900">
      <SEO
        title="Service Areas | Scoopy Doo Pet Waste Removal in Whatcom County"
        description="Professional pet waste removal serving Bellingham, Ferndale, Lynden, and all of Whatcom County, WA. Find your neighborhood and get started today."
        canonicalUrl="/service-areas"
      />

      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-paw-pattern relative overflow-hidden py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Service Areas
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Scoopy Doo proudly serves all of Whatcom County, Washington. Find your neighborhood below to learn more about our local service.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#f9f7f2" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Bellingham Neighborhoods */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="text-action" size={32} />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Bellingham Neighborhoods
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {bellinghamLocations.map((location) => (
                <Link
                  key={location.slug}
                  to={location.path}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                >
                  <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-action transition-colors">
                    {location.areaServed.split(',')[0]}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {location.metaDescription}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    Learn More
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming Soon Areas */}
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                More Bellingham Neighborhoods Coming Soon
              </h3>
              <p className="text-gray-700 mb-6">
                We're expanding our detailed neighborhood pages. In the meantime, we service all of Bellingham including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Fairhaven', 'Happy Valley', 'Lettered Streets', 'Cordata', 'Alabama Hill', 'Samish', 'Whatcom Falls', 'Edgemoor'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-gray-700">
                    <MapPin size={14} className="text-action" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
              Whatcom County Service Areas
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              Beyond Bellingham, we provide pet waste removal throughout Whatcom County. Contact us to confirm service in your area.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-light rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-action mb-4">North County</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Ferndale</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Lynden</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Blaine</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Birch Bay</li>
                </ul>
              </div>

              <div className="bg-light rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-action mb-4">East County</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Everson</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Nooksack</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Sumas</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Deming</li>
                </ul>
              </div>

              <div className="bg-light rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-action mb-4">South County</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Sudden Valley</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Geneva</li>
                  <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Alger</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Not Sure If We Service Your Area?
            </h2>
            <p className="text-xl text-primary/80 mb-8">
              Give us a call and we'll confirm service availability for your address.
            </p>
            <a
              href={LINKS.phoneHref}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone size={20} />
              {LINKS.phone}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
