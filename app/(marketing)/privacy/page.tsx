import { constructMetadata } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Database, Users, FileText } from "lucide-react";

export const metadata = constructMetadata({
  title: "Privacy Policy – East African Gold Exchange",
  description: "Learn how East African Gold Exchange protects your privacy and handles your personal data. Our commitment to data security and transparency.",
});

export default function PrivacyPage() {
  return (
    <div className="flex w-full flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container max-w-4xl">
        <div className="text-center space-y-6">
          <Badge variant="outline" className="border-green-300 text-green-800 bg-green-50">
            Data Protection
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Privacy{" "}
            <span className="text-gradient bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="container max-w-4xl">
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-green-900">Our Privacy Commitment</h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  East African Gold Exchange is committed to protecting your privacy and ensuring the security of your personal 
                  information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our 
                  gold trading platform.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Privacy Content */}
      <section className="container max-w-4xl space-y-8">
        {/* 1. Information We Collect */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-blue-600" />
              <span>1. Information We Collect</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Personal Information:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, phone number, and postal address</li>
              <li>Government-issued identification documents</li>
              <li>Business registration and licensing information</li>
              <li>Financial information including bank account details</li>
              <li>Professional qualifications and certifications</li>
            </ul>
            
            <h4 className="font-semibold mt-6">Trading Information:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Gold listings, purchase requests, and transaction history</li>
              <li>Communication records with other platform users</li>
              <li>Verification documents and compliance records</li>
              <li>Market preferences and trading patterns</li>
            </ul>

            <h4 className="font-semibold mt-6">Technical Information:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address, browser type, and device information</li>
              <li>Platform usage data and interaction patterns</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location data (with your consent)</li>
            </ul>
          </CardContent>
        </Card>

        {/* 2. How We Use Your Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-purple-600" />
              <span>2. How We Use Your Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Platform Operations:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Create and manage your account</li>
              <li>Process trading transactions and payments</li>
              <li>Verify identity and conduct compliance checks</li>
              <li>Provide customer support and technical assistance</li>
            </ul>

            <h4 className="font-semibold mt-6">Communication:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Send transaction confirmations and updates</li>
              <li>Provide market intelligence and platform news</li>
              <li>Notify you of policy changes or security issues</li>
              <li>Respond to inquiries and support requests</li>
            </ul>

            <h4 className="font-semibold mt-6">Legal and Compliance:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Comply with KYC and AML regulations</li>
              <li>Prevent fraud and unauthorized access</li>
              <li>Respond to legal requests and regulatory requirements</li>
              <li>Enforce our Terms of Service</li>
            </ul>

            <h4 className="font-semibold mt-6">Platform Improvement:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Analyze usage patterns to improve services</li>
              <li>Develop new features and functionality</li>
              <li>Conduct research and market analysis</li>
              <li>Personalize your platform experience</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Information Sharing */}
        <Card>
          <CardHeader>
            <CardTitle>3. When We Share Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h4 className="font-semibold mt-4">With Other Users:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Basic business information for trading purposes</li>
              <li>Verification status and trust scores</li>
              <li>Transaction history (anonymized when possible)</li>
            </ul>

            <h4 className="font-semibold mt-6">With Service Providers:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Payment processors and financial institutions</li>
              <li>Identity verification and compliance services</li>
              <li>Cloud hosting and data storage providers</li>
              <li>Customer support and communication tools</li>
            </ul>

            <h4 className="font-semibold mt-6">Legal Requirements:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Response to lawful requests from authorities</li>
              <li>Compliance with court orders and legal processes</li>
              <li>Protection of our rights and those of our users</li>
              <li>Prevention of fraud or illegal activities</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Data Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-red-600" />
              <span>4. Data Security and Protection</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Security Measures:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>256-bit SSL encryption for all data transmission</li>
              <li>Multi-factor authentication for account access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Secure data centers with physical access controls</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h4 className="font-semibold mt-6">Data Retention:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal data retained only as long as necessary</li>
              <li>Transaction records kept for regulatory compliance (7 years)</li>
              <li>Account data deleted within 30 days of account closure</li>
              <li>Anonymized data may be retained for research purposes</li>
            </ul>
          </CardContent>
        </Card>

        {/* 5. Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-orange-600" />
              <span>5. Your Privacy Rights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>You have the following rights regarding your personal data:</p>

            <h4 className="font-semibold mt-4">Access and Portability:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to your personal data</li>
              <li>Receive a copy of your data in portable format</li>
              <li>View data processing activities affecting you</li>
            </ul>

            <h4 className="font-semibold mt-6">Control and Correction:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of personal data (subject to legal requirements)</li>
              <li>Opt-out of non-essential communications</li>
              <li>Restrict processing for specific purposes</li>
            </ul>

            <h4 className="font-semibold mt-6">Exercising Your Rights:</h4>
            <p>
              To exercise these rights, contact us at privacy@eagoldexchange.com. We will respond 
              within 30 days and may require identity verification.
            </p>
          </CardContent>
        </Card>

        {/* 6. Cookies and Tracking */}
        <Card>
          <CardHeader>
            <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <h4 className="font-semibold">Types of Cookies:</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
              <li><strong>Performance Cookies:</strong> Help us improve the platform</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences</li>
              <li><strong>Analytics Cookies:</strong> Understand how you use the platform</li>
            </ul>

            <h4 className="font-semibold mt-6">Managing Cookies:</h4>
            <p>
              You can control cookies through your browser settings. However, disabling essential 
              cookies may affect platform functionality. We also use similar technologies like 
              web beacons and local storage for platform operations.
            </p>
          </CardContent>
        </Card>

        {/* 7. International Transfers */}
        <Card>
          <CardHeader>
            <CardTitle>7. International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              As a platform serving international markets, your data may be transferred to and 
              processed in countries other than your own. We ensure adequate protection through:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Standard contractual clauses with service providers</li>
              <li>Adequacy decisions for certain jurisdictions</li>
              <li>Your explicit consent where required</li>
              <li>Necessary transfers for contract performance</li>
            </ul>
          </CardContent>
        </Card>

        {/* 8. Children's Privacy */}
        <Card>
          <CardHeader>
            <CardTitle>8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Our platform is not intended for individuals under 18 years of age. We do not 
              knowingly collect personal information from children. If we become aware that 
              we have collected data from a child, we will take steps to delete it promptly.
            </p>
          </CardContent>
        </Card>

        {/* 9. Changes to Privacy Policy */}
        <Card>
          <CardHeader>
            <CardTitle>9. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              material changes through email or platform notifications. Continued use of 
              the platform after changes become effective constitutes acceptance of the 
              updated policy.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-green-600" />
              <span>Contact Our Privacy Team</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              If you have questions about this Privacy Policy or our data practices:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> privacy@eagoldexchange.com</li>
              <li><strong>Address:</strong> East African Gold Exchange, Privacy Officer, Nairobi, Kenya</li>
              <li><strong>Phone:</strong> +254 (0) 700 123 456</li>
            </ul>
            <p className="text-muted-foreground">
              For EU residents, you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
