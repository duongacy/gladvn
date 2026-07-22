import * as React from "react";

import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
} from "../../components/micro/slider";
import { FieldPreset } from "./field-preset";

export type SliderPresetProps = Omit<
  React.ComponentProps<typeof Slider>,
  "className"
> & {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
};

const SliderPreset = React.forwardRef<
  React.ComponentRef<typeof Slider>,
  SliderPresetProps
>(
  (
    {
      defaultValue,
      value,
      min = 0,
      max = 100,
      label,
      description,
      errorMessage,
      showError = true,
      className,
      id,
      ...sliderProps
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const _values = (() => {
      if (Array.isArray(value)) return value;
      if (Array.isArray(defaultValue)) return defaultValue;
      return [min];
    })();

    return (
      <FieldPreset
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        orientation="vertical"
        htmlFor={inputId}
      >
        <Slider
          ref={ref}
          id={inputId}
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          aria-invalid={!!errorMessage}
          {...sliderProps}
        >
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
            </SliderTrack>
            {Array.from({ length: _values.length }, (_, index) => (
              <SliderThumb key={`${inputId}-thumb-${index}`} />
            ))}
          </SliderControl>
        </Slider>
      </FieldPreset>
    );
  },
);
SliderPreset.displayName = "SliderPreset";

export { SliderPreset };
