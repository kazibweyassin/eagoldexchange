"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, Globe, FileText, Download, AlertTriangle, Target, Calendar } from "lucide-react";
import useSWR from "swr";

interface MarketData {
  region: string;
  price: number;
  volume: number;
  change24h: number;
}

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  impact: "high" | "medium" | "low";
}

interface PredictionData {
  date: string;
  predicted: number;
  confidence: number;
  actual?: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function MarketIntelligence() {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [timeframe, setTimeframe] = useState("30D");
  const [analysisType, setAnalysisType] = useState("trend");

  // Mock data for demonstration
  const regionalData: MarketData[] = [
    { region: "London", price: 2024.50, volume: 1250000, change24h: 1.2 },
    { region: "Dubai", price: 2022.80, volume: 890000, change24h: 0.8 },
    { region: "Kampala", price: 2019.30, volume: 450000, change24h: -0.3 },
    { region: "Goma", price: 2015.60, volume: 320000, change24h: -0.8 },
  ];

  const marketNews: NewsItem[] = [
    {
      id: "1",
      title: "Central Bank Gold Reserves Increase in Q3",
      summary: "Global central banks purchased 400 tons of gold in Q3, driving demand...",
      source: "Reuters",
      publishedAt: "2 hours ago",
      impact: "high"
    },
    {
      id: "2", 
      title: "DRC Mining Regulations Update",
      summary: "New mining regulations in Democratic Republic of Congo may affect supply...",
      source: "Mining Weekly",
      publishedAt: "5 hours ago",
      impact: "medium"
    },
    {
      id: "3",
      title: "USD Strengthening Impacts Gold Prices",
      summary: "Rising US dollar strength puts pressure on gold prices across markets...",
      source: "Bloomberg",
      publishedAt: "1 day ago",
      impact: "high"
    }
  ];

  const predictionData: PredictionData[] = [
    { date: "2024-08-07", predicted: 2030, confidence: 85, actual: 2024 },
    { date: "2024-08-08", predicted: 2035, confidence: 82 },
    { date: "2024-08-09", predicted: 2028, confidence: 78 },
    { date: "2024-08-10", predicted: 2040, confidence: 75 },
    { date: "2024-08-11", predicted: 2045, confidence: 72 },
  ];

  const sentimentData = [
    { name: "Bullish", value: 45, color: "#22c55e" },
    { name: "Neutral", value: 35, color: "#64748b" },
    { name: "Bearish", value: 20, color: "#ef4444" },
  ];

  const RegionalComparison = () => (
    <Card>
      <CardHeader>
        <CardTitle>Regional Price Comparison</CardTitle>
        <CardDescription>Gold prices across major trading centers</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regionalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip 
              formatter={(value: number, name: string) => [
                name === "price" ? `$${value}` : value.toLocaleString(),
                name === "price" ? "Price (USD/oz)" : "Volume (oz)"
              ]}
            />
            <Bar dataKey="price" fill="#ca8a04" />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {regionalData.map((region) => (
            <div key={region.region} className="text-center">
              <div className="font-semibold">{region.region}</div>
              <div className="text-lg font-bold">${region.price}</div>
              <div className={`text-sm flex items-center justify-center ${
                region.change24h > 0 ? "text-green-600" : "text-red-600"
              }`}>
                {region.change24h > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                {region.change24h > 0 ? "+" : ""}{region.change24h}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const PricePrediction = () => (
    <Card>
      <CardHeader>
        <CardTitle>Price Prediction Model</CardTitle>
        <CardDescription>AI-powered gold price forecasting</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={predictionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin - 20', 'dataMax + 20']} />
            <Tooltip 
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value: number, name: string) => [
                name === "predicted" ? `$${value}` : `${value}%`,
                name === "predicted" ? "Predicted Price" : name === "actual" ? "Actual Price" : "Confidence"
              ]}
            />
            <Line type="monotone" dataKey="predicted" stroke="#ca8a04" strokeWidth={2} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="actual" stroke="#22c55e" strokeWidth={2} />
            <Line type="monotone" dataKey="confidence" stroke="#3b82f6" strokeWidth={1} />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Model accuracy: 82% over last 30 days
          </div>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-1" />
            Export Forecast
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const MarketSentiment = () => (
    <Card>
      <CardHeader>
        <CardTitle>Market Sentiment</CardTitle>
        <CardDescription>Current trader sentiment analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={sentimentData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {sentimentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`${value}%`, "Traders"]} />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="flex justify-center space-x-4 mt-4">
          {sentimentData.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}: {item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const NewsAndAlerts = () => (
    <Card>
      <CardHeader>
        <CardTitle>Market News & Alerts</CardTitle>
        <CardDescription>Latest developments affecting gold prices</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketNews.map((news) => (
            <div key={news.id} className="border-l-4 border-l-yellow-500 pl-4 py-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{news.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{news.summary}</p>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-xs text-muted-foreground">{news.source}</span>
                    <span className="text-xs text-muted-foreground">{news.publishedAt}</span>
                  </div>
                </div>
                <Badge 
                  variant={news.impact === "high" ? "destructive" : news.impact === "medium" ? "default" : "secondary"}
                  className="ml-2"
                >
                  {news.impact}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        
        <Button className="w-full mt-4" variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          View All News
        </Button>
      </CardContent>
    </Card>
  );

  const RiskAnalysis = () => (
    <Card>
      <CardHeader>
        <CardTitle>Risk Assessment</CardTitle>
        <CardDescription>Current market risk indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Volatility Risk</span>
              <Badge variant="default">Medium</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Liquidity Risk</span>
              <Badge variant="secondary">Low</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Geopolitical Risk</span>
              <Badge variant="destructive">High</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Currency Risk</span>
              <Badge variant="default">Medium</Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "45%" }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800">Risk Alert</h4>
              <p className="text-sm text-yellow-700">
                Elevated geopolitical tensions in mining regions may impact supply chains.
                Consider diversifying supplier base.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Market Intelligence</h1>
          <p className="text-muted-foreground">Advanced market analysis and insights</p>
        </div>
        <div className="flex space-x-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7D">7 Days</SelectItem>
              <SelectItem value="30D">30 Days</SelectItem>
              <SelectItem value="90D">90 Days</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RegionalComparison />
            <NewsAndAlerts />
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <PricePrediction />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">7-Day Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+2.5%</div>
                <p className="text-sm text-muted-foreground">Expected price increase</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Confidence Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-sm text-muted-foreground">Model confidence</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-1">
                  <div>• USD strength</div>
                  <div>• Central bank purchases</div>
                  <div>• Supply constraints</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MarketSentiment />
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Fear & Greed Index</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-14 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold">65</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Put/Call Ratio</span>
                  <span className="font-semibold">0.82</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>VIX (Volatility)</span>
                  <span className="font-semibold">18.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Social Sentiment</span>
                  <Badge variant="default">Positive</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-4">
          <RiskAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  );
}
