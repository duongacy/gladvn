import {
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
  SizeToggle,
} from "@/dev/components/showcase";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/micro/toggle-group";
import { type Size } from "@/lib/types";

function ToggleGroupMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Single Selection"
          description="Chỉ có một mục có thể hoạt động."
          codeString={`<ToggleGroup defaultValue={["center"]}>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeftIcon className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenterIcon className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRightIcon className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>
`}
        >
          <ToggleGroup defaultValue={["center"]} size={globalSize}>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeftIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenterIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRightIcon className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ExampleSection>

        <ExampleSection
          label="Multiple Selection"
          description="Nhiều mục có thể được kích hoạt."
          codeString={`<ToggleGroup
  defaultValue={["bold", "italic"]}
>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <BoldIcon className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <ItalicIcon className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <UnderlineIcon className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>
`}
        >
          <ToggleGroup defaultValue={["bold", "italic"]} size={globalSize}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

export default function ToggleGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Toggle Group"
      description="Một tập hợp các nút hai trạng thái có thể bật hoặc tắt."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Toggle Group</DocsH3>
          <DocsP>Sử dụng để tạo nhóm các nút bật/tắt liên kết với nhau.</DocsP>
        </ShowcaseDocs>
      }
      actions={<SizeToggle value={globalSize} onValueChange={setGlobalSize} />}
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <ToggleGroupMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
