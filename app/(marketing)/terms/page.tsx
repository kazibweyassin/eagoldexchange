import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Users, FileText } from "lucide-react";

export const metadata = constructMetadata({
  title: "Terms of Service – East African Gold Exchange",
  description: "Terms and conditions for using the East African Gold Exchange platform. Review our trading policies, user responsibilities, and service agreements.",
});

export default function TermsPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-4xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-blue-300 text-blue-800 bg-blue-50">
            Legal Agreement
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Terms of{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="container max-w-4xl">
        <Card className="border-amber-200 bg-amber-50/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-amber-900">Important Notice</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  By accessing and using the East African Gold Exchange platform, you agree to be bound by these Terms of Service. 
                  Please read these terms carefully before using our services. If you do not agree to these terms, please do not use our platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Terms Content */}
      <section className="container max-w-4xl space-y-8">
        {/* 1. Platform Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>1. Platform Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              East African Gold Exchange ("the Platform", "we", "us", or "our") is a digital marketplace that connects 
              gold suppliers, primarily from the Democratic Republic of Congo and East Africa, with international buyers. 
              Our platform facilitates secure, transparent, and compliant gold trading transactions.
            </p>
            <p>
              The Platform provides tools for listing gold products, submitting purchase requests, conducting verified 
              transactions, and accessing market intelligence. All users must comply with applicable laws and regulations 
              in their respective jurisdictions.
            </p>
          </CardContent>
        </Card>

        {/* 2. User Eligibility */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600" />
              <span>2. User Eligibility and Account Requirements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Eligibility Criteria:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Must be at least 18 years old or the legal age of majority in your jurisdiction</li>
              <li>Must have legal capacity to enter into binding agreements</li>
              <li>Must not be prohibited from using the platform under applicable laws</li>
              <li>Business entities must be legally registered and in good standing</li>
            </ul>
            
            <h4 className="font-semibold mt-6">Account Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Trading Rules */}
        <Card>
          <CardHeader>
            <CardTitle>3. Trading Rules and Conduct</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Supplier Obligations:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate descriptions of gold products including purity, weight, and origin</li>
              <li>Maintain valid licenses and certifications for gold trading</li>
              <li>Comply with all applicable mining and export regulations</li>
              <li>Submit to verification processes as required by the platform</li>
            </ul>

            <h4 className="font-semibold mt-6">Buyer Obligations:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide proof of funds and legal capacity to purchase gold</li>
              <li>Comply with import regulations in their jurisdiction</li>
              <li>Complete due diligence on suppliers and products</li>
              <li>Honor committed purchase agreements</li>
            </ul>

            <h4 className="font-semibold mt-6">Prohibited Activities:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Trading in conflict minerals or illegally sourced gold</li>
              <li>Fraudulent misrepresentation of products or credentials</li>
              <li>Manipulation of market prices or trading volumes</li>
              <li>Circumventing platform fees or security measures</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Fees and Payments */}
        <Card>
          <CardHeader>
            <CardTitle>4. Fees and Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Transaction Fees:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Suppliers: 2.5% commission on successful transactions</li>
              <li>Buyers: 1.5% transaction fee on purchases</li>
              <li>Premium memberships available with reduced fees</li>
            </ul>

            <h4 className="font-semibold mt-6">Payment Processing:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>All payments processed through secure, verified channels</li>
              <li>Escrow services available for large transactions</li>
              <li>Payment terms subject to verification and compliance checks</li>
              <li>Refunds processed according to our refund policy</li>
            </ul>
          </CardContent>
        </Card>

        {/* 5. Verification and Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>5. Verification and Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              All users must undergo identity verification and comply with Know Your Customer (KYC) and 
              Anti-Money Laundering (AML) requirements. We reserve the right to request additional 
              documentation and suspend accounts pending verification.
            </p>

            <h4 className="font-semibold mt-4">Required Documentation:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Government-issued identification</li>
              <li>Business registration documents (for entities)</li>
              <li>Mining licenses and permits (for suppliers)</li>
              <li>Import/export licenses (as applicable)</li>
              <li>Financial statements and bank references</li>
            </ul>
          </CardContent>
        </Card>

        {/* 6. Platform Rights */}
        <Card>
          <CardHeader>
            <CardTitle>6. Platform Rights and Limitations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Our Rights:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or discontinue services with reasonable notice</li>
              <li>Suspend or terminate accounts for violations of these terms</li>
              <li>Monitor transactions for compliance and security</li>
              <li>Update fees and terms with advance notice</li>
            </ul>

            <h4 className="font-semibold mt-6">Liability Limitations:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Platform acts as intermediary; not party to transactions</li>
              <li>Users responsible for due diligence on counterparties</li>
              <li>Platform not liable for acts or omissions of users</li>
              <li>Maximum liability limited to fees paid to the platform</li>
            </ul>
          </CardContent>
        </Card>

        {/* 7. Data and Privacy */}
        <Card>
          <CardHeader>
            <CardTitle>7. Data Protection and Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Your privacy is important to us. Our collection, use, and protection of your personal data 
              is governed by our Privacy Policy, which forms part of these terms. By using the platform, 
              you consent to the processing of your data as described in our Privacy Policy.
            </p>
            <p>
              We implement industry-standard security measures to protect your data and transactions. 
              However, no system is completely secure, and you acknowledge the inherent risks of 
              internet-based services.
            </p>
          </CardContent>
        </Card>

        {/* 8. Dispute Resolution */}
        <Card>
          <CardHeader>
            <CardTitle>8. Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Internal Resolution:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Platform provides mediation services for transaction disputes</li>
              <li>Users must first attempt resolution through platform tools</li>
              <li>Escalation to external arbitration available for unresolved disputes</li>
            </ul>

            <h4 className="font-semibold mt-6">Governing Law:</h4>
            <p>
              These terms are governed by the laws of Kenya. Any disputes not resolved through 
              arbitration shall be subject to the exclusive jurisdiction of Kenyan courts.
            </p>
          </CardContent>
        </Card>

        {/* 9. Termination */}
        <Card>
          <CardHeader>
            <CardTitle>9. Account Termination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Either party may terminate the user agreement at any time. Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to the platform will be suspended</li>
              <li>Pending transactions will be completed according to their terms</li>
              <li>Data retention will follow our Privacy Policy</li>
              <li>Outstanding fees remain payable</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>Questions About These Terms?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              If you have questions about these Terms of Service, please contact our legal team:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> legal@eagoldexchange.com</li>
              <li><strong>Address:</strong> East African Gold Exchange, Legal Department, Nairobi, Kenya</li>
              <li><strong>Phone:</strong> +254 (0) 700 123 456</li>
            </ul>
            <p className="text-muted-foreground">
              These terms were last updated on January 1, 2024. We will notify users of any material changes.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
