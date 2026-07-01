import * as React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export interface RadioGroupOption {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupPresetProps
  extends React.ComponentProps<typeof RadioGroup> {
  options: RadioGroupOption[];
  orientation?: "vertical" | "horizontal";
}

export function RadioGroupPreset({
  options,
  orientation = "vertical",
  className,
  ...props
}: RadioGroupPresetProps) {
  return (
    <RadioGroup
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col space-y-2" : "flex-row space-x-4",
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-start space-x-3">
          <RadioGroupItem
            value={option.value}
            id={option.value}
            disabled={option.disabled}
            className="mt-1"
          />
          <div className="flex flex-col space-y-1">
            <Label
              htmlFor={option.value}
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
  );
}
