import { SectionHeader, ExampleSection } from "../components/showcase";

export default function ChartShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Chart" description="Beautiful & responsive charts built using Recharts." />

      <ExampleSection label="Placeholder" description="Chart implementation coming soon.">
        <div className="h-[200px] bg-muted/30 rounded-xl border flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Chart Implementation</span>
        </div>
      </ExampleSection>
    </div>
  );
}
