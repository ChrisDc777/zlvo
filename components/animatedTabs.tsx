import { AnimatedTabs } from "@/components/ui/animated-tabs";
import Image from "next/image";

const AnimatedTabsDemo = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background">
      <h1 className="mb-4 text-4xl font-bold">Data Digitization Flow</h1>
      <div className="flex items-center text-base text-gray-400 mb-4">
        Powered by
        <div className="relative ml-2 h-8 w-24">
          <div className="absolute inset-0 rounded-full bg-blue-200 p-1 shadow-inner">
            <Image
              src="/informatica.svg"
              alt="Informatica Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Animated Tabs */}
      <AnimatedTabs />
    </div>
  );
};

export { AnimatedTabsDemo };
