# Hướng dẫn Chuẩn hoá (Migration) Showcase Components

Mục tiêu: Đưa tất cả các showcase file về một chuẩn chung, sử dụng wrapper `<Showcase>` mới nhất.

---

## Cấu trúc chuẩn của một file Showcase

BẮT BUỘC phải tuân theo cấu trúc 3 phần rõ ràng dưới đây.

```tsx
import { useState } from "react";
import {
  Showcase,
  ShowcaseDocs,
  DocsP,
  DocsUl,
  DocsLi,
  DocsCode,
  DocsH3,
  ExampleGrid,
  ExampleSection,
  SizeToggle,
} from "@/dev/components/showcase";
// 1. Import các Primitive components từ micro
import { [Component], [Component]Item } from "@/components/micro/[component]";
// 2. Import Preset component từ macro (nếu có)
import { [Component]Preset } from "@/components/macro/[component]-preset";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content (không export, NẾU CÓ)
// ──────────────────────────────────────────────────────────
function [Name]MacroShowcase({ globalSize }: { globalSize: Size }) {
  // State cục bộ nếu cần
  return (
    <div className="space-y-10 mt-6">
      {/* Các ExampleSection của Macro — BẮT BUỘC dùng component Preset */}
      <ExampleGrid columns={2}>
        <ExampleSection label="Standard" description="...">
          <[Name]Preset size={globalSize} ... />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function [Name]MicroShowcase({ globalSize }: { globalSize: Size }) {
  // State cục bộ nếu cần
  return (
    <div className="space-y-10 mt-6">
      {/* Các ExampleSection của Micro — BẮT BUỘC dùng component Primitive */}
      <ExampleSection label="Demo" description="...">
         <[Name] size={globalSize} />
      </ExampleSection>

      {/* Use Case Comparison — luôn ở cuối NẾU COMPONENT CÓ CẢ MICRO VÀ MACRO */}
      <ExampleSection
        label="🧭 Use Case Comparison"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro."
        fullWidth
        codeString="..."
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
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="[Component Name]"
      description="[Mô tả tổng quan về bản chất UI của component]"

      // BẮT BUỘC CÓ DUY NHẤT 1 \`generalConcept\` NẾU CẦN HƯỚNG DẪN SỬ DỤNG. ĐÂY LÀ NƠI DUY NHẤT ĐƯỢC ĐẶT USAGE GUIDELINES.
      // Nội dung phải mang tính trung lập, không thiên vị phân biệt Micro hay Macro.
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để... [giải thích kịch bản sử dụng chuẩn của design system]
          </DocsP>
          <DocsUl>
            <DocsLi>...</DocsLi>
          </DocsUl>
        </ShowcaseDocs>
      }

      // BẮT BUỘC CÓ NẾU COMPONENT HỖ TRỢ ĐỔI SIZE
      actions={<SizeToggle value={globalSize} onValueChange={setGlobalSize} />}

      tabs={[
        // Component CÓ Macro: 2 tabs
        { label: "Micro (Primitive)", content: <[Name]MicroShowcase globalSize={globalSize} /> },
        { label: "Macro (Preset)",    content: <[Name]MacroShowcase globalSize={globalSize} /> },

        // Component CHỈ có Micro: 1 tab (không render Tab bar)
        // { label: "Micro (Primitive)", content: <[Name]MicroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
```

---

## Quy tắc bắt buộc

1. **Không import** `SectionHeader` trong showcase nữa — `<Showcase>` đã handle phần `title` và `description`.
2. **`generalConcept` (Usage Guidelines) là BẮT BUỘC VÀ DÙNG CHUNG**: Đặt ở entry point `[Name]Showcase` để nó luôn hiển thị (nằm ngoài các tab). Component `<ShowcaseDocs>` đã tự động có background màu vàng nhạt nên bạn không cần tự style.
3. **`[Name]MacroShowcase` và `[Name]MicroShowcase`** là internal components — **không export**, chỉ dùng bên trong cùng file. KHÔNG chứa `ShowcaseDocs` bên trong hai component này.
4. **State nội bộ** (như `controlledValue`) phải khai báo **bên trong component con** (`[Name]MacroShowcase` hoặc `[Name]MicroShowcase`), **không** khai báo ở entry point `[Name]Showcase`.
5. **Tuyệt đối không "râu ông nọ cắm cằm bà kia" (No mixing Micro & Macro)**:
   - Trong Tab **Macro**, BẮT BUỘC phải dùng component Preset.
   - Trong Tab **Micro**, BẮT BUỘC phải dùng các thành phần Primitive cơ sở.
   - Nếu có dùng prop `codeString` để override code hiển thị, nội dung code BẮT BUỘC phải khớp 100% với component thật đang được render. Không được phép render Micro nhưng code hiển thị lại là Macro hoặc ngược lại.
