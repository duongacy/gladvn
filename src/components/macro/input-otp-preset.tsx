/**
 * ✅ STABLE
 * - Full Utilization of Micro Components
 * - Custom Layout & Groups
 * - Form Control Integration
 */
import * as React from "react";

import { MinusIcon } from "lucide-react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/micro/input-otp";
import { FieldPreset } from "./field-preset";

export type InputOTPPresetProps = Omit<
  React.ComponentProps<typeof InputOTP>,
  "children" | "render" | "maxLength"
> & {
  groups: number[];
  separator?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
};

const InputOTPPreset = React.forwardRef<
  React.ComponentRef<typeof InputOTP>,
  InputOTPPresetProps
>(
  (
    {
      groups,
      separator = <MinusIcon aria-hidden="true" />,
      label,
      description,
      errorMessage,
      showError = true,
      className,
      id,
      size = "md",
      ...inputOtpProps
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const totalLength = groups.reduce((a, b) => a + b, 0);

    return (
      <FieldPreset
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        size={size!}
        orientation="vertical"
        htmlFor={inputId}
      >
        <InputOTP
          ref={ref}
          id={inputId}
          size={size}
          maxLength={totalLength}
          aria-invalid={!!errorMessage || undefined}
          {...inputOtpProps}
        >
          {groups.map((groupLength, groupIndex) => (
            <React.Fragment key={`${inputId}-g-${groupIndex}`}>
              {groupIndex > 0 && (
                <InputOTPSeparator>{separator}</InputOTPSeparator>
              )}
              <InputOTPGroup>
                {Array.from({ length: groupLength }).map((_, index) => {
                  const slotIndex =
                    groups.slice(0, groupIndex).reduce((a, b) => a + b, 0) +
                    index;
                  return (
                    <InputOTPSlot
                      key={`${inputId}-slot-${slotIndex}`}
                      index={slotIndex}
                    />
                  );
                })}
              </InputOTPGroup>
            </React.Fragment>
          ))}
        </InputOTP>
      </FieldPreset>
    );
  },
);
InputOTPPreset.displayName = "InputOTPPreset";

export { InputOTPPreset };
