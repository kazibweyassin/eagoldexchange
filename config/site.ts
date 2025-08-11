import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "East African Gold Exchange",
  description:
    "Professional gold trading platform connecting Congolese gold suppliers with international buyers. Real-time market data, secure transactions, and trusted partnerships in the East African gold market.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/eagoldexchange",
    github: "https://github.com/eagoldexchange/platform",
  },
  mailSupport: "support@eagoldexchange.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Trading",
    items: [
      { title: "Market Data", href: "/market" },
      { title: "Suppliers", href: "/suppliers" },
      { title: "Buyers", href: "/buyers" },
      { title: "Transactions", href: "/transactions" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Getting Started", href: "/docs" },
      { title: "API Documentation", href: "/docs/api" },
      { title: "Market Intelligence", href: "/intelligence" },
      { title: "Support", href: "/support" },
    ],
  },
];
