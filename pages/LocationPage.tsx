import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, Phone, Clock, MapPin, Check, ChevronRight, ArrowLeft } from 'lucide-react';
import { getLocationBySlug, Location } from '../data/locations';
import { SEO } from '../components/SEO';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LINKS, BRAND_COLORS } from '../constants';

export const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    return <Navigate to="/service-areas" replace />;
  }

  return (
    <div className="min-h-screen bg-[#f9f7f2] font-sans text-gray-900">
      <SEO
        title={location.title}
        description={location.metaDescription}
        canonicalUrl={location.path}
        location={location}
      />

      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="bg-primary/5 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight size={14} />
              <Link to="/service-areas" className="hover:text-primary">Service Areas</Link>
              <ChevronRight size={14} />
              <Link to="/service-areas/bellingham" className="hover:text-primary">Bellingham</Link>
              <ChevronRight size={14} />
              <span className="text-primary font-medium">{location.areaServed.split(',')[0]}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-paw-pattern relative overflow-hidden py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
                {location.mainH1}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-6">
                {location.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={LINKS.subscribe}
                  className="inline-flex items-center justify-center bg-action text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-action/90 transition-colors shadow-lg"
                >
                  {location.heroCta}
                </a>
                <a
                  href={LINKS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  {LINKS.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} fill={BRAND_COLORS.accent} stroke={BRAND_COLORS.accent} size={20} />
                  ))}
                </div>
                <span className="font-medium">5 Stars from {location.areaServed.split(',')[0]} Customers</span>
              </div>
            </div>
          </div>
          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#f9f7f2" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,122.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Intro Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              {location.introContent.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              {location.whyHeading}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {location.whyReasons.map((reason, i) => (
                <div key={i} className="bg-light rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-display font-bold text-primary mb-4">{reason.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{reason.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Coverage */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-4">
              {location.serviceAreaHeading}
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              {location.serviceAreaIntro}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
              {location.subAreas.map((area, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-display font-bold text-action mb-3">{area.name}</h3>
                  <ul className="space-y-2">
                    {area.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                        <MapPin size={14} className="text-primary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">{location.coverageNote}</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              {location.pricingHeading}
            </h2>
            {location.pricingIntro && (
              <p className="text-lg text-white/90 text-center mb-12 max-w-2xl mx-auto">{location.pricingIntro}</p>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {location.servicePlans.map((plan, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-gray-900 relative">
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-action text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-display font-bold text-primary mt-2 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-action mb-1">{plan.price}</div>
                  {plan.priceNote && <div className="text-sm text-gray-500 mb-4">{plan.priceNote}</div>}
                  <p className="text-gray-700 text-sm mb-4">{plan.description}</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Perfect for:</p>
                  <ul className="space-y-1">
                    {plan.perfectFor.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-center mb-6">Add-On Services</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {location.addons.map((addon, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold">{addon.name}</span>
                      <span className="text-action font-bold">{addon.price}</span>
                    </div>
                    <p className="text-sm text-white/80">{addon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Unique Aspects */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              {location.uniqueHeading}
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {location.uniqueAspects.map((aspect, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-display font-bold text-action mb-3">{aspect.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{aspect.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-4">
              What {location.areaServed.split(',')[0]} Customers Say
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">Real reviews from your neighbors</p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {location.testimonials.map((testimonial, i) => (
                <div key={i} className="bg-light rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} fill={BRAND_COLORS.accent} stroke={BRAND_COLORS.accent} size={18} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.reviewText}"</p>
                  <div className="text-sm">
                    <span className="font-bold text-primary">{testimonial.customerName}</span>
                    <span className="text-gray-500"> • {testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {location.processSteps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-action text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {location.faqs.map((faq, i) => (
                <details key={i} className="bg-light rounded-xl p-5 group">
                  <summary className="font-bold text-primary cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <ChevronRight className="transition-transform group-open:rotate-90" size={20} />
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              {location.ctaHeading}
            </h2>
            <p className="text-xl text-primary/80 mb-6">{location.ctaSubheading}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={LINKS.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                <Phone size={20} />
                {location.phone}
              </a>
              <a
                href={LINKS.subscribe}
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                {location.heroCta}
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-primary/80 text-sm">
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {location.hours}
              </span>
            </div>

            {location.specialOffer && (
              <div className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full font-bold">
                {location.specialOffer}
              </div>
            )}
          </div>
        </section>

        {/* Related Locations */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-primary text-center mb-8">
              We Also Serve Nearby Neighborhoods
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {location.adjacentLocations.map((adj, i) => (
                <Link
                  key={i}
                  to={`/service-areas/bellingham/${adj.slug}`}
                  className="bg-white px-6 py-3 rounded-full font-medium text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20"
                >
                  {adj.name} Pet Waste Removal
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/service-areas/bellingham"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <ArrowLeft size={18} />
                View All Bellingham Neighborhoods
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
