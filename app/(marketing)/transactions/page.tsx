import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Shield, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  FileCheck,
  AlertCircle,
  RefreshCw,
  Lock
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Transaction Center – East African Gold Exchange",
  description: "Secure gold trading transactions with escrow protection, real-time tracking, and compliance monitoring. Trust and transparency in every trade.",
});

export default function TransactionsPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-green-300 text-green-800 bg-green-50">
            <Shield className="h-3 w-3 mr-1" />
            Secure & Transparent
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transaction{" "}
            <span className="text-gradient bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Experience secure, transparent gold trading with our comprehensive transaction management system. 
            Full escrow protection, real-time tracking, and compliance monitoring for every trade.
          </p>
        </div>
      </section>

      {/* Transaction Features */}
      <section className="container max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Escrow Protection</h3>
              <p className="text-muted-foreground">
                Secure escrow services protect both buyers and sellers with funds held safely 
                until transaction completion.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Monitor every step of your transaction from initiation to completion with 
                live status updates and notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Compliance Monitoring</h3>
              <p className="text-muted-foreground">
                Automated compliance checks ensure all transactions meet international 
                regulatory requirements and standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transaction Process */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">How Transactions Work</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our step-by-step process ensures secure, transparent, and efficient gold trading transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold">Initiate Trade</h3>
              <p className="text-sm text-muted-foreground">
                Buyer and seller agree on terms, quantity, and price for the gold transaction.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold">Escrow Deposit</h3>
              <p className="text-sm text-muted-foreground">
                Buyer deposits payment into secure escrow account managed by the platform.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold">Verification</h3>
              <p className="text-sm text-muted-foreground">
                Gold quality and documentation are verified by independent third-party inspectors.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="font-semibold">Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Secure, insured shipping with real-time tracking and delivery confirmation.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 5 */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Completion</h3>
              <p className="text-sm text-muted-foreground">
                Upon delivery confirmation, payment is released to seller and transaction is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="container max-w-6xl">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Recent Transactions</h2>
              <p className="text-muted-foreground">Latest successful trades on the platform</p>
            </div>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          <div className="space-y-4">
            {/* Transaction 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Congo Premium Gold</p>
                        <p className="text-sm text-muted-foreground">99.5% Pure • 50 oz</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Value</p>
                    <p className="font-medium">$102,250</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">Jan 8, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Participants</p>
                    <p className="font-medium">Verified Traders</p>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Artisanal Gold Collection</p>
                        <p className="text-sm text-muted-foreground">98.8% Pure • 25 oz</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Value</p>
                    <p className="font-medium">$50,700</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">Jan 8, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Participants</p>
                    <p className="font-medium">Premium Members</p>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Track Shipment</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction 3 */}
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bulk Gold Supply</p>
                        <p className="text-sm text-muted-foreground">99.2% Pure • 200 oz</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Value</p>
                    <p className="font-medium">$407,600</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className="bg-yellow-100 text-yellow-800">Verification</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">Jan 7, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Participants</p>
                    <p className="font-medium">Institutional Buyers</p>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Monitor Progress</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transaction Statistics */}
      <section className="container max-w-6xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Platform Transaction Overview</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Key metrics showcasing the security and efficiency of our transaction system.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-green-600">3,247</div>
            <div className="text-sm text-muted-foreground">Completed Transactions</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-blue-600">$52.3M</div>
            <div className="text-sm text-muted-foreground">Total Volume Traded</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-purple-600">99.2%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-yellow-600">4.7 days</div>
            <div className="text-sm text-muted-foreground">Avg. Completion Time</div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold">Transaction Security</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Multiple layers of security protect every transaction from initiation to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Lock className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold">Encrypted Communications</h3>
                <p className="text-sm text-muted-foreground">
                  All transaction communications are encrypted end-to-end with military-grade security protocols.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <Shield className="h-12 w-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-semibold">Multi-signature Escrow</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced escrow system requiring multiple approvals for fund release ensuring maximum security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <FileCheck className="h-12 w-12 text-purple-600 mx-auto" />
                <h3 className="text-xl font-semibold">Compliance Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time monitoring ensures all transactions comply with international regulations and standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="container max-w-6xl">
        <Card className="border-blue-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">24/7 Transaction Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated transaction support team is available around the clock to assist 
                  with any questions or issues during your gold trading transactions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Real-time transaction monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dispute resolution services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Technical assistance and guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Compliance and regulatory support</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <Users className="h-16 w-16 text-blue-600 mx-auto" />
                  <p className="font-semibold">Expert Support Team</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for assistance</p>
                </div>
                <Button size="lg" className="w-full">
                  Contact Transaction Support
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  View Help Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container max-w-4xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start Secure Trading?</h2>
        <p className="text-xl text-muted-foreground">
          Experience the most secure and transparent gold trading platform in East Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Start Your First Transaction
          </Button>
          <Button variant="outline" size="lg">
            Learn About Our Process
          </Button>
        </div>
      </section>
    </div>
  );
}
