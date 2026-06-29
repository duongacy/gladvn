import * as React from "react";
import { Switch as UISwitch, SwitchThumb } from "../ui/switch";

export function Switch(props: React.ComponentProps<typeof UISwitch>) {
  return (
    <UISwitch {...props}>
      <SwitchThumb />
    </UISwitch>
  );
}
