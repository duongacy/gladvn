import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { AvatarPreset } from "@/components/macro/avatar-preset";
import { SelectPreset } from "@/components/macro/select-preset";
import { AvatarGroup, AvatarGroupCount } from "@/components/micro/avatar";

export default function MacroAvatarShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Avatar (Macro)"
        description="A preset component that renders an Avatar with fallback initials automatically generated."
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
        <ExampleSection label="Standard" description="Avatar with image and fallback.">
          <div className="flex items-center gap-4">
            <AvatarPreset size={globalSize} src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarPreset size={globalSize} alt="John Doe" />
            <AvatarPreset size={globalSize} />
          </div>
        </ExampleSection>

        <ExampleSection label="With Status" description="Preset avatar configured with standard status flags.">
          <div className="flex items-center gap-4">
            <AvatarPreset size={globalSize} src="https://github.com/shadcn.png" alt="@shadcn" status="online" />
            <AvatarPreset size={globalSize} alt="Alice" status="away" />
            <AvatarPreset size={globalSize} status="offline" />
          </div>
        </ExampleSection>
        <ExampleSection label="Avatar Group" description="Stacking preset avatars using AvatarGroup.">
          <div className="flex flex-col gap-4">
            <AvatarGroup>
              <AvatarPreset size={globalSize} src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarPreset size={globalSize} alt="Alice Smith" />
              <AvatarPreset size={globalSize} alt="Bob Jones" />
              <AvatarGroupCount size={globalSize}>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
