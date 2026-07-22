import * as React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/micro/pagination";
import type { Size } from "../../lib/types";
import { cn } from "../../lib/utils";

export type PaginationPresetProps = React.ComponentProps<typeof Pagination> & {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  size?: Size;
};

function generatePaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
) {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "...", totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1,
    );
    return [firstPageIndex, "...", ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i,
    );
    return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
  }

  return [];
}

const PaginationPreset = React.forwardRef<HTMLElement, PaginationPresetProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      size = "md",
      className,
      ...paginationProps
    },
    ref,
  ) => {
    const paginationRange = generatePaginationRange(
      currentPage,
      totalPages,
      siblingCount,
    );

    return (
      <Pagination ref={ref} className={className} {...paginationProps}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              size={size}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) onPageChange?.(currentPage - 1);
              }}
              aria-disabled={currentPage === 1}
              className={cn({
                "pointer-events-none opacity-50": currentPage === 1,
              })}
            />
          </PaginationItem>

          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === "...") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis size={size} />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={`page-${pageNumber}`}>
                <PaginationLink
                  href="#"
                  size={size}
                  isActive={pageNumber === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange?.(pageNumber as number);
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href="#"
              size={size}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) onPageChange?.(currentPage + 1);
              }}
              aria-disabled={currentPage === totalPages}
              className={cn({
                "pointer-events-none opacity-50": currentPage === totalPages,
              })}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
);
PaginationPreset.displayName = "PaginationPreset";

export { PaginationPreset };
