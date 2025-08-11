import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Shield, 
  CheckCircle, 
  Globe, 
  Search,
  TrendingUp,
  Award,
  Users,
  FileCheck,
  DollarSign,
  Clock,
  Target
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Gold Buyers – East African Gold Exchange",
  description: "Access verified gold suppliers from East Africa. Secure gold purchasing with transparent pricing, quality guarantees, and compliance assurance.",
});

export default function BuyersPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-blue-300 text-blue-800 bg-blue-50">
            <ShoppingCart className="h-3 w-3 mr-1" />
            Secure Purchasing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Gold{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Buyers
            </span>{" "}
            Portal
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Access premium East African gold from verified suppliers. Enjoy transparent pricing, 
            quality guarantees, and secure transactions in the world's most trusted gold marketplace.
          </p>
        </div>
      </section>

      {/* Buyer Benefits */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Extensive Selection</h3>
              <p className="text-muted-foreground">
                Browse hundreds of verified gold listings from trusted suppliers across 
                East Africa with detailed specifications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every gold listing is verified for purity, origin, and compliance with 
                international standards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Competitive Pricing</h3>
              <p className="text-muted-foreground">
                Access direct supplier pricing without middlemen markups and benefit 
                from market transparency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="container max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Current Gold Opportunities</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Discover available gold listings from our verified supplier network with competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gold Listing 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Premium Congo Gold</CardTitle>
                    <CardDescription>99.5% Pure Gold Bars</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Quantity</span>
                    <p className="font-medium">50 oz</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price/oz</span>
                    <p className="font-medium text-green-600">$2,045</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Origin</span>
                    <p className="font-medium">Kinshasa, DRC</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Delivery</span>
                    <p className="font-medium">5-7 days</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Verified Supplier</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Certified</Badge>
                  <Badge variant="outline" className="text-xs">Insured</Badge>
                  <Badge variant="outline" className="text-xs">Fast Shipping</Badge>
                </div>

                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>

            {/* Gold Listing 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Artisanal Gold Collection</CardTitle>
                    <CardDescription>98.8% Pure Gold Nuggets</CardDescription>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Limited</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Quantity</span>
                    <p className="font-medium">25 oz</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price/oz</span>
                    <p className="font-medium text-green-600">$2,028</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Origin</span>
                    <p className="font-medium">Goma, DRC</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Delivery</span>
                    <p className="font-medium">3-5 days</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Premium Supplier</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Ethical</Badge>
                  <Badge variant="outline" className="text-xs">Unique</Badge>
                </div>

                <Button className="w-full" variant="outline">View Details</Button>
              </CardContent>
            </Card>

            {/* Gold Listing 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Bulk Gold Supply</CardTitle>
                    <CardDescription>99.2% Pure Gold Ingots</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Wholesale</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Quantity</span>
                    <p className="font-medium">200 oz</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price/oz</span>
                    <p className="font-medium text-green-600">$2,038</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Origin</span>
                    <p className="font-medium">Lubumbashi, DRC</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Delivery</span>
                    <p className="font-medium">7-10 days</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">Bulk Certified</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Volume Discount</Badge>
                  <Badge variant="outline" className="text-xs">Licensed</Badge>
                </div>

                <Button className="w-full" variant="outline">View Details</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Browse All Listings
            </Button>
          </div>
        </div>
      </section>

      {/* Purchasing Process */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Secure Purchasing Process</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our streamlined process ensures safe, transparent, and efficient gold purchases from verification to delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Browse & Select</h3>
              <p className="text-sm text-muted-foreground">
                Search verified gold listings with detailed specifications and competitive pricing.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Verify & Negotiate</h3>
              <p className="text-sm text-muted-foreground">
                Review documentation, verify authenticity, and negotiate terms with suppliers.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                Complete payment through our secure escrow system with buyer protection.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Delivery & Confirm</h3>
              <p className="text-sm text-muted-foreground">
                Receive your gold with full documentation and confirm receipt for payment release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Types */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Serving All Types of Buyers</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Whether you're an individual investor or institutional buyer, we have solutions for your gold purchasing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Individual Investors</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Minimum purchase: 1 oz</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Personal vault storage options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Educational resources</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Portfolio tracking tools</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Start Investing
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-600" />
                <span>Small Businesses</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Flexible quantity options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Business account management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Invoicing and documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Competitive business rates</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Business Solutions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-purple-600" />
                <span>Institutional Buyers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Large volume purchases</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Dedicated relationship manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Custom contract terms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Priority access to premium gold</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Institutional Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Buyer Statistics */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Trusted by Buyers Worldwide</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Join thousands of satisfied buyers who trust our platform for their gold purchasing needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600">1,156</div>
            <div className="text-sm text-muted-foreground">Active Buyers</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-green-600">$52M</div>
            <div className="text-sm text-muted-foreground">Gold Purchased</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-yellow-600">96.8%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-purple-600">47</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </div>
      </section>

      {/* Buyer Protections */}
      <section className="container max-w-6xl">
        <Card className="border-blue-200">
          <CardContent className="p-8">
            <div className="text-center space-y-6 mb-8">
              <h3 className="text-2xl font-bold">Buyer Protection Program</h3>
              <p className="text-muted-foreground">
                Comprehensive protection for every gold purchase with multiple layers of security and verification.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <Shield className="h-10 w-10 text-blue-600 mx-auto" />
                <h4 className="font-semibold">Escrow Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Your payment is held securely until you confirm receipt and satisfaction
                </p>
              </div>
              <div className="text-center space-y-3">
                <Award className="h-10 w-10 text-green-600 mx-auto" />
                <h4 className="font-semibold">Quality Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  Independent verification of gold purity and authenticity
                </p>
              </div>
              <div className="text-center space-y-3">
                <Clock className="h-10 w-10 text-purple-600 mx-auto" />
                <h4 className="font-semibold">Delivery Insurance</h4>
                <p className="text-sm text-muted-foreground">
                  Full insurance coverage during shipping and handling
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pricing */}
      <section className="container max-w-4xl">
        <Card className="border-green-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Transparent Buyer Fees</h3>
                <p className="text-muted-foreground">
                  Simple, transparent pricing with no hidden costs. Only pay when you successfully 
                  complete a purchase.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Free browsing and market data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No membership or subscription fees</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Escrow and payment processing included</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">1.5%</div>
                  <div className="text-sm text-muted-foreground">Transaction fee on purchases</div>
                </div>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Buying Gold
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  View Pricing Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container max-w-4xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start Buying Gold?</h2>
        <p className="text-xl text-muted-foreground">
          Join thousands of buyers who trust our platform for secure, transparent gold purchases.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Create Buyer Account
          </Button>
          <Button variant="outline" size="lg">
            Browse Gold Listings
          </Button>
        </div>
      </section>
    </div>
  );
}
