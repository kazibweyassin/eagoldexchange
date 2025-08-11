import { constructMetadata } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  HeadphonesIcon,
  Globe,
  Users,
  Shield,
  TrendingUp
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact Us – East African Gold Exchange",
  description: "Get in touch with our team of gold trading experts. We're here to help you navigate the East African gold market with confidence and success.",
});

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-yellow-300 text-yellow-800 bg-yellow-50">
            24/7 Support Available
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Get in{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Whether you're a supplier looking to reach international markets or a buyer 
            seeking quality East African gold, our expert team is here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+256 704 833 021" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userType">I am a</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="supplier">Gold Supplier</SelectItem>
                      <SelectItem value="buyer">Gold Buyer</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="partner">Potential Partner</SelectItem>
                      <SelectItem value="journalist">Media/Journalist</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="trading">Trading Questions</SelectItem>
                      <SelectItem value="verification">Supplier Verification</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="compliance">Compliance & Regulations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about how we can help you..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our team of experts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">info@eagoldexchange.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+256 704 833 021</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 8AM-6PM EAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Office</h4>
                    <p className="text-muted-foreground">Kampala, Uganda</p>
                    <p className="text-sm text-muted-foreground">Regional headquarters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HeadphonesIcon className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 Trading Support</h4>
                    <p className="text-muted-foreground">+256 704 833 021</p>
                    <p className="text-sm text-muted-foreground">Emergency trading assistance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trading Platform</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="h-4 w-4 mr-2" />
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Join Our Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">How Can We Help You?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our specialized teams are ready to assist you with any questions or challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold">Trading Support</h3>
                <p className="text-muted-foreground">
                  Get help with trading processes, market analysis, and transaction support.
                </p>
                <Button variant="outline" size="sm">
                  Contact Trading Team
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Verification Services</h3>
                <p className="text-muted-foreground">
                  Assistance with supplier verification, compliance, and certification processes.
                </p>
                <Button variant="outline" size="sm">
                  Verification Help
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Business Development</h3>
                <p className="text-muted-foreground">
                  Partnership opportunities, market expansion, and business growth strategies.
                </p>
                <Button variant="outline" size="sm">
                  Business Inquiries
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Quick answers to common questions about our platform and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How do I become a verified supplier?</h4>
              <p className="text-muted-foreground text-sm">
                Submit your application with required documentation. Our verification team will 
                review and guide you through the process within 3-5 business days.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">What are the trading fees?</h4>
              <p className="text-muted-foreground text-sm">
                Our transparent fee structure includes a small percentage per transaction. 
                Contact us for detailed pricing information based on your trading volume.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Is the platform secure?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, we use bank-grade security, escrow services, and compliance monitoring 
                to ensure all transactions are safe and secure.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">How long do transactions take?</h4>
              <p className="text-muted-foreground text-sm">
                Standard transactions typically complete within 2-5 business days, depending 
                on verification requirements and payment methods.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Do you provide market analysis?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, we provide real-time market data, trend analysis, and expert insights 
                to help you make informed trading decisions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">What regions do you serve?</h4>
              <p className="text-muted-foreground text-sm">
                We primarily serve East Africa with focus on the Democratic Republic of Congo, 
                connecting to international buyers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-4xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground">
          Join our platform today and experience the future of gold trading in East Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
            Create Account
          </Button>
          <Button variant="outline" size="lg">
            Schedule a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}
