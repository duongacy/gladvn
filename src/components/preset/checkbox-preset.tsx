import * as React from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox as UICheckbox, CheckboxIndicator } from "@/components/ui/checkbox";

export function CheckboxPreset(props: React.ComponentProps<typeof UICheckbox>) {
  return (
    <UICheckbox {...props}>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </UICheckbox>
  );
}
