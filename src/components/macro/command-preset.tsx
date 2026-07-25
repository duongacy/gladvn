"use client";

import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "../../components/micro/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,

  DialogTitle
} from "../../components/micro/dialog";
import { cn } from "../../lib/utils";

type CommandDialogProps = Omit<
  React.ComponentProps<typeof Dialog>,
  "children"
> & {
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
      
        <DialogContent
          className={cn(
            "top-1/3 translate-y-0 overflow-hidden rounded-xl p-0 sm:max-w-lg",
            className,
          )}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      
    </Dialog>
  );
}
CommandDialog.displayName = "CommandDialog";

export {
  // Re-export primitives for convenience
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
};
export type { CommandDialogProps };
