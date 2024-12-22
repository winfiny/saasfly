import { env } from "~/env.mjs";

interface SubscriptionPlanTranslation {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

export const priceDataMap: Record<string, SubscriptionPlanTranslation[]> = {
  en: [
    {
      id: "starter",
      title: "Starter",
      description: "For Beginners",
      benefits: [
        "Up to 1 project per month",
        "Basic analytics and insights",
        "Access to core features such as document summarization and basic legal/medical queries",
        "Template access for common documents (e.g., contracts, patient forms)",
      ],
      limitations: [
        "No priority access to new features",
        "Limited customer support",
        "No custom branding options",
        "Restricted access to advanced resources and templates",
      ],
      prices: {
        monthly: 0,
        yearly: 0,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "pro",
      title: "Pro",
      description: "Unlock Advanced Features",
      benefits: [
        "Up to 3 projects per month",
        "Advanced analytics and insights",
        "Access to business templates and tools for legal/medical documentation",
        "Priority customer support with faster response times",
        "Exclusive webinars and training sessions on leveraging AI in your practice",
        "Enhanced query capabilities with contextual understanding for legal/medical inquiries",
      ],
      limitations: [
        "No custom branding options",
        "Limited access to premium resources and advanced templates",
      ],
      prices: {
        monthly: 30,
        yearly: 288,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "business",
      title: "Business",
      description: "For Power Users",
      benefits: [
        "Up to 10 projects per month",
        "Real-time analytics and insights tailored for legal/medical practices",
        "Access to all templates, including custom branding options for client-facing documents",
        "24/7 dedicated customer support with personalized assistance",
        "Personalized configuration and account management services tailored to your needs",
        "Advanced AI capabilities for complex legal/medical queries and document drafting assistance",
      ],
      limitations: [],
      prices: {
        monthly: 60,
        yearly: 600,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    }
    
  ],
};
