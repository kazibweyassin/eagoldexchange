import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { LivePriceTicker } from "@/components/gold/live-price-ticker";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-yellow-400 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-yellow-600 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center relative z-10">
        <Link
          href="/trading"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4 bg-yellow-100 border-yellow-300 text-yellow-800 hover:bg-yellow-200",
          )}
        >
          <span className="mr-3">✨</span>
          <span className="hidden md:flex">Now Live:&nbsp;</span> 
          Real-time Gold Trading Platform
        </Link>

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          East African{" "}
          <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent font-extrabold">
            Gold Exchange
          </span>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Connect Congolese gold suppliers with international buyers. 
          Real-time market data, secure transactions, and trusted partnerships 
          in the East African gold market.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/trading"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2 bg-yellow-600 hover:bg-yellow-700",
            )}
          >
            <span>Start Trading</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "px-5 border-yellow-300 text-yellow-800 hover:bg-yellow-50",
            )}
          >
            <Icons.barChart className="mr-2 size-4" />
            <span>Market Dashboard</span>
          </Link>
        </div>

        <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live market data</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            <span>Verified suppliers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
            <span>Secure transactions</span>
          </div>
        </div>

        {/* Live Price Ticker */}
        <div className="w-full max-w-6xl mt-12">
          <LivePriceTicker />
        </div>
      </div>
    </section>
  );
}
