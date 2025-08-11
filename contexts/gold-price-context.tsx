"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface GoldPrice {
  price: number;
  change: number;
  changePercent: number;
  timestamp: Date;
  trend: 'up' | 'down' | 'stable';
  volume: number;
  high24h: number;
  low24h: number;
}

interface RegionalPrice {
  region: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  lastUpdate: Date;
}

interface GoldPriceContextType {
  goldPrice: GoldPrice;
  regionalPrices: RegionalPrice[];
  isLive: boolean;
  toggleLive: () => void;
  priceHistory: Array<{ time: string; price: number; timestamp: number; volume: number }>;
}

const GoldPriceContext = createContext<GoldPriceContextType | undefined>(undefined);

export function useGoldPrice() {
  const context = useContext(GoldPriceContext);
  if (!context) {
    throw new Error('useGoldPrice must be used within a GoldPriceProvider');
  }
  return context;
}

interface GoldPriceProviderProps {
  children: ReactNode;
}

export function GoldPriceProvider({ children }: GoldPriceProviderProps) {
  // Base price around current gold price (approximately $2025/oz)
  const BASE_PRICE = 2025;
  const MAX_VARIATION = 50; // Maximum price variation from base
  const MIN_CHANGE = 0.1; // Minimum price change
  const MAX_CHANGE = 3.0; // Maximum price change per update
  
  const [goldPrice, setGoldPrice] = useState<GoldPrice>({
    price: BASE_PRICE,
    change: 0,
    changePercent: 0,
    timestamp: new Date(),
    trend: 'stable',
    volume: 1250000,
    high24h: BASE_PRICE + 15,
    low24h: BASE_PRICE - 12
  });
  
  const [regionalPrices, setRegionalPrices] = useState<RegionalPrice[]>([
    {
      region: 'London',
      price: BASE_PRICE + 2.50,
      change: 1.2,
      changePercent: 0.06,
      volume: 1250000,
      lastUpdate: new Date()
    },
    {
      region: 'Dubai',
      price: BASE_PRICE - 1.20,
      change: 0.8,
      changePercent: 0.04,
      volume: 890000,
      lastUpdate: new Date()
    },
    {
      region: 'Kampala',
      price: BASE_PRICE - 5.70,
      change: -0.3,
      changePercent: -0.01,
      volume: 450000,
      lastUpdate: new Date()
    },
    {
      region: 'Goma',
      price: BASE_PRICE - 9.40,
      change: -0.8,
      changePercent: -0.04,
      volume: 320000,
      lastUpdate: new Date()
    }
  ]);
  
  const [isLive, setIsLive] = useState(true);
  const [previousPrice, setPreviousPrice] = useState(BASE_PRICE);
  const [priceHistory, setPriceHistory] = useState<Array<{ time: string; price: number; timestamp: number; volume: number }>>([]);

  // Advanced price generation algorithm
  const generateRealisticPrice = (currentPrice: number, volatility: number = 1): number => {
    // Use sine wave for natural market cycles + random noise
    const time = Date.now() / 1000;
    const cyclicalComponent = Math.sin(time / 300) * 0.002; // 5-minute cycle
    const trendComponent = Math.sin(time / 1800) * 0.001; // 30-minute trend
    
    // Random walk component
    const randomComponent = (Math.random() - 0.5) * 0.004 * volatility;
    
    // Mean reversion - tendency to return to base price
    const meanReversionStrength = 0.1;
    const distanceFromBase = (currentPrice - BASE_PRICE) / BASE_PRICE;
    const meanReversionComponent = -distanceFromBase * meanReversionStrength * 0.001;
    
    // Combine all components
    const totalChange = cyclicalComponent + trendComponent + randomComponent + meanReversionComponent;
    let newPrice = currentPrice * (1 + totalChange);
    
    // Ensure price stays within realistic bounds
    const minPrice = BASE_PRICE - MAX_VARIATION;
    const maxPrice = BASE_PRICE + MAX_VARIATION;
    newPrice = Math.max(minPrice, Math.min(maxPrice, newPrice));
    
    return Math.round(newPrice * 100) / 100;
  };

  const updatePrice = () => {
    if (!isLive) return;
    
    setGoldPrice(prev => {
      const newPrice = generateRealisticPrice(prev.price);
      const change = newPrice - previousPrice;
      const changePercent = ((newPrice - previousPrice) / previousPrice) * 100;
      
      let trend: 'up' | 'down' | 'stable' = 'stable';
      if (change > MIN_CHANGE) trend = 'up';
      else if (change < -MIN_CHANGE) trend = 'down';
      
      // Update 24h high/low
      const high24h = Math.max(prev.high24h, newPrice);
      const low24h = Math.min(prev.low24h, newPrice);
      
      // Random volume fluctuation
      const volumeChange = (Math.random() - 0.5) * 0.1;
      const newVolume = Math.max(500000, prev.volume * (1 + volumeChange));
      
      return {
        price: newPrice,
        change: Math.round(change * 100) / 100,
        changePercent: Math.round(changePercent * 10000) / 10000,
        timestamp: new Date(),
        trend,
        volume: Math.round(newVolume),
        high24h,
        low24h
      };
    });
    
    // Update regional prices with slight variations
    setRegionalPrices(prev => 
      prev.map(region => {
        const baseChange = (Math.random() - 0.5) * 0.003;
        const newPrice = generateRealisticPrice(region.price, 0.8);
        const change = newPrice - region.price;
        const changePercent = (change / region.price) * 100;
        const volumeChange = (Math.random() - 0.5) * 0.15;
        
        return {
          ...region,
          price: newPrice,
          change: Math.round(change * 100) / 100,
          changePercent: Math.round(changePercent * 10000) / 10000,
          volume: Math.max(100000, region.volume * (1 + volumeChange)),
          lastUpdate: new Date()
        };
      })
    );
  };

  const toggleLive = () => {
    setIsLive(prev => !prev);
  };

  // Update prices every 2 seconds when live
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(updatePrice, 2000);
    return () => clearInterval(interval);
  }, [isLive, previousPrice]);

  // Update price history
  useEffect(() => {
    const newPoint = {
      time: goldPrice.timestamp.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      price: goldPrice.price,
      timestamp: goldPrice.timestamp.getTime(),
      volume: goldPrice.volume
    };

    setPriceHistory(prev => {
      const updated = [...prev, newPoint];
      // Keep only last 30 points
      return updated.slice(-30);
    });
  }, [goldPrice.price]);

  // Update previous price reference
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreviousPrice(goldPrice.price);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, [goldPrice.price]);

  return (
    <GoldPriceContext.Provider value={{ 
      goldPrice, 
      regionalPrices, 
      isLive, 
      toggleLive, 
      priceHistory 
    }}>
      {children}
    </GoldPriceContext.Provider>
  );
}
