import { useState } from "react";
import { ToggleGroup, ToggleGroupItem, MonoSelect } from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

export default function ToggleGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled on or off."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Single Selection"
          description="Only one item can be active."
        >
          <ToggleGroup type="single" defaultValue="center" size={globalSize}>
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
          description="Multiple items can be active."
        >
          <ToggleGroup
            type="multiple"
            defaultValue={["bold", "italic"]}
            size={globalSize}
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
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
