import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Label } from "@/components/micro/label";
import { Field, FieldLabel } from "@/components/micro/field";
import { Switch, SwitchThumb } from "@/components/micro/switch";
import { SelectPreset } from "@/components/macro/select-preset";

export default function SwitchShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
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
        <ExampleSection
          label="Standard"
          description="Used for immediate toggle actions."
        >
          <div className="w-full max-w-sm space-y-4">
            {["Notifications", "Dark Mode", "Auto-save"].map((item, i) => (
              <Field
                orientation="horizontal"
                size={globalSize}
                key={item}
                className="justify-between"
              >
                <FieldLabel htmlFor={`switch-${item}`}>{item}</FieldLabel>
                <Switch id={`switch-${item}`} size={globalSize} defaultChecked={i === 0}><SwitchThumb /></Switch>
              </Field>
            ))}
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Non-interactive switch states."
        >
          <div className="w-full max-w-sm space-y-4">
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel htmlFor="switch-d1">Airplane Mode</FieldLabel>
              <Switch
                id="switch-d1"
                disabled
                size={globalSize}
                defaultChecked
              />
            </Field>
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel htmlFor="switch-d2">Developer Options</FieldLabel>
              <Switch id="switch-d2" disabled size={globalSize} />
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Compositional Usage"
        description="Building a switch using its base primitives for custom behavior or styling."
      >
        <div className="flex items-center gap-4">
          <Switch size={globalSize}>
            <SwitchThumb />
          </Switch>
        </div>
      </ExampleSection>
    </div>
  );
}
