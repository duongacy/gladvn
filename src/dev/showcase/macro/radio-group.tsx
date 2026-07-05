import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { RadioGroupPreset } from "@/components/macro/radio-group-preset";
import { MonoSelect } from "@/dev/components/mono-select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/micro/button";

const formSchema = z.object({
  notify: z.string().min(1, "Vui lòng chọn phương thức thông báo."),
});

type FormValues = z.infer<typeof formSchema>;

function RadioGroupForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { notify: "" },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="notify"
        render={({ field, fieldState }) => (
          <RadioGroupPreset
            size={size}
            label="Notification Preference"
            description="Bạn muốn được thông báo như thế nào?"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Push Notification" },
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
  notify: z.string().min(1, "Vui lòng chọn phương thức thông báo."),
});

type FormValues = z.infer<typeof formSchema>;

function RadioGroupForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { notify: "" },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="notify"
        render={({ field, fieldState }) => (
          <RadioGroupPreset
            size={size}
            label="Notification Preference"
            description="Bạn muốn được thông báo như thế nào?"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
              { value: "push", label: "Push Notification" },
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

export default function MacroRadioGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Radio Group (Macro)"
        description="Một thành phần cài sẵn bao gồm RadioGroup, Field, Label và Description."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="Nhóm radio cơ bản có nhãn và mô tả.">
          <div className="w-full max-w-sm">
            <RadioGroupPreset
              size={globalSize}
              label="Notification Preference"
              description="Bạn muốn được thông báo như thế nào?"
              options={[
                { value: "email", label: "Email" },
                { value: "sms", label: "SMS" },
                { value: "push", label: "Push Notification" },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Thể hiện các đạo cụ errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <RadioGroupPreset
              size={globalSize}
              label="Preference (Invalid)"
              options={[{ value: "email", label: "Email" }, { value: "sms", label: "SMS" }]}
              errorMessage="You must select a preference."
            />
            
            <RadioGroupPreset
              size={globalSize}
              label="Preference (Hidden Error)"
              description="Văn bản lỗi bị ẩn bằng showError={false}"
              options={[{ value: "email", label: "Email" }]}
              errorMessage="Hidden error."
              showError={false}
            />
          </div>
        </ExampleSection>
        <ExampleSection label="Disabled State" description="Một nhóm radio không tương tác.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <RadioGroupPreset
              size={globalSize}
              label="Subscription Plan"
              description="Bạn không thể thay đổi kế hoạch của mình ngay bây giờ."
              options={[
                { value: "free", label: "Free Plan" },
                { value: "pro", label: "Pro Plan" },
              ]}
              defaultValue="free"
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Rich Descriptions" description="Các tùy chọn có mô tả dài để kiểm tra việc gói và căn chỉnh.">
          <div className="w-full max-w-sm">
            <RadioGroupPreset
              size={globalSize}
              label="Theme"
              options={[
                { value: "light", label: "Light Theme" },
                { value: "dark", label: "Dark Theme" },
                { value: "system", label: "System Default", description: "This is a custom rich description." },
              ]}
              description="Chọn cách bạn muốn giao diện trông như thế nào. Nếu bạn chọn Mặc định hệ thống, chủ đề sẽ tự động thích ứng với cài đặt hệ điều hành của bạn khi có thể."
              defaultValue="system"
            />
          </div>
        </ExampleSection>
        
        <ExampleSection 
          label="React Hook Form Integration" 
          description="Xác thực form bằng Zod và React Hook Form."
          codeString={rhfCode}
        >
          <RadioGroupForm size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
