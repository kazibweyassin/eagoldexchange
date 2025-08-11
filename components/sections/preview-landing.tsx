import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, Shield, Globe } from "lucide-react";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-yellow-300 text-yellow-800 bg-yellow-50 mb-4">
            Platform Preview
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Professional Gold Trading Platform</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our intuitive trading interface designed specifically for the East African gold market
          </p>
        </div>

        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg bg-gradient-to-br from-slate-900 to-slate-800">
            <Image
              className="size-full object-cover object-center"
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=2000&h=1000&fit=crop&auto=format"
              alt="Gold Trading Dashboard Preview"
              width={2000}
              height={1000}
              priority={true}
            />
            {/* Overlay with key features */}
            <div className="absolute inset-0 bg-black/20 flex items-end">
              <div className="p-6 w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                    <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">Live Prices</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                    <BarChart3 className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">Analytics</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                    <Shield className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">Secure Trading</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                    <Globe className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">Global Market</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
