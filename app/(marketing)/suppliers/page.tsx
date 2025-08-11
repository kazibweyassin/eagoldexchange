import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Shield, 
  CheckCircle, 
  MapPin, 
  Star,
  TrendingUp,
  Award,
  Globe,
  FileCheck,
  DollarSign
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Gold Suppliers – East African Gold Exchange",
  description: "Connect with verified gold suppliers from the Democratic Republic of Congo and East Africa. Access quality gold from trusted, certified suppliers.",
});

export default function SuppliersPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-green-300 text-green-800 bg-green-50">
            <Shield className="h-3 w-3 mr-1" />
            Verified Network
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Trusted Gold{" "}
            <span className="text-gradient bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
              Suppliers
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Connect with verified gold suppliers from the Democratic Republic of Congo and across 
            East Africa. Access quality gold from trusted, certified suppliers with full transparency.
          </p>
        </div>
      </section>

      {/* Supplier Benefits */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Global Market Access</h3>
              <p className="text-muted-foreground">
                Reach international buyers and expand your market beyond local boundaries 
                with our global platform.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Benefit from escrow services, verified payments, and comprehensive 
                transaction protection.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold">Better Pricing</h3>
              <p className="text-muted-foreground">
                Access competitive market prices and eliminate middlemen to maximize 
                your profits.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Suppliers */}
      <section className="container max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Featured Verified Suppliers</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Discover top-rated suppliers with proven track records in the East African gold market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Supplier Card 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>Congo Gold Mining Co.</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>Kinshasa, DRC</span>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">Premium</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                  <div className="text-sm text-muted-foreground">247 transactions</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Avg. Purity</span>
                    <p className="font-medium">99.2%</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Monthly Volume</span>
                    <p className="font-medium">150-200 oz</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Licensed</Badge>
                  <Badge variant="outline" className="text-xs">Certified</Badge>
                  <Badge variant="outline" className="text-xs">ISO Compliant</Badge>
                </div>

                <Button className="w-full">View Profile</Button>
              </CardContent>
            </Card>

            {/* Supplier Card 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>East Africa Precious Metals</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>Goma, DRC</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline">Verified</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                  <div className="text-sm text-muted-foreground">156 transactions</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Avg. Purity</span>
                    <p className="font-medium">98.8%</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Monthly Volume</span>
                    <p className="font-medium">80-120 oz</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Licensed</Badge>
                  <Badge variant="outline" className="text-xs">Ethical Mining</Badge>
                </div>

                <Button className="w-full" variant="outline">View Profile</Button>
              </CardContent>
            </Card>

            {/* Supplier Card 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>Katanga Gold Resources</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>Lubumbashi, DRC</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline">New</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.6</span>
                  </div>
                  <div className="text-sm text-muted-foreground">89 transactions</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Avg. Purity</span>
                    <p className="font-medium">99.0%</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Monthly Volume</span>
                    <p className="font-medium">50-80 oz</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Licensed</Badge>
                  <Badge variant="outline" className="text-xs">Fast Delivery</Badge>
                </div>

                <Button className="w-full" variant="outline">View Profile</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Suppliers
            </Button>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Our Verification Process</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Every supplier goes through rigorous verification to ensure quality, compliance, and trustworthiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Document Review</h3>
              <p className="text-sm text-muted-foreground">
                Verification of business licenses, mining permits, and legal documentation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Quality Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Independent testing and certification of gold quality and purity standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Compliance Check</h3>
              <p className="text-sm text-muted-foreground">
                Verification of regulatory compliance and ethical sourcing practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Final Approval</h3>
              <p className="text-sm text-muted-foreground">
                Platform approval and ongoing monitoring of supplier performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Statistics */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Supplier Network Overview</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Key metrics from our verified supplier community across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-green-600">247</div>
            <div className="text-sm text-muted-foreground">Verified Suppliers</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600">98.7%</div>
            <div className="text-sm text-muted-foreground">Avg. Gold Purity</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-yellow-600">94.2%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-purple-600">4.8</div>
            <div className="text-sm text-muted-foreground">Avg. Rating</div>
          </div>
        </div>
      </section>

      {/* Join as Supplier */}
      <section className="container max-w-6xl">
        <Card className="border-green-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Become a Verified Supplier</h3>
                <p className="text-muted-foreground">
                  Join our network of trusted gold suppliers and access international markets. 
                  Our verification process ensures you meet the highest standards of quality and compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Access to global buyer network</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Marketing and promotion support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Compliance assistance</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">2.5%</div>
                  <div className="text-sm text-muted-foreground">Commission per successful transaction</div>
                </div>
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  Apply as Supplier
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Support */}
      <section className="container max-w-4xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Supplier Support Services</h2>
        <p className="text-xl text-muted-foreground">
          We provide comprehensive support to help our suppliers succeed in the international market.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Users className="h-10 w-10 text-blue-600 mx-auto" />
              <h4 className="font-semibold">Dedicated Account Manager</h4>
              <p className="text-sm text-muted-foreground">
                Personal support for all your trading needs
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <DollarSign className="h-10 w-10 text-green-600 mx-auto" />
              <h4 className="font-semibold">Market Intelligence</h4>
              <p className="text-sm text-muted-foreground">
                Real-time pricing and market trend analysis
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <Shield className="h-10 w-10 text-purple-600 mx-auto" />
              <h4 className="font-semibold">Compliance Assistance</h4>
              <p className="text-sm text-muted-foreground">
                Help with regulatory requirements and documentation
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
