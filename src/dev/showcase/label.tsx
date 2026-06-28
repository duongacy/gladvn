import { Label } from "../../index";
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function LabelShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Label" description="Renders an accessible label associated with controls." />

      <ExampleSection label="Default" description="Label linked to a checkbox via htmlFor.">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ExampleSection>
    </div>
  );
}
