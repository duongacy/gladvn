import { ArchitectureSection } from "./overview-components/ArchitectureSection";
import { ColorPaletteSection } from "./overview-components/ColorPaletteSection";
import { DashboardPreview } from "./overview-components/DashboardPreview";
import { FeatureGridSection } from "./overview-components/FeatureGridSection";
import { FooterCTA } from "./overview-components/FooterCTA";
import { HeroSection } from "./overview-components/HeroSection";
import { PrinciplesSection } from "./overview-components/PrinciplesSection";
import { TragediesSection } from "./overview-components/TragediesSection";

export default function OverviewSection() {
  return (
    <div className="w-full min-h-screen bg-[#FCFAF8] dark:bg-background selection:bg-primary/20">
      <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-24 font-sans overflow-x-hidden">
        <HeroSection />

        <TragediesSection />

        <div className="h-[6px] w-full bg-foreground" />
        <ArchitectureSection />

        <div className="h-[6px] w-full bg-foreground" />
        <PrinciplesSection />

        <div className="h-[6px] w-full bg-foreground" />
        <DashboardPreview />

        <div className="h-[6px] w-full bg-foreground" />
        <FeatureGridSection />

        <div className="h-[6px] w-full bg-foreground" />
        <ColorPaletteSection />

        <div className="h-[6px] w-full bg-foreground" />
        <FooterCTA />
      </div>
    </div>
  );
}
