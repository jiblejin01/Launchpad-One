import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemPromise from './components/ProblemPromise';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Pricing from './components/Pricing';
import Authority from './components/Authority';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import ApplicationForm from './components/ApplicationForm';
import WhoIsThisFor from './components/WhoIsThisFor';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemPromise />
        <Services />
        <WhoIsThisFor />
        <HowItWorks />
        <Calculator />
        <Pricing onOpenForm={() => setIsFormOpen(true)} />
        <Authority />
        <FAQ />
      </main>

      <Footer />
      
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;