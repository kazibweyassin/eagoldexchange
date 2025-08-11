import { PlansRow, SubscriptionPlan } from "types";
import { env } from "@/env.mjs";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Basic Trader",
    description: "Perfect for Getting Started",
    benefits: [
      "Access to live gold prices",
      "Browse verified supplier listings",
      "Basic market intelligence reports",
      "Standard transaction fees (2.5% suppliers, 1.5% buyers)",
      "Email support",
    ],
    limitations: [
      "No premium analytics",
      "Limited to 5 active listings",
      "Standard verification process",
      "No priority customer support",
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
    title: "Professional",
    description: "For Serious Traders",
    benefits: [
      "Everything in Basic Trader",
      "Reduced transaction fees (2% suppliers, 1% buyers)",
      "Advanced market analytics",
      "Unlimited listings",
      "Priority verification",
      "Priority customer support",
      "Market trend predictions",
    ],
    limitations: [
      "No custom reporting",
      "No dedicated account manager",
    ],
    prices: {
      monthly: 99,
      yearly: 999,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: "Enterprise",
    description: "For Large Operations",
    benefits: [
      "Everything in Professional",
      "Lowest transaction fees (1.5% suppliers, 0.5% buyers)",
      "Custom market intelligence reports",
      "Dedicated account manager",
      "24/7 priority support",
      "API access for trading systems",
      "Custom integration support",
      "Bulk trading discounts",
    ],
    limitations: [],
    prices: {
      monthly: 299,
      yearly: 2999,
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];

export const plansColumns = [
  "starter",
  "pro",
  "business",
  "enterprise",
] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "Live Gold Prices",
    starter: true,
    pro: true,
    business: true,
    enterprise: "Custom",
    tooltip: "All plans include access to real-time gold market prices.",
  },
  {
    feature: "Active Listings",
    starter: "5",
    pro: "Unlimited",
    business: "Unlimited",
    enterprise: "Unlimited",
    tooltip: "Number of active gold listings you can maintain.",
  },
  {
    feature: "Transaction Fees",
    starter: "2.5% / 1.5%",
    pro: "2% / 1%",
    business: "1.5% / 0.5%",
    enterprise: "Custom",
    tooltip: "Supplier fees / Buyer fees on successful transactions.",
  },
  {
    feature: "Market Analytics",
    starter: "Basic",
    pro: "Advanced",
    business: "Premium",
    enterprise: "Custom",
    tooltip: "Level of market intelligence and analytics access.",
  },
  {
    feature: "Verification Priority",
    starter: "Standard",
    pro: "Priority",
    business: "Express",
    enterprise: "Instant",
    tooltip: "Speed of supplier and buyer verification process.",
  },
  {
    feature: "Customer Support",
    starter: "Email",
    pro: "Priority Email",
    business: "Phone & Email",
    enterprise: "24/7 Dedicated",
    tooltip: "Level of customer support available.",
  },
  {
    feature: "API Access",
    starter: null,
    pro: "Basic",
    business: "Advanced",
    enterprise: "Full",
    tooltip: "Access to trading APIs for system integration.",
  },
  {
    feature: "Custom Reports",
    starter: null,
    pro: null,
    business: "Available",
    enterprise: "Available",
    tooltip: "Custom market intelligence and trading reports.",
  },
  {
    feature: "Dedicated Manager",
    starter: null,
    pro: null,
    business: null,
    enterprise: true,
    tooltip: "Enterprise plan includes a dedicated account manager.",
  },
  {
    feature: "Bulk Trading Discounts",
    starter: null,
    pro: null,
    business: "Available",
    enterprise: "Available",
    tooltip: "Special rates for high-volume transactions.",
  },
];
