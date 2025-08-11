import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  TrendingUp, 
  Globe,
  Clock,
  ArrowRight,
  BookOpen,
  BarChart3,
  Shield,
  Users
} from "lucide-react";

export const metadata = constructMetadata({
  title: "News & Insights – East African Gold Exchange",
  description: "Latest news, market insights, and industry updates from the East African gold trading market. Stay informed with expert analysis and trends.",
});

export default function NewsPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-yellow-300 text-yellow-800 bg-yellow-50">
            <BookOpen className="h-3 w-3 mr-1" />
            Latest Updates
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            News &{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Stay informed with the latest news, market insights, and industry analysis 
            from the East African gold trading market.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container max-w-6xl">
        <Card className="border-yellow-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge variant="secondary">Featured Article</Badge>
                <h2 className="text-3xl font-bold">
                  East African Gold Market Reaches Record Trading Volume in Q4 2024
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The East African gold market has experienced unprecedented growth, with trading 
                  volumes reaching $52 million in the fourth quarter of 2024. This represents 
                  a 340% increase compared to the same period last year, driven by increased 
                  international demand and improved verification systems.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Market Analysis Team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>January 5, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <Button size="lg">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-24 w-24 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Article Categories */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">Market Analysis</h3>
              <p className="text-sm text-muted-foreground">Latest trends and insights</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold">Regulations</h3>
              <p className="text-sm text-muted-foreground">Compliance updates</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Global News</h3>
              <p className="text-sm text-muted-foreground">International markets</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Platform Updates</h3>
              <p className="text-sm text-muted-foreground">New features & improvements</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="container max-w-6xl">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Recent Articles</h2>
            <Button variant="outline">View All Articles</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Market Analysis</Badge>
                  <span className="text-xs text-muted-foreground">3 days ago</span>
                </div>
                <CardTitle className="text-lg">
                  DRC Gold Production Increases 15% in December 2024
                </CardTitle>
                <CardDescription>
                  Mining output from verified suppliers shows strong growth trends...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>3 min read</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Regulations</Badge>
                  <span className="text-xs text-muted-foreground">5 days ago</span>
                </div>
                <CardTitle className="text-lg">
                  New Compliance Standards for International Gold Trade
                </CardTitle>
                <CardDescription>
                  Updated regulatory requirements affecting cross-border transactions...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Platform Update</Badge>
                  <span className="text-xs text-muted-foreground">1 week ago</span>
                </div>
                <CardTitle className="text-lg">
                  Enhanced Security Features Now Live
                </CardTitle>
                <CardDescription>
                  Multi-signature escrow and advanced verification systems launched...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>2 min read</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Global News</Badge>
                  <span className="text-xs text-muted-foreground">1 week ago</span>
                </div>
                <CardTitle className="text-lg">
                  Gold Prices Reach 3-Month High Amid Economic Uncertainty
                </CardTitle>
                <CardDescription>
                  International markets drive increased demand for precious metals...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Market Analysis</Badge>
                  <span className="text-xs text-muted-foreground">2 weeks ago</span>
                </div>
                <CardTitle className="text-lg">
                  Supplier Network Expansion: 50 New Verified Partners
                </CardTitle>
                <CardDescription>
                  Platform growth continues with new supplier partnerships across East Africa...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>3 min read</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Industry Insight</Badge>
                  <span className="text-xs text-muted-foreground">2 weeks ago</span>
                </div>
                <CardTitle className="text-lg">
                  Sustainable Mining Practices in the Democratic Republic of Congo
                </CardTitle>
                <CardDescription>
                  How ethical mining is transforming the gold industry in Central Africa...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container max-w-4xl">
        <Card className="border-blue-200">
          <CardContent className="p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Get the latest market insights, platform updates, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Weekly updates • Unsubscribe anytime • Privacy protected
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
