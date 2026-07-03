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
        description="A preset component that encapsulates Input OTP, Field, Label, and Description."
      />

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Basic Input OTP with label and description.">
          <div className="w-full max-w-sm">
            <InputOTPPreset
              maxLength={6}
              size={globalSize}
              label="Verification Code"
              description="Please enter the verification code sent to your phone."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Demonstrates errorMessage and showError props.">
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
              description="Error text is hidden using showError={false}"
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="A non-interactive OTP input.">
          <div className="w-full max-w-sm">
            <InputOTPPreset
              maxLength={6}
              size={globalSize}
              label="Recovery Code"
              description="You cannot enter a code at this time."
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Often used with custom labels and specific lengths.">
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
              description="Enter your 4-digit personal identification number to proceed."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
