import * as React from "react";

import { cn } from "../../lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// 1. Sidebar (Wrapper)
// ─────────────────────────────────────────────────────────────────────────────
const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultState?: "expanded" | "collapsed";
    /** Width in pixels when expanded. Default: 256 (= w-64) */
    expandedWidth?: number;
    /** Width in pixels when collapsed. Default: 56 (= w-14) */
    collapsedWidth?: number;
  }
>(
  (
    {
      className,
      defaultState = "expanded",
      expandedWidth = 256,
      collapsedWidth = 72,
      ...props
    },
    ref,
  ) => {
    // will-change only during animation, not always-on
    const handleTransitionStart = (
      e: React.TransitionEvent<HTMLDivElement>,
    ) => {
      if (e.propertyName === "width")
        e.currentTarget.style.willChange = "width";
    };
    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName === "width") e.currentTarget.style.willChange = "auto";
    };

    return (
      // Outer: only this div animates width. No layout children to reflow.
      <div
        ref={ref}
        role="navigation"
        aria-expanded={defaultState === "expanded"}
        style={
          {
            "--sb-expanded": `${expandedWidth}px`,
            "--sb-collapsed": `${collapsedWidth}px`,
          } as React.CSSProperties
        }
        className={cn(
          "group shrink-0 h-full overflow-hidden border-r border-r-border bg-sidebar text-sidebar-foreground",
          "transition-[width,border-width] duration-[400ms]",
          "data-[state=expanded]:w-[var(--sb-expanded)]",
          "data-[state=collapsed]:w-[var(--sb-collapsed)]",
          collapsedWidth === 0 && "data-[state=collapsed]:border-r-0",
          className,
        )}
        data-state={defaultState}
        onTransitionStart={handleTransitionStart}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Inner: ALWAYS expandedWidth. Never relayouts. Clipped by outer overflow-hidden. */}
        <div
          className="flex h-full flex-col p-2"
          style={{ width: `${expandedWidth}px` }}
          {...props}
        />
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

// ─────────────────────────────────────────────────────────────────────────────
// 2. SidebarLogo
// ─────────────────────────────────────────────────────────────────────────────
const SidebarLogo = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    icon: React.ReactNode;
    text: React.ReactNode;
  }
>(({ className, icon, text, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-12 items-center overflow-hidden text-sidebar-foreground",
        className,
      )}
      {...props}
    >
      {/* Icon container width matches collapsed sidebar width — reads CSS var from parent */}
      <div
        className="flex shrink-0 items-center justify-center"
        style={{ width: "calc(var(--sb-collapsed) - 16px)" }}
      >
        {icon}
      </div>
      <span className="whitespace-nowrap font-semibold transition-opacity group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:duration-[80ms] group-data-[state=expanded]:duration-[200ms] group-data-[state=expanded]:delay-[300ms]">
        {text}
      </span>
    </div>
  );
});
SidebarLogo.displayName = "SidebarLogo";

// ─────────────────────────────────────────────────────────────────────────────
// 3. SidebarLabel
// ─────────────────────────────────────────────────────────────────────────────
const SidebarLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    icon: React.ReactNode;
    text: React.ReactNode;
  }
>(({ className, icon, text, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-10 items-center overflow-hidden text-sm text-sidebar-foreground",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded-md",
        className,
      )}
      {...props}
    >
      {/* Icon container width matches collapsed sidebar width — reads CSS var from parent */}
      <div
        className="flex shrink-0 items-center justify-center [&>svg]:size-4"
        style={{ width: "calc(var(--sb-collapsed) - 16px)" }}
      >
        {icon}
      </div>
      <span className="whitespace-nowrap transition-opacity group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:duration-[80ms] group-data-[state=expanded]:duration-[200ms] group-data-[state=expanded]:delay-[300ms]">
        {text}
      </span>
    </div>
  );
});
SidebarLabel.displayName = "SidebarLabel";

// ─────────────────────────────────────────────────────────────────────────────
// 4. SidebarMenuItemList
// ─────────────────────────────────────────────────────────────────────────────
const SidebarMenuItemList = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
});
SidebarMenuItemList.displayName = "SidebarMenuItemList";

// ─────────────────────────────────────────────────────────────────────────────
// 5. SidebarMenuItem
// ─────────────────────────────────────────────────────────────────────────────
const SidebarMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    text: React.ReactNode;
  }
>(({ className, text, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-8 items-center pr-4 text-sm text-sidebar-foreground/70",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded-md",
        className,
      )}
      // Indent aligns with label text, which starts after the icon column (--sb-collapsed wide)
      style={{ paddingLeft: "calc(var(--sb-collapsed) - 16px)" }}
      {...props}
    >
      <span className="whitespace-nowrap transition-opacity group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:duration-[80ms] group-data-[state=expanded]:duration-[200ms] group-data-[state=expanded]:delay-[300ms]">
        {text}
      </span>
    </div>
  );
});
SidebarMenuItem.displayName = "SidebarMenuItem";

// ─────────────────────────────────────────────────────────────────────────────
// 6. Imperative Toggle Hook
// ─────────────────────────────────────────────────────────────────────────────
export function useSidebarToggle(
  initialState: "expanded" | "collapsed" = "expanded",
  onStateChange?: (state: "expanded" | "collapsed") => void,
) {
  const sidebarRef = React.useRef<HTMLDivElement>(null);
  // Stable ref so setSidebarState callback never goes stale even if caller's onStateChange changes
  const onStateChangeRef = React.useRef(onStateChange);
  React.useEffect(() => {
    onStateChangeRef.current = onStateChange;
  }, [onStateChange]);

  const setSidebarState = React.useCallback(
    (state: "expanded" | "collapsed") => {
      if (sidebarRef.current) {
        sidebarRef.current.setAttribute("data-state", state);
        sidebarRef.current.setAttribute(
          "aria-expanded",
          String(state === "expanded"),
        );
        onStateChangeRef.current?.(state);
      }
    },
    [],
  );

  const toggleSidebar = React.useCallback(() => {
    if (sidebarRef.current) {
      const current = sidebarRef.current.getAttribute("data-state");
      setSidebarState(current === "expanded" ? "collapsed" : "expanded");
    }
  }, [setSidebarState]);

  return {
    sidebarRef,
    toggleSidebar,
    setSidebarState,
    defaultState: initialState,
  };
}

export {
  Sidebar,
  SidebarLabel,
  SidebarLogo,
  SidebarMenuItem,
  SidebarMenuItemList,
};
