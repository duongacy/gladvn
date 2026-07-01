import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  selectTriggerVariants,
} from "@/components/ui/select";

interface SelectPresetOption {
  value: string;
  label: string;
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
  size?: VariantProps<typeof selectTriggerVariants>["size"];
  /** Mark as invalid. */
  invalid?: boolean;
  /** Disable the select. */
  disabled?: boolean;
  /** Additional className for the trigger. */
  className?: string;
}

/**
 * SelectPreset — A monolithic select for simple use cases.
 * Wraps the composition-based Select parts into a single component
 * driven by an `options` prop. Supports flat and grouped options.
 *
 * @example
 * ```tsx
 * <SelectPreset
 *   placeholder="Pick a framework..."
 *   options={[
 *     { value: "next", label: "Next.js" },
 *     { value: "vite", label: "Vite" },
 *   ]}
 * />
 * ```
 */
function SelectPreset({
  options,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  size,
  invalid,
  disabled,
  className,
}: SelectPresetProps) {
  return (
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
      items={Object.fromEntries(options.map((opt) => [opt.value, opt.label]))}
    >
      <SelectTrigger
        className={className}
        size={size}
        aria-invalid={invalid || undefined}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {(() => {
          const groups = new Map<string | undefined, SelectPresetOption[]>();
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
  );
}

export { SelectPreset };
export type { SelectPresetProps, SelectPresetOption };
