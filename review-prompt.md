# Bộ Prompt Code Review Cực Đoan (sadcn)

Lưu lại 2 bộ prompt này để dùng mỗi khi cần nhờ AI soi code khắt khe nhất dựa trên hệ thống luật của project. Thay thế `[Tên_Component]` bằng tên component bạn đang code.

---

## 1. Prompt Review Component MICRO (Primitive / Lõi cơ bản)
*Dùng cho các component gốc, bọc trực tiếp từ thư viện Headless UI.*

> Hãy **run code review** và chạy **edge case hunter** cho file `[Tên_Component]` này (Component thuộc nhóm Micro).  
> 
> Yêu cầu bắt buộc phải soi chiếu nghiêm ngặt các lỗi sau dựa trên `AGENTS.md` và UI/UX Best Practices:
> 1. **Component API & Styling (No Magic CSS):** Phát hiện và cảnh báo ngay lập tức nếu tôi đang dùng "magic CSS" (ví dụ `[&>div]`, `*:[a]`, `group-has-[...]`) thay vì dùng các `data-slot` hoặc `data-state` chuẩn của Headless UI.
> 2. **Biến CSS (CSS Variables):** Kiểm tra xem tôi có lạm dụng truyền state tĩnh qua biến CSS không (cấm). Bắt buộc phải dùng Tailwind classes trực tiếp với group modifier (ví dụ: `group-[.size-sm]/tên:size-6`).
> 3. **Type Definitions:** Bắt buộc dùng `type` (intersection `&`) thay vì `interface extends` khi extend props.
> 4. **ForwardRef & DisplayName:** Trả về lỗi nếu component dùng `forwardRef` nhưng quên không khai báo `displayName`. 
> 5. **Encapsulation:** Đảm bảo `className` của user truyền vào chỉ được áp dụng cho thẻ Wrapper ngoài cùng, không được chèn thẳng vào inner interactive element.
> 6. **Tailwind Merge (`cn`):** Đảm bảo mọi `className` nhận từ ngoài vào đều được bọc trong hàm `cn()` để tránh xung đột CSS.
> 7. **No Hardcoded Dimensions:** Primitive component KHÔNG ĐƯỢC tự quyết định width/height tổng thể của nó (ví dụ không hardcode `w-full` ở thẻ root). Trách nhiệm này thuộc về thẻ cha (thẻ bọc ngoài).
> 8. **Defensive Flexbox:** Bất cứ khi nào dùng `flex` có chứa text và icon/action bên trong, bắt buộc phải có `gap` (ví dụ `gap-2`) để tránh text đè lên icon khi bị tràn.
> 9. **Data Attributes Verification:** Tuyệt đối không tự bịa data-attribute. Phải verify xem Headless UI đang dùng chuẩn nào (ví dụ Radix dùng `data-[state=open]`, Base UI dùng `data-panel-open`).
> 
> Đừng nể nang, hãy liệt kê mọi sai sót dù là nhỏ nhất.

---

## 2. Prompt Review Component MACRO (Preset / Gộp thành cụm)
*Dùng cho các component lớn, cấu thành từ việc ghép các component Micro lại với nhau.*

> Tôi cần một bản **critical review** toàn diện và **run code review** cho file `[Tên_Component]` này (Component thuộc nhóm Macro).
> 
> Hãy đóng vai một System Architect khó tính nhất, rà soát mã nguồn dựa trên các rule sau của `AGENTS.md`:
> 1. **Micro vs Macro Relationship:** Component Macro này CÓ ĐANG VIẾT LẠI (duplicate) bất kỳ logic nào vốn đã thuộc trách nhiệm của Micro Component không? Nếu có, yêu cầu xoá và bắt buộc phải import logic từ Micro sang.
> 2. **Collection Components Rule:** Trọng điểm! Nếu đây là một Component danh sách (như Select, Combobox, Tabs, Menu...), kiểm tra xem thuộc tính `items` (data array) có được truyền chuẩn xuống Root của Headless UI không? Cảnh báo lỗi nghiêm trọng (Severe Bug) nếu tôi đang map dữ liệu thẳng bằng tĩnh (`children`) mà bỏ qua prop `items`.
> 3. **State Management:** Kiểm tra các luồng state (Controlled vs Uncontrolled) xem có bị xung đột không, các hàm `onChange` / `onValueChange` đã xử lý rủi ro giá trị `undefined` chưa?
> 4. **Props Forwarding:** Macro component có đang nuốt mất prop của user không? Đảm bảo các prop quan trọng như `className`, `disabled`, `id` được đẩy xuống đúng chỗ.
> 5. **Empty State & Error Fallback:** Component sẽ hiển thị ra sao nếu mảng `items` trống (`length === 0`) hoặc data bị lỗi? Hãy ép tôi phải xử lý trường hợp này.
> 6. **Edge Cases:** Tìm ra các kịch bản người dùng có thể làm crash Component này (ví dụ: mảng data trống, truyền data sai type, bấm liên tục, v.v...).
> 7. **Semantic Structure:** Cấu trúc HTML ghép lại đã chuẩn semantic chưa? (Ví dụ: danh sách phải dùng `ul`/`li`, tiêu đề phải dùng `h1-h6`).
> 
> Hãy báo cáo những điểm vi phạm rule và đề xuất đoạn code refactor tối ưu nhất.
