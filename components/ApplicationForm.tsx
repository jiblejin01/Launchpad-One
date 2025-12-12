import React, { useState } from 'react';
import { X, Send, CheckCircle, ArrowRight, ArrowLeft, Lock } from 'lucide-react';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    // Business Profile
    targetNiche: '',
    currentRevenue: '',
    employmentStatus: 'Employee (Transitioning)',
    teamSize: 'Just Me (Solo)',
    // Tech & Goals
    techComfort: 'Average',
    serviceInterest: 'The Launchpad (New Firm) - Starts ₦1.5m',
    financialReadiness: '',
    hurdle: '',
    agreement: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreement: e.target.checked }));
  };

  const payWithPaystack = () => {
    if (!window.PaystackPop) {
      alert("Payment system is loading. Please wait a moment or refresh the page.");
      return;
    }

    setIsPaying(true);
    
    try {
      const handler = window.PaystackPop.setup({
        // REPLACE THIS WITH YOUR PUBLIC KEY
        key: 'pk_live_903877e37d9ef1e767db055ed309c5f120b0d80e', 
        email: formData.email,
        amount: 100000 * 100, // 100,000 Naira in kobo
        currency: 'NGN',
        metadata: {
          custom_fields: [
            {
              display_name: "Full Name",
              variable_name: "full_name",
              value: formData.fullName
            },
            {
              display_name: "Phone Number",
              variable_name: "phone",
              value: formData.phone
            },
            {
              display_name: "Service Interest",
              variable_name: "service_interest",
              value: formData.serviceInterest
            },
            {
              display_name: "Target Niche",
              variable_name: "target_niche",
              value: formData.targetNiche
            },
            {
              display_name: "Current Revenue",
              variable_name: "current_revenue",
              value: formData.currentRevenue
            },
            {
              display_name: "Employment Status",
              variable_name: "employment_status",
              value: formData.employmentStatus
            },
            {
              display_name: "Team Size",
              variable_name: "team_size",
              value: formData.teamSize
            },
            {
              display_name: "Tech Comfort",
              variable_name: "tech_comfort",
              value: formData.techComfort
            },
            {
              display_name: "Financial Readiness",
              variable_name: "financial_readiness",
              value: formData.financialReadiness
            },
            {
              display_name: "Biggest Hurdle",
              variable_name: "hurdle",
              value: formData.hurdle
            }
          ]
        },
        callback: (transaction: any) => {
          console.log(transaction);
          setIsPaying(false);
          setSubmitted(true);
          // Transaction reference is in transaction.reference
        },
        onClose: () => {
          setIsPaying(false);
          // User closed the popup
        }
      });
      
      handler.openIframe();
    } catch (error) {
      console.error("Paystack Error:", error);
      setIsPaying(false);
      alert("There was an error initializing the payment. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger Paystack Popup
    payWithPaystack();
  };

  if (!isOpen) return null;

  const TotalSteps = 3;

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
            step === s ? 'bg-red-600 text-white' : 
            step > s ? 'bg-green-500 text-white' : 'bg-zinc-200 text-zinc-500'
          }`}>
            {step > s ? <CheckCircle size={16} /> : s}
          </div>
          {s < 3 && (
            <div className={`w-12 h-1 mx-2 rounded transition-colors ${step > s ? 'bg-green-500' : 'bg-zinc-200'}`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-fade-in-up flex flex-col">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-zinc-600" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-zinc-900">Apply & Book Session</h3>
                <p className="text-zinc-500 mt-2 text-sm">Step {step} of {TotalSteps}: {
                  step === 1 ? 'Contact Details' : step === 2 ? 'Business Profile' : 'Commitment'
                }</p>
              </div>

              {renderStepIndicator()}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: Contact Info */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                        <input 
                          required 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          type="text" 
                          className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" 
                          placeholder="Ajibola Jinadu" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Email Address</label>
                        <input 
                          required 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email" 
                          className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" 
                          placeholder="you@company.com" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number (WhatsApp)</label>
                      <input 
                        required 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" 
                        placeholder="+234..." 
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2: Business Profile */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Target Niche / Industry Focus</label>
                      <p className="text-xs text-zinc-500 mb-2">What type of clients do you want to serve? (e.g. Tech Startups, Retail, Oil & Gas)</p>
                      <input 
                        required
                        type="text"
                        name="targetNiche"
                        value={formData.targetNiche}
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        placeholder="e.g. E-commerce & Logistics"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Current Monthly Revenue</label>
                        <select 
                          name="currentRevenue"
                          value={formData.currentRevenue}
                          onChange={handleChange}
                          className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        >
                          <option value="">Select...</option>
                          <option value="Pre-Revenue (Starting New)">Pre-Revenue (Starting New)</option>
                          <option value="< ₦500k / month">Less than ₦500k / month</option>
                          <option value="₦500k - ₦2M / month">₦500k - ₦2M / month</option>
                          <option value="₦2M+ / month">₦2M+ / month</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Current Status</label>
                        <select 
                          name="employmentStatus"
                          value={formData.employmentStatus}
                          onChange={handleChange}
                          className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        >
                          <option value="Employee (Transitioning)">Employee (Transitioning)</option>
                          <option value="Freelancer (Solo)">Freelancer (Solo)</option>
                          <option value="Firm Owner (Scaling)">Firm Owner (Scaling)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                       <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Team Size</label>
                        <select 
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        >
                          <option value="Just Me (Solo)">Just Me (Solo)</option>
                          <option value="2-5 People">2-5 People</option>
                          <option value="5-10 People">5-10 People</option>
                          <option value="10+ People">10+ People</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Tech Proficiency</label>
                        <select 
                          name="techComfort"
                          value={formData.techComfort}
                          onChange={handleChange}
                          className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        >
                          <option>Beginner (Need lots of help)</option>
                          <option>Average (Can use basic apps)</option>
                          <option>Advanced (Comfortable with new tech)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Readiness */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Which Service Interest You?</label>
                      <select 
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none font-semibold bg-zinc-50"
                      >
                        <option value="The Launchpad (New Firm) - Starts ₦1.5m">The Launchpad (New Firm) - Starts ₦1.5m</option>
                        <option value="Digital Transformation (Existing Firm) - Starts ₦1m">Digital Transformation (Existing Firm) - Starts ₦1m</option>
                        <option value="Strategy Consultation Only - ₦100k">Strategy Consultation Only - ₦100k</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Financial Readiness</label>
                      <p className="text-xs text-zinc-500 mb-2">Beyond the setup fee, do you have budget for software subs & marketing?</p>
                      <select 
                        name="financialReadiness"
                        value={formData.financialReadiness}
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      >
                        <option value="">Select status...</option>
                        <option>I have capital for Setup + Operations</option>
                        <option>I have capital for Setup only</option>
                        <option>I am currently looking for funding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">Biggest Business Hurdle?</label>
                      <textarea 
                        name="hurdle"
                        value={formData.hurdle}
                        onChange={handleChange}
                        className="w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none h-20" 
                        placeholder="e.g., Pricing my services correctly, Finding premium clients..." 
                      ></textarea>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input 
                          required 
                          type="checkbox" 
                          checked={formData.agreement}
                          onChange={handleCheckbox}
                          className="mt-1.5 w-5 h-5 text-red-600 rounded border-gray-300 focus:ring-red-500" 
                        />
                        <span className="text-sm text-zinc-700">
                          I am ready to book my <strong>₦100,000 Strategy Session</strong>. I understand this session is the first step to building my roadmap.
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex gap-4">
                    {step > 1 && (
                      <button 
                        type="button" 
                        onClick={() => setStep(s => s - 1)}
                        disabled={isPaying}
                        className="flex-1 py-3 px-4 border border-zinc-300 text-zinc-700 font-semibold rounded-xl hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                    )}
                    
                    {step < 3 ? (
                      <button 
                        type="button" 
                        onClick={() => setStep(s => s + 1)}
                        className="flex-1 py-3 px-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button 
                        type="submit" 
                        disabled={!formData.agreement || isPaying}
                        className="flex-1 py-3 px-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
                      >
                        {isPaying ? (
                          'Processing...'
                        ) : (
                          <>Proceed to Payment <Lock className="w-4 h-4" /></>
                        )}
                      </button>
                    )}
                  </div>
                  
                  {/* Secured by Paystack Badge */}
                  {step === 3 && (
                    <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 mt-1">
                      <Lock className="w-3 h-3" />
                      <span>Secured by Paystack</span>
                    </div>
                  )}
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Payment Successful!</h3>
              <p className="text-zinc-600 mb-8 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName.split(' ')[0]}. Your Strategy Session fee has been received.<br/><br/>
                <strong>Next Step:</strong> Our team will call you shortly on the number provided (<strong>{formData.phone}</strong>) to schedule your Strategy Session at a convenient time.
              </p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors w-full sm:w-auto"
              >
                Return to Homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;