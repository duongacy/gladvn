"use client";

import { Button } from "../../components/micro/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/micro/dialog";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";
import { XIcon } from "lucide-react";
import * as React from "react";

type DialogPresetProps = Omit<
  React.ComponentProps<typeof Dialog>,
  "children"
> & {
  children?: React.ReactNode;
  trigger?: React.ReactElement;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  size?: Size;
  showCloseButton?: boolean;
};

const DialogPreset = React.forwardRef<HTMLDivElement, DialogPresetProps>(
  (
    {
      trigger,
      title,
      description,
      footer,
      size = "md",
      showCloseButton = true,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Dialog {...props}>
        {trigger && <DialogTrigger render={trigger} />}
        <DialogContent
          ref={ref}
          className={cn(
            size === "sm" && "sm:max-w-md",
            size === "md" && "sm:max-w-lg",
            size === "lg" && "sm:max-w-xl",
            "flex flex-col gap-0 p-0 overflow-hidden",
          )}
        >
          {(title || description) && (
            <DialogHeader className="shrink-0 p-4 pb-0">
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          )}

          <div className="flex-1 min-h-0 overflow-y-auto p-4">{children}</div>

          {footer && (
            <DialogFooter className="shrink-0 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
              {footer}
            </DialogFooter>
          )}

          {showCloseButton && (
            <DialogClose
              render={
                <Button
                  variant="ghost"
                  className="absolute top-2 right-2"
                  size="sm"
                  iconOnly
                />
              }
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogClose>
          )}
        </DialogContent>
      </Dialog>
    );
  },
);

DialogPreset.displayName = "DialogPreset";

export { DialogPreset };
export type { DialogPresetProps };
