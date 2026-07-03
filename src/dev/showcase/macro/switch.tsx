import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SwitchPreset } from "@/components/macro/switch-preset";

export default function MacroSwitchShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Switch (Macro)"
        description="A preset component that encapsulates Switch, Field, Label, and Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic switch with label and description.">
          <div className="w-full max-w-sm">
            <SwitchPreset
              size={globalSize}
              label="Airplane Mode"
              description="Disable all wireless connections."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Network (Invalid)"
              errorMessage="Network connection lost."
            />
            
            <SwitchPreset
              size={globalSize}
              label="Network (Hidden Error)"
              description="Error text is hidden using showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="A non-interactive switch.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SwitchPreset
              size={globalSize}
              label="Sync Contacts"
              description="Requires permission to access your contacts."
              disabled
            />
            <SwitchPreset
              size={globalSize}
              label="Use Cellular Data"
              description="Cellular data is turned off globally."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Custom labels and long descriptions.">
          <div className="w-full max-w-sm">
            <SwitchPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Enable two-factor authentication
                  <span className="rounded bg-success/20 px-1.5 py-0.5 text-[10px] font-semibold text-success">RECOMMENDED</span>
                </span>
              }
              description="Add an extra layer of security to your account. We will ask you to enter a code from your authentication app every time you sign in from a new device."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
