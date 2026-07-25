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

const ellipsisSizeMap: Record<Size, { container: string; icon: string }> = {
  sm: { container: "size-7", icon: "[&>svg:not([class*='size-'])]:size-3" },
  md: { container: "size-9", icon: "[&>svg:not([class*='size-'])]:size-4" },
  lg: { container: "size-11", icon: "[&>svg:not([class*='size-'])]:size-5" },
};

/**
 * @description Pagination with page navigation, next and previous links.
 * @requires PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn(
        "group/pagination mx-auto flex w-full justify-center",
        className,
      )}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "md",
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={className}
      nativeButton={false}
      render={
        <a
          aria-current={isActive ? "page" : undefined}
          data-slot="pagination-link"
          data-active={isActive ? "" : undefined}
          {...props}
        />
      }
    />
  );
}

function PaginationPrevious({
  className,
  text = "Previous",
  size = "md",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size={size}
      className={cn("pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon aria-hidden="true" data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  text = "Next",
  size = "md",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size={size}
      className={cn("pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon aria-hidden="true" data-icon="inline-end" />
    </PaginationLink>
  );
}

type PaginationEllipsisProps = React.ComponentProps<"span"> & { size?: Size };

function PaginationEllipsis({
  className,
  size = "md",
  ...props
}: PaginationEllipsisProps) {
  const { container, icon } = ellipsisSizeMap[size];
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex items-center justify-center",
        container,
        icon,
        className,
      )}
      {...props}
    >
      <MoreHorizontalIcon aria-hidden="true" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
};
