import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import { TradingDashboard } from "@/components/dashboard/trading-dashboard";

export const metadata = constructMetadata({
  title: "Dashboard – East African Gold Exchange",
  description: "Your personalized gold trading dashboard.",
});

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <>
      <DashboardHeader
        heading="Gold Trading Dashboard"
        text={`Welcome back, ${user?.name}. Monitor live prices and manage your trades.`}
      />
      <div className="container mx-auto px-4 py-8">
        <TradingDashboard />
      </div>
    </>
  );
}
