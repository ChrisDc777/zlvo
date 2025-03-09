import { AnimatedTabs } from "@/components/ui/animated-tabs";
import Image from "next/image";
import InformaticaText from "@/public/informatica-text.svg"
import { Section } from "@/components/ui/section";

const DataDigitizationFlow = () => {
  return (
    <Section>
    <div className="flex h-screen flex-col items-center justify-center bg-background">
      <h1 className="mb-4 text-4xl font-bold">Data Digitization Flow</h1>
      <div className="flex items-center text-base text-gray-400 mb-4">
        Powered by
        <div className="relative ml-2 h-11 w-28">
          <div className="absolute inset-0 rounded-full bg-blue-200 p-1 shadow-inner">
            <Image src={InformaticaText} alt="Informatica" />
          
          </div>
        </div>
      </div>

      {/* Animated Tabs */}
      <AnimatedTabs />
    </div>
    </Section>
  );
};

export { DataDigitizationFlow };
