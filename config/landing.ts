import { FeatureLdg, InfoLdg, TestimonialType } from "types";

export const infos: InfoLdg[] = [
  {
    title: "Trusted Gold Trading Platform",
    description:
      "Connect with verified suppliers and buyers in the East African gold market. Our platform ensures secure transactions, real-time market data, and transparent trading processes.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&auto=format",
    list: [
      {
        title: "Verified Suppliers",
        description: "All suppliers undergo rigorous KYC and verification processes.",
        icon: "laptop",
      },
      {
        title: "Real-time Pricing",
        description: "Access live gold prices from major international markets.",
        icon: "settings",
      },
      {
        title: "Secure Transactions",
        description:
          "End-to-end encryption and escrow services protect your investments.",
        icon: "search",
      },
    ],
  },
  {
    title: "Advanced Market Intelligence",
    description:
      "Make informed trading decisions with our comprehensive market analysis, price predictions, and risk assessment tools designed for the African gold market.",
    image: "https://images.unsplash.com/photo-1629193383273-84f3daa5a301?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    list: [
      {
        title: "Price Forecasting",
        description:
          "AI-powered predictions help you time your trades optimally.",
        icon: "laptop",
      },
      {
        title: "Risk Analysis",
        description: "Comprehensive risk assessment for all market conditions.",
        icon: "search",
      },
      {
        title: "Market Reports",
        description:
          "Detailed regional analysis and trading insights delivered daily.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Real-time Gold Prices",
    description:
      "Live gold price feeds from major markets with 30-second updates and historical data analysis.",
    link: "/",
    icon: "nextjs",
  },
  {
    title: "Verified Suppliers",
    description:
      "Connect with KYC-verified gold suppliers from DRC and East Africa with trust scores and ratings.",
    link: "/",
    icon: "user",
  },
  {
    title: "Secure Trading",
    description:
      "End-to-end encrypted transactions with escrow services and multi-party verification.",
    link: "/",
    icon: "gitHub",
  },
  {
    title: "Market Intelligence",
    description:
      "AI-powered price predictions, risk analysis, and comprehensive market reports.",
    link: "/",
    icon: "laptop",
  },
  {
    title: "Mobile Trading",
    description:
      "Trade on-the-go with our responsive platform optimized for mobile devices.",
    link: "/",
    icon: "google",
  },
  {
    title: "Multi-currency Support",
    description:
      "Support for USD, EUR, and UGX with real-time currency conversion and rate locks.",
    link: "/",
    icon: "copy",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "Jean-Claude Mukendi",
    job: "Gold Supplier, Goma DRC",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "East African Gold Exchange has transformed my business. I can now connect directly with international buyers and get fair prices for my gold. The verification process gave my buyers confidence, and the platform handles all the complex paperwork.",
  },
  {
    name: "Sarah Al-Rashid",
    job: "Gold Trader, Dubai",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "The real-time market data and price predictions have been invaluable for my trading strategy. I've been able to source high-quality gold from verified DRC suppliers with complete transparency.",
  },
  {
    name: "David Kamau",
    job: "Mining Cooperative Leader, Uganda",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Our cooperative has increased revenue by 40% since joining the platform. The market intelligence helps us time our sales perfectly, and the trust scoring system has opened doors to premium buyers.",
  },
  {
    name: "Marie Nzeyimana",
    job: "Gold Refinery Owner, Rwanda",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "The quality of suppliers on this platform is exceptional. Every transaction has been smooth, and the escrow service provides peace of mind for large purchases.",
  },
  {
    name: "Ahmed Hassan",
    job: "Precious Metals Dealer, London",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    review:
      "East African Gold Exchange has become my primary source for ethically-sourced gold. The documentation and certification process ensures compliance with all international standards.",
  },
  {
    name: "Grace Wanjiku",
    job: "Investment Advisor, Nairobi",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "I recommend this platform to all my clients interested in gold investments. The market analysis tools and risk assessments are professional-grade and have helped clients make informed decisions.",
  },
  {
    name: "Robert Nyong",
    job: "Artisanal Miner, Cameroon",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "As a small-scale miner, I never thought I could access international markets. This platform connected me with buyers worldwide and helped me understand the true value of my gold.",
  },
];
