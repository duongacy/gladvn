"use client";

import * as React from "react";

import { CheckIcon } from "lucide-react";

import { Checkbox, CheckboxIndicator } from "../../components/micro/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

export type CheckboxPresetProps = Omit<
  React.ComponentProps<typeof Checkbox>,
  "className" | "size"
> & {
  // Forward className to the outermost wrapper (FieldPreset) instead of the Checkbox primitive
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  size?: Size;
};

const CheckboxPreset = React.forwardRef<
  React.ComponentRef<typeof Checkbox>,
  CheckboxPresetProps
>(
  (
    {
      label,
      description,
      errorMessage,
      showError = true,
      className,
      id,
      size = "md",
      ...checkboxProps
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <Field
        className={cn("flex flex-row items-start gap-3", className)}
        data-size={size}
      >
        {/* Zero-width space hack to perfectly align the Checkbox with the first line of the Label */}
        <div className="flex items-center text-sm leading-snug group-data-[size=sm]/field:text-xs group-data-[size=lg]/field:text-base">
          &#8203;
          <Checkbox
            ref={ref}
            id={inputId}
            aria-invalid={!!errorMessage}
            size={size}
            {...checkboxProps}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>
        </div>
        <div className="grid gap-1.5 leading-none">
          {label && (
            <FieldLabel
              htmlFor={inputId}
              className="font-medium cursor-pointer"
            >
              {label}
            </FieldLabel>
          )}
          {description && <FieldDescription>{description}</FieldDescription>}
          {showError && errorMessage && <FieldError>{errorMessage}</FieldError>}
        </div>
      </Field>
    );
  },
);
CheckboxPreset.displayName = "CheckboxPreset";

export { CheckboxPreset };
