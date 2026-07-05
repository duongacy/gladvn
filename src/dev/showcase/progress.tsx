import { useState } from "react";

import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import { Progress, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue } from "@/components/micro/progress";
import { ProgressPreset } from "@/components/macro/progress-preset";
import { SelectPreset } from "@/components/macro/select-preset";

export default function ProgressShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Progress"
        description="Hiển thị chỉ báo cho biết tiến độ hoàn thành của một nhiệm vụ."
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
        {/* COMPOSITIONAL */}
        <ExampleSection
          label="Compositional (Core)"
          description="Thanh tiến trình tiêu chuẩn sử dụng API tổng hợp thuần túy."
        >
          <Progress value={60} size={globalSize} className="w-[60%]">
            <ProgressTrack>
              <ProgressIndicator />
            </ProgressTrack>
          </Progress>
        </ExampleSection>

        <ExampleSection
          label="Compositional with Label"
          description="Sử dụng các bộ phận cấu thành để hiển thị nhãn và giá trị."
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
          description="Sử dụng thành phần nguyên khối để phát triển nhanh hơn."
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
