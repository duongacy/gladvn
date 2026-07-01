import * as React from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldContent,
  FieldError,
} from "@/components/ui/field";

export interface FieldPresetProps extends React.ComponentProps<typeof Field> {
  label: React.ReactNode;
  description?: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

export function FieldPreset({
  label,
  description,
  error,
  children,
  ...props
}: FieldPresetProps) {
  return (
    <Field {...props} error={error}>
      <FieldLabel>{label}</FieldLabel>
      <FieldContent>{children}</FieldContent>
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
