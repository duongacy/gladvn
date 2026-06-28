import {
    FileX2Icon,
    InboxIcon,
    SearchIcon
} from "lucide-react"
import {
    Button,
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle
} from "../../index"
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function EmptyShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Empty States" description="Placeholder content for when there's no data to display." />

      <ExampleSection label="With Action" description="Empty state with a call-to-action button.">
        <div className="rounded-xl border border-dashed bg-muted/10 p-2 w-full max-w-md">
          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <InboxIcon className="size-8 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No messages yet</EmptyTitle>
              <EmptyDescription>
                When you receive a new message, it will appear here.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" color="primary">Send Message</Button>
            </EmptyContent>
          </Empty>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        <ExampleSection label="Search Empty" description="No results for search query.">
          <div className="rounded-xl border border-dashed bg-muted/10 p-2 w-full">
            <Empty>
              <EmptyHeader>
                <EmptyMedia className="size-12 rounded-xl bg-primary/10">
                  <SearchIcon className="size-6 text-primary" />
                </EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>Try adjusting your search filters.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </ExampleSection>
        
        <ExampleSection label="Error State" description="Resource not found.">
          <div className="rounded-xl border border-dashed bg-muted/10 p-2 w-full">
            <Empty>
              <EmptyHeader>
                <EmptyMedia className="size-12 rounded-full bg-destructive/10">
                  <FileX2Icon className="size-6 text-destructive" />
                </EmptyMedia>
                <EmptyTitle>File not found</EmptyTitle>
                <EmptyDescription>The document you requested does not exist.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
