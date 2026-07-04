import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { CardPreset } from "@/components/macro/card-preset";
import { Button } from "@/components/micro/button";
import { Badge } from "@/components/micro/badge";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { SelectPreset } from "@/components/macro/select-preset";

export default function CardMacroShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Card Preset (Macro)"
        description="A composition of Card primitives to quickly build standard cards without boilerplate."
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
          label="Standard Preset"
          description="Pass title, description, and footer as props."
        >
          <CardPreset
            size={globalSize}
            title="Account Settings"
            description="Manage your account settings and preferences."
            footer={<Button size={globalSize}>Save Changes</Button>}
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Settings form content goes here.
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="No Footer"
          description="Omit footer prop to hide the footer section entirely."
        >
          <CardPreset
            size={globalSize}
            title="Notification Preferences"
            description="Choose what you want to be notified about."
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Switches and toggles go here.
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="Custom Title Node"
          description="The title prop accepts ReactNode, allowing icons and badges."
        >
          <CardPreset
            size={globalSize}
            title={
              <div className="flex items-center gap-2">
                <span>API Keys</span>
                <Badge color="warning">Experimental</Badge>
              </div>
            }
            description="Manage your secret API keys for external access."
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
              <span className="font-mono">sk_live_123...</span>
              <Button size="sm" variant="outline">Copy</Button>
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="With Form Controls"
          description="Use children to render complex forms and layouts."
        >
          <CardPreset
            size={globalSize}
            title="Update Profile"
            description="Change your display name and email."
            footer={
              <div className="flex justify-between w-full">
                <Button variant="ghost" size={globalSize}>Cancel</Button>
                <Button size={globalSize}>Save</Button>
              </div>
            }
            className="w-full"
          >
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hello@example.com" />
              </div>
            </div>
          </CardPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
