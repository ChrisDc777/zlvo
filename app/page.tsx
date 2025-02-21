import Navbar from "../components/sections/navbar/default";
import Hero from "../components/sections/hero/default";
import Stats from "../components/sections/stats/default";
import Logos from "../components/sections/logos/default";
import Items from "../components/sections/items/default";
import FAQ from "../components/sections/faq/default";
import CTA from "../components/sections/cta/default";
import Footer from "../components/sections/footer/default";
import Pricing from "../components/sections/pricing/default";
import { AuroraBackgroundDemo } from "@/components/aceternity/AuroraFooter";
import { TextRevealCardPreview } from "@/components/aceternity/textReveal";
import { LampDemo } from "@/components/aceternity/LampDemo";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <LampDemo/>
      <Logos />
      <Items />
      
      {/* <Pricing /> */}
      {/* <TextRevealCardPreview /> */}
      
      <CTA />
      <FAQ />
      
      <AuroraBackgroundDemo />
      {/* Lamp, Bento Grid */}
      {/* <Footer /> */}
    </main>
  );
}
