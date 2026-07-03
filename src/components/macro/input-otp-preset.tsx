import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/micro/input-otp";
import { FieldPreset } from "./field-preset";

export type InputOTPPresetProps = Omit<
  React.ComponentProps<typeof InputOTP>,
  "children" | "render"
> & {
  maxLength: number;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
};

const InputOTPPreset = React.forwardRef<
  React.ElementRef<typeof InputOTP>,
  InputOTPPresetProps
>(({ maxLength, label, description, errorMessage, showError = true, className, id, ...inputOtpProps }, ref) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <FieldPreset label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation="vertical" htmlFor={inputId}>
      <InputOTP ref={ref} id={inputId} maxLength={maxLength} aria-invalid={!!errorMessage || undefined} {...inputOtpProps}>
        <InputOTPGroup>
          {Array.from({ length: maxLength }).map((_, index) => (
            <InputOTPSlot key={`${inputId}-slot-${index}`} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </FieldPreset>
  );
});
InputOTPPreset.displayName = "InputOTPPreset";

export { InputOTPPreset };
