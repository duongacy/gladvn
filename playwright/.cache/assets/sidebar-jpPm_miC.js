import { j as jsxRuntimeExports, c as cn } from './utils-DpuUSH1a.js';
import { r as reactExports } from './index-68a-soL7.js';

"use client";
const Sidebar = reactExports.forwardRef(
  ({
    className,
    defaultState = "expanded",
    expandedWidth = 256,
    collapsedWidth = 72,
    ...props
  }, ref) => {
    const handleTransitionStart = (e) => {
      if (e.propertyName === "width")
        e.currentTarget.style.willChange = "width";
    };
    const handleTransitionEnd = (e) => {
      if (e.propertyName === "width") e.currentTarget.style.willChange = "auto";
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "navigation",
        "aria-expanded": defaultState === "expanded",
        style: {
          "--sb-expanded": `${expandedWidth}px`,
          "--sb-collapsed": `${collapsedWidth}px`
        },
        className: cn(
          "group shrink-0 h-full overflow-hidden border-r border-r-border bg-sidebar text-sidebar-foreground",
          "transition-[width,border-width] duration-[400ms]",
          "data-[state=expanded]:w-[var(--sb-expanded)]",
          "data-[state=collapsed]:w-[var(--sb-collapsed)]",
          {
            "data-[state=collapsed]:border-r-0": collapsedWidth === 0
          },
          className
        ),
        "data-state": defaultState,
        onTransitionStart: handleTransitionStart,
        onTransitionEnd: handleTransitionEnd,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-full flex-col p-2",
            style: { width: `${expandedWidth}px` },
            ...props
          }
        )
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
const SidebarLogo = reactExports.forwardRef(({ className, icon, text, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: cn(
        "flex h-12 items-center overflow-hidden text-sidebar-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center",
            style: { width: "calc(var(--sb-collapsed) - 16px)" },
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap font-semibold transition-opacity group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:duration-[80ms] group-data-[state=expanded]:duration-[200ms] group-data-[state=expanded]:delay-[300ms]", children: text })
      ]
    }
  );
});
SidebarLogo.displayName = "SidebarLogo";
const SidebarLabel = reactExports.forwardRef(({ className, icon, text, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: cn(
        "flex h-10 items-center overflow-hidden text-sm text-sidebar-foreground",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded-md",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex shrink-0 items-center justify-center [&>svg]:size-4",
            style: { width: "calc(var(--sb-collapsed) - 16px)" },
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap transition-opacity group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:duration-[80ms] group-data-[state=expanded]:duration-[200ms] group-data-[state=expanded]:delay-[300ms]", children: text })
      ]
    }
  );
});
SidebarLabel.displayName = "SidebarLabel";
const SidebarMenuItemList = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("flex flex-col gap-1", className),
      ...props
    }
  );
});
SidebarMenuItemList.displayName = "SidebarMenuItemList";
const SidebarMenuItem = reactExports.forwardRef(({ className, text, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn(
        "flex h-8 items-center pr-4 text-sm text-sidebar-foreground/70",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded-md",
        className
      ),
      style: { paddingLeft: "calc(var(--sb-collapsed) - 16px)" },
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap transition-opacity group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:duration-[80ms] group-data-[state=expanded]:duration-[200ms] group-data-[state=expanded]:delay-[300ms]", children: text })
    }
  );
});
SidebarMenuItem.displayName = "SidebarMenuItem";
function useSidebarToggle(initialState = "expanded", onStateChange) {
  const sidebarRef = reactExports.useRef(null);
  const onStateChangeRef = reactExports.useRef(onStateChange);
  reactExports.useEffect(() => {
    onStateChangeRef.current = onStateChange;
  }, [onStateChange]);
  const setSidebarState = reactExports.useCallback(
    (state) => {
      if (sidebarRef.current) {
        sidebarRef.current.setAttribute("data-state", state);
        sidebarRef.current.setAttribute(
          "aria-expanded",
          String(state === "expanded")
        );
        onStateChangeRef.current?.(state);
      }
    },
    []
  );
  const toggleSidebar = reactExports.useCallback(() => {
    if (sidebarRef.current) {
      const current = sidebarRef.current.getAttribute("data-state");
      setSidebarState(current === "expanded" ? "collapsed" : "expanded");
    }
  }, [setSidebarState]);
  return {
    sidebarRef,
    toggleSidebar,
    setSidebarState,
    defaultState: initialState
  };
}

export { Sidebar, SidebarLabel, SidebarLogo, SidebarMenuItem, SidebarMenuItemList, useSidebarToggle };
//# sourceMappingURL=sidebar-jpPm_miC.js.map
