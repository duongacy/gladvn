import { useState } from "react";
import { Label, MonoSelect, Field, FieldLabel } from "../../index";
import { Switch } from "../../components/monolithic/switch";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function SwitchShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Standard"
          description="Used for immediate toggle actions."
        >
          <div className="w-full max-w-sm space-y-4">
            {["Notifications", "Dark Mode", "Auto-save"].map((item, i) => (
              <Field
                orientation="horizontal"
                size={globalSize}
                key={item}
                className="justify-between"
              >
                <FieldLabel htmlFor={`switch-${item}`}>{item}</FieldLabel>
                <Switch
                  id={`switch-${item}`}
                  size={globalSize}
                  defaultChecked={i === 0}
                />
              </Field>
            ))}
          </div>
        </ExampleSection>

        <ExampleSection
          label="Disabled"
          description="Non-interactive switch states."
        >
          <div className="w-full max-w-sm space-y-4">
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel htmlFor="switch-d1">Airplane Mode</FieldLabel>
              <Switch
                id="switch-d1"
                disabled
                size={globalSize}
                defaultChecked
              />
            </Field>
            <Field
              orientation="horizontal"
              size={globalSize}
              className="justify-between"
            >
              <FieldLabel htmlFor="switch-d2">Developer Options</FieldLabel>
              <Switch id="switch-d2" disabled size={globalSize} />
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
