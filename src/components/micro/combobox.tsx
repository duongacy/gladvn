/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (20 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 *
 * 🚨 CRITICAL RULE FOR AI:
 * When using <Combobox>, YOU MUST pass the `items` prop (an array of data).
 * Headless UI libraries rely on this prop to build a stable internal item registry.
 * If omitted, the library is forced to scan the DOM on every render to discover items,
 * which causes full list re-renders, layout recalculations, and severe "content jumping" bugs.
 * DO NOT rely purely on static children mapping for Base UI collection components.
 */
"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import * as React from "react";

import { InputGroupButton } from "../../components/micro/input-group";
import { ThemeWrapper } from "../../components/micro/theme-provider";
import { cn } from "../../lib/utils";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";

const ComboboxContext = React.createContext<{
  anchor: Element | null;
  setAnchor: (el: Element | null) => void;
}>({ anchor: null, setAnchor: () => {} });

function Combobox<Value = any, Multiple extends boolean | undefined = false>(
  props: ComboboxPrimitive.Root.Props<Value, Multiple>,
) {
  const [anchor, setAnchor] = React.useState<Element | null>(null);
  return (
    <ComboboxContext.Provider value={{ anchor, setAnchor }}>
      <ComboboxPrimitive.Root {...props} />
    </ComboboxContext.Provider>
  );
}

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("[&>svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" icon />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  );
}

function ComboboxInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

const ComboboxContent = React.forwardRef<
  HTMLDivElement,
  ComboboxPrimitive.Popup.Props &
    Pick<
      ComboboxPrimitive.Positioner.Props,
      "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
    >
>(({ className, side = "bottom", sideOffset = 4, align = "start", alignOffset = 0, anchor, ...props }, ref) => {
  const { anchor: contextAnchor } = React.useContext(ComboboxContext);
  return (
    <ComboboxPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      anchor={anchor || contextAnchor}
      className="isolate z-50"
    >
      <ComboboxPrimitive.Popup
        ref={ref}
        data-slot="combobox-content"
        data-chips={!!anchor}
        className={cn(
          "group/combobox-content relative max-h-(--available-height) min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 [&_[data-slot=input-group]]:mb-1 [&_[data-slot=input-group]]:w-full [&_[data-slot=input-group]]:border-input/30 [&_[data-slot=input-group]]:bg-input/30 [&_[data-slot=input-group]]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
        {...props}
      />
    </ComboboxPrimitive.Positioner>
  );
});
ComboboxContent.displayName = "ComboboxContent";

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "no-scrollbar max-h-[min(calc(--spacing(72)-(--spacing(9))),calc(var(--available-height)-(--spacing(9))))] scroll-py-1 overflow-y-auto overscroll-contain data-empty:hidden",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-md py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:[&>svg]:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  );
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("px-2 py-1.5 text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  );
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "hidden justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

const ComboboxPortal = ComboboxPrimitive.Portal;

import { cva, type VariantProps } from "class-variance-authority";

const comboboxChipsVariants = cva(
  "group/combobox-chips flex flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:focus-within:ring-3 has-aria-invalid:focus-within:ring-destructive/20 has-[[data-slot=combobox-chip]]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:focus-within:ring-destructive/40 has-disabled:opacity-50 has-disabled:cursor-not-allowed has-disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "chips-sm min-h-7 px-2 py-0.5 text-xs",
        md: "chips-md min-h-8 px-2.5 py-1 text-sm",
        lg: "chips-lg min-h-9 px-3 py-1.5 text-sm",
      },
    },
  },
);

function ComboboxChips({
  className,
  size = "md",
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props &
  VariantProps<typeof comboboxChipsVariants>) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(comboboxChipsVariants({ size }), className)}
      {...props}
    />
  );
}

function ComboboxChip<T = any>({
  className,
  children,
  showRemove = true,
  ...props
}: Omit<ComboboxPrimitive.Chip.Props, "value"> & {
  value: T;
  showRemove?: boolean;
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
        "h-5 text-xs",
        "group-[.chips-sm]/combobox-chips:h-4 group-[.chips-sm]/combobox-chips:text-[10px]",
        "group-[.chips-lg]/combobox-chips:h-6 group-[.chips-lg]/combobox-chips:text-sm",
        className,
      )}
      {...(props as ComboboxPrimitive.Chip.Props & { value: any })}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          className="-ml-1 flex size-4 items-center justify-center rounded-sm opacity-50 transition-opacity outline-none hover:opacity-100 hover:bg-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pointer-events-none size-3" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn(
        "min-w-16 flex-1 outline-none bg-transparent disabled:opacity-100 disabled:cursor-not-allowed disabled:pointer-events-none",
        "h-5",
        "group-[.chips-sm]/combobox-chips:h-4",
        "group-[.chips-lg]/combobox-chips:h-6",
        className,
      )}
      {...props}
    />
  );
}

function useComboboxContext() {
  const context = React.useContext(ComboboxContext);
  if (!context) {
    throw new Error("useComboboxContext must be used within a Combobox");
  }
  return context;
}

const ComboboxAnchor = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  const { setAnchor } = useComboboxContext();
  return (
    <div
      ref={(node) => {
        setAnchor(node);
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      data-slot="combobox-anchor"
      className={className}
      {...props}
    />
  );
});
ComboboxAnchor.displayName = "ComboboxAnchor";

export {
  Combobox,
  ComboboxAnchor,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxPortal,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxContext,
};
