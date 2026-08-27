import React from "react";
import { AlertTriangle, Check, Info, X } from "lucide-react";

import { Badge } from "../../components/micro/badge";
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
  DocsCode,
} from "../components/showcase";

function useBadgeExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Các biến thể", "Variants"),
        description: t(
          "Tất cả các kiểu hiển thị hiện có.",
          "All currently available display styles."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge variant="solid">Solid</Badge>
  <Badge variant="soft">Soft</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="solid">Solid</Badge>
            <Badge variant="soft">Soft</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        ),
      },
      {
        title: t("Màu dạng Solid", "Solid Colors"),
        description: t(
          "Các màu semantic áp dụng cho Badge dạng Solid.",
          "Semantic colors applied to Solid Badges."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge color="primary">Primary</Badge>
  <Badge color="secondary">Secondary</Badge>
  <Badge color="destructive">Destructive</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="info">Info</Badge>
  <Badge color="muted">Muted</Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="destructive">Destructive</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="muted">Muted</Badge>
          </div>
        ),
      },
      {
        title: t("Màu dạng Soft", "Soft Colors"),
        description: t(
          "Các màu semantic áp dụng cho Badge dạng Soft.",
          "Semantic colors applied to Soft Badges."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge variant="soft" color="primary">Primary</Badge>
  <Badge variant="soft" color="secondary">Secondary</Badge>
  <Badge variant="soft" color="destructive">Destructive</Badge>
  <Badge variant="soft" color="warning">Warning</Badge>
  <Badge variant="soft" color="success">Success</Badge>
  <Badge variant="soft" color="info">Info</Badge>
  <Badge variant="soft" color="muted">Muted</Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="soft" color="primary">Primary</Badge>
            <Badge variant="soft" color="secondary">Secondary</Badge>
            <Badge variant="soft" color="destructive">Destructive</Badge>
            <Badge variant="soft" color="warning">Warning</Badge>
            <Badge variant="soft" color="success">Success</Badge>
            <Badge variant="soft" color="info">Info</Badge>
            <Badge variant="soft" color="muted">Muted</Badge>
          </div>
        ),
      },
      {
        title: t("Kèm Icon", "With Icons"),
        description: t(
          "Badge kèm icon để bổ sung ngữ cảnh.",
          "Badge with icon for additional context."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge color="success">
    <Check className="size-3.5" />
    Approved
  </Badge>
  <Badge color="destructive">
    <X className="size-3.5" />
    Rejected
  </Badge>
  <Badge color="warning" variant="soft">
    <AlertTriangle className="size-3.5" />
    Pending
  </Badge>
  <Badge color="info" variant="outline">
    <Info className="size-3.5" />
    Draft
  </Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge color="success">
              <Check className="size-3.5" />
              Approved
            </Badge>
            <Badge color="destructive">
              <X className="size-3.5" />
              Rejected
            </Badge>
            <Badge color="warning" variant="soft">
              <AlertTriangle className="size-3.5" />
              Pending
            </Badge>
            <Badge color="info" variant="outline">
              <Info className="size-3.5" />
              Draft
            </Badge>
          </div>
        ),
      },
      {
        title: t("Chỉ báo trạng thái", "Status Indicators"),
        description: t(
          "Dùng để hiển thị trạng thái.",
          "Used to display status."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge color="success" variant="soft">Active</Badge>
  <Badge color="secondary" variant="soft">Inactive</Badge>
  <Badge color="destructive" variant="soft">Expired</Badge>
  <Badge color="muted" variant="outline">Archived</Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge color="success" variant="soft">Active</Badge>
            <Badge color="secondary" variant="soft">Inactive</Badge>
            <Badge color="destructive" variant="soft">Expired</Badge>
            <Badge color="muted" variant="outline">Archived</Badge>
          </div>
        ),
      },
      {
        title: t("Nhãn & Danh mục", "Tags & Categories"),
        description: t(
          "Dùng để hiển thị danh mục.",
          "Used to display categories."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge variant="outline" color="primary">React</Badge>
  <Badge variant="outline" color="secondary">TypeScript</Badge>
  <Badge variant="outline" color="info">Tailwind</Badge>
  <Badge variant="outline" color="warning">Vite</Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="outline" color="primary">React</Badge>
            <Badge variant="outline" color="secondary">TypeScript</Badge>
            <Badge variant="outline" color="info">Tailwind</Badge>
            <Badge variant="outline" color="warning">Vite</Badge>
          </div>
        ),
      },
      {
        title: t("Dạng Liên kết", "As Link"),
        description: t(
          "Badge render dưới dạng thẻ a nhờ prop render.",
          "Badge rendered as an <a> tag via the render prop."
        ),
        microCode: `<div className="flex flex-wrap items-center gap-4">
  <Badge render={<a href="#" />}>Clickable Badge</Badge>
  <Badge color="secondary" render={<a href="#" />}>
    Secondary Link
  </Badge>
  <Badge variant="outline" render={<a href="#" />}>
    Outline Link
  </Badge>
</div>`,
        microPreview: (
          <div className="flex flex-wrap items-center gap-4">
            <Badge render={<a href="#" />}>Clickable Badge</Badge>
            <Badge color="secondary" render={<a href="#" />}>
              Secondary Link
            </Badge>
            <Badge variant="outline" render={<a href="#" />}>
              Outline Link
            </Badge>
          </div>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function BadgeShowcase() {
  const t = useI18n();
  const examples = useBadgeExamples();

  return (
    <ConfigurableShowcase
      title={t("Nhãn", "Badge")}
      description={t(
        "Hiển thị nhãn trạng thái, phân loại hoặc đếm số lượng.",
        "Displays status labels, categories, or counts."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để làm nổi bật trạng thái, nhãn phân loại hoặc số lượng. Thường là phần tử không tương tác, nhưng cũng có thể biến thành liên kết bằng cách dùng prop",
              "Used to highlight status, category labels, or counts. Usually a non-interactive element, but can also be turned into a link using the prop"
            )}{" "}
            <DocsCode>render</DocsCode>.
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
