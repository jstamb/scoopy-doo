import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Location } from '../data/locations';
import { LINKS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  location?: Location;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, location }) => {
  const baseUrl = 'https://scoopydoowa.com';
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  // Generate LocalBusiness schema for location pages
  const generateLocalBusinessSchema = (loc: Location) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Scoopy Doo - ${loc.areaServed.split(',')[0]} Pet Waste Removal`,
    "image": `${baseUrl}/images/scoopy-doo-service.jpg`,
    "@id": `${baseUrl}${loc.path}`,
    "url": `${baseUrl}${loc.path}`,
    "telephone": loc.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bellingham",
      "addressRegion": "WA",
      "postalCode": "98225",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.geoLatitude,
      "longitude": loc.geoLongitude
    },
    "areaServed": {
      "@type": "Place",
      "name": loc.areaServed
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "serviceType": ["Pet Waste Removal", "Dog Poop Cleanup", "Pooper Scooper Service"],
    "description": loc.metaDescription,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": loc.testimonials.length.toString()
    }
  });

  // Generate Service schema
  const generateServiceSchema = (loc: Location) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pet Waste Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Scoopy Doo",
      "telephone": loc.phone
    },
    "areaServed": {
      "@type": "Place",
      "name": loc.areaServed
    },
    "description": loc.metaDescription,
    "offers": loc.servicePlans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "price": plan.price.replace(/[^0-9.-]/g, '').split('-')[0],
      "priceCurrency": "USD",
      "description": plan.description
    }))
  });

  // Generate FAQ schema
  const generateFAQSchema = (loc: Location) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": loc.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });

  // Generate Review schema
  const generateReviewSchema = (loc: Location) => loc.testimonials.map(testimonial => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": testimonial.customerName
    },
    "reviewBody": testimonial.reviewText,
    "datePublished": testimonial.date,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Scoopy Doo",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": testimonial.location,
        "addressRegion": "WA"
      }
    }
  }));

  // Generate BreadcrumbList schema
  const generateBreadcrumbSchema = (loc: Location) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": `${baseUrl}/service-areas`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bellingham",
        "item": `${baseUrl}/service-areas/bellingham`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": loc.areaServed.split(',')[0],
        "item": `${baseUrl}${loc.path}`
      }
    ]
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Scoopy Doo" />
      <meta property="og:image" content={`${baseUrl}/images/scoopy-doo-og.jpg`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Location-specific keywords */}
      {location && (
        <meta name="keywords" content={[location.primaryKeyword, ...location.secondaryKeywords].join(', ')} />
      )}

      {/* Geo Meta Tags for Local SEO */}
      {location && (
        <>
          <meta name="geo.region" content="US-WA" />
          <meta name="geo.placename" content={location.areaServed} />
          <meta name="geo.position" content={`${location.geoLatitude};${location.geoLongitude}`} />
          <meta name="ICBM" content={`${location.geoLatitude}, ${location.geoLongitude}`} />
        </>
      )}

      {/* JSON-LD Schema Markup */}
      {location && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(generateLocalBusinessSchema(location))}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(generateServiceSchema(location))}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(generateFAQSchema(location))}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(generateBreadcrumbSchema(location))}
          </script>
          {generateReviewSchema(location).map((review, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(review)}
            </script>
          ))}
        </>
      )}
    </Helmet>
  );
};

// Default SEO for homepage
export const HomeSEO: React.FC = () => (
  <SEO
    title="Scoopy Doo - Pet Waste Removal Bellingham, WA | Dog Poop Cleanup Service"
    description="Professional pet waste removal serving Bellingham and Whatcom County, WA. Weekly dog poop cleanup service. Trusted by families. Call (360) 800-3188 for a free quote."
    canonicalUrl="/"
  />
);
