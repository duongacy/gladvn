/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";

const Table = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="table-container"
        className={cn("group/table relative w-full overflow-auto", className)}
        {...props}
      >
        <table data-slot="table" className="w-full caption-bottom text-sm">
          {children}
        </table>
      </div>
    );
  },
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"thead">
>(({ className, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      data-slot="table-header"
      className={cn("[&>tr]:border-b", className)}
      {...props}
    />
  );
});
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"tbody">
>(({ className, ...props }, ref) => {
  return (
    <tbody
      ref={ref}
      data-slot="table-body"
      className={cn("[&>tr:last-child]:border-0", className)}
      {...props}
    />
  );
});
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"tfoot">
>(({ className, ...props }, ref) => {
  return (
    <tfoot
      ref={ref}
      data-slot="table-footer"
      className={cn(
        "border-t border-t-border bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
});
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentProps<"tr">
>(({ className, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      data-slot="table-row"
      className={cn(
        "border-b border-b-border transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow";

type SortDirection = "asc" | "desc" | "none";

interface TableHeadProps extends React.ComponentProps<"th"> {
  sortDirection?: SortDirection;
  sortOptions?: SortDirection[];
  onSort?: (nextDirection: SortDirection) => void;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  (
    {
      className,
      sortDirection,
      sortOptions = ["asc", "desc", "none"],
      onSort,
      children,
      ...props
    },
    ref,
  ) => {
    const handleSortClick = () => {
      if (!onSort || !sortDirection || sortOptions.length === 0) return;

      const currentIndex = sortOptions.indexOf(sortDirection);
      const nextIndex =
        currentIndex === -1 ? 0 : (currentIndex + 1) % sortOptions.length;

      onSort(sortOptions[nextIndex]!);
    };

    return (
      <th
        ref={ref}
        data-slot="table-head"
        className={cn(
          "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground has-[[role=checkbox]]:pr-0",
          className,
        )}
        {...props}
      >
        {onSort && sortDirection ? (
          <button
            type="button"
            onClick={handleSortClick}
            className="-ml-1 flex items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {children}
            <div className="flex flex-col">
              <ChevronUp
                className={cn("size-[14px] -mb-1.5 opacity-30", {
                  "opacity-100": sortDirection === "asc",
                })}
              />
              <ChevronDown
                className={cn("size-[14px] opacity-30", {
                  "opacity-100": sortDirection === "desc",
                })}
              />
            </div>
          </button>
        ) : (
          children
        )}
      </th>
    );
  },
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentProps<"td">
>(({ className, ...props }, ref) => {
  return (
    <td
      ref={ref}
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap has-[[role=checkbox]]:pr-0",
        className,
      )}
      {...props}
    />
  );
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.ComponentProps<"caption">
>(({ className, ...props }, ref) => {
  return (
    <caption
      ref={ref}
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
