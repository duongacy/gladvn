import * as React from "react";
import {
  Progress as UIProgress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

export interface ProgressPresetProps extends React.ComponentProps<typeof UIProgress> {
  label?: React.ReactNode;
  showValue?: boolean;
}

export function ProgressPreset({
  children,
  label,
  showValue = true,
  ...props
}: ProgressPresetProps) {
  if (children) {
    return <UIProgress {...props}>{children}</UIProgress>;
  }

  return (
    <UIProgress {...props}>
      {label && <ProgressLabel>{label}</ProgressLabel>}
      {label && showValue && <ProgressValue />}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </UIProgress>
  );
}
