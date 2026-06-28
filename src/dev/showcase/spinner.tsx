import { Spinner } from "../../index"
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function SpinnerShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Spinner" description="A loading spinner indicator." />

      <ExampleSection label="Sizes & Colors" description="Spinner in different sizes and colors.">
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="lg" color="primary" />
          <Spinner size="lg" color="destructive" />
          <Spinner size="lg" color="success" />
        </div>
      </ExampleSection>
    </div>
  );
}
