import { UserRole } from "@prisma/client";

import { SidebarNavItem } from "types";

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "TRADING",
    items: [
      { href: "/dashboard", icon: "dashboard", title: "Dashboard" },
      { href: "/dashboard/trades", icon: "barChart", title: "Active Trades" },
      { href: "/dashboard/portfolio", icon: "package", title: "Portfolio" },
      { href: "/messages", icon: "messages", title: "Messages" },
      { href: "/dashboard/market", icon: "lineChart", title: "Market Data" },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      {
        href: "/admin",
        icon: "laptop",
        title: "Admin Panel",
        authorizeOnly: UserRole.ADMIN,
      },
      {
        href: "/dashboard/billing",
        icon: "billing",
        title: "Billing",
        authorizeOnly: UserRole.USER,
      },
      { href: "/dashboard/settings", icon: "settings", title: "Settings" },
      {
        href: "/admin/orders",
        icon: "package",
        title: "Orders",
        badge: 2,
        authorizeOnly: UserRole.ADMIN,
      },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { href: "/", icon: "home", title: "Homepage" },
      { href: "/news", icon: "bookOpen", title: "News & Insights" },
      { href: "/docs", icon: "bookOpen", title: "Documentation" },
      { href: "/support", icon: "help", title: "Support" },
    ],
  },
];
