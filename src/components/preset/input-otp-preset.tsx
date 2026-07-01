import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export type InputOTPPresetProps = Omit<
  React.ComponentProps<typeof InputOTP>,
  "children" | "render"
> & {
  maxLength: number;
};

export function InputOTPPreset({ maxLength, ...props }: InputOTPPresetProps) {
  return (
    <InputOTP maxLength={maxLength} {...props}>
      <InputOTPGroup>
        {Array.from({ length: maxLength }).map((_, index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}
