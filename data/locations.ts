export interface ServicePlan {
  name: string;
  badge: string;
  price: string;
  priceNote?: string;
  description: string;
  perfectFor: string[];
}

export interface Testimonial {
  customerName: string;
  location: string;
  rating: number;
  reviewText: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubArea {
  name: string;
  details: string[];
}

export interface AdjacentLocation {
  name: string;
  slug: string;
}

export interface Location {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];

  // Geo data
  areaServed: string;
  geoLatitude: number;
  geoLongitude: number;
  parentLocation: string;

  // Hero/Intro
  mainH1: string;
  subheadline: string;
  introContent: string;
  heroCta: string;

  // Why Choose
  whyHeading: string;
  whyReasons: { title: string; content: string }[];

  // Service Area
  serviceAreaHeading: string;
  serviceAreaIntro: string;
  subAreas: SubArea[];
  coverageNote: string;

  // Pricing
  pricingHeading: string;
  pricingIntro: string;
  servicePlans: ServicePlan[];
  addons: { name: string; price: string; description: string }[];

  // Unique Section
  uniqueHeading: string;
  uniqueAspects: { title: string; content: string }[];

  // Testimonials
  testimonials: Testimonial[];

  // Process
  processSteps: { title: string; content: string }[];

  // FAQs
  faqs: FAQ[];

  // CTA
  ctaHeading: string;
  ctaSubheading: string;
  phone: string;
  hours: string;
  specialOffer: string;

  // Related
  adjacentLocations: AdjacentLocation[];

  // Landmarks
  landmarks: { name: string; relationship: string }[];

  // Characteristics
  housingStyle: string;
  yardSizeNote: string;
  dogCultureNote: string;
  commonIssues: string;
}

