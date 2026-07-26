"use client";

import * as React from "react";

import { XIcon } from "lucide-react";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  type AlertProps,
  AlertTitle
} from "../../components/micro/alert";
import { Button } from "../../components/micro/button";
import { cn } from "../../lib/utils";

export type AlertPresetProps = AlertProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactElement;
  action?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  defaultOpen?: boolean;
};

const AlertPreset = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  (
    {
      title,
      description,
      icon,
      action,
      dismissible = false,
      onDismiss,
      defaultOpen = true,
      children,
      color = "info",
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    if (!isOpen) return null;

    const handleDismiss = () => {
      setIsOpen(false);
      onDismiss?.();
    };

    return (
      <Alert
        ref={ref}
        color={color}
        className={cn(
          "flex w-full flex-col gap-3 @sm/alert:flex-row @sm/alert:items-start",
          {
            "pr-8 data-[size=sm]:pr-7 data-[size=lg]:pr-10": dismissible,
          },
          className,
        )}
        {...props}
      >
        <div className="flex flex-1 items-start gap-3">
          {icon && <AlertIcon render={icon} className="mt-0.5 shrink-0" />}
          <div className="flex-1 space-y-0.5">
            {title && <AlertTitle>{title}</AlertTitle>}
            {description && <AlertDescription>{description}</AlertDescription>}
            {children}
          </div>
        </div>
        {action && (
          <AlertAction className="shrink-0 @sm/alert:ml-4">
            {action}
          </AlertAction>
        )}
        {dismissible && (
          <Button
            variant="ghost"
            color={color as React.ComponentProps<typeof Button>["color"]}
            size="sm"
            className="absolute right-1 top-1 p-0 size-6 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7"
            onClick={handleDismiss}
            aria-label="Dismiss alert"
            iconOnly
          >
            <XIcon className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
          </Button>
        )}
      </Alert>
    );
  },
);

AlertPreset.displayName = "AlertPreset";

export { AlertPreset };
