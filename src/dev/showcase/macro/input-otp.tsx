import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { InputOTPPreset } from "@/components/macro/input-otp-preset";

export default function MacroInputOTPShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input OTP (Macro)"
        description="Một thành phần cài sẵn bao gồm OTP đầu vào, Trường, Nhãn và Mô tả."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="OTP đầu vào cơ bản có nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <InputOTPPreset
              maxLength={6}
              size={globalSize}
              label="Verification Code"
              description="Vui lòng nhập mã xác minh được gửi tới điện thoại của bạn."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <InputOTPPreset
              maxLength={6}
              size={globalSize}
              label="Code (Invalid)"
              errorMessage="The code you entered is incorrect."
            />
            
            <InputOTPPreset
              maxLength={6}
              size={globalSize}
              label="Code (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Đầu vào OTP không tương tác.">
          <div className="w-full max-w-sm">
            <InputOTPPreset
              maxLength={6}
              size={globalSize}
              label="Recovery Code"
              description="Bạn không thể nhập mã vào lúc này."
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Thường được sử dụng với nhãn tùy chỉnh và độ dài cụ thể.">
          <div className="w-full max-w-sm">
            <InputOTPPreset
              maxLength={4}
              size={globalSize}
              label={
                <span className="flex items-center justify-between">
                  <span>Enter PIN</span>
                  <a href="#" className="text-xs text-primary underline-offset-4 hover:underline">Forgot PIN?</a>
                </span>
              }
              description="Nhập số nhận dạng cá nhân gồm 4 chữ số của bạn để tiếp tục."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
