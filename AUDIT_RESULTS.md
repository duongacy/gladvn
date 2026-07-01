# Consolidated Audit Results

This file contains the audit results for all components, centralized here so that individual prompt files remain clean.

## Accordion

| Rule/Tiêu chí                   | Verdict | Note                                                                      |
| ------------------------------- | ------- | ------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI hỗ trợ Accordion pattern hoàn hảo, gồm header, button, region.    |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Icon xoay bằng CSS thông qua`group-aria-expanded` rất tốt. |
| 22. Pure Composition (CRITICAL) | ✅      | Không vi phạm. Các component rải rác thuần tuý, không loop array.         |
| Form Control Parity             | ✅      | Focus ring đồng bộ với Button.                                            |
| Dark Mode Compliance            | ✅      | `border`, `bg` hỗ trợ dark mode tốt.                                      |

---

## Alert-dialog

| Rule/Tiêu chí                   | Verdict | Note                                                           |
| ------------------------------- | ------- | -------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Focus Trap và Focus Restoration được Base UI xử lý xuất sắc.   |
| 21. CSS Depth Boundary          | ✅      | Không có vi phạm.                                              |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tuân thủ.                                            |
| Form Control Parity             | ✅      | Dùng lại `<Button>` component cho Action và Cancel đúng chuẩn. |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt, background/backdrop chuẩn.                |

---

