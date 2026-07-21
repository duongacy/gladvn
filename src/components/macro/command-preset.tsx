"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/micro/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "../../components/micro/dialog";
import { ThemeWrapper } from "../../components/micro/theme-provider";
import { cn } from "../../lib/utils";
import * as React from "react";

type CommandDialogProps = Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogPortal>
        <ThemeWrapper>
          <DialogContent
            className={cn(
              "top-1/3 translate-y-0 overflow-hidden rounded-xl p-0",
              className,
            )}
          >
            <DialogHeader className="sr-only">
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {children}
          </DialogContent>
        </ThemeWrapper>
      </DialogPortal>
    </Dialog>
  );
}
CommandDialog.displayName = "CommandDialog";

export {
  CommandDialog,
  // Re-export primitives for convenience
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
export type { CommandDialogProps };
