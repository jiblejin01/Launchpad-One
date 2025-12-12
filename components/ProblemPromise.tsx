import React from 'react';
import { XCircle, CheckCircle2, Zap } from 'lucide-react';

const ProblemPromise: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            The Divide: Manual Grunt Work vs. Automated Scale
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Stop trying to retrofit digital tools into an analog business. We build you a cloud-native firm from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* The Problem */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-zinc-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-zinc-300"></div>
            <h3 className="text-2xl font-bold text-zinc-500 mb-6 flex items-center gap-3">
              <XCircle className="text-zinc-400 w-8 h-8" />
              The Analog Struggle
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-500">
                <span className="w-1.5 h-1.5 mt-2 bg-zinc-400 rounded-full flex-shrink-0"></span>
                <span><strong>Manual Friction:</strong> Wasting 20+ hours/week manually onboarding clients, chasing invoices, and data entry.</span>
              </li>
              <li className="flex items-start gap-4 text-zinc-500">
                <span className="w-1.5 h-1.5 mt-2 bg-zinc-400 rounded-full flex-shrink-0"></span>
                <span><strong>Geographic Limits:</strong> Tied to local clients because your operations require physical presence or paper.</span>
              </li>
              <li className="flex items-start gap-4 text-zinc-500">
                <span className="w-1.5 h-1.5 mt-2 bg-zinc-400 rounded-full flex-shrink-0"></span>
                <span><strong>Compliance Anxiety:</strong> Operating on shaky legal ground without proper SCUML or contracts.</span>
              </li>
            </ul>
          </div>

          {/* The Promise */}
          <div className="bg-zinc-900 p-8 md:p-10 rounded-2xl shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap className="w-32 h-32 text-white" />
             </div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-red-500 w-8 h-8" />
              The Digital Advantage
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4 text-zinc-300">
                <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full flex-shrink-0"></span>
                <span><strong>Automated Workflows:</strong> AI handles the admin. Invoices send themselves. Onboarding is one click.</span>
              </li>
              <li className="flex items-start gap-4 text-zinc-300">
                <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full flex-shrink-0"></span>
                <span><strong>Global Income:</strong> A digital-first structure allows you to serve clients in London, Lagos, or Dubai seamlessly.</span>
              </li>
              <li className="flex items-start gap-4 text-zinc-300">
                <span className="w-1.5 h-1.5 mt-2 bg-red-500 rounded-full flex-shrink-0"></span>
                <span><strong>Asset Value:</strong> You are building a system-dependent business, not an owner-dependent job.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemPromise;