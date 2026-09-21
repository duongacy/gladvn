import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { ComboboxPreset } from "@/components/macro/combobox-preset";
import { Button } from "@/components/micro/button";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/micro/combobox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/micro/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/micro/input-group";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";
import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";

const sizeHeightClasses: Record<Size, string> = {
  sm: "h-7",
  md: "h-8",
  lg: "h-9",
};

const frameworkOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];
const frontendFrameworks = ["react", "vue", "svelte"];
const backendFrameworks = ["express", "nest"];
const allFrameworks = [...frontendFrameworks, ...backendFrameworks];
const backendFrameworkOptions = [
  { value: "express", label: "Express" },
  { value: "nestjs", label: "NestJS" },
];
const allFrameworkOptions = [...frameworkOptions, ...backendFrameworkOptions];
const tagOptions = [
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature" },
  { value: "enhancement", label: "Enhancement" },
  { value: "docs", label: "Documentation" },
];
const engineOptions = [
  { value: "v8", label: "V8 (Chrome)" },
  { value: "spidermonkey", label: "SpiderMonkey (Firefox)" },
];
const timezoneOptions = Array.from({ length: 50 }).map((_, i) => ({
  value: `utc${i - 12}`,
  label: `UTC ${i - 12 > 0 ? "+" : ""}${i - 12}:00`,
}));
const teamOptions = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
];
const regionOptions = [{ value: "ap", label: "Asia Pacific" }];

const formSchema = z.object({
  framework: z.string().min(1, "Please select a framework."),
});
type FormValues = z.infer<typeof formSchema>;

function ComboboxFormPreview({ globalSize }: { globalSize: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: "" },
  });

  const handleFormSubmit = React.useCallback(
    form.handleSubmit((v) => alert(JSON.stringify(v))),
    [form.handleSubmit],
  );

  return (
    <form onSubmit={handleFormSubmit} className="w-full space-y-6">
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            size={globalSize}
            label="Framework"
            description="The tool you use most often."
            placeholder="Select one..."
            searchPlaceholder="Search..."
            emptyText="Not found."
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={globalSize}>
        Confirm
      </Button>
    </form>
  );
}


function FilteringComboboxPreview({ globalSize }: { globalSize: Size }) {
  const [inputValue, setInputValue] = React.useState("");
  const filteredOptions = React.useMemo(
    () =>
      frameworkOptions.filter((o) =>
        o.label.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue],
  );
  return (
    <ComboboxPreset
      className="w-full"
      size={globalSize}
      label="Framework"
      description="Type to filter — the library never filters implicitly."
      placeholder="Type to filter..."
      emptyText="No match."
      options={filteredOptions}
      inputValue={inputValue}
      onInputValueChange={setInputValue}
    />
  );
}


function useComboboxExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Tương tự Select nhưng có thể gõ để tìm kiếm.",
          "Similar to Select but allows typing to search."
        ),
        macroCode: `<ComboboxPreset
  className="w-full"
  label="Framework"
  description="Supports thousands of records without lag."
  placeholder="Select framework..."
  emptyText="No framework found."
  options={[
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ]}
/>`,
        macroPreview: (
          <ComboboxPreset
            className="w-full"
            size={globalSize}
            label="Framework"
            description="Supports thousands of records without lag."
            placeholder="Select framework..."
            emptyText="No framework found."
            options={frameworkOptions}
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="combobox-standard">Framework</FieldLabel>
  <FieldContent>
    <Combobox
      items={frameworkOptions}
      filter={null}
      itemToStringLabel={(val) => frameworkOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <InputGroup className="w-full">
          <ComboboxInput
            id="combobox-standard"
            placeholder="Select framework..."
            render={<InputGroupInput />}
          />
          <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
            <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden" />
            <ComboboxClear />
          </InputGroupAddon>
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Frontend</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="angular">Angular</ComboboxItem>
            <ComboboxItem value="svelte">Svelte</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="combobox-standard-preview">Framework</FieldLabel>
            <FieldContent>
              <Combobox
                items={frameworkOptions}
                filter={null}
                itemToStringLabel={(val) => frameworkOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
              >
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                    <ComboboxInput
                      id="combobox-standard-preview"
                      placeholder="Select framework..."
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
                      <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>
                <ComboboxContent>
                  <ComboboxEmpty>No framework found.</ComboboxEmpty>
                  <ComboboxList>
                    <ComboboxGroup>
                      <ComboboxLabel>Frontend</ComboboxLabel>
                      <ComboboxItem value="react">React</ComboboxItem>
                      <ComboboxItem value="vue">Vue</ComboboxItem>
                      <ComboboxItem value="angular">Angular</ComboboxItem>
                      <ComboboxItem value="svelte">Svelte</ComboboxItem>
                    </ComboboxGroup>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Nhóm & Ngăn cách", "Grouped with Separator"),
        description: t(
          "Nhóm các lựa chọn liên quan với ComboboxLabel và phân cách nhóm bằng ComboboxSeparator.",
          "Groups related options with ComboboxLabel and separates groups using ComboboxSeparator."
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="combobox-grouped">Framework</FieldLabel>
  <FieldContent>
    <Combobox
      items={allFrameworkOptions}
      filter={null}
      itemToStringLabel={(val) => allFrameworkOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <InputGroup className="w-full">
          <ComboboxInput
            id="combobox-grouped"
            placeholder="Select framework..."
            render={<InputGroupInput />}
          />
          <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
            <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden" />
            <ComboboxClear />
          </InputGroupAddon>
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Frontend</ComboboxLabel>
            <ComboboxItem value="react">React</ComboboxItem>
            <ComboboxItem value="vue">Vue</ComboboxItem>
            <ComboboxItem value="angular">Angular</ComboboxItem>
            <ComboboxItem value="svelte">Svelte</ComboboxItem>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxGroup>
            <ComboboxLabel>Backend</ComboboxLabel>
            <ComboboxItem value="express">Express</ComboboxItem>
            <ComboboxItem value="nestjs">NestJS</ComboboxItem>
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="combobox-grouped-preview">Framework</FieldLabel>
            <FieldContent>
              <Combobox
                items={allFrameworkOptions}
                filter={null}
                itemToStringLabel={(val) =>
                  allFrameworkOptions.find((o) => o.value === val)?.label ?? String(val ?? "")
                }
              >
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                    <ComboboxInput
                      id="combobox-grouped-preview"
                      placeholder="Select framework..."
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
                      <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>
                <ComboboxContent>
                  <ComboboxEmpty>No framework found.</ComboboxEmpty>
                  <ComboboxList>
                    <ComboboxGroup>
                      <ComboboxLabel>Frontend</ComboboxLabel>
                      <ComboboxItem value="react">React</ComboboxItem>
                      <ComboboxItem value="vue">Vue</ComboboxItem>
                      <ComboboxItem value="angular">Angular</ComboboxItem>
                      <ComboboxItem value="svelte">Svelte</ComboboxItem>
                    </ComboboxGroup>
                    <ComboboxSeparator />
                    <ComboboxGroup>
                      <ComboboxLabel>Backend</ComboboxLabel>
                      <ComboboxItem value="express">Express</ComboboxItem>
                      <ComboboxItem value="nestjs">NestJS</ComboboxItem>
                    </ComboboxGroup>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Chọn nhiều", "Multi-select Chips"),
        description: t(
          "Sử dụng ComboboxChips và ComboboxChip thay cho Input.",
          "Uses ComboboxChips and ComboboxChip instead of Input."
        ),
        microCode: `<Field className="w-full">
  <FieldLabel>Assign Tags</FieldLabel>
  <FieldContent>
    <Combobox
      items={tagOptions}
      multiple
      defaultValue={["bug", "feature"]}
      filter={null}
      itemToStringLabel={(val) => tagOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <ComboboxChips>
          <ComboboxValue>
            {(values: string[]) => (
              <React.Fragment>
                {values.map((tag) => {
                  const opt = tagOptions.find((t) => t.value === tag);
                  return (
                    <ComboboxChip
                      key={tag}
                      value={tag}
                      removeLabel={\`Remove \${opt?.label ?? tag}\`}
                    >
                      {opt?.label ?? tag}
                    </ComboboxChip>
                  );
                })}
                <ComboboxChipsInput placeholder={values.length > 0 ? "" : "Add tag..."} />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>Tag not found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxItem value="bug">Bug</ComboboxItem>
          <ComboboxItem value="feature">Feature</ComboboxItem>
          <ComboboxItem value="enhancement">Enhancement</ComboboxItem>
          <ComboboxItem value="docs">Documentation</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
  <FieldDescription>You can select multiple tags at once.</FieldDescription>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel>Assign Tags</FieldLabel>
            <FieldContent>
              <Combobox
                items={tagOptions}
                multiple
                defaultValue={["bug", "feature"]}
                filter={null}
                itemToStringLabel={(val) => tagOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
              >
                <ComboboxAnchor className="w-full">
                  <ComboboxChips size={globalSize}>
                    <ComboboxValue>
                      {(values: string[]) => (
                        <React.Fragment>
                          {values.map((tag) => {
                            const opt = tagOptions.find((t) => t.value === tag);
                            return (
                              <ComboboxChip
                                key={tag}
                                value={tag}
                                removeLabel={`Remove ${opt?.label ?? tag}`}
                              >
                                {opt?.label ?? tag}
                              </ComboboxChip>
                            );
                          })}
                          <ComboboxChipsInput placeholder={values.length > 0 ? "" : "Add tag..."} />
                        </React.Fragment>
                      )}
                    </ComboboxValue>
                  </ComboboxChips>
                </ComboboxAnchor>
                <ComboboxContent>
                  <ComboboxEmpty>Tag not found.</ComboboxEmpty>
                  <ComboboxList>
                    <ComboboxItem value="bug">Bug</ComboboxItem>
                    <ComboboxItem value="feature">Feature</ComboboxItem>
                    <ComboboxItem value="enhancement">Enhancement</ComboboxItem>
                    <ComboboxItem value="docs">Documentation</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
            <FieldDescription>
              You can select multiple tags at once.
            </FieldDescription>
          </Field>
        ),
      },
      {
        title: t("Cuộn danh sách dài", "Long List Scrolling"),
        description: t(
          "Trải nghiệm mượt mà với danh sách ảo hoá.",
          "Smooth experience with virtualized list."
        ),
        macroCode: `<ComboboxPreset
  className="w-full"
  label="Timezone"
  placeholder="Select timezone..."
  emptyText="Timezone not found."
  options={timezoneOptions}
/>`,
        macroPreview: (
          <ComboboxPreset
            className="w-full"
            size={globalSize}
            label="Timezone"
            placeholder="Select timezone..."
            emptyText="Timezone not found."
            options={timezoneOptions}
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="combobox-timezone">Timezone</FieldLabel>
  <FieldContent>
    <Combobox
      items={timezoneOptions}
      filter={null}
      itemToStringLabel={(val) => timezoneOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <InputGroup className="w-full">
          <ComboboxInput id="combobox-timezone" placeholder="Select timezone..." render={<InputGroupInput />} />
          <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
            <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden disabled:opacity-50" />
            <ComboboxClear />
          </InputGroupAddon>
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>Timezone not found.</ComboboxEmpty>
        <ComboboxList>
          {timezoneOptions.map((opt) => (
            <ComboboxItem key={opt.value} value={opt.value}>
              {opt.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="combobox-timezone-preview">Timezone</FieldLabel>
            <FieldContent>
              <Combobox
                items={timezoneOptions}
                filter={null}
                itemToStringLabel={(val) => timezoneOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
              >
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                    <ComboboxInput
                      id="combobox-timezone-preview"
                      placeholder="Select timezone..."
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
                      <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>
                <ComboboxContent>
                  <ComboboxEmpty>Timezone not found.</ComboboxEmpty>
                  <ComboboxList>
                    {timezoneOptions.map((opt) => (
                      <ComboboxItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Render Hướng Dữ liệu", "Data-Driven Rendering"),
        description: t(
          "Dùng ComboboxCollection để render items từ mảng dữ liệu — Base UI tự động áp dụng filter.",
          "Use ComboboxCollection to render items from a data array — Base UI automatically applies filtering."
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="combobox-collection">Framework</FieldLabel>
  <FieldContent>
    <Combobox
      items={frameworkOptions}
      itemToStringLabel={(val) => frameworkOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <InputGroup className="w-full">
          <ComboboxInput
            id="combobox-collection"
            placeholder="Search framework..."
            render={<InputGroupInput />}
          />
          <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
            <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden" />
            <ComboboxClear />
          </InputGroupAddon>
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxCollection>
            {(item) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxCollection>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="combobox-collection-preview">Framework</FieldLabel>
            <FieldContent>
              <Combobox
                items={frameworkOptions}
                itemToStringLabel={(val) =>
                  frameworkOptions.find((o) => o.value === val)?.label ?? String(val ?? "")
                }
              >
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                    <ComboboxInput
                      id="combobox-collection-preview"
                      placeholder="Search framework..."
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
                      <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>
                <ComboboxContent>
                  <ComboboxEmpty>No framework found.</ComboboxEmpty>
                  <ComboboxList>
                    <ComboboxCollection>
                      {(item: { value: string; label: string }) => (
                        <ComboboxItem key={item.value} value={item.value}>
                          {item.label}
                        </ComboboxItem>
                      )}
                    </ComboboxCollection>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Trạng thái Lỗi", "Error State"),
        description: t(
          "Báo lỗi hoặc gắn trạng thái invalid.",
          "Shows an error or sets invalid state."
        ),
        macroCode: `<ComboboxPreset
  className="w-full"
  label="Region (Error)"
  placeholder="Select region..."
  options={[{ value: "ap", label: "Asia Pacific" }]}
  errorMessage="Region is required."
/>`,
        macroPreview: (
          <ComboboxPreset
            size={globalSize}
            className="w-full"
            label="Region (Error)"
            placeholder="Select region..."
            options={regionOptions}
            errorMessage="Region is required."
          />
        ),
        microCode: `<Field error className="w-full">
  <FieldLabel htmlFor="combobox-error">Region (Error)</FieldLabel>
  <FieldContent>
    <Combobox
      items={regionOptions}
      filter={null}
      itemToStringLabel={(val) => regionOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <InputGroup className="w-full">
          <ComboboxInput
            id="combobox-error"
            placeholder="Select region..."
            aria-invalid={true}
            aria-describedby="combobox-error-msg"
            render={<InputGroupInput />}
          />
          <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
            <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden" />
            <ComboboxClear />
          </InputGroupAddon>
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="ap">Asia Pacific</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
  <FieldError id="combobox-error-msg">Region is required.</FieldError>
</Field>`,
        microPreview: (
          <Field size={globalSize} error className="w-full">
            <FieldLabel htmlFor="combobox-error-preview">Region (Error)</FieldLabel>
            <FieldContent>
              <Combobox
                items={regionOptions}
                filter={null}
                itemToStringLabel={(val) => regionOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
              >
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                    <ComboboxInput
                      id="combobox-error-preview"
                      placeholder="Select region..."
                      aria-invalid={true}
                      aria-describedby="combobox-error-preview-msg"
                      render={<InputGroupInput />}
                    />
                    <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
                      <ComboboxTrigger className="group-has-[[data-slot=combobox-clear][data-visible]]/input-group:hidden disabled:cursor-not-allowed disabled:opacity-50" />
                      <ComboboxClear />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxItem value="ap">Asia Pacific</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
            <FieldError id="combobox-error-preview-msg">Region is required.</FieldError>
          </Field>
        ),
      },
      {
        title: t("Khóa / Bất hoạt", "Disabled State"),
        description: t(
          "Người dùng không thể tương tác.",
          "Users cannot interact with the input."
        ),
        macroCode: `<ComboboxPreset
  className="w-full"
  label="Team"
  description="You do not have permission to change teams in this project."
  placeholder="Select team..."
  options={[
    { value: "engineering", label: "Engineering" },
    { value: "design", label: "Design" },
  ]}
  value="engineering"
  disabled
/>`,
        macroPreview: (
          <ComboboxPreset
            className="w-full"
            size={globalSize}
            label="Team"
            description="You do not have permission to change teams in this project."
            placeholder="Select team..."
            options={teamOptions}
            value="engineering"
            disabled
          />
        ),
        microCode: `<Field className="w-full">
  <FieldLabel htmlFor="combobox-disabled">Team</FieldLabel>
  <FieldContent>
    <Combobox
      items={teamOptions}
      filter={null}
      value="engineering"
      itemToStringLabel={(val) => teamOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxAnchor className="w-full">
        <InputGroup className="w-full">
          <ComboboxInput
            id="combobox-disabled"
            placeholder="Select team..."
            disabled
            render={<InputGroupInput disabled />}
          />
          <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
            <ComboboxTrigger
              className="disabled:cursor-not-allowed disabled:opacity-50"
              disabled
            />
          </InputGroupAddon>
        </InputGroup>
      </ComboboxAnchor>
    </Combobox>
  </FieldContent>
  <FieldDescription>You do not have permission to change teams in this project.</FieldDescription>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel htmlFor="combobox-disabled-preview">Team</FieldLabel>
            <FieldContent>
              <Combobox
                items={teamOptions}
                filter={null}
                value="engineering"
                itemToStringLabel={(val) => teamOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
              >
                <ComboboxAnchor className="w-full">
                  <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                    <ComboboxInput
                      id="combobox-disabled-preview"
                      placeholder="Select team..."
                      disabled
                      render={<InputGroupInput disabled />}
                    />
                    <InputGroupAddon align="end" className="h-full py-0 gap-0.5 pr-1">
                      <ComboboxTrigger
                        className="disabled:cursor-not-allowed disabled:opacity-50"
                        disabled
                      />
                    </InputGroupAddon>
                  </InputGroup>
                </ComboboxAnchor>
              </Combobox>
            </FieldContent>
            <FieldDescription>
              You do not have permission to change teams in this project.
            </FieldDescription>
          </Field>
        ),
      },
      {
        title: t("Giao diện Nút", "With Trigger"),
        description: t(
          "Combobox dùng nút bấm (giống Select) thay vì ô nhập chữ (Input).",
          "Combobox uses a button (like Select) instead of a text input."
        ),
        microCode: `<Field className="w-full">
  <FieldLabel>Select Engine</FieldLabel>
  <FieldContent>
    <Combobox
      items={engineOptions}
      filter={null}
      itemToStringLabel={(val) => engineOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
    >
      <ComboboxTrigger className="w-full">
        <ComboboxValue placeholder="Select an engine" />
      </ComboboxTrigger>
      <ComboboxContent>
        <div className="p-1">
          <InputGroup className="w-full">
            <ComboboxInput
              placeholder="Search engine..."
              render={<InputGroupInput />}
            />
          </InputGroup>
        </div>
        <ComboboxList>
          <ComboboxItem value="v8">V8 (Chrome)</ComboboxItem>
          <ComboboxItem value="spidermonkey">SpiderMonkey (Firefox)</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </FieldContent>
</Field>`,
        microPreview: (
          <Field size={globalSize} className="w-full">
            <FieldLabel>Select Engine</FieldLabel>
            <FieldContent>
              <Combobox
                items={engineOptions}
                filter={null}
                itemToStringLabel={(val) => engineOptions.find((o) => o.value === val)?.label ?? String(val ?? "")}
              >
                <ComboboxTrigger size={globalSize} className="w-full">
                  <ComboboxValue placeholder="Select an engine" />
                </ComboboxTrigger>
                <ComboboxContent>
                  <div className="p-1">
                    <InputGroup size={globalSize} className={cn("w-full", sizeHeightClasses[globalSize])}>
                      <ComboboxInput
                        placeholder="Search engine..."
                        render={<InputGroupInput />}
                      />
                    </InputGroup>
                  </div>
                  <ComboboxEmpty>Not found.</ComboboxEmpty>
                  <ComboboxList>
                    <ComboboxItem value="v8">V8 (Chrome)</ComboboxItem>
                    <ComboboxItem value="spidermonkey">
                      SpiderMonkey (Firefox)
                    </ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FieldContent>
          </Field>
        ),
      },
      {
        title: t("Tích hợp React Hook Form", "React Hook Form Integration"),
        description: t(
          "Sử dụng Controller để bắt giá trị.",
          "Uses Controller to capture values."
        ),
        macroCode: `const formSchema = z.object({ framework: z.string().min(1, "Required") });

function ComboboxForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { framework: "" } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            size={size}
            label="Framework"
            placeholder="Select framework..."
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" }
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`,
        macroPreview: <ComboboxFormPreview globalSize={globalSize} />,
      },
    ],
    [globalSize, t]
  );
}

export default function ComboboxShowcase() {
  const t = useI18n();
  const examples = useComboboxExamples();

  return (
    <ConfigurableShowcase
      title="Combobox"
      description={t(
        "Thành phần mở rộng của Select, cho phép người dùng gõ phím để tìm kiếm và lọc qua các tập dữ liệu lớn.",
        "An extension of Select, allowing users to type to search and filter through large datasets."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để chọn một hoặc nhiều giá trị từ một danh sách lớn. Khác với Select, Combobox có ô nhập liệu để người dùng có thể gõ từ khóa tìm kiếm và lọc các tùy chọn một cách nhanh chóng.",
              "Used to select one or multiple values from a large list. Unlike Select, Combobox has an input field so users can quickly type keywords to search and filter options."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
