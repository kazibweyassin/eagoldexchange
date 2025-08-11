import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  BarChart3, 
  Globe, 
  Clock,
  DollarSign,
  Target,
  AlertCircle
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Live Market Data – East African Gold Exchange",
  description: "Real-time gold prices, market trends, and trading intelligence for the East African gold market. Track prices, volumes, and market movements.",
});

export default function MarketPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-yellow-300 text-yellow-800 bg-yellow-50">
            <Activity className="h-3 w-3 mr-1" />
            Live Data
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Gold Market{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Stay informed with real-time gold prices, market trends, and trading intelligence 
            for the East African gold market and global exchanges.
          </p>
        </div>
      </section>

      {/* Live Prices */}
      <section className="container max-w-6xl">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Live Gold Prices</h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Updated: 2 minutes ago</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>London Gold Fixing</CardDescription>
                <CardTitle className="text-2xl">$2,045.50</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 text-sm">+1.2% (+$24.30)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>East Africa Premium</CardDescription>
                <CardTitle className="text-2xl">$2,067.75</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 text-sm">+0.8% (+$16.20)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Congo Gold (99.5%)</CardDescription>
                <CardTitle className="text-2xl">$2,035.20</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                  <span className="text-red-500 text-sm">-0.3% (-$6.10)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>24h Trading Volume</CardDescription>
                <CardTitle className="text-2xl">1,247 oz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <span className="text-blue-500 text-sm">$2.54M USD</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Charts */}
      <section className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <span>Price Trends (7 Days)</span>
              </CardTitle>
              <CardDescription>
                Gold price movement in the East African market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/50 rounded-md">
                <div className="text-center space-y-2">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Interactive price chart</p>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-green-600" />
                <span>Trading Volume</span>
              </CardTitle>
              <CardDescription>
                Daily trading volume and activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/50 rounded-md">
                <div className="text-center space-y-2">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Volume analysis chart</p>
                  <p className="text-sm text-muted-foreground">Coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Market Overview</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Key metrics and insights from the East African gold trading market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-yellow-600" />
                  <span>Market Highlights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Active Suppliers</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Verified Buyers</span>
                    <span className="font-medium">1,156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Purity</span>
                    <span className="font-medium">98.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-medium text-green-600">94.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Regional Prices</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Kinshasa</span>
                    <span className="font-medium">$2,034.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Goma</span>
                    <span className="font-medium">$2,028.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Bukavu</span>
                    <span className="font-medium">$2,031.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Lubumbashi</span>
                    <span className="font-medium">$2,036.90</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span>Today's Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Opening Price</span>
                    <span className="font-medium">$2,021.20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Day High</span>
                    <span className="font-medium text-green-600">$2,048.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Day Low</span>
                    <span className="font-medium text-red-600">$2,019.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Transactions</span>
                    <span className="font-medium">47</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="container max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Market Insights</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Expert analysis and trends shaping the East African gold market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Market Report</CardTitle>
                <CardDescription>January 1-7, 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  The East African gold market showed strong performance this week, with prices rising 
                  2.3% driven by increased international demand and stable supply from verified 
                  Congolese suppliers.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Volume:</span>
                    <span className="font-medium ml-2">+15.7%</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Avg. Trade:</span>
                    <span className="font-medium ml-2">32.4 oz</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Read Full Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price Alerts</CardTitle>
                <CardDescription>Set custom notifications for price movements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-md border border-yellow-200">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Price Alert Active</p>
                    <p className="text-xs text-muted-foreground">
                      Notify when price exceeds $2,050/oz
                    </p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Manage Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="container max-w-6xl">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle>Data Sources & Methodology</CardTitle>
            <CardDescription>
              Transparency in our market data collection and pricing methodology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Primary Sources:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• London Bullion Market Association (LBMA)</li>
                  <li>• Regional trading posts and exchanges</li>
                  <li>• Verified supplier and buyer transactions</li>
                  <li>• International commodities markets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Update Frequency:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Real-time: Platform transactions</li>
                  <li>• Every 5 minutes: International prices</li>
                  <li>• Daily: Market summaries and analysis</li>
                  <li>• Weekly: Comprehensive market reports</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground text-xs">
              All prices are indicative and for informational purposes only. Actual trading prices may vary 
              based on purity, quantity, verification status, and other market factors.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container max-w-4xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Start Trading with Market Intelligence</h2>
        <p className="text-xl text-muted-foreground">
          Use real-time data to make informed trading decisions in the East African gold market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
            Access Live Trading
          </Button>
          <Button variant="outline" size="lg">
            Get Market Alerts
          </Button>
        </div>
      </section>
    </div>
  );
}
