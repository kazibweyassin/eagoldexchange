import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  BookOpen, 
  MessageSquare, 
  Phone,
  Mail,
  FileText,
  Users,
  Shield,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronRight,
  Clock
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Help Center – East African Gold Exchange",
  description: "Get help with gold trading, account management, and platform features. Comprehensive guides, FAQs, and support resources.",
});

export default function SupportPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-blue-300 text-blue-800 bg-blue-50">
            <HelpCircle className="h-3 w-3 mr-1" />
            24/7 Support
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Help{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Find answers to your questions about gold trading, account management, and platform features. 
            Our comprehensive help center is here to support your trading journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for help topics, guides, or FAQs..." 
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Getting Started</h3>
              <p className="text-muted-foreground text-sm">
                Learn the basics of trading gold on our platform
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Guides
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Account & Security</h3>
              <p className="text-muted-foreground text-sm">
                Manage your account settings and security features
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold">Payments & Fees</h3>
              <p className="text-muted-foreground text-sm">
                Understand pricing, payment methods, and transactions
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Trading Help</h3>
              <p className="text-muted-foreground text-sm">
                Get help with buying, selling, and trading gold
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Trading Tips
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="container max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Popular Help Articles</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Most frequently accessed guides and solutions to common questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span>How to Get Started Trading</span>
                </CardTitle>
                <CardDescription>
                  Complete guide to setting up your account and making your first trade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Account registration and verification</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Setting up payment methods</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Making your first gold purchase</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Understanding market data</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span>Security & Verification</span>
                </CardTitle>
                <CardDescription>
                  Learn about our security measures and verification processes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Two-factor authentication setup</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Identity verification process</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Secure trading practices</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-between py-2 hover:bg-muted/50 px-3 rounded cursor-pointer">
                    <span className="text-sm">Account security tips</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Quick answers to the most common questions about our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">How do I become a verified supplier?</h4>
                  <p className="text-sm text-muted-foreground">
                    Submit your application with required documentation including business licenses, 
                    mining permits, and quality certifications. Our team will review within 3-5 business days.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">What are the trading fees?</h4>
                  <p className="text-sm text-muted-foreground">
                    Suppliers pay 2.5% commission on successful transactions, buyers pay 1.5% transaction fee. 
                    Premium memberships offer reduced rates and additional benefits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">How secure are the transactions?</h4>
                  <p className="text-sm text-muted-foreground">
                    We use bank-grade security, escrow services, and multi-signature wallets. 
                    All transactions are monitored for compliance and fraud protection.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">How long do transactions take?</h4>
                  <p className="text-sm text-muted-foreground">
                    Standard transactions complete within 2-5 business days including verification, 
                    payment processing, and shipping. Large volume orders may take longer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Do you provide market analysis?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we provide real-time market data, price trends, trading volume analysis, 
                    and expert market insights to help inform your trading decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">What regions do you serve?</h4>
                  <p className="text-sm text-muted-foreground">
                    We primarily serve East Africa with focus on DRC, connecting to international 
                    buyers in 25+ countries worldwide through our global network.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Still Need Help?</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Our support team is available 24/7 to help you with any questions or issues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Live Chat</h3>
              <p className="text-muted-foreground text-sm">
                Get instant help from our support team
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Available now</span>
              </div>
              <Button className="w-full">Start Chat</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Email Support</h3>
              <p className="text-muted-foreground text-sm">
                Send us a detailed message about your issue
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Response within 2-4 hours</span>
              </div>
              <Button variant="outline" className="w-full">Send Email</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Phone Support</h3>
              <p className="text-muted-foreground text-sm">
                Speak directly with our experts
              </p>
              <div className="text-sm text-muted-foreground">
                <p>+254 (0) 700 123 456</p>
                <p>Mon-Fri, 8AM-6PM EAT</p>
              </div>
              <Button variant="outline" className="w-full">Call Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="container max-w-4xl">
        <Card className="border-blue-200">
          <CardContent className="p-8 text-center space-y-6">
            <BookOpen className="h-16 w-16 text-blue-600 mx-auto" />
            <h3 className="text-2xl font-bold">Comprehensive Knowledge Base</h3>
            <p className="text-muted-foreground">
              Access our complete library of guides, tutorials, and documentation to become 
              an expert gold trader on our platform.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Button size="lg" className="w-full">
                Browse All Articles
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Download Trading Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
