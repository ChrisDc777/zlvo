"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Dig1 from "@/public/digitization/DigitizationV1.png";
import Dig2 from "@/public/digitization/DigitizationV2.png";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  dummy?: boolean;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    content: (
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* <h3 className="text-lg font-semibold text-gray-300 mb-4">Dig1</h3> */}
        <Image
          src={Dig1}
          alt="Digitization V1"
          className="h-auto object-contain rounded-md"
        />
      </div>
    ),
  },
  {
    id: "retail",
    label: "Retail",
    content: (
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* <h3 className="text-lg font-semibold text-gray-300 mb-4">Dig2</h3> */}
        <Image
          src={Dig2}
          alt="Digitization V2"
          className="h-auto object-contain rounded-md"
        />
      </div>
    ),
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    content: (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">
          E-commerce Data Flow
        </h3>
        <div className="flex w-full justify-between">
          {
            /* Transcripts Section */
          }
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">Transcripts</span>
            <img
              src="URL_TO_ECOMMERCE_TRANSCRIPT_IMAGE"
              alt="E-commerce Transcripts"
              className="h-48 object-contain rounded-md"
            />
          </div>

          {
            /* CSV Data Section */
          }
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">CSV Data</span>
            <img
              src="URL_TO_ECOMMERCE_CSV_IMAGE"
              alt="E-commerce CSV Data"
              className="h-48 object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    ),
    disabled: true,
    dummy: true,
  },
  {
    id: "banking",
    label: "Banking & Finance",
    content: <></>,
    dummy: true,
  },
  {
    id: "education",
    label: "Education",
    content: <></>,
    dummy: true,
  },
  {
    id: "energy",
    label: "Energy & Utilities",
    content: <></>,
    dummy: true,
  },
  {
    id: "insurance",
    label: "Insurance",
    content: <></>,
    dummy: true,
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    const tab = tabs.find((t) => t.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
    }
  };

  if (!tabs?.length) return null;

  return (
    <div
      className={cn(
        "w-full max-w-screen-xl flex flex-col gap-y-4",
        className
      )}
    >
      <div className="flex justify-center items-center bg-gradient-to-br from-gray-800 to-black bg-opacity-70 backdrop-blur-md p-2 rounded-xl shadow-md">
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) =>
            tab.dummy ? (
              // Render dummy tab
              <div
                key={tab.id}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg text-gray-300 bg-gray-800 bg-opacity-50 cursor-not-allowed",
                  "opacity-50"
                )}
              >
                <span className="relative z-10">{tab.label}</span>
              </div>
            ) : (
              // Render interactive tab
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                disabled={tab.disabled}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg text-gray-200 outline-none transition-colors hover:bg-gray-700",
                  tab.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gray-600 bg-opacity-50 shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-sm !rounded-lg"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          )}
        </div>
      </div>

      <div
        className="p-5 bg-gradient-to-br from-black to-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.3)] text-gray-300 bg-opacity-80 backdrop-blur-md rounded-xl border border-gray-700 min-h-60 h-full hover:bg-opacity-90 transition-all duration-200"
      >
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: -10,
                  filter: "blur(8px)",
                }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, y: -10, filter: "blur(8px)" }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
