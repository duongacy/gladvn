import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { InputOTPPreset } from "@/components/macro/input-otp-preset";
import { SelectPreset } from "@/components/macro/select-preset";

export default function MacroInputOTPShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input OTP (Macro)"
        description="Một thành phần cài sẵn bao gồm OTP đầu vào, Trường, Nhãn và Mô tả."
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
          label="Standard (Groups)" 
          description="OTP đầu vào cơ bản chia thành 2 nhóm 3 số."
          codeString={`<InputOTPPreset
  groups={[3, 3]}
  size="${globalSize}"
  label="Verification Code"
  description="Vui lòng nhập mã xác minh được gửi tới điện thoại của bạn."
/>`}
        >
          <div className="w-full max-w-sm">
            <InputOTPPreset
              groups={[3, 3]}
              size={globalSize}
              label="Verification Code"
              description="Vui lòng nhập mã xác minh được gửi tới điện thoại của bạn."
            />
          </div>
        </ExampleSection>

        <ExampleSection 
          label="Error State" 
          description="Thể hiện các đạo cụ errorMessage và showError."
          codeString={`<InputOTPPreset
  groups={[3, 3]}
  size="${globalSize}"
  label="Code (Invalid)"
  errorMessage="The code you entered is incorrect."
/>

<InputOTPPreset
  groups={[3, 3]}
  size="${globalSize}"
  label="Code (Hidden Error)"
  description="Văn bản lỗi bị ẩn bằng showError={false}"
  errorMessage="Hidden error."
  showError={false}
/>`}
        >
          <div className="w-full max-w-sm flex flex-col gap-6">
            <InputOTPPreset
              groups={[3, 3]}
              size={globalSize}
              label="Code (Invalid)"
              errorMessage="The code you entered is incorrect."
            />
            
            <InputOTPPreset
              groups={[3, 3]}
              size={globalSize}
              label="Code (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection 
          label="Disabled State" 
          description="Đầu vào OTP không tương tác."
          codeString={`<InputOTPPreset
  groups={[3, 3]}
  size="${globalSize}"
  label="Recovery Code"
  description="Bạn không thể nhập mã vào lúc này."
  disabled
/>`}
        >
          <div className="w-full max-w-sm">
            <InputOTPPreset
              groups={[3, 3]}
              size={globalSize}
              label="Recovery Code"
              description="Bạn không thể nhập mã vào lúc này."
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection 
          label="Custom Separator & Single Group" 
          description="Tùy chỉnh separator hoặc dùng 1 group duy nhất."
          codeString={`<InputOTPPreset
  groups={[4]}
  size="${globalSize}"
  label={
    <span className="flex items-center justify-between">
      <span>Enter PIN</span>
      <a href="#" className="text-xs text-primary underline-offset-4 hover:underline">Forgot PIN?</a>
    </span>
  }
  description="Nhập số nhận dạng cá nhân gồm 4 chữ số của bạn để tiếp tục."
/>

<InputOTPPreset
  groups={[2, 2, 2]}
  separator={<span className="text-muted-foreground/50">/</span>}
  size="${globalSize}"
  label="Custom Separator"
/>`}
        >
          <div className="w-full max-w-sm flex flex-col gap-6">
            <InputOTPPreset
              groups={[4]}
              size={globalSize}
              label={
                <span className="flex items-center justify-between">
                  <span>Enter PIN</span>
                  <a href="#" className="text-xs text-primary underline-offset-4 hover:underline">Forgot PIN?</a>
                </span>
              }
              description="Nhập số nhận dạng cá nhân gồm 4 chữ số của bạn để tiếp tục."
            />

            <InputOTPPreset
              groups={[2, 2, 2]}
              separator={<span className="text-muted-foreground/50">/</span>}
              size={globalSize}
              label="Custom Separator"
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
