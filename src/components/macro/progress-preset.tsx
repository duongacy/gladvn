import * as React from "react";
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/components/micro/progress";

export type ProgressPresetProps = React.ComponentProps<typeof Progress> & {
  label?: React.ReactNode;
  showValue?: boolean;
};

const ProgressPreset = React.forwardRef<
  React.ElementRef<typeof Progress>,
  ProgressPresetProps
>(({
  children,
  label,
  showValue = true,
  ...progressProps
}, ref) => {
  if (children) {
    return <Progress ref={ref} {...progressProps}>{children}</Progress>;
  }

  return (
    <Progress ref={ref} {...progressProps}>
      {label && <ProgressLabel>{label}</ProgressLabel>}
      {label && showValue && <ProgressValue />}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  );
});
ProgressPreset.displayName = "ProgressPreset";

export { ProgressPreset };
