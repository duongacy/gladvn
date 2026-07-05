"use client";

import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input, InputProps } from "@/components/micro/input";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
  InputGroupButton
} from "@/components/micro/input-group";
import { FieldPreset } from "./field-preset";

export type InputPresetProps = Omit<InputProps, "className"> & {
  className?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  showError?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export const InputPreset = React.forwardRef<HTMLInputElement, InputPresetProps>(
  (
    {
      label,
      description,
      errorMessage,
      showError = true,
      className,
      size,
      id,
      startAdornment,
      endAdornment,
      type,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const isInvalid = !!errorMessage;
    
    // Auto password toggle logic
    const isPasswordType = type === "password";
    const [showPassword, setShowPassword] = useState(false);
    const actualType = isPasswordType ? (showPassword ? "text" : "password") : type;

    const passwordToggleAdornment = isPasswordType ? (
      <InputGroupButton
        type="button"
        variant="ghost"
        color="muted"
        size="icon"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Hide password" : "Show password"}
        aria-pressed={showPassword}
        className="size-6 text-muted-foreground hover:text-foreground"
      >
        {showPassword ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
      </InputGroupButton>
    ) : null;

    const combinedEndAdornment = endAdornment || passwordToggleAdornment ? (
      <>
        {endAdornment && (
          typeof endAdornment === "string" ? <InputGroupText>{endAdornment}</InputGroupText> : endAdornment
        )}
        {passwordToggleAdornment}
      </>
    ) : null;

    const hasAdornments = !!startAdornment || !!combinedEndAdornment;

    return (
      <FieldPreset
        label={label}
        description={description}
        errorMessage={errorMessage}
        showError={showError}
        className={className}
        size={size}
        htmlFor={inputId}
      >
        {hasAdornments ? (
          <InputGroup size={size}>
            {startAdornment && (
              <InputGroupAddon align="inline-start">
                {typeof startAdornment === "string" ? (
                  <InputGroupText>{startAdornment}</InputGroupText>
                ) : (
                  startAdornment
                )}
              </InputGroupAddon>
            )}
            <InputGroupInput
              ref={ref}
              id={inputId}
              size={size}
              aria-invalid={isInvalid}
              type={actualType}
              {...props}
            />
            {combinedEndAdornment && (
              <InputGroupAddon align="inline-end">
                {combinedEndAdornment}
              </InputGroupAddon>
            )}
          </InputGroup>
        ) : (
          <Input
            ref={ref}
            id={inputId}
            size={size}
            type={actualType}
            aria-invalid={isInvalid}
            {...props}
          />
        )}
      </FieldPreset>
    );
  },
);

InputPreset.displayName = "InputPreset";
