import { ChevronsUpDownIcon } from "lucide-react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { Button } from "@/components/micro/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/micro/collapsible";

export default function CollapsibleShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Collapsible"
        description="An interactive component which expands/collapses a panel."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Default"
          description="Click the toggle to expand or collapse."
        >
          <Collapsible className="w-full space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="sm" className="w-9 p-0" />
                }
              >
                <ChevronsUpDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border bg-muted/50 px-4 py-3 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border bg-muted/50 px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border bg-muted/50 px-4 py-3 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ExampleSection>

        <ExampleSection
          label="Default Open"
          description="Starts in the expanded state."
        >
          <Collapsible defaultOpen className="w-full space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">Recent activity</h4>
              <CollapsibleTrigger
                render={
                  <Button variant="ghost" size="sm" className="w-9 p-0" />
                }
              >
                <ChevronsUpDownIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border bg-muted/50 px-4 py-3 font-mono text-sm">
              Pushed to main
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border bg-muted/50 px-4 py-3 font-mono text-sm">
                Merged PR #42
              </div>
              <div className="rounded-md border bg-muted/50 px-4 py-3 font-mono text-sm">
                Opened issue #43
              </div>
            </CollapsibleContent>
          </Collapsible>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
