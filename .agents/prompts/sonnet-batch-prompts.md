# Sonnet Refactoring Prompts

Đây là bộ prompt tối ưu hóa token dành riêng cho Claude 3.5 Sonnet. Thay vì bắt Sonnet đọc một đống luật dài dòng lặp đi lặp lại 10 lần, bạn chỉ cần nạp "Luật Chung" một lần duy nhất vào đầu phiên chat (hoặc System Prompt), sau đó ném từng "Nhiệm vụ riêng" cho mỗi component.

---

## 1. NẠP LUẬT CHUNG (Gửi ở tin nhắn đầu tiên)

**Prompt:**
```text
Bạn là một Senior Frontend Architect. Nhiệm vụ của bạn là refactor các component thư viện UI của tôi sang kiến trúc "Zero-Specificity Contextual Sizing".

Luật Kiến Trúc BẮT BUỘC:
1. MICRO LAYER:
- Thêm `React.createContext(false)` (VD: `CardContext`).
- Viết `use[Component]Context(name: string)` để cảnh báo `console.warn` nếu context = false (chỉ ở NODE_ENV !== "production").
- Xóa class `group/[name]` ở thẻ Root, bọc children bằng `<Context value={true}>`.
- Đảm bảo Root có `data-size={size}` và `data-slot="[name]"`.
- Ở các thẻ con, xóa mọi class `group-data-[size=...]/name:class`. Thay bằng: `"[:where([data-slot=root-name][data-size=sm]_&)]:[class]"`.
- BẪY ZERO-SPECIFICITY: Xóa toàn bộ default size class (VD: `p-6`, `size-10`) ra khỏi base string `cn()`. Nếu không, nó sẽ đè `:where()`. Khai báo TẤT CẢ các size bằng `:where()`. Không dùng `!important`.

2. MACRO LAYER (Nếu có file preset):
- Đảm bảo truyền thẳng prop `size` xuống Micro Root.
- Xóa mọi class sizing (text-lg, size-10) dư thừa truyền vào thẻ con từ Macro, hãy để Micro tự lo.

Tôi sẽ cung cấp từng component ở các tin nhắn tiếp theo. Hãy trả về code trực tiếp, không cần giải thích.
```

---

## 2. CÁC NHIỆM VỤ ĐƠN (Gửi từng cái một cho Sonnet)

Sau khi Sonnet đã hiểu luật, hãy copy và paste từng block dưới đây cho nó xử lý. Nó sẽ đọc file, hiểu bối cảnh ngay lập tức và đưa ra kết quả.

### 🔲 Component 1: Alert
```text
Hãy refactor component Alert.
- File Micro: `src/components/micro/alert.tsx`
- File Macro: `src/components/macro/alert-preset.tsx`
Chú ý class ở dòng 134 của Micro đang có default `size-4` trộn với `group-data`, hãy cẩn thận bẫy zero-specificity.
```

### 🔲 Component 2: Avatar
```text
Hãy refactor component Avatar.
- File Micro: `src/components/micro/avatar.tsx`
- File Macro: `src/components/macro/avatar-preset.tsx`
Chú ý ở thẻ con nó đang truyền class kiểu `group-data-[size=sm]/avatar:text-xs`. Hãy bọc Context và đổi sang `:where()`.
```

### 🔲 Component 3: Card
```text
Hãy refactor component Card.
- File Micro: `src/components/micro/card.tsx`
- File Macro: `src/components/macro/card-preset.tsx`
Card đang có default `p-6` và `text-base` cực kỳ nguy hiểm, sẽ đè bẹp `[:where()]`. Hãy xóa chúng khỏi base string và định nghĩa lại 3 size sm, md, lg bằng `:where()`.
```

### 🔲 Component 4: Checkbox
```text
Hãy refactor component Checkbox.
- File Micro: `src/components/micro/checkbox.tsx`
- File Macro: `src/components/macro/checkbox-preset.tsx`
Ở Checkbox, class `[:where(&>svg)]:size-3.5` đang là default. Chuyển tất cả sizing của icon về `:where([data-slot=checkbox][data-size=...]_&)]` chuẩn.
```

### 🔲 Component 5: Combobox
```text
Hãy refactor component Combobox.
- File Micro: `src/components/micro/combobox.tsx`
- File Macro: `src/components/macro/combobox-preset.tsx`
Component này khá phức tạp. Hãy đảm bảo root `<Combobox>` cấp Context, và các thẻ con (Input, Item) sử dụng đúng tên Context để đổi sang `[:where()]`.
```

### 🔲 Component 6: Field
```text
Hãy refactor component Field.
- File Micro: `src/components/micro/field.tsx`
- File Macro: `src/components/macro/field-preset.tsx`
Field ảnh hưởng đến toàn bộ Form (Label, Description, Message). Hãy tìm toàn bộ `group-data-[size=sm]/field:text-xs` và đổi sang chuẩn mới. Xóa default `text-sm` khỏi chuỗi gốc.
```

### 🔲 Component 7: Input Group
```text
Hãy refactor component Input Group.
- File Micro: `src/components/micro/input-group.tsx`
- Component này không có Macro. Tập trung xử lý Context cho các thẻ con bên trong để nó đồng bộ size (height, icon size) với cha.
```

### 🔲 Component 8: Input OTP
```text
Hãy refactor component Input OTP.
- File Micro: `src/components/micro/input-otp.tsx`
- File Macro: `src/components/macro/input-otp-preset.tsx`
Slot của OTP đang hardcode default size là `size-8`. Hãy gỡ hardcode đó ra và chia size sm/md/lg bằng `:where()` rõ ràng.
```

### 🔲 Component 9: Item
```text
Hãy refactor component Item.
- File Micro: `src/components/micro/item.tsx`
- Component này là component siêu vi (không có macro), được dùng bên trong Dropdown/Select/Menu. Xử lý kĩ phần size của icon/avatar bên trong Item bằng Contextual sizing.
```

### 🔲 Component 10: Radio Group
```text
Hãy refactor component Radio Group.
- File Micro: `src/components/micro/radio-group.tsx`
- File Macro: `src/components/macro/radio-group-preset.tsx`
Tương tự Checkbox, RadioGroupIndicator (vòng tròn bên trong) đang có default size (VD: `size-2`). Cần xóa default đó để `:where()` hoạt động chính xác.
```
