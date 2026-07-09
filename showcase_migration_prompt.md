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
- `tabs.length >= 2` → Render Tab buttons (ngang hàng title) + active tab content (default tab đầu tiên)
- `tabs.length < 2` → Không render Tab bar, render thẳng `tabs[0]?.content`

**Thứ tự render:**
1. Title + Tab buttons *(ngang hàng, chỉ khi `tabs.length >= 2`)*
2. Description
3. `generalConcept` block (nếu có) — render bằng `<ShowcaseDocs>` (nền ám vàng amber)
4. Nội dung tab đang active

---

## Các component hỗ trợ trong `@/dev/components/showcase`

### `ShowcaseDocs` — Khung tài liệu ám vàng

Hiển thị phần "Usage Guidelines" với giao diện giấy tờ (amber-tinted). **TUYỆT ĐỐI KHÔNG** dùng thẻ HTML thô (`<h3>`, `<p>`, `<ul>`, `<li>`, `<code>`) bên trong `ShowcaseDocs`. Thay vào đó, dùng các React Component thuần tương ứng bên dưới.

### Semantic Docs Components (thay thế cho HTML thô)

| Component    | Thay thế cho | Mô tả                                      |
| ------------ | ------------ | ------------------------------------------- |
| `<DocsH3>`   | `<h3>`       | Tiêu đề phụ bên trong docs                 |
| `<DocsP>`    | `<p>`        | Đoạn văn bản                               |
| `<DocsUl>`   | `<ul>`       | Danh sách không thứ tự                      |
| `<DocsLi>`   | `<li>`       | Một mục trong danh sách                     |
| `<DocsCode>` | `<code>`     | Đoạn code inline (ám vàng tone-sur-tone)    |

> **Lý do**: Trước đây dùng `<h3>`, `<p>` thô và ép style bằng Magic CSS descendant selectors (`[&>h3]:...`). Cách này vi phạm triết lý "No Magic CSS" và không bảo trì được. Các Docs Component thuần túy chứa sẵn class Tailwind, đảm bảo style nhất quán và WCAG-compliant.

### `ExampleSection` — Khung preview + code

Props chính:
- `label` — Tiêu đề của section
- `description` — Mô tả ngắn
- `fullWidth` — `true` để children fill toàn bộ chiều ngang
- `codeString` — **Override code hiển thị trong tab "Code"**. Dùng khi live code chứa `.map()`, `useState`, hay wrappers phức tạp làm rối mắt. Xem thêm Quy tắc 7.

### `ExampleGrid` — Responsive layout cho nhiều ExampleSection

```tsx
<ExampleGrid columns={2}> {/* hoặc 1, 3 */}
  <ExampleSection ...>...</ExampleSection>
  <ExampleSection ...>...</ExampleSection>
</ExampleGrid>
```

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
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng</DocsH3>
        <DocsP>...</DocsP>

        <DocsH3>Ưu điểm</DocsH3>
        <DocsUl>
          <DocsLi>...</DocsLi>
        </DocsUl>

        <DocsH3>Lưu ý</DocsH3>
        <DocsP>...</DocsP>
      </ShowcaseDocs>

      {/* Các ExampleSection của Macro — BẮT BUỘC dùng component Preset */}
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
    <div className="space-y-10 mt-6">
      <ShowcaseDocs>
        <DocsH3>Khi nào nên dùng Micro</DocsH3>
        <DocsP>...</DocsP>
      </ShowcaseDocs>

      {/* Các ExampleSection của Micro — BẮT BUỘC dùng component Primitive */}

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
2. **`generalConcept`** chỉ dùng cho các khái niệm áp dụng cho **cả Micro lẫn Macro**. Nếu khái niệm quá cơ bản, hãy mạnh dạn bỏ qua để giao diện gọn gàng. Khi viết Docs, đảm bảo **format danh sách (`<DocsUl>`/`<DocsLi>`) rõ ràng** thay vì gom các ý vào một đoạn văn dài.
3. **`[Name]MacroShowcase` và `[Name]MicroShowcase`** là internal components — **không export**, chỉ dùng bên trong cùng file.
4. **State nội bộ** (như `controlledValue`) phải khai báo **bên trong component con** (`[Name]MacroShowcase` hoặc `[Name]MicroShowcase`), **không** khai báo ở entry point `[Name]Showcase`.
5. **Dọn dẹp sau khi migrate**: Xoá file cũ tương ứng trong `showcase/macro/[name].tsx` sau khi nội dung đã được gom vào file mới.
6. **Tuyệt đối không "râu ông nọ cắm cằm bà kia" (No mixing Micro & Macro)**: 
   - Trong Tab **Macro** (`[Name]MacroShowcase`), BẮT BUỘC phải dùng component Preset (ví dụ: `<AccordionPreset>`).
   - Trong Tab **Micro** (`[Name]MicroShowcase`), BẮT BUỘC phải dùng các thành phần Primitive cơ sở (ví dụ: `<Accordion>`, `<AccordionItem>`).
   - Nếu có dùng prop `codeString` để override code hiển thị, nội dung code BẮT BUỘC phải khớp 100% với component thật đang được render. Không được phép render Micro nhưng code hiển thị lại là Macro hoặc ngược lại.
