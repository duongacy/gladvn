import * as React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/micro/combobox";
import { FieldPreset } from "./field-preset";

export interface ComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ComboboxPresetProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  id?: string;
  size?: "sm" | "md" | "lg";
}

const ComboboxPreset = React.forwardRef<
  HTMLInputElement,
  ComboboxPresetProps
>(({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select an option",
  searchPlaceholder,
  emptyText = "No results found.",
  className,
  disabled,
  label,
  description,
  errorMessage,
  showError = true,
  id,
  size = "md",
}, ref) => {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const itemValues = React.useMemo(() => options.map((o) => o.value), [options]);

  return (
    <FieldPreset label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation="vertical" htmlFor={inputId}>
      <Combobox
        items={itemValues}
        value={value}
        defaultValue={defaultValue}
        onValueChange={
          onValueChange &&
          ((v: string | null) => {
            if (v !== null) onValueChange(v);
          })
        }
        disabled={disabled}
      >
        <ComboboxInput
          ref={ref}
          id={inputId}
          size={size}
          placeholder={placeholder || searchPlaceholder}
          aria-invalid={!!errorMessage || undefined}
          className="w-full"
        />
        <ComboboxContent>
          <ComboboxEmpty>{emptyText}</ComboboxEmpty>
          <ComboboxList>
            <ComboboxGroup>
              {options.map((option) => (
                <ComboboxItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </FieldPreset>
  );
});
ComboboxPreset.displayName = "ComboboxPreset";

export { ComboboxPreset };
