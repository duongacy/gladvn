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

      <ShowcaseExample
        title={t("🧭 So sánh Use Case", "🧭 Use Case Comparison")}
        description={t(
          "So sánh nhanh khi nào dùng Micro và Macro.",
          "Quick comparison of when to use Micro vs Macro.",
        )}
        code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Story 1 · Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Automatic handling
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Use Preset when you just want to pass in{" "}
        <DocsCode>currentPage</DocsCode> và{" "}
        <DocsCode>totalPages</DocsCode> to automatically generate accurate pagination UI (including ellipses).
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
            Story 2 · Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            HTML customization / SEO
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Use Micro when you want to use the actual{" "}
        <DocsCode>&lt;a&gt;</DocsCode> tag thực sự thay vì
        onClick (tốt cho SEO) hoặc khi bạn có luồng logic
        hiển thị pagination đặc biệt.
      </p>
    </div>
  </div>`}
        preview={
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      Story 1 · Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Automatic handling
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use Preset when you just want to pass in{" "}
                  <DocsCode>currentPage</DocsCode> và{" "}
                  <DocsCode>totalPages</DocsCode> to automatically generate
                  accurate pagination UI (including ellipses).
                </p>
              </div>

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
                      Story 2 · Micro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      HTML customization / SEO
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use Micro when you want to use the actual{" "}
                  <DocsCode>&lt;a&gt;</DocsCode> tag instead of onClick (good
                  for SEO) or when you have special pagination display logic.
                </p>
              </div>
            </div>
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
