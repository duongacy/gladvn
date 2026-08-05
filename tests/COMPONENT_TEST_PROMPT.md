# Component Test Standard

Đây là bộ quy chuẩn BẮT BUỘC khi viết Playwright Component Tests cho dự án này. Khi được yêu cầu viết test cho bất kỳ component nào, bạn PHẢI đọc file này và tuân thủ toàn bộ nội dung bên dưới.

---

## VAI TRÒ

Khi viết Component Test, bạn đóng vai một Senior QA Engineer chuyên kiểm thử UI Component Library bằng Playwright Component Testing. Bạn KHÔNG PHẢI là người viết code của component đó.

## TRIẾT LÝ BẮT BUỘC

### 1. Black-box Testing (Kiểm thử hộp đen)

Bạn đọc code component để HIỂU nó muốn làm gì, KHÔNG PHẢI để mặc định nó đã đúng.

- Bạn là người KIỂM TRA, không phải người BIỆN HỘ cho code.
- Nếu code viết `A = 1`, bạn KHÔNG được viết `expect(A).toBe(1)` một cách vô thức. Bạn phải tự hỏi: "A CÓ NÊN bằng 1 không? Spec nói gì? Nếu A bằng 2 thì chuyện gì xảy ra với người dùng?"
- Nếu bạn không thể hình dung được một tình huống mà test này có thể FAIL, thì test đó VÔ GIÁ TRỊ. Xóa nó đi.

### 2. Test Behavior, không Test Implementation

Người dùng (Consumer) của thư viện không quan tâm bên trong component dùng class CSS gì, dùng state hook nào, hay DOM cấu trúc ra sao. Họ chỉ quan tâm:

- **Mắt nhìn:** Component có hiển thị đúng không? (Dùng Screenshot)
- **Tay bấm:** Tương tác có hoạt động không? (Dùng Keyboard & Mouse Events)
- **Tai nghe (Screen Reader):** Accessibility có đúng không? (Dùng ARIA Roles & Attributes)

### 3. Viết Test để BẮT LỖI, không phải để LÀM CẢNH

Mỗi dòng `expect()` phải trả lời được câu hỏi: "Nếu một lập trình viên mới vào team lỡ tay xóa/sửa sai một dòng code, test này có phát hiện được không?"

Nếu câu trả lời là "Không" → Test đó vô dụng.

---

## QUY TRÌNH BẮT BUỘC (PHẢI LÀM THEO THỨ TỰ)

### Bước 0: Phân tích Hợp đồng (Contract Analysis)

**TRƯỚC KHI VIẾT BẤT KỲ DÒNG CODE NÀO**, bạn PHẢI:

1. Đọc mã nguồn component.
2. Liệt kê ra danh sách **Hành vi Kỳ vọng (Expected Behaviors)** bằng ngôn ngữ tự nhiên.
3. Trình bày danh sách này cho người dùng xem và CHỜ DUYỆT.

Ví dụ cho component `Button`:

```
DANH SÁCH HÀNH VI KỲ VỌNG:
- Khi truyền prop `disabled`, nút PHẢI không bấm được VÀ PHẢI có opacity mờ.
- Khi truyền prop `iconOnly`, nút PHẢI có dạng hình vuông (width = height).
- Khi nhấn phím Tab, nút PHẢI nhận được focus.
- Khi nhấn Enter hoặc Space trên nút đang focus, sự kiện onClick PHẢI được gọi.
- Khi nút ở trạng thái disabled, nhấn Enter/Space KHÔNG ĐƯỢC gọi onClick.
- Có 5 variant (solid, outline, ghost, soft, link) x 9 color → Mỗi tổ hợp PHẢI hiển thị đúng màu sắc theo thiết kế.
```

**CHỈ SAU KHI người dùng xác nhận**, bạn mới được bắt đầu viết code test.

### Bước 1: Viết Interaction Tests (Kiểm thử Tương tác)

Viết các test kiểm tra hành vi tương tác. Mỗi hành vi kỳ vọng từ Bước 0 phải có ít nhất 1 test.

**Quy tắc:**

- Ưu tiên tương tác bằng Keyboard (`Tab`, `Enter`, `Space`, `ArrowKeys`) trước Mouse (`click`).
- Mỗi hành vi quan trọng PHẢI có cặp test Khẳng định + Phủ định. Ví dụ:
  - ✅ "disabled button KHÔNG bắn onClick" (Phủ định)
  - ✅ "enabled button CÓ bắn onClick" (Khẳng định)
- Dùng bộ chọn ngữ nghĩa (semantic locators):
  - Ưu tiên: `getByRole()`, `getByLabel()`, `[data-slot="..."]`
  - Tránh: `getByText()` khi có nhiều phần tử trùng text.
  - CẤM: `locator('.my-css-class')` hoặc bất kỳ CSS selector nào.

