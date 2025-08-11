import { constructMetadata } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Users, TrendingUp, Award, Heart } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Us – East African Gold Exchange",
  description: "Learn about our mission to revolutionize gold trading in East Africa. Connecting Congolese suppliers with international buyers through trusted, transparent transactions.",
});

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-yellow-300 text-yellow-800 bg-yellow-50">
            Est. 2024
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transforming Gold Trade in{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              East Africa
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            We bridge the gap between Congolese gold suppliers and international buyers, 
            creating a trusted platform for transparent, secure, and efficient gold trading 
            across East Africa.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-yellow-200">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-yellow-600" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower East African gold suppliers, particularly in the Democratic Republic 
                of Congo, by providing them with direct access to international markets through 
                a secure, transparent, and efficient trading platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading digital marketplace for precious metals in Africa, 
                fostering economic growth, promoting fair trade practices, and building 
                lasting partnerships between African suppliers and global buyers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            These principles guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Trust & Security</h3>
            <p className="text-muted-foreground">
              Every transaction is secured with advanced verification, escrow services, 
              and compliance monitoring to ensure safe trading.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Global Connectivity</h3>
            <p className="text-muted-foreground">
              Connecting local suppliers with international markets, breaking down 
              barriers and creating opportunities worldwide.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold">Community First</h3>
            <p className="text-muted-foreground">
              Supporting local communities through fair pricing, capacity building, 
              and sustainable business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Why Choose East African Gold Exchange</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We offer unique advantages that make us the preferred platform for gold trading in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Award className="h-10 w-10 text-yellow-600 mx-auto" />
                <h4 className="font-semibold">Verified Suppliers</h4>
                <p className="text-sm text-muted-foreground">
                  All suppliers undergo rigorous verification and quality certification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <TrendingUp className="h-10 w-10 text-green-600 mx-auto" />
                <h4 className="font-semibold">Real-time Pricing</h4>
                <p className="text-sm text-muted-foreground">
                  Live market data and transparent pricing based on international standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Shield className="h-10 w-10 text-blue-600 mx-auto" />
                <h4 className="font-semibold">Secure Transactions</h4>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security with escrow services and compliance monitoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-3">
                <Globe className="h-10 w-10 text-purple-600 mx-auto" />
                <h4 className="font-semibold">Global Reach</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with buyers and suppliers from around the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Platform Impact</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Numbers that reflect our commitment to transforming the gold trading landscape.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-yellow-600">500+</div>
            <div className="text-sm text-muted-foreground">Verified Suppliers</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-green-600">1,200+</div>
            <div className="text-sm text-muted-foreground">International Buyers</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600">$50M+</div>
            <div className="text-sm text-muted-foreground">Trade Volume</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-purple-600">25+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Leadership Team</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Experienced professionals dedicated to transforming the African gold trade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">James Mwangi</h3>
                  <p className="text-muted-foreground text-sm">Chief Executive Officer</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  15+ years in African commodities trading and financial services. Former VP at 
                  Continental Gold Trading.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Marie Kabila</h3>
                  <p className="text-muted-foreground text-sm">Chief Operating Officer</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert in DRC mining regulations and compliance. Former advisor to the 
                  Ministry of Mines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Robert Chen</h3>
                  <p className="text-muted-foreground text-sm">Chief Technology Officer</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Blockchain and fintech specialist. Previously led trading platforms at 
                  Goldman Sachs Asia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Our Journey</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            From vision to reality - building Africa's most trusted gold trading platform.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="outline" className="border-blue-300 text-blue-800">2023</Badge>
              <h3 className="text-2xl font-bold">Foundation & Vision</h3>
              <p className="text-muted-foreground">
                Founded by a team of African trade experts and international fintech specialists 
                with the vision to democratize gold trading in East Africa.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">$2M</div>
                  <div className="text-sm text-muted-foreground">Seed Funding Raised</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-muted-foreground">Initial Supplier Partners</div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Badge variant="outline" className="border-green-300 text-green-800">2024</Badge>
              <h3 className="text-2xl font-bold">Platform Launch</h3>
              <p className="text-muted-foreground">
                Launched our MVP with core trading features, verification systems, and 
                partnerships with key suppliers across the Democratic Republic of Congo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="outline" className="border-purple-300 text-purple-800">Present</Badge>
              <h3 className="text-2xl font-bold">Scaling & Growth</h3>
              <p className="text-muted-foreground">
                Rapid expansion with advanced features, international buyer network growth, 
                and comprehensive compliance systems for global trade.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-muted-foreground">Countries Reached</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container max-w-4xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start Trading?</h2>
        <p className="text-xl text-muted-foreground">
          Join thousands of suppliers and buyers who trust our platform for their gold trading needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/register"
            className="inline-flex items-center justify-center rounded-md bg-yellow-600 px-8 py-3 text-sm font-medium text-white hover:bg-yellow-700 transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
