import { useDevContext } from "@/dev/components/dev-context";
import { useState } from "react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/components/micro/toggle";
import { type Size } from "@/lib/types";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "@/dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Micro Content
// ──────────────────────────────────────────────────────────
function ToggleMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      {/* Variants */}
      <ExampleGrid>
        <ExampleSection
          label="Default (Ghost)"
          description="Variant mặc định — không viền, chỉ đổi nền khi pressed."
          codeString={`<Toggle aria-label="Toggle italic">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle aria-label="Toggle bold">
  <BoldIcon />
  Bold
</Toggle>`}
        >
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle aria-label="Toggle bold" size={globalSize}>
              <BoldIcon />
              Bold
            </Toggle>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Outline"
          description='variant="outline" thêm viền border-input xung quanh toggle.'
          codeString={`<Toggle variant="outline" aria-label="Toggle italic">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle variant="outline" aria-label="Toggle underline">
  <UnderlineIcon />
  Underline
</Toggle>`}
        >
          <div className="flex gap-2">
            <Toggle
              variant="outline"
              aria-label="Toggle italic"
              size={globalSize}
            >
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle
              variant="outline"
              aria-label="Toggle underline"
              size={globalSize}
            >
              <UnderlineIcon />
              Underline
            </Toggle>
          </div>
        </ExampleSection>
      </ExampleGrid>

      {/* Icon Only & Disabled */}
      <ExampleGrid>
        <ExampleSection
          label="Icon Only"
          description="Toggle chỉ có icon — luôn truyền aria-label để đảm bảo a11y."
          codeString={`<Toggle aria-label="Toggle italic"><ItalicIcon /></Toggle>
<Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>
<Toggle variant="outline" aria-label="Toggle underline"><UnderlineIcon /></Toggle>`}
        >
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon />
            </Toggle>
            <Toggle aria-label="Toggle bold" size={globalSize}>
              <BoldIcon />
            </Toggle>
            <Toggle
              variant="outline"
              aria-label="Toggle underline"
              size={globalSize}
            >
              <UnderlineIcon />
            </Toggle>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Toggle bị vô hiệu hóa — không thể tương tác, hiển thị mờ."
          codeString={`<Toggle disabled aria-label="Toggle italic">
  <ItalicIcon />
  Italic
</Toggle>
<Toggle variant="outline" disabled aria-label="Toggle bold">
  <BoldIcon />
  Bold
</Toggle>`}
        >
          <div className="flex gap-2">
            <Toggle disabled aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle
              variant="outline"
              disabled
              aria-label="Toggle bold"
              size={globalSize}
            >
              <BoldIcon />
              Bold
            </Toggle>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Entry point
// ──────────────────────────────────────────────────────────
export default function ToggleShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Toggle"
      description="Nút hai trạng thái có thể bật hoặc tắt, hỗ trợ icon, text, variants và sizes."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Toggle</DocsH3>
          <DocsP>
            <DocsCode>Toggle</DocsCode> là nút có 2 trạng thái bật/tắt dựa trên{" "}
            <DocsCode>aria-pressed</DocsCode>. Hỗ trợ 2 variant:{" "}
            <DocsCode>default</DocsCode> (ghost, không viền) và{" "}
            <DocsCode>outline</DocsCode> (có viền). Luôn truyền{" "}
            <DocsCode>aria-label</DocsCode> khi Toggle chỉ chứa icon để đảm bảo
            a11y.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ToggleMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
