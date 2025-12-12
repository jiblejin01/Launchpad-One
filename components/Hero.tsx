import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Cpu, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 font-semibold text-sm mb-8 shadow-sm animate-fade-in-up">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 mr-3 animate-pulse"></span>
              Accepting Partners for 2026 Digital Launch
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Your Fully Automated <br />
              <span className="bg-gradient-to-r from-red-600 to-red-800 gradient-text text-transparent">
                Digital Practice.
              </span>
            </h1>
            
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We don't just advise; we install the operating system. 
              From legal structure to <span className="font-semibold text-black">AI-driven workflows</span>—get the cloud-native infrastructure of a top-tier firm, done for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={scrollToPricing}
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-600/20 flex items-center justify-center gap-2"
              >
                Launch My Digital Firm
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-zinc-500 font-medium">
                Full Infrastructure Starts at ₦1.5m
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium text-zinc-600">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-red-600" />
                <span>Location Independent</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-red-600" />
                <span>AI-Integrated Core</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-600" />
                <span>100% Paperless</span>
              </div>
            </div>
          </div>

          {/* Image/Visual with Parallax */}
          <div className="lg:col-span-5 mt-16 lg:mt-0 relative perspective-1000">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-75 ease-out will-change-transform"
              style={{ transform: `translateY(${scrollY * 0.12}px)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                alt="Modern digital workspace with laptop and clean desk" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Build an Asset, Not a Job.</p>
                  <p className="text-white/80 text-sm">Automated. Scalable. Profitable.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge - Moves slightly faster than image for depth */}
            <div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden lg:block transition-transform duration-75 ease-out will-change-transform"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold">Target Revenue</p>
                  <p className="text-2xl font-bold text-zinc-900">₦50M+/yr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;