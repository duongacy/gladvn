import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { PaginationPreset } from "@/components/macro/pagination-preset";

export default function MacroPaginationShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Pagination (Macro)"
        description="A preset component that renders pagination based on current and total pages."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Basic pagination.">
          <PaginationPreset
            currentPage={4}
            totalPages={10}
          />
        </ExampleSection>

        <ExampleSection label="Many Pages" description="Pagination with a large number of pages showing ellipses on both sides.">
          <PaginationPreset
            currentPage={50}
            totalPages={100}
          />
        </ExampleSection>

        <ExampleSection label="First Page" description="When on the first page, the previous button is disabled.">
          <PaginationPreset
            currentPage={1}
            totalPages={5}
          />
        </ExampleSection>

        <ExampleSection label="Last Page" description="When on the last page, the next button is disabled.">
          <PaginationPreset
            currentPage={5}
            totalPages={5}
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