7. **`codeString` override (QUAN TRỌNG NHẤT ĐỂ TRÁNH LỖI)**: Hệ thống sinh code tự động sẽ làm rối code nếu bạn không cẩn thận. Bạn **BẮT BUỘC** phải ghi đè prop `codeString` trong các trường hợp sau:
   - Truyền JSX vào prop: `icon={<SearchIcon />}`, `action={<div/>}`, `title={<Badge/>}` (vì Icon sẽ bị dịch thành `<LucideSearch />`).
   - Truyền JSX vào mảng: `items={[{ content: <div/> }]}`.
   - Sử dụng thẻ wrapper dàn trang: `<div className="flex gap-4">` hoặc `<div className="w-full">` bao bọc component.
   - Có sử dụng React State (`useState`) hoặc React Hook Form (`Controller`).
   Tab "Code" phải luôn sạch sẽ, chứa đúng component API, không chứa rác layout hay AST compiled.
8. **Tuyệt đối không dùng toán tử ba ngôi trong `className` (No Conditional String Interpolation)**: 
   - ❌ SAI: `className={isActive ? "text-red-500" : ""}`
   - ✅ ĐÚNG: Dùng Data Attributes `data-invalid={...}` và styling qua `data-invalid:text-red-500`, HOẶC dùng `cn({"text-red-500": isActive})`. 
   Điều này là BẮT BUỘC để giữ CSS sạch và dễ bảo trì.
9. **Không dùng HTML thô bên trong `ShowcaseDocs`**: Tuyệt đối KHÔNG dùng `<h3>`, `<p>`, `<ul>`, `<li>`, `<code>`. Thay vào đó BẮT BUỘC dùng `<DocsH3>`, `<DocsP>`, `<DocsUl>`, `<DocsLi>`, `<DocsCode>`.
9. **Global State (Size Toggle) và MonoSelect**: Nếu component hỗ trợ prop `size`, bạn BẮT BUỘC phải tạo state `globalSize` ở entry point `[Name]Showcase`.
   - Truyền `<MonoSelect>` (import từ `@/dev/components/mono-select`) vào prop `actions` của `<Showcase>` để người dùng có thể đổi size cho toàn bộ trang.
   - **Tại sao lại là `MonoSelect`?** `MonoSelect` là thẻ `<select>` HTML nguyên thủy, được style chữ monospace (`font-mono`) nhằm ám chỉ đây là "công cụ dev (DevTool)". Dùng nó ở Showcase giúp bóc tách rõ với các component UI đang được demo bên dưới, tránh rườm rà và ngăn ngừa xung đột (như lỗi z-index, focus) so với việc dùng Headless UI Select (như `SelectPreset`).
   - Khi có override `codeString` chứa các prop ảnh hưởng bởi state này, hãy dùng chuỗi nội suy (ví dụ: `size="\${globalSize}"`) để tab Code tự động cập nhật khi thay đổi size.
10. **Bổ sung / Làm giàu Showcase (Enrichment)**: Nhân dịp gộp file, hãy rà soát lại xem component có đang bị "thiếu thốn" ví dụ không. Nếu component có các state phổ biến (như Disabled, Invalid/Error, File type, Checked, Indeterminate...) hoặc các variant đặc thù, hãy BỔ SUNG thêm các `<ExampleSection>` cho phong phú. Đừng chỉ copy-paste một cách máy móc từ file cũ.

---

## Checklist trước khi commit

- [ ] Import `Showcase` + các `Docs*` components từ `@/dev/components/showcase`
- [ ] Xoá import `SectionHeader` (không cần nữa)
- [ ] Dùng `MonoSelect` cho prop `actions` nếu component có hỗ trợ đổi `size`
- [ ] `[Name]MacroShowcase()` — không export, có đủ examples + ShowcaseDocs, **chỉ dùng Preset**
- [ ] `[Name]MicroShowcase()` — không export, có đủ examples + Use Case Comparison ở cuối, **chỉ dùng Primitive**
- [ ] `tabs[]` đúng thứ tự: Micro trước, Macro sau (nếu có cả 2)
- [ ] File cũ trong `showcase/macro/[name].tsx` đã được xoá
- [ ] Không còn thẻ HTML thô (`<h3>`, `<p>`, `<ul>`) bên trong `ShowcaseDocs`
- [ ] KHÔNG dùng toán tử ba ngôi (ternary) hay string interpolation cho `className` (Phải dùng `data-*` hoặc `cn()`).
- [ ] `codeString` ĐÃ ĐƯỢC THÊM cho **tất cả** ExampleSection có chứa: JSX trong prop, mảng chứa JSX, thẻ `div` dàn trang, `useState`, và Icon.
- [ ] Code trong `codeString` **khớp** với component thật đang render (không lộn Micro/Macro)
- [ ] TypeScript build clean (`npx tsc --noEmit`)
