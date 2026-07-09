import {
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "@/dev/components/showcase";
import { Skeleton } from "@/components/micro/skeleton";

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content (Only Micro exists)
// ──────────────────────────────────────────────────────────
function SkeletonMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Skeleton (Khung xương)</DocsH3>
        <DocsP>
          <DocsCode>Skeleton</DocsCode> không có phiên bản Macro. Nó là một thẻ <DocsCode>div</DocsCode> có sẵn hiệu ứng nhấp nháy mờ (pulse animation). Bạn kết hợp với Tailwind CSS classes (chiều cao, chiều rộng, bo góc) để mô phỏng hình dáng của nội dung chưa được tải xong.
        </DocsP>
      </ShowcaseDocs>

      <ExampleSection
        label="Hình dáng cơ bản (Basic Shapes)"
        description="Thay đổi hình dạng thông qua các class Tailwind: w-..., h-..., rounded-full, v.v."
        fullWidth
      >
        <div className="flex flex-wrap items-center gap-6 w-full p-4 border rounded-lg bg-card">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="size-12 rounded-full" />
          <Skeleton className="h-24 w-40 rounded-xl" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Card Profile"
          description="Khung xương mô phỏng ảnh đại diện, tên người dùng và số liệu."
        >
          <div className="space-y-6 w-full max-w-sm rounded-lg border bg-card p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24 rounded-xl" />
              <Skeleton className="h-24 rounded-xl" />
            </div>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Article / Blog Post"
          description="Khung xương mô phỏng các đoạn văn bản (text blocks)."
        >
          <div className="space-y-4 w-full max-w-sm rounded-lg border bg-card p-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="pt-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function SkeletonShowcase() {
  return (
    <Showcase
      title="Skeleton"
      description="Thành phần tạo ra hiệu ứng nhấp nháy, mô phỏng bố cục hiển thị để giữ chỗ (placeholder) trong khi chờ dữ liệu đang tải."
      tabs={[
        { label: "Micro (Primitive)", content: <SkeletonMicroShowcase /> },
      ]}
    />
  );
}
