import {
  Empty,
  EmptyTitle,
  EmptyDescription,
  EmptyAction,
  EmptyHeader,
  EmptyContent,
  EmptyMedia,
  Button,
} from "@/index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { PlusIcon, FolderOpenIcon } from "lucide-react";

export default function EmptyShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Empty"
        description="A component for displaying empty states (e.g. no data, no results)."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Default"
          description="Standard empty state with action."
        >
          <Empty className="w-full h-full min-h-[300px]">
            <EmptyHeader>
              <EmptyTitle>No customers found</EmptyTitle>
              <EmptyDescription>
                Get started by adding your first customer.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <EmptyAction>
                <Button>
                  <PlusIcon className="mr-2" />
                  Add Customer
                </Button>
              </EmptyAction>
            </EmptyContent>
          </Empty>
        </ExampleSection>

        <ExampleSection
          label="Icon Variant"
          description="Empty state with media and content slots."
        >
          <Empty className="w-full h-full min-h-[300px]">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpenIcon className="size-10 text-muted-foreground" />
              </EmptyMedia>
              <EmptyTitle>No projects</EmptyTitle>
              <EmptyDescription>
                You don't have any active projects.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
