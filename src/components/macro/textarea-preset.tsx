import React from "react";
import { Textarea, TextareaProps } from "@/components/micro/textarea";
import { FieldPreset } from "./field-preset";

export type TextareaPresetProps = Omit<TextareaProps, "className"> & {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
};

export const TextareaPreset = React.forwardRef<
  HTMLTextAreaElement,
  TextareaPresetProps
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
        <Textarea
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

TextareaPreset.displayName = "TextareaPreset";
