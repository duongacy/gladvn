"use client";

import * as React from "react";
import { type Size, type Color, type Variant } from "@/lib/types";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogMedia,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/micro/alert-dialog";
import { cn } from "@/lib/utils";

type AlertDialogPresetProps = Omit<
  React.ComponentProps<typeof AlertDialog>,
  "children"
> & {
  children?: React.ReactNode;
  trigger?: React.ReactElement;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  cancelColor?: Color;
  cancelVariant?: Variant;
  actionLabel?: React.ReactNode;
  actionColor?: Color;
  actionVariant?: Variant;
  onAction?: () => void;
  onCancel?: () => void;
  size?: Size;
};

function AlertDialogPreset({
  trigger,
  icon,
  title,
  description,
  cancelLabel,
  cancelColor,
  cancelVariant,
  actionLabel,
  actionColor,
  actionVariant,
  onAction,
  onCancel,
  size = "md",
  children,
  ...props
}: AlertDialogPresetProps) {
  return (
    <AlertDialog {...props}>
      {trigger && <AlertDialogTrigger render={trigger} />}
      <AlertDialogContent size={size}>
        <div
          className={cn(
            "flex flex-col gap-1.5",
            { "sm:flex-row sm:gap-4": !!icon },
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
        {(cancelLabel || actionLabel) && (
          <AlertDialogFooter
            className="group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 group-data-[size=sm]/alert-dialog-content:sm:flex group-data-[size=sm]/alert-dialog-content:sm:justify-end"
          >
            {cancelLabel && (
              <AlertDialogCancel
                size={size}
                color={cancelColor}
                variant={cancelVariant}
                onClick={onCancel}
              >
                {cancelLabel}
              </AlertDialogCancel>
            )}
            {actionLabel && (
              <AlertDialogAction
                size={size}
                color={actionColor}
                variant={actionVariant}
                onClick={onAction}
              >
                {actionLabel}
              </AlertDialogAction>
            )}
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

AlertDialogPreset.displayName = "AlertDialogPreset";

export { AlertDialogPreset };
export type { AlertDialogPresetProps };
