import { useState } from "react";
import { Toggle ,
  SelectPreset} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { type Size } from "@/lib/types";

export default function ToggleShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Toggle"
        description="A two-state button that can be either on or off."
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

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Single toggle button.">
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon className="size-4 mr-2" />
              Italic
            </Toggle>
            <Toggle aria-label="Toggle bold" size={globalSize}>
              <BoldIcon className="size-4 mr-2" />
              Bold
            </Toggle>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Outline Variant"
          description="Toggle with outline style."
        >
          <div className="flex gap-2">
            <Toggle
              variant="outline"
              aria-label="Toggle underline"
              size={globalSize}
            >
              <UnderlineIcon className="size-4 mr-2" />
              Underline
            </Toggle>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
