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
import { TrueFocusComponent } from "@/components/TrueFocusComponent";

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
        <TrueFocusComponent/>
        {/* <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <UserIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Easy Image Upload
            </ItemTitle>
            <ItemDescription>Upload images of your handwritten records</ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MicIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Automated Table Conversion
            </ItemTitle>
            <ItemDescription>
              AI-powered OCR and NLP to convert images to digital tables.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <HeartIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Data Validation
            </ItemTitle>
            <ItemDescription>
              Ensure accuracy with automated data quality checks.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MessageSquareIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Seamless Integration
            </ItemTitle>
            <ItemDescription>
              Integrate with databases like Snowflake for easy analysis
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <CalendarIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Scheduled Processing
            </ItemTitle>
            <ItemDescription>
              Automate data extraction on a schedule.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ShieldIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Data Security
              </ItemTitle>

            <ItemDescription>
              Secure data storage and access controls
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ActivityIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Customizable Workflows
            </ItemTitle>
            <ItemDescription>
              Tailor the process to your specific needs
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <CloudIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Cloud-Based Access
            </ItemTitle>
            <ItemDescription>
              Access your digitized data from anywhere.
            </ItemDescription>
          </Item>
        </div> */}
      </div>
    </Section>
  );
}
