import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button, MonoSelect } from "../../index";
import { SectionHeader, ExampleSection } from "../components/showcase";
import { PlusIcon, HeartIcon } from "lucide-react";

export default function TooltipShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Tooltip" description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.">
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

      <ExampleSection label="Standard" description="Hover to see more information.">
        <div className="flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" size={globalSize}><PlusIcon /></Button>} />
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" size={globalSize}><HeartIcon /></Button>} />
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
