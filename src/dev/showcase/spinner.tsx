import { useState } from "react";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Spinner } from "@/components/micro/spinner";
import { SelectPreset } from "@/components/macro/select-preset";

export default function SpinnerShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Spinner" description="Một chỉ báo quay vòng tải.">
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

      <ExampleSection
        label="Default"
        description="Máy quay tiêu chuẩn."
        codeString={`<Spinner />
`}
      >
        <Spinner size={globalSize} />
      </ExampleSection>
    </div>
  );
}
