import { Badge } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";
import { CheckIcon, XIcon, AlertTriangleIcon, InfoIcon } from "lucide-react";

export default function BadgeShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Badge" description="Displays a badge or a component that looks like a badge." />

      {/* ── Variants ── */}
      <ExampleSection label="Variants" description="All available visual styles.">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ExampleSection>

      {/* ── With Icons ── */}
      <ExampleSection label="With Icons" description="Badges with inline icons for added context.">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">
            <CheckIcon data-icon="inline-start" />
            Approved
          </Badge>
          <Badge variant="destructive">
            <XIcon data-icon="inline-start" />
            Rejected
          </Badge>
          <Badge variant="secondary">
            <AlertTriangleIcon data-icon="inline-start" />
            Pending
          </Badge>
          <Badge variant="outline">
            <InfoIcon data-icon="inline-start" />
            Draft
          </Badge>
        </div>
      </ExampleSection>

      {/* ── Real-world Use Cases ── */}
      <ExampleSection label="Use Cases" description="Common real-world badge patterns.">
        <ExampleGrid columns={2}>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground font-medium">Status indicators</span>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Active</Badge>
              <Badge variant="secondary">Inactive</Badge>
              <Badge variant="destructive">Expired</Badge>
              <Badge variant="outline">Archived</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-muted-foreground font-medium">Tags & categories</span>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind</Badge>
              <Badge variant="outline">Vite</Badge>
            </div>
          </div>
        </ExampleGrid>
      </ExampleSection>

      {/* ── As Link ── */}
      <ExampleSection label="As Link" description="Badge rendered as an anchor element using the render prop.">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default" render={<a href="#" />}>
            Clickable Badge
          </Badge>
          <Badge variant="secondary" render={<a href="#" />}>
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
