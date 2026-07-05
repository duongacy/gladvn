import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/micro/input-otp";
import { Field, FieldLabel, FieldDescription, FieldContent } from "@/components/micro/field";
import { SelectPreset } from "@/components/macro/select-preset";

export default function InputOTPShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input OTP"
        description="Thành phần mật khẩu một lần có thể truy cập được với chức năng sao chép và dán."
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
          label="Standard"
          description="Mã xác minh tiêu chuẩn gồm 6 chữ số."
        >
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-otp-0">Verification Code</FieldLabel>
            <FieldDescription>
              Enter the 6-digit code sent to your phone number.
            </FieldDescription>
            <FieldContent>
              <InputOTP id="tf-otp-0" size={globalSize} maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FieldContent>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Separated Format"
          description="OTP có dấu phân cách trực quan."
        >
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-otp-1">Security Key</FieldLabel>
            <FieldDescription>
              Enter your two-factor recovery key.
            </FieldDescription>
            <FieldContent>
              <InputOTP id="tf-otp-1" size={globalSize} maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FieldContent>
          </Field>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
