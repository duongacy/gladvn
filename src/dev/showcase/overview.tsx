import React from "react";
import { HeroSection } from "./overview-components/HeroSection";
import { DashboardPreview } from "./overview-components/DashboardPreview";
import { PrinciplesSection } from "./overview-components/PrinciplesSection";
import { ArchitectureSection } from "./overview-components/ArchitectureSection";
import { FeatureGridSection } from "./overview-components/FeatureGridSection";
import { ColorPaletteSection } from "./overview-components/ColorPaletteSection";
import { FooterCTA } from "./overview-components/FooterCTA";

export default function OverviewSection() {
  return (
    <div className="space-y-24 overflow-hidden pb-24 font-sans">
      <HeroSection />
      
      <DashboardPreview />
      
      <PrinciplesSection />
      
      <section className="container max-w-6xl mx-auto space-y-12 px-4">
        <ArchitectureSection />
        
        <FeatureGridSection />
      </section>
      
      <ColorPaletteSection />
      
      <FooterCTA />
    </div>
  );
}
