import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { ProgressPreset } from "@/components/macro/progress-preset";

export default function MacroProgressShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Progress (Macro)"
        description="A preset component that renders a progress bar."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Basic progress bar.">
          <div className="w-full max-w-sm">
            <ProgressPreset value={60} />
          </div>
        </ExampleSection>

        <ExampleSection label="With Label" description="Showing the value and an optional custom label.">
          <div className="w-full max-w-sm">
            <ProgressPreset value={85} label="Uploading file..." showValue />
          </div>
        </ExampleSection>

        <ExampleSection label="Indeterminate" description="When value is not provided or undefined.">
          <div className="w-full max-w-sm">
            <ProgressPreset />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
