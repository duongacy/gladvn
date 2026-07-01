import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  Button,
} from "@/index";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function PopoverShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
      >
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
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
