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
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function PaginationMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Phân trang cơ bản với state điều khiển."
          codeString={`const [currentPage, setCurrentPage] = useState(1);

return (
  <PaginationPreset
    currentPage={currentPage}
    totalPages={10}
    onPageChange={setCurrentPage}
  />
);`}
        >
          <PaginationPreset
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
            size={globalSize}
          />
        </ExampleSection>

        <ExampleSection
          label="Nhiều trang (Many Pages)"
          description="Tự động thêm dấu ba chấm (ellipsis) khi số trang lớn."
          codeString={`<PaginationPreset currentPage={50} totalPages={100} />
`}
        >
          <PaginationPreset
            currentPage={50}
            totalPages={100}
            size={globalSize}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Trang đầu tiên (First Page)"
          description="Nút Previous tự động bị mờ đi."
          codeString={`<PaginationPreset currentPage={1} totalPages={5} />
`}
        >
          <PaginationPreset currentPage={1} totalPages={5} size={globalSize} />
        </ExampleSection>

        <ExampleSection
          label="Trang cuối cùng (Last Page)"
          description="Nút Next tự động bị mờ đi."
          codeString={`<PaginationPreset currentPage={5} totalPages={5} />
`}
        >
          <PaginationPreset currentPage={5} totalPages={5} size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function PaginationMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Cơ bản (Default)"
        description="Lắp ráp thủ công các item và link. Hỗ trợ prop size."
        codeString={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
`}
      >
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
      </ExampleSection>

      <ExampleSection
        label="🧭 Use Case Comparison"
        description="So sánh nhanh khi nào dùng Micro và Macro."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {/* Story 1: Macro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 1 · Dùng Macro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Xử lý tự động</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Dùng Preset khi bạn chỉ muốn truyền vào <DocsCode>currentPage</DocsCode> và <DocsCode>totalPages</DocsCode> để tự động sinh ra UI phân trang chuẩn xác (bao gồm dấu ba chấm).
    </p>
  </div>

  {/* Story 2: Micro wins */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Story 2 · Dùng Micro</p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">Tuỳ biến HTML / SEO</h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Dùng Micro khi bạn muốn dùng <DocsCode>&lt;a&gt;</DocsCode> tag thực sự thay vì onClick (tốt cho SEO) hoặc khi bạn có luồng logic hiển thị pagination đặc biệt.
    </p>
  </div>
</div>`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Story 1: Macro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Xử lý tự động
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dùng Preset khi bạn chỉ muốn truyền vào{" "}
              <DocsCode>currentPage</DocsCode> và{" "}
              <DocsCode>totalPages</DocsCode> để tự động sinh ra UI phân trang
              chuẩn xác (bao gồm dấu ba chấm).
            </p>
          </div>

          {/* Story 2: Micro wins */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Tuỳ biến HTML / SEO
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dùng Micro khi bạn muốn dùng <DocsCode>&lt;a&gt;</DocsCode> tag
              thực sự thay vì onClick (tốt cho SEO) hoặc khi bạn có luồng logic
              hiển thị pagination đặc biệt.
            </p>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function PaginationShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Pagination"
      description="Thanh phân trang với điều hướng trước/sau, tự động rút gọn dấu ba chấm."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Khi nào nên dùng Macro</DocsH3>
          <DocsP>
            <DocsCode>PaginationPreset</DocsCode> tự động tính toán số trang,
            dấu ba chấm (ellipsis) và vô hiệu hóa nút Prev/Next. Bạn chỉ cần
            truyền <DocsCode>currentPage</DocsCode> và{" "}
            <DocsCode>totalPages</DocsCode>.
          </DocsP>
          <DocsH3>Khi nào nên dùng Micro</DocsH3>
          <DocsP>
            Dùng <DocsCode>Pagination</DocsCode> khi bạn muốn tự kiểm soát cấu
            trúc HTML, thay đổi icon, hoặc dùng phân trang dạng tĩnh (như SEO
            link /page/1, /page/2) thay vì phụ thuộc vào React state.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <PaginationMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <PaginationMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
