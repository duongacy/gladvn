import { useState } from "react";

import { CheckIcon, MinusIcon } from "lucide-react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Checkbox, CheckboxIndicator } from "@/components/micro/checkbox";
import { Label } from "@/components/micro/label";
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/micro/field";
import { SelectPreset } from "@/components/macro/select-preset";

function ControlledCheckboxDemo({ size }: { size: Size }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="cb-controlled" size={size} checked={checked} onCheckedChange={(c) => setChecked(!!c)}>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </Checkbox>
        <Label htmlFor="cb-controlled" className="font-normal cursor-pointer">
          Controlled Checkbox
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Current State: <span className="font-mono font-bold text-foreground">{checked ? "Checked" : "Unchecked"}</span>
      </p>
    </div>
  );
}

export default function CheckboxShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Checkbox"
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

      {/* ── Default ────────────────────────────────── */}
      <ExampleSection
        label="Default"
        description="Standard checkbox with a label using pure composition."
      >
        <div className="flex items-center gap-3">
          <Checkbox id="cb-default" size={globalSize}>
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>
          <Label htmlFor="cb-default" className="font-normal cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>
      </ExampleSection>

      {/* ── Custom Icon (Compositional) ───────────── */}
      <ExampleSection
        label="Custom Icon"
        description="Using the compositional API to provide a custom indicator icon."
      >
        <div className="flex items-center gap-3">
          <Checkbox id="cb-custom-icon" size={globalSize}>
            <CheckboxIndicator>
              <MinusIcon />
            </CheckboxIndicator>
          </Checkbox>
          <Label htmlFor="cb-custom-icon" className="font-normal cursor-pointer">
            Indeterminate state (custom icon)
          </Label>
        </div>
      </ExampleSection>

      {/* ── With Description ──────────────────────── */}
      <ExampleSection
        label="With Description"
        description="Checkbox accompanied by helper text."
      >
        <div className="flex items-start gap-3">
          <div className="flex items-center text-sm leading-snug">
            &#8203;
            <Checkbox id="cb-with-desc" size={globalSize}>
              <CheckboxIndicator>
                <CheckIcon />
              </CheckboxIndicator>
            </Checkbox>
          </div>
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="cb-with-desc" className="font-medium cursor-pointer">
              Accept terms and conditions
            </Label>
            <p className="text-xs text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </ExampleSection>

      {/* ── States ────────────────────────────────── */}
      <ExampleGrid columns={2}>
        <ExampleSection label="Error State" description="Manual error state using Field primitives.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <Field className="flex flex-row items-start gap-3" data-invalid={true}>
              <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
                &#8203;
                <Checkbox id="cb-err1" size={globalSize} aria-invalid={true}>
                  <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
                </Checkbox>
              </div>
              <div className="grid gap-1.5 leading-none">
                <FieldLabel htmlFor="cb-err1" className="font-medium cursor-pointer">Accept terms (Invalid)</FieldLabel>
                <FieldError>You must check this box.</FieldError>
              </div>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection label="Disabled" description="Non-interactive states.">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Checkbox id="cb-disabled-unchecked" disabled size={globalSize}>
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <Label
                htmlFor="cb-disabled-unchecked"
                className="font-normal text-muted-foreground"
              >
                Unchecked & disabled
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-disabled-checked" disabled defaultChecked size={globalSize}>
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <Label
                htmlFor="cb-disabled-checked"
                className="font-normal text-muted-foreground"
              >
                Checked & disabled
              </Label>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Form Group"
          description="Multiple related options."
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Checkbox id="cb-recents" defaultChecked size={globalSize}>
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <Label htmlFor="cb-recents" className="font-normal cursor-pointer">
                Recents
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-home" defaultChecked size={globalSize}>
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <Label htmlFor="cb-home" className="font-normal cursor-pointer">
                Home
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-applications" size={globalSize}>
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <Label
                htmlFor="cb-applications"
                className="font-normal cursor-pointer"
              >
                Applications
              </Label>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Demonstrating how to handle complex React Node labels.">
          <div className="w-full max-w-sm">
            <Field className="flex flex-row items-start gap-3">
              <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs">
                &#8203;
                <Checkbox id="cb-rw1" size={globalSize}>
                  <CheckboxIndicator><CheckIcon /></CheckboxIndicator>
                </Checkbox>
              </div>
              <div className="grid gap-1.5 leading-none">
                <FieldLabel htmlFor="cb-rw1" className="font-medium cursor-pointer flex items-center gap-2">
                  Share usage data <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">BETA</span>
                </FieldLabel>
                <FieldDescription>
                  Help us improve our service by automatically sending diagnostic data and crash reports every time the application encounters an unexpected error. You can revoke this permission at any time in your account settings.
                </FieldDescription>
              </div>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={1}>
        <ExampleSection 
          label="Controlled Mode" 
          description="Control the checked state using React state (checked and onCheckedChange)."
          codeString={`import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox, CheckboxIndicator } from "@/components/micro/checkbox";
import { Label } from "@/components/micro/label";

export function ControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Checkbox id="cb-controlled" checked={checked} onCheckedChange={(c) => setChecked(!!c)}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Label htmlFor="cb-controlled">Controlled Checkbox</Label>
    </div>
  );
}`}
        >
          <ControlledCheckboxDemo size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
