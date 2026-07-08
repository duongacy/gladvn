import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { CheckIcon, XIcon, AlertTriangleIcon, InfoIcon } from "lucide-react";
import { Badge } from "@/components/micro/badge";

export default function BadgeShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Badge"
        description="Hiển thị huy hiệu hoặc thành phần trông giống huy hiệu."
      />

      {/* ── Variants ── */}
      <ExampleSection
        label="Variants"
        description="Tất cả các kiểu hiển thị hiện có."
        codeString={`<Badge variant="solid">Solid</Badge>
<Badge variant="soft">Soft</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <Badge variant="solid">Solid</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge variant="outline">Outline</Badge>
      </ExampleSection>

      {/* ── Colors ── */}
      <ExampleGrid columns={1}>
        <ExampleSection
          label="Solid Colors"
          description="Mã thông báo màu ngữ nghĩa được áp dụng cho huy hiệu (Solid)."
          codeString={`<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="destructive">Destructive</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="success">Success</Badge>
<Badge color="info">Info</Badge>
<Badge color="muted">Muted</Badge>`}
        >
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary">Secondary</Badge>
          <Badge color="destructive">Destructive</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="info">Info</Badge>
          <Badge color="muted">Muted</Badge>
        </ExampleSection>
        
        <ExampleSection
          label="Soft Colors"
          description="Mã thông báo màu ngữ nghĩa được áp dụng cho huy hiệu (Soft)."
          codeString={`<Badge variant="soft" color="primary">Primary</Badge>
<Badge variant="soft" color="secondary">Secondary</Badge>
<Badge variant="soft" color="destructive">Destructive</Badge>
<Badge variant="soft" color="warning">Warning</Badge>
<Badge variant="soft" color="success">Success</Badge>
<Badge variant="soft" color="info">Info</Badge>
<Badge variant="soft" color="muted">Muted</Badge>`}
        >
          <Badge variant="soft" color="primary">Primary</Badge>
          <Badge variant="soft" color="secondary">Secondary</Badge>
          <Badge variant="soft" color="destructive">Destructive</Badge>
          <Badge variant="soft" color="warning">Warning</Badge>
          <Badge variant="soft" color="success">Success</Badge>
          <Badge variant="soft" color="info">Info</Badge>
          <Badge variant="soft" color="muted">Muted</Badge>
        </ExampleSection>
      </ExampleGrid>

      {/* ── With Icons ── */}
      <ExampleSection
        label="With Icons"
        description="Huy hiệu có biểu tượng nội tuyến để bổ sung ngữ cảnh."
        codeString={`<Badge color="success">
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
</Badge>`}
      >
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
      </ExampleSection>

      {/* ── Real-world Use Cases ── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Status Indicators"
          description="Dùng để hiển thị trạng thái."
          codeString={`<Badge color="success" variant="soft">Active</Badge>
<Badge color="secondary" variant="soft">Inactive</Badge>
<Badge color="destructive" variant="soft">Expired</Badge>
<Badge color="muted" variant="outline">Archived</Badge>`}
        >
          <Badge color="success" variant="soft">Active</Badge>
          <Badge color="secondary" variant="soft">Inactive</Badge>
          <Badge color="destructive" variant="soft">Expired</Badge>
          <Badge color="muted" variant="outline">Archived</Badge>
        </ExampleSection>
        <ExampleSection
          label="Tags & Categories"
          description="Dùng để hiển thị danh mục."
          codeString={`<Badge variant="outline" color="primary">React</Badge>
<Badge variant="outline" color="secondary">TypeScript</Badge>
<Badge variant="outline" color="info">Tailwind</Badge>
<Badge variant="outline" color="warning">Vite</Badge>`}
        >
          <Badge variant="outline" color="primary">React</Badge>
          <Badge variant="outline" color="secondary">TypeScript</Badge>
          <Badge variant="outline" color="info">Tailwind</Badge>
          <Badge variant="outline" color="warning">Vite</Badge>
        </ExampleSection>
      </ExampleGrid>

      {/* ── As Link ── */}
      <ExampleSection
        label="As Link"
        description="Huy hiệu được hiển thị dưới dạng phần tử neo bằng cách sử dụng giá trị hiển thị."
        codeString={`<Badge render={<a href="#" />}>
  Clickable Badge
</Badge>

<Badge color="secondary" render={<a href="#" />}>
  Secondary Link
</Badge>

<Badge variant="outline" render={<a href="#" />}>
  Outline Link
</Badge>`}
      >
        <Badge render={<a href="#" />}>
          Clickable Badge
        </Badge>
        <Badge color="secondary" render={<a href="#" />}>
          Secondary Link
        </Badge>
        <Badge variant="outline" render={<a href="#" />}>
          Outline Link
        </Badge>
      </ExampleSection>
    </div>
  );
}
