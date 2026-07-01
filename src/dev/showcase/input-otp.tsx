import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function InputOTPShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input OTP"
        description="Accessible one-time password component with copy paste functionality."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Standard"
          description="Standard 6-digit verification code."
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
          description="OTP with visual separator."
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
