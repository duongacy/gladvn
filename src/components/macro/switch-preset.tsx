import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import { Switch, SwitchThumb } from "../../components/micro/switch";
import { cn } from "../../lib/utils";
import * as React from "react";

export type SwitchPresetProps = Omit<
  React.ComponentProps<typeof Switch>,
  "className"
> & {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
};

const SwitchPreset = React.forwardRef<
  React.ComponentRef<typeof Switch>,
  SwitchPresetProps
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
      ...switchProps
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <Field
        size={size}
        error={!!errorMessage}
        className={cn("gap-1.5", className)}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 space-y-0.5">
            {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
            {description && <FieldDescription>{description}</FieldDescription>}
          </div>
          <Switch
            ref={ref}
            id={inputId}
            aria-invalid={!!errorMessage}
            size={size}
            {...switchProps}
          >
            <SwitchThumb />
          </Switch>
        </div>
        {showError && errorMessage && <FieldError>{errorMessage}</FieldError>}
      </Field>
    );
  },
);
SwitchPreset.displayName = "SwitchPreset";

export { SwitchPreset };
