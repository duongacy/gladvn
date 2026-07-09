import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { SearchIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";

import { type Size } from "@/lib/types";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/micro/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/micro/input-group";
import { Button } from "@/components/micro/button";
import { MonoSelect } from "@/dev/components/mono-select";

export default function InputGroupShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [showPassword, setShowPassword] = useState(false);
  const [clearValue, setClearValue] = useState("Hello world");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Input Group"
        description="Kết hợp kiểu nhập văn bản với các tiện ích bổ sung cho những thứ như URL hoặc giá cả."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        {/* ── URL Input ────────────────────────────────── */}
        <ExampleSection
          label="URL Input"
          description="Đầu vào với các phần bổ sung tiền tố và hậu tố."
        >
          <Field size={globalSize} className="w-full max-w-md">
            <FieldLabel htmlFor="tf-group">Website</FieldLabel>
            <FieldDescription>
              Combine text inputs with addons for things like URLs or prices.
            </FieldDescription>
            <FieldContent>
              <InputGroup size={globalSize}>
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput id="tf-group" placeholder="gladcn.ui" />
                <InputGroupAddon>
                  <InputGroupText>.com</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FieldContent>
          </Field>
        </ExampleSection>

        {/* ── With Button ──────────────────────────────── */}
        <ExampleSection
          label="With Button"
          description="Đầu vào kết hợp với primary action button. Button đặt ngoài InputGroup — focus ring được delegate lên outer wrapper."
          codeString={`<div className="flex w-full rounded-lg focus-within:ring-3 focus-within:ring-ring/50 focus-within:ring-offset-1 focus-within:ring-offset-background">
  <InputGroup
    size="md"
    className="flex-1 rounded-r-none border-r-0
      has-[[data-slot=input-group-control]:focus-visible]:ring-0
      has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0"
  >
    <InputGroupInput placeholder="Search..." />
  </InputGroup>
  <Button variant="solid" size="md" className="rounded-l-none self-stretch h-auto">
    <SearchIcon className="size-4" /> Find
  </Button>
</div>`}
        >
          <Field size={globalSize} className="w-full max-w-md">
            <FieldLabel htmlFor="tf-search">Search</FieldLabel>
            <FieldContent>
              <div className="flex w-full rounded-lg focus-within:ring-3 focus-within:ring-ring/50 focus-within:ring-offset-1 focus-within:ring-offset-background">
                <InputGroup
                  size={globalSize}
                  className="flex-1 rounded-r-none border-r-0 has-[[data-slot=input-group-control]:focus-visible]:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-0"
                >
                  <InputGroupInput id="tf-search" placeholder="Search..." />
                </InputGroup>
                <Button
                  variant="solid"
                  size={globalSize}
                  className="h-auto shrink-0 self-stretch rounded-l-none"
                >
                  <SearchIcon className="size-4" /> Find
                </Button>
              </div>
            </FieldContent>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      {/* ── InputGroupButton (Utility Buttons) ──────────── */}
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Password Toggle"
          description="InputGroupButton dùng cho utility button nhỏ bên trong input — ví dụ toggle ẩn/hiện mật khẩu."
          codeString={`const [show, setShow] = useState(false);

<InputGroup size="md">
  <InputGroupInput type={show ? "text" : "password"} placeholder="••••••••" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton
      size="icon"
      aria-label={show ? "Hide password" : "Show password"}
      onClick={() => setShow((p) => !p)}
    >
      {show ? <EyeOffIcon /> : <EyeIcon />}
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`}
        >
          <Field size={globalSize} className="w-full max-w-md">
            <FieldLabel htmlFor="tf-password">Password</FieldLabel>
            <FieldContent>
              <InputGroup size={globalSize}>
                <InputGroupInput
                  id="tf-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((p) => !p)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="size-4" />
                    ) : (
                      <EyeIcon className="size-4" />
                    )}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </FieldContent>
          </Field>
        </ExampleSection>

        <ExampleSection
          label="Clear Button"
          description="InputGroupButton với XIcon dùng để xoá nhanh nội dung input."
          codeString={`const [value, setValue] = useState("");

<InputGroup size="md">
  <InputGroupInput
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Type something..."
  />
  {value && (
    <InputGroupAddon align="inline-end">
      <InputGroupButton
        size="icon"
        aria-label="Clear"
        onClick={() => setValue("")}
      >
        <XIcon />
      </InputGroupButton>
    </InputGroupAddon>
  )}
</InputGroup>`}
        >
          <Field size={globalSize} className="w-full max-w-md">
            <FieldLabel htmlFor="tf-clear">Search</FieldLabel>
            <FieldContent>
              <InputGroup size={globalSize}>
                <InputGroupInput
                  id="tf-clear"
                  value={clearValue}
                  onChange={(e) => setClearValue(e.target.value)}
                  placeholder="Type something..."
                />
                {clearValue && (
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      size="icon"
                      aria-label="Clear"
                      onClick={() => setClearValue("")}
                    >
                      <XIcon className="size-4" />
                    </InputGroupButton>
                  </InputGroupAddon>
                )}
              </InputGroup>
            </FieldContent>
          </Field>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Validation Error ─────────────────────────────── */}
      <ExampleSection
        label="Validation Error"
        description="Trạng thái lỗi được delegate từ aria-invalid trên input lên toàn bộ InputGroup wrapper."
        codeString={`<InputGroup size="md">
  <InputGroupAddon>
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput
    aria-invalid="true"
    defaultValue="abc"
    placeholder="0.00"
  />
</InputGroup>`}
      >
        <Field size={globalSize} className="w-full max-w-md">
          <FieldLabel htmlFor="tf-error">Price</FieldLabel>
          <FieldDescription>Nhập số hợp lệ.</FieldDescription>
          <FieldContent>
            <InputGroup size={globalSize}>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                id="tf-error"
                aria-invalid="true"
                defaultValue="abc"
                placeholder="0.00"
              />
            </InputGroup>
          </FieldContent>
        </Field>
      </ExampleSection>

      {/* ── With Textarea ────────────────────────────────── */}
      <ExampleSection
        label="With Textarea"
        description="Nhóm đầu vào được áp dụng cho thành phần vùng văn bản."
      >
        <Field size={globalSize} className="w-full max-w-md">
          <FieldLabel htmlFor="tf-comment">Comment</FieldLabel>
          <FieldContent>
            <InputGroup size={globalSize} className="h-auto">
              <InputGroupAddon className="self-start">
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
      </ExampleSection>

      {/* ── Addon Alignments ─────────────────────────────── */}
      <ExampleSection
        label="Addon Alignments"
        description="Addon của nhóm đầu vào hỗ trợ nhiều cách sắp xếp khác nhau: bắt đầu nội tuyến, kết thúc nội tuyến, bắt đầu khối, kết thúc khối."
      >
        <ExampleGrid columns={2}>
          <InputGroup size={globalSize}>
            <InputGroupAddon align="inline-start">
              <InputGroupText>start</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="inline-start" />
          </InputGroup>

          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="inline-end" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>end</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <InputGroup size={globalSize}>
            <InputGroupAddon align="block-start">
              <InputGroupText>block-start</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="block-start" />
          </InputGroup>

          <InputGroup size={globalSize}>
            <InputGroupInput placeholder="block-end" />
            <InputGroupAddon align="block-end">
              <InputGroupText>block-end</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </ExampleGrid>
      </ExampleSection>
    </div>
  );
}
