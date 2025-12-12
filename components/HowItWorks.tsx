import React from 'react';
import { FileSignature, Users, Coins, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Apply for Access",
    description: "Fill out our qualifying questionnaire. We only accept partners who are ready to treat this as a business, not a hobby.",
    icon: FileSignature
  },
  {
    id: 2,
    title: "The Strategy Session",
    description: "A high-value 1-hour workshop (₦100,000). We clarify your vision, validate your business model, and design your roadmap. You gain immense value and a clear plan, regardless of the next steps.",
    icon: Users
  },
  {
    id: 3,
    title: "Credit & Kickoff",
    description: "If we proceed to the Full Launchpad, your ₦100,000 consultation fee is credited 100% towards the setup cost.",
    icon: Coins
  },
  {
    id: 4,
    title: "Launch & Scale",
    description: "We build your infrastructure in 90 days (3 months). You receive the keys to a fully compliant, automated digital practice.",
    icon: Rocket
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-red-500 tracking-wide uppercase">The Process</h2>
          <h3 className="mt-2 text-4xl font-extrabold text-white">How We Partner With You</h3>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto">
            We don't take everyone. Our process ensures you are ready for the transition before you commit to the full investment.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-zinc-700"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-red-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-red-500/50 transition-colors w-full h-full min-h-[200px]">
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;