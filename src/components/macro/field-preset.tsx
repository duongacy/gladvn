import * as React from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  FieldError,
} from "@/components/micro/field";

export interface FieldPresetProps extends Omit<React.ComponentProps<typeof Field>, "error"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  children: React.ReactNode;
}

const FieldPreset = React.forwardRef<
  React.ElementRef<typeof Field>,
  FieldPresetProps
>(({ label, description, errorMessage, showError = true, children, className, ...fieldProps }, ref) => {
  return (
    <Field ref={ref} className={className} error={!!errorMessage} {...fieldProps}>
      {label && <FieldLabel>{label}</FieldLabel>}
      <FieldContent>{children}</FieldContent>
      {description && <FieldDescription>{description}</FieldDescription>}
      {showError && errorMessage && <FieldError>{errorMessage}</FieldError>}
    </Field>
  );
});
FieldPreset.displayName = "FieldPreset";

export { FieldPreset };
