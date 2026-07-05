import * as React from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  FieldError,
} from "@/components/micro/field";
import { type Size } from "@/lib/types";

export type FieldPresetProps = Omit<React.ComponentProps<typeof Field>, "error"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
  size?: Size;
};

const FieldPreset = React.forwardRef<
  React.ComponentRef<typeof Field>,
  FieldPresetProps
>(({ label, description, errorMessage, showError = true, htmlFor, children, className, size, ...fieldProps }, ref) => {
  return (
    <Field ref={ref} className={className} error={!!errorMessage} size={size} {...fieldProps}>
      {label && <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>}
      <FieldContent>{children}</FieldContent>
      {description && <FieldDescription>{description}</FieldDescription>}
      {showError && errorMessage && <FieldError>{errorMessage}</FieldError>}
    </Field>
  );
});
FieldPreset.displayName = "FieldPreset";

export { FieldPreset };
