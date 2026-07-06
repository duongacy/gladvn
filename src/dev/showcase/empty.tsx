import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import {
  PlusIcon,
  FolderOpenIcon,
  SearchIcon,
  InboxIcon,
} from "lucide-react";
import {
  Empty,
  EmptyTitle,
  EmptyDescription,
  EmptyAction,
  EmptyHeader,
  EmptyContent,
  EmptyMedia,
} from "@/components/micro/empty";
import { Button } from "@/components/micro/button";

export default function EmptyShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Empty"
        description="Thành phần hiển thị trạng thái trống — dùng khi không có dữ liệu, không có kết quả tìm kiếm, hoặc chưa tạo nội dung."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Default"
          description="Trạng thái trống cơ bản với title, description và action."
        >
          <Empty className="w-full min-h-[280px]">
            <EmptyHeader>
              <EmptyTitle>No customers found</EmptyTitle>
              <EmptyDescription>
                Get started by adding your first customer.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <EmptyAction>
                <Button>
                  <PlusIcon className="mr-2" />
                  Add Customer
                </Button>
              </EmptyAction>
            </EmptyContent>
          </Empty>
        </ExampleSection>

        <ExampleSection
          label="Icon Variant"
          description="Dùng EmptyMedia variant='icon' để hiển thị icon nền muted."
        >
          <Empty className="w-full min-h-[280px]">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpenIcon className="size-4 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No projects</EmptyTitle>
              <EmptyDescription>
                You don&apos;t have any active projects.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <EmptyAction>
                <Button>
                  <PlusIcon className="mr-2" />
                  New Project
                </Button>
              </EmptyAction>
            </EmptyContent>
          </Empty>
        </ExampleSection>

        <ExampleSection
          label="Text Only"
          description="Không có icon, không có action — dùng khi không cần hướng dẫn thêm."
        >
          <Empty className="w-full min-h-[200px]">
            <EmptyHeader>
              <EmptyTitle>No results</EmptyTitle>
              <EmptyDescription>
                Try adjusting your filters or search terms.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </ExampleSection>

        <ExampleSection
          label="With Link in Description"
          description="EmptyDescription hỗ trợ link lồng bên trong nhờ selector [&_a]."
        >
          <Empty className="w-full min-h-[200px]">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon className="size-4 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No messages yet</EmptyTitle>
              <EmptyDescription>
                Messages from your team will appear here. Learn more in our{" "}
                <a href="#">documentation</a>.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Search Empty State"
        description="Pattern phổ biến khi tìm kiếm không có kết quả — kèm nút xoá filter."
        fullWidth
      >
        <div className="w-full max-w-md">
          <Empty className="w-full min-h-[240px]">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon className="size-4 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No results for &quot;invoice&quot;</EmptyTitle>
              <EmptyDescription>
                Try a different search term or clear all filters.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <EmptyAction>
                <Button variant="outline">Clear filters</Button>
              </EmptyAction>
            </EmptyContent>
          </Empty>
        </div>
      </ExampleSection>
    </div>
  );
}
