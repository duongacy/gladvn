import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { Button } from "@/components/micro/button";
import { FieldPreset } from "@/components/macro/field-preset";
import { SelectPreset } from "@/components/macro/select-preset";
import { RadioGroupPreset } from "@/components/macro/radio-group-preset";
import { SwitchPreset } from "@/components/macro/switch-preset";
import { CheckboxPreset } from "@/components/macro/checkbox-preset";
import { InputPreset } from "@/components/macro/input-preset";
import { TextareaPreset } from "@/components/macro/textarea-preset";
import { NativeSelectPreset } from "@/components/macro/native-select-preset";
import { SliderPreset } from "@/components/macro/slider-preset";
import { ComboboxPreset } from "@/components/macro/combobox-preset";
import { InputOTPPreset } from "@/components/macro/input-otp-preset";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  bio: z.string().max(160, "Bio must not be longer than 160 characters.").optional(),
  language: z.string().min(1, "Please select a language."),
  framework: z.string().min(1, "Please select a framework."),
  role: z.string().min(1, "Please select a role."),
  notification: z.string().min(1, "Please select a notification preference."),
  volume: z.array(z.number()).min(1, "Volume is required."),
  pin: z.string().min(6, "Your one-time password must be 6 characters."),
  marketing: z.boolean().default(false).optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function ProfileForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      bio: "",
      language: "",
      framework: "",
      role: "",
      notification: "",
      volume: [50],
      pin: "",
      marketing: false,
      terms: false,
    },
  });

  function onSubmit(values: FormValues) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
      
      {/* InputPreset (Using register) */}
      <InputPreset
        label="Username"
        description="Đây là tên hiển thị công khai của bạn."
        errorMessage={form.formState.errors.username?.message}
        placeholder="johndoe" 
        {...form.register("username")} 
      />

      {/* TextareaPreset (Using register) */}
      <TextareaPreset
        label="Bio"
        description="Hãy cho chúng tôi biết một chút về bản thân bạn."
        errorMessage={form.formState.errors.bio?.message}
        placeholder="I am a software engineer..."
        {...form.register("bio")}
      />

      {/* NativeSelectPreset (Using register) */}
      <NativeSelectPreset
        label="Language"
        description="Ngôn ngữ ưa thích của bạn là gì?"
        errorMessage={form.formState.errors.language?.message}
        {...form.register("language")}
      >
        <option value="" disabled>Select a language...</option>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
        <option value="fr">French</option>
      </NativeSelectPreset>

      {/* ComboboxPreset */}
      <Controller
        control={form.control}
        name="framework"
        render={({ field, fieldState }) => (
          <ComboboxPreset
            label="Framework"
            description="Chọn khuôn khổ yêu thích của bạn."
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
            emptyText="No framework found."
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

      {/* SelectPreset */}
      <Controller
        control={form.control}
        name="role"
        render={({ field, fieldState }) => (
          <SelectPreset
            label="Role"
            placeholder="Select a role..."
            options={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
              { value: "guest", label: "Guest" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      {/* RadioGroupPreset */}
      <Controller
        control={form.control}
        name="notification"
        render={({ field, fieldState }) => (
          <RadioGroupPreset
            label="Notification"
            description="Bạn muốn được thông báo bằng cách nào?"
            options={[
              { value: "email", label: "Email" },
              { value: "sms", label: "SMS" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      {/* SliderPreset */}
      <Controller
        control={form.control}
        name="volume"
        render={({ field, fieldState }) => (
          <SliderPreset
            label="Volume"
            description="Điều chỉnh âm lượng thông báo."
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
            max={100}
            step={1}
          />
        )}
      />

      {/* InputOTPPreset */}
      <Controller
        control={form.control}
        name="pin"
        render={({ field, fieldState }) => (
          <InputOTPPreset
            label="PIN"
            description="Nhập mã xác nhận gồm 6 chữ số."
            maxLength={6}
            value={field.value}
            onChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      {/* SwitchPreset */}
      <Controller
        control={form.control}
        name="marketing"
        render={({ field, fieldState }) => (
          <SwitchPreset
            label="Marketing Emails"
            description="Nhận email về các sản phẩm, tính năng mới và hơn thế nữa."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      {/* CheckboxPreset */}
      <Controller
        control={form.control}
        name="terms"
        render={({ field, fieldState }) => (
          <CheckboxPreset
            label="Accept Terms"
            description="Bạn đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của chúng tôi."
            checked={field.value}
            onCheckedChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

const profileFormCode = `// You can view the full source code in src/dev/showcase/macro/rhf.tsx`;

export default function MacroRHFShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="React Hook Form (Macro)"
        description="Trình bày cách tích hợp các cài đặt trước Macro với dạng móc phản ứng."
      />

      <ExampleGrid columns={1}>
        <ExampleSection 
          label="Profile Form" 
          description="Một biểu mẫu hoàn chỉnh có xác nhận bao gồm tất cả các điều khiển biểu mẫu đặt trước."
          codeString={profileFormCode}
        >
          <ProfileForm />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
