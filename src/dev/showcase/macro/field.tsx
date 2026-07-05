import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { Input } from "@/components/micro/input";
import { FieldPreset } from "@/components/macro/field-preset";

export default function MacroFieldShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Field (Macro)"
        description="Trình bao bọc tiện ích dành cho các điều khiển biểu mẫu để thêm nhãn, mô tả và lỗi."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Gói một đầu vào tiêu chuẩn.">
          <div className="w-full max-w-sm">
            <FieldPreset
              size={globalSize}
              label="Username"
              description="Đây là tên hiển thị công khai của bạn."
            >
              <Input placeholder="Enter username..." size={globalSize} />
            </FieldPreset>
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Truyền thông báo lỗi.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <FieldPreset
              size={globalSize}
              label="Username"
              errorMessage="Username is already taken."
            >
              <Input placeholder="Enter username..." size={globalSize} aria-invalid="true" />
            </FieldPreset>
          </div>
        </ExampleSection>

        <ExampleSection label="Horizontal Orientation" description="Đặt nhãn và điều khiển cạnh nhau.">
          <div className="w-full max-w-sm">
            <FieldPreset
              size={globalSize}
              label="Subscribe"
              description="Nhận thông tin cập nhật hàng tuần."
              orientation="horizontal"
            >
              <div className="h-5 w-5 rounded border border-primary bg-primary/10"></div>
            </FieldPreset>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
