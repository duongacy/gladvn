import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  Button,
  MonoSelect,
} from "../../index";
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function PopoverShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
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

      <ExampleSection
        label="Default"
        description="A simple popover with header and description."
      >
        <Popover>
          <PopoverTrigger
            render={
              <Button variant="outline" size={globalSize}>
                Open Popover
              </Button>
            }
          />
          <PopoverContent className="w-80" sideOffset={8}>
            <PopoverHeader>
              <PopoverTitle>Dimensions</PopoverTitle>
              <PopoverDescription>
                Set the dimensions for the layer.
              </PopoverDescription>
            </PopoverHeader>
            <div className="grid gap-4 mt-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Width: 100%</p>
                <p className="text-sm text-muted-foreground">Height: 200px</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ExampleSection>
    </div>
  );
}
