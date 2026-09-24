/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - Zero-Specificity Contextual Sizing Architecture
 * - Defensive Context Pattern
 */
"use client";

import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Defensive Context
// ---------------------------------------------------------------------------

const InputOTPContext = React.createContext(false);

function useInputOTPContext(componentName: string) {
  const isInsideInputOTP = React.useContext(InputOTPContext);
  if (!isInsideInputOTP && process.env.NODE_ENV !== "production") {
    console.warn(
      `[gladvn] <${componentName}> phải được dùng bên trong <InputOTP>.`,
    );
  }
}

// ---------------------------------------------------------------------------
// InputOTP Root
// ---------------------------------------------------------------------------

const inputOTPVariants = cva(
  // ⚠️ ZERO-SPECIFICITY TRAP: Removed group/otp and text-xs/text-sm.
  // Children define their own text size via :where() selectors.
  // min-h is structural (on root only), safe to keep.
  "cn-input-otp inline-flex items-center has-disabled:opacity-50 has-disabled:cursor-not-allowed has-disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "min-h-7",
        md: "min-h-8",
        lg: "min-h-9",
      },
    },
  },
);

type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  DistributiveOmit<React.ComponentProps<typeof OTPInput>, "size" | "children"> &
    VariantProps<typeof inputOTPVariants> & {
      containerClassName?: string;
      children?: React.ReactNode;
    }
>((
  { className, containerClassName, size = "md", children, ...props },
  ref,
) => {
  // `children` is already separated from `props` in the signature above.
  // Passing `render` + `{...props}` (which has no `children`) satisfies
  // OTPInputProps's discriminated union: { render } | { children }.
  return (
    <InputOTPContext.Provider value={true}>
      <div
        data-slot="otp"
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
          render={() => <>{children}</>}
          {...props}
        />
      </div>
    </InputOTPContext.Provider>
  );
});
InputOTP.displayName = "InputOTP";

// ---------------------------------------------------------------------------
// InputOTPGroup
// ---------------------------------------------------------------------------

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  useInputOTPContext("InputOTPGroup");
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

// ---------------------------------------------------------------------------
// InputOTPSlot
// ---------------------------------------------------------------------------

const InputOTPSlot = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  useInputOTPContext("InputOTPSlot");
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots?.[index] ?? {};

  return (
    <div
      ref={ref}
      data-slot="input-otp-slot"
      data-active={isActive ? "" : undefined}
      className={cn(
        // ⚠️ ZERO-SPECIFICITY TRAP: Removed hardcoded size-8 from base.
        // All size classes moved to :where() selectors below.
        "relative flex items-center justify-center border border-input rounded-lg bg-transparent transition-colors outline-none",
        "aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
        "data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/50 data-active:ring-offset-1 data-active:ring-offset-background",
        "data-active:aria-invalid:border-destructive data-active:aria-invalid:ring-3 data-active:aria-invalid:ring-destructive/50",
        "dark:bg-input/30 dark:data-active:aria-invalid:ring-destructive/50",
        // ── Contextual Sizing (specificity = 0) ──────────────────────────
        "[:where([data-slot=otp][data-size=sm]_&)]:size-7",
        "[:where([data-slot=otp][data-size=md]_&)]:size-8",
        "[:where([data-slot=otp][data-size=lg]_&)]:size-9",
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

// ---------------------------------------------------------------------------
// InputOTPSeparator
// ---------------------------------------------------------------------------

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
  useInputOTPContext("InputOTPSeparator");
  return (
    <div
      ref={ref}
      data-slot="input-otp-separator"
      className={cn(
        "flex items-center text-muted-foreground",
        // Icon sizing via :where() — overrideable by consumer
        "[:where([data-slot=otp][data-size=sm]_&>svg)]:size-3.5",
        "[:where([data-slot=otp][data-size=md]_&>svg)]:size-4",
        "[:where([data-slot=otp][data-size=lg]_&>svg)]:size-4",
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