6. **`codeString` override (QUAN TRỌNG NHẤT ĐỂ TRÁNH LỖI)**: Bạn **BẮT BUỘC** phải ghi đè prop `codeString` trong các trường hợp sau:
   - Truyền JSX vào prop: `icon={<SearchIcon />}`, `action={<div/>}`, `title={<Badge/>}`.
   - Truyền JSX vào mảng: `items={[{ content: <div/> }]}`.
   - Sử dụng thẻ wrapper dàn trang: `<div className="flex gap-4">` hoặc `<div className="w-full">` bao bọc component.
   - Có sử dụng React State (`useState`) hoặc React Hook Form (`Controller`).
     Tab "Code" phải luôn sạch sẽ, chứa đúng component API, không chứa rác layout hay AST compiled.
7. **Tuyệt đối không dùng toán tử ba ngôi trong `className` (No Conditional String Interpolation)**:
   - ❌ SAI: `className={isActive ? "text-red-500" : ""}`
   - ✅ ĐÚNG: Dùng Data Attributes `data-invalid={...}` và styling qua `data-invalid:text-red-500`, HOẶC dùng `cn({"text-red-500": isActive})`.
     Điều này là BẮT BUỘC để giữ CSS sạch và dễ bảo trì.
8. **Không dùng HTML thô bên trong `ShowcaseDocs`**: Tuyệt đối KHÔNG dùng `<h3>`, `<p>`, `<ul>`, `<li>`, `<code>`. Thay vào đó BẮT BUỘC dùng `<DocsH3>`, `<DocsP>`, `<DocsUl>`, `<DocsLi>`, `<DocsCode>`.
9. **Global State (Size Toggle)**: Nếu component hỗ trợ prop `size`, bạn BẮT BUỘC phải tạo state `globalSize` ở entry point `[Name]Showcase`.
   - Truyền `<SizeToggle value={globalSize} onValueChange={setGlobalSize} />` vào prop `actions` của `<Showcase>`.
   - Khi có override `codeString` chứa các prop ảnh hưởng bởi state này, hãy dùng chuỗi nội suy (ví dụ: \`size="\${globalSize}"\`) để tab Code tự động cập nhật khi thay đổi size.
10. **Bổ sung / Làm giàu Showcase (Enrichment)**: Nếu component có các state phổ biến (như Disabled, Invalid/Error) hoặc các variant đặc thù, hãy BỔ SUNG thêm các `<ExampleSection>` cho phong phú. Đừng chỉ copy-paste một cách máy móc từ file cũ.
11. **Inline Data Arrays (Trực quan hoá mảng dữ liệu)**: Tuyệt đối KHÔNG gán các mảng dữ liệu (như `items={presetItems}`) bằng một biến bên ngoài khi viết showcase. Bạn BẮT BUỘC phải viết trực tiếp (inline) mảng đó vào trong component (ví dụ: `items={[{ value: '1', title: '...' }]}`). Điều này giúp người dùng copy code ở tab "Code" thấy rõ được cấu trúc dữ liệu cần truyền vào. Áp dụng cho cả code thực tế lẫn `codeString` override.
12. **Use Case Comparison**: BẮT BUỘC phải có ở cuối component `[Name]MicroShowcase` **NẾU** component đó có cả bản Micro lẫn Macro (để hướng dẫn người dùng khi nào dùng cái nào).

---

## Checklist trước khi commit

- [ ] Đã đọc thủ công từng file thay vì dùng regex replace tự động.
- [ ] Import `Showcase` + các `Docs*` components + `SizeToggle` từ `@/dev/components/showcase`.
- [ ] Dùng `SizeToggle` cho prop `actions` NẾU component có hỗ trợ đổi `size`.
- [ ] `generalConcept` chứa `<ShowcaseDocs>` nằm ở hàm entry point và mang tính trung lập (Usage Guidelines).
- [ ] `[Name]MacroShowcase()` — không export, có đủ examples, **chỉ dùng Preset**, **KHÔNG chứa ShowcaseDocs**.
- [ ] `[Name]MicroShowcase()` — không export, có đủ examples, **chỉ dùng Primitive**, **KHÔNG chứa ShowcaseDocs**. NẾU CÓ CẢ MACRO VÀ MICRO, phải có `Use Case Comparison` ở cuối.
- [ ] `tabs[]` đúng thứ tự: Micro trước, Macro sau (nếu có cả 2).
- [ ] Không còn thẻ HTML thô (`<h3>`, `<p>`, `<ul>`) bên trong `ShowcaseDocs`.
- [ ] KHÔNG dùng toán tử ba ngôi (ternary) hay string interpolation cho `className`.
- [ ] `codeString` ĐÃ ĐƯỢC THÊM cho **tất cả** ExampleSection có chứa JSX phức tạp, mảng, div dàn trang.
- [ ] Đảm bảo các mảng dữ liệu (prop `items`) được viết inline trực tiếp, không truyền qua biến.
- [ ] Đã build thành công (`npm run build`).
