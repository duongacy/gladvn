/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { OTPInput, OTPInputContext } from "input-otp";
import * as React from "react";

import { cn } from "@/lib/utils";

const inputOTPVariants = cva(
  "cn-input-otp group/otp inline-flex items-center has-disabled:opacity-50 has-disabled:cursor-not-allowed has-disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "min-h-7 text-xs",
        md: "min-h-8 text-sm",
        lg: "min-h-9 text-sm",
      },
    },
    defaultVariants: { size: "md" },
  },
);

type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  DistributiveOmit<React.ComponentProps<typeof OTPInput>, "size"> &
    VariantProps<typeof inputOTPVariants> & {
      containerClassName?: string;
    }
>(({ className, containerClassName, size = "md", ...props }, ref) => {
  return (
    <div
      data-slot="input-otp"
      data-size={size}
      className={cn(inputOTPVariants({ size }))}
    >
      <OTPInput
        {...(ref ? { ref } : {})}
        containerClassName={cn("flex items-center", containerClassName)}
        spellCheck={false}
        className={cn(
          "disabled:cursor-not-allowed disabled:opacity-100",
          className,
        )}
        {...(props as React.ComponentProps<typeof OTPInput>)}
      />
    </div>
  );
});
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="input-otp-group"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
});
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      data-active={isActive ? "" : undefined}
      className={cn(
        "relative flex size-8 group-data-[size=sm]/otp:size-7 group-data-[size=lg]/otp:size-9 items-center justify-center border border-input rounded-lg bg-transparent transition-colors outline-none",
        "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
        "data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/50 data-active:ring-offset-1 data-active:ring-offset-background",
        "data-active:aria-invalid:border-destructive data-active:aria-invalid:ring-3 data-active:aria-invalid:ring-destructive/50",
        "dark:bg-input/30 dark:data-active:aria-invalid:ring-destructive/50",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="input-otp-separator"
      className={cn(
        "flex items-center text-muted-foreground [&>svg:not([class*='size-'])]:size-4 group-data-[size=sm]/otp:[&>svg:not([class*='size-'])]:size-3.5",
        className,
      )}
      role="separator"
      {...props}
    >
      {children}
    </div>
  );
});
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
