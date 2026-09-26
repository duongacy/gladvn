/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (32 Rules)
 * - WCAG AAA/AA
 * - CSS Delegated Logic (data-size CSS attribute selectors, no JS conditionals)
 * - Defensive context hook (presence check only, no size passing)
 * - Dialog-specific styles encapsulated inside CommandInput via [[data-slot=dialog-content]_&]
 * - Rule 7: Removed wildcard `*:` selectors from CommandItem, replaced with :where(&>svg)
 * - Rule 7: Icon (SearchIcon) now left-aligned via InputGroupAddon align="start"
 */
"use client";

import * as React from "react";

import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
} from "../../components/micro/input-group";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

// Context is kept for structural presence-check only (defensive hook).
// Size is no longer passed through context — it flows via data-size CSS attribute.
type CommandContextValue = Record<string, never>;

const CommandContext = React.createContext<CommandContextValue | null>(null);

function useCommandContext(): CommandContextValue {
  const context = React.useContext(CommandContext);
  if (!context) {
    console.warn(
      "[Command] useCommandContext must be used within a <Command> component.",
    );
    return {};
  }
  return context;
}

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    size?: Size;
  }
>(({ className, size = "md", ...props }, ref) => (
  <CommandContext.Provider value={{}}>
    <CommandPrimitive
      ref={ref}
      data-slot="command"
      data-size={size}
      className={cn(
        "group/command flex size-full flex-col overflow-hidden rounded-xl bg-popover text-popover-foreground",
        className,
      )}
      {...props}
    />
  </CommandContext.Provider>
));
Command.displayName = "Command";

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  useCommandContext();
  return (
    <div
      data-slot="command-input-wrapper"
      className={cn(
        // Base padding
        "p-2",
        // Size variants
        "group-data-[size=sm]/command:p-1",
        "group-data-[size=md]/command:p-2",
        "group-data-[size=lg]/command:p-3",
        // Dialog context: add bottom border separator
        "[[data-slot=dialog-content]_&]:border-b [[data-slot=dialog-content]_&]:border-border",
      )}
    >
      <InputGroup
        className={cn(
          // Base height
          "h-10 rounded-lg border-input/30 bg-input/30 shadow-none",
          // Size variants
          "group-data-[size=sm]/command:h-8",
          "group-data-[size=md]/command:h-10",
          "group-data-[size=lg]/command:h-11",
          // Dialog context: strip standalone styles
          "[[data-slot=dialog-content]_&]:border-none [[data-slot=dialog-content]_&]:bg-transparent [[data-slot=dialog-content]_&]:shadow-none",
        )}
      >
        {/* Icon LEFT-aligned — standard search UX convention */}
        <InputGroupAddon
          align="start"
          className={cn(
            "shrink-0 pr-2",
            "group-data-[size=sm]/command:pr-2",
            "group-data-[size=md]/command:pr-2",
            "group-data-[size=lg]/command:pr-3",
          )}
        >
          <SearchIcon
            aria-hidden="true"
            className={cn(
              "size-4 opacity-50",
              // Icon sizing via :where() — zero specificity, overrideable
              "[:where([data-slot=command][data-size=sm]_&)]:size-4",
              "[:where([data-slot=command][data-size=md]_&)]:size-4",
              "[:where([data-slot=command][data-size=lg]_&)]:size-5",
            )}
          />
        </InputGroupAddon>
        <CommandPrimitive.Input
          ref={ref}
          data-slot="input-group-control"
          className={cn(
            "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
            // Size variants
            "group-data-[size=sm]/command:text-sm",
            "group-data-[size=md]/command:text-sm",
            "group-data-[size=lg]/command:text-base",
            className,
          )}
          {...props}
        />
      </InputGroup>
    </div>
  );
});
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    data-slot="command-list"
    className={cn(
      "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
      className,
    )}
    {...props}
  />
));
CommandList.displayName = "CommandList";

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => {
  useCommandContext();
  return (
    <CommandPrimitive.Empty
      ref={ref}
      data-slot="command-empty"
      className={cn(
        "py-6 text-center text-sm",
        // Size variants
        "group-data-[size=sm]/command:py-4 group-data-[size=sm]/command:text-xs",
        "group-data-[size=md]/command:py-6 group-data-[size=md]/command:text-sm",
        "group-data-[size=lg]/command:py-8 group-data-[size=lg]/command:text-base",
        className,
      )}
      {...props}
    />
  );
});
CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => {
  useCommandContext();
  return (
    <CommandPrimitive.Group
      ref={ref}
      data-slot="command-group"
      className={cn(
        "overflow-hidden text-foreground",
        // cmdk exposes heading and items via its own DOM attributes — unavoidable
        "[&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        "[&_[cmdk-group-items]]:flex [&_[cmdk-group-items]]:flex-col",
        // Base (md)
        "p-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-items]]:gap-1",
        // sm
        "group-data-[size=sm]/command:p-1 group-data-[size=sm]/command:[&_[cmdk-group-heading]]:px-2 group-data-[size=sm]/command:[&_[cmdk-group-heading]]:py-1.5 group-data-[size=sm]/command:[&_[cmdk-group-heading]]:text-xs group-data-[size=sm]/command:[&_[cmdk-group-items]]:gap-0.5",
        // md
        "group-data-[size=md]/command:p-2 group-data-[size=md]/command:[&_[cmdk-group-heading]]:px-2 group-data-[size=md]/command:[&_[cmdk-group-heading]]:py-1.5 group-data-[size=md]/command:[&_[cmdk-group-heading]]:text-xs group-data-[size=md]/command:[&_[cmdk-group-items]]:gap-1",
        // lg
        "group-data-[size=lg]/command:p-3 group-data-[size=lg]/command:[&_[cmdk-group-heading]]:px-2 group-data-[size=lg]/command:[&_[cmdk-group-heading]]:py-2 group-data-[size=lg]/command:[&_[cmdk-group-heading]]:text-sm group-data-[size=lg]/command:[&_[cmdk-group-items]]:gap-1",
        className,
      )}
      {...props}
    />
  );
});
CommandGroup.displayName = "CommandGroup";

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    data-slot="command-separator"
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = "CommandSeparator";

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  useCommandContext();
  return (
    <CommandPrimitive.Item
      ref={ref}
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex cursor-default select-none items-center outline-hidden",
        // States
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground",
        "data-selected:bg-accent data-selected:text-accent-foreground",
        // Icon styling via :where() — zero specificity, overrideable by consumer
        // Rule 7 exception: querying SVGs directly is permitted for icon-hosting components
        "[:where(&>svg)]:pointer-events-none [:where(&>svg)]:shrink-0 [:where(&>svg)]:opacity-70",
        "data-selected:[:where(&>svg)]:opacity-100",
        "hover:[:where(&>svg)]:opacity-100",
        // Base (md)
        "gap-2 rounded-sm px-2 py-1.5 text-sm",
        "[:where(&>svg)]:size-4",
        // sm
        "group-data-[size=sm]/command:gap-1.5 group-data-[size=sm]/command:rounded-sm group-data-[size=sm]/command:px-2 group-data-[size=sm]/command:py-1 group-data-[size=sm]/command:text-xs",
        "[:where([data-slot=command][data-size=sm]_&>svg)]:size-3.5",
        // md
        "group-data-[size=md]/command:gap-2 group-data-[size=md]/command:rounded-sm group-data-[size=md]/command:px-2 group-data-[size=md]/command:py-1.5 group-data-[size=md]/command:text-sm",
        "[:where([data-slot=command][data-size=md]_&>svg)]:size-4",
        // lg
        "group-data-[size=lg]/command:gap-3 group-data-[size=lg]/command:rounded-md group-data-[size=lg]/command:px-3 group-data-[size=lg]/command:py-2.5 group-data-[size=lg]/command:text-base",
        "[:where([data-slot=command][data-size=lg]_&>svg)]:size-5",
        className,
      )}
      {...props}
    >
      {children}
    </CommandPrimitive.Item>
  );
});
CommandItem.displayName = "CommandItem";

const CommandShortcut = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="command-shortcut"
    className={cn(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      // cmdk uses data-selected attribute on the parent item
      "group-data-selected/command-item:text-foreground",
      className,
    )}
    {...props}
  />
));
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