export const locations: Location[] = [
  {
    slug: 'columbia',
    path: '/service-areas/bellingham/columbia',
    title: 'Pet Waste Removal in Columbia Neighborhood, Bellingham WA | Scoopy Doo',
    metaDescription: 'Professional pet waste removal for Columbia Neighborhood, Bellingham. Weekly service for rentals, families & students. Trusted by Columbia residents. Call (360) 800-3188.',
    primaryKeyword: 'pet waste removal columbia neighborhood bellingham',
    secondaryKeywords: ['dog poop removal columbia bellingham', 'pooper scooper service columbia neighborhood', 'pet cleanup columbia wa'],

    areaServed: 'Columbia Neighborhood, Bellingham, WA',
    geoLatitude: 48.7450,
    geoLongitude: -122.4750,
    parentLocation: '/service-areas/bellingham',

    mainH1: 'Professional Pet Waste Removal in Columbia Neighborhood, Bellingham',
    subheadline: "Trusted Pooper Scooper Service for Columbia's Diverse Community",
    introContent: `Columbia Neighborhood sits at the heart of central Bellingham, offering the perfect blend of urban convenience and neighborhood charm. With Cornwall Park at its doorstep, easy access to Sehome Hill Arboretum, and streets lined with classic bungalows and craftsman homes, Columbia is one of Bellingham's most livable neighborhoods—and one of its most dog-friendly.

Whether you're a family who moved to Columbia for the excellent schools and park access, a young professional renting near Western Washington University, or a long-time resident in one of the neighborhood's charming older homes, Scoopy Doo provides reliable, professional dog poop pickup services throughout Columbia Neighborhood.`,
    heroCta: 'Get a Free Quote',

    whyHeading: 'Why Columbia Neighborhood Dog Owners Choose Scoopy Doo',
    whyReasons: [
      {
        title: "Designed for Columbia's Mix of Housing",
        content: "Columbia Neighborhood features classic bungalows from the 1920s-1950s with medium-sized yards, rental properties and duplexes near WWU, and newer infill development. Our service adapts to each property type with careful attention to established landscaping and flexible arrangements for renters."
      },
      {
        title: 'Perfect for Cornwall Park Proximity',
        content: "Cornwall Park is the heart of Columbia Neighborhood and one of Bellingham's most popular dog destinations. Dogs get energized at the park, then come home to play more in the yard. Regular professional service ensures your property always looks its best."
      },
      {
        title: 'Ideal for Student & Rental Housing',
        content: "Columbia's rental market means many residents need hassle-free service. We offer no contracts required, flexible scheduling around class and work schedules, landlord coordination, and move-out cleanups to help with deposits."
      }
    ],

    serviceAreaHeading: 'Our Columbia Neighborhood Service Area',
    serviceAreaIntro: 'We proudly serve all of Columbia Neighborhood, including:',
    subAreas: [
      { name: 'Cornwall Park Area', details: ['Homes surrounding Cornwall Park', 'Properties along Cornwall Avenue and Lakeway Drive', 'Residences on N. Forest Street'] },
      { name: 'Central Columbia', details: ['Garden Street corridor', 'Oak Street and Maple Street properties', 'Homes near Whatcom Community College'] },
      { name: 'Sehome Hill Adjacent', details: ['Properties near Sehome Hill Arboretum trailheads', 'Bill McDonald Parkway corridor'] },
      { name: 'WWU Corridor', details: ['Rental properties along High Street and Indian Street', 'Homes near WWU campus', 'Student housing areas'] }
    ],
    coverageNote: "Not sure if we service your street? We cover all of Columbia Neighborhood from Lakeway Drive to the Sehome Hill boundary. Call (360) 800-3188 to confirm your address.",

    pricingHeading: 'Pet Waste Removal Services in Columbia Neighborhood',
    pricingIntro: '',
    servicePlans: [
      {
        name: 'Twice-Weekly Service',
        badge: 'Popular with Families',
        price: '$32/week',
        priceNote: '$128/month',
        description: 'Perfect for Columbia families with active dogs who use the yard frequently.',
        perfectFor: ['Families with children', 'Multi-dog households', 'Properties near Cornwall Park', 'Larger yards (3,000+ sq ft)']
      },
      {
        name: 'Weekly Service',
        badge: "Columbia's Most Popular",
        price: '$26/week',
        priceNote: '$104/month',
        description: 'The sweet spot for most Columbia residents—reliable weekly cleanup.',
        perfectFor: ['Single-dog households', 'Renters', 'Moderate yard sizes', 'Cornwall Park dog walkers']
      },
      {
        name: 'Bi-Weekly Service',
        badge: 'Budget-Friendly',
        price: '$28/visit',
        description: 'For Columbia residents with minimal yard usage or very small dogs.',
        perfectFor: ['Very small yards', 'Senior dogs', 'Seasonal coverage', 'Budget-conscious owners']
      },
      {
        name: 'Monthly Service',
        badge: 'Basic Maintenance',
        price: '$35/month',
        description: 'Minimal service for minimal waste accumulation.',
        perfectFor: ['Single small dog', 'DIY backup', 'Rental properties between tenants']
      }
    ],
    addons: [
      { name: 'Deodorizing Treatment', price: '$8/visit', description: "Columbia's mature trees create shaded yards where odors can linger." },
      { name: 'Extra Dog Rate', price: '$6/week per dog', description: 'Many Columbia households have multiple dogs.' },
      { name: 'Gate Photo Service', price: 'FREE', description: 'Confirmation photo of your closed gate after every visit.' }
    ],

    uniqueHeading: 'What Makes Columbia Neighborhood Unique for Pet Waste Removal',
    uniqueAspects: [
      {
        title: 'The Cornwall Park Dog Owner Community',
        content: 'Cornwall Park creates a unique dynamic. The park serves as a social hub for dog owners, exercise destination for daily walking, and community gathering place. Dogs get excited from park visits, then continue playing at home, leading to more waste accumulation.'
      },
      {
        title: 'Diverse Housing, Diverse Needs',
        content: 'We serve established homeowners in vintage bungalows, young families who moved for Cornwall Park access, students and young professionals near WWU, and property managers overseeing multiple units.'
      },
      {
        title: 'Environmental Responsibility Near Whatcom Creek',
        content: "Whatcom Creek runs along Columbia Neighborhood's northern edge. Dog waste left in yards washes into storm drains during rain, flowing directly to the creek and threatening salmon habitat."
      }
    ],

    testimonials: [
      {
        customerName: 'Rachel T.',
        location: 'Near Cornwall Park',
        rating: 5,
        reviewText: "We moved to Columbia for the parks and walkability, but keeping up with our two labs' waste was overwhelming. Scoopy Doo's weekly service has been perfect—our kids can play in the yard without us worrying.",
        date: '2025-10-28'
      },
      {
        customerName: 'Property Manager - Oak Street Apartments',
        location: 'Columbia',
        rating: 5,
        reviewText: 'Managing a 16-unit building near WWU means lots of dog owners. Scoopy Doo handles our common areas twice weekly now, and complaints have dropped to zero.',
        date: '2025-09-15'
      },
      {
        customerName: 'Daniel & Kim S.',
        location: 'Garden Street area',
        rating: 5,
        reviewText: 'Our Columbia Neighborhood bungalow has a small backyard that our golden retriever uses constantly. The twice-weekly pickup keeps it manageable even during Bellingham\'s endless rain.',
        date: '2025-11-10'
      }
    ],

    processSteps: [
      { title: 'Schedule Your Service', content: 'Call (360) 800-3188 or use our online form. We\'ll discuss your address, number of dogs, preferred frequency, and gate access.' },
      { title: 'We Visit Your Property', content: 'Flexible scheduling Monday-Saturday, 9am-5pm with consistent service days. No need to be home.' },
      { title: 'Thorough Cleanup', content: 'Complete waste removal from all yard areas, proper disposal, optional deodorizing, gate secured after service.' },
      { title: 'Confirmation', content: 'Gate photo sent to your phone, text notification, and customer portal access for service management.' }
    ],

    faqs: [
      { question: 'Do you serve all of Columbia Neighborhood?', answer: 'Yes! We service all of Columbia Neighborhood including streets surrounding Cornwall Park, the Garden Street and Oak Street corridors, properties near Sehome Hill Arboretum, and WWU-adjacent housing.' },
      { question: "I'm a renter—can I use your service?", answer: "Absolutely! Many of our Columbia customers are renters. You don't need owner permission for standard service. We offer month-to-month service with flexible cancellation." },
      { question: 'Do you work with Columbia property managers?', answer: 'Yes, we have several Columbia Neighborhood commercial accounts including apartment complexes and rental property managers.' },
      { question: 'How does Cornwall Park affect waste accumulation?', answer: 'Cornwall Park is wonderful for Columbia dogs—but it also means yards see more use. We recommend twice-weekly service for households that visit frequently.' }
    ],

    ctaHeading: 'Get Started: Pet Waste Removal in Columbia Neighborhood, Bellingham',
    ctaSubheading: 'Ready for a Cleaner Columbia Yard?',
    phone: '(360) 800-3188',
    hours: 'Monday-Saturday, 9:00 AM - 5:00 PM',
    specialOffer: 'First cleanup 50% off when you mention this page!',

    adjacentLocations: [
      { name: 'Sehome', slug: 'sehome' },
      { name: 'South Hill', slug: 'south-hill' },
      { name: 'Lettered Streets', slug: 'lettered-streets' }
    ],

    landmarks: [
      { name: 'Cornwall Park', relationship: 'We service homes within walking distance' },
      { name: 'Sehome Hill Arboretum', relationship: 'Properties near the arboretum trailheads' },
      { name: 'Western Washington University', relationship: 'Rental properties in the WWU corridor' }
    ],

    housingStyle: 'Mix of single-family bungalows, duplexes, and rental units',
    yardSizeNote: 'Typical yards 2,000-4,000 sq ft with established landscaping',
    dogCultureNote: 'Very dog-friendly with Cornwall Park nearby and walkable streets',
    commonIssues: 'High rental turnover, multiple-dog households, active yard usage'
  },

  {
    slug: 'south-hill',
    path: '/service-areas/bellingham/south-hill',
    title: 'Pet Waste Removal in South Hill, Bellingham WA | Scoopy Doo',
    metaDescription: 'Professional pet waste removal for South Hill, Bellingham. Weekly service for larger yards & families. Trusted by South Hill homeowners. Call (360) 800-3188.',
    primaryKeyword: 'pet waste removal south hill bellingham',
    secondaryKeywords: ['dog poop removal south hill', 'pooper scooper service south hill bellingham', 'pet cleanup south hill wa'],

    areaServed: 'South Hill, Bellingham, WA',
    geoLatitude: 48.7280,
    geoLongitude: -122.4900,
    parentLocation: '/service-areas/bellingham',

    mainH1: 'Professional Pet Waste Removal in South Hill, Bellingham',
    subheadline: "Premium Pooper Scooper Service for South Hill's Larger Properties",
    introContent: `South Hill represents Bellingham's ideal of Pacific Northwest living—spacious properties with views, mature landscaping, and room for families to grow. Nestled between historic Fairhaven and the scenic Chuckanut Drive, South Hill offers the perfect balance of natural beauty and neighborhood convenience.

But with larger yards comes greater maintenance responsibility. If you're a South Hill homeowner with dogs, you know that keeping up with waste removal on a 6,000, 8,000, or 10,000+ square foot yard is a significant undertaking—especially during Bellingham's eight-month rainy season.`,
    heroCta: 'Get a Free Quote',

    whyHeading: 'Why South Hill Homeowners Choose Scoopy Doo',
    whyReasons: [
      {
        title: 'Built for Larger South Hill Properties',
        content: "South Hill properties commonly range from 4,000 to 10,000+ square feet of yard space. This means more ground to cover, multiple zones to manage, sloped terrain, and mature landscaping requiring careful navigation."
      },
      {
        title: 'Designed for South Hill Family Living',
        content: "South Hill is Bellingham's premier family neighborhood. Families are drawn by excellent schools, safe streets, larger lots, proximity to parks and trails, and community atmosphere."
      },
      {
        title: 'Fairhaven Park & Trail Access',
        content: "South Hill residents enjoy walkable access to Fairhaven Park, Padden Creek Trail, Interurban Trail, and Chuckanut Drive hiking. This active lifestyle means dogs get plenty of exercise—and use home yards extensively."
      }
    ],

    serviceAreaHeading: 'Our South Hill Service Area',
    serviceAreaIntro: 'We proudly serve all of South Hill, including:',
    subAreas: [
      { name: 'Fairhaven Park Area', details: ['Homes surrounding Fairhaven Park', 'Properties along 14th, 16th, and 17th Streets', 'Residences on Knox and Mill Avenue'] },
      { name: 'Central South Hill', details: ['Viewcrest Road properties with panoramic views', 'Homes along Old Fairhaven Parkway', 'Mid-century neighborhoods on 22nd and 24th Streets'] },
      { name: 'Chuckanut Corridor', details: ['Properties along Chuckanut Drive', 'Homes with Chuckanut Mountain views', 'Rural-residential properties'] },
      { name: 'Edgemoor-Adjacent', details: ['South Hill properties bordering Edgemoor', 'Larger estate properties'] }
    ],
    coverageNote: "Not sure if your property is in South Hill? We cover the area bounded by Fairhaven to the north, Chuckanut Drive to the south and west. Call (360) 800-3188 to confirm.",

    pricingHeading: 'Pet Waste Removal Services in South Hill',
    pricingIntro: 'South Hill properties require service plans scaled to their larger size.',
    servicePlans: [
      {
        name: 'Twice-Weekly Service',
        badge: 'Recommended for Large Yards',
        price: '$38-48/week',
        priceNote: 'Based on yard size',
        description: 'Our recommended option for South Hill properties with larger yards.',
        perfectFor: ['Large yards (5,000+ sq ft)', 'Multi-dog households', 'Families with children', 'Properties with multiple zones']
      },
      {
        name: 'Weekly Service',
        badge: 'Consistent Maintenance',
        price: '$32-42/week',
        priceNote: 'For yards up to 6,000 sq ft',
        description: 'Reliable weekly cleanup for South Hill properties with moderate waste.',
        perfectFor: ['Mid-sized yards (4,000-6,000 sq ft)', 'Single-dog households', 'Dogs frequently walked elsewhere']
      },
      {
        name: 'Bi-Weekly Service',
        badge: 'Budget Option',
        price: '$35-45/visit',
        description: 'For South Hill homeowners with minimal yard usage.',
        perfectFor: ['Large yards with minimal dog use', 'Senior dogs', 'Seasonal coverage']
      }
    ],
    addons: [
      { name: 'Deodorizing Treatment', price: '$12-15/visit', description: "South Hill's larger, often shaded yards can trap odors." },
      { name: 'Extra Dog Rate', price: '$8/week per dog', description: 'Many South Hill families have multiple dogs.' },
      { name: 'Zone-Specific Service', price: 'Custom', description: 'We can customize service to focus on specific zones.' },
      { name: 'Garden Bed Avoidance', price: 'FREE', description: 'We carefully navigate around your landscaping investments.' }
    ],

    uniqueHeading: 'What Makes South Hill Unique for Pet Waste Removal',
    uniqueAspects: [
      {
        title: 'The Space Premium',
        content: 'South Hill homeowners pay a premium for space. A 7,000 square foot yard takes 2-3x longer to clean than a typical lot, has more places for waste to accumulate, and requires systematic coverage.'
      },
      {
        title: 'Sloped Terrain Challenges',
        content: "South Hill's topography creates beautiful views but also slopes where waste rolls downhill, terraced yards with multiple levels, and drainage patterns affecting waste concentration."
      },
      {
        title: 'Established Landscaping Investments',
        content: 'Many South Hill homes have mature specimen trees, established garden beds, original plantings from mid-century, and professional landscape design.'
      }
    ],

    testimonials: [
      {
        customerName: 'Margaret & Steven L.',
        location: 'Near Fairhaven Park',
        rating: 5,
        reviewText: "Our South Hill property has a large yard—probably 7,000 square feet—that was becoming impossible to maintain with three dogs. Scoopy Doo's twice-weekly service has transformed it.",
        date: '2025-10-05'
      },
      {
        customerName: 'The Peterson Family',
        location: 'South Hill',
        rating: 5,
        reviewText: 'We moved to South Hill for the space and family atmosphere. Now our yard is consistently clean—the kids can play freely.',
        date: '2025-09-28'
      },
      {
        customerName: 'Janet R.',
        location: 'Chuckanut Drive area',
        rating: 5,
        reviewText: "Living on South Hill means more yard to maintain—ours is over 8,000 square feet. At 72, I simply can't keep up. Scoopy Doo has been wonderful.",
        date: '2025-11-15'
      }
    ],

    processSteps: [
      { title: 'Property Assessment', content: "We start with understanding your South Hill property: total yard size, distinct zones, landscaping features, gate access, and dogs." },
      { title: 'Custom Pricing', content: 'Based on property size and complexity, we provide clear, upfront pricing before service begins.' },
      { title: 'Scheduled Service', content: 'Consistent service days with extended time for larger properties and systematic coverage of all zones.' },
      { title: 'Comprehensive Cleanup', content: 'Complete coverage of all yard areas, attention to accumulation zones, careful navigation around landscaping.' }
    ],

    faqs: [
      { question: 'Why is South Hill pricing higher than other neighborhoods?', answer: 'South Hill properties are significantly larger—typically 2-3x the yard size of central Bellingham neighborhoods. Our pricing reflects the actual service delivered.' },
      { question: 'How long does a typical South Hill service take?', answer: 'Depending on property size: 4,000-6,000 sq ft takes 15-25 minutes, 6,000-8,000 sq ft takes 20-35 minutes, 8,000+ sq ft takes 30-60+ minutes.' },
      { question: 'Do you cover the entire property?', answer: 'Yes! We cover front yard, back yard, side yards, terraced sections, and garden areas where dogs access.' },
      { question: 'Can you work around my professional landscaping?', answer: 'Absolutely. We identify plantings to avoid on first visit and navigate carefully around garden beds.' }
    ],

    ctaHeading: 'Get Started: Pet Waste Removal in South Hill, Bellingham',
    ctaSubheading: 'Ready for a Cleaner South Hill Property?',
    phone: '(360) 800-3188',
    hours: 'Monday-Saturday, 9:00 AM - 5:00 PM',
    specialOffer: 'Call for your free South Hill property quote.',

    adjacentLocations: [
      { name: 'Fairhaven', slug: 'fairhaven' },
      { name: 'Edgemoor', slug: 'edgemoor' },
      { name: 'Sehome', slug: 'sehome' }
    ],

    landmarks: [
      { name: 'Fairhaven Park', relationship: 'We service homes within walking distance' },
      { name: 'Chuckanut Drive', relationship: 'Properties along the scenic corridor' },
      { name: 'Padden Creek Trail', relationship: 'Homes near the trail system' }
    ],

    housingStyle: 'Larger single-family homes, many mid-century and newer construction',
    yardSizeNote: 'Typical yards 4,000-10,000+ sq ft, significantly larger than central Bellingham',
    dogCultureNote: 'Family-oriented with multiple dog households common',
    commonIssues: 'Larger yards require more service time, sloped terrain, established landscaping'
  },

  {
    slug: 'sehome',
    path: '/service-areas/bellingham/sehome',
    title: 'Pet Waste Removal in Sehome, Bellingham WA | Scoopy Doo',
    metaDescription: 'Professional pet waste removal for Sehome, Bellingham near WWU. Flexible service for students, renters & homeowners. No contracts. Call (360) 800-3188.',
    primaryKeyword: 'pet waste removal sehome bellingham',
    secondaryKeywords: ['dog poop removal sehome', 'pooper scooper service sehome bellingham', 'wwu area pet waste removal'],

    areaServed: 'Sehome, Bellingham, WA',
    geoLatitude: 48.7380,
    geoLongitude: -122.4680,
    parentLocation: '/service-areas/bellingham',

    mainH1: 'Professional Pet Waste Removal in Sehome, Bellingham',
    subheadline: "Flexible Pooper Scooper Service for Sehome's Active Community",
    introContent: `Sehome sits in the shadow of its namesake hill, offering residents direct access to Sehome Hill Arboretum's trails, proximity to Western Washington University, and a neighborhood culture that values outdoor living.

For dog owners in Sehome, this means active, trail-loving pets who spend their mornings exploring the arboretum and their afternoons in the backyard. Scoopy Doo provides flexible, professional pet waste removal designed for Sehome's diverse community—from budget-conscious students to busy professionals to established families.

No long-term contracts. No hassle. Just reliable service that adapts to your life in Sehome.`,
    heroCta: 'Get a Free Quote',

    whyHeading: 'Why Sehome Residents Choose Scoopy Doo',
    whyReasons: [
      {
        title: "Flexibility for Sehome's Diverse Residents",
        content: "We adapt to students with month-to-month service and budget-friendly options, WWU faculty with reliable scheduling, young professionals with hassle-free maintenance, and renters who can cancel anytime."
      },
      {
        title: 'Perfect for Trail Dog Households',
        content: "Sehome Hill Arboretum is right in your backyard. Sehome dogs come home muddy and energized, continuing activity in the yard. This active lifestyle means more yard usage and faster waste accumulation."
      },
      {
        title: 'The WWU Corridor Expertise',
        content: "We understand academic year fluctuations, rental property dynamics, shared housing situations, budget constraints, and the need for flexible, no-pressure service."
      }
    ],

    serviceAreaHeading: 'Our Sehome Service Area',
    serviceAreaIntro: 'We proudly serve all of Sehome, including:',
    subAreas: [
      { name: 'Arboretum Adjacent', details: ['Homes along Arboretum Drive', 'Properties on 25th Street near the arboretum entrance', 'Residences backing to arboretum boundaries'] },
      { name: 'WWU Corridor', details: ['High Street and Indian Street rentals', 'Properties along Bill McDonald Parkway', 'Housing near WWU campus'] },
      { name: 'Central Sehome', details: ['Classic homes along N. Forest Street', 'Taylor Avenue and Ellis Street properties'] },
      { name: 'Sehome Village Area', details: ['Residences near Sehome Village shopping', 'Apartments and condos with yard space'] }
    ],
    coverageNote: "Not sure if you're in Sehome? We cover the area from Sehome Hill boundaries to downtown, and from WWU to I-5. Call (360) 800-3188 to confirm.",

    pricingHeading: 'Pet Waste Removal Services in Sehome',
    pricingIntro: '',
    servicePlans: [
      {
        name: 'Weekly Service',
        badge: 'Most Popular in Sehome',
        price: '$26/week',
        priceNote: '$104/month',
        description: 'The ideal balance for most Sehome households.',
        perfectFor: ['Working professionals', 'Faculty and staff', 'Families', 'Moderate yard sizes']
      },
      {
        name: 'Twice-Weekly Service',
        badge: 'For Active Dogs',
        price: '$32/week',
        priceNote: '$128/month',
        description: 'For Sehome trail dogs who use their yards heavily.',
        perfectFor: ['Multi-dog households', 'Very active dogs', 'Families with children', 'Near arboretum trailheads']
      },
      {
        name: 'Bi-Weekly Service',
        badge: 'Budget-Friendly',
        price: '$28/visit',
        priceNote: '~$56/month',
        description: 'Every-other-week service for lighter waste.',
        perfectFor: ['Small dogs', 'Minimal yard usage', 'Budget-conscious renters']
      },
      {
        name: 'Monthly Service',
        badge: 'Student Special',
        price: '$35/month',
        description: "Our most economical option, designed for Sehome's student population.",
        perfectFor: ['Students on tight budgets', 'Very small yards', 'Single small dogs']
      }
    ],
    addons: [
      { name: 'No Contracts', price: 'Standard', description: 'All service is month-to-month with no long-term commitment.' },
      { name: 'Easy Pause/Resume', price: 'FREE', description: 'Going home for summer? Pause your service with a text.' },
      { name: 'Move-In Service', price: '$55-75', description: 'Start fresh in a new Sehome rental.' },
      { name: 'Move-Out Service', price: '$65-95', description: 'Protect your deposit with a pristine yard.' }
    ],

    uniqueHeading: 'What Makes Sehome Unique for Pet Waste Removal',
    uniqueAspects: [
      {
        title: 'The Arboretum Lifestyle',
        content: "Sehome Hill Arboretum defines the neighborhood. 180 acres of trails means trail-active dogs who return home energized, often muddy, and eager to continue using the home yard."
      },
      {
        title: 'The Academic Community',
        content: "WWU shapes Sehome's character with population fluctuation, budget awareness among students, and a transient population that moves frequently. Our no-contract model fits this reality."
      },
      {
        title: 'Rental-Heavy Housing Stock',
        content: "Sehome has substantial rental housing. Our service works regardless of whether you own or rent, with professional service regardless of ownership status."
      }
    ],

    testimonials: [
      {
        customerName: 'Alex M.',
        location: 'Near Sehome Hill Arboretum',
        rating: 5,
        reviewText: "As a grad student with two roommates and a dog, yard work just wasn't happening. Scoopy Doo's monthly service fits our budget perfectly—$35/month split three ways is nothing.",
        date: '2025-10-12'
      },
      {
        customerName: 'Dr. Lisa Chen',
        location: 'WWU faculty housing area',
        rating: 5,
        reviewText: 'Between teaching, research, and committee meetings, I have zero time for yard maintenance. Scoopy Doo handles our Sehome yard weekly—completely reliable.',
        date: '2025-09-08'
      },
      {
        customerName: 'The Morrison Family',
        location: 'Sehome',
        rating: 5,
        reviewText: 'With three kids and a labrador, our backyard gets heavy use. Weekly service keeps it safe for the kids to play immediately.',
        date: '2025-11-02'
      }
    ],

    processSteps: [
      { title: 'Easy Signup', content: 'Call (360) 800-3188. No credit checks. No contracts. Just straightforward service.' },
      { title: 'Flexible Scheduling', content: 'Choose your service frequency and preferred day(s). Monday-Saturday availability.' },
      { title: 'Professional Service', content: 'Complete yard coverage, proper disposal, optional deodorizing.' },
      { title: 'Flexibility Built In', content: 'Pause service anytime, adjust frequency, add one-time extras, cancel without penalty.' }
    ],

    faqs: [
      { question: "I'm a student renting in Sehome—can I use your service?", answer: "Absolutely! You don't need landlord permission. Sign up in your own name, pay monthly, and cancel when you move." },
      { question: "What's the cheapest option for Sehome?", answer: "Our Monthly Service at $35/month is designed for budget-conscious Sehome residents." },
      { question: 'Can I pause for summer when I leave Bellingham?', answer: 'Yes! Just text or call to pause. Your account stays active, and you resume when you return.' },
      { question: 'Do you service rental houses and duplexes?', answer: 'Yes, we service all Sehome housing types—single-family homes, duplexes, rental houses, apartments with yards.' }
    ],

    ctaHeading: 'Get Started: Pet Waste Removal in Sehome, Bellingham',
    ctaSubheading: 'Ready for Hassle-Free Sehome Yard Care?',
    phone: '(360) 800-3188',
    hours: 'Monday-Saturday, 9:00 AM - 5:00 PM',
    specialOffer: 'Student Special: Monthly Service $35',

    adjacentLocations: [
      { name: 'Columbia Neighborhood', slug: 'columbia' },
      { name: 'Happy Valley', slug: 'happy-valley' },
      { name: 'South Hill', slug: 'south-hill' }
    ],

    landmarks: [
      { name: 'Sehome Hill Arboretum', relationship: 'We service homes surrounding the arboretum' },
      { name: 'Western Washington University', relationship: 'Properties in the WWU housing corridor' },
      { name: 'Bill McDonald Parkway', relationship: 'Residential streets along the parkway' }
    ],

    housingStyle: 'Mix of craftsman homes, rentals, duplexes, and family residences',
    yardSizeNote: 'Typical yards 2,000-4,000 sq ft, moderate-sized properties',
    dogCultureNote: 'Very active outdoor community with Arboretum access',
    commonIssues: 'High rental population, trail dogs bring mud and debris'
  },

  {
    slug: 'birchwood',
    path: '/service-areas/bellingham/birchwood',
    title: 'Pet Waste Removal in Birchwood, Bellingham WA | Scoopy Doo',
    metaDescription: 'Professional pet waste removal for Birchwood, Bellingham. Weekly service for families & HOA communities. Trusted by Birchwood neighbors. Call (360) 800-3188.',
    primaryKeyword: 'pet waste removal birchwood bellingham',
    secondaryKeywords: ['dog poop removal birchwood', 'pooper scooper service birchwood bellingham', 'pet cleanup birchwood wa'],

    areaServed: 'Birchwood, Bellingham, WA',
    geoLatitude: 48.7750,
    geoLongitude: -122.4850,
    parentLocation: '/service-areas/bellingham',

    mainH1: 'Professional Pet Waste Removal in Birchwood, Bellingham',
    subheadline: "Reliable Pooper Scooper Service for Birchwood's Family Neighborhood",
    introContent: `Birchwood represents suburban Bellingham at its best—family-oriented streets, well-maintained homes, excellent schools, and easy access to outdoor recreation at Lake Padden. Located in northwest Bellingham, Birchwood offers the space and community atmosphere that families seek.

For the many dog-owning families in Birchwood, maintaining a clean, safe backyard is essential. Children play in these yards. Neighbors notice property upkeep. Many Birchwood developments have HOA standards to meet. Scoopy Doo provides the reliable, professional pet waste removal that Birchwood families trust.`,
    heroCta: 'Get a Free Quote',

    whyHeading: 'Why Birchwood Families Choose Scoopy Doo',
    whyReasons: [
      {
        title: 'Built for Family Life',
        content: "Birchwood is where families put down roots, drawn by excellent schools, safe streets, larger yards, and Lake Padden access. Professional waste removal ensures kids can play immediately without checking the yard first."
      },
      {
        title: 'HOA-Ready Service',
        content: "Many Birchwood developments have HOA guidelines for yard maintenance and pet waste. Our consistent, scheduled cleanup with documentation helps homeowners meet expectations."
      },
      {
        title: 'Lake Padden Dog Culture',
        content: "Lake Padden's 2.6-mile trail loop is Birchwood's backyard playground. Dogs return from adventures energized and ready to use the home yard. We account for this active usage pattern."
      }
    ],

    serviceAreaHeading: 'Our Birchwood Service Area',
    serviceAreaIntro: 'We proudly serve all of Birchwood, including:',
    subAreas: [
      { name: 'Birchwood Park Area', details: ['Homes surrounding Birchwood Park', 'Properties along Birchwood Avenue', 'Residences on E. Birchwood Ave'] },
      { name: 'Central Birchwood', details: ['Northwest Avenue corridor neighborhoods', 'Classic Birchwood subdivisions', 'Established family home areas'] },
      { name: 'Lake Padden Corridor', details: ['Properties near Lake Padden Park access', 'Homes along Samish Way edges', 'Near lake trailheads'] },
      { name: 'Newer Developments', details: ['Birchwood HOA communities', 'Recent construction areas', 'Planned development neighborhoods'] }
    ],
    coverageNote: "Not sure if you're in Birchwood? We cover the northwest Bellingham area bounded by Northwest Avenue, Samish Way, and Lake Padden. Call (360) 800-3188 to confirm.",

    pricingHeading: 'Pet Waste Removal Services in Birchwood',
    pricingIntro: 'Birchwood families need reliable, consistent service.',
    servicePlans: [
      {
        name: 'Twice-Weekly Service',
        badge: 'Best for Active Families',
        price: '$34/week',
        priceNote: '$136/month',
        description: 'Our recommended option for Birchwood families with active backyards.',
        perfectFor: ['Families with children', 'Multi-dog households (2+ dogs)', 'Large yards (4,000+ sq ft)', 'Lake Padden trail dogs']
      },
      {
        name: 'Weekly Service',
        badge: "Birchwood's Most Popular",
        price: '$28/week',
        priceNote: '$112/month',
        description: 'The standard choice for Birchwood families.',
        perfectFor: ['Single-dog households', 'Moderate yard sizes', 'Consistent maintenance', 'Budget-conscious families']
      },
      {
        name: 'Bi-Weekly Service',
        badge: 'Light Maintenance',
        price: '$30/visit',
        priceNote: '~$60/month',
        description: 'For Birchwood homes with minimal waste.',
        perfectFor: ['Small dogs', 'Minimal yard usage', 'DIY supplement']
      },
      {
        name: 'Monthly Service',
        badge: 'Basic Coverage',
        price: '$38/month',
        description: 'Economical option for very low waste production.',
        perfectFor: ['Very small or senior dogs', 'Dogs primarily indoors', 'DIY backup']
      }
    ],
    addons: [
      { name: 'Deodorizing Treatment', price: '$10/visit', description: 'Keep your yard smelling fresh during warm months.' },
      { name: 'Extra Dog Rate', price: '$6/week per dog', description: 'Fair pricing for multi-dog households.' },
      { name: 'Large Yard Surcharge', price: '$4-8/visit', description: 'For properties over 5,000 sq ft.' },
      { name: 'Gate Photo Confirmation', price: 'FREE', description: 'Know we were there even when at work or soccer practice.' }
    ],

    uniqueHeading: 'What Makes Birchwood Unique for Pet Waste Removal',
    uniqueAspects: [
      {
        title: 'The Family Yard Standard',
        content: "Birchwood backyards are for kids playing, family dinners, weekend BBQs, birthday parties. This multi-use expectation means yards must be clean every day."
      },
      {
        title: 'Lake Padden Recreation Pattern',
        content: "Dogs exercise at Lake Padden, return home energized, continue activity in the backyard. Our service addresses this pattern with timing designed for Birchwood schedules."
      },
      {
        title: 'HOA Community Standards',
        content: "Many Birchwood HOAs require yard maintenance and address pet waste in community rules. Professional service helps homeowners meet standards consistently."
      }
    ],

    testimonials: [
      {
        customerName: 'The Anderson Family',
        location: 'Near Birchwood Park',
        rating: 5,
        reviewText: "With two golden retrievers and three kids constantly outside, our backyard was becoming a project. Scoopy Doo's twice-weekly service means the kids can play outside safely every day.",
        date: '2025-10-20'
      },
      {
        customerName: 'Carol & Dennis M.',
        location: 'Birchwood neighborhood',
        rating: 5,
        reviewText: "We're retired and our little terrier still needs yard time. Scoopy Doo keeps our yard pristine with bi-weekly visits—affordable on a fixed income.",
        date: '2025-09-12'
      },
      {
        customerName: 'Birchwood HOA Board Member',
        location: 'Birchwood',
        rating: 5,
        reviewText: 'We contracted Scoopy Doo for common area maintenance. Professional service, consistent scheduling, and our residents are much happier.',
        date: '2025-11-08'
      }
    ],

    processSteps: [
      { title: 'Schedule Your Service', content: 'Call (360) 800-3188. Tell us your address, number of dogs, yard size, and preferred frequency.' },
      { title: 'Set Up Access', content: "Most Birchwood homes have fenced backyards. We'll arrange gate access and note any special instructions." },
      { title: 'Consistent Service', content: 'Thorough coverage of entire yard, attention to all areas, proper disposal, optional deodorizing.' },
      { title: 'Family-Friendly Communication', content: 'Gate photo confirmation, text notification, customer portal, easy schedule adjustments.' }
    ],

    faqs: [
      { question: 'Do you serve all of Birchwood?', answer: 'Yes! We service homes near Birchwood Park, the Lake Padden corridor, Northwest Avenue neighborhoods, and all Birchwood HOA communities.' },
      { question: 'Can you help our HOA with common area maintenance?', answer: 'Absolutely. We service several Birchwood HOAs. Contact us for community pricing.' },
      { question: 'What service do you recommend for families with kids?', answer: 'For families where children play in the yard daily, we recommend twice-weekly service for consistent cleanliness.' },
      { question: 'How does Lake Padden trail usage affect service needs?', answer: 'Lake Padden dogs are active dogs. We recommend weekly minimum, twice-weekly for highly active dogs.' }
    ],

    ctaHeading: 'Get Started: Pet Waste Removal in Birchwood, Bellingham',
    ctaSubheading: 'Ready for a Family-Ready Birchwood Yard?',
    phone: '(360) 800-3188',
    hours: 'Monday-Saturday, 9:00 AM - 5:00 PM',
    specialOffer: 'Special: First Cleanup 50% Off for new Birchwood customers!',

    adjacentLocations: [
      { name: 'Happy Valley', slug: 'happy-valley' },
      { name: 'Cordata', slug: 'cordata' },
      { name: 'Samish', slug: 'samish' }
    ],

    landmarks: [
      { name: 'Birchwood Park', relationship: 'We service homes surrounding the park' },
      { name: 'Lake Padden', relationship: 'Properties in the recreation area' },
      { name: 'Birchwood Elementary', relationship: 'Family homes in the school area' }
    ],

    housingStyle: 'Newer suburban development, single-family homes, many built 1970s-2000s',
    yardSizeNote: 'Typical yards 3,000-6,000 sq ft, well-maintained suburban lots',
    dogCultureNote: 'Family dogs common, Lake Padden hiking popular, HOA communities prevalent',
    commonIssues: 'HOA requirements, multiple-dog families, Lake Padden trail dogs'
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(loc => loc.slug === slug);
};

export const getAllLocationSlugs = (): string[] => {
  return locations.map(loc => loc.slug);
};
