import { useState } from "react";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Label } from "@/components/micro/label";
import { SelectPreset } from "@/components/macro/select-preset";

export default function LabelShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Label"
        description="Hiển thị nhãn có thể truy cập được liên kết với các điều khiển."
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

      <ExampleSection label="Default" description="Cách sử dụng nhãn tiêu chuẩn.">
        <Label htmlFor="terms" size={globalSize}>
          Accept terms and conditions
        </Label>
      </ExampleSection>

      <ExampleSection label="Disabled" description="Trạng thái bị vô hiệu hóa khi nằm trong group bị vô hiệu.">
        <div data-disabled="true" className="group">
          <Label htmlFor="disabled" size={globalSize}>
            This label is disabled
          </Label>
        </div>
      </ExampleSection>

      <ExampleSection label="Error State" description="Hiển thị màu đỏ khi nằm trong group bị lỗi (data-invalid).">
        <div data-invalid="true" className="group">
          <Label htmlFor="error" size={globalSize}>
            Email is required
          </Label>
        </div>
      </ExampleSection>

      <ExampleSection label="With Peer Input" description="Phản hồi trạng thái disabled của input liền kề (dùng class peer).">
        <div className="flex items-center gap-2">
          <input type="checkbox" disabled id="peer-disabled" className="peer w-4 h-4" />
          <Label htmlFor="peer-disabled" size={globalSize}>
            Disabled by peer checkbox
          </Label>
        </div>
      </ExampleSection>
    </div>
  );
}