## Alert

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc alert với `role="alert"` chuẩn xác.                                              |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Rất sạch sẽ, chia tách rõ Title, Description, Icon.                                       |
| Form Control Parity             | ✅      | Kích thước đồng đều giữa các variant (Rule #5 Linear Design).                             |
| Dark Mode Compliance            | ✅      | Semantic color tokens (bg-info/5, text-info) hiển thị tốt cả 2 theme.                     |

---

## Aspect-ratio

| Rule/Tiêu chí                   | Verdict | Note                                                                                          |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Là thẻ div thuần tuý không ARIA roles, chuẩn chỉ (pure CSS layout utility).                   |
| 21. CSS Depth Boundary          | ✅      | Không có deep selector.                                                                       |
| 22. Pure Composition (CRITICAL) | ✅      | Component đơn giản, pass hoàn toàn.                                                           |
| Form Control Parity             | ✅      | CSS Custom Properties (CSS variable) kết hợp CSS modern`aspect-ratio` được cấu hình xuất sắc. |
| Dark Mode Compliance            | ✅      | Không áp dụng màu sắc nên không ảnh hưởng.                                                    |

---

## Avatar

| Rule/Tiêu chí                   | Verdict | Note                                                                                              |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI hỗ trợ đầy đủ các trạng thái loading/fallback và accessible text.                         |
| 21. CSS Depth Boundary          | ✅      | Sử dụng chính xác `[&>svg]` cho direct child thay vì deep selector. Cấu trúc rất sạch.            |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tách biệt Image, Fallback, Badge, Group.                                                |
| Form Control Parity             | ✅      | Avatar Badge và Group dùng `ring-2 ring-background` chuẩn. Kích thước linh hoạt theo prop `size`. |
| Dark Mode Compliance            | ✅      | Sử dụng `dark:after:mix-blend-lighten` rất sáng tạo để xử lý contrast ở dark mode.                |

---

## Badge

| Rule/Tiêu chí                   | Verdict | Note                                                                                    |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Badge mặc định render như `<span>` (Inline) thông qua `useRender` là chuẩn xác nhất.    |
| 21. CSS Depth Boundary          | ✅      | Dùng đúng `[&>svg]` (Rule #21 exception cho direct child icon).                         |
| 22. Pure Composition (CRITICAL) | ✅      | Không vi phạm.                                                                          |
| Form Control Parity             | ✅      | Không chứa logic hover tương tác sai lệch, styling form control an toàn và nhất quán.   |
| Dark Mode Compliance            | ✅      | Semantic tokens (primary, secondary, destructive, outline) đồng bộ hoàn hảo với Button. |

---

## Breadcrumb

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                   |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc `<nav aria-label>` -> `<ol>` -> `<li>` -> `aria-current="page"` và `aria-hidden="true"` ở separator hoàn hảo. |
| 21. CSS Depth Boundary          | ✅      | Các icon bên trong Separator và Ellipsis được style an toàn bằng `[&>svg]`.                                            |
| 22. Pure Composition (CRITICAL) | ✅      | Component chia tách rạch ròi, dev tự ráp cấu trúc `ol > li`.                                                           |
| Form Control Parity             | ✅      | Polymorphism xuất sắc ở `BreadcrumbLink` thông qua `useRender`.                                                        |
| Dark Mode Compliance            | ✅      | Màu `text-muted-foreground` chuyển sang `text-foreground` rất mượt mà trên cả 2 themes.                                |

---

## Button

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Sử dụng Base UI Button, handle space/enter và ARIA roles tốt                              |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Không chứa wrapper nào sinh mảng, hoàn toàn là structural node.                           |
| Form Control Parity             | ✅      | Sizing (h-7, h-8, h-9) khớp chính xác                                                     |
| Dark Mode Compliance            | ✅      | Semantic tokens hoạt động tốt, focus rings và states tuân thủ parity cheatsheet           |

---

## Calendar

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                                |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | React Day Picker v9 xử lý hoàn hảo ARIA grid pattern và keyboard navigation                                                         |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.                                           |
| 22. Pure Composition (CRITICAL) | ✅      | Bản thân Calendar wrap DayPicker (third party library) nên có vẻ monolithic, tuy nhiên nó thuộc diện Primitive Wrappers. Chấp nhận. |
| Form Control Parity             | ✅      | Focus ring đồng bộ với Button. Sizes được kiểm soát cực tốt qua `[--cell-size]`.                                                    |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt, hover và focus state hiển thị chuẩn                                                                            |

---

## Card

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc semantic cơ bản (dùng div cho layout utility container)                          |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Rạch ròi 100% giữa Card, Header, Title, Content. Không có monolithic props.               |
| Form Control Parity             | ✅      | CSS Custom Properties `[--card-spacing]` xử lý responsive padding tuyệt vời.              |
| Dark Mode Compliance            | ✅      | `bg-card text-card-foreground` tự động scale theo theme.                                  |

---

## Carousel

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                        |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc `role="region"`, `aria-roledescription="carousel"`, `role="group"` trên slide cực chuẩn. Controls có `aria-label`. |
| 21. CSS Depth Boundary          | ✅      | Không dùng deep selector, styling trực tiếp trên wrapper.                                                                   |
| 22. Pure Composition (CRITICAL) | ✅      | Các slide truyền qua `children` thuần tuý. `CarouselDots` tự loop nội bộ nhưng từ UI state của embla (chấp nhận được).      |
| Form Control Parity             | ✅      | Re-use component `<Button>` cho prev/next buttons (Rule #13)                                                                |
| Dark Mode Compliance            | ✅      | Kế thừa style từ parent và Button variant, hoạt động tốt.                                                                   |

---

## Chart

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                                                                                |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Component làm tốt việc đóng gói UI. Tuy nhiên việc bổ sung data table alternative và `aria-label` để full accessible phụ thuộc vào người dùng component (Do giới hạn của Recharts). |
| 21. CSS Depth Boundary          | ✅      | Có sử dụng hàng loạt deep selector (`[&_.recharts-...]`) ở L68, nhưng HỢP LỆ do đây là ngoại lệ của Rule #21 dành cho third-party SVG library (Recharts).                           |
| 22. Pure Composition (CRITICAL) | ✅      | Ngoại lệ được cho phép: Chart Tooltip/Legend phải dùng vòng lặp nội bộ (payload map) do đặc thù Recharts.                                                                           |
| Form Control Parity             | ✅      | Không áp dụng trực tiếp, nhưng Legend và Tooltip sử dụng các text token của hệ thống.                                                                                               |
| Dark Mode Compliance            | ✅      | `ChartStyle` inject CSS custom properties cực kỳ thông minh để xử lý color config theo theme `light`/`dark`.                                                                        |

---

## Checkbox

| Rule/Tiêu chí                   | Verdict | Note                                                                                   |
| ------------------------------- | ------- | -------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI Checkbox hỗ trợ đầy đủ aria-checked="mixed" và space toggle                    |
| 21. CSS Depth Boundary          | ✅      | Dùng `[&>svg]` trực tiếp tại CheckboxPrimitive.Indicator, không lạm dụng deep selector |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tuân thủ. Root và Indicator độc lập.                                         |
| Form Control Parity             | ✅      | Kích thước size-3.5, size-4, size-5 và focus-visible hoàn toàn khớp                    |
| Dark Mode Compliance            | ✅      | data-checked:bg-primary kết hợp dark mode token hoàn chỉnh                             |

---

## Collapsible

| Rule/Tiêu chí                   | Verdict | Note                                                                           |
| ------------------------------- | ------- | ------------------------------------------------------------------------------ |
| W3C APG / ARIA                  | ✅      | Base UI xử lý toggle accessibility chuẩn xác.                                  |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Không lạm dụng CSS selector sâu.                                       |
| 22. Pure Composition (CRITICAL) | ✅      | Component chia tách rõ ràng (Root, Trigger, Content), cho phép tùy biến tự do. |
| Form Control Parity             | ✅      | Có thể đồng bộ với Form.                                                       |
| Dark Mode Compliance            | ✅      | Semantic colors.                                                               |

---

## Combobox

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI Combobox sử dụng virtual focus và aria-activedescendant chuẩn                     |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Rạch ròi. Group, Item, Chips được tách biệt 100%, không sinh mảng monolithic.             |
| Form Control Parity             | ✅      | Tái sử dụng `InputGroup`, kế thừa form control parity hoàn hảo                            |
| Dark Mode Compliance            | ✅      | Dùng semantic tokens tốt, Popup có shadow và border-ring rõ ràng                          |

---

## Command

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Combobox + listbox pattern được `cmdk` xử lý xuất sắc (`aria-activedescendant`).          |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Không có logic tự sinh mảng command bên trong, các item được define 100% qua JSX.         |
| Form Control Parity             | ✅      | Search input tái sử dụng `InputGroup` và đảm bảo height/border chuẩn.                     |
| Dark Mode Compliance            | ✅      | Semantic colors (`bg-popover`, `text-popover-foreground`) render tốt.                     |

---

## Context-menu

| Rule/Tiêu chí                   | Verdict | Note                                                                                         |
| ------------------------------- | ------- | -------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Menu button ARIA roles và full keyboard navigation được Base UI hỗ trợ hoàn hảo              |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.    |
| 22. Pure Composition (CRITICAL) | ✅      | Giữ nguyên cấu trúc Primitive của Base UI, không nhúng array data.                           |
| Form Control Parity             | ✅      | Sizing (h-7, h-8, h-9) không trực tiếp áp dụng nhưng base styling đồng nhất với DropdownMenu |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt, hover và focus state hiển thị chuẩn                                     |

---

## Dialog

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Focus Trap, Focus Restoration và ARIA attributes đều được Base UI xử lý tốt               |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Component chia tách rạch ròi Root, Trigger, Content, Header, Footer.                      |
| Form Control Parity             | ✅      | Close Button tái sử dụng `<Button variant="ghost">` rất chuẩn xác (Rule #3)               |
| Dark Mode Compliance            | ✅      | Overlay `bg-black/10` và content dùng `bg-popover` hiển thị tốt trên cả 2 themes          |

---

## Direction

| Rule/Tiêu chí                   | Verdict | Note                                                        |
| ------------------------------- | ------- | ----------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cung cấp text direction context chuẩn qua `@base-ui/react`. |
| 21. CSS Depth Boundary          | ✅      | Không áp dụng.                                              |
| 22. Pure Composition (CRITICAL) | ✅      | Không áp dụng (chỉ là Provider).                            |
| Form Control Parity             | ✅      | Không áp dụng.                                              |
| Dark Mode Compliance            | ✅      | Không áp dụng.                                              |

---

## Drawer

| Rule/Tiêu chí                   | Verdict | Note                                                                   |
| ------------------------------- | ------- | ---------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Vaul handle drag alternative (esc) và focus trap chuẩn xác             |
| 21. CSS Depth Boundary          | ✅      | Không có vi phạm deep selector, styling trực tiếp bằng data attributes |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tuân thủ.                                                    |
| Form Control Parity             | ✅      | Animation và transform sử dụng CSS thuần qua data state                |
| Dark Mode Compliance            | ✅      | Kế thừa từ popover text/bg, tương thích dark mode                      |

---

## Dropdown-menu

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Menu Button pattern, type-ahead và focus management hoạt động tuyệt vời                   |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Không map logic vòng lặp, thuần tuý composition block.                                    |
| Form Control Parity             | ✅      | Parity hoàn hảo với Context Menu (Rule #5 Linear Design)                                  |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt, hover và focus state hiển thị chuẩn                                  |

---

## Empty

| Rule/Tiêu chí                   | Verdict | Note                                                                                                              |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc rành mạch. Để empty state có accessibility cao, user cần thêm `role="status"` vào component lúc sử dụng. |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.                         |
| 22. Pure Composition (CRITICAL) | ✅      | Thuần tuý structural markup, chia các phần Title/Description/Action minh bạch.                                    |
| Form Control Parity             | ✅      | Kế thừa spacing system chuẩn.                                                                                     |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt (`text-muted-foreground`, `bg-muted`).                                                        |

---

## Field

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                                        |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Wrapper cho Field component cung cấp đầy đủ slot ID. (Phụ thuộc vào component mẹ hoặc user manual wiring).                                  |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.                                                   |
| 22. Pure Composition (CRITICAL) | ✅      | Ngoại lệ được cho phép: FieldError map qua mảng errors (cực kỳ phổ biến và chuẩn mực khi làm việc với react-hook-form hay Zod form states). |
| Form Control Parity             | ✅      | Logic layout cực kỳ mạnh mẽ để render control ngang/dọc/responsive. Đạt chuẩn cao.                                                          |
| Dark Mode Compliance            | ✅      | Tokens chuẩn xác.                                                                                                                           |

---

## Hover-card

| Rule/Tiêu chí                   | Verdict | Note                                                                  |
| ------------------------------- | ------- | --------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI xử lý PreviewCard (HoverCard) hoàn hảo với hover/focus delays |
| 21. CSS Depth Boundary          | ✅      | Không có deep CSS selectors vi phạm                                   |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tuân thủ.                                                   |
| Form Control Parity             | ✅      | Animation và shadow khớp đồng bộ với Popover                          |
| Dark Mode Compliance            | ✅      | Kế thừa từ `bg-popover`, hiển thị tốt                                 |

---

## Input-group

| Rule/Tiêu chí                   | Verdict | Note                                                                                                 |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Wrapper xử lý aria tốt, focus được pass through chuẩn                                                |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.            |
| 22. Pure Composition (CRITICAL) | ✅      | Không map logic mảng, cho phép user hoàn toàn tự ráp Addon, Button, Text.                            |
| Form Control Parity             | ✅      | Sizing (min-h-7, min-h-8, min-h-9) khớp chính xác, focus vòng ngoài xử lý xuất sắc bằng CSS `:has()` |
| Dark Mode Compliance            | ✅      | `dark:bg-input/30` áp dụng chuẩn, shadow và border đúng                                              |

---

## Input-otp

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | OTPInput handle hidden input và autocomplete="one-time-code" rất tốt                      |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Component không tự sinh mảng các slot, user vẫn tự map `<InputOTPSlot />` thủ công.       |
| Form Control Parity             | ✅      | Sizing và focus ring chuẩn xác                                                            |
| Dark Mode Compliance            | ✅      | `dark:bg-input/30` và các invalid states hoạt động tốt                                    |

---

## Input

| Rule/Tiêu chí                   | Verdict | Note                                                              |
| ------------------------------- | ------- | ----------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Sử dụng Base UI Input, native flow và aria attributes passthrough |
| 21. CSS Depth Boundary          | ✅      | Không có deep CSS selectors                                       |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tuân thủ. Là single node component.                     |
| Form Control Parity             | ✅      | Sizing (h-7, h-8, h-9) khớp chính xác với cheatsheet              |
| Dark Mode Compliance            | ✅      | `dark:bg-input/30` và các invalid states có dark variant đầy đủ   |

---

## Item

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Strict Polymorphism (`useRender`) giúp render ra đúng semantic tag cần thiết.             |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Chia tách thành nhiều sub-components, không loop data array nội bộ.                       |
| Form Control Parity             | ✅      | Đã fix `[a]:hover` thành `[&_a]:hover` hoặc xoá bỏ tuỳ context.                           |
| Dark Mode Compliance            | ✅      | Semantic colors hoạt động tốt.                                                            |

---

## Kbd

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Semantic `<kbd>` được áp dụng cho cả leaf và group, 100% chuẩn xác.                       |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Rạch ròi Kbd và KbdGroup.                                                                 |
| Form Control Parity             | ✅      | Design tokens kích thước (`h-5`) đồng bộ tốt.                                             |
| Dark Mode Compliance            | ✅      | CSS theme nesting `dark:in-data-...` rất tinh tế.                                         |

---

## Label

| Rule/Tiêu chí                   | Verdict | Note                                                     |
| ------------------------------- | ------- | -------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Semantic `<label>` nguyên thuỷ. Sẵn sàng nhận `htmlFor`. |
| 21. CSS Depth Boundary          | ✅      | KHÔNG vi phạm. Clean CSS.                                |
| 22. Pure Composition (CRITICAL) | ✅      | Hoàn toàn tuân thủ.                                      |
| Form Control Parity             | ✅      | Kích thước, margin, font-weight match với form controls. |
| Dark Mode Compliance            | ✅      | Kế thừa text color tốt.                                  |

---

## Menubar

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc menubar cực tốt thông qua `@base-ui`.                                            |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Component sử dụng lại cấu trúc của Dropdown Menu, không nhúng array mapping.              |
| Form Control Parity             | ✅      | Kế thừa sizing/padding chuẩn của Menu pattern.                                            |
| Dark Mode Compliance            | ✅      | Semantic colors hoàn chỉnh.                                                               |

---

## Native-select

| Rule/Tiêu chí                   | Verdict | Note                                                                    |
| ------------------------------- | ------- | ----------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Dùng native `<select>` nên toàn bộ ARIA hoàn hảo                        |
| 21. CSS Depth Boundary          | ✅      | Không có deep CSS selectors                                             |
| 22. Pure Composition (CRITICAL) | ✅      | Phân tách `NativeSelect`, `NativeSelectOption`, `NativeSelectOptGroup`. |
| Form Control Parity             | ✅      | Kích thước và focus-visible khớp hoàn toàn với Input                    |
| Dark Mode Compliance            | ✅      | Icon dùng `pointer-events-none`, `dark:bg-input/30` hiển thị tốt        |

---

## Navigation-menu

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | NavigationMenu của `@base-ui` lo liệu ARIA state cực tốt (có `<nav>`, `aria-expanded`).   |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Component không map data list.                                                            |
| Form Control Parity             | ✅      | Animation duration/easing sync tốt thông qua custom properties.                           |
| Dark Mode Compliance            | ✅      | Background và popover colors match với theme.                                             |

---

## Pagination

| Rule/Tiêu chí                   | Verdict | Note                                                                                                 |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Semantic tags `<nav aria-label="pagination">`, `<ul>`, `<li>`. Link support `aria-current="page"`.   |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.            |
| 22. Pure Composition (CRITICAL) | ✅      | Cấu trúc `PaginationItem`, `PaginationLink` cho phép composition hoàn toàn tự do.                    |
| Form Control Parity             | ✅      | Polymorphism `Button` thông qua `render={<a />}` hoàn hảo, kế thừa style/variant từ hệ thống Button. |
| Dark Mode Compliance            | ✅      | Kế thừa từ Button nên tương thích tự động.                                                           |

---

## Popover

| Rule/Tiêu chí                   | Verdict | Note                                                                                    |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Focus NOT Trapped (Non-modal) và Light Dismiss hoạt động chuẩn xác qua Base UI          |
| 21. CSS Depth Boundary          | ✅      | Không có deep CSS selectors                                                             |
| 22. Pure Composition (CRITICAL) | ✅      | Tách rạch ròi Trigger và Content.                                                       |
| Form Control Parity             | ✅      | Animation và transform sử dụng CSS thuần qua data state                                 |
| Dark Mode Compliance            | ✅      | Shadow và border `ring-foreground/10` kết hợp `bg-popover` hoạt động tốt trên dark mode |

---

## Progress

| Rule/Tiêu chí                   | Verdict | Note                                                                                                 |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Component từ `@base-ui` hỗ trợ ARIA đầy đủ (`role="progressbar"`, `aria-valuemax`, `aria-valuenow`). |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Code sạch.                                                                            |
| 22. Pure Composition (CRITICAL) | ✅      | Các sub-components được chia nhỏ hoàn toàn độc lập, giao tiếp qua Context.                           |
| Form Control Parity             | ✅      | Context chia sẻ variant `size` giữa Track, Indicator, Value và Label xuất sắc.                       |
| Dark Mode Compliance            | ✅      | Semantic colors (`bg-muted`, `bg-primary`) tương thích tốt.                                          |

---

## Radio-group

| Rule/Tiêu chí                   | Verdict | Note                                                                          |
| ------------------------------- | ------- | ----------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI xử lý roving tabindex (arrow keys navigation) cực chuẩn               |
| 21. CSS Depth Boundary          | ✅      | Selected indicator được render trực tiếp thông qua CSS/span, không có vi phạm |
| 22. Pure Composition (CRITICAL) | ✅      | Component không map data list. Rạch ròi Group và Item.                        |
| Form Control Parity             | ✅      | Base dimensions và focus rings đồng bộ tốt                                    |
| Dark Mode Compliance            | ✅      | `dark:bg-input/30` và các invalid states có dark variant đầy đủ               |

---

## Resizable

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Wrapper của `react-resizable-panels` chuẩn, có handle được gán đúng role và phím tắt.     |
| 21. CSS Depth Boundary          | ✅      | Selector `[&[aria-orientation=horizontal]>div]` chỉ trỏ tới con trực tiếp, đúng Rule #21. |
| 22. Pure Composition (CRITICAL) | ✅      | Render composition bằng PanelGroup, Panel và Handle riêng biệt.                           |
| Form Control Parity             | ✅      | Kế thừa sizing từ hệ thống.                                                               |
| Dark Mode Compliance            | ✅      | Semantic colors (`bg-border`) chuẩn.                                                      |

---

## Scroll-area

| Rule/Tiêu chí                   | Verdict | Note                                                         |
| ------------------------------- | ------- | ------------------------------------------------------------ |
| W3C APG / ARIA                  | ✅      | Component từ `@base-ui` lo chuyện focus logic trên viewport. |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Code sạch.                                    |
| 22. Pure Composition (CRITICAL) | ✅      | Pure Composition.                                            |
| Form Control Parity             | ✅      | Không vi phạm.                                               |
| Dark Mode Compliance            | ✅      | Semantic colors tốt.                                         |

---

## Select

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                      |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc listbox chuẩn, hỗ trợ type-ahead và arrow keys từ Base UI                                                        |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.                                 |
| 22. Pure Composition (CRITICAL) | ✅      | `MonoSelect` đã được chuyển qua `src/components/monolithic/mono-select.tsx`. Component cốt lõi giữ vững tính composition. |
| Form Control Parity             | ✅      | Trigger sizing (h-7, h-8, h-9) và focus ring hoàn toàn khớp                                                               |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt, dark variants hoạt động đúng                                                                         |

---

## Separator

| Rule/Tiêu chí                   | Verdict | Note                                                        |
| ------------------------------- | ------- | ----------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Được handle bởi `@base-ui` hỗ trợ 100% (role, orientation). |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Code sạch.                                   |
| 22. Pure Composition (CRITICAL) | ✅      | Chỉ là 1 node cơ bản.                                       |
| Form Control Parity             | ✅      | Không áp dụng trực tiếp.                                    |
| Dark Mode Compliance            | ✅      | Màu `bg-border` tự động thích ứng với theme.                |

---

## Sheet

| Rule/Tiêu chí                   | Verdict | Note                                         |
| ------------------------------- | ------- | -------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Kế thừa hoàn hảo từ `Dialog` của `@base-ui`. |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm.                               |
| 22. Pure Composition (CRITICAL) | ✅      | Phân tách hoàn toàn các thành phần.          |
| Form Control Parity             | ✅      | Animation đối xứng tốt.                      |
| Dark Mode Compliance            | ✅      | Semantic colors tốt.                         |

---

## Sidebar

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                   |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cấu trúc rất phức tạp nhưng semantic, hỗ trợ keyboard navigation tốt thông qua custom context và HTML native elements. |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.                              |
| 22. Pure Composition (CRITICAL) | ✅      | Không sử dụng vòng lặp data mapping nào. Dành quyền quyết định render UI cho user.                                     |
| Form Control Parity             | ✅      | Tích hợp tốt với Button, Input, Sheet, Tooltip, Skeleton, Separator.                                                   |
| Dark Mode Compliance            | ✅      | Semantic colors hoàn chỉnh.                                                                                            |

---

## Skeleton

| Rule/Tiêu chí                   | Verdict | Note                                                                          |
| ------------------------------- | ------- | ----------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cung cấp UI thuần túy, ARIA roles/busy nên được thêm ở user land tuỳ context. |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Code sạch.                                                     |
| 22. Pure Composition (CRITICAL) | ✅      | Chỉ là 1 node cơ bản.                                                         |
| Form Control Parity             | ✅      | Không vi phạm.                                                                |
| Dark Mode Compliance            | ✅      | Màu `bg-muted` tự động thích ứng với theme.                                   |

---

## Slider

| Rule/Tiêu chí                   | Verdict | Note                                                                                                    |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Các thuộc tính ARIA (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`) trên thumb đầy đủ               |
| 21. CSS Depth Boundary          | ✅      | Không có deep CSS selectors, thumb được style trực tiếp bằng variant                                    |
| 22. Pure Composition (CRITICAL) | ✅      | Phân mảnh Slider thành Control, Track, Indicator, Thumb (nếu dùng array thumb thì map thủ công ở user). |
| Form Control Parity             | ✅      | Focus ring token khớp chuẩn Form Control                                                                |
| Dark Mode Compliance            | ✅      | Có đầy đủ dark variants cho invalid/focus state                                                         |

---

## Sonner

| Rule/Tiêu chí                   | Verdict | Note                                                                                                                          |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | `sonner` xử lý live region cực tốt (polite/assertive).                                                                        |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Dùng CSS Custom Properties mapping xuất sắc.                                                                   |
| 22. Pure Composition (CRITICAL) | ✅      | Chỉ là 1 node config cơ bản.                                                                                                  |
| Form Control Parity             | ✅      | Không vi phạm.                                                                                                                |
| Dark Mode Compliance            | ✅      | Sử dụng `theme-provider` để sync mode với system/app rất chuẩn, custom palette `popover`, `success`, `error`... rất chi tiết. |

---

## Spinner

| Rule/Tiêu chí                   | Verdict | Note                                                      |
| ------------------------------- | ------- | --------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Cung cấp `role="status"` và `aria-label="Loading"` chuẩn. |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Code sạch.                                 |
| 22. Pure Composition (CRITICAL) | ✅      | Thành phần nguyên thủy, không vi phạm.                    |
| Form Control Parity             | ✅      | Kế thừa sizing `sm`, `md`, `lg`.                          |
| Dark Mode Compliance            | ✅      | Kế thừa text color tự động.                               |

---

## Switch

| Rule/Tiêu chí                   | Verdict | Note                                                                                          |
| ------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Sử dụng `role="switch"` chuẩn, hỗ trợ space toggle qua Base UI                                |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm rule 21                                                                         |
| 22. Pure Composition (CRITICAL) | ✅      | Phân mảnh Switch thành Root và Thumb. Không vi phạm.                                          |
| Form Control Parity             | ✅      | Focus ring bọc track, track height đúng token                                                 |
| Dark Mode Compliance            | ✅      | Màu `dark:data-unchecked:bg-secondary` và `dark:data-checked:bg-primary-foreground` rất tỉ mỉ |

---

## Table

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Semantic `<table/>` chuẩn, hỗ trợ `caption`.                                              |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Pure html tags elements, giao cho user việc lặp data và map.                              |
| Form Control Parity             | ✅      | Kế thừa styling padding hợp lý.                                                           |
| Dark Mode Compliance            | ✅      | Kế thừa các màu semantic tốt (`bg-muted`, v.v.).                                          |

---

## Tabs

| Rule/Tiêu chí                   | Verdict | Note                                                                                                    |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Hỗ trợ full ARIA `role`, `aria-selected` từ `@base-ui`. Keyboard navigation (roving tabindex) hoàn hảo. |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án.               |
| 22. Pure Composition (CRITICAL) | ✅      | Tách biệt Tabs, List, Trigger, Content. Các loop rendering nằm ở phía monolithic.                       |
| Form Control Parity             | ✅      | Kế thừa `ring` states.                                                                                  |
| Dark Mode Compliance            | ✅      | Semantic colors hoàn chỉnh cho variant default/line.                                                    |

---

## Textarea

| Rule/Tiêu chí                   | Verdict | Note                                                                                     |
| ------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Dùng thẻ native `<textarea>`, aria handle đầy đủ                                         |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm rule 21                                                                    |
| 22. Pure Composition (CRITICAL) | ✅      | Chỉ là node `<textarea>`.                                                                |
| Form Control Parity             | ✅      | Dùng CSS `field-sizing-content` cho auto-resize, focus/invalid state đồng nhất với Input |
| Dark Mode Compliance            | ✅      | `dark:bg-input/30` chuẩn xác                                                             |

---

## Theme-provider

| Rule/Tiêu chí                   | Verdict | Note                                                                    |
| ------------------------------- | ------- | ----------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Không có pattern ARIA trực tiếp, nhưng việc không can thiệp DOM là tốt. |
| 21. CSS Depth Boundary          | ✅      | Không vi phạm. Code siêu sạch.                                          |
| 22. Pure Composition (CRITICAL) | ✅      | Context provider nguyên thủy, không vi phạm.                            |
| Form Control Parity             | ✅      | Hỗ trợ ThemeWrapper cho Portals rất tinh tế.                            |
| Dark Mode Compliance            | ✅      | Component chịu trách nhiệm cấp phát CSS variables.                      |

---

## Toggle-group

| Rule/Tiêu chí                   | Verdict | Note                                                                                  |
| ------------------------------- | ------- | ------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI xử lý Toolbar roving tabindex hoàn hảo cho single/multiple modes              |
| 21. CSS Depth Boundary          | ✅      | Kế thừa từ Toggle, bản thân component này không định nghĩa thêm deep selector vi phạm |
| 22. Pure Composition (CRITICAL) | ✅      | Tách rạch ròi Group và Item, giao phó cho user việc loop items.                       |
| Form Control Parity             | ✅      | Group border-radius removal hoạt động tốt (`data-[spacing=0]:first:rounded-l-lg`)     |
| Dark Mode Compliance            | ✅      | Kế thừa từ Toggle, hoạt động tốt                                                      |

---

## Toggle

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | Base UI xử lý `aria-pressed` cực kỳ tốt                                                   |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Phân mảnh nguyên thủy, không vi phạm.                                                     |
| Form Control Parity             | ✅      | Sizing (h-7, h-8, h-9) khớp chính xác, focus vòng ngoài xử lý xuất sắc bằng CSS           |
| Dark Mode Compliance            | ✅      | Semantic tokens tốt, dark variants hoạt động đúng                                         |

---

## Tooltip

| Rule/Tiêu chí                   | Verdict | Note                                                                                      |
| ------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| W3C APG / ARIA                  | ✅      | WCAG 1.4.13 (Dismissable, Hoverable, Persistent) được support chuẩn                       |
| 21. CSS Depth Boundary          | ✅      | Hợp lệ. Cú pháp `[&_svg]` và `[&_[data-slot=...]]` được chấp nhận theo đặc thù của dự án. |
| 22. Pure Composition (CRITICAL) | ✅      | Component không map data list.                                                            |
| Form Control Parity             | ✅      | Animation delay và offset đồng bộ với các overlay khác                                    |
| Dark Mode Compliance            | ✅      | Inverse color (`bg-foreground text-background`) xử lý tooltip rất nổi bật                 |

---
