# Prompt: Migrate Showcase to New Architecture

## Mục tiêu

Refactor một file showcase component (`src/dev/showcase/[name].tsx`) sang kiến trúc mới với component `<Showcase>`, gom Micro và Macro vào **một file duy nhất**, **hai component nội bộ tách biệt**.

---

## Kiến trúc `<Showcase>` Component

```tsx
// src/dev/components/showcase.tsx

interface ShowcaseTab {
  label: string;            // Text hiển thị trên button tab
  content: React.ReactNode; // Nội dung của tab đó
}

interface ShowcaseProps {
  title: React.ReactNode;
  description: React.ReactNode;
  generalConcept?: React.ReactNode; // Khái niệm dùng chung (Chỉ dùng cho các khái niệm phức tạp, bỏ qua nếu quá cơ bản)
  tabs: ShowcaseTab[];
}
```

**Logic tự điều chỉnh:**
- `tabs.length >= 2` → Render Tab buttons + active tab content (default tab đầu tiên)
- `tabs.length < 2` → Không render Tab bar, render thẳng `tabs[0]?.content`

**Thứ tự render:**
1. Title
2. Description
3. `generalConcept` block (nếu có) — styled như `<ShowcaseDocs>` với background muted
4. Tab buttons *(chỉ khi `tabs.length >= 2`)*
5. Nội dung tab đang active

---

## Cấu trúc file chuẩn (1 file, 2 component)

```tsx
// src/dev/showcase/[component-name].tsx

import { ... } from "@/components/micro/[name]";
import { ...Preset } from "@/components/macro/[name]-preset";  // nếu có Macro
import { 
  ExampleSection, 
  ExampleGrid, 
  ShowcaseDocs, 
  Showcase, 
  DocsH3, 
  DocsP, 
  DocsUl, 
  DocsLi,
  DocsCode
} from "@/dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content (không export)
// ──────────────────────────────────────────────────────────
function [Name]MacroShowcase() {
  // State cục bộ nếu cần (ví dụ: controlled example)
  return (
    <div className="space-y-10">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Macro</DocsH3>
        <DocsP>...</DocsP>

        <DocsH3>Ưu điểm</DocsH3>
        <DocsUl>
          <DocsLi>...</DocsLi>
        </DocsUl>

        <DocsH3>Lưu ý</DocsH3>
        <DocsP>...</DocsP>
      </ShowcaseDocs>

      {/* Các ExampleSection của Macro */}
      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="...">
          <[Name]Preset ... />
        </ExampleSection>

        <ExampleSection label="Multiple" description="...">
          <[Name]Preset multiple ... />
        </ExampleSection>
      </ExampleGrid>

      {/* Thêm các sections khác */}
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function [Name]MicroShowcase() {
  // State cục bộ nếu cần
  return (
    <div className="space-y-10">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>...</DocsP>
      </ShowcaseDocs>

      {/* Các ExampleSection của Micro */}

      {/* Use Case Comparison — luôn ở cuối */}
      <ExampleSection
        label="🧭 Use Case Comparison"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro."
        fullWidth
      >
        ...
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function [Name]Showcase() {
  return (
    <Showcase
      title="[Component Name]"
      description="[Mô tả ngắn về component]"
      generalConcept={                    // Chỉ thêm nếu có khái niệm dùng chung
        <ShowcaseDocs>
          <DocsH3>[Tên khái niệm] (Áp dụng chung)</DocsH3>
          ...
        </ShowcaseDocs>
      }
      tabs={[
        // Component CÓ Macro: 2 tabs
        { label: "Micro (Primitive)", content: <[Name]MicroShowcase /> },
        { label: "Macro (Preset)",    content: <[Name]MacroShowcase /> },

        // Component CHỈ có Micro: 1 tab (không render Tab bar)
        // { label: "Micro", content: <[Name]MicroShowcase /> },
      ]}
    />
  );
}
```

---

## Quy tắc bắt buộc

1. **Không import** `SectionHeader` trong showcase nữa — `<Showcase>` đã handle phần `title` và `description`.
2. **`generalConcept`** chỉ dùng cho các khái niệm áp dụng cho **cả Micro lẫn Macro**. Nếu khái niệm quá cơ bản, hãy mạnh dạn bỏ qua để giao diện gọn gàng. Khi viết Docs, đảm bảo **format danh sách (`<ul>`/`<ol>`) rõ ràng** thay vì gom các ý vào một đoạn văn dài.
3. **`[Name]MacroShowcase` và `[Name]MicroShowcase`** là internal components — **không export**, chỉ dùng bên trong cùng file.
4. **State nội bộ** (như `controlledValue`) phải khai báo **bên trong component con** (`[Name]MacroShowcase` hoặc `[Name]MicroShowcase`), **không** khai báo ở entry point `[Name]Showcase`.
5. **Dọn dẹp sau khi migrate**: Xoá file cũ tương ứng trong `showcase/macro/[name].tsx` sau khi nội dung đã được gom vào file mới.

---

## Checklist trước khi commit

- [ ] Import `Showcase` từ `@/dev/components/showcase`
- [ ] Xoá import `SectionHeader` (không cần nữa)
- [ ] `[Name]MacroShowcase()` — không export, có đủ examples + ShowcaseDocs
- [ ] `[Name]MicroShowcase()` — không export, có đủ examples + Use Case Comparison ở cuối
- [ ] `tabs[]` đúng thứ tự: Micro trước, Macro sau (nếu có cả 2)
- [ ] File cũ trong `showcase/macro/[name].tsx` đã được xoá
- [ ] TypeScript build clean (`npx tsc --noEmit`)
