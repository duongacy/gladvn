"use client";

import * as React from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { type VariantProps, cva } from "class-variance-authority";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";


import { cn } from "../../lib/utils";
import { type Size } from "../../lib/types";
import { ThemeWrapper } from "./theme-provider";

const ComboboxContext = React.createContext<{
  anchor: HTMLElement | null;
  setAnchor: (el: HTMLElement | null) => void;
}>({
  anchor: null,
  setAnchor: () => { },
});

function Combobox<Value = unknown, Multiple extends boolean | undefined = false>({
  items,
  itemToStringLabel,
  ...props
}: ComboboxPrimitive.Root.Props<Value, Multiple>) {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);
  const ctxValue = React.useMemo(() => ({ anchor, setAnchor }), [anchor]);

  const resolvedItemToStringLabel = React.useMemo(() => {
    if (itemToStringLabel !== undefined) return itemToStringLabel;
    if (!items) return undefined;
    return (val: Value) => {
      if (val == null) return "";
      if (typeof val === "object") {
        if ("label" in (val as Record<string, unknown>) && (val as Record<string, unknown>).label != null) {
          return String((val as Record<string, unknown>).label);
        }
        if ("value" in (val as Record<string, unknown>) && (val as Record<string, unknown>).value != null) {
          return String((val as Record<string, unknown>).value);
        }
      }
      if (Array.isArray(items)) {
        const flat = (items as unknown[]).flatMap((item) =>
          item && typeof item === "object" && "items" in item && Array.isArray((item as Record<string, unknown>).items)
            ? ((item as Record<string, unknown>).items as unknown[])
            : item
        );
        const match = flat.find((item) =>
          item && typeof item === "object"
            ? (item as Record<string, unknown>).value === val || (item as Record<string, unknown>).id === val
            : item === val
        );
        if (match && typeof match === "object" && "label" in match && (match as Record<string, unknown>).label != null) {
          return String((match as Record<string, unknown>).label);
        }
      } else if (typeof items === "object" && items !== null) {
        const map = items as unknown as Record<string, unknown>;
        if (map[String(val)] != null) {
          return String(map[String(val)]);
        }
      }
      return String(val ?? "");
    };
  }, [items, itemToStringLabel]);

  return (
    <ComboboxContext.Provider value={ctxValue}>
      <ComboboxPrimitive.Root
        items={items}
        itemToStringLabel={resolvedItemToStringLabel}
        {...props}
      />
    </ComboboxContext.Provider>
  );
}

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

export type ComboboxTriggerProps = ComboboxPrimitive.Trigger.Props & {
  size?: Size;
};

const comboboxTriggerSizes: Record<Size, string> = {
  sm: "h-7 gap-1 px-2 py-0.5 text-xs",
  md: "h-8 gap-1.5 px-2.5 py-1 text-sm",
  lg: "h-9 gap-2 px-3 py-1.5 text-sm",
};

function ComboboxTrigger({
  className,
  children,
  size = "md",
  ...props
}: ComboboxTriggerProps) {
  const isStandalone = children !== undefined;

  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        isStandalone
          ? cn(
            "inline-flex w-full items-center justify-between rounded-lg border border-input bg-transparent text-foreground whitespace-nowrap transition-colors outline-none select-none hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive dark:bg-input/30 [:where(&>svg)]:pointer-events-none [:where(&>svg)]:shrink-0 [:where(&>svg)]:size-4 [&_[data-slot=combobox-value]]:line-clamp-1 [&_[data-slot=combobox-value]]:flex [&_[data-slot=combobox-value]]:items-center data-placeholder:text-muted-foreground",
            comboboxTriggerSizes[size],
          )
          : cn(
            "flex shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50 [:where(&>svg)]:size-4",
            "size-6.5 group-data-[size=sm]/input-group:size-5.5 group-data-[size=sm]/input-group:[&>svg]:size-3.5 group-data-[size=md]/input-group:size-6.5 group-data-[size=lg]/input-group:size-7",
          ),
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon aria-hidden="true" focusable="false" className="pointer-events-none size-4" />
    </ComboboxPrimitive.Trigger>
  );
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-sm text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [:where(&>svg)]:size-4",
        "size-6.5 group-data-[size=sm]/input-group:size-5.5 group-data-[size=sm]/input-group:[&>svg]:size-3.5 group-data-[size=md]/input-group:size-6.5 group-data-[size=lg]/input-group:size-7",
        className,
      )}
      {...props}
    >
      <XIcon aria-hidden="true" focusable="false" className="pointer-events-none size-4" />
    </ComboboxPrimitive.Clear>
  );
}

