"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  RefreshCw,
  ArrowRight,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

interface PriceData {
  type: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  lastUpdated: string;
}

export function LivePriceWidget() {
  const [prices, setPrices] = useState<PriceData[]>([
    {
      type: "24K Gold",
      price: 2034.50,
      change: 24.30,
      changePercent: 1.2,
      volume: "156.7 oz",
      lastUpdated: "2 min ago"
    },
    {
      type: "22K Gold", 
      price: 1864.75,
      change: -5.60,
      changePercent: -0.3,
      volume: "203.2 oz",
      lastUpdated: "2 min ago"
    },
    {
      type: "18K Gold",
      price: 1525.88,
      change: 12.15,
      changePercent: 0.8,
      volume: "89.4 oz",
      lastUpdated: "2 min ago"
    }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prevPrices => 
        prevPrices.map(price => ({
          ...price,
          price: price.price + (Math.random() - 0.5) * 10,
          change: (Math.random() - 0.5) * 50,
          changePercent: (Math.random() - 0.5) * 3,
          lastUpdated: "Just now"
        }))
      );
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setPrices(prevPrices => 
        prevPrices.map(price => ({
          ...price,
          lastUpdated: "Just now"
        }))
      );
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">Live Gold Prices</CardTitle>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
              Live
            </Badge>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {prices.map((priceData, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex-1">
              <div className="font-medium text-sm">{priceData.type}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{priceData.lastUpdated}</span>
                <span>•</span>
                <span>Vol: {priceData.volume}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg text-yellow-600">
                ${priceData.price.toFixed(2)}
              </div>
              <div className={`flex items-center justify-end text-xs ${
                priceData.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {priceData.change >= 0 ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                ${Math.abs(priceData.change).toFixed(2)} ({priceData.changePercent >= 0 ? '+' : ''}{priceData.changePercent.toFixed(1)}%)
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4 inline mr-1" />
              Market active • 24/7 trading
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View Full Market
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
