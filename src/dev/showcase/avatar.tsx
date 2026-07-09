import { useState } from "react";
import {
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { MonoSelect } from "@/dev/components/mono-select";

import { type Size } from "@/lib/types";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/micro/avatar";
import { AvatarPreset } from "@/components/macro/avatar-preset";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function AvatarMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>
          <DocsCode>AvatarPreset</DocsCode> tự động tính toán chữ cái viết tắt
          (fallback) dựa trên thuộc tính <DocsCode>alt</DocsCode>. Nó cũng hỗ
          trợ truyền trực tiếp <DocsCode>status</DocsCode> thay vì phải tự đặt
          thẻ <DocsCode>AvatarBadge</DocsCode> với class màu sắc như Micro.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Avatar tự động fallback dựa vào tên truyền vào alt."
          codeString={`<div className="flex items-center gap-4">
  <AvatarPreset src="https://github.com/shadcn.png" alt="Shadcn" />
  <AvatarPreset alt="John Doe" />
  <AvatarPreset />
</div>
`}
        >
          <div className="flex items-center gap-4">
            <AvatarPreset
              size={globalSize}
              src="https://github.com/shadcn.png"
              alt="Shadcn"
            />
            <AvatarPreset size={globalSize} alt="John Doe" />
            <AvatarPreset size={globalSize} />
          </div>
        </ExampleSection>

        <ExampleSection
          label="Trạng thái (Status)"
          description="Hỗ trợ sẵn các trạng thái: online, offline, away."
          codeString={`<div className="flex items-center gap-4">
  <AvatarPreset src="https://github.com/shadcn.png" alt="Shadcn" status="online" />
  <AvatarPreset alt="Alice" status="away" />
  <AvatarPreset status="offline" />
</div>
`}
        >
          <div className="flex items-center gap-4">
            <AvatarPreset
              size={globalSize}
              src="https://github.com/shadcn.png"
              alt="Shadcn"
              status="online"
            />
            <AvatarPreset size={globalSize} alt="Alice" status="away" />
            <AvatarPreset size={globalSize} status="offline" />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Nhóm Avatar (Avatar Group)"
        description="Kết hợp Preset với AvatarGroup để tiết kiệm code."
        fullWidth
        codeString={`<AvatarGroup>
  <AvatarPreset src="https://github.com/shadcn.png" alt="Shadcn" />
  <AvatarPreset alt="Alice Smith" />
  <AvatarPreset alt="Bob Jones" />
  <AvatarGroupCount>+3</AvatarGroupCount>
</AvatarGroup>`}
      >
        <div className="flex flex-col gap-4">
          <AvatarGroup>
            <AvatarPreset
              size={globalSize}
              src="https://github.com/shadcn.png"
              alt="Shadcn"
            />
            <AvatarPreset size={globalSize} alt="Alice Smith" />
            <AvatarPreset size={globalSize} alt="Bob Jones" />
            <AvatarGroupCount size={globalSize}>+3</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function AvatarMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>
          Dùng <DocsCode>Avatar</DocsCode> khi bạn muốn có một{" "}
          <DocsCode>AvatarFallback</DocsCode> phức tạp (ví dụ: hiển thị một Icon
          User) thay vì chỉ là chữ cái viết tắt mặc định, hoặc muốn tùy chỉnh vị
          trí/màu sắc của <DocsCode>AvatarBadge</DocsCode> hoàn toàn tự do.
        </DocsP>
      </ShowcaseDocs>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Với Hình ảnh (With Image)"
          description="Hiển thị ảnh và sẽ fallback về chữ nếu ảnh lỗi."
          codeString={`<div className="flex items-center gap-4">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
    <AvatarFallback>LR</AvatarFallback>
  </Avatar>
</div>
`}
        >
          <div className="flex items-center gap-4">
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Lỗi Ảnh & Chỉ có Fallback"
          description="Khi không có ảnh hoặc ảnh lỗi, fallback sẽ hiển thị."
          codeString={`<div className="flex items-center gap-4">
  <Avatar>
    <AvatarImage src="https://broken-url.invalid/avatar.png" alt="broken" />
    <AvatarFallback>BR</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </AvatarFallback>
  </Avatar>
</div>
`}
        >
          <div className="flex items-center gap-4">
            <Avatar size={globalSize}>
              <AvatarImage
                src="https://broken-url.invalid/avatar.png"
                alt="broken"
              />
              <AvatarFallback>BR</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarFallback>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </AvatarFallback>
            </Avatar>
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Huy hiệu (With Badge)"
        description="Bạn có thể tự định vị Badge ở bất cứ đâu trên Avatar."
        codeString={`<div className="flex items-center gap-6">
  <div className="flex flex-col items-center gap-2">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
    </Avatar>
    <span className="text-xs text-muted-foreground">Online</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Avatar>
      <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
      <AvatarFallback>VC</AvatarFallback>
      <AvatarBadge className="absolute z-10 right-0 top-0 bg-red-500" />
    </Avatar>
    <span className="text-xs text-muted-foreground">Notification</span>
  </div>
</div>
`}
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className="absolute z-10 right-0 bottom-0 bg-green-500" />
            </Avatar>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
              <AvatarBadge className="absolute z-10 right-0 top-0 bg-red-500" />
            </Avatar>
            <span className="text-xs text-muted-foreground">Notification</span>
          </div>
        </div>
      </ExampleSection>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Nhóm cơ bản (Basic Group)"
          description="Xếp chồng nhiều avatar lên nhau."
          codeString={`<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
    <AvatarFallback>LR</AvatarFallback>
  </Avatar>
</AvatarGroup>
`}
        >
          <AvatarGroup>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </ExampleSection>

        <ExampleSection
          label="Kèm bộ đếm (With Count)"
          description="Hiển thị những avatar còn lại bị ẩn."
          codeString={`<AvatarGroup>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+12</AvatarGroupCount>
</AvatarGroup>
`}
        >
          <AvatarGroup>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={globalSize}>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <AvatarGroupCount size={globalSize}>+12</AvatarGroupCount>
          </AvatarGroup>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function AvatarShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Avatar"
      description="Thành phần hình ảnh hiển thị đại diện cho người dùng, hỗ trợ dự phòng chữ hoặc icon khi ảnh lỗi."
      actions={
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <AvatarMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <AvatarMacroShowcase globalSize={globalSize} />,
        },
      ]}
    />
  );
}
