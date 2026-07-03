import React from "react";
import { Input, InputProps } from "@/components/micro/input";
import { FieldPreset } from "./field-preset";

export interface InputPresetProps extends Omit<InputProps, "className"> {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
}

export const InputPreset = React.forwardRef<HTMLInputElement, InputPresetProps>(
  (
    {
      label,
      description,
      errorMessage,
      showError,
      className,
      size,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <FieldPreset
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        size={size}
        htmlFor={inputId}
      >
        <Input ref={ref} id={inputId} size={size} aria-invalid={!!errorMessage} {...props} />
      </FieldPreset>
    );
  },
);

InputPreset.displayName = "InputPreset";
