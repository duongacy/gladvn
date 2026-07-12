/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircleIcon } from "lucide-react";
import * as React from "react";

import { Label } from "../../components/micro/label";
import { Separator } from "../../components/micro/separator";
import { cn } from "../../lib/utils";

const FieldSet = React.forwardRef<
  HTMLFieldSetElement,
  React.ComponentProps<"fieldset">
>(({ className, ...props }, ref) => {
  return (
    <fieldset
      ref={ref}
      data-slot="field-set"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
});
FieldSet.displayName = "FieldSet";

const FieldLegend = React.forwardRef<
  HTMLLegendElement,
  React.ComponentProps<"legend"> & { variant?: "legend" | "label" }
>(({ className, variant = "legend", ...props }, ref) => {
  return (
    <legend
      ref={ref}
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className,
      )}
      {...props}
    />
  );
});
FieldLegend.displayName = "FieldLegend";

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-group"
      className={cn(
        "group/field-group flex flex-col gap-5 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className,
      )}
      {...props}
    />
  );
});
FieldGroup.displayName = "FieldGroup";

const fieldVariants = cva("group/field flex min-w-fit", {
  variants: {
    orientation: {
      vertical: "flex-col [&>.sr-only]:w-auto",
      horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto",
      // Responsive: vertical on mobile, horizontal on @md breakpoint.
      responsive:
        "flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>[data-slot=field-label]]:flex-auto [&>.sr-only]:w-auto",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { orientation: "vertical", size: "sm", className: "gap-0.5" },
    { orientation: "vertical", size: "md", className: "gap-0.5" },
    { orientation: "vertical", size: "lg", className: "gap-0.5" },

    { orientation: "horizontal", size: "sm", className: "gap-1" },
    { orientation: "horizontal", size: "md", className: "gap-1.5" },
    { orientation: "horizontal", size: "lg", className: "gap-2" },

    {
      orientation: "responsive",
      size: "sm",
      className: "gap-0.5 @md/field-group:gap-1",
    },
    {
      orientation: "responsive",
      size: "md",
      className: "gap-0.5 @md/field-group:gap-1.5",
    },
    {
      orientation: "responsive",
      size: "lg",
      className: "gap-0.5 @md/field-group:gap-2",
    },
  ],
});

const Field = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
  VariantProps<typeof fieldVariants> & { error?: boolean | string }
>(
  (
    { className, orientation = "vertical", size = "md", error, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        data-slot="field"
        data-orientation={orientation}
        data-size={size}
        data-invalid={!!error}
        className={cn(fieldVariants({ orientation, size }), className)}
        {...props}
      />
    );
  },
);
Field.displayName = "Field";

const FieldContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
        className,
      )}
      {...props}
    />
  );
});
FieldContent.displayName = "FieldContent";

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentProps<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "text-sm group-data-[size=sm]/field:text-xs",
        className,
      )}
      {...props}
    />
  );
});
FieldLabel.displayName = "FieldLabel";

const FieldTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-title"
      className={cn(
        "flex w-fit items-center gap-2 font-medium group-data-[disabled=true]/field:opacity-50",
        "text-sm group-data-[size=sm]/field:text-xs",
        className,
      )}
      {...props}
    />
  );
});
FieldTitle.displayName = "FieldTitle";

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      data-slot="field-description"
      className={cn(
        // Pull up when after a legend variant; balance text when inside horizontal Field
        "text-left leading-normal font-normal text-muted-foreground group-data-[orientation=horizontal]/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
        // Tighten gap: no margin when last child, pull up when second-to-last (before FieldError)
        "last:mt-0 nth-last-2:-mt-1",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        "text-sm group-data-[size=sm]/field:text-xs",
        className,
      )}
      {...props}
    />
  );
});
FieldDescription.displayName = "FieldDescription";

const FieldSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { children?: React.ReactNode }
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className,
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
});
FieldSeparator.displayName = "FieldSeparator";

const FieldError = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    errors?: Array<{ message?: string } | undefined>;
  }
>(({ className, children, errors, ...props }, ref) => {
  const content = React.useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      ref={ref}
      role="alert"
      data-slot="field-error"
      className={cn(
        "text-sm font-medium text-destructive flex items-start gap-1.5 animate-in fade-in-0 slide-in-from-top-1",
        className,
      )}
      {...props}
    >
      <AlertCircleIcon className="size-4 shrink-0 mt-0.5" />
      <div className="flex-1">{content}</div>
    </div>
  );
});
FieldError.displayName = "FieldError";

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
