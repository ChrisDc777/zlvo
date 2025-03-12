"use client";
import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import { LampDemo } from "@/components/aceternity/LampDemo";
import { DemoHeroGeometric } from "@/components/kokonut/Hero";
import { DataDigitizationFlow } from "@/components/animatedTabs";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* <Navbar /> */}
      <DemoHeroGeometric/>
      <Hero />

      {/* <AnimatedBeamUni/>
      <AnimatedBeamMultipleOutput/> */}

      <LampDemo/>
      <DataDigitizationFlow/>

      <Items />
      {/* <TextRevealCardPreview /> */}
      
      {/* <FAQ /> */}
      <CTA />
      
      
      {/* <AuroraBackgroundDemo /> */}
      {/* Lamp, Bento Grid */}
      <Footer />
    </main>
  );
}
