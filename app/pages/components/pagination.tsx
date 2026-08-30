import React, { useState } from "react";
import { PaginationPreset } from "@/components/macro/pagination-preset";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/micro/pagination";
import { useDevContext, useI18n } from "~app/components/dev-context";
import { ConfigurableShowcase } from "~app/components/showcase";

function usePaginationExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  const [currentPage, setCurrentPage] = useState(1);

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Phân trang cơ bản với state điều khiển.",
          "Basic pagination with controlled state."
        ),
        macroCode: `const [currentPage, setCurrentPage] = useState(1);

return (
  <PaginationPreset
    currentPage={currentPage}
    totalPages={10}
    onPageChange={setCurrentPage}
  />
);`,
        macroPreview: (
          <PaginationPreset
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
            size={globalSize}
          />
        ),
      },
      {
        title: t("Nhiều trang", "Many Pages"),
        description: t(
          "Tự động thêm dấu ba chấm (ellipsis) khi số trang lớn.",
          "Automatically adds ellipses when the number of pages is large."
        ),
        macroCode: `<PaginationPreset currentPage={50} totalPages={100} />`,
        macroPreview: (
          <PaginationPreset
            currentPage={50}
            totalPages={100}
            size={globalSize}
          />
        ),
      },
      {
        title: t("Trang đầu tiên", "First Page"),
        description: t(
          "Nút Previous tự động bị mờ đi.",
          "The Previous button is automatically dimmed."
        ),
        macroCode: `<PaginationPreset currentPage={1} totalPages={5} />`,
        macroPreview: (
          <PaginationPreset
            currentPage={1}
            totalPages={5}
            size={globalSize}
          />
        ),
      },
      {
        title: t("Trang cuối cùng", "Last Page"),
        description: t(
          "Nút Next tự động bị mờ đi.",
          "The Next button is automatically dimmed."
        ),
        macroCode: `<PaginationPreset currentPage={5} totalPages={5} />`,
        macroPreview: (
          <PaginationPreset
            currentPage={5}
            totalPages={5}
            size={globalSize}
          />
        ),
      },
      {
        title: t("Cơ bản (Micro)", "Default (Micro)"),
        description: t(
          "Lắp ráp thủ công các item và link. Hỗ trợ prop size.",
          "Manually assemble items and links. Supports the size prop."
        ),
        microCode: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        microPreview: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" size={globalSize} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" size={globalSize}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive size={globalSize}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" size={globalSize}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" size={globalSize} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
      },
    ],
    [t, globalSize, currentPage, setCurrentPage]
  );
}

export default function PaginationShowcase() {
  const t = useI18n();
  const examples = usePaginationExamples();

  return (
    <ConfigurableShowcase
      title="Pagination"
      description={t(
        "Thanh phân trang với điều hướng trước/sau, tự động rút gọn dấu ba chấm.",
        "Pagination bar with previous/next navigation, automatically collapsing with ellipses."
      )}
      examples={examples}
    />
  );
}
