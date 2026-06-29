import { useState } from "react";
import { Spinner, MonoSelect } from "../../index";
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function SpinnerShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Spinner" description="A loading spinner indicator.">
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

      <ExampleSection label="Default" description="Standard spinner.">
        <Spinner size={globalSize} />
      </ExampleSection>
    </div>
  );
}
