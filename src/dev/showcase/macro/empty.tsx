import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import {
  FolderOpenIcon,
  InboxIcon,
  SearchIcon,
  FileTextIcon,
} from "lucide-react";
import { EmptyPreset } from "@/components/macro/empty-preset";
import { Button } from "@/components/micro/button";

export default function MacroEmptyShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Empty (Macro)"
        description="Preset tạo sẵn cấu trúc empty state từ các props đơn giản: icon, title, description, action."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Standard"
          description="Đầy đủ icon + title + description + action button."
        >
          <EmptyPreset
            icon={<FolderOpenIcon className="size-4 text-muted-foreground" />}
            title="No projects yet"
            description="Create your first project to get started."
            action={<Button>New Project</Button>}
            className="w-full min-h-[280px]"
          />
        </ExampleSection>

        <ExampleSection
          label="Without Icon"
          description="Bỏ prop icon — phù hợp khi không có icon phù hợp."
        >
          <EmptyPreset
            title="No notifications"
            description="You're all caught up. Check back later."
            action={<Button variant="outline">Refresh</Button>}
            className="w-full min-h-[280px]"
          />
        </ExampleSection>

        <ExampleSection
          label="Without Action"
          description="Chỉ icon + title + description, không có nút hành động."
        >
          <EmptyPreset
            icon={<InboxIcon className="size-4 text-muted-foreground" />}
            title="No messages"
            description="Messages from your team will appear here."
            className="w-full min-h-[240px]"
          />
        </ExampleSection>

        <ExampleSection
          label="Minimal"
          description="Chỉ title — tối giản nhất có thể."
        >
          <EmptyPreset
            title="Nothing here yet"
            className="w-full min-h-[240px]"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Search Result Empty"
        description="Pattern thực tế cho trang tìm kiếm không có kết quả."
        fullWidth
      >
        <div className="w-full max-w-md">
          <EmptyPreset
            icon={<SearchIcon className="size-4 text-muted-foreground" />}
            title={`No results for "invoice"`}
            description="Try a different search term or clear all active filters."
            action={
              <div className="flex gap-2">
                <Button variant="outline">Clear filters</Button>
                <Button>Browse all</Button>
              </div>
            }
            className="w-full min-h-[240px]"
          />
        </div>
      </ExampleSection>

      <ExampleSection
        label="Document State"
        description="Empty state cho danh sách documents."
        fullWidth
      >
        <div className="w-full max-w-md">
          <EmptyPreset
            icon={<FileTextIcon className="size-4 text-muted-foreground" />}
            title="No documents"
            description={
              <>
                Upload or create your first document.{" "}
                <a href="#">Learn more</a>.
              </>
            }
            action={<Button>Upload Document</Button>}
            className="w-full min-h-[240px]"
          />
        </div>
      </ExampleSection>
    </div>
  );
}
