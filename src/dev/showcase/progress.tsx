import { useState } from "react";
import {
  MonoSelect,
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "../../index";
import { Progress as MonolithicProgress } from "../../components/monolithic/progress";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function ProgressShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task."
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
          <MonolithicProgress
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
