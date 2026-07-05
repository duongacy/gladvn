import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { SelectPreset } from "@/components/macro/select-preset";
import { Button } from "@/components/micro/button";

const formSchema = z.object({
  language: z.string().min(1, "Vui lòng chọn một ngôn ngữ."),
});

type FormValues = z.infer<typeof formSchema>;

function SelectForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: "",
    },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Language"
            description="Ngôn ngữ ưa thích của bạn là gì?"
            placeholder="Select a language..."
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Vietnamese" },
              { value: "fr", label: "French" },
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
}

const rhfCode = `const formSchema = z.object({
  language: z.string().min(1, "Vui lòng chọn một ngôn ngữ."),
});

type FormValues = z.infer<typeof formSchema>;

function SelectForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { language: "" },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Language"
            description="Ngôn ngữ ưa thích của bạn là gì?"
            placeholder="Select a language..."
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Vietnamese" },
              { value: "fr", label: "French" },
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
}`;

export default function MacroSelectShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Select (Macro)"
        description="Một thành phần đặt trước bao gồm Chọn, Trường, Nhãn và Mô tả."
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

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Chọn thả xuống cơ bản với nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label="Fruit"
              description="Chọn trái cây yêu thích của bạn."
              placeholder="Pick a fruit..."
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "cherry", label: "Cherry" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <SelectPreset
              size={globalSize}
              label="Framework (Invalid)"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="You must select a framework."
            />
            
            <SelectPreset
              size={globalSize}
              label="Framework (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              placeholder="Pick a framework..."
              options={[{ value: "react", label: "React" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Một thành phần chọn không tương tác.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label="Account Tier"
              description="Bạn không thể hạ cấp tài khoản của mình vào lúc này."
              placeholder="Select tier..."
              value="pro"
              options={[
                { value: "basic", label: "Cơ bản" },
                { value: "pro", label: "Pro" },
              ]}
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Form Snippet" description="Tích hợp nhãn tùy chỉnh và mô tả chi tiết.">
          <div className="w-full max-w-sm">
            <SelectPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Country of Residence <span className="text-destructive">*</span>
                </span>
              }
              description="Thông tin này được sử dụng cho mục đích tính thuế. Hãy đảm bảo nó khớp với địa chỉ thanh toán của bạn."
              placeholder="Select your country..."
              options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
                { value: "au", label: "Australia" },
              ]}
            />
          </div>
        </ExampleSection>
        <ExampleSection 
          label="React Hook Form Integration" 
          description="Xác thực form bằng Zod và React Hook Form."
          codeString={rhfCode}
        >
          <SelectForm size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
