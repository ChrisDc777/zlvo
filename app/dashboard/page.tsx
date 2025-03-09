"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import InformaticaText from "@/public/informatica-text.svg";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();

  const openNewPage = () => {
    window.open(
      "https://usw5-cai.dm-us.informaticacloud.com/activevos-central/hmV7REr6f09d9K2gz9gMse/app/aesf-screenflow?avsf_sflow_uri=project%3A%2Fsf.Question_with_Context%2FQuestion_with_Context.xml&_sfMode=runtime&_sfGuideName=Question_with_Context&_aedev=false",
      "_blank",
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100 py-24">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Informatica Chat <span className="text-blue-500">Dashboard</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8 flex items-center justify-center">
          Intelligent Chat Solutions Powered by
          <div className="relative ml-2 h-10 w-36">
            {" "}
            <div className="absolute inset-0 rounded-full bg-blue-200 p-1 shadow-inner">
              <Image
                src={InformaticaText}
                alt="Informatica Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </p>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <Button
            variant="outline"
            className="px-6 py-2 text-base border-gray-700 text-gray-300 bg-white bg-opacity-10 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md hover:bg-opacity-20 hover:text-gray-100 transition-colors duration-200"
            onClick={() => router.push("/chat/salesforce")}
          >
            Chat with Salesforce
          </Button>
          <Button
            variant="outline"
            className="px-6 py-2 text-base border-gray-700 text-gray-300 bg-white bg-opacity-10 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md hover:bg-opacity-20 hover:text-gray-100 transition-colors duration-200"
            onClick={() => router.push("/chat/internet")}
          >
            Chat with Internet
          </Button>
          <Button
            variant="outline"
            className="px-6 py-2 text-base border-gray-700 text-gray-300 bg-white bg-opacity-10 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md hover:bg-opacity-20 hover:text-gray-100 transition-colors duration-200"
            onClick={openNewPage}
          >
            Chat with Uploaded Data
          </Button>
        </div>
      </div>
    </div>
  );
}
