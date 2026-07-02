import * as React from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox, CheckboxIndicator } from "@/components/micro/checkbox";
import { FieldPreset } from "./field-preset";

export interface CheckboxPresetProps extends Omit<React.ComponentProps<typeof Checkbox>, "className"> {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
}

const CheckboxPreset = React.forwardRef<
  React.ElementRef<typeof Checkbox>,
  CheckboxPresetProps
>(({ label, description, errorMessage, showError = true, className, ...checkboxProps }, ref) => {
  return (
    <FieldPreset label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation="horizontal">
      <Checkbox ref={ref} aria-invalid={!!errorMessage} {...checkboxProps}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
    </FieldPreset>
  );
});
CheckboxPreset.displayName = "CheckboxPreset";

export { CheckboxPreset };
