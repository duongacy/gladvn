"use client";

import * as React from "react";
import { type Size } from "@/lib/types";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogMedia,
} from "@/components/micro/alert-dialog";
import { cn } from "@/lib/utils";

type AlertDialogPresetProps = React.ComponentProps<typeof AlertDialog> & {
  trigger?: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancel?: React.ReactNode;
  action?: React.ReactNode;
  size?: Size;
};

const AlertDialogPreset = React.forwardRef<
  React.ElementRef<typeof AlertDialog>,
  AlertDialogPresetProps
>(
  (
    {
      trigger,
      icon,
      title,
      description,
      cancel,
      action,
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <AlertDialog {...props}>
        {trigger && <AlertDialogTrigger render={trigger} />}
        <AlertDialogContent size={size} ref={ref as any}>
          <div
            className={cn(
              "flex flex-col",
              icon ? "sm:flex-row sm:gap-4" : "gap-1.5",
            )}
          >
            {icon && (
              <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
                {icon}
              </AlertDialogMedia>
            )}
            <AlertDialogHeader>
              {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
              {description && (
                <AlertDialogDescription>{description}</AlertDialogDescription>
              )}
              {children}
            </AlertDialogHeader>
          </div>
          {(cancel || action) && (
            <AlertDialogFooter
              className={cn(
                size === "sm" && "grid grid-cols-2 gap-2 sm:flex sm:justify-end",
              )}
            >
              {cancel}
              {action}
            </AlertDialogFooter>
          )}
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);

AlertDialogPreset.displayName = "AlertDialogPreset";

export { AlertDialogPreset };
