import * as React from "react";
import { Switch as UISwitch, SwitchThumb } from "@/components/ui/switch";

export function SwitchPreset(props: React.ComponentProps<typeof UISwitch>) {
  return (
    <UISwitch {...props}>
      <SwitchThumb />
    </UISwitch>
  );
}
