"use client";

import { useGoldPrice } from '@/contexts/gold-price-context';
import { TrendingUp, TrendingDown, Minus, Play, Pause, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function LivePriceTicker() {
  const { goldPrice, isLive, toggleLive } = useGoldPrice();

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
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(0)}K`;
    }
    return volume.toString();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getTrendIcon = () => {
    switch (goldPrice.trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    switch (goldPrice.trend) {
      case 'up':
        return 'text-green-600 bg-green-50';
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Main Price Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className={cn(
              "h-2 w-2 rounded-full",
              isLive ? "bg-green-500 animate-pulse" : "bg-gray-400"
            )} />
            <Badge variant="outline" className="border-yellow-400 text-yellow-800 bg-yellow-100">
              {isLive ? 'LIVE' : 'PAUSED'}
            </Badge>
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">
              {formatPrice(goldPrice.price)}
            </span>
            <span className="text-sm font-medium text-gray-500">/oz</span>
          </div>
          
          <div className={cn(
            "flex items-center space-x-1 px-2 py-1 rounded-md",
            getTrendColor()
          )}>
            {getTrendIcon()}
            <span className="font-medium">
              {goldPrice.change >= 0 ? '+' : ''}
              {formatPrice(Math.abs(goldPrice.change))}
            </span>
            <span className="text-sm">
              ({goldPrice.changePercent >= 0 ? '+' : ''}
              {goldPrice.changePercent.toFixed(4)}%)
            </span>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Volume:</span>
            <span className="font-medium">{formatVolume(goldPrice.volume)}</span>
          </div>
          
          <div className="flex space-x-4">
            <div>
              <span className="text-gray-600">24h High:</span>
              <span className="font-medium text-green-600 ml-1">
                {formatPrice(goldPrice.high24h)}
              </span>
            </div>
            <div>
              <span className="text-gray-600">24h Low:</span>
              <span className="font-medium text-red-600 ml-1">
                {formatPrice(goldPrice.low24h)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Controls Section */}
        <div className="flex items-center space-x-3">
          <div className="text-xs text-gray-500">
            Updated: {formatTime(goldPrice.timestamp)}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLive}
            className="border-yellow-300 hover:bg-yellow-50"
          >
            {isLive ? (
              <>
                <Pause className="h-3 w-3 mr-1" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-3 w-3 mr-1" />
                Resume
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
