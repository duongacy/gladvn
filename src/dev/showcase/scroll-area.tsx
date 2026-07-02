import { ScrollBar } from "@/components/micro/scroll-area";
import { ScrollArea } from "@/index";;
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

export default function ScrollAreaShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Scroll Area"
        description="Augments native scroll functionality for custom, cross-browser styling."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Vertical"
          description="Scrollable list of items."
        >
          <ScrollArea className="h-72 w-full max-w-sm rounded-xl border bg-card">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Settings
              </h4>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="text-sm py-2 border-b last:border-0">
                  Option {i + 1}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ExampleSection>

        <ExampleSection
          label="Horizontal"
          description="Horizontal scrolling gallery."
        >
          <ScrollArea className="w-full max-w-sm whitespace-nowrap rounded-xl border bg-card p-4">
            <div className="flex w-max space-x-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-[150px] shrink-0">
                  <div className="overflow-hidden rounded-md bg-muted aspect-[3/4] mb-2 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      Artwork {i + 1}
                    </span>
                  </div>
                  <p className="text-sm font-medium">Title {i + 1}</p>
                  <p className="text-xs text-muted-foreground">
                    Artist {i + 1}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
