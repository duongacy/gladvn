import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/index";
import { useState } from "react";
import { Spinner } from "@/index";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";

import { type Size } from "@/lib/types";

export default function SpinnerShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Spinner" description="A loading spinner indicator.">
        <Select value={globalSize} onValueChange={(v) => setGlobalSize(v as Size)}>
          <SelectTrigger className="w-[120px] h-8 text-xs bg-background">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Size: sm</SelectItem>
            <SelectItem value="md">Size: md</SelectItem>
            <SelectItem value="lg">Size: lg</SelectItem>
          </SelectContent>
        </Select>
      </SectionHeader>

      <ExampleSection label="Default" description="Standard spinner.">
        <Spinner size={globalSize} />
      </ExampleSection>
    </div>
  );
}
