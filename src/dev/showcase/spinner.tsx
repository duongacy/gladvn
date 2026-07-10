import {
  DocsH3,
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
  SizeToggle,
} from "@/dev/components/showcase";
import { useState } from "react";

import { Spinner } from "@/components/micro/spinner";
import { type Size } from "@/lib/types";

function SpinnerMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Default"
        description="Máy quay tiêu chuẩn."
        codeString={`<Spinner />
`}
      >
        <Spinner size={globalSize} />
      </ExampleSection>
    </div>
  );
}

export default function SpinnerShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Spinner"
      description="Một chỉ báo quay vòng tải."
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Spinner</DocsH3>
          <DocsP>Sử dụng để hiển thị trạng thái đang tải (loading).</DocsP>
        </ShowcaseDocs>
      }
      actions={<SizeToggle value={globalSize} onValueChange={setGlobalSize} />}
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <SpinnerMicroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
