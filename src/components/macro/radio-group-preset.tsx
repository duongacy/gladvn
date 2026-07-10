import { Label } from "@/components/micro/label";
import { RadioGroup, RadioGroupItem } from "@/components/micro/radio-group";
import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";
import * as React from "react";
import { FieldPreset } from "./field-preset";

export interface RadioGroupOption {
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}

export type RadioGroupPresetProps = Omit<
  React.ComponentProps<typeof RadioGroup>,
  "className"
> & {
  className?: string;
  options: RadioGroupOption[];
  orientation?: "vertical" | "horizontal";
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  size?: Size;
};

const RadioGroupPreset = React.forwardRef<
  React.ComponentRef<typeof RadioGroup>,
  RadioGroupPresetProps
>(
  (
    {
      options,
      orientation = "vertical",
      label,
      description,
      errorMessage,
      showError = true,
      className,
      id,
      size = "md",
      ...radioGroupProps
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const textSizeClass = cn({
      "text-xs": size === "sm",
      "text-sm": size === "md",
      "text-base": size === "lg",
    });

    return (
      <FieldPreset
        size={size}
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        htmlFor={inputId}
      >
        <RadioGroup
          ref={ref}
          id={inputId}
          className={cn("flex", {
            "flex-col gap-2": orientation === "vertical",
            "flex-row gap-4 flex-wrap": orientation !== "vertical",
          })}
          aria-invalid={!!errorMessage}
          {...radioGroupProps}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-start gap-3">
              <div
                className={cn("flex items-center leading-snug", textSizeClass)}
              >
                &#8203;
                <RadioGroupItem
                  value={option.value}
                  id={`${inputId}-${option.value}`}
                  disabled={option.disabled}
                  size={size}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label
                  htmlFor={`${inputId}-${option.value}`}
                  className={cn(
                    "font-normal cursor-pointer leading-snug",
                    textSizeClass,
                    { "opacity-50 cursor-not-allowed": option.disabled },
                  )}
                >
                  {option.label}
                </Label>
                {option.description && (
                  <p className={cn("text-muted-foreground", textSizeClass)}>
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </RadioGroup>
      </FieldPreset>
    );
  },
);
RadioGroupPreset.displayName = "RadioGroupPreset";

export { RadioGroupPreset };
