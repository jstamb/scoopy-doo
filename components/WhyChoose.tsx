import React from 'react';
import { CheckCircle2, Sparkles, Laptop, FileText, Lock, MessageCircle } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Left column features
const leftFeatures: Feature[] = [
  {
    icon: <CheckCircle2 size={28} strokeWidth={1.5} />,
    title: "Vetted Team",
    description: "Our scoopers pass background checks and training to ensure reliability and care in every Whatcom County yard."
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: "Pet Safety",
    description: "We disinfect tools after every cleanup with kennel-grade solutions, keeping pets healthy."
  },
  {
    icon: <Laptop size={28} strokeWidth={1.5} />,
    title: "Customer Portal",
    description: "Manage your service online—set auto-payments, view invoices, or adjust plans for your Bellingham home."
  }
];

// Right column features
const rightFeatures: Feature[] = [
  {
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: "No Contracts",
    description: "Freedom to start or stop anytime, perfect for seasonal needs."
  },
  {
    icon: <Lock size={28} strokeWidth={1.5} />,
    title: "Gate Photos",
    description: "Get a photo of your closed gate after each visit, ensuring security for your property."
  },
  {
    icon: <MessageCircle size={28} strokeWidth={1.5} />, // Closest match to SMS bubble
    title: "Notification Texts",
    description: "We text 60 minutes before arriving and email when done, keeping you informed."
  }
];

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-center">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-black shrink-0">
        {feature.icon}
      </div>
      <h3 className="text-xl font-display font-bold text-[#4a9ea6] leading-tight">{feature.title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">
      {feature.description}
    </p>
  </div>
);

export const WhyChoose: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#4a9ea6] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">The Best in the PNW</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-6">Why Choose Scoopy Doo?</h2>
          <p className="text-gray-900 text-lg leading-relaxed">
            When you pick Scoopy Doo for pet waste removal in Bellingham, WA, you're choosing quality, trust, and a cleaner community. Here's what sets us apart:
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          {/* Center Image */}
          <div className="min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-xl relative order-first lg:order-none mb-8 lg:mb-0">
             {/* 
                 IMPORTANT: Please save the provided dog image as 'dog-silos.jpg' 
                 in your public folder for this to display correctly.
             */}
             <img 
               src="/dog-silos.jpg" 
               alt="Scoopy Doo dog at Granary Building" 
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
             {rightFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};