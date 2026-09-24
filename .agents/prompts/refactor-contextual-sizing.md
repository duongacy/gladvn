# SOP: Zero-Specificity Contextual Sizing Refactoring

Dùng prompt dưới đây để giao việc cho AI (Gemini/Claude/GPT) mỗi khi muốn nâng cấp một component sang kiến trúc Zero-Specificity Contextual. Thay tên `[TÊN COMPONENT]` vào trước khi copy gửi.

---

Xin chào, tôi cần bạn refactor component `[TÊN COMPONENT VÍ DỤ: Card]` theo Kiến Trúc "Zero-Specificity Contextual Sizing" và "Defensive Context" mà dự án GLADVN đang áp dụng. Hãy tuân thủ nghiêm ngặt 3 bước sau:

#### BƯỚC 1: Refactor tầng Micro (`src/components/micro/[component].tsx`)
1. **Thiết lập React Context (Defensive Hook):**
   - Tạo một React Context tên là `[Component]Context` với giá trị mặc định là `false`.
   - Viết một custom hook `use[Component]Context(componentName: string)`. Bên trong hook này, đọc giá trị context. Nếu `NODE_ENV !== "production"` và giá trị là `false`, hãy bắn ra `console.warn` với thông báo: `[gladvn] <${componentName}> phải được dùng bên trong <[Component]Root>. Nếu dùng bên ngoài, contextual sizing sẽ không hoạt động.`
2. **Cập nhật Root Component:**
   - Xóa bỏ class `group/[name]` ra khỏi chuỗi `className` của root component.
   - Bọc `children` của root component bằng `<[Component]Context value={true}>`.
   - Đảm bảo Root component nhận và in ra DOM thuộc tính `data-size={size}` và `data-slot="[component-slot]"`.
3. **Cập nhật Child Components (Contextual Sizing với độ ưu tiên bằng 0):**
   - Trong mỗi component con, gọi hook `use[Component]Context('TênThẻCon')` ở đầu hàm.
   - Tìm TẤT CẢ các class đang viết theo chuẩn cũ: `group-data-[size=sm]/[name]:[class]` và thay thế triệt để bằng chuẩn mới: `"[:where([data-slot=[root-slot]][data-size=sm]_&)]:[class]"`.
   - Làm tương tự cho tất cả các size (`sm`, `md`, `lg`).
   - **QUAN TRỌNG NHẤT (The Zero-Specificity Trap):** Vì `:where()` có độ ưu tiên bằng 0, nên nếu bạn để lại một class mặc định (ví dụ: `size-10` hoặc `p-6`) ở chuỗi base `cn()`, class mặc định này (ưu tiên = 10) SẼ LUÔN LUÔN đè bẹp `:where()` (ưu tiên = 0). Do đó:
     - Xóa HẾT mọi explicit sizing class mặc định (width, height, padding, text-size) ra khỏi chuỗi gốc.
     - Khai báo TẤT CẢ các size (sm, md, lg) bằng `:where()`.
     - Nếu một thẻ cần kích thước co giãn theo nội dung khi không có `data-size` ở cha, hãy để nó tự nhiên (không gán hardcode class). TUYỆT ĐỐI không dùng `[:where(...):not(...)]` trừ khi cực kỳ cần thiết.

#### 🚨 CRITICAL RULES DÀNH CHO AI DÙNG PROMPT NÀY:
- **CẤM DÙNG `group-data-*`:** Việc dùng `group` và `group-data-*` để styling context size giờ đây bị coi là vi phạm kiến trúc.
- **KHÔNG DÙNG `!important`:** Toàn bộ kiến trúc này sinh ra để không ai phải dùng `!important`. Nếu bạn thấy mình cần dùng `!`, tức là bạn đã làm sai bước "Zero-Specificity Trap" ở trên.
- **KHÔNG GÁN STATE QUA CSS VARIABLES:** Cấm truyền state prop (size, color) xuống con bằng `[--my-var:...]`.

#### BƯỚC 2: Refactor tầng Macro (`src/components/macro/[component]-preset.tsx` - Nếu có)
- Tầng Macro đóng vai trò là Consumer. Khẳng định rằng Macro component ĐANG truyền thẳng prop `size={size}` xuống Root Component của Micro.
- TUYỆT ĐỐI KHÔNG để Macro tự tính toán thủ công các utility class liên quan đến size (như `text-lg`, `size-12`) rồi nhét vào các thẻ con. Thẻ con phải tự động scale nhờ CSS Context. Xóa sạch mọi logic class sizing dư thừa ở Macro.

#### BƯỚC 3: Refactor Showcase và Type-Check (`src/dev/showcase/[component].tsx` hoặc thư mục `app/pages/`)
- Mở file showcase tương ứng của component này.
- Đảm bảo showcase đọc biến `const { globalSize } = useDevContext()` và truyền `size={globalSize}` vào gốc của component để test tính năng responsive.
- Chạy `npx tsc --noEmit` để đảm bảo không có bất kỳ type error nào xảy ra sau quá trình refactor.
- (Tùy chọn) Chạy một Unit Test đơn giản hoặc kiểm tra bằng mắt (view_file) xem cấu trúc đã hoàn hảo chưa.

Hãy suy nghĩ thật kỹ (THINK) trước khi thực hiện các lệnh `multi_replace_file_content`. Khi bạn đã hiểu rõ, hãy bắt tay vào làm với `[TÊN COMPONENT]` ngay bây giờ!

---

### 📝 CHECKLIST CÁC COMPONENT CẦN REFACTOR:
Dưới đây là danh sách 10 component hiện đang sử dụng `group-data-[size=*]` (cần được chuyển đổi sang chuẩn mới). Bạn hãy dùng prompt này để yêu cầu AI xử lý từng component một:
- [ ] `alert`
- [ ] `avatar`
- [ ] `card`
- [ ] `checkbox`
- [ ] `combobox`
- [ ] `field`
- [ ] `input-group`
- [ ] `input-otp`
- [ ] `item`
- [ ] `radio-group`
