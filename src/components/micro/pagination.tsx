/**
 * ✅ AUDITED & REFACTORED
 * - Design System Compliant (22 Commandments)
 * - WCAG AAA/AA
 * - Form Control Parity
 * - CSS Delegated Logic
 */
import * as React from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { Button } from "../../components/micro/button";
import type { Size } from "../../lib/types";
import { cn } from "../../lib/utils";



/**
 * @description Pagination with page navigation, next and previous links.
 * @requires PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious
 */
const Pagination = React.forwardRef<
  HTMLElement,
  React.ComponentProps<"nav">
>(function Pagination({ className, ...props }, ref) {
  return (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn(
        "group/pagination mx-auto flex justify-center",
        className,
      )}
      {...props}
    />
  );
});
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(function PaginationContent({ className, ...props }, ref) {
  return (
    <ul
      ref={ref}
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  );
});
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(function PaginationItem(props, ref) {
  return <li ref={ref} data-slot="pagination-item" {...props} />;
});
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(function PaginationLink(
  { className, isActive, size = "md", ...props },
  ref,
) {
  return (
    <Button
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={className}
      nativeButton={false}
      render={
        <a
          ref={ref}
          aria-current={isActive ? "page" : undefined}
          data-slot="pagination-link"
          data-active={isActive ? "" : undefined}
          {...props}
        />
      }
    />
  );
});
PaginationLink.displayName = "PaginationLink";

type PaginationPreviousProps = React.ComponentProps<typeof PaginationLink> & {
  text?: string;
};

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  PaginationPreviousProps
>(function PaginationPrevious(
  { className, text = "Previous", size = "md", ...props },
  ref,
) {
  return (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      size={size}
      className={cn("pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon aria-hidden="true" data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  );
});
PaginationPrevious.displayName = "PaginationPrevious";

type PaginationNextProps = React.ComponentProps<typeof PaginationLink> & {
  text?: string;
};

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  PaginationNextProps
>(function PaginationNext(
  { className, text = "Next", size = "md", ...props },
  ref,
) {
  return (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      size={size}
      className={cn("pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon aria-hidden="true" data-icon="inline-end" />
    </PaginationLink>
  );
});
PaginationNext.displayName = "PaginationNext";

type PaginationEllipsisProps = React.ComponentProps<"span"> & { size?: Size };

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  PaginationEllipsisProps
>(function PaginationEllipsis({ className, size = "md", ...props }, ref) {
  return (
    <span
      ref={ref}
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex items-center justify-center",
        {
          "size-7 [:where(&>svg)]:size-3": size === "sm",
          "size-9 [:where(&>svg)]:size-4": size === "md",
          "size-11 [:where(&>svg)]:size-5": size === "lg",
        },
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon aria-hidden="true" />
      <span className="sr-only">More pages</span>
    </span>
  );
});
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
export type {
  PaginationLinkProps,
  PaginationPreviousProps,
  PaginationNextProps,
  PaginationEllipsisProps,
};

