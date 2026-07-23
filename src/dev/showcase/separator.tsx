import { Separator } from "../../components/micro/separator";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content (Only Micro exists)
// ──────────────────────────────────────────────────────────
function SeparatorMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Ngang (Horizontal)"
        description="Sử dụng để phân tách các khối nội dung từ trên xuống dưới."
        fullWidth
        codeString={`<div className="w-full max-w-sm rounded-lg border border-border bg-card p-6">
    <div className="space-y-1">
      <h4 className="text-sm font-medium leading-none">
        Gladvn UI
      </h4>
      <p className="text-sm text-muted-foreground">
        Bộ UI Component mã nguồn mở.
      </p>
    </div>
    <Separator className="my-4" />
    <div className="text-sm text-muted-foreground">
      Cập nhật lần cuối: Hôm nay
    </div>
  </div>`}
      >
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-6">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Gladvn UI</h4>
            <p className="text-sm text-muted-foreground">
              Bộ UI Component mã nguồn mở.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="text-sm text-muted-foreground">
            Cập nhật lần cuối: Hôm nay
          </div>
        </div>
      </ExampleSection>

      <ExampleSection
        label="Dọc (Vertical)"
        description="Sử dụng để phân tách các mục nằm ngang (như menu, thanh công cụ)."
        codeString={`<div className="flex h-5 items-center space-x-4 text-sm">
    <div className="font-medium hover:underline cursor-pointer">
      Blog
    </div>
    <Separator orientation="vertical" />
    <div className="font-medium hover:underline cursor-pointer">
      Tài liệu
    </div>
    <Separator orientation="vertical" />
    <div className="font-medium hover:underline cursor-pointer">
      Mã nguồn
    </div>
  </div>`}
      >
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div className="font-medium hover:underline cursor-pointer">Blog</div>
          <Separator orientation="vertical" />
          <div className="font-medium hover:underline cursor-pointer">
            Tài liệu
          </div>
          <Separator orientation="vertical" />
          <div className="font-medium hover:underline cursor-pointer">
            Mã nguồn
          </div>
        </div>
      </ExampleSection>
      <ExampleSection
        label="Decorative vs Semantic"
        description='Semantic (mặc định) được screen reader đọc. Truyền aria-hidden="true" khi Separator chỉ mang tính trang trí thuần.'
        codeString={`{/* Semantic — screen reader đọc được */}
  <Separator />

  {/* Decorative — chỉ là đường kẻ trực quan */}
  <Separator aria-hidden="true" />`}
      >
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-2">
              Semantic (mặc định — screen reader nhận ra)
            </p>
            <Separator />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">
              Decorative — <code className="text-xs">aria-hidden="true"</code>
            </p>
            <Separator aria-hidden="true" />
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function SeparatorShowcase() {
  return (
    <Showcase
      title="Separator"
      description="Thành phần phân cách trực quan hoặc ngữ nghĩa giữa các khối nội dung (Đường kẻ)."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Separator (Phân cách)</DocsH3>
          <DocsP>
            <DocsCode>Separator</DocsCode> không có phiên bản Macro vì bản chất
            nó chỉ là một đường kẻ phân tách giao diện. Mặc định là đường kẻ
            ngang (<DocsCode>orientation="horizontal"</DocsCode>).
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <SeparatorMicroShowcase /> },
      ]}
    />
  );
}
