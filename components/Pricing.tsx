import React from 'react';
import { Check, Info } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingProps {
  onOpenForm: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenForm }) => {
  const tiers: PricingTier[] = [
    {
      name: "Strategy Session",
      price: "₦100,000",
      unit: "/ session",
      description: "Your clarity breakthrough. We map out your entire digital transformation journey, validate your niche, and create a custom blueprint. You leave with a clear plan, whether you build with us or not.",
      features: [
        "1-Hour Strategy & Clarity Call",
        "Niche & Revenue Model Validation",
        "Custom Digital Blueprint",
        "Clear Next Steps Action Plan",
        "Fee 100% Credited if you proceed"
      ],
      cta: "Book Strategy Session",
      highlight: false
    },
    {
      name: "Digital Transformation",
      price: "₦1,000,000",
      unit: "starts from",
      description: "For legacy firms. We migrate your manual operations to a cloud-native, automated infrastructure. (Excludes legal incorporation).",
      features: [
        "Everything in Strategy Session",
        "Legacy to Cloud Migration",
        "AI Command Center Setup",
        "Workflow Automation Engine",
        "Client Portal Integration",
        "30 Days Support"
      ],
      cta: "Apply for Transformation",
      highlight: false
    },
    {
      name: "The Launchpad",
      price: "₦1,500,000",
      unit: "starts from",
      description: "For new founders. We build a fully compliant, automated, digital practice from zero to launch. The complete turnkey solution.",
      features: [
        "Everything in Strategy Session",
        "Full Legal Compliance (CAC/SCUML)",
        "Business Model Architecture",
        "Full AI & Tech Implementation",
        "Digital Brand Ecosystem",
        "30 Days Support"
      ],
      cta: "Apply for Launchpad",
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Transparent Investment</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Validate the model before you invest in the machine. <br/>
            Start with the consultation. If we build your firm, the consultation is on us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-white ring-4 ring-red-600 shadow-2xl scale-105 z-10' 
                  : 'bg-white border border-zinc-200 hover:shadow-lg'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                  Most Popular & Complete
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-zinc-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-zinc-900">
                  <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.unit && <span className="ml-1 text-lg text-zinc-500">{tier.unit}</span>}
                </p>
                <p className="mt-4 text-zinc-500 leading-relaxed text-sm min-h-[80px]">{tier.description}</p>
                
                {tier.price !== "₦100,000" && (
                   <div className="mt-4 p-3 bg-green-50 text-green-800 text-xs rounded-lg flex items-start gap-2">
                     <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                     <span>100% of consultation fee is credited back to you.</span>
                   </div>
                )}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className={`h-5 w-5 ${tier.highlight ? 'text-red-600' : 'text-zinc-400'}`} />
                    </div>
                    <p className="ml-3 text-sm text-zinc-700">{feature}</p>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenForm}
                className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-colors ${
                  tier.highlight 
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30' 
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                {tier.cta}
              </button>
              
              {tier.price !== "₦100,000" ? (
                <p className="text-center text-xs text-zinc-400 mt-4">
                   * Start with the Strategy Session to unlock this tier
                </p>
              ) : (
                <p className="text-center text-xs text-zinc-400 mt-4">
                  * A high-value session packed with actionable insights
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;