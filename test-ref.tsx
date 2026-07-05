import * as React from "react";
import { DayPicker } from "react-day-picker";

export function Test() {
  const ref = React.useRef<HTMLDivElement>(null);
  return <DayPicker ref={ref} />;
}
