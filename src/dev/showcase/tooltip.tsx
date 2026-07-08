import { useState } from "react";
import { SectionHeader, ExampleSection, ExampleGrid } from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";
import { PlusIcon, HeartIcon, InfoIcon, ShieldAlertIcon } from "lucide-react";

import { type Size } from "@/lib/types";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/micro/tooltip";
import { Button } from "@/components/micro/button";

export default function TooltipShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Tooltip"
        description="A popup that displays information related to an element when it receives keyboard focus or the mouse hovers over it."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleSection
        label="Placements"
        description="Tooltips can be positioned on any side of the trigger."
      >
        <div className="grid grid-cols-2 gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Top</Button>
                }
              />
              <TooltipContent side="top">Tooltip on top</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Bottom</Button>
                }
              />
              <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Left</Button>
                }
              />
              <TooltipContent side="left">Tooltip on left</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Right</Button>
                }
              />
              <TooltipContent side="right">Tooltip on right</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Long Content"
          description="Tooltips automatically constrain their width and wrap long text."
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize} iconOnly>
                    <InfoIcon />
                  </Button>
                }
              />
              <TooltipContent>
                <p>
                  This is a significantly longer tooltip content that demonstrates how the tooltip handles wrapping text when it exceeds its maximum width constraint.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ExampleSection>

        <ExampleSection
          label="Disabled Trigger"
          description="Tooltips can still show when the underlying button is visually disabled, but often require a wrapper if native disabled is used."
        >
          <TooltipProvider>
            <Tooltip>
              {/* Note: We need a generic wrapper to capture hover events for disabled buttons */}
              <TooltipTrigger
                render={
                  <span tabIndex={0} className="inline-block cursor-not-allowed">
                    <Button variant="outline" size={globalSize} disabled className="pointer-events-none w-full h-full">
                      <ShieldAlertIcon />
                    </Button>
                  </span>
                }
              />
              <TooltipContent side="right">
                <p>You do not have permission.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Custom Delay"
        description="You can customize the delay before the tooltip appears using the delay prop on the Provider."
      >
        <div className="grid grid-cols-3 gap-4">
          <TooltipProvider delay={0}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Instant (0ms)</Button>
                }
              />
              <TooltipContent>Appears immediately</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delay={500}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Default (500ms)</Button>
                }
              />
              <TooltipContent>Appears after half a second</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delay={2000}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="outline" size={globalSize}>Slow (2000ms)</Button>
                }
              />
              <TooltipContent>Takes a while to appear</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </ExampleSection>
    </div>
  );
}
