"use client";

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconWand,
  IconClipboardCheck,
  IconDatabaseImport,
  IconMessageDots,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for businesses",
      description: "Designed for companies that handle large data.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of Use",
      description: "Simple interface for easy data conversion.",
      icon: <IconEaseInOut />,
    },
    // {
    //   title: "Transparent Pricing",
    //   description: "Clear and predictable pricing plans.",
    //   icon: <IconCurrencyDollar />,
    // },
    {
      title: "Secure Data Storage",
      description: "Your data is safe with us.",
      icon: <IconCloud />,
    },
    // {
    //   title: "Seamless Integrations",
    //   description: "Integrate with your favorite databases and tools.",
    //   icon: <IconRouteAltLeft />,
    // },
    // {
    //   title: "Dedicated Support",
    //   description: "We're here to help you every step of the way.",
    //   icon: <IconHelp />,
    // },
    // {
    //   title: "Custom Solutions",
    //   description: "We can tailor our solutions to your specific needs.",
    //   icon: <IconAdjustmentsBolt />,
    // },
    {
      title: "Constantly improving",
      description: "We're always working to make our service better.",
      icon: <IconHeart />,
    },
    {
      title: "Data Cleaning",
      description: "Clean and transform your data with ease.",
      icon: <IconWand />,
    },
    {
      title: "Data Profiling & Quality",
      description: "Ensure data accuracy and consistency.",
      icon: <IconClipboardCheck />,
    },
    {
      title: "Snowflake Ingestion & Replication",
      description: "Seamlessly ingest and replicate data in Snowflake.",
      icon: <IconDatabaseImport />,
    },
    {
      title: "Chat with Salesforce Data",
      description: "Interact with your Salesforce data through chat.",
      icon: <IconMessageDots />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature",
        "border-neutral-800",
        (index === 0 || index % 4 === 0) && "lg:border-l border-neutral-800",
        index < 8 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
