import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/index";

import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function ProgressShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
      </SectionHeader>

      <ExampleGrid columns={2}>
        {/* COMPOSITIONAL */}
        <ExampleSection
          label="Compositional (Core)"
          description="Standard progress bar using pure compositional API."
        >
          <Progress value={60} size={globalSize} className="w-[60%]">
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </ExampleSection>

        <ExampleSection
          label="Compositional with Label"
          description="Using compositional parts to show label and value."
        >
          <Progress value={45} size={globalSize} className="w-[80%]">
            <div className="flex items-center justify-between mb-1">
              <ProgressLabel>Downloading...</ProgressLabel>
              <ProgressValue />
            </div>
            <ProgressTrack>
              <ProgressIndicator className="bg-primary" />
            </ProgressTrack>
          </Progress>
        </ExampleSection>

        {/* MONOLITHIC */}
        <ExampleSection
          label="Monolithic Wrapper"
          description="Using the monolithic component for faster development."
        >
          <ProgressPreset
            value={75}
            size={globalSize}
            className="w-[80%]"
            label="Uploading..."
            showValue
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
