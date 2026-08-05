import { j as jsxRuntimeExports, c as cn } from './utils-DpuUSH1a.js';
import { r as reactExports } from './index-68a-soL7.js';
import { ChevronUp, ChevronDown } from './lucide-react-BPXObMyy.js';

"use client";
const Table = reactExports.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        "data-slot": "table-container",
        className: cn("group/table relative w-full overflow-auto", className),
        ...props,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { "data-slot": "table", className: "w-full caption-bottom text-sm", children })
      }
    );
  }
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      ref,
      "data-slot": "table-header",
      className: cn("[&>tr]:border-b", className),
      ...props
    }
  );
});
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      ref,
      "data-slot": "table-body",
      className: cn("[&>tr:last-child]:border-0", className),
      ...props
    }
  );
});
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tfoot",
    {
      ref,
      "data-slot": "table-footer",
      className: cn(
        "border-t border-t-border bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
});
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      "data-slot": "table-row",
      className: cn(
        "border-b border-b-border transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  );
});
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(
  ({
    className,
    sortDirection,
    sortOptions = ["asc", "desc", "none"],
    onSort,
    children,
    ...props
  }, ref) => {
    const handleSortClick = () => {
      if (!onSort || !sortDirection || sortOptions.length === 0) return;
      const currentIndex = sortOptions.indexOf(sortDirection);
      const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % sortOptions.length;
      onSort(sortOptions[nextIndex]);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "th",
      {
        ref,
        "data-slot": "table-head",
        className: cn(
          "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground has-[[role=checkbox]]:pr-0",
          className
        ),
        ...props,
        children: onSort && sortDirection ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleSortClick,
            className: "-ml-1 flex items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            children: [
              children,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronUp,
                  {
                    className: cn("size-[14px] -mb-1.5 opacity-30", {
                      "opacity-100": sortDirection === "asc"
                    })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: cn("size-[14px] opacity-30", {
                      "opacity-100": sortDirection === "desc"
                    })
                  }
                )
              ] })
            ]
          }
        ) : children
      }
    );
  }
);
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      ref,
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap has-[[role=checkbox]]:pr-0",
        className
      ),
      ...props
    }
  );
});
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "caption",
    {
      ref,
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
});
TableCaption.displayName = "TableCaption";

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
//# sourceMappingURL=table-C6Hmc138.js.map
