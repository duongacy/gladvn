import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { Skeleton } from "@/components/micro/skeleton";

export default function SkeletonShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Skeleton"
        description="Sử dụng để hiển thị phần giữ chỗ trong khi nội dung đang tải."
      />

      <ExampleSection
        label="Basic Shapes"
        description="Skeleton có thể nhận bất kỳ kích thước và hình dạng nào thông qua className."
        fullWidth
      >
        <div className="flex flex-wrap items-center gap-6 w-full">
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
          label="Card Skeleton"
          description="Trạng thái tải thẻ hồ sơ người dùng."
        >
          <div className="space-y-6 w-full max-w-sm">
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
          label="Article Skeleton"
          description="Trạng thái tải bài đăng hoặc nội dung trên blog."
        >
          <div className="space-y-4 w-full max-w-sm">
            <Skeleton className="h-5 w-3/4" />
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
