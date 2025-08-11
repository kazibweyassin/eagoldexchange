"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, RefreshCw, DollarSign, Globe, Timer } from "lucide-react";
import useSWR from "swr";

interface GoldPrice {
  price: number;
  change24h: number;
  lastUpdate: string;
  source: string;
}

interface PriceHistory {
  timestamp: string;
  price: number;
  date: string;
}

interface CurrencyRate {
  UGX: number;
  EUR: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function GoldDashboard() {
  const [timeframe, setTimeframe] = useState("1D");
  const [convertAmount, setConvertAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UGX");
  const [countdown, setCountdown] = useState(30);

  // Fetch live gold price
  const { data: goldPrice, error: priceError, mutate: mutatePrice } = useSWR<GoldPrice>(
    "/api/gold-prices/current",
    fetcher,
    { refreshInterval: 30000 }
  );

  // Fetch price history
  const { data: priceHistory, error: historyError } = useSWR<PriceHistory[]>(
    `/api/gold-prices/history?timeframe=${timeframe}`,
    fetcher
  );

  // Fetch currency rates
  const { data: currencyRates } = useSWR<CurrencyRate>(
    "/api/currency/rates",
    fetcher,
    { refreshInterval: 60000 }
  );

  // Countdown timer for next update
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          mutatePrice();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mutatePrice]);

  const convertCurrency = (amount: number) => {
    if (!currencyRates || !goldPrice) return 0;
    
    let baseAmount = amount;
    if (fromCurrency === "UGX") {
      baseAmount = amount / currencyRates.UGX;
    } else if (fromCurrency === "EUR") {
      baseAmount = amount / currencyRates.EUR;
    }

    if (toCurrency === "USD") {
      return baseAmount;
    } else if (toCurrency === "UGX") {
      return baseAmount * currencyRates.UGX;
    } else if (toCurrency === "EUR") {
      return baseAmount * currencyRates.EUR;
    }
    return baseAmount;
  };

  const isPositiveChange = goldPrice && goldPrice.change24h > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-yellow-600">Gold Market Dashboard</h1>
        <p className="text-muted-foreground">Real-time gold prices and market intelligence</p>
      </div>

      {/* Main Price Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Gold Price */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gold Price (USD/oz)</CardTitle>
            <DollarSign className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {goldPrice ? `$${goldPrice.price.toFixed(2)}` : "Loading..."}
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              {goldPrice && (
                <>
                  {isPositiveChange ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={isPositiveChange ? "text-green-500" : "text-red-500"}>
                    {isPositiveChange ? "+" : ""}{goldPrice.change24h.toFixed(2)}%
                  </span>
                  <span>24h</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Market Sentiment */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Sentiment</CardTitle>
            <Globe className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge variant={isPositiveChange ? "default" : "destructive"}>
                {isPositiveChange ? "Bullish" : "Bearish"}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {isPositiveChange ? "Prices trending upward" : "Prices under pressure"}
            </p>
          </CardContent>
        </Card>

        {/* Next Update */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Update</CardTitle>
            <Timer className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{countdown}s</div>
            <p className="text-xs text-muted-foreground">Auto-refresh active</p>
          </CardContent>
        </Card>

        {/* Data Source */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Source</CardTitle>
            <RefreshCw className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">
              {goldPrice?.source || "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">
              Last: {goldPrice?.lastUpdate ? new Date(goldPrice.lastUpdate).toLocaleTimeString() : "N/A"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Price Chart */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Price Chart</CardTitle>
              <CardDescription>Historical gold price movement</CardDescription>
            </div>
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1D">1 Day</SelectItem>
                <SelectItem value="7D">7 Days</SelectItem>
                <SelectItem value="30D">30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={priceHistory || []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={['dataMin - 10', 'dataMax + 10']}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                labelFormatter={(label) => `Date: ${label}`}
                formatter={(value: number) => [`$${value.toFixed(2)}`, "Gold Price"]}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#ca8a04" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Currency Converter */}
      <Card>
        <CardHeader>
          <CardTitle>Currency Converter</CardTitle>
          <CardDescription>Convert gold prices between currencies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <input
                type="number"
                value={convertAmount}
                onChange={(e) => setConvertAmount(Number(e.target.value))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Enter amount"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">From</label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="UGX">UGX</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="UGX">UGX</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Result</label>
              <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                {convertCurrency(convertAmount).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">For Suppliers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              List your gold and connect with international buyers
            </p>
            <Button className="w-full">List Your Gold</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">For Buyers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Browse verified gold listings and place orders
            </p>
            <Button variant="outline" className="w-full">Browse Listings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Market Intelligence</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access detailed market analysis and reports
            </p>
            <Button variant="secondary" className="w-full">View Reports</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
