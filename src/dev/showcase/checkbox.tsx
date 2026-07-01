import { useState } from "react";
import { Checkbox, CheckboxIndicator, Label } from "@/index";
import { SelectPreset } from "@/preset";;

import { CheckIcon, MinusIcon } from "lucide-react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

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

      {/* ── Monolithic ─────────────────────────────────── */}
      <ExampleSection
        label="Monolithic"
        description="Single checkbox component without needing to import Indicator."
      >
        <div className="flex items-center space-x-3">
          <Checkbox id="terms" size={globalSize}><CheckboxIndicator><CheckIcon className="size-3.5" /></CheckboxIndicator></Checkbox>
          <Label htmlFor="terms" className="font-normal cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>
      </ExampleSection>

      {/* ── Compositional ──────────────────────────────── */}
      <ExampleSection
        label="Compositional"
        description="Using the core API to fully customize the checkbox icon."
      >
        <div className="flex items-center space-x-3">
          <Checkbox id="terms-custom" size={globalSize}>
            <CheckboxIndicator>
              <MinusIcon className="size-3" />
            </CheckboxIndicator>
          </Checkbox>
          <Label htmlFor="terms-custom" className="font-normal cursor-pointer">
            Indeterminate state (custom icon)
          </Label>
        </div>
      </ExampleSection>

      {/* ── Disabled ──────────────────────────────── */}
      <ExampleSection
        label="Disabled"
        description="Checkbox in a disabled state."
      >
        <div className="flex items-center space-x-3">
          <Checkbox id="terms-disabled" disabled size={globalSize}><CheckboxIndicator><CheckIcon className="size-3.5" /></CheckboxIndicator></Checkbox>
          <Label
            htmlFor="terms-disabled"
            className="font-normal cursor-pointer opacity-50"
          >
            Accept terms and conditions
          </Label>
        </div>
      </ExampleSection>

      {/* ── Basic ─────────────────────────────────── */}
      <ExampleSection
        label="Default"
        description="Single checkbox with a label."
      >
        <div className="flex items-center space-x-3">
          <Checkbox id="terms" size={globalSize}><CheckboxIndicator><CheckIcon className="size-3.5" /></CheckboxIndicator></Checkbox>
          <Label htmlFor="terms" className="font-normal cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>
      </ExampleSection>

      {/* ── With Description ──────────────────────── */}
      <ExampleSection
        label="With Description"
        description="Checkbox accompanied by helper text."
      >
        <div className="items-top flex space-x-3">
          <Checkbox id="terms1" size={globalSize} />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="terms1" className="font-medium cursor-pointer">
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
        <ExampleSection label="Disabled" description="Non-interactive states.">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-3">
              <Checkbox id="terms2" disabled size={globalSize} />
              <Label
                htmlFor="terms2"
                className="font-normal text-muted-foreground"
              >
                Unchecked & disabled
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms3" disabled defaultChecked size={globalSize} />
              <Label
                htmlFor="terms3"
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
            <div className="flex items-center space-x-3">
              <Checkbox id="recents" defaultChecked size={globalSize} />
              <Label htmlFor="recents" className="font-normal cursor-pointer">
                Recents
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="home" defaultChecked size={globalSize} />
              <Label htmlFor="home" className="font-normal cursor-pointer">
                Home
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="applications" size={globalSize} />
              <Label
                htmlFor="applications"
                className="font-normal cursor-pointer"
              >
                Applications
              </Label>
            </div>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
