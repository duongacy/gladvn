import { AlertTriangleIcon, CheckIcon, InfoIcon, XIcon } from "lucide-react";

import { Badge } from "../../components/micro/badge";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

export default function BadgeShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title={t("Nhãn (Badge)", "Badge")}
      description={t(
        "Hiển thị nhãn trạng thái, phân loại hoặc đếm số lượng.",
        "Displays status labels, categories, or counts.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để làm nổi bật trạng thái, nhãn phân loại hoặc số lượng. Thường là phần tử không tương tác, nhưng cũng có thể biến thành liên kết bằng cách dùng prop",
              "Used to highlight status, category labels, or counts. Usually a non-interactive element, but can also be turned into a link using the prop",
            )}{" "}
            <DocsCode>render</DocsCode>.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <BadgeMicroShowcase globalSize={globalSize} /> }}
    />
  );
}

function BadgeMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Các biến thể", "Variants")}
        description={t(
          "Tất cả các kiểu hiển thị hiện có.",
          "All currently available display styles.",
        )}
        code={`<div className="flex flex-wrap items-center gap-4">
  <Badge variant="solid">Solid</Badge>
    <Badge variant="soft">Soft</Badge>
    <Badge variant="outline">Outline</Badge>
</div>`}
        preview={
          <>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="solid">Solid</Badge>
              <Badge variant="soft">Soft</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Màu dạng Solid", "Solid Colors")}
          description={t(
            "Các màu semantic áp dụng cho Badge dạng Solid.",
            "Semantic colors applied to Solid Badges.",
          )}
          code={`<div className="flex flex-wrap items-center gap-4">
  <Badge color="primary">Primary</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="destructive">Destructive</Badge>
    <Badge color="warning">Warning</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="info">Info</Badge>
    <Badge color="muted">Muted</Badge>
</div>`}
          preview={
            <>
              <div className="flex flex-wrap items-center gap-4">
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="destructive">Destructive</Badge>
                <Badge color="warning">Warning</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="info">Info</Badge>
                <Badge color="muted">Muted</Badge>
              </div>
            </>
          }
        />

        <ShowcaseExample
          title={t("Màu dạng Soft", "Soft Colors")}
          description={t(
            "Các màu semantic áp dụng cho Badge dạng Soft.",
            "Semantic colors applied to Soft Badges.",
          )}
          code={`<div className="flex flex-wrap items-center gap-4">
  <Badge variant="soft" color="primary">
      Primary
    </Badge>
    <Badge variant="soft" color="secondary">
      Secondary
    </Badge>
    <Badge variant="soft" color="destructive">
      Destructive
    </Badge>
    <Badge variant="soft" color="warning">
      Warning
    </Badge>
    <Badge variant="soft" color="success">
      Success
    </Badge>
    <Badge variant="soft" color="info">
      Info
    </Badge>
    <Badge variant="soft" color="muted">
      Muted
    </Badge>
</div>`}
          preview={
            <>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="soft" color="primary">
                  Primary
                </Badge>
                <Badge variant="soft" color="secondary">
                  Secondary
                </Badge>
                <Badge variant="soft" color="destructive">
                  Destructive
                </Badge>
                <Badge variant="soft" color="warning">
                  Warning
                </Badge>
                <Badge variant="soft" color="success">
                  Success
                </Badge>
                <Badge variant="soft" color="info">
                  Info
                </Badge>
                <Badge variant="soft" color="muted">
                  Muted
                </Badge>
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Kèm Icon", "With Icons")}
        description={t(
          "Badge kèm icon để bổ sung ngữ cảnh.",
          "Badge with icon for additional context.",
        )}
        code={`<div className="flex flex-wrap items-center gap-4">
  <Badge color="success">
      <CheckIcon className="size-3.5" />
      Approved
    </Badge>
  
    <Badge color="destructive">
      <XIcon className="size-3.5" />
      Rejected
    </Badge>
  
    <Badge color="warning" variant="soft">
      <AlertTriangleIcon className="size-3.5" />
      Pending
    </Badge>
  
    <Badge color="info" variant="outline">
      <InfoIcon className="size-3.5" />
      Draft
    </Badge>
</div>`}
        preview={
          <>
            <div className="flex flex-wrap items-center gap-4">
              <Badge color="success">
                <CheckIcon className="size-3.5" />
                Approved
              </Badge>
              <Badge color="destructive">
                <XIcon className="size-3.5" />
                Rejected
              </Badge>
              <Badge color="warning" variant="soft">
                <AlertTriangleIcon className="size-3.5" />
                Pending
              </Badge>
              <Badge color="info" variant="outline">
                <InfoIcon className="size-3.5" />
                Draft
              </Badge>
            </div>
          </>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Chỉ báo trạng thái", "Status Indicators")}
          description={t(
            "Dùng để hiển thị trạng thái.",
            "Used to display status.",
          )}
          code={`<div className="flex flex-wrap items-center gap-4">
  <Badge color="success" variant="soft">
      Active
    </Badge>
    <Badge color="secondary" variant="soft">
      Inactive
    </Badge>
    <Badge color="destructive" variant="soft">
      Expired
    </Badge>
    <Badge color="muted" variant="outline">
      Archived
    </Badge>
</div>`}
          preview={
            <>
              <div className="flex flex-wrap items-center gap-4">
                <Badge color="success" variant="soft">
                  Active
                </Badge>
                <Badge color="secondary" variant="soft">
                  Inactive
                </Badge>
                <Badge color="destructive" variant="soft">
                  Expired
                </Badge>
                <Badge color="muted" variant="outline">
                  Archived
                </Badge>
              </div>
            </>
          }
        />
        <ShowcaseExample
          title={t("Nhãn & Danh mục", "Tags & Categories")}
          description={t(
            "Dùng để hiển thị danh mục.",
            "Used to display categories.",
          )}
          code={`<div className="flex flex-wrap items-center gap-4">
  <Badge variant="outline" color="primary">
      React
    </Badge>
    <Badge variant="outline" color="secondary">
      TypeScript
    </Badge>
    <Badge variant="outline" color="info">
      Tailwind
    </Badge>
    <Badge variant="outline" color="warning">
      Vite
    </Badge>
</div>`}
          preview={
            <>
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline" color="primary">
                  React
                </Badge>
                <Badge variant="outline" color="secondary">
                  TypeScript
                </Badge>
                <Badge variant="outline" color="info">
                  Tailwind
                </Badge>
                <Badge variant="outline" color="warning">
                  Vite
                </Badge>
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Dạng Liên kết", "As Link")}
        description={t(
          "Badge render dưới dạng thẻ a nhờ prop render.",
          "Badge rendered as an <a> tag via the render prop.",
        )}
        code={`<div className="flex flex-wrap items-center gap-4">
  <Badge render={<a href="#" />}>Clickable Badge</Badge>
  
    <Badge color="secondary" render={<a href="#" />}>
      Secondary Link
    </Badge>
  
    <Badge variant="outline" render={<a href="#" />}>
      Outline Link
    </Badge>
</div>`}
        preview={
          <>
            <div className="flex flex-wrap items-center gap-4">
              <Badge render={<a href="#" />}>Clickable Badge</Badge>
              <Badge color="secondary" render={<a href="#" />}>
                Secondary Link
              </Badge>
              <Badge variant="outline" render={<a href="#" />}>
                Outline Link
              </Badge>
            </div>
          </>
        }
      />
    </div>
  );
}
