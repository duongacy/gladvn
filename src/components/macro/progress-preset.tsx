import * as React from "react";
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/components/micro/progress";

export type ProgressPresetProps = Omit<React.ComponentProps<typeof Progress>, "value"> & {
  value?: number;
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
  value,
  ...progressProps
}, ref) => {
  const resolvedValue = value ?? null;

  if (children) {
    return <Progress ref={ref} value={resolvedValue} {...progressProps}>{children}</Progress>;
  }

  return (
    <Progress ref={ref} value={resolvedValue} {...progressProps}>
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
