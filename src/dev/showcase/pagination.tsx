import { useState } from "react";
import {
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";

import { type Size } from "@/lib/types";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/micro/pagination";
import { PaginationPreset } from "@/components/macro/pagination-preset";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function PaginationMacroShowcase() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>
          <DocsCode>PaginationPreset</DocsCode> tự động tính toán số trang, dấu
          ba chấm (ellipsis) và vô hiệu hóa nút Prev/Next. Bạn chỉ cần truyền{" "}
          <DocsCode>currentPage</DocsCode> và <DocsCode>totalPages</DocsCode>.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
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
          />
        </ExampleSection>

        <ExampleSection
          label="Nhiều trang (Many Pages)"
          description="Tự động thêm dấu ba chấm (ellipsis) khi số trang lớn."
          codeString={`<PaginationPreset currentPage={50} totalPages={100} />
`}
        >
          <PaginationPreset currentPage={50} totalPages={100} />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Trang đầu tiên (First Page)"
          description="Nút Previous tự động bị mờ đi."
          codeString={`<PaginationPreset currentPage={1} totalPages={5} />
`}
        >
          <PaginationPreset currentPage={1} totalPages={5} />
        </ExampleSection>

        <ExampleSection
          label="Trang cuối cùng (Last Page)"
          description="Nút Next tự động bị mờ đi."
          codeString={`<PaginationPreset currentPage={5} totalPages={5} />
`}
        >
          <PaginationPreset currentPage={5} totalPages={5} />
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
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>
          Dùng <DocsCode>Pagination</DocsCode> khi bạn muốn tự kiểm soát cấu
          trúc HTML, thay đổi icon, hoặc dùng phân trang dạng tĩnh (như SEO link
          /page/1, /page/2) thay vì phụ thuộc vào React state.
        </DocsP>
      </ShowcaseDocs>

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
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function PaginationShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Pagination"
      description="Thanh phân trang với điều hướng trước/sau, tự động rút gọn dấu ba chấm."
      actions={
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <PaginationMicroShowcase globalSize={globalSize} />,
        },
        { label: "Macro (Preset)", content: <PaginationMacroShowcase /> },
      ]}
    />
  );
}
