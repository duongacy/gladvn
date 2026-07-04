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
        description="Displays a badge or a component that looks like a badge."
      />

      {/* ── Variants ── */}
      <ExampleSection
        label="Variants"
        description="All available visual styles."
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="solid">Solid</Badge>
          <Badge variant="soft">Soft</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ExampleSection>

      {/* ── Colors ── */}
      <ExampleSection
        label="Colors"
        description="Semantic color tokens applied to badges."
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="destructive">Destructive</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="muted">Muted</Badge>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge variant="soft" color="primary">Primary</Badge>
            <Badge variant="soft" color="secondary">Secondary</Badge>
            <Badge variant="soft" color="destructive">Destructive</Badge>
            <Badge variant="soft" color="warning">Warning</Badge>
            <Badge variant="soft" color="success">Success</Badge>
            <Badge variant="soft" color="info">Info</Badge>
            <Badge variant="soft" color="muted">Muted</Badge>
          </div>
        </div>
      </ExampleSection>

      {/* ── With Icons ── */}
      <ExampleSection
        label="With Icons"
        description="Badges with inline icons for added context."
      >
        <div className="flex flex-wrap gap-3">
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
      </ExampleSection>

      {/* ── Real-world Use Cases ── */}
      <ExampleSection
        label="Use Cases"
        description="Common real-world badge patterns."
      >
        <ExampleGrid columns={2}>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground font-medium">
              Status indicators
            </span>
            <div className="flex flex-wrap gap-2">
              <Badge color="success" variant="soft">Active</Badge>
              <Badge color="secondary" variant="soft">Inactive</Badge>
              <Badge color="destructive" variant="soft">Expired</Badge>
              <Badge color="muted" variant="outline">Archived</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground font-medium">
              Tags & categories
            </span>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" color="primary">React</Badge>
              <Badge variant="outline" color="secondary">TypeScript</Badge>
              <Badge variant="outline" color="info">Tailwind</Badge>
              <Badge variant="outline" color="warning">Vite</Badge>
            </div>
          </div>
        </ExampleGrid>
      </ExampleSection>

      {/* ── As Link ── */}
      <ExampleSection
        label="As Link"
        description="Badge rendered as an anchor element using the render prop."
      >
        <div className="flex flex-wrap gap-3">
          <Badge render={<a href="#" />}>
            Clickable Badge
          </Badge>
          <Badge color="secondary" render={<a href="#" />}>
            Secondary Link
          </Badge>
          <Badge variant="outline" render={<a href="#" />}>
            Outline Link
          </Badge>
        </div>
      </ExampleSection>
    </div>
  );
}