export type ComboboxInputProps = Omit<ComboboxPrimitive.Input.Props, "size"> & {
  size?: Size;
};

const comboboxInputSizes: Record<Size, string> = {
  sm: "h-7 px-2 py-0.5 text-xs",
  md: "h-8 px-2.5 py-1 text-sm",
  lg: "h-9 px-3 py-1.5 text-sm",
};

function ComboboxInput({ className, size = "md", ...props }: ComboboxInputProps) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "flex w-full rounded-md border border-input bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        comboboxInputSizes[size],
        "group-data-[slot=input-group]/input-group:border-0",
        "group-data-[slot=input-group]/input-group:shadow-none",
        "group-data-[slot=input-group]/input-group:h-auto",
        "group-data-[slot=input-group]/input-group:rounded-none",
        "group-data-[slot=input-group]/input-group:focus-visible:ring-0",
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
  > & {
    container?: React.ComponentProps<typeof ComboboxPrimitive.Portal>["container"];
  }
>(
  (
    {
      className,
      side = "bottom",
      sideOffset = 4,
      align = "start",
      alignOffset = 0,
      anchor,
      container,
      ...props
    },
    ref,
  ) => {
    const { anchor: contextAnchor } = React.useContext(ComboboxContext);
    return (
      <ComboboxPrimitive.Portal container={container}>
        <ThemeWrapper>
          <ComboboxPrimitive.Positioner
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            anchor={anchor ?? contextAnchor}
            className="isolate z-50"
          >
            <ComboboxPrimitive.Popup
              ref={ref}
              data-slot="combobox-content"
              className={cn(
                "group/combobox-content relative max-h-(--available-height) w-(--anchor-width) min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
                className,
              )}
              {...props}
            />
          </ComboboxPrimitive.Positioner>
        </ThemeWrapper>
      </ComboboxPrimitive.Portal>
    );
  },
);
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
        "relative flex w-full cursor-default items-center gap-2 rounded-md py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:[&>svg]:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [:where(&>svg)]:pointer-events-none [:where(&>svg)]:shrink-0 [:where(&>svg)]:size-4",
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
        <CheckIcon aria-hidden="true" focusable="false" className="pointer-events-none" />
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

const comboboxChipsVariants = cva(
  "group/combobox-chips flex flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:focus-within:ring-3 has-aria-invalid:focus-within:ring-destructive/20 has-[[data-slot=combobox-chip]]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:focus-within:ring-destructive/40 has-disabled:opacity-50 has-disabled:cursor-not-allowed has-disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "chips-sm min-h-7 px-2 py-0.5 text-xs",
        md: "chips-md min-h-8 px-2.5 py-1 text-sm",
        lg: "chips-lg min-h-9 px-3 py-1 text-sm",
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

function ComboboxChip<T = unknown>({
  className,
  children,
  showRemove = true,
  removeLabel,
  value,
  ...props
}: Omit<ComboboxPrimitive.Chip.Props, "value"> & {
  value?: T;
  showRemove?: boolean;
  removeLabel?: string;
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
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          aria-label={removeLabel ?? (value !== undefined ? `Remove ${String(value)}` : "Remove")}
          className="-ml-1 flex size-4 items-center justify-center rounded-sm opacity-50 transition-opacity outline-none hover:opacity-100 hover:bg-foreground/10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
          data-slot="combobox-chip-remove"
        >
          <XIcon aria-hidden="true" focusable="false" className="pointer-events-none size-3" />
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
  if (context.setAnchor === undefined) {
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
        else if (ref) (ref as React.RefObject<HTMLDivElement | null>).current = node;
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
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxContext
};
