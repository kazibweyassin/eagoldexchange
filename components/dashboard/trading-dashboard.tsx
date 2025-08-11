"use client";

import { LivePriceTicker } from "@/components/gold/live-price-ticker";
import { PriceChart } from "@/components/gold/price-chart";
import { MarketStats } from "@/components/gold/market-stats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Package,
  Shield,
  Clock,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Eye,
  Plus,
  ArrowRight,
  Bell,
  Settings,
  RefreshCw
} from "lucide-react";

export function TradingDashboard() {
  return (
    <div className="space-y-8">
      {/* Live Price Ticker */}
      <LivePriceTicker />
      
      {/* Market Stats Overview */}
      <MarketStats />
      
      {/* Price Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Price Chart */}
        <div className="xl:col-span-2">
          <Tabs defaultValue="5m" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Price Charts</h2>
              <TabsList className="grid w-fit grid-cols-4">
                <TabsTrigger value="1m">1M</TabsTrigger>
                <TabsTrigger value="5m">5M</TabsTrigger>
                <TabsTrigger value="15m">15M</TabsTrigger>
                <TabsTrigger value="1h">1H</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="1m">
              <PriceChart timeRange="1m" height={400} showArea />
            </TabsContent>
            <TabsContent value="5m">
              <PriceChart timeRange="5m" height={400} showArea />
            </TabsContent>
            <TabsContent value="15m">
              <PriceChart timeRange="15m" height={400} showArea />
            </TabsContent>
            <TabsContent value="1h">
              <PriceChart timeRange="1h" height={400} showArea />
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Trading Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Quick Trade
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Live Market
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button className="bg-green-600 hover:bg-green-700">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Buy
                </Button>
                <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Sell
                </Button>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Spread:</span>
                  <span className="font-medium">$0.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min. Order:</span>
                  <span className="font-medium">1 oz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Settlement:</span>
                  <span className="font-medium">T+1</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Market Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Price approaching $2,000 resistance</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>High volume detected</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Market trend: Bullish</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                <RefreshCw className="w-3 h-3 mr-2" />
                Manage Alerts
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Buy 5 oz</div>
                    <div className="text-gray-500">$1,995.50/oz</div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Filled
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Sell 2 oz</div>
                    <div className="text-gray-500">$1,998.20/oz</div>
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    Pending
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Buy 10 oz</div>
                    <div className="text-gray-500">$1,992.00/oz</div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Filled
                  </Badge>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Trades
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,450</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="flex items-center text-xs text-blue-600">
              <Clock className="h-3 w-3 mr-1" />
              3 pending completion
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gold Holdings</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2 oz</div>
            <div className="flex items-center text-xs text-yellow-600">
              <Shield className="h-3 w-3 mr-1" />
              Verified & Insured
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trust Score</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <div className="flex items-center text-xs text-green-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              Excellent Rating
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Market Prices */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live Gold Prices</CardTitle>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-medium text-muted-foreground mb-2">24K Gold</h4>
                  <div className="text-2xl font-bold text-yellow-600">$2,034.50</div>
                  <div className="flex items-center justify-center text-sm text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +1.2%
                  </div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-medium text-muted-foreground mb-2">22K Gold</h4>
                  <div className="text-2xl font-bold text-yellow-600">$1,864.75</div>
                  <div className="flex items-center justify-center text-sm text-red-600 mt-1">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -0.3%
                  </div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-medium text-muted-foreground mb-2">18K Gold</h4>
                  <div className="text-2xl font-bold text-yellow-600">$1,525.88</div>
                  <div className="flex items-center justify-center text-sm text-green-600 mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +0.8%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Trades */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Trades</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Trade
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Trade 1 */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Purchase</Badge>
                      <span className="font-medium">10 oz 24K Gold</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Supplier: Golden Horizons Mining
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$20,345</div>
                    <Badge variant="secondary" className="mt-1">Escrow</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Trade 2 */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-green-50 text-green-700">Sale</Badge>
                      <span className="font-medium">5.5 oz 22K Gold</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Buyer: International Gold Corp
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$10,256</div>
                    <Badge variant="default" className="mt-1">Processing</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Trade 3 */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">Exchange</Badge>
                      <span className="font-medium">25 oz 18K → 20 oz 22K</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Partner: East Africa Gold Exchange
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">Exchange</div>
                    <Badge variant="outline" className="mt-1">Pending</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Create New Trade
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                View Inventory
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Market Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Find Partners
              </Button>
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Identity Verification</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Business License</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Gold Expertise</span>
                  <Badge variant="secondary">Level 3</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Trust Score</span>
                    <span>98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Notifications</CardTitle>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Bell className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Trade Completed</p>
                    <p className="text-muted-foreground">Your 5oz gold sale has been completed</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Price Alert</p>
                    <p className="text-muted-foreground">24K gold reached your target price</p>
                    <p className="text-xs text-muted-foreground mt-1">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Verification Update</p>
                    <p className="text-muted-foreground">New supplier verified in your network</p>
                    <p className="text-xs text-muted-foreground mt-1">6 hours ago</p>
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" className="w-full mt-4" size="sm">
                View All Notifications
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
