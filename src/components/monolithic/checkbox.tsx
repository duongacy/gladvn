import * as React from "react";
import { CheckIcon } from "lucide-react";
import { Checkbox as UICheckbox, CheckboxIndicator } from "../ui/checkbox";

export function Checkbox(props: React.ComponentProps<typeof UICheckbox>) {
  return (
    <UICheckbox {...props}>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </UICheckbox>
  );
}
