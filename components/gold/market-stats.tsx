"use client";

import { useGoldPrice } from '@/contexts/gold-price-context';
import { TrendingUp, TrendingDown, Activity, BarChart3, Clock, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function MarketStats() {
  const { goldPrice, priceHistory } = useGoldPrice();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(2)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toString();
  };

  // Calculate additional market metrics
  const getMarketMetrics = () => {
    if (priceHistory.length < 2) {
      return {
        volatility: 0,
        avgVolume: goldPrice.volume,
        marketCap: 0,
        sessions: 0
      };
    }

    // Calculate volatility (standard deviation of price changes)
    const priceChanges = priceHistory.slice(-20).map((point, index, arr) => {
      if (index === 0) return 0;
      return ((point.price - arr[index - 1].price) / arr[index - 1].price) * 100;
    }).slice(1);

    const avgChange = priceChanges.reduce((sum, change) => sum + change, 0) / priceChanges.length;
    const volatility = Math.sqrt(
      priceChanges.reduce((sum, change) => sum + Math.pow(change - avgChange, 2), 0) / priceChanges.length
    );

    // Calculate average volume (last 10 periods)
    const recentVolumes = priceHistory.slice(-10).map(point => point.volume);
    const avgVolume = recentVolumes.reduce((sum, vol) => sum + vol, 0) / recentVolumes.length;

    // Simulated market cap (price * estimated global gold reserves)
    const estimatedReserves = 8100000000; // ~8.1 billion ounces
    const marketCap = goldPrice.price * estimatedReserves;

    return {
      volatility: Math.abs(volatility),
      avgVolume,
      marketCap,
      sessions: priceHistory.length
    };
  };

  const metrics = getMarketMetrics();

  const getTrendIcon = () => {
    switch (goldPrice.trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    switch (goldPrice.trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatMarketCap = (value: number) => {
    if (value >= 1e12) {
      return `$${(value / 1e12).toFixed(2)}T`;
    }
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`;
    }
    if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Current Price */}
      <div className="overflow-hidden rounded-lg border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
          <h3 className="text-sm font-medium">Current Price</h3>
          <div className="bg-primary/10 rounded-full p-2">
            <DollarSign className="size-4 text-primary" />
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="text-2xl font-bold">{formatPrice(goldPrice.price)}</div>
          <div className={cn("flex items-center text-xs", getTrendColor())}>
            {getTrendIcon()}
            <span className="ml-1 font-medium">
              {goldPrice.change >= 0 ? '+' : ''}
              {formatPrice(Math.abs(goldPrice.change))} ({goldPrice.changePercent >= 0 ? '+' : ''}
              {goldPrice.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>

      {/* Volume */}
      <div className="overflow-hidden rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
          <h3 className="text-sm font-medium">24h Volume</h3>
          <div className="bg-blue-100 rounded-full p-2">
            <BarChart3 className="size-4 text-blue-600" />
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="text-2xl font-bold">{formatVolume(goldPrice.volume)}</div>
          <div className="text-xs text-gray-500 font-medium">
            Avg: {formatVolume(metrics.avgVolume)}
          </div>
        </div>
      </div>

      {/* High/Low */}
      <div className="overflow-hidden rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
          <h3 className="text-sm font-medium">24h Range</h3>
          <div className="bg-purple-100 rounded-full p-2">
            <Activity className="size-4 text-purple-600" />
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-600 font-medium">High:</span>
              <span className="font-medium">{formatPrice(goldPrice.high24h)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-red-600 font-medium">Low:</span>
              <span className="font-medium">{formatPrice(goldPrice.low24h)}</span>
            </div>
            <div className="relative h-2 w-full rounded-full bg-gray-100 mt-1">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                style={{ width: '100%' }}
              ></div>
              <div
                className="absolute inset-y-0 size-3 -mt-0.5 -ml-1.5 rounded-full bg-white shadow-md border border-gray-300"
                style={{
                  left: `${((goldPrice.price - goldPrice.low24h) / (goldPrice.high24h - goldPrice.low24h)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2 font-medium">
            Range: {formatPrice(goldPrice.high24h - goldPrice.low24h)}
          </div>
        </div>
      </div>

      {/* Volatility */}
      <div className="overflow-hidden rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-sm">
        <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
          <h3 className="text-sm font-medium">Volatility</h3>
          <div className="bg-orange-100 rounded-full p-2">
            <Clock className="size-4 text-orange-600" />
          </div>
        </div>
        <div className="p-6 pt-2">
          <div className="text-2xl font-bold">{metrics.volatility.toFixed(3)}%</div>
          <div className="flex items-center space-x-1 text-xs mt-1">
            <Badge variant={metrics.volatility > 0.1 ? "destructive" : metrics.volatility > 0.05 ? "default" : "secondary"} className="text-xs font-medium">
              {metrics.volatility > 0.1 ? "High" : metrics.volatility > 0.05 ? "Medium" : "Low"}
            </Badge>
            <span className="text-gray-500 font-medium">20-period</span>
          </div>
        </div>
      </div>

      {/* Market Cap */}
      <Card className="md:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Estimated Market Cap</CardTitle>
          <DollarSign className="h-4 w-4 text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatMarketCap(metrics.marketCap)}</div>
          <div className="text-xs text-gray-500">
            Based on ~8.1B oz global reserves
          </div>
        </CardContent>
      </Card>

      {/* Session Info */}
      <Card className="md:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Session Information</CardTitle>
          <Clock className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-lg font-bold">{metrics.sessions}</div>
              <div className="text-xs text-gray-500">Data Points</div>
            </div>
            <div>
              <div className="text-lg font-bold">
                {goldPrice.timestamp.toLocaleTimeString('en-US', {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
              <div className="text-xs text-gray-500">Last Update</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
