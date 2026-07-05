import * as React from "react";
import { Switch, SwitchThumb } from "@/components/micro/switch";
import { FieldPreset } from "./field-preset";

export type SwitchPresetProps = Omit<React.ComponentProps<typeof Switch>, "className"> & {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
};

const SwitchPreset = React.forwardRef<
  React.ComponentRef<typeof Switch>,
  SwitchPresetProps
>(({ label, description, errorMessage, showError = true, className, id, size = "md", ...switchProps }, ref) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <FieldPreset size={size} label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation="horizontal" htmlFor={inputId}>
      <Switch ref={ref} id={inputId} aria-invalid={!!errorMessage} size={size} {...switchProps}>
        <SwitchThumb />
      </Switch>
    </FieldPreset>
  );
});
SwitchPreset.displayName = "SwitchPreset";

export { SwitchPreset };
