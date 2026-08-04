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
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";

import { Button } from "../../components/micro/button";
import type { Size } from "../../lib/types";
import { cn } from "../../lib/utils";

const ellipsisSizeMap: Record<Size, { container: string; icon: string }> = {
  sm: { container: "size-7", icon: "[:where(&>svg)]:size-3" },
  md: { container: "size-9", icon: "[:where(&>svg)]:size-4" },
  lg: { container: "size-11", icon: "[:where(&>svg)]:size-5" },
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
} & Pick<React.ComponentProps<typeof Button>, "size" | "iconOnly"> &
  React.ComponentProps<"a">;

function PaginationLink({
  className,
  isActive,
  size = "md",
  iconOnly,
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant={isActive ? "solid" : "ghost"}
      color={isActive ? "primary" : "secondary"}
      size={size}
      iconOnly={iconOnly}
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

function PaginationFirst({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to first page"
      size={size}
      iconOnly
      className={className}
      {...props}
    >
      <ChevronsLeftIcon aria-hidden="true" />
    </PaginationLink>
  );
}

function PaginationPrevious({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size={size}
      iconOnly
      className={className}
      {...props}
    >
      <ChevronLeftIcon aria-hidden="true" />
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size={size}
      iconOnly
      className={className}
      {...props}
    >
      <ChevronRightIcon aria-hidden="true" />
    </PaginationLink>
  );
}

function PaginationLast({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to last page"
      size={size}
      iconOnly
      className={className}
      {...props}
    >
      <ChevronsRightIcon aria-hidden="true" />
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
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast
};
