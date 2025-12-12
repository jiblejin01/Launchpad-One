import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why is the consultation mandatory?",
    answer: "We believe in diagnosis before prescription. This session allows us to audit your current reality and design a custom blueprint for your specific goals. It ensures that if we proceed to build, we are executing a strategy that is guaranteed to work for *you*. Plus, if you proceed, the fee is fully credited."
  },
  {
    question: "How long does the full setup take?",
    answer: "The comprehensive setup timeline is 90 days (3 months). Month 1 is dedicated to strategy and legal incorporation. Month 2 focuses on tech implementation and digital branding. Month 3 is for rigorous system testing and your comprehensive handover training."
  },
  {
    question: "How much time do I need to commit during the process?",
    answer: "Minimal effort is required from you. We designed this 'Done-For-You' service for busy professionals, so we only require about 1-2 hours of your time per week for key reviews. We handle all the heavy lifting, documentation, and technical configuration."
  },
  {
    question: "Are software subscription costs included in the ₦1.5m setup fee?",
    answer: "No, the setup fee covers the comprehensive strategy, implementation, legal processing, and training. Software subscriptions (like Google Workspace, Odoo, or QuickBooks) are operating costs paid directly to the providers. This ensures you retain full ownership of your accounts. We provide expert guidance on selecting the most cost-effective plans."
  },
  {
    question: "What if I don't proceed after the Strategy Session?",
    answer: "You still win. You walk away with a professional roadmap, a validated business model, and clear direction on the tech stack you need. It serves as a standalone high-value coaching session that gives you the confidence to execute your digital transformation, whether you choose to do it with us or on your own."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-zinc-500">Everything you need to know about the launch process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-red-200 bg-red-50/30 shadow-sm' : 'border-zinc-200 hover:border-zinc-300'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-red-700' : 'text-zinc-900'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-zinc-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;