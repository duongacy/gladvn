import { useState } from "react";
import { Label } from "@/index";
import { SelectPreset } from "@/preset";;
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function LabelShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Label"
        description="Renders an accessible label associated with controls."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ExampleSection label="Default" description="Standard label usage.">
        <Label htmlFor="terms" size={globalSize}>
          Accept terms and conditions
        </Label>
      </ExampleSection>
    </div>
  );
}
