"use client";

import * as React from "react";

import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  
  ComboboxTrigger,
  useComboboxContext } from "../../components/micro/combobox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput } from "../../components/micro/input-group";
import { type Size } from "../../lib/types";
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
  onValueChange?: (value: string | null) => void;
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
  size?: Size;
}

const ComboboxPreset = React.forwardRef<HTMLInputElement, ComboboxPresetProps>(
  (
    {
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
      size = "md" },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const itemValues = React.useMemo(
      () => options.map((o) => o.value),
      [options],
    );
    const hasValue = value !== undefined ? !!value : !!defaultValue;

    return (
      <FieldPreset
        size={size}
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        orientation="vertical"
        htmlFor={inputId}
      >
        <Combobox
          items={itemValues}
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
        >
          <ComboboxPresetInner
            ref={ref}
            inputId={inputId}
            size={size}
            placeholder={placeholder || searchPlaceholder}
            aria-invalid={!!errorMessage || undefined}
            disabled={disabled}
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
  },
);
ComboboxPreset.displayName = "ComboboxPreset";

export { ComboboxPreset };

const ComboboxPresetInner = React.forwardRef<
  HTMLInputElement,
  {
    inputId: string;
    size: "sm" | "md" | "lg";
    placeholder?: string;
    "aria-invalid"?: boolean;
    disabled?: boolean;
  }
>(
  (
    { inputId, size, placeholder, "aria-invalid": ariaInvalid, disabled },
    ref,
  ) => {
    const { setAnchor } = useComboboxContext();

    return (
      <div className="@container/input-group w-full">
        <InputGroup ref={setAnchor} size={size} className="w-full">
          <ComboboxInput
            ref={ref}
            id={inputId}
            placeholder={placeholder}
            aria-invalid={ariaInvalid}
            render={<InputGroupInput disabled={disabled} />}
          />
          <InputGroupAddon align="end">
            <ComboboxTrigger
              className="flex h-full cursor-default items-center justify-center px-2.5 outline-none group-has-data-[slot=combobox-clear]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50"
              disabled={disabled}
            />
            <ComboboxClear disabled={disabled} />
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
);
ComboboxPresetInner.displayName = "ComboboxPresetInner";
