import { useState } from "react";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/micro/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/micro/pagination";
import { SelectPreset } from "@/components/macro/select-preset";

export default function PaginationShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Pagination"
        description="Pagination with page navigation, next and previous links."
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

      <ExampleSection label="Default" description="Standard pagination layout.">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" size={globalSize} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size={globalSize}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive size={globalSize}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" size={globalSize}>
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" size={globalSize} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ExampleSection>
    </div>
  );
}
