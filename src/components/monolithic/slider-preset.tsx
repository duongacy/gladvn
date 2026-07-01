import * as React from "react";
import {
  Slider as UISlider,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
} from "@/components/ui/slider";

export function SliderPreset({
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof UISlider>) {
  const _values = (() => {
    if (Array.isArray(value)) return value;
    if (Array.isArray(defaultValue)) return defaultValue;
    return [min, max];
  })();

  return (
    <UISlider
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      {...props}
    >
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
        </SliderTrack>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderThumb key={index} />
        ))}
      </SliderControl>
    </UISlider>
  );
}
