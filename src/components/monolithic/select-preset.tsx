import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectPresetProps extends React.ComponentProps<typeof Select> {
  options: SelectOption[];
  placeholder?: string;
  className?: string; // Add className for the trigger
}

export function SelectPreset({
  options,
  placeholder,
  className,
  ...props
}: SelectPresetProps) {
  return (
    <Select {...props}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
