import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { Skeleton } from "@/components/micro/skeleton";

export default function SkeletonShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Skeleton"
        description="Use to show a placeholder while content is loading."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Card Skeleton"
          description="User profile card loading state."
        >
          <div className="space-y-6 w-full max-w-sm">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24 rounded-xl" />
              <Skeleton className="h-24 rounded-xl" />
            </div>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Article Skeleton"
          description="Blog post or content loading state."
        >
          <div className="space-y-4 w-full max-w-sm">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="pt-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
