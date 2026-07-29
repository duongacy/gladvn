import {
  CheckCircle2Icon,
  FileTextIcon,
  FolderOpenIcon,
  InboxIcon,
  LayersIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";

import { EmptyPreset } from "../../components/macro/empty-preset";
import { Button } from "../../components/micro/button";
import {
  Empty,
  EmptyAction,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../components/micro/empty";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";

function EmptyMacroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn (Standard)", "Standard")}
          description={t(
            "Đầy đủ icon, title, description, action button.",
            "Full icon, title, description, and action button.",
          )}
          code={`<EmptyPreset
    icon={
      <FolderOpenIcon className="size-4 text-muted-foreground" />
    }
    title="No projects yet"
    description="Create your first project to get started."
    action={<Button>New Project</Button>}
    className="w-full min-h-70"
  />`}
          preview={
            <>
              <EmptyPreset
                icon={
                  <FolderOpenIcon className="size-4 text-muted-foreground" />
                }
                title="No projects yet"
                description="Create your first project to get started."
                action={<Button>New Project</Button>}
                className="w-full min-h-70"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Không có Icon (Without Icon)", "Without Icon")}
          description={t(
            "Bỏ prop icon — phù hợp khi không cần hình ảnh minh họa.",
            "Remove icon prop — suitable when illustration is not needed.",
          )}
          code={`<EmptyPreset
    title="No notifications"
    description="You're all caught up. Check back later."
    action={<Button variant="outline">Refresh</Button>}
    className="w-full min-h-70"
  />`}
          preview={
            <>
              <EmptyPreset
                title="No notifications"
                description="You're all caught up. Check back later."
                action={<Button variant="outline">Refresh</Button>}
                className="w-full min-h-70"
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Không có Nút (Without Action)", "Without Action")}
          description={t(
            "Chỉ hiển thị trạng thái, không yêu cầu hành động.",
            "Only shows status, no action required.",
          )}
          code={`<EmptyPreset
    icon={
      <InboxIcon className="size-4 text-muted-foreground" />
    }
    title="No messages"
    description="Messages from your team will appear here."
    className="w-full min-h-60"
  />`}
          preview={
            <>
              <EmptyPreset
                icon={<InboxIcon className="size-4 text-muted-foreground" />}
                title="No messages"
                description="Messages from your team will appear here."
                className="w-full min-h-60"
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Tối giản (Minimal)", "Minimal")}
          description={t("Chỉ có tiêu đề.", "Only title.")}
          code={`<EmptyPreset
    title="Nothing here yet"
    className="w-full min-h-60"
  />`}
          preview={
            <>
              <EmptyPreset
                title="Nothing here yet"
                className="w-full min-h-60"
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Kết quả tìm kiếm trống", "Empty Search Results")}
          description={t(
            "Pattern phổ biến khi tìm kiếm không ra kết quả.",
            "Common pattern when search yields no results.",
          )}
          code={`<EmptyPreset
    icon={
      <SearchIcon className="size-4 text-muted-foreground" />
    }
    title={'No results for "invoice"'}
    description="Try a different search term or clear all active filters."
    action={
      <div className="flex gap-2">
        <Button variant="outline">Clear filters</Button>
        <Button>Browse all</Button>
      </div>
    }
    className="w-full min-h-60"
  />`}
          preview={
            <>
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
                  className="w-full min-h-60"
                />
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Danh sách tài liệu (Document State)", "Document State")}
          description={t(
            "Description chứa liên kết HTML.",
            "Description contains HTML links.",
          )}
          code={`<EmptyPreset
    icon={
      <FileTextIcon className="size-4 text-muted-foreground" />
    }
    title="No documents"
    description={
      <>
        Upload or create your first document.{" "}
        <a href="#">Learn more</a>.
      </>
    }
    action={<Button>Upload Document</Button>}
    className="w-full min-h-60"
  />`}
          preview={
            <>
              <div className="w-full max-w-md">
                <EmptyPreset
                  icon={
                    <FileTextIcon className="size-4 text-muted-foreground" />
                  }
                  title="No documents"
                  description={
                    <>
                      Upload or create your first document.{" "}
                      <a href="#">Learn more</a>.
                    </>
                  }
                  action={<Button>Upload Document</Button>}
                  className="w-full min-h-60"
                />
              </div>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function EmptyMicroShowcase() {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Cơ bản (Default)", "Default")}
          description={t(
            "Trạng thái trống cơ bản với cấu trúc thủ công.",
            "Basic empty state with manual structure.",
          )}
          code={`<Empty className="w-full min-h-70">
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
  </Empty>`}
          preview={
            <>
              <Empty className="w-full min-h-70">
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Kèm Icon nền màu (Icon Variant)", "Icon Variant")}
          description={t(
            "Dùng EmptyMedia variant='icon' để hiển thị background mờ cho Icon.",
            "Use EmptyMedia variant='icon' to display a faded background for the Icon.",
          )}
          code={`<Empty className="w-full min-h-70">
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
          preview={
            <>
              <Empty className="w-full min-h-70">
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Chỉ văn bản (Text Only)", "Text Only")}
          description={t("Không icon, không action.", "No icon, no action.")}
          code={`<Empty className="w-full min-h-50">
    <EmptyHeader>
      <EmptyTitle>No results</EmptyTitle>
      <EmptyDescription>
        Try adjusting your filters or search terms.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>`}
          preview={
            <>
              <Empty className="w-full min-h-50">
                <EmptyHeader>
                  <EmptyTitle>No results</EmptyTitle>
                  <EmptyDescription>
                    Try adjusting your filters or search terms.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            </>
          }
        />

        <ShowcaseExample
          title={t(
            "Link bên trong mô tả (Link in Description)",
            "Link in Description",
          )}
          description={t(
            "EmptyDescription tự động style thẻ <a> bên trong.",
            "EmptyDescription automatically styles <a> tags inside.",
          )}
          code={`<Empty className="w-full min-h-50">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <InboxIcon className="size-4 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No messages yet</EmptyTitle>
      <EmptyDescription>
        Messages from your team will appear here. Learn more
        in our <a href="#">documentation</a>.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>`}
          preview={
            <>
              <Empty className="w-full min-h-50">
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
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Cấu trúc tùy chỉnh nâng cao", "Advanced Custom Structure")}
        description={t(
          "Nút xóa bộ lọc nằm tách biệt khỏi hành động chính.",
          "Clear filters button is separated from the main action.",
        )}
        code={`<div className="w-full max-w-md">
    <Empty className="w-full min-h-60">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon className="size-4 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>
          No results for &quot;invoice&quot;
        </EmptyTitle>
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
  </div>`}
        preview={
          <>
            <div className="w-full max-w-md">
              <Empty className="w-full min-h-60">
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
          </>
        }
      />

      <ShowcaseExample
        title={t("🧭 So sánh Use Case", "🧭 Use Case Comparison")}
        description={t(
          "Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro.",
          "Practical scenarios to help you decide whether to use Micro or Macro.",
        )}
        code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* ── Story 1: Macro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <CheckCircle2Icon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Standard Empty State
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Dùng \`EmptyPreset\` khi bạn chỉ cần một cấu trúc
        trạng thái trống mặc định, bao gồm icon, tiêu đề, mô
        tả và nút hành động. Giúp rút ngắn code đáng kể.
      </p>
    </div>

    {/* ── Story 2: Micro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <LayersIcon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Complex Custom Layout
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Use child components when you need to render custom
        SVG animations, swap the position of the description
        or button, or add secondary content like a link list.
      </p>
    </div>
  </div>`}
        preview={
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                    <CheckCircle2Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Story 1 · Macro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Standard Empty State
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use <code>EmptyPreset</code> when you only need a default
                  empty state structure, including an icon, title, description,
                  and action button. It significantly reduces code.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                    <LayersIcon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Story 2 · Micro
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                      Complex Custom Layout
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use child components when you need to render custom SVG
                  animations, swap the position of the description or button, or
                  add secondary content like a link list.
                </p>
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}

export default function EmptyShowcase() {
  const t = useI18n();
  return (
    <Showcase
      title="Empty"
      description={t(
        "Trạng thái trống hiển thị khi không có dữ liệu, chưa có nội dung, hoặc tìm kiếm không ra kết quả.",
        "Empty state displayed when there is no data, no content yet, or no search results.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để thông báo cho người dùng rằng không có dữ liệu để hiển thị ở đây. Nó thường đi kèm với hình ảnh hoặc icon minh họa và một hành động hướng dẫn để lấp đầy nội dung này (ví dụ: Tạo mới).",
              "Used to inform the user that there is no data to display here. It usually comes with an illustration or icon and an instructional action to fill this content (e.g., Create new).",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <EmptyMicroShowcase /> }}
      macro={{ content: <EmptyMacroShowcase /> }}
    />
  );
}
