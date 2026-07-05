import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";
import { SelectPreset } from "@/components/macro/select-preset";

function ControlledMacroCheckboxDemo({ size }: { size: Size }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <CheckboxPreset
        size={size}
        checked={checked}
        onCheckedChange={(c) => setChecked(!!c)}
        label="Controlled Checkbox"
        description="This checkbox state is managed by React."
      />
      <p className="text-sm text-muted-foreground">
        Current State: <span className="font-mono font-bold text-foreground">{checked ? "Checked" : "Unchecked"}</span>
      </p>
    </div>
  );
}

export default function MacroCheckboxShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Checkbox (Macro)"
        description="A preset component that encapsulates Checkbox, Field, Label, and Description."
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
        <ExampleSection label="Standard" description="Basic checkbox with label and description.">
          <div className="w-full max-w-sm">
            <CheckboxPreset
              size={globalSize}
              label="Accept terms"
              description="You must accept the terms and conditions."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Accept terms (Invalid)"
              errorMessage="You must check this box."
            />
            
            <CheckboxPreset
              size={globalSize}
              label="Accept terms (Hidden Error)"
              description="Error text is hidden using showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        
        <ExampleSection label="Disabled State" description="A non-interactive checkbox field.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Sign up for newsletter"
              description="This option is currently unavailable."
              disabled
            />
            <CheckboxPreset
              size={globalSize}
              label="Enable experimental features"
              description="You cannot change this setting."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Form Group" description="Multiple related options.">
          <div className="flex flex-col gap-3">
            <CheckboxPreset id="cb-m-recents" label="Recents" defaultChecked size={globalSize} />
            <CheckboxPreset id="cb-m-home" label="Home" defaultChecked size={globalSize} />
            <CheckboxPreset id="cb-m-applications" label="Applications" size={globalSize} />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Demonstrating how CheckboxPreset handles complex React Node labels and long descriptions.">
          <div className="w-full max-w-sm">
            <CheckboxPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Share usage data <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">BETA</span>
                </span>
              }
              description="Help us improve our service by automatically sending diagnostic data and crash reports every time the application encounters an unexpected error. You can revoke this permission at any time in your account settings."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={1}>
        <ExampleSection 
          label="Controlled Mode" 
          description="Control the checked state using React state (checked and onCheckedChange)."
          codeString={`import { useState } from "react";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";

export function ControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxPreset
      checked={checked}
      onCheckedChange={(c) => setChecked(!!c)}
      label="Controlled Checkbox"
      description="This checkbox state is managed by React."
    />
  );
}`}
        >
          <ControlledMacroCheckboxDemo size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
