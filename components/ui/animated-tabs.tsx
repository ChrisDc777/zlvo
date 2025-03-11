"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import healthCsv from "@/public/imgExample/healthcareCsv.jpg";
import healthPic1 from "@/public/imgExample/healthcarePic1.jpg";
import healthPic2 from "@/public/imgExample/healthcarePic2.jpg";
import healthPic3 from "@/public/imgExample/healthcarePic3.jpg";
import stationaryPic from "@/public/imgExample/stationaryPic.jpg";
import stationaryCsv from "@/public/imgExample/stationaryCsv.jpg";
import Image from "next/image";
import { AnimatedBeamUni } from "@/components/magicui/AnimatedBeamUni";
import { AnimatedBeamMultipleOutput } from "@/components/magicui/AnimatedBeamMultiple";
import { ArrowRightIcon, ChevronRight } from "lucide-react";

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
    id: "retail",
    label: "Retail",
    content: (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">
          Retail Data Flow
        </h3>
        <div className="flex w-full justify-between">
          {/* Transcripts Section */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">Transcripts</span>
            <Image
              src={stationaryPic}
              alt="Stationary Transcripts"
              className="h-48 object-contain rounded-md"
            />
            <AnimatedBeamUni />
            {/* <span className="text-sm text-gray-500 mt-4">
              Transcripts Processing from handwitten notes to Gemini to Informatica
            </span> */}
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row text-slate-400">
              <ChevronRight className="h-8 w-16 mr-[-10px]" />
              <ChevronRight className="h-8 w-16 mr-[-10px]" />
              <ChevronRight className="h-8 w-16 mr-[-10px]" />
              <ChevronRight className="h-8 w-16" />
            </div>
            {/* <ArrowRightIcon className="h-8 w-16 text-gray-300" /> */}
            <span className="text-sm text-gray-500 mt-4">
              Converted to a CSV table for further processing
            </span>
          </div>

          {/* CSV Data Section */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">CSV Data</span>
            <Image
              src={stationaryCsv}
              alt="Stationary CSV Data"
              className="h-48 object-contain rounded-md"
            />
            <AnimatedBeamMultipleOutput />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "healthcare",
    label: "Healthcare",
    content: (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">
          Healthcare Data Flow
        </h3>
        <div className="flex w-full justify-between">
          {/* Transcripts Section */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">Transcripts</span>
            <div className="flex flex-row p-16 md:p-4 sm:p-0">
              <Image
                src={healthPic1}
                alt="Healthcare Transcripts 1"
                className="h-32 object-contain rounded-md"
              />
              <Image
                src={healthPic2}
                alt="Healthcare Transcripts 2"
                className="h-32 object-contain rounded-md"
              />
              <Image
                src={healthPic3}
                alt="Healthcare Transcripts 3"
                className="h-32 object-contain rounded-md"
              />
            </div>
            <AnimatedBeamUni />
            {/* <span className="text-sm text-gray-500 mt-4">
              Transcripts Processing from handwitten notes to Gemini to Informatica
            </span> */}
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row text-slate-400">
              <ChevronRight className="h-8 w-16 mr-[-10px]" />
              <ChevronRight className="h-8 w-16 mr-[-10px]" />
              <ChevronRight className="h-8 w-16 mr-[-10px]" />
              <ChevronRight className="h-8 w-16" />
            </div>
            {/* <ArrowRightIcon className="h-8 w-16 text-gray-300" /> */}
            <span className="text-sm text-gray-500 mt-4">
              Converted and stored in Database
            </span>
          </div>
          {/* CSV Data Section */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">CSV Data</span>
            <Image
              src={healthCsv}
              alt="Healthcare CSV Data"
              className="h-48 object-contain rounded-md"
            />
            <AnimatedBeamMultipleOutput />
          </div>
        </div>
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
          {/* Transcripts Section */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">Transcripts</span>
            <img
              src="URL_TO_ECOMMERCE_TRANSCRIPT_IMAGE"
              alt="E-commerce Transcripts"
              className="h-48 object-contain rounded-md"
            />
            <AnimatedBeamUni />
          </div>

          {/* CSV Data Section */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-sm text-gray-500">CSV Data</span>
            <img
              src="URL_TO_ECOMMERCE_CSV_IMAGE"
              alt="E-commerce CSV Data"
              className="h-48 object-contain rounded-md"
            />
            <AnimatedBeamMultipleOutput />
          </div>
        </div>
      </div>
    ),
    disabled: true,
  },
  {
    id: "dummy1",
    label: "And Much",
    content: <></>,
    dummy: true,
  },
  {
    id: "dummy2",
    label: "More...",
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
      <div className="flex gap-2 flex-wrap bg-gradient-to-br from-gray-800 to-black bg-opacity-70 backdrop-blur-md p-2 rounded-xl shadow-md">
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
