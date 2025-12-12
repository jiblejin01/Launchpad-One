import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-2xl tracking-tight block mb-4">
              Launchpad<span className="text-red-600">One</span> <span className="text-lg font-normal text-zinc-500">by myCFOng</span>
            </span>
            <p className="text-zinc-400 max-w-sm">
              Helping African accountants transition from manual workers to digital business owners.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Service</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#blueprint" className="hover:text-white transition-colors">The Blueprint</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>info@mycfong.com</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LaunchpadOne by myCFOng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;