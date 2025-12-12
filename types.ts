export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export interface ServiceModule {
  id: number;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

// Add Paystack type definition for window object
declare global {
  interface Window {
    PaystackPop: any;
  }
}