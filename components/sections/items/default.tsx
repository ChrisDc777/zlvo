import {
  HeartIcon,
  MicIcon,
  MessageSquareIcon,
  UserIcon,
  CalendarIcon,
  ShieldIcon,
  ActivityIcon,
  CloudIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 sm:gap-10">
        <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-400">
          Everything you need to transform your handwritten data.
        </p>
        <div className="min-h-screen w-full">
          {/* <div className="absolute top-0 left-0 w-full"> */}
          <FeaturesSectionWithHoverEffects />
          {/* </div> */}
        </div>
      </div>
    </Section>
  );
}
