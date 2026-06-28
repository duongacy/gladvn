import { useState } from "react";
import { Checkbox, Label, MonoSelect } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function CheckboxShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      {/* ── Basic ─────────────────────────────────── */}
      <ExampleSection label="Default" description="Single checkbox with a label.">
        <div className="flex items-center space-x-3">
          <Checkbox id="terms" size={globalSize} />
          <Label htmlFor="terms" className="font-normal cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>
      </ExampleSection>

      {/* ── With Description ──────────────────────── */}
      <ExampleSection label="With Description" description="Checkbox accompanied by helper text.">
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
              <Label htmlFor="terms2" className="font-normal text-muted-foreground">
                Unchecked & disabled
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms3" disabled defaultChecked size={globalSize} />
              <Label htmlFor="terms3" className="font-normal text-muted-foreground">
                Checked & disabled
              </Label>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection label="Form Group" description="Multiple related options.">
          <div className="flex flex-col gap-3">
            <div className="flex items-center space-x-3">
              <Checkbox id="recents" defaultChecked size={globalSize} />
              <Label htmlFor="recents" className="font-normal cursor-pointer">Recents</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="home" defaultChecked size={globalSize} />
              <Label htmlFor="home" className="font-normal cursor-pointer">Home</Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="applications" size={globalSize} />
              <Label htmlFor="applications" className="font-normal cursor-pointer">Applications</Label>
            </div>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
