import * as React from "react";
import { Label } from "@/components/micro/label";
import { RadioGroup, RadioGroupItem } from "@/components/micro/radio-group";
import { FieldPreset } from "./field-preset";
import { cn } from "@/lib/utils";

export interface RadioGroupOption {
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupPresetProps extends Omit<React.ComponentProps<typeof RadioGroup>, "className"> {
  className?: string;
  options: RadioGroupOption[];
  orientation?: "vertical" | "horizontal";
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
}

const RadioGroupPreset = React.forwardRef<
  React.ElementRef<typeof RadioGroup>,
  RadioGroupPresetProps
>(({
  options,
  orientation = "vertical",
  label,
  description,
  errorMessage,
  showError = true,
  className,
  id,
  ...radioGroupProps
}, ref) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <FieldPreset label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation={orientation} htmlFor={inputId}>
      <RadioGroup
        ref={ref}
        id={inputId}
        className={cn(
          "flex",
          { "flex-col gap-2": orientation === "vertical", "flex-row gap-4 flex-wrap": orientation !== "vertical" },
        )}
        aria-invalid={!!errorMessage}
        {...radioGroupProps}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-start gap-3">
            <RadioGroupItem
              value={option.value}
              id={`${inputId}-${option.value}`}
              disabled={option.disabled}
              className="mt-1"
            />
            <div className="flex flex-col gap-1">
              <Label
                htmlFor={`${inputId}-${option.value}`}
                className={cn(
                  "font-normal cursor-pointer",
                  option.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {option.label}
              </Label>
              {option.description && (
                <p className="text-sm text-muted-foreground">{option.description}</p>
              )}
            </div>
          </div>
        ))}
      </RadioGroup>
    </FieldPreset>
  );
});
RadioGroupPreset.displayName = "RadioGroupPreset";

export { RadioGroupPreset };
