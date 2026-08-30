# Project Overview

## Mục Tiêu & Chức Năng (Purpose)
**Gladvn** là một bộ công cụ dòng lệnh (CLI) được thiết kế để render (scaffold) trực tiếp các UI Components đẹp mắt, có độ tuỳ biến cao và tuân thủ các chuẩn trợ năng (accessible) vào source code của người dùng.
- Khác với thư viện cài đặt dạng dependency (`npm install gladvn`), Gladvn mang code trực tiếp vào dự án, cho phép lập trình viên toàn quyền kiểm soát và tinh chỉnh giao diện.
- Lấy cảm hứng từ hệ sinh thái `shadcn/ui`, nhưng được tối ưu và thiết kế với kiến trúc hiện đại, phân tầng Macro/Micro.

## Tech Stack (Công Nghệ)
| Phân loại | Công nghệ |
| :--- | :--- |
| **Framework UI** | React 19, DOM >= 18 |
| **Styling** | Tailwind CSS v4 (native, không plugin) |
| **Headless UI Base** | Base UI (`@base-ui/react`), Radix UI (`@radix-ui/react-dialog`) |
| **State Management** | Zustand (hoặc React Hooks như `useControllableState`) |
| **Animations** | `tw-animate-css`, thuần CSS Keyframes |
| **Testing** | Vitest (Unit), Playwright (E2E) |
| **Build & Dev** | Vite, TypeScript, Oxlint (Linter) |

## Kiến Trúc Lưu Trữ (Repository Structure)
Dự án được tổ chức theo dạng **Monolith** (tập trung) dành cho một thư viện độc lập:
- Là một NPM package CLI (đóng gói mã nguồn CLI để chạy lệnh `npx gladvn`).
- Vừa là một môi trường Showcase / Dev cục bộ chạy trên Vite để thử nghiệm components.
- CLI sẽ trích xuất (extract) các component từ thư mục `src/components/` khi được người dùng yêu cầu.

## Quy Chuẩn Kiến Trúc Chính
Hệ thống tuân thủ **22 Điều Răn** (22 Commandments) của dự án, nổi bật nhất là:
1. Phân tầng **Micro** (Dumb/Presentational components) và **Macro** (Preset/Smart components).
2. Tối đa hoá HTML Semantics, xử lý chuẩn ARIA.
3. Sử dụng `data-slot` để định hướng style (Tránh dùng "magic CSS").
4. Thiết lập khóa tương tác (Interaction Lock) ở trạng thái Disabled.
5. Không dùng `var(--)` cho các state có tính tĩnh (static state) trong component, chỉ dùng Tailwind classes tĩnh, hoặc group modifier.
