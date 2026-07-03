import { useState } from "react";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { PlusIcon, HeartIcon } from "lucide-react";

import { type Size } from "@/lib/types";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/micro/tooltip";
import { Button } from "@/components/micro/button";
import { SelectPreset } from "@/components/macro/select-preset";

export default function TooltipShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Tooltip"
        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ExampleSection
        label="Standard"
        description="Hover to see more information."
      >
        <div className="flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    <PlusIcon />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>
                    <HeartIcon />
                  </Button>
                }
              />
              <TooltipContent>
                <p>Like this post</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </ExampleSection>
    </div>
  );
}
