import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SelectPreset } from "@/components/macro/select-preset";

export default function MacroSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Select (Macro)"
        description="Một thành phần đặt trước bao gồm Chọn, Trường, Nhãn và Mô tả."
      >
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Chọn thả xuống cơ bản với nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label="Fruit"
              description="Chọn trái cây yêu thích của bạn."
              placeholder="Pick a fruit..."
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "cherry", label: "Cherry" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SelectPreset
              size={globalSize}
              label="Framework (Invalid)"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="You must select a framework."
            />
            
            <SelectPreset
              size={globalSize}
              label="Framework (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Một thành phần chọn không tương tác.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label="Account Tier"
              description="Bạn không thể hạ cấp tài khoản của mình vào lúc này."
              placeholder="Select tier..."
              value="pro"
              options={[
                { value: "basic", label: "Cơ bản" },
                { value: "pro", label: "Pro" },
              ]}
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Tích hợp nhãn tùy chỉnh và mô tả chi tiết.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Country of Residence <span className="text-destructive">*</span>
                </span>
              }
              description="Thông tin này được sử dụng cho mục đích tính thuế. Hãy đảm bảo nó khớp với địa chỉ thanh toán của bạn."
              placeholder="Select your country..."
              options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
