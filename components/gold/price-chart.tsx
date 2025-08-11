"use client";

import { useGoldPrice } from '@/contexts/gold-price-context';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface PriceChartProps {
  height?: number;
  showArea?: boolean;
  timeRange?: '1m' | '5m' | '15m' | '1h';
  className?: string;
}

export function PriceChart({ 
  height = 300, 
  showArea = false, 
  timeRange = '5m',
  className 
}: PriceChartProps) {
  const { priceHistory, goldPrice } = useGoldPrice();

  // Get the last N data points based on timeRange
  const getDataPoints = () => {
    const ranges = {
      '1m': 20,   // Last 1 minute of data (20 points at 3s intervals)
      '5m': 100,  // Last 5 minutes of data
      '15m': 300, // Last 15 minutes of data
      '1h': 1200  // Last 1 hour of data
    };
    
    const points = ranges[timeRange];
    return priceHistory.slice(-points);
  };

  const data = getDataPoints().map((point, index) => ({
    time: point.time, // Use the pre-formatted time string from context
    price: point.price,
    volume: point.volume,
    timestamp: point.timestamp // Keep timestamp as number for any other uses
  }));

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
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

  // Calculate price range for the current data
  const prices = data.map(d => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;
  const paddedMin = minPrice - (priceRange * 0.05);
  const paddedMax = maxPrice + (priceRange * 0.05);

  // Determine trend color
  const getTrendColor = () => {
    switch (goldPrice.trend) {
      case 'up':
        return '#22c55e'; // green-500
      case 'down':
        return '#ef4444'; // red-500
      default:
        return '#64748b'; // slate-500
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(payload[0].value)}
          </p>
          <p className="text-xs text-gray-500">
            Volume: {formatVolume(data.volume)}
          </p>
        </div>
      );
    }
    return null;
  };

  if (data.length === 0) {
    return (
      <div className={cn("flex items-center justify-center bg-gray-50 rounded-lg", className)} style={{ height }}>
        <div className="text-center">
          <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Waiting for price data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-white rounded-lg border", className)}>
      {/* Chart Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-gray-900">Gold Price Chart</h3>
          <Badge variant="outline" className="text-xs">
            {timeRange.toUpperCase()}
          </Badge>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <div className={cn(
            "flex items-center space-x-1",
            goldPrice.trend === 'up' ? 'text-green-600' : 
            goldPrice.trend === 'down' ? 'text-red-600' : 'text-gray-600'
          )}>
            {goldPrice.trend === 'up' ? <TrendingUp className="h-4 w-4" /> :
             goldPrice.trend === 'down' ? <TrendingDown className="h-4 w-4" /> :
             <BarChart3 className="h-4 w-4" />}
            <span className="font-medium">
              {goldPrice.changePercent >= 0 ? '+' : ''}
              {goldPrice.changePercent.toFixed(2)}%
            </span>
          </div>
          
          <span className="text-gray-400">|</span>
          
          <span className="text-gray-600">
            Range: {formatPrice(minPrice)} - {formatPrice(maxPrice)}
          </span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="p-4">
        <ResponsiveContainer width="100%" height={height}>
          {showArea ? (
            <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={getTrendColor()} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={getTrendColor()} stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#e2e8f0' }}
                axisLine={{ stroke: '#e2e8f0' }}
              />
              <YAxis 
                domain={[paddedMin, paddedMax]}
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#e2e8f0' }}
                axisLine={{ stroke: '#e2e8f0' }}
                tickFormatter={formatPrice}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke={getTrendColor()}
                strokeWidth={2}
                fill="url(#priceGradient)"
                dot={false}
                activeDot={{ r: 4, fill: getTrendColor() }}
              />
            </AreaChart>
          ) : (
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#e2e8f0' }}
                axisLine={{ stroke: '#e2e8f0' }}
              />
              <YAxis 
                domain={[paddedMin, paddedMax]}
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#e2e8f0' }}
                axisLine={{ stroke: '#e2e8f0' }}
                tickFormatter={formatPrice}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="price"
                stroke={getTrendColor()}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: getTrendColor() }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
