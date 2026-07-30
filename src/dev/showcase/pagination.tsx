import { useState } from "react";

import { PaginationPreset } from "../../components/macro/pagination-preset";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/micro/pagination";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function PaginationMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn (Standard)", "Standard")}
          description={t(
            "Phân trang cơ bản với state điều khiển.",
            "Basic pagination with controlled state.",
          )}
          code={`const [currentPage, setCurrentPage] = useState(1); return
  (
  <PaginationPreset
    currentPage={currentPage}
    totalPages={10}
    onPageChange={setCurrentPage}
  />
  );`}
          preview={
            <>
              <PaginationPreset
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
                size={globalSize}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Nhiều trang (Many Pages)", "Many Pages")}
          description={t(
            "Tự động thêm dấu ba chấm (ellipsis) khi số trang lớn.",
            "Automatically adds ellipses when the number of pages is large.",
          )}
          code={`<PaginationPreset currentPage={50} totalPages={100} />
`}
          preview={
            <>
              <PaginationPreset
                currentPage={50}
                totalPages={100}
                size={globalSize}
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Trang đầu tiên (First Page)", "First Page")}
          description={t(
            "Nút Previous tự động bị mờ đi.",
            "The Previous button is automatically dimmed.",
          )}
          code={`<PaginationPreset currentPage={1} totalPages={5} />
`}
          preview={
            <>
              <PaginationPreset
                currentPage={1}
                totalPages={5}
                size={globalSize}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Trang cuối cùng (Last Page)", "Last Page")}
          description={t(
            "Nút Next tự động bị mờ đi.",
            "The Next button is automatically dimmed.",
          )}
          code={`<PaginationPreset currentPage={5} totalPages={5} />
`}
          preview={
            <>
              <PaginationPreset
                currentPage={5}
                totalPages={5}
                size={globalSize}
              />
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function PaginationMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Cơ bản (Default)", "Default")}
        description={t(
          "Lắp ráp thủ công các item và link. Hỗ trợ prop size.",
          "Manually assemble items and links. Supports the size prop.",
        )}
        code={`<Pagination>
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
  </Pagination>`}
        preview={
          <>
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
          </>
        }
      />
    </div>
  );
}

export default function PaginationShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Pagination"
      description={t(
        "Thanh phân trang với điều hướng trước/sau, tự động rút gọn dấu ba chấm.",
        "Pagination bar with previous/next navigation, automatically collapsing with ellipses.",
      )}

      micro={{ content: <PaginationMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <PaginationMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
