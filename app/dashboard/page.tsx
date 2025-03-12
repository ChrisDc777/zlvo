"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import InformaticaText from "@/public/informatica-text.svg";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useKindeBrowserClient();

  const openNewPage = (url: string) => {
    window.open(url, "_blank");
  };

  const userName = user?.given_name || "User";

  const buttonClass =
    "px-6 py-2 text-base border-gray-700 text-gray-300 bg-white bg-opacity-10 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md hover:bg-opacity-20 hover:text-gray-100 transition-colors duration-200";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100 py-24">
      <div className="text-center w-full max-w-5xl">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Welcome to Smart Structuring, {userName}!
        </h1>
        <h2 className="text-4xl text-blue-500 font-bold mb-6 ">Dashboard</h2>

        <div className="mb-8">
          <div className="text-lg text-gray-400 mb-4 flex items-center justify-center">
            Powered by
            <div className="relative ml-2 h-10 w-36">
              <div className="absolute inset-0 rounded-full bg-blue-200 p-1 shadow-inner">
                <Image
                  src={InformaticaText}
                  alt="Informatica Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Admin & Settings */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Admin & Settings</h4>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() =>
                  openNewPage(
                    "https://usw5.dm-us.informaticacloud.com/cloudUI/products/administer/index.html",
                  )
                }
              >
                Admin Panel – Manage Settings
              </Button>
            </div>
          </div>

          {/* Data Integration */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Data Integration</h4>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() =>
                  openNewPage(
                    "https://usw5.dm-us.informaticacloud.com/diUI/products/integrationDesign/index.html",
                  )
                }
              >
                Upload to Salesforce
              </Button>
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() =>
                  openNewPage(
                    "https://usw5-cai.dm-us.informaticacloud.com/activevos-central/projres/apps/app-integration/integrationDesign/index.html",
                  )
                }
              >
                Upload to Snowflake
              </Button>
            </div>
          </div>

          {/* Data Quality & Governance */}
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Data Quality & Governance
            </h4>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() =>
                  openNewPage(
                    "https://usw5-dqprofile.dm-us.informaticacloud.com/profiling-ui/index.html",
                  )
                }
              >
                Data Profiling
              </Button>
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() =>
                  openNewPage(
                    "https://usw5-dqcloud.dm-us.informaticacloud.com/dq-product/cloud/index.html",
                  )
                }
              >
                Data Quality
              </Button>
              <Button
                variant="outline"
                className={buttonClass}
                onClick={() =>
                  openNewPage(
                    "https://usw5-cdv.dm-us.informaticacloud.com/datavalidation-service/ui/index.html",
                  )
                }
              >
                Data Validation
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">AI Agents</h3>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className={buttonClass}
              onClick={() => router.push("/chat/salesforce")}
            >
              Chat with Salesforce
            </Button>
            <Button
              variant="outline"
              className={buttonClass}
              onClick={() => router.push("/chat/internet")}
            >
              Chat with Search Tools
            </Button>
            <Button
              variant="outline"
              className={buttonClass}
              onClick={() =>
                openNewPage(
                  "https://usw5-cai.dm-us.informaticacloud.com/activevos-central/hmV7REr6f09d9K2gz9gMse/app/aesf-screenflow?avsf_sflow_uri=project%3A%2Fsf.Question_with_Context%2FQuestion_with_Context.xml&_sfMode=runtime&_sfGuideName=Question_with_Context&_aedev=false",
                )
              }
            >
              Chat with Uploaded Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
