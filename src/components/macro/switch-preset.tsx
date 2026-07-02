import * as React from "react";
import { Switch, SwitchThumb } from "@/components/micro/switch";
import { FieldPreset } from "./field-preset";

export interface SwitchPresetProps extends Omit<React.ComponentProps<typeof Switch>, "className"> {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
}

const SwitchPreset = React.forwardRef<
  React.ElementRef<typeof Switch>,
  SwitchPresetProps
>(({ label, description, errorMessage, showError = true, className, ...switchProps }, ref) => {
  return (
    <FieldPreset label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation="horizontal">
      <Switch ref={ref} aria-invalid={!!errorMessage} {...switchProps}>
        <SwitchThumb />
      </Switch>
    </FieldPreset>
  );
});
SwitchPreset.displayName = "SwitchPreset";

export { SwitchPreset };
