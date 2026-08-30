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
    <div className="space-y-24 overflow-hidden pb-24 font-sans">
      <HeroSection />

      <DashboardPreview />

      <PrinciplesSection />

      <section className="container max-w-6xl mx-auto space-y-12 px-4">
        <ArchitectureSection />

        <TragediesSection />

        <FeatureGridSection />
      </section>

      <ColorPaletteSection />

      <FooterCTA />
    </div>
  );
}
