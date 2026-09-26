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
  CommandShortcut,
} from "../../components/micro/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/micro/dialog";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CommandPresetItem {
  /** Unique identifier — also used as the value passed to onSelect */
  value: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
}

export interface CommandPresetGroup {
  heading?: string;
  items: CommandPresetItem[];
}

export interface CommandPresetProps {
  groups: CommandPresetGroup[];
  placeholder?: string;
  emptyText?: string;
  size?: Size;
  className?: string;
  onSelect?: (value: string) => void;
}

// ---------------------------------------------------------------------------
// CommandPreset (data-driven Macro)
// ---------------------------------------------------------------------------

function CommandPreset({
  groups,
  placeholder = "Search commands...",
  emptyText = "No results found.",
  size = "md",
  className,
  onSelect,
}: CommandPresetProps) {
  return (
    <Command
      size={size}
      className={cn(
        "border border-border rounded-xl shadow-sm overflow-hidden bg-background",
        className,
      )}
    >
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>{emptyText}</CommandEmpty>
        {groups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {groupIndex > 0 && <CommandSeparator />}
            <CommandGroup heading={group.heading}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  onSelect={onSelect}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.shortcut && (
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </React.Fragment>
        ))}
      </CommandList>
    </Command>
  );
}
CommandPreset.displayName = "CommandPreset";

// ---------------------------------------------------------------------------
// CommandDialog (Macro — wraps Dialog + Command for Cmd+K palette UX)
// ---------------------------------------------------------------------------

type CommandDialogProps = Omit<
  React.ComponentProps<typeof Dialog>,
  "children"
> & {
  title?: string;
  description?: string;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  size,
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
        <Command size={size}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}
CommandDialog.displayName = "CommandDialog";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPreset,
  CommandSeparator,
  CommandShortcut,
};
export type { CommandDialogProps };
