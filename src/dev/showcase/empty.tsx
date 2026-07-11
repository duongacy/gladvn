import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";

import {
  CheckCircle2Icon,
  FileTextIcon,
  FolderOpenIcon,
  InboxIcon,
  LayersIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";

import { EmptyPreset } from "@/components/macro/empty-preset";
import { Button } from "@/components/micro/button";
import {
  Empty,
  EmptyAction,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/micro/empty";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function EmptyMacroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
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
          codeString={`<EmptyPreset
  title="No notifications"
  description="You're all caught up. Check back later."
  action={<Button variant="outline">Refresh</Button>}
  className="w-full min-h-[280px]"
/>
`}
        >
          <EmptyPreset
            title="No notifications"
            description="You're all caught up. Check back later."
            action={<Button variant="outline">Refresh</Button>}
            className="w-full min-h-[280px]"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
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
          codeString={`<EmptyPreset
  title="Nothing here yet"
  className="w-full min-h-[240px]"
/>
`}
        >
          <EmptyPreset
            title="Nothing here yet"
            className="w-full min-h-[240px]"
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
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
      <ExampleGrid>
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

      <ExampleGrid>
        <ExampleSection
          label="Chỉ văn bản (Text Only)"
          description="Không icon, không action."
          codeString={`<Empty className="w-full min-h-[200px]">
  <EmptyHeader>
    <EmptyTitle>No results</EmptyTitle>
    <EmptyDescription>
      Try adjusting your filters or search terms.
    </EmptyDescription>
  </EmptyHeader>
</Empty>
`}
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

      {/* ── Use Case Comparison ─────────────────────── */}
      <ExampleSection
        label="🧭 Use Case Comparison"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {/* ── Story 1: Macro wins ── */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
        <CheckCircle2Icon className="size-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Story 1 · Dùng Macro
        </p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">
          Giao diện trống tiêu chuẩn
        </h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Dùng \`EmptyPreset\` khi bạn chỉ cần một cấu trúc trạng thái trống mặc định, bao gồm icon, tiêu đề, mô tả và nút hành động. Giúp rút ngắn code đáng kể.
    </p>
  </div>

  {/* ── Story 2: Micro wins ── */}
  <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
        <LayersIcon className="size-4" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Story 2 · Dùng Micro
        </p>
        <h3 className="mt-0.5 text-sm font-semibold text-foreground">
          Bố cục tuỳ biến phức tạp
        </h3>
      </div>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">
      Dùng các thành phần con khi cần render SVG animation tuỳ chỉnh, hoán đổi vị trí của phần mô tả hoặc nút, thêm nội dung phụ như danh sách liên kết.
    </p>
  </div>
</div>`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ── Story 1: Macro wins ── */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <CheckCircle2Icon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Giao diện trống tiêu chuẩn
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dùng <code>EmptyPreset</code> khi bạn chỉ cần một cấu trúc trạng
              thái trống mặc định, bao gồm icon, tiêu đề, mô tả và nút hành
              động. Giúp rút ngắn code đáng kể.
            </p>
          </div>

          {/* ── Story 2: Micro wins ── */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <LayersIcon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Bố cục tuỳ biến phức tạp
                </h3>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dùng các thành phần con khi cần render SVG animation tuỳ chỉnh,
              hoán đổi vị trí của phần mô tả hoặc nút, thêm nội dung phụ như
              danh sách liên kết.
            </p>
          </div>
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
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để thông báo cho người dùng rằng không có dữ liệu để hiển thị ở
            đây. Nó thường đi kèm với hình ảnh hoặc biểu tượng (icon) minh họa
            và một hành động hướng dẫn để lấp đầy nội dung này (ví dụ: Tạo mới).
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <EmptyMicroShowcase /> },
        { label: "Macro (Preset)", content: <EmptyMacroShowcase /> },
      ]}
    />
  );
}
