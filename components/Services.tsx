import React from 'react';
import { Briefcase, Scale, Globe, Cpu, Layers, ShieldCheck } from 'lucide-react';
import { ServiceModule } from '../types';

const modules: ServiceModule[] = [
  {
    id: 1,
    title: "Strategy & Pricing Architecture",
    description: "We engineer your business model. Niche selection, retainer-based pricing structures, and digital service delivery roadmap.",
    benefit: "Predictable Revenue",
    iconName: "Briefcase"
  },
  {
    id: 2,
    title: "Compliance Foundation",
    description: "Complete legal setup. CAC Registration (LLC), Tax Identification (TIN), and SCUML compliance processing.",
    benefit: "Corporate Legitimacy",
    iconName: "Scale"
  },
  {
    id: 3,
    title: "Digital Brand Ecosystem",
    description: "High-conversion landing page, professional domain authority, and Google Workspace integration for a world-class image.",
    benefit: "Global Trust",
    iconName: "Globe"
  },
  {
    id: 4,
    title: "The AI Command Center",
    description: "Implementation of your core tech stack (Odoo/Zoho/QuickBooks) integrated with AI tools for 10x operational speed.",
    benefit: "Zero Manual Data Entry",
    iconName: "Cpu"
  },
  {
    id: 5,
    title: "Workflow Automation Engine",
    description: "Automated client onboarding flows, cloud file architecture, and communication protocols that run while you sleep.",
    benefit: "Scalability",
    iconName: "Layers"
  },
  {
    id: 6,
    title: "Risk & Governance Suite",
    description: "Ironclad engagement letters, service level agreements (SLAs), and proposals designed for digital service delivery.",
    benefit: "Legal Protection",
    iconName: "ShieldCheck"
  }
];

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case "Briefcase": return <Briefcase className="w-8 h-8 text-red-600" />;
      case "Scale": return <Scale className="w-8 h-8 text-red-600" />;
      case "Globe": return <Globe className="w-8 h-8 text-red-600" />;
      case "Cpu": return <Cpu className="w-8 h-8 text-red-600" />;
      case "Layers": return <Layers className="w-8 h-8 text-red-600" />;
      case "ShieldCheck": return <ShieldCheck className="w-8 h-8 text-red-600" />;
      default: return <Briefcase className="w-8 h-8 text-red-600" />;
    }
  };

  return (
    <section id="blueprint" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">The Infrastructure</h2>
          <h3 className="mt-2 text-4xl font-extrabold text-zinc-900">Your Digital Firm in a Box</h3>
          <p className="mt-4 text-xl text-zinc-500">
            We don't just give you a plan; we build the machine. 
            A complete turnkey setup based on the systems of a modern, automated consultancy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod) => (
            <div key={mod.id} className="group p-8 rounded-2xl border border-zinc-100 bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-red-600 opacity-20 group-hover:opacity-100"></div>
              
              <div className="mb-6 bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 relative z-10">
                <div className="group-hover:text-white transition-colors duration-300">
                   {getIcon(mod.iconName)}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-zinc-900 mb-3 relative z-10">{mod.title}</h4>
              <p className="text-zinc-600 mb-4 text-sm leading-relaxed h-20 relative z-10">
                {mod.description}
              </p>
              
              <div className="pt-4 border-t border-zinc-100 relative z-10">
                <span className="text-sm font-semibold text-red-600 flex items-center">
                  Outcome: {mod.benefit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;