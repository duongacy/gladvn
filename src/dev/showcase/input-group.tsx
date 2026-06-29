import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  MonoSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
  InputGroupTextarea,
  Button,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";
import { SearchIcon } from "lucide-react";

export default function InputGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input Group"
        description="Combine text inputs with addons for things like URLs or prices."
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
          label="URL Input"
          description="Input with prefix and suffix addons."
        >
          <div className="w-full max-w-md">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-group">Website</FieldLabel>
              <FieldDescription>
                Combine text inputs with addons for things like URLs or prices.
              </FieldDescription>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="tf-group" placeholder="sadcn.ui" />
                  <InputGroupAddon>
                    <InputGroupText>.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>

        <ExampleSection
          label="With Button"
          description="Input combined with an action button."
        >
          <div className="w-full max-w-md">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-search">Search</FieldLabel>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupInput id="tf-search" placeholder="Search..." />
                  <InputGroupButton>
                    <Button variant="solid" size={globalSize}>
                      <SearchIcon className="size-4 mr-2" /> Find
                    </Button>
                  </InputGroupButton>
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="With Textarea"
        description="Input group applied to a textarea component."
      >
        <div className="w-full max-w-md">
          <Field size={globalSize}>
            <FieldLabel htmlFor="tf-comment">Comment</FieldLabel>
            <FieldContent>
              <InputGroup size={globalSize} className="h-auto">
                <InputGroupAddon className="items-start pt-2">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <InputGroupTextarea
                  id="tf-comment"
                  placeholder="Write a comment..."
                  rows={4}
                />
              </InputGroup>
            </FieldContent>
          </Field>
        </div>
      </ExampleSection>
    </div>
  );
}
