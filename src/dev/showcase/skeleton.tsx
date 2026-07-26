import { Skeleton } from "../../components/micro/skeleton";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";

function SkeletonMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Hình dáng cơ bản (Basic Shapes)"
        description="Thay đổi hình dạng thông qua các class Tailwind: w-..., h-..., rounded-full, v.v."
        fullWidth
        codeString={`<div className="flex flex-wrap items-center gap-6 w-full p-4 border border-border rounded-lg bg-card">
    <Skeleton className="h-4 w-48" />
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-4 w-64" />
    <Skeleton className="size-12 rounded-full" />
    <Skeleton className="h-24 w-40 rounded-xl" />
    <Skeleton className="h-10 w-24 rounded-md" />
  </div>`}
      >
        <div className="flex flex-wrap items-center gap-6 w-full p-4 border border-border rounded-lg bg-card">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-64" />
          <Skeleton className="size-12 rounded-full" />
          <Skeleton className="h-24 w-40 rounded-xl" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </ExampleSection>

      <ExampleGrid>
        <ExampleSection
          label="Card Profile"
          description="Khung xương mô phỏng ảnh đại diện, tên người dùng và số liệu."
          codeString={`<div className="space-y-6 w-full max-w-sm rounded-lg border border-border bg-card p-4">
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
  </div>`}
        >
          <div className="space-y-6 w-full max-w-sm rounded-lg border border-border bg-card p-4">
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
          codeString={`<div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <div className="pt-2" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-4/5" />
    <Skeleton className="h-4 w-2/3" />
  </div>`}
        >
          <div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
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

      <ExampleGrid>
        <ExampleSection
          label="List Items / Table Rows"
          description="Sử dụng vòng lặp hoặc nhiều thẻ lặp lại để mô phỏng danh sách."
          codeString={`<div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[180px]" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[120px]" />
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-[170px]" />
        <Skeleton className="h-3 w-[90px]" />
      </div>
    </div>
  </div>`}
        >
          <div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[180px]" />
                <Skeleton className="h-3 w-[100px]" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[150px]" />
                <Skeleton className="h-3 w-[120px]" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[170px]" />
                <Skeleton className="h-3 w-[90px]" />
              </div>
            </div>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Media / Image Placeholder"
          description="Khung xương lớn mô phỏng hình ảnh hoặc video player."
          codeString={`<div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
    <Skeleton className="h-48 w-full rounded-md" />
    <div className="flex justify-between items-center pt-2">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
      <Skeleton className="h-8 w-16 rounded-md" />
    </div>
  </div>`}
        >
          <div className="space-y-4 w-full max-w-sm rounded-lg border border-border bg-card p-4">
            <Skeleton className="h-48 w-full rounded-md" />
            <div className="flex justify-between items-center pt-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-3 w-[100px]" />
              </div>
              <Skeleton className="h-8 w-16 rounded-md" />
            </div>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

export default function SkeletonShowcase() {
  return (
    <Showcase
      title="Skeleton"
      description="Thành phần tạo ra hiệu ứng nhấp nháy, mô phỏng bố cục hiển thị để giữ chỗ (placeholder) trong khi chờ dữ liệu đang tải."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Skeleton (Khung xương)</DocsH3>
          <DocsP>
            <DocsCode>Skeleton</DocsCode> không có phiên bản Macro. Nó là một
            thẻ <DocsCode>div</DocsCode> có sẵn hiệu ứng nhấp nháy mờ (pulse
            animation). Bạn kết hợp với Tailwind CSS classes (chiều cao, chiều
            rộng, bo góc) để mô phỏng hình dáng của nội dung chưa được tải xong.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <SkeletonMicroShowcase /> },
      ]}
    />
  );
}
