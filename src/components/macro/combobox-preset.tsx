"use client";

import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  useComboboxContext,
} from "../../components/micro/combobox";
import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../components/micro/input-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "../../components/micro/field";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

export interface ComboboxOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface ComboboxPresetBaseProps {
  options: ComboboxOption[];
  defaultValue?: string;
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
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
}

type ComboboxPresetSingleProps = ComboboxPresetBaseProps & {
  multiple?: false;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
};

type ComboboxPresetMultipleProps = ComboboxPresetBaseProps & {
  multiple: true;
  value?: string[];
  onValueChange?: (value: string[]) => void;
};

export type ComboboxPresetProps =
  | ComboboxPresetSingleProps
  | ComboboxPresetMultipleProps;

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
      size = "md",
      multiple,
      inputValue,
      onInputValueChange,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const descriptionId = description ? `${inputId}-description` : undefined;
    const errorId = errorMessage ? `${inputId}-error` : undefined;

    const ariaDescribedBy =
      [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <Field
        className={className}
        error={!!errorMessage}
        size={size}
        orientation="vertical"
      >
        {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
        <FieldContent>
          <Combobox
            items={options}
            filter={null}
            itemToStringLabel={(val) =>
              options.find((o) => o.value === val)?.label ??
              (typeof val === "string" ? val : String(val ?? ""))
            }
            value={value as never}
            defaultValue={defaultValue as never}
            onValueChange={onValueChange as never}
            disabled={disabled}
            multiple={multiple as never}
            inputValue={inputValue}
            onInputValueChange={onInputValueChange}
          >
            <ComboboxPresetInner
              ref={ref}
              inputId={inputId}
              size={size}
              placeholder={placeholder || searchPlaceholder}
              ariaInvalid={!!errorMessage || undefined}
              ariaDescribedBy={ariaDescribedBy}
              disabled={disabled}
              multiple={!!multiple}
              options={options}
              value={value}
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
        </FieldContent>
        {description && (
          <FieldDescription id={descriptionId}>
            {description}
          </FieldDescription>
        )}
        {showError && errorMessage && (
          <FieldError id={errorId}>{errorMessage}</FieldError>
        )}
      </Field>
    );
  },
);
ComboboxPreset.displayName = "ComboboxPreset";

export { ComboboxPreset };

const ComboboxPresetInner = React.forwardRef<
  HTMLInputElement,
  {
    inputId: string;
    size: Size;
    placeholder?: string;
    ariaInvalid?: boolean;
    ariaDescribedBy?: string;
    disabled?: boolean;
    multiple: boolean;
    options: ComboboxOption[];
    value?: string | string[] | null;
  }
>(
  (
    {
      inputId,
      size,
      placeholder,
      ariaInvalid,
      ariaDescribedBy,
      disabled,
      multiple,
      options,
      value,
    },
    ref,
  ) => {
    const { setAnchor } = useComboboxContext();

    if (multiple) {
      return (
        <ComboboxChips
          ref={(node: HTMLDivElement | null) => {
            setAnchor(node);
            if (typeof ref === "function") ref(null);
            else if (ref) ref.current = null;
          }}
          size={size}
          className="w-full"
        >
          <ComboboxPrimitive.Value>
            {(values: string[]) => (
              <React.Fragment>
                {(values ?? []).map((v) => {
                  const opt = options.find((o) => o.value === v);
                  return (
                    <ComboboxChip
                      key={v}
                      value={v}
                      removeLabel={`Remove ${opt?.label ?? v}`}
                    >
                      {opt?.label ?? v}
                    </ComboboxChip>
                  );
                })}
                <ComboboxChipsInput
                  id={inputId}
                  placeholder={(values ?? []).length > 0 ? "" : placeholder}
                  aria-invalid={ariaInvalid}
                  aria-describedby={ariaDescribedBy}
                  disabled={disabled}
                />
              </React.Fragment>
            )}
          </ComboboxPrimitive.Value>
        </ComboboxChips>
      );
    }

    const inputGroupSizeClasses: Record<Size, string> = {
      sm: "h-7",
      md: "h-8",
      lg: "h-9",
    };

    return (
      <InputGroup
        ref={setAnchor}
        size={size}
        className={cn("w-full", inputGroupSizeClasses[size])}
      >
        <ComboboxPrimitive.Input
          ref={ref}
          id={inputId}
          placeholder={placeholder}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedBy}
          render={<InputGroupInput disabled={disabled} />}
        />
        <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
          {/*
            ComboboxClear exposes data-visible when it has a value to clear.
            We use group-has-[[data-slot=combobox-clear][data-visible]] to hide Chevron
            when Clear is visible — no manual hasValue tracking needed.
          */}
          <ComboboxTrigger
            className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden"
            disabled={disabled}
          />
          <ComboboxClear disabled={disabled} />
        </InputGroupAddon>
      </InputGroup>
    );
  },
);
ComboboxPresetInner.displayName = "ComboboxPresetInner";

