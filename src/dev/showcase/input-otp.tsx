import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, MonoSelect, Field, FieldLabel, FieldDescription, FieldContent } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function InputOTPShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Input OTP" description="Accessible one-time password component with copy paste functionality.">
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Standard 6-digit verification code.">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-otp-0">Verification Code</FieldLabel>
            <FieldDescription>Enter the 6-digit code sent to your phone number.</FieldDescription>
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

        <ExampleSection label="Separated Format" description="OTP with visual separator.">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-otp-1">Security Key</FieldLabel>
            <FieldDescription>Enter your two-factor recovery key.</FieldDescription>
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
