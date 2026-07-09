import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { type Size } from "@/lib/types";
import { Toggle } from "@/components/micro/toggle";
import { SelectPreset } from "@/components/macro/select-preset";

export default function ToggleShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Toggle"
        description="Nút hai trạng thái có thể bật hoặc tắt."
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
        <ExampleSection label="Standard" description="Nút chuyển đổi duy nhất."
          codeString={`<div className="flex gap-2">
  <Toggle aria-label="Toggle italic" size={globalSize}>
    <ItalicIcon className="size-4 mr-2" />
    Italic
  </Toggle>
  <Toggle aria-label="Toggle bold" size={globalSize}>
    <BoldIcon className="size-4 mr-2" />
    Bold
  </Toggle>
</div>
`}>
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
          description="Chuyển đổi với phong cách phác thảo."
        
        codeString={`<div className="flex gap-2">
  <Toggle
    variant="outline"
    aria-label="Toggle underline"
    size={globalSize}
  >
    <UnderlineIcon className="size-4 mr-2" />
    Underline
  </Toggle>
</div>
`}>
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
