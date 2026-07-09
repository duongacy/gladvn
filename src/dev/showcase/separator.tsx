import {
  ExampleSection,
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "@/dev/components/showcase";
import { Separator } from "@/components/micro/separator";

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content (Only Micro exists)
// ──────────────────────────────────────────────────────────
function SeparatorMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Separator (Phân cách)</DocsH3>
        <DocsP>
          <DocsCode>Separator</DocsCode> không có phiên bản Macro vì bản chất nó
          chỉ là một đường kẻ phân tách giao diện. Mặc định là đường kẻ ngang (
          <DocsCode>orientation="horizontal"</DocsCode>).
        </DocsP>
      </ShowcaseDocs>

      <ExampleSection
        label="Ngang (Horizontal)"
        description="Sử dụng để phân tách các khối nội dung từ trên xuống dưới."
        fullWidth
        codeString={`<div className="w-full max-w-sm rounded-lg border bg-card p-6">
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">
      Sadcn UI
    </h4>
    <p className="text-sm text-muted-foreground">
      Bộ UI Component mã nguồn mở.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="text-sm text-muted-foreground">
    Cập nhật lần cuối: Hôm nay
  </div>
</div>
`}
      >
        <div className="w-full max-w-sm rounded-lg border bg-card p-6">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Sadcn UI</h4>
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
  <div className="font-medium hover:underline cursor-pointer">Blog</div>
  <Separator orientation="vertical" />
  <div className="font-medium hover:underline cursor-pointer">Tài liệu</div>
  <Separator orientation="vertical" />
  <div className="font-medium hover:underline cursor-pointer">Mã nguồn</div>
</div>
`}
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
      tabs={[
        { label: "Micro (Primitive)", content: <SeparatorMicroShowcase /> },
      ]}
    />
  );
}
