import React from "react";
import {
  NativeSelect,
  NativeSelectProps,
} from "@/components/micro/native-select";
import { FieldPreset } from "./field-preset";

export interface NativeSelectPresetProps
  extends Omit<NativeSelectProps, "className"> {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
}

export const NativeSelectPreset = React.forwardRef<
  HTMLSelectElement,
  NativeSelectPresetProps
>(
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
        <NativeSelect
          ref={ref}
          id={inputId}
          aria-invalid={!!errorMessage}
          size={size}
          {...props}
        />
      </FieldPreset>
    );
  },
);

NativeSelectPreset.displayName = "NativeSelectPreset";
