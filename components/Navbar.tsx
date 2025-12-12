import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-red-600 p-2 rounded">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight flex items-baseline gap-1">
              Launchpad<span className="text-red-600">One</span>
              <span className="text-sm font-normal text-zinc-500 hidden sm:inline-block">by myCFOng</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('blueprint')} className="text-zinc-600 hover:text-black font-medium transition-colors">Blueprint</button>
            <button onClick={() => scrollToSection('process')} className="text-zinc-600 hover:text-black font-medium transition-colors">Process</button>
            <button onClick={() => scrollToSection('calculator')} className="text-zinc-600 hover:text-black font-medium transition-colors">ROI Calc</button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 shadow-lg hover:shadow-red-500/30"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('blueprint')} className="block w-full text-left px-3 py-4 text-gray-700 hover:bg-gray-50 font-medium">The Blueprint</button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left px-3 py-4 text-gray-700 hover:bg-gray-50 font-medium">Process</button>
            <button onClick={() => scrollToSection('calculator')} className="block w-full text-left px-3 py-4 text-gray-700 hover:bg-gray-50 font-medium">ROI Calculator</button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full mt-4 bg-red-600 text-white px-3 py-4 rounded font-bold text-center"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;