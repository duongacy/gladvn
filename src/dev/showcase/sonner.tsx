import { toast } from "sonner";

import { Button } from "../../components/micro/button";
import { Toaster } from "../../components/micro/sonner";
import {
  DocsCode,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs } from "../../dev/components/showcase";

// Simulated async operation for Promise demo
const mockSave = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "Sonner" }), 1500),
  );

const mockFail = () =>
  new Promise<void>((_, reject) =>
    setTimeout(() => reject(new Error("Server error")), 1500),
  );

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function SonnerMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      {/* Toaster phải mount ở đây để toast() hoạt động trong showcase */}
      <Toaster position="bottom-right" />
      {/* ── Toast Types ── */}
      <ExampleSection
        label="Loại Toast"
        description="Năm loại toast cơ bản: default, success, error, warning, info."
        codeString={`import { toast } from "sonner";

// Default
toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: { label: "Undo", onClick: () => console.log("Undo") } });

// Typed variants
toast.success("Successfully saved!");
toast.error("An error occurred.");
toast.warning("Connection is unstable.");
toast.info("Update is available.");`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: { label: "Undo", onClick: () => console.log("Undo") } })
            }
          >
            Default
          </Button>
          <Button
            variant="outline"
            color="success"
            onClick={() => toast.success("Successfully saved!")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            color="destructive"
            onClick={() => toast.error("An error occurred.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            color="warning"
            onClick={() => toast.warning("Connection is unstable.")}
          >
            Warning
          </Button>
          <Button
            variant="outline"
            color="info"
            onClick={() => toast.info("Update is available.")}
          >
            Info
          </Button>
        </div>
      </ExampleSection>

      {/* ── Mô tả & Action ── */}
      <ExampleSection
        label="Mô tả & Action Button"
        description="Toast kèm description phụ và action button — pattern phổ biến cho undo/redo, navigation."
        codeString={`toast("File deleted", {
  description: "draft-v2.docx has been moved to trash.",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo delete") },
  cancel: {
    label: "Dismiss",
    onClick: () => {} } });`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() =>
              toast("File deleted", {
                description: "draft-v2.docx has been moved to trash.",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo delete") },
                cancel: {
                  label: "Dismiss",
                  onClick: () => {} } })
            }
          >
            File Deleted (with Action)
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Profile updated", {
                description: "Your changes have been saved successfully." })
            }
          >
            Success with Description
          </Button>
        </div>
      </ExampleSection>

      {/* ── Promise ── */}
      <ExampleGrid>
        <ExampleSection
          label="Promise — Thành công"
          description="toast.promise() tự quản lý trạng thái loading → success/error theo kết quả của Promise."
          codeString={`const saveData = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "Sonner" }), 1500),
  );

toast.promise(saveData(), {
  loading: "Đang lưu...",
  success: (data) => \`Đã lưu \${data.name} thành công!\`,
  error: "Lưu thất bại!" });`}
        >
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(mockSave(), {
                loading: "Đang lưu...",
                success: (data) => `Đã lưu ${data.name} thành công!`,
                error: "Lưu thất bại!" })
            }
          >
            Promise (Success)
          </Button>
        </ExampleSection>

        <ExampleSection
          label="Promise — Thất bại"
          description="Promise bị reject sẽ tự chuyển sang trạng thái error toast."
          codeString={`const failRequest = () =>
  new Promise<void>((_, reject) =>
    setTimeout(() => reject(new Error("Server error")), 1500),
  );

toast.promise(failRequest(), {
  loading: "Đang gửi yêu cầu...",
  success: "Yêu cầu thành công!",
  error: "Yêu cầu thất bại!" });`}
        >
          <Button
            variant="outline"
            color="destructive"
            onClick={() =>
              toast.promise(mockFail(), {
                loading: "Đang gửi yêu cầu...",
                success: "Yêu cầu thành công!",
                error: "Yêu cầu thất bại!" })
            }
          >
            Promise (Error)
          </Button>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Loading & Dismiss ── */}
      <ExampleSection
        label="Loading & Dismiss"
        description="toast.loading() tạo toast thủ công, sau đó dùng toast.success/error(id) để cập nhật, hoặc toast.dismiss(id) để huỷ."
        codeString={`// Tạo loading toast và giữ id
const toastId = toast.loading("Đang xử lý...");

// Sau khi async xong — cập nhật cùng toast
setTimeout(() => {
  toast.success("Hoàn tất!", { id: toastId });
}, 2000);

// Hoặc huỷ thủ công
toast.dismiss(toastId);`}
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Đang xử lý...");
              setTimeout(() => toast.success("Hoàn tất!", { id }), 2000);
            }}
          >
            Loading → Success (2s)
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Đang tải dữ liệu...");
              setTimeout(() => toast.error("Mất kết nối!", { id }), 2000);
            }}
          >
            Loading → Error (2s)
          </Button>
          <Button
            variant="outline"
            color="destructive"
            onClick={() => toast.dismiss()}
          >
            Dismiss All
          </Button>
        </div>
      </ExampleSection>

      {/* ── Position ── */}
      <ExampleSection
        label="Position"
        description="Toaster nhận prop position để xác định vị trí hiển thị — cấu hình một lần ở root layout. Nhấn vào từng vùng để xem toast xuất hiện ở đâu."
        codeString={`// Trong root layout (app/layout.tsx):
  <Toaster position="bottom-right" /> // mặc định // Các vị
  trí hỗ trợ: // "top-left" | "top-center" | "top-right" //
  "bottom-left" | "bottom-center" | "bottom-right"`}
      >
        {/* Visual 3×2 position grid */}
        <div className="w-full max-w-sm">
          <p className="mb-3 text-xs text-muted-foreground">
            Nhấn từng ô để xem toast xuất hiện đúng vị trí tương ứng.
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() =>
                toast("Toast: top-left", {
                  description: 'position="top-left"',
                  position: "top-left" })
              }
            >
              top-left
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() =>
                toast("Toast: top-center", {
                  description: 'position="top-center"',
                  position: "top-center" })
              }
            >
              top-center
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() =>
                toast("Toast: top-right", {
                  description: 'position="top-right"',
                  position: "top-right" })
              }
            >
              top-right
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() =>
                toast("Toast: bottom-left", {
                  description: 'position="bottom-left"',
                  position: "bottom-left" })
              }
            >
              bottom-left
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() =>
                toast("Toast: bottom-center", {
                  description: 'position="bottom-center"',
                  position: "bottom-center" })
              }
            >
              bottom-center
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() =>
                toast("Toast: bottom-right", {
                  description: 'position="bottom-right"',
                  position: "bottom-right" })
              }
            >
              bottom-right
            </Button>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function SonnerShowcase() {
  return (
    <Showcase
      title="Sonner"
      description="Hệ thống thông báo toast nhẹ, đẹp, và linh hoạt — tích hợp với design system qua CSS Variables."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            <DocsCode>Toaster</DocsCode> là wrapper của thư viện{" "}
            <DocsCode>sonner</DocsCode>, được tích hợp với design system qua CSS
            Variables — màu sắc của toast tự động đồng bộ với theme (light/dark)
            và các token màu (success, destructive, warning, info).
          </DocsP>
          <DocsP>
            Đặt <DocsCode>&lt;Toaster /&gt;</DocsCode> một lần duy nhất ở root
            layout. Sau đó gọi <DocsCode>toast()</DocsCode> từ{" "}
            <DocsCode>sonner</DocsCode> ở bất cứ đâu trong ứng dụng.{" "}
            <DocsCode>toast.promise()</DocsCode> rất hữu ích cho async
            operations — tự quản lý loading → success/error.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[{ label: "Micro (Primitive)", content: <SonnerMicroShowcase /> }]}
    />
  );
}
