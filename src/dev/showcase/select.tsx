import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { SelectPreset } from "../../components/macro/select-preset";
import { Button } from "../../components/micro/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel
} from "../../components/micro/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,

  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from "../../components/micro/select";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ShowcaseExample,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

const formSchema = z.object({
  language: z.string().min(1, "Vui lòng chọn một ngôn ngữ.") });
type FormValues = z.infer<typeof formSchema>;

function SelectForm({ size }: { size: Size }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { language: "" } });

  return (
    <form
      onSubmit={form.handleSubmit((v) => alert(JSON.stringify(v)))}
      className="w-full space-y-6"
    >
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Ngôn ngữ"
            description="Ngôn ngữ giao diện bạn muốn sử dụng."
            placeholder="Chọn một ngôn ngữ..."
            options={[
              { value: "en", label: "Tiếng Anh (English)" },
              { value: "vi", label: "Tiếng Việt (Vietnamese)" },
              { value: "fr", label: "Tiếng Pháp (French)" },
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>
        Xác nhận
      </Button>
    </form>
  );
}

const rhfCode = `const formSchema = z.object({ language: z.string().min(1, "Bắt buộc chọn") });

function SelectForm({ size }: { size: Size }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { language: "" } });

  return (
    <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
      <Controller
        control={form.control}
        name="language"
        render={({ field, fieldState }) => (
          <SelectPreset
            size={size}
            label="Ngôn ngữ"
            placeholder="Chọn ngôn ngữ..."
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Tiếng Việt" }
            ]}
            value={field.value}
            onValueChange={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" size={size}>Gửi</Button>
    </form>
  );
}`;

function SelectMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn" description="Trình thả xuống cơ bản với mảng options." code={`<SelectPreset
    className="w-full"
    label="Trái cây yêu thích"
    description="Chọn một loại trái cây bạn thích nhất."
    placeholder="Chọn trái cây..."
    options={[
      { value: "apple", label: "Táo (Apple)" },
      { value: "banana", label: "Chuối (Banana)" },
      { value: "cherry", label: "Anh đào (Cherry)" },
    ]}
  />`} preview={
                      <>
              <SelectPreset
                          className="w-full"
                          size={globalSize}
                          label="Trái cây yêu thích"
                          description="Chọn một loại trái cây bạn thích nhất."
                          placeholder="Chọn trái cây..."
                          options={[
                            { value: "apple", label: "Táo (Apple)" },
                            { value: "banana", label: "Chuối (Banana)" },
                            { value: "cherry", label: "Anh đào (Cherry)" },
                          ]}
                        />
                      </>
                    } />

        <ShowcaseExample title="Trạng thái Lỗi (Error)" description="Báo lỗi khi form submit mà user chưa chọn." code={`<div className="w-full flex flex-col gap-6">
    <SelectPreset
      label="Framework (Lỗi)"
      placeholder="Chọn một framework..."
      options={[
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
      ]}
      errorMessage="Vui lòng chọn một framework để tiếp tục."
    />
  </div>`} preview={
                      <>
              <div className="w-full flex flex-col gap-6">
                          <SelectPreset
                            size={globalSize}
                            label="Framework (Lỗi)"
                            placeholder="Chọn một framework..."
                            options={[
                              { value: "react", label: "React" },
                              { value: "vue", label: "Vue" },
                            ]}
                            errorMessage="Vui lòng chọn một framework để tiếp tục."
                          />
                        </div>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Khóa / Bất hoạt (Disabled)" description="Người dùng không thể mở danh sách." code={`<SelectPreset
    className="w-full"
    label="Gói tài khoản"
    description="Bạn không thể thay đổi gói cước khi chưa thanh toán nợ."
    placeholder="Chọn gói..."
    value="pro"
    options={[
      { value: "basic", label: "Cơ bản (Free)" },
      { value: "pro", label: "Chuyên nghiệp (Pro)" },
    ]}
    disabled
  />`} preview={
                      <>
              <SelectPreset
                          className="w-full"
                          size={globalSize}
                          label="Gói tài khoản"
                          description="Bạn không thể thay đổi gói cước khi chưa thanh toán nợ."
                          placeholder="Chọn gói..."
                          value="pro"
                          options={[
                            { value: "basic", label: "Cơ bản (Free)" },
                            { value: "pro", label: "Chuyên nghiệp (Pro)" },
                          ]}
                          disabled
                        />
                      </>
                    } />

        <ShowcaseExample title="Nhãn phức tạp (Custom Content)" description="Truyền React Node vào Label để tạo giao diện phong phú." code={`<SelectPreset
    label={
      <span className="flex items-center gap-2">
        Quốc gia cư trú
        <span className="text-destructive">*</span>
      </span>
    }
    description="Thông tin này được sử dụng cho mục đích tính thuế, phải khớp với địa chỉ thanh toán."
    placeholder="Chọn quốc gia..."
    options={[
      { value: "us", label: "United States" },
      { value: "vn", label: "Việt Nam" },
    ]}
  />
`} preview={
                      <>
              <SelectPreset
                          size={globalSize}
                          label={
                            <span className="flex items-center gap-2">
                              Quốc gia cư trú
                              <span className="text-destructive">*</span>
                            </span>
                          }
                          description="Thông tin này được sử dụng cho mục đích tính thuế, phải khớp với địa chỉ thanh toán."
                          placeholder="Chọn quốc gia..."
                          options={[
                            { value: "us", label: "United States" },
                            { value: "vn", label: "Việt Nam" },
                          ]}
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Tích hợp React Hook Form" description="Sử dụng Controller để bắt giá trị." code={rhfCode} preview={
                      <>
              <SelectForm size={globalSize} />
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

function SelectMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Cơ bản (Primitive)" description="Ghép nối thủ công bằng cách bọc Field." code={`<Field className="w-full">
    <FieldLabel>Framework</FieldLabel>
    <FieldContent>
      <Select
        items={{
          next: "Next.js",
          vite: "Vite",
          remix: "Remix" }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Chọn framework..." />
        </SelectTrigger>
        
          <SelectContent>
            <SelectScrollUpButton />
            <SelectItem value="next">Next.js</SelectItem>
            <SelectItem value="vite">Vite</SelectItem>
            <SelectItem value="remix">Remix</SelectItem>
            <SelectScrollDownButton />
          </SelectContent>
        
      </Select>
    </FieldContent>
    <FieldDescription>
      Chọn công nghệ bạn muốn sử dụng.
    </FieldDescription>
  </Field>`} preview={
                      <>
              <Field size={globalSize} className="w-full">
                          <FieldLabel>Framework</FieldLabel>
                          <FieldContent>
                            <Select items={{ next: "Next.js", vite: "Vite", remix: "Remix" }}>
                              <SelectTrigger size={globalSize}>
                                <SelectValue placeholder="Chọn framework..." />
                              </SelectTrigger>

                                <SelectContent>
                                  <SelectScrollUpButton />
                                  <SelectItem value="next">Next.js</SelectItem>
                                  <SelectItem value="vite">Vite</SelectItem>
                                  <SelectItem value="remix">Remix</SelectItem>
                                  <SelectScrollDownButton />
                                </SelectContent>
                              
                            </Select>
                          </FieldContent>
                          <FieldDescription>
                            Chọn công nghệ bạn muốn sử dụng.
                          </FieldDescription>
                        </Field>
                      </>
                    } />

        <ShowcaseExample title="Phân nhóm (Grouped)" description="Sử dụng SelectGroup, SelectLabel và SelectSeparator." code={`<Field className="w-full">
    <FieldLabel>Trái cây</FieldLabel>
    <FieldContent>
      <Select
        items={{
          orange: "Orange",
          lemon: "Lemon",
          strawberry: "Strawberry",
          blueberry: "Việt quất" }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Chọn loại quả..." />
        </SelectTrigger>
        
          <SelectContent>
            <SelectGroup>
              <SelectLabel>
                Họ cam chanh (Citrus)
              </SelectLabel>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="lemon">Lemon</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Họ dâu (Berry)</SelectLabel>
              <SelectItem value="strawberry">
                Strawberry
              </SelectItem>
              <SelectItem value="blueberry">
                Blueberry
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        
      </Select>
    </FieldContent>
  </Field>`} preview={
                      <>
              <Field size={globalSize} className="w-full">
                          <FieldLabel>Trái cây</FieldLabel>
                          <FieldContent>
                            <Select
                              items={{
                                orange: "Orange",
                                lemon: "Lemon",
                                strawberry: "Strawberry",
                                blueberry: "Việt quất" }}
                            >
                              <SelectTrigger size={globalSize}>
                                <SelectValue placeholder="Chọn loại quả..." />
                              </SelectTrigger>
                              
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Họ cam chanh (Citrus)</SelectLabel>
                                    <SelectItem value="orange">Orange</SelectItem>
                                    <SelectItem value="lemon">Lemon</SelectItem>
                                  </SelectGroup>
                                  <SelectSeparator />
                                  <SelectGroup>
                                    <SelectLabel>Họ dâu (Berry)</SelectLabel>
                                    <SelectItem value="strawberry">Strawberry</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              
                            </Select>
                          </FieldContent>
                        </Field>
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Trạng thái Lỗi thủ công" description="Tự gắn aria-invalid vào Select." code={`<Field data-invalid={true} className="w-full">
    <FieldLabel>Dự án</FieldLabel>
    <FieldContent>
      <Select items={{ p1: "Project 1" }}>
        <SelectTrigger aria-invalid={true}>
          <SelectValue placeholder="Chọn dự án..." />
        </SelectTrigger>
        
          <SelectContent>
            <SelectItem value="p1">Project 1</SelectItem>
          </SelectContent>
        
      </Select>
    </FieldContent>
    <FieldError>Vui lòng chọn một dự án hợp lệ.</FieldError>
  </Field>`} preview={
                      <>
              <Field size={globalSize} data-invalid={true} className="w-full">
                          <FieldLabel>Dự án</FieldLabel>
                          <FieldContent>
                            <Select items={{ p1: "Project 1" }}>
                              <SelectTrigger size={globalSize} aria-invalid={true}>
                                <SelectValue placeholder="Chọn dự án..." />
                              </SelectTrigger>
                              
                                <SelectContent>
                                  <SelectItem value="p1">Project 1</SelectItem>
                                </SelectContent>
                              
                            </Select>
                          </FieldContent>
                          <FieldError>Vui lòng chọn một dự án hợp lệ.</FieldError>
                        </Field>
                      </>
                    } />

        <ShowcaseExample title="Disabled thủ công" description="Khóa SelectTrigger." code={`<Field className="w-full">
    <FieldLabel>Múi giờ</FieldLabel>
    <FieldContent>
      <Select items={{ gmt: "GMT+7" }}>
        <SelectTrigger disabled>
          <SelectValue placeholder="Chọn múi giờ..." />
        </SelectTrigger>
        
          <SelectContent>
            <SelectItem value="gmt">
              GMT+7 (Indochina Time)
            </SelectItem>
          </SelectContent>
        
      </Select>
    </FieldContent>
    <FieldDescription>
      Múi giờ tự động lấy theo hệ thống.
    </FieldDescription>
  </Field>`} preview={
                      <>
              <Field size={globalSize} className="w-full">
                          <FieldLabel>Múi giờ</FieldLabel>
                          <FieldContent>
                            <Select items={{ gmt: "GMT+7" }}>
                              <SelectTrigger size={globalSize} disabled>
                                <SelectValue placeholder="Chọn múi giờ..." />
                              </SelectTrigger>
                              
                                <SelectContent>
                                  <SelectItem value="gmt">GMT+7 (Indochina Time)</SelectItem>
                                </SelectContent>
                              
                            </Select>
                          </FieldContent>
                          <FieldDescription>
                            Múi giờ tự động lấy theo hệ thống.
                          </FieldDescription>
                        </Field>
                      </>
                    } />
      </ExampleGrid>

      <ShowcaseExample title="🧭 So sánh Use Case" description="So sánh nhanh khi nào dùng Micro và Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Story 1: Macro wins */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Form nhập Quốc tịch
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn có 195 quốc gia để chọn, tất cả đều chỉ là chữ.
        Thay vì viết 195 thẻ <DocsCode>SelectItem</DocsCode>
        , bạn vứt mảng JSON 195 phần tử đó vào thuộc tính{" "}
        <DocsCode>options</DocsCode> của Macro.
      </p>
    </div>

    {/* Story 2: Micro wins */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Menu Chọn Tài khoản
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn muốn trong danh sách thả xuống, mỗi dòng không
        chỉ là Tên, mà còn có cả Avatar (ảnh tròn) và Email
        (chữ mờ ở dưới). Bạn bắt buộc phải dùng Micro để tự
        thiết kế nội dung bên trong{" "}
        <DocsCode>SelectItem</DocsCode>.
      </p>
    </div>
  </div>`} preview={
                  <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Story 1 · Dùng Macro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Form nhập Quốc tịch
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Bạn có 195 quốc gia để chọn, tất cả đều chỉ là chữ. Thay vì viết
                        195 thẻ <DocsCode>SelectItem</DocsCode>, bạn vứt mảng JSON 195
                        phần tử đó vào thuộc tính <DocsCode>options</DocsCode> của Macro.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Story 2 · Dùng Micro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Menu Chọn Tài khoản
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Bạn muốn trong danh sách thả xuống, mỗi dòng không chỉ là Tên, mà
                        còn có cả Avatar (ảnh tròn) và Email (chữ mờ ở dưới). Bạn bắt buộc
                        phải dùng Micro để tự thiết kế nội dung bên trong{" "}
                        <DocsCode>SelectItem</DocsCode>.
                      </p>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

export default function SelectShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Select"
      description="Thành phần điều khiển hiển thị danh sách các tùy chọn thả xuống để người dùng chọn."
      
      micro={{ content: <SelectMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <SelectMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
