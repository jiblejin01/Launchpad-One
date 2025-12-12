import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const Calculator: React.FC = () => {
  const [rate, setRate] = useState<number>(25000);
  const [hours, setHours] = useState<number>(15);
  const [analysis, setAnalysis] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const element = document.getElementById('calculator');
        if (element) {
            const rect = element.getBoundingClientRect();
            // Calculate offset relative to when the section enters view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setOffset((window.innerHeight - rect.top) * 0.15);
            }
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const yearlyLoss = rate * hours * 52;
  const investment = 1500000;
  const roiMultiple = Math.floor(yearlyLoss / investment);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(val);
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setAnalysis("");

    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            setAnalysis("Our AI services are currently busy. Based on your inputs, automation could save you over " + formatCurrency(yearlyLoss) + " annually.");
            setLoading(false);
            return;
        }

        const ai = new GoogleGenAI({ apiKey: apiKey });
        const prompt = `
          I am a consultant in Nigeria. 
          My hourly rate is ${formatCurrency(rate)}.
          I spend ${hours} hours per week on manual non-billable tasks (admin, setup, onboarding).
          My yearly opportunity cost is ${formatCurrency(yearlyLoss)}.
          The cost to fix this with a DFY automation system is ${formatCurrency(investment)}.
          
          Write a short, punchy, 2-sentence wake-up call about why I need to automate immediately. 
          Focus on the "Empire" I could build with that lost time/money.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        setAnalysis(response.text || "Automation is the key to unlocking your potential.");

    } catch (error) {
        console.error("AI Analysis failed", error);
        setAnalysis("Automation is the key to unlocking your potential revenue of " + formatCurrency(yearlyLoss) + ".");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-zinc-900 text-white overflow-hidden relative">
      {/* Abstract BG Elements with Parallax */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `translateY(-${offset * 1.2}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Cost of "Doing It Yourself"</h2>
                <p className="text-zinc-400 text-lg mb-8">
                    Think you're saving money by setting up manually? Calculate the time you lose on non-billable admin work.
                    See how quickly our ₦1.5m DFY service pays for itself.
                </p>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Your Hourly Value (₦)</label>
                        <input 
                            type="number" 
                            value={rate} 
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Hours/Week Spent on Manual Setup/Admin</label>
                        <input 
                            type="number" 
                            value={hours} 
                            onChange={(e) => setHours(Number(e.target.value))}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-white focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                </div>

                 {/* AI Button */}
                 <button 
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="mt-8 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all shadow-lg"
                >
                    {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="w-5 h-5" />}
                    Ask AI Consultant: Is It Worth It?
                </button>

                {analysis && (
                    <div className="mt-6 p-4 bg-zinc-800/80 border border-zinc-700 rounded-lg text-zinc-200 italic animate-fade-in">
                        " {analysis} "
                    </div>
                )}
            </div>

            <div className="mt-12 lg:mt-0 bg-white text-zinc-900 rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-red-100 rounded-lg">
                        <CalcIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold">Your Opportunity Cost</h3>
                </div>

                <div className="space-y-6">
                    <div className="pb-6 border-b border-gray-100">
                        <p className="text-sm text-zinc-500 font-medium uppercase">Yearly Revenue Lost to Admin</p>
                        <p className="text-4xl font-extrabold text-red-600 mt-1">{formatCurrency(yearlyLoss)}</p>
                    </div>
                    
                    <div className="pb-6 border-b border-gray-100">
                        <p className="text-sm text-zinc-500 font-medium uppercase">Cost of DFY Launch</p>
                        <p className="text-2xl font-bold text-zinc-900 mt-1">{formatCurrency(investment)}</p>
                        <p className="text-xs text-zinc-400">One-time investment</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500 font-medium uppercase">Return on Investment</p>
                        <p className="text-3xl font-bold text-green-600 mt-1">{roiMultiple}x</p>
                        <p className="text-sm text-zinc-600 mt-1">
                            You recoup your investment in just <span className="font-bold underline decoration-green-400 decoration-2">{(investment / (rate * hours)).toFixed(1)} weeks</span>.
                        </p>
                    </div>
                </div>

                <a href="#pricing" className="block mt-8 w-full text-center bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                    Stop The Bleeding - Launch Now
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;