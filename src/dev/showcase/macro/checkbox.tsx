import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { type Size } from "@/lib/types";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";
import { SelectPreset } from "@/components/macro/select-preset";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/micro/button";

const formSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

function CheckboxForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { mobile: false },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="mobile"
        render={({ field, fieldState }) => (
          <CheckboxPreset
            size={size}
            label="Use mobile device"
            description="Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

function CheckboxForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { mobile: false },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
      <Controller
        control={form.control}
        name="mobile"
        render={({ field, fieldState }) => (
          <CheckboxPreset
            size={size}
            label="Use mobile device"
            description="Cho phép chúng tôi gửi thông báo đến thiết bị di động của bạn."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Submit</Button>
    </form>
  );
}`;

function ControlledMacroCheckboxDemo({ size }: { size: Size }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-full max-w-sm flex flex-col gap-4">
      <CheckboxPreset
        size={size}
        checked={checked}
        onCheckedChange={(c) => setChecked(!!c)}
        label="Controlled Checkbox"
        description="Trạng thái hộp kiểm này được quản lý bởi React."
      />
      <p className="text-sm text-muted-foreground">
        Trạng thái hiện tại: <span className="font-mono font-bold text-foreground">{checked ? "Checked" : "Unchecked"}</span>
      </p>
    </div>
  );
}

export default function MacroCheckboxShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Checkbox (Macro)"
        description="Một preset component đóng gói Checkbox, Field, Label, và Description."
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
        <ExampleSection label="Standard" description="Checkbox cơ bản kèm nhãn (label) và mô tả.">
          <div className="w-full max-w-sm">
            <CheckboxPreset
              size={globalSize}
              label="Accept terms"
              description="Bạn phải đồng ý với các điều khoản và điều kiện."
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Error State" description="Minh hoạ cách sử dụng props errorMessage và showError.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Accept terms (Invalid)"
              errorMessage="Bạn phải đánh dấu vào ô này."
            />
            
            <CheckboxPreset
              size={globalSize}
              label="Accept terms (Hidden Error)"
              description="Câu báo lỗi bị ẩn đi bằng showError={false}"
              errorMessage="Lỗi bị ẩn."
              showError={false}
            />
          </div>
        </ExampleSection>
        
        <ExampleSection label="Disabled State" description="Một trường checkbox không thể tương tác.">
          <div className="w-full max-w-sm flex flex-col gap-6">
            <CheckboxPreset
              size={globalSize}
              label="Sign up for newsletter"
              description="Tuỳ chọn này hiện không khả dụng."
              disabled
            />
            <CheckboxPreset
              size={globalSize}
              label="Enable experimental features"
              description="Bạn không thể thay đổi cài đặt này."
              defaultChecked
              disabled
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Form Group" description="Nhiều tuỳ chọn liên quan đến nhau.">
          <div className="flex flex-col gap-3">
            <CheckboxPreset id="cb-m-recents" label="Recents" defaultChecked size={globalSize} />
            <CheckboxPreset id="cb-m-home" label="Home" defaultChecked size={globalSize} />
            <CheckboxPreset id="cb-m-applications" label="Applications" size={globalSize} />
          </div>
        </ExampleSection>

        <ExampleSection label="Real-world Content" description="Minh hoạ cách CheckboxPreset xử lý nhãn (label) dạng React Node phức tạp và các đoạn mô tả dài.">
          <div className="w-full max-w-sm">
            <CheckboxPreset
              size={globalSize}
              label={
                <span className="flex items-center gap-2">
                  Chia sẻ dữ liệu sử dụng <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-semibold text-primary">BETA</span>
                </span>
              }
              description="Giúp chúng tôi cải thiện dịch vụ bằng cách tự động gửi dữ liệu phân tích và báo cáo lỗi mỗi khi ứng dụng gặp sự cố. Bạn có thể thu hồi quyền này bất cứ lúc nào trong phần cài đặt tài khoản."
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={1}>
        <ExampleSection 
          label="Controlled Mode" 
          description="Quản lý trạng thái bằng React state (sử dụng checked và onCheckedChange)."
          codeString={`import { useState } from "react";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";

export function ControlledDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxPreset
      checked={checked}
      onCheckedChange={(c) => setChecked(!!c)}
      label="Controlled Checkbox"
      description="Trạng thái của checkbox này được quản lý bởi React."
    />
  );
}`}
        >
          <ControlledMacroCheckboxDemo size={globalSize} />
        </ExampleSection>
        <ExampleSection 
          label="React Hook Form Integration" 
          description="Xác thực form bằng Zod và React Hook Form."
          codeString={rhfCode}
        >
          <CheckboxForm size={globalSize} />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
