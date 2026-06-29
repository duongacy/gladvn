import * as React from "react";
import {
  Progress as UIProgress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "../ui/progress";

export interface ProgressProps extends React.ComponentProps<typeof UIProgress> {
  label?: React.ReactNode;
  showValue?: boolean;
}

export function Progress({
  children,
  label,
  showValue = true,
  ...props
}: ProgressProps) {
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
