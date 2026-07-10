import {
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
  SizeToggle,
} from "@/dev/components/showcase";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { useState } from "react";

import { Toggle } from "@/components/micro/toggle";
import { type Size } from "@/lib/types";

function ToggleMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Standard"
          description="Nút chuyển đổi duy nhất."
          codeString={`<div className="flex gap-2">
  <Toggle aria-label="Toggle italic">
    <ItalicIcon className="size-4 mr-2" />
    Italic
  </Toggle>
  <Toggle aria-label="Toggle bold">
    <BoldIcon className="size-4 mr-2" />
    Bold
  </Toggle>
</div>
`}
        >
          <div className="flex gap-2">
            <Toggle aria-label="Toggle italic" size={globalSize}>
              <ItalicIcon className="size-4 mr-2" />
              Italic
            </Toggle>
            <Toggle aria-label="Toggle bold" size={globalSize}>
              <BoldIcon className="size-4 mr-2" />
              Bold
            </Toggle>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Outline Variant"
          description="Chuyển đổi với phong cách phác thảo."
          codeString={`<div className="flex gap-2">
  <Toggle
    variant="outline"
    aria-label="Toggle underline"
  >
    <UnderlineIcon className="size-4 mr-2" />
    Underline
  </Toggle>
</div>
`}
        >
          <div className="flex gap-2">
            <Toggle
              variant="outline"
              aria-label="Toggle underline"
              size={globalSize}
            >
              <UnderlineIcon className="size-4 mr-2" />
              Underline
            </Toggle>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

export default function ToggleShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Toggle"
      description="Nút hai trạng thái có thể bật hoặc tắt."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Toggle</DocsH3>
          <DocsP>Sử dụng để tạo nút bấm có thể bật/tắt trạng thái.</DocsP>
        </ShowcaseDocs>
      }
      actions={<SizeToggle value={globalSize} onValueChange={setGlobalSize} />}
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ToggleMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
