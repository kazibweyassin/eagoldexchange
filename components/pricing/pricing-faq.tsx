import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "Is there a cost to browse gold listings?",
    answer:
      "Browsing gold listings and market data is completely free. You can view live prices, supplier listings, and market intelligence without any charges.",
  },
  {
    id: "item-2",
    question: "What are the trading fees for suppliers?",
    answer:
      "Suppliers pay a 2.5% commission on successful transactions. This includes listing management, buyer connection services, and secure payment processing.",
  },
  {
    id: "item-3",
    question: "How much do buyers pay for transactions?",
    answer:
      "Buyers pay a 1.5% transaction fee on purchases. This covers verification services, secure escrow, and quality assurance for all gold transactions.",
  },
  {
    id: "item-4",
    question: "Do you offer premium memberships?",
    answer:
      "Yes, we offer Premium memberships for $99/month (suppliers) and $49/month (buyers) with reduced fees, priority support, and advanced market analytics.",
  },
  {
    id: "item-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, letter of credit (LC), escrow services, and verified digital payments. All transactions are secured and monitored for compliance.",
  },
  {
    id: "item-6",
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. All costs are transparent upfront. Additional services like expedited verification or premium logistics partnerships have clearly stated optional fees.",
  },
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <HeaderSection
        label="Trading FAQ"
        title="Frequently Asked Questions"
        subtitle="Learn about our transparent pricing, trading fees, and membership options. 
          For specific inquiries about large volume transactions or custom solutions, 
          contact our trading specialists."
      />

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
