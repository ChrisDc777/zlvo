import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does the AI chatbot assist with health inquiries?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Our AI chatbot is designed to provide real-time responses to
                health-related questions. It can offer general advice, suggest
                lifestyle changes, help with symptom checking, and more, based on
                trusted medical data.
              </p>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                It’s a reliable resource for gaining initial insights into your
                health concerns, though it’s not a substitute for professional
                medical advice.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is the health information provided by the chatbot accurate?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                The AI chatbot uses data from reputable sources like medical
                journals, trusted healthcare websites, and expert-reviewed content
                to ensure the accuracy of the information provided.
              </p>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                However, since medical information can evolve rapidly, we always
                encourage users to follow up with healthcare professionals for
                any critical or urgent matters.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I use the AI chatbot to diagnose medical conditions?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                The chatbot is not intended to provide definitive diagnoses. It
                can assist with identifying potential symptoms, explain common
                conditions, and offer general recommendations, but it cannot
                replace professional consultations or medical tests.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                For accurate diagnosis and personalized treatment, always
                consult a healthcare professional.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is my personal health data shared with third parties?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                No, your health data is kept private and confidential. The AI
                chatbot does not collect personal health information unless
                explicitly provided by you, and even then, it is used solely for
                the purpose of improving your experience.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                For more details on data privacy, please refer to our{" "}
                <Link href="/privacy-policy" className="text-primary underline">
                  privacy policy
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can the AI chatbot recommend treatments or medications?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                The AI chatbot can provide general advice on over-the-counter
                treatments or lifestyle changes that are widely accepted, but it
                does not have the capability to prescribe medications or specific
                treatments.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Any medical treatments or medications should be discussed with
                your healthcare provider for a tailored approach to your health.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              How do I report a problem or bug with the AI chatbot?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                If you encounter an issue with the chatbot, we encourage you to
                reach out to our support team. You can submit a report through
                our{" "}
                <Link href="/support" className="text-primary underline">
                  support page
                </Link>
                .
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                We greatly appreciate user feedback to improve the chatbot's
                performance and ensure it meets your health needs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
