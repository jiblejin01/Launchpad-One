import React from 'react';
import { Award, Globe, Cpu } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-50 rounded-full -z-10"></div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D22AQHilJogLxVLSA/feedshare-shrink_2048_1536/B4DZqeTSrKJAAw-/0/1763592459723?e=1765411200&v=beta&t=egrIvlTHi-8CSE72G8jxRu8OLCOS2HmI0RwEoVCJqkA" 
              alt="Ajibola Jinadu leading a session" 
              className="rounded-2xl shadow-xl object-cover w-full h-96 lg:h-auto"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden sm:block border border-zinc-100">
               <p className="text-sm font-bold text-zinc-900 leading-snug">"We apply Big 4 rigour to modern digital practice."</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-6">
               Powered by myCFOng
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              World-Class Pedigree. <br/><span className="text-red-600">Next-Gen Execution.</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              LaunchpadOne isn't just theory—it's the exact operational engine behind <span className="font-bold text-black">myCFOng</span>.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Led by <span className="font-bold text-black">Ajibola Jinadu (FCA, FCCA)</span>, who brings over a decade of experience from <span className="font-bold text-black">Deloitte</span>, leading teams and financial transformations. He fuses <span className="font-bold text-black">Big 4 standards</span> with a relentless passion for <span className="font-bold text-black">AI and technology</span> to build you a practice that is both professional and futuristic.
            </p>

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Big 4 Excellence</h4>
                  <p className="text-zinc-500 text-sm">Built on the rigorous standards of a decade at Deloitte, adapted for the agile digital economy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">5+ Years Fully Digital</h4>
                  <p className="text-zinc-500 text-sm">myCFOng has been 100% remote and paperless since day one. We know the pitfalls and the shortcuts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                  <Cpu className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Automation First</h4>
                  <p className="text-zinc-500 text-sm">We implement the same tech stack (AI, Cloud Accounting, CRM) that runs our daily operations.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Authority;