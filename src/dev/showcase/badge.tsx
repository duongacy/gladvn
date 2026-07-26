import { AlertTriangleIcon, CheckIcon, InfoIcon, XIcon } from "lucide-react";

import { Badge } from "../../components/micro/badge";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

export default function BadgeShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Badge"
      description="Hiển thị nhãn trạng thái, phân loại hoặc đếm số lượng."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để làm nổi bật trạng thái, nhãn phân loại hoặc số lượng. Thường
            là phần tử không tương tác, nhưng cũng có thể biến thành liên kết
            bằng cách dùng prop <DocsCode>render</DocsCode>.
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <BadgeMicroShowcase globalSize={globalSize} /> }}
    />
  );
}

function BadgeMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ShowcaseExample title="Variants" description="Tất cả các kiểu hiển thị hiện có." code={`<Badge variant="solid">Solid</Badge>
  <Badge variant="soft">Soft</Badge>
  <Badge variant="outline">Outline</Badge>`} preview={
                  <>
          <Badge variant="solid">Solid</Badge><Badge variant="soft">Soft</Badge><Badge variant="outline">Outline</Badge>
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="Solid Colors" description="Các màu semantic áp dụng cho Badge dạng Solid." code={`<Badge color="primary">Primary</Badge>
  <Badge color="secondary">Secondary</Badge>
  <Badge color="destructive">Destructive</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="info">Info</Badge>
  <Badge color="muted">Muted</Badge>`} preview={
                      <>
              <Badge color="primary">Primary</Badge><Badge color="secondary">Secondary</Badge><Badge color="destructive">Destructive</Badge><Badge color="warning">Warning</Badge><Badge color="success">Success</Badge><Badge color="info">Info</Badge><Badge color="muted">Muted</Badge>
                      </>
                    } />

        <ShowcaseExample title="Soft Colors" description="Các màu semantic áp dụng cho Badge dạng Soft." code={`<Badge variant="soft" color="primary">
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
  </Badge>`} preview={
                      <>
              <Badge variant="soft" color="primary">
                          Primary
                        </Badge><Badge variant="soft" color="secondary">
                          Secondary
                        </Badge><Badge variant="soft" color="destructive">
                          Destructive
                        </Badge><Badge variant="soft" color="warning">
                          Warning
                        </Badge><Badge variant="soft" color="success">
                          Success
                        </Badge><Badge variant="soft" color="info">
                          Info
                        </Badge><Badge variant="soft" color="muted">
                          Muted
                        </Badge>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="With Icons" description="Badge kèm icon để bổ sung ngữ cảnh." code={`<Badge color="success">
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
  </Badge>`} preview={
                  <>
          <Badge color="success">
                    <CheckIcon className="size-3.5" />
                    Approved
                  </Badge><Badge color="destructive">
                    <XIcon className="size-3.5" />
                    Rejected
                  </Badge><Badge color="warning" variant="soft">
                    <AlertTriangleIcon className="size-3.5" />
                    Pending
                  </Badge><Badge color="info" variant="outline">
                    <InfoIcon className="size-3.5" />
                    Draft
                  </Badge>
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="Status Indicators" description="Dùng để hiển thị trạng thái." code={`<Badge color="success" variant="soft">
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
  </Badge>`} preview={
                      <>
              <Badge color="success" variant="soft">
                          Active
                        </Badge><Badge color="secondary" variant="soft">
                          Inactive
                        </Badge><Badge color="destructive" variant="soft">
                          Expired
                        </Badge><Badge color="muted" variant="outline">
                          Archived
                        </Badge>
                      </>
                    } />
        <ShowcaseExample title="Tags & Categories" description="Dùng để hiển thị danh mục." code={`<Badge variant="outline" color="primary">
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
  </Badge>`} preview={
                      <>
              <Badge variant="outline" color="primary">
                          React
                        </Badge><Badge variant="outline" color="secondary">
                          TypeScript
                        </Badge><Badge variant="outline" color="info">
                          Tailwind
                        </Badge><Badge variant="outline" color="warning">
                          Vite
                        </Badge>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="As Link" description="Badge render dưới dạng thẻ a nhờ prop render." code={`<Badge render={<a href="#" />}>Clickable Badge</Badge>

  <Badge color="secondary" render={<a href="#" />}>
    Secondary Link
  </Badge>

  <Badge variant="outline" render={<a href="#" />}>
    Outline Link
  </Badge>`} preview={
                  <>
          <Badge render={<a href="#" />}>Clickable Badge</Badge><Badge color="secondary" render={<a href="#" />}>
                    Secondary Link
                  </Badge><Badge variant="outline" render={<a href="#" />}>
                    Outline Link
                  </Badge>
                  </>
                } />
    </div>
  );
}
