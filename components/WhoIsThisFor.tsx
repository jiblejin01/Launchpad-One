import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const WhoIsThisFor: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900">Is This The Right Path For You?</h2>
          <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
            We don't accept every application. Our digital model requires a specific mindset to succeed.
            See where you fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Who This Is For */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 flex-shrink-0" />
              Who This Is For
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span><strong>Qualified Professionals:</strong> Chartered Accountants (ACA, ACCA) or experienced consultants ready to build a serious business asset.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span><strong>Tech-Forward Thinkers:</strong> You are excited (not scared) by AI, automation, and the idea of running a 100% paperless firm.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span><strong>Value Creators:</strong> You want to move away from "hourly grunt work" to high-value advisory and retainer-based pricing.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span><strong>Global Mindset:</strong> You want the infrastructure to serve clients anywhere in the world, not just your local area.</span>
              </li>
            </ul>
          </div>

          {/* Who This Is NOT For */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500"></div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <XCircle className="text-red-500 w-8 h-8 flex-shrink-0" />
              Who This Is NOT For
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span><strong>"Old School" Traditionalists:</strong> If you believe accounting requires physical files, stamps, and face-to-face meetings, this isn't for you.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span><strong>Technophobes:</strong> If learning new software or using AI tools feels like a burden rather than a superpower, you will struggle with our model.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span><strong>Get-Rich-Quick Seekers:</strong> This is a real business. It requires work, strategy, and patience to build.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-600">
                <div className="mt-1.5 w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span><strong>Cheap Solution Hunters:</strong> We build premium infrastructure. If you are looking for the cheapest way to register a business name, we are overqualified.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;