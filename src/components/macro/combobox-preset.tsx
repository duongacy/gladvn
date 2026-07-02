import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/micro/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/micro/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/micro/popover";
import { FieldPreset } from "./field-preset";
import { useControllableState } from "@/hooks/use-controllable-state";

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
}

const ComboboxPreset = React.forwardRef<
  React.ElementRef<typeof Button>,
  ComboboxPresetProps
>(({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  emptyText = "No results found.",
  className,
  disabled,
  label,
  description,
  errorMessage,
  showError = true,
}, ref) => {
  const [open, setOpen] = React.useState(false);
  
  const [currentValue = "", setCurrentValue] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const handleSelect = (selectedValue: string) => {
    const newValue = selectedValue === currentValue ? "" : selectedValue;
    setCurrentValue(newValue);
    setOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === currentValue);

  return (
    <FieldPreset label={label} description={description} errorMessage={errorMessage} showError={showError} className={className} orientation="vertical">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              ref={ref}
              variant="outline"
              role="combobox"
              aria-expanded={open}
              aria-invalid={!!errorMessage || undefined}
              className={cn("w-full justify-between")}
              disabled={disabled}
            >
              {selectedOption ? selectedOption.label : placeholder}
              <ChevronsUpDownIcon className="opacity-50" />
            </Button>
          }
        />
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    onSelect={handleSelect}
                  >
                    <CheckIcon
                      className={cn(
                        "opacity-0 transition-opacity",
                        currentValue === option.value && "opacity-100"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FieldPreset>
  );
});
ComboboxPreset.displayName = "ComboboxPreset";

export { ComboboxPreset };
