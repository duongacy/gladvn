import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { NativeSelectPreset } from "@/components/macro/native-select-preset";

export default function MacroNativeSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Native Select Preset (Macro)"
        description="Trường chọn gốc hoàn chỉnh có nhãn, mô tả và thông báo lỗi xác thực được tích hợp sẵn."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as "sm" | "md" | "lg")}
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={1}>
        <ExampleSection label="Basic Usage" description="Trường chọn gốc tiêu chuẩn có nhãn.">
          <NativeSelectPreset
            label="Language"
            defaultValue=""
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="" disabled>Select a language...</option>
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
            <option value="fr">French</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="With Description" description="Cung cấp thêm ngữ cảnh bên dưới trường được chọn.">
          <NativeSelectPreset
            label="Theme"
            description="Chọn giao diện trông như thế nào đối với bạn."
            defaultValue="system"
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="Validation Error" description="Hiển thị thông báo lỗi khi lựa chọn không hợp lệ.">
          <NativeSelectPreset
            label="Country"
            defaultValue=""
            errorMessage="Please select a valid country."
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="" disabled>Select a country...</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="Disabled State" description="Trường chọn không tương tác.">
          <NativeSelectPreset
            label="Plan"
            description="Bạn không thể thay đổi kế hoạch của mình vào lúc này."
            defaultValue="basic"
            disabled
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="basic">Basic Plan</option>
            <option value="pro">Pro Plan</option>
          </NativeSelectPreset>
        </ExampleSection>

        <ExampleSection label="Grouped Options" description="Sử dụng optgroup bên trong lựa chọn gốc.">
          <NativeSelectPreset
            label="Timezone"
            defaultValue=""
            size={globalSize}
            className="w-full max-w-sm"
          >
            <option value="" disabled>Select timezone...</option>
            <optgroup label="North America">
              <option value="est">Eastern Time</option>
              <option value="pst">Pacific Time</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="gmt">Greenwich Mean Time</option>
              <option value="cet">Central European Time</option>
            </optgroup>
          </NativeSelectPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