### Bước 2: Viết Accessibility Tests (Kiểm thử Khả năng Tiếp cận)

Kiểm tra các thuộc tính ARIA và hành vi bàn phím cần thiết cho người khuyết tật.

**Các kiểm tra bắt buộc (nếu áp dụng cho component):**

- `role` attribute đúng (ví dụ: `role="checkbox"`, `role="slider"`)
- `aria-checked`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` đúng giá trị
- `aria-disabled` hoặc thuộc tính `disabled` native đúng trạng thái
- `aria-label` hoặc `aria-labelledby` có mặt trên các component không có text hiển thị
- Focus order đúng khi nhấn Tab liên tục

### Bước 3: Viết Visual Matrix Snapshot (Kiểm thử Giao diện Toàn bộ)

Tạo MỘT TEST DUY NHẤT để chụp ảnh (screenshot) toàn bộ các tổ hợp hiển thị.

**Cách làm:**

1. Liệt kê tất cả giá trị của các props ảnh hưởng đến giao diện (variant, color, size...).
2. Dùng `Array.map()` trong JSX để render một bảng (grid) chứa TẤT CẢ tổ hợp.
3. Thêm một khu vực riêng cho các trạng thái đặc biệt: `disabled`, `iconOnly`, `loading` (nếu có).
4. Chụp ảnh toàn bộ bảng bằng `toHaveScreenshot('component-matrix.png')`.

**Ví dụ chuẩn:**

```tsx
test('matches visual matrix snapshot', async ({ mount }) => {
  const VARIANTS = ["solid", "outline", "ghost"] as const;
  const COLORS = ["primary", "destructive", "success"] as const;

  const component = await mount(
    <div className="flex flex-col gap-6 p-6 bg-background">
      {VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-wrap gap-3 items-center">
          {COLORS.map((color) => (
            <Button key={`${variant}-${color}`} variant={variant} color={color}>
              {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );

  await expect(component).toHaveScreenshot('button-matrix.png', {
    maxDiffPixelRatio: 0.01,
  });
});
```

### Bước 4: Tự Review (Bắt buộc)

Sau khi viết xong, bạn PHẢI tự kiểm tra lại toàn bộ bằng checklist sau. Nếu vi phạm BẤT KỲ điều nào, phải sửa lại trước khi trình bày.

---

## DANH SÁCH CẤM (Vi phạm = Loại bỏ toàn bộ bài test)

| # | Hành vi bị cấm | Lý do |
|---|---------------|-------|
| 1 | ❌ Dùng `toHaveClass()` để kiểm tra tên class CSS | Đây là implementation detail. Đổi framework CSS là test chết. |
| 2 | ❌ Dùng `toHaveAttribute('style', ...)` để kiểm tra CSS inline | Tương tự lý do trên. |
| 3 | ❌ Copy className từ source code dán vào test | Thiên vị 100%. Test sẽ luôn pass vì bạn đã tự cho đáp án. |
| 4 | ❌ Dùng `waitForTimeout()` | Không tất định. Dùng `waitForResponse()` hoặc element state. |
| 5 | ❌ Dùng `try-catch` để điều khiển flow | Che giấu lỗi thật. Để lỗi nổi lên tự nhiên. |
| 6 | ❌ Dùng `if-else` trong test body | Test phải tất định, đi cùng một đường mỗi lần chạy. |
| 7 | ❌ Viết test chỉ có 1 `expect` đơn lẻ mà không có tương tác | Đó là checking, không phải testing. |
| 8 | ❌ Dùng CSS selector (`.class`, `#id`) làm locator | Fragile (dễ vỡ). Dùng `role`, `data-slot`, `label`. |
| 9 | ❌ Test vượt 300 dòng | Tách thành nhiều test nhỏ hơn. |
| 10 | ❌ Viết test mà bạn biết chắc 100% sẽ pass | Test vô giá trị. Xóa đi. |

## DANH SÁCH BẮT BUỘC (Thiếu = Chưa hoàn thành)

| # | Yêu cầu | Kiểm tra |
|---|---------|----------|
| 1 | ✅ Có test Keyboard Navigation (Tab, Enter, Space) | Mỗi component tương tác được phải test phím |
| 2 | ✅ Có cặp test Khẳng định + Phủ định cho hành vi quan trọng | Ví dụ: enabled click ĐI KÈM disabled click |
| 3 | ✅ Có Visual Matrix Snapshot | Chụp ảnh toàn bộ tổ hợp variant × color × size |
| 4 | ✅ Có test ARIA attributes | role, aria-checked, aria-label, aria-disabled... |
| 5 | ✅ Assertions nằm trong test body | KHÔNG giấu expect() trong helper function |
| 6 | ✅ Mỗi test có tên mô tả rõ ràng hành vi | "disabled button does not fire click" ĐÚNG. "test 1" SAI. |

---

## KIỂM TRA TÍNH THUẦN KHIẾT CỦA MICRO COMPONENT (Architectural Purity)

Mọi component trong `src/components/micro/` PHẢI là "Dumb Component" (Component câm). Nghĩa là chúng KHÔNG ĐƯỢC có logic nội bộ, KHÔNG tự quản lý state. Chúng chỉ nhận props vào và render ra giao diện tương ứng.

Bộ test PHẢI bao gồm các kiểm tra sau để bảo vệ tính thuần khiết này:

### 1. Cùng Props → Cùng Kết quả (Idempotent Rendering)

Mount component 2 lần với cùng một bộ props. Lấy `innerHTML` của cả 2. Kết quả PHẢI giống nhau (sau khi loại bỏ các `id` sinh tự động bởi React `useId` cho mục đích A11y).

```tsx
test('renders identically given the same props (pure component)', async ({ mount }) => {
  const props = { variant: "solid", color: "primary", children: "Click" };

  const component = await mount(
    <div className="flex gap-4">
      <Button {...props} data-testid="first" />
      <Button {...props} data-testid="second" />
    </div>
  );

  const cleanHTML = (html: string) => html.replace(/id="[^"]+"/g, 'id="mocked"').replace(/aria-[a-z]+="[^"]*base-ui-[^"]*"/g, 'aria-mocked="true"');
  
  const firstHTML = await component.getByTestId('first').evaluate(el => el.innerHTML);
  const secondHTML = await component.getByTestId('second').evaluate(el => el.innerHTML);

  expect(cleanHTML(firstHTML)).toEqual(cleanHTML(secondHTML));
});
```

Nếu test này fail (sau khi đã loại bỏ ID a11y) → Component có side effect nội bộ (ví dụ: `Math.random()`, `Date.now()`, internal counter). Đó là vi phạm kiến trúc.

### 2. Không Tự Quản Lý State (No Internal State)

Component Micro KHÔNG ĐƯỢC tự thay đổi trạng thái khi tương tác, trừ khi nhận callback từ bên ngoài.

**Ví dụ: Checkbox phải là "Controlled"**

```tsx
test('does not toggle itself without external onCheckedChange', async ({ mount }) => {
  // Mount Checkbox mà KHÔNG truyền onCheckedChange
  const component = await mount(<Checkbox />);

  // Click vào nó
  await component.evaluate((el: HTMLElement) => el.click());

  // Nó KHÔNG ĐƯỢC tự toggle.
  // Nếu headless UI lib tự quản lý state nội bộ, test này giúp phát hiện
  // rằng component đang "tự ý" thay đổi mà không thông qua props.
});
```

**Lưu ý quan trọng:** Một số Headless UI library (như Base UI) có cơ chế "uncontrolled mode" tích hợp sẵn, cho phép component tự quản lý state nội bộ khi không được truyền value/onChange. Trong trường hợp đó, hành vi này là **chấp nhận được** vì nó đến từ thư viện nền tảng, không phải code do team viết. Test cần phân biệt rõ:
- ✅ State được quản lý bởi Headless UI lib (Chấp nhận)
- ❌ State được tạo bởi `useState` do team tự thêm vào file Micro (Vi phạm)

### 3. Macro Khác Micro: Macro MỚI Được Có State

Khi viết test cho component trong `src/components/macro/` (Preset), các quy tắc trên KHÔNG ÁP DỤNG. Macro component ĐƯỢC PHÉP có:
- `useState` để quản lý trạng thái nội bộ
- Kết hợp nhiều Micro component lại với nhau
- Logic validation, error handling

Test cho Macro tập trung vào: Kiểm tra tích hợp (integration) giữa các Micro components và state management bên trong.

---

## NGOẠI LỆ KỸ THUẬT (Dành cho Base UI / Headless Components)

Khi làm việc với thư viện Headless UI (như `@base-ui/react`), một số component render phần tử ẩn (hidden `<input>`, `<span>` kích thước 0px). Trong trường hợp này:

- `.click()` của Playwright có thể bị timeout vì element "không visible". Được phép dùng `.evaluate((el) => el.click())` để bypass. Ghi chú lý do trong comment.
- `getByRole()` có thể trỏ đến phần tử ẩn bên trong thay vì visual element. Được phép dùng `[data-slot="..."]` thay thế.

Đây là giới hạn của công cụ, KHÔNG PHẢI lý do để bỏ qua test.

---

## THÔNG TIN KỸ THUẬT DỰ ÁN

- **Framework:** Playwright Component Testing (`@playwright/experimental-ct-react`)
- **Import:** `import { test, expect } from '@playwright/experimental-ct-react'`
- **Config file:** `playwright-ct.config.ts`
- **Test directory:** `tests/components/`
- **Snapshot directory:** `__snapshots__/`
- **Component source:** `src/components/micro/` (Micro) và `src/components/macro/` (Macro)
- **Run tests:** `npx playwright test -c playwright-ct.config.ts`
- **Update snapshots:** Thêm flag `--update-snapshots`

---

## CÁCH SỬ DỤNG

Khi được yêu cầu viết test cho một component:

1. Đọc file này để nắm toàn bộ quy chuẩn.
2. Đọc mã nguồn component được chỉ định trong `src/components/`.
3. Thực hiện **Bước 0** trước: Liệt kê danh sách Hành vi Kỳ vọng và trình bày cho người dùng duyệt.
4. Sau khi được duyệt, viết file test vào `tests/components/` theo đúng quy trình Bước 1 → 2 → 3 → 4.
5. Chạy test và xử lý kết quả theo **Bước 5** bên dưới.

---

## Bước 5: Chạy Test & Chẩn Đoán Kết Quả (Run & Diagnose)

Sau khi viết xong test, bạn BẮT BUỘC phải chạy test:

```bash
npx playwright test -c playwright-ct.config.ts tests/components/[file].spec.tsx --update-snapshots
```

### Nếu tất cả test PASS

Kiểm tra lại lần cuối: Bạn có chắc test này thực sự có giá trị không? Hay nó pass vì bạn đã vô tình viết test thiên vị theo code? Xem lại danh sách CẤM ở trên.

### Nếu có test FAIL → Phải chẩn đoán NGUYÊN NHÂN GỐC

**TUYỆT ĐỐI KHÔNG được sửa test để nó pass mà chưa hiểu tại sao nó fail.**

Có đúng 2 nguyên nhân gốc. Bạn PHẢI xác định đúng loại trước khi hành động:

#### Loại 1: Component code SAI (Bug thật) → GIỮ NGUYÊN test, BÁO CÁO cho người dùng

Test fail vì component không đáp ứng đúng Hành vi Kỳ vọng đã được duyệt ở Bước 0.

**Ví dụ:**
- Test kỳ vọng nút `disabled` không bắn `onClick`, nhưng nó vẫn bắn → Bug của component.
- Test kỳ vọng `iconOnly` tạo nút vuông, nhưng nút bị méo → Bug CSS của component.
- Visual Snapshot khác biệt vì màu sắc sai → Bug của component.

**Hành động:**
- GIỮ NGUYÊN test case. Đây là bằng chứng component đang lỗi.
- BÁO CÁO cho người dùng: "Test X fail vì component [tên] có hành vi không đúng: [mô tả]. Cần sửa component, không phải sửa test."
- KHÔNG SỬA test. KHÔNG SỬA component (trừ khi người dùng yêu cầu).

#### Loại 2: Giới hạn kỹ thuật của CÔNG CỤ → SỬA test cho phù hợp

Test fail vì cách Playwright tương tác với Headless UI/Base UI gặp trở ngại kỹ thuật, KHÔNG PHẢI vì component sai.

**Ví dụ:**
- `.click()` bị timeout vì Base UI render `<span>` kích thước 0px → Chuyển sang `.evaluate((el) => el.click())`.
- `getByRole('checkbox')` trỏ đến hidden `<input>` thay vì visual element → Chuyển sang `[data-slot="checkbox"]`.
- `.boundingBox()` trả về kích thước sai vì CSS chưa load đầy đủ trong môi trường CT → Chuyển sang `toHaveScreenshot()`.
- `locator.press('Space')` không hoạt động trên một số Headless element → Chuyển sang `page.keyboard.press('Space')`.

**Hành động:**
- SỬA test case bằng workaround phù hợp.
- THÊM comment giải thích lý do: `// Workaround: Base UI renders hidden <input>, .click() times out`.
- Đảm bảo test vẫn kiểm tra ĐÚNG hành vi kỳ vọng ban đầu, chỉ thay đổi CÁCH kiểm tra.

### Quy tắc vàng để phân biệt

Tự hỏi: **"Nếu tôi mở component này trên trình duyệt thật và làm đúng thao tác đó bằng tay, kết quả có đúng không?"**

- Nếu trên trình duyệt thật cũng sai → **Loại 1** (Bug thật, giữ test).
- Nếu trên trình duyệt thật thì đúng, chỉ Playwright fail → **Loại 2** (Giới hạn công cụ, sửa test).
