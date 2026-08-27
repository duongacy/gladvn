import {
  FileTextIcon,
  FolderOpenIcon,
  InboxIcon,
  SearchIcon
} from "lucide-react";
import React from "react";

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
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  DocsP,
  ShowcaseDocs,
} from "../components/showcase";

function useEmptyExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Đầy đủ icon, title, description, action button.",
          "Full icon, title, description, and action button."
        ),
        macroCode: `<EmptyPreset
  icon={<FolderOpenIcon className="size-4 text-muted-foreground" />}
  title="No projects yet"
  description="Create your first project to get started."
  action={<Button>New Project</Button>}
  className="w-full min-h-70"
/>`,
        macroPreview: (
          <EmptyPreset
            icon={<FolderOpenIcon className="size-4 text-muted-foreground" />}
            title="No projects yet"
            description="Create your first project to get started."
            action={<Button size={globalSize}>New Project</Button>}
            className="w-full min-h-70"
          />
        ),
        microCode: `<Empty className="w-full min-h-70">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderOpenIcon className="size-4 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>
      Create your first project to get started.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <EmptyAction>
      <Button>New Project</Button>
    </EmptyAction>
  </EmptyContent>
</Empty>`,
        microPreview: (
          <Empty className="w-full min-h-70">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpenIcon className="size-4 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No projects yet</EmptyTitle>
              <EmptyDescription>
                Create your first project to get started.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <EmptyAction>
                <Button size={globalSize}>New Project</Button>
              </EmptyAction>
            </EmptyContent>
          </Empty>
        ),
      },
      {
        title: t("Không có Icon", "Without Icon"),
        description: t(
          "Bỏ prop icon — phù hợp khi không cần hình ảnh minh họa.",
          "Remove icon prop — suitable when illustration is not needed."
        ),
        macroCode: `<EmptyPreset
  title="No notifications"
  description="You're all caught up. Check back later."
  action={<Button variant="outline">Refresh</Button>}
  className="w-full min-h-70"
/>`,
        macroPreview: (
          <EmptyPreset
            title="No notifications"
            description="You're all caught up. Check back later."
            action={<Button variant="outline" size={globalSize}>Refresh</Button>}
            className="w-full min-h-70"
          />
        ),
        microCode: `<Empty className="w-full min-h-70">
  <EmptyHeader>
    <EmptyTitle>No notifications</EmptyTitle>
    <EmptyDescription>
      You're all caught up. Check back later.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <EmptyAction>
      <Button variant="outline">Refresh</Button>
    </EmptyAction>
  </EmptyContent>
</Empty>`,
        microPreview: (
          <Empty className="w-full min-h-70">
            <EmptyHeader>
              <EmptyTitle>No notifications</EmptyTitle>
              <EmptyDescription>
                You're all caught up. Check back later.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <EmptyAction>
                <Button variant="outline" size={globalSize}>Refresh</Button>
              </EmptyAction>
            </EmptyContent>
          </Empty>
        ),
      },
      {
        title: t("Không có Nút", "Without Action"),
        description: t(
          "Chỉ hiển thị trạng thái, không yêu cầu hành động.",
          "Only shows status, no action required."
        ),
        macroCode: `<EmptyPreset
  icon={<InboxIcon className="size-4 text-muted-foreground" />}
  title="No messages"
  description="Messages from your team will appear here."
  className="w-full min-h-60"
/>`,
        macroPreview: (
          <EmptyPreset
            icon={<InboxIcon className="size-4 text-muted-foreground" />}
            title="No messages"
            description="Messages from your team will appear here."
            className="w-full min-h-60"
          />
        ),
        microCode: `<Empty className="w-full min-h-60">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon className="size-4 text-muted-foreground" />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>
      Messages from your team will appear here.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`,
        microPreview: (
          <Empty className="w-full min-h-60">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon className="size-4 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>
                Messages from your team will appear here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ),
      },
      {
        title: t("Tối giản", "Minimal"),
        description: t("Chỉ có tiêu đề.", "Only title."),
        macroCode: `<EmptyPreset
  title="Nothing here yet"
  className="w-full min-h-60"
/>`,
        macroPreview: (
          <EmptyPreset
            title="Nothing here yet"
            className="w-full min-h-60"
          />
        ),
        microCode: `<Empty className="w-full min-h-60">
  <EmptyHeader>
    <EmptyTitle>Nothing here yet</EmptyTitle>
  </EmptyHeader>
</Empty>`,
        microPreview: (
          <Empty className="w-full min-h-60">
            <EmptyHeader>
              <EmptyTitle>Nothing here yet</EmptyTitle>
            </EmptyHeader>
          </Empty>
        ),
      },
      {
        title: t("Kết quả tìm kiếm trống", "Empty Search Results"),
        description: t(
          "Pattern phổ biến khi tìm kiếm không ra kết quả.",
          "Common pattern when search yields no results."
        ),
        macroCode: `<div className="w-full max-w-md">
  <EmptyPreset
    icon={<SearchIcon className="size-4 text-muted-foreground" />}
    title={'No results for "invoice"'}
    description="Try a different search term or clear all active filters."
    action={
      <div className="flex gap-2">
        <Button variant="outline">Clear filters</Button>
        <Button>Browse all</Button>
      </div>
    }
    className="w-full min-h-60"
  />
</div>`,
        macroPreview: (
          <div className="w-full max-w-md">
            <EmptyPreset
              icon={<SearchIcon className="size-4 text-muted-foreground" />}
              title={`No results for "invoice"`}
              description="Try a different search term or clear all active filters."
              action={
                <div className="flex gap-2">
                  <Button variant="outline" size={globalSize}>Clear filters</Button>
                  <Button size={globalSize}>Browse all</Button>
                </div>
              }
              className="w-full min-h-60"
            />
          </div>
        ),
        microCode: `<div className="w-full max-w-md">
  <Empty className="w-full min-h-60">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <SearchIcon className="size-4 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No results for "invoice"</EmptyTitle>
      <EmptyDescription>
        Try a different search term or clear all active filters.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <EmptyAction>
        <div className="flex gap-2">
          <Button variant="outline">Clear filters</Button>
          <Button>Browse all</Button>
        </div>
      </EmptyAction>
    </EmptyContent>
  </Empty>
</div>`,
        microPreview: (
          <div className="w-full max-w-md">
            <Empty className="w-full min-h-60">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <SearchIcon className="size-4 text-muted-foreground" />
                </EmptyMedia>
                <EmptyTitle>No results for &quot;invoice&quot;</EmptyTitle>
                <EmptyDescription>
                  Try a different search term or clear all active filters.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <EmptyAction>
                  <div className="flex gap-2">
                    <Button variant="outline" size={globalSize}>Clear filters</Button>
                    <Button size={globalSize}>Browse all</Button>
                  </div>
                </EmptyAction>
              </EmptyContent>
            </Empty>
          </div>
        ),
      },
      {
        title: t("Danh sách tài liệu", "Document State"),
        description: t(
          "Description chứa liên kết HTML.",
          "Description contains HTML links."
        ),
        macroCode: `<div className="w-full max-w-md">
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
    className="w-full min-h-60"
  />
</div>`,
        macroPreview: (
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
              action={<Button size={globalSize}>Upload Document</Button>}
              className="w-full min-h-60"
            />
          </div>
        ),
        microCode: `<div className="w-full max-w-md">
  <Empty className="w-full min-h-60">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FileTextIcon className="size-4 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No documents</EmptyTitle>
      <EmptyDescription>
        Upload or create your first document.{" "}
        <a href="#">Learn more</a>.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <EmptyAction>
        <Button>Upload Document</Button>
      </EmptyAction>
    </EmptyContent>
  </Empty>
</div>`,
        microPreview: (
          <div className="w-full max-w-md">
            <Empty className="w-full min-h-60">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileTextIcon className="size-4 text-muted-foreground" />
                </EmptyMedia>
                <EmptyTitle>No documents</EmptyTitle>
                <EmptyDescription>
                  Upload or create your first document.{" "}
                  <a href="#">Learn more</a>.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <EmptyAction>
                  <Button size={globalSize}>Upload Document</Button>
                </EmptyAction>
              </EmptyContent>
            </Empty>
          </div>
        ),
      },
      {
        title: t("Cấu trúc tùy chỉnh nâng cao", "Advanced Custom Structure"),
        description: t(
          "Nút xóa bộ lọc nằm tách biệt khỏi hành động chính.",
          "Clear filters button is separated from the main action."
        ),
        microCode: `<div className="w-full max-w-md">
  <Empty className="w-full min-h-60">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <SearchIcon className="size-4 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No results for "invoice"</EmptyTitle>
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
</div>`,
        microPreview: (
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
                  <Button variant="outline" size={globalSize}>Clear filters</Button>
                </EmptyAction>
              </EmptyContent>
            </Empty>
          </div>
        ),
      }
    ],
    [t, globalSize]
  );
}

export default function EmptyShowcase() {
  const t = useI18n();
  const examples = useEmptyExamples();

  return (
    <ConfigurableShowcase
      title="Empty"
      description={t(
        "Trạng thái trống hiển thị khi không có dữ liệu, chưa có nội dung, hoặc tìm kiếm không ra kết quả.",
        "Empty state displayed when there is no data, no content yet, or no search results."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để thông báo cho người dùng rằng không có dữ liệu để hiển thị ở đây. Nó thường đi kèm với hình ảnh hoặc icon minh họa và một hành động hướng dẫn để lấp đầy nội dung này (ví dụ: Tạo mới).",
              "Used to inform the user that there is no data to display here. It usually comes with an illustration or icon and an instructional action to fill this content (e.g., Create new)."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
