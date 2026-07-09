import {
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import {
  PlusIcon,
  FolderOpenIcon,
  SearchIcon,
  InboxIcon,
  FileTextIcon,
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
import { EmptyPreset } from "@/components/macro/empty-preset";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function EmptyMacroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>
          <DocsCode>EmptyPreset</DocsCode> đóng gói toàn bộ cấu trúc của trạng
          thái trống. Truyền trực tiếp các props <DocsCode>icon</DocsCode>,{" "}
          <DocsCode>title</DocsCode>, <DocsCode>description</DocsCode> và{" "}
          <DocsCode>action</DocsCode> để render nhanh mà không cần lồng ghép
          thẻ.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Đầy đủ icon, title, description, action button."
          codeString={`<EmptyPreset
  icon={<FolderOpenIcon className="size-4 text-muted-foreground" />}
  title="No projects yet"
  description="Create your first project to get started."
  action={<Button>New Project</Button>}
  className="w-full min-h-[280px]"
/>`}
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
          label="Không có Icon (Without Icon)"
          description="Bỏ prop icon — phù hợp khi không cần hình ảnh minh họa."
        >
          <EmptyPreset
            title="No notifications"
            description="You're all caught up. Check back later."
            action={<Button variant="outline">Refresh</Button>}
            className="w-full min-h-[280px]"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Không có Nút (Without Action)"
          description="Chỉ hiển thị trạng thái, không yêu cầu hành động."
          codeString={`<EmptyPreset
  icon={<InboxIcon className="size-4 text-muted-foreground" />}
  title="No messages"
  description="Messages from your team will appear here."
  className="w-full min-h-[240px]"
/>`}
        >
          <EmptyPreset
            icon={<InboxIcon className="size-4 text-muted-foreground" />}
            title="No messages"
            description="Messages from your team will appear here."
            className="w-full min-h-[240px]"
          />
        </ExampleSection>

        <ExampleSection
          label="Tối giản (Minimal)"
          description="Chỉ có tiêu đề."
        >
          <EmptyPreset
            title="Nothing here yet"
            className="w-full min-h-[240px]"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Kết quả tìm kiếm trống"
          description="Pattern phổ biến khi tìm kiếm không ra kết quả."
          fullWidth
          codeString={`<EmptyPreset
  icon={<SearchIcon className="size-4 text-muted-foreground" />}
  title={'No results for "invoice"'}
  description="Try a different search term or clear all active filters."
  action={
    <div className="flex gap-2">
      <Button variant="outline">Clear filters</Button>
      <Button>Browse all</Button>
    </div>
  }
  className="w-full min-h-[240px]"
/>`}
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
          label="Danh sách tài liệu (Document State)"
          description="Description chứa liên kết HTML."
          fullWidth
          codeString={`<EmptyPreset
  icon={<FileTextIcon className="size-4 text-muted-foreground" />}
  title="No documents"
  description={
    <>
      Upload or create your first document. <a href="#">Learn more</a>.
    </>
  }
  action={<Button>Upload Document</Button>}
  className="w-full min-h-[240px]"
/>`}
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
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function EmptyMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>
          Dùng các thành phần con (<DocsCode>EmptyHeader</DocsCode>,{" "}
          <DocsCode>EmptyMedia</DocsCode>, <DocsCode>EmptyContent</DocsCode>...)
          khi bạn cần thay đổi trật tự cấu trúc (ví dụ: chuyển nút lên trên),
          chèn thêm nội dung đặc biệt hoặc render Icon dưới dạng file SVG tùy
          chỉnh phức tạp thay vì Lucide Icon.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Cơ bản (Default)"
          description="Trạng thái trống cơ bản với cấu trúc thủ công."
          codeString={`<Empty className="w-full min-h-[280px]">
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
`}
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
          label="Kèm Icon nền màu (Icon Variant)"
          description="Dùng EmptyMedia variant='icon' để hiển thị background mờ cho Icon."
          codeString={`<Empty className="w-full min-h-[280px]">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderOpenIcon className="size-4 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No projects</EmptyTitle>
    <EmptyDescription>
      You don't have any active projects.
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
</Empty>`}
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
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Chỉ văn bản (Text Only)"
          description="Không icon, không action."
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
          label="Link bên trong mô tả (Link in Description)"
          description="EmptyDescription tự động style thẻ <a> bên trong."
          codeString={`<Empty className="w-full min-h-[200px]">
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
</Empty>`}
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
        label="Cấu trúc tùy chỉnh nâng cao"
        description="Nút xóa bộ lọc nằm tách biệt khỏi hành động chính."
        fullWidth
        codeString={`<div className="w-full max-w-md">
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
`}
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

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function EmptyShowcase() {
  return (
    <Showcase
      title="Empty"
      description="Trạng thái trống hiển thị khi không có dữ liệu, chưa có nội dung, hoặc tìm kiếm không ra kết quả."
      tabs={[
        { label: "Micro (Primitive)", content: <EmptyMicroShowcase /> },
        { label: "Macro (Preset)", content: <EmptyMacroShowcase /> },
      ]}
    />
  );
}
