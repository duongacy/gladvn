import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/micro/select";
import { type Size } from "../../lib/types";
import * as React from "react";
import { FieldPreset } from "./field-preset";

interface SelectPresetOption {
  value: string;
  label: React.ReactNode;
  /** Optional label to display inside the dropdown menu (if different from the trigger label) */
  dropdownLabel?: React.ReactNode;
  disabled?: boolean;
  group?: string;
}

interface SelectPresetProps {
  /** Flat list of options. Use the `group` field to group items. */
  options: SelectPresetOption[];
  /** Placeholder text when no value is selected. */
  placeholder?: string;
  /** Controlled value. */
  value?: string;
  /** Uncontrolled default value. */
  defaultValue?: string;
  /** Called when the value changes. */
  onValueChange?: (value: string) => void;
  /** Trigger size variant. */
  size?: Size;
  /** Disable the select. */
  disabled?: boolean;
  /** Additional className for the FieldPreset wrapper. */
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  id?: string;
}

/**
 * SelectPreset — A monolithic select for simple use cases.
 * Wraps the composition-based Select parts into a single component
 * driven by an `options` prop. Supports flat and grouped options.
 */
const SelectPreset = React.forwardRef<
  React.ComponentRef<typeof SelectTrigger>,
  SelectPresetProps
>(
  (
    {
      options,
      placeholder,
      value,
      defaultValue,
      onValueChange,
      size,
      disabled,
      className,
      label,
      description,
      errorMessage,
      showError = true,
      id,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <FieldPreset
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        orientation="vertical"
        htmlFor={inputId}
        size={size}
      >
        <Select
          value={value}
          defaultValue={defaultValue}
          onValueChange={
            onValueChange &&
            ((v: string | null) => {
              if (v !== null) onValueChange(v);
            })
          }
          disabled={disabled}
          items={Object.fromEntries(
            options.map((opt) => [opt.value, opt.label]),
          )}
        >
          <SelectTrigger
            ref={ref}
            id={inputId}
            size={size}
            aria-invalid={!!errorMessage || undefined}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {(() => {
              const groups = new Map<
                string | undefined,
                SelectPresetOption[]
              >();
              options.forEach((opt) => {
                const key = opt.group;
                if (!groups.has(key)) {
                  groups.set(key, []);
                }
                groups.get(key)!.push(opt);
              });

              return Array.from(groups.entries()).map(([groupLabel, opts]) => {
                if (groupLabel) {
                  return (
                    <SelectGroup key={groupLabel}>
                      <SelectLabel>{groupLabel}</SelectLabel>
                      {opts.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          disabled={opt.disabled}
                        >
                          {opt.dropdownLabel || opt.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  );
                }
                // Items without a group
                return opts.map((opt) => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                  >
                    {opt.dropdownLabel || opt.label}
                  </SelectItem>
                ));
              });
            })()}
          </SelectContent>
        </Select>
      </FieldPreset>
    );
  },
);
SelectPreset.displayName = "SelectPreset";

export { SelectPreset };
export type { SelectPresetOption, SelectPresetProps };
