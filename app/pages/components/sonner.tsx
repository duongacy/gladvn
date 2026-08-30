import { toast } from "sonner";
import { Button } from "@/components/micro/button";
import { Toaster } from "@/components/micro/sonner";
import { useI18n, useDevContext } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
  DocsCode,
} from "~app/components/showcase";
import React from "react";

const mockSave = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "Sonner" }), 1500)
  );

const mockFail = () =>
  new Promise<void>((_, reject) =>
    setTimeout(() => reject(new Error("Server error")), 1500)
  );

function useSonnerExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Loại Toast", "Toast Types"),
        description: t(
          "Năm loại toast cơ bản: default, success, error, warning, info.",
          "Five basic toast types: default, success, error, warning, info."
        ),
        microCode: `import { toast } from "sonner";

// Default
toast("Event created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: { label: "Undo", onClick: () => console.log("Undo") }
});

// Typed variants
toast.success("Successfully saved!");
toast.error("An error occurred.");
toast.warning("Connection is unstable.");
toast.info("Update is available.");`,
        microPreview: (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size={globalSize}
              onClick={() =>
                toast("Event created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Default
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              color="success"
              onClick={() => toast.success("Successfully saved!")}
            >
              Success
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              color="destructive"
              onClick={() => toast.error("An error occurred.")}
            >
              Error
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              color="warning"
              onClick={() => toast.warning("Connection is unstable.")}
            >
              Warning
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              color="info"
              onClick={() => toast.info("Update is available.")}
            >
              Info
            </Button>
          </div>
        ),
      },
      {
        title: t("Mô tả & Action Button", "Description & Action Button"),
        description: t(
          "Toast kèm description phụ và action button — pattern phổ biến cho undo/redo, navigation.",
          "Toast with a secondary description and action button — a common pattern for undo/redo, navigation."
        ),
        microCode: `toast("File deleted", {
  description: "draft-v2.docx has been moved to trash.",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo delete")
  },
  cancel: {
    label: "Dismiss",
    onClick: () => {}
  }
});`,
        microPreview: (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size={globalSize}
              onClick={() =>
                toast("File deleted", {
                  description: "draft-v2.docx has been moved to trash.",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo delete"),
                  },
                  cancel: {
                    label: "Dismiss",
                    onClick: () => {},
                  },
                })
              }
            >
              File Deleted (with Action)
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              onClick={() =>
                toast.success("Profile updated", {
                  description: "Your changes have been saved successfully.",
                })
              }
            >
              Success with Description
            </Button>
          </div>
        ),
      },
      {
        title: t("Promise — Thành công", "Promise — Success"),
        description: t(
          "toast.promise() tự quản lý trạng thái loading → success/error theo kết quả của Promise.",
          "toast.promise() automatically manages loading → success/error states based on the Promise result."
        ),
        microCode: `const saveData = () =>
  new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "Sonner" }), 1500)
  );

toast.promise(saveData(), {
  loading: "Saving...",
  success: (data) => \`Đã lưu \${data.name} thành công!\`,
  error: "Failed to save!"
});`,
        microPreview: (
          <Button
            variant="outline"
            size={globalSize}
            onClick={() =>
              toast.promise(mockSave(), {
                loading: "Saving...",
                success: (data) => `Successfully saved ${data.name}!`,
                error: "Failed to save!",
              })
            }
          >
            Promise (Success)
          </Button>
        ),
      },
      {
        title: t("Promise — Thất bại", "Promise — Error"),
        description: t(
          "Promise bị reject sẽ tự chuyển sang trạng thái error toast.",
          "A rejected Promise will automatically switch to an error toast state."
        ),
        microCode: `const failRequest = () =>
  new Promise<void>((_, reject) =>
    setTimeout(() => reject(new Error("Server error")), 1500)
  );

toast.promise(failRequest(), {
  loading: "Sending request...",
  success: "Request successful!",
  error: "Request failed!"
});`,
        microPreview: (
          <Button
            variant="outline"
            size={globalSize}
            color="destructive"
            onClick={() =>
              toast.promise(mockFail(), {
                loading: "Sending request...",
                success: "Request successful!",
                error: "Request failed!",
              })
            }
          >
            Promise (Error)
          </Button>
        ),
      },
      {
        title: "Loading & Dismiss",
        description: t(
          "toast.loading() tạo toast thủ công, sau đó dùng toast.success/error(id) để cập nhật, hoặc toast.dismiss(id) để huỷ.",
          "toast.loading() manually creates a toast, then use toast.success/error(id) to update, or toast.dismiss(id) to dismiss."
        ),
        microCode: `const toastId = toast.loading("Processing...");

setTimeout(() => {
  toast.success("Done!", { id: toastId });
}, 2000);

toast.dismiss(toastId);`,
        microPreview: (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size={globalSize}
              onClick={() => {
                const id = toast.loading("Processing...");
                setTimeout(() => toast.success("Done!", { id }), 2000);
              }}
            >
              Loading → Success (2s)
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              onClick={() => {
                const id = toast.loading("Loading data...");
                setTimeout(
                  () => toast.error("Connection lost!", { id }),
                  2000
                );
              }}
            >
              Loading → Error (2s)
            </Button>
            <Button
              variant="outline"
              size={globalSize}
              color="destructive"
              onClick={() => toast.dismiss()}
            >
              Dismiss All
            </Button>
          </div>
        ),
      },
      {
        title: "Position",
        description: t(
          "Toaster nhận prop position để xác định vị trí hiển thị — cấu hình một lần ở root layout. Nhấn vào từng vùng để xem toast xuất hiện ở đâu.",
          "Toaster accepts a position prop to determine the display location — configure once at the root layout. Click each area to see where the toast appears."
        ),
        microCode: `<Toaster position="bottom-right" /> 
trí hỗ trợ: 
"bottom-left" | "bottom-center" | "bottom-right"`,
        microPreview: (
          <div className="w-full max-w-sm">
            <p className="mb-3 text-xs text-muted-foreground">
              Click each cell to see the toast appear in the corresponding
              position.
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              <Button
                variant="outline"
                size={globalSize}
                className="text-xs"
                onClick={() =>
                  toast("Toast: top-left", {
                    description: 'position="top-left"',
                    position: "top-left",
                  })
                }
              >
                top-left
              </Button>
              <Button
                variant="outline"
                size={globalSize}
                className="text-xs"
                onClick={() =>
                  toast("Toast: top-center", {
                    description: 'position="top-center"',
                    position: "top-center",
                  })
                }
              >
                top-center
              </Button>
              <Button
                variant="outline"
                size={globalSize}
                className="text-xs"
                onClick={() =>
                  toast("Toast: top-right", {
                    description: 'position="top-right"',
                    position: "top-right",
                  })
                }
              >
                top-right
              </Button>
              <Button
                variant="outline"
                size={globalSize}
                className="text-xs"
                onClick={() =>
                  toast("Toast: bottom-left", {
                    description: 'position="bottom-left"',
                    position: "bottom-left",
                  })
                }
              >
                bottom-left
              </Button>
              <Button
                variant="outline"
                size={globalSize}
                className="text-xs"
                onClick={() =>
                  toast("Toast: bottom-center", {
                    description: 'position="bottom-center"',
                    position: "bottom-center",
                  })
                }
              >
                bottom-center
              </Button>
              <Button
                variant="outline"
                size={globalSize}
                className="text-xs"
                onClick={() =>
                  toast("Toast: bottom-right", {
                    description: 'position="bottom-right"',
                    position: "bottom-right",
                  })
                }
              >
                bottom-right
              </Button>
            </div>
          </div>
        ),
      },
    ],
    [t, globalSize]
  );
}

export default function SonnerShowcase() {
  const t = useI18n();
  const examples = useSonnerExamples();

  return (
    <>
      <Toaster position="bottom-right" />
      <ConfigurableShowcase
        title="Sonner"
        description={t(
          "Hệ thống thông báo toast nhẹ, đẹp, và linh hoạt — tích hợp với design system qua CSS Variables.",
          "Lightweight, beautiful, and flexible toast notification system — integrated with the design system via CSS Variables."
        )}
        guideline={
          <ShowcaseDocs>
            <DocsP>
              {t(
                <>
                  <DocsCode>Toaster</DocsCode> là wrapper của thư viện{" "}
                  <DocsCode>sonner</DocsCode>, được tích hợp với design system
                  qua CSS Variables — màu sắc của toast tự động đồng bộ với theme
                  (light/dark) và các token màu (success, destructive, warning,
                  info).
                </>,
                <>
                  <DocsCode>Toaster</DocsCode> is a wrapper for the{" "}
                  <DocsCode>sonner</DocsCode> library, integrated with the design
                  system via CSS Variables — toast colors automatically sync with
                  the theme (light/dark) and color tokens (success, destructive,
                  warning, info).
                </>
              )}
            </DocsP>
            <DocsP>
              {t(
                <>
                  Đặt <DocsCode>&lt;Toaster /&gt;</DocsCode> một lần duy nhất ở
                  root layout. Sau đó gọi <DocsCode>toast()</DocsCode> từ{" "}
                  <DocsCode>sonner</DocsCode> ở bất cứ đâu trong ứng dụng.{" "}
                  <DocsCode>toast.promise()</DocsCode> rất hữu ích cho async
                  operations — tự quản lý loading → success/error.
                </>,
                <>
                  Place <DocsCode>&lt;Toaster /&gt;</DocsCode> once at the root
                  layout. Then call <DocsCode>toast()</DocsCode> from{" "}
                  <DocsCode>sonner</DocsCode> anywhere in the application.{" "}
                  <DocsCode>toast.promise()</DocsCode> is very useful for async
                  operations — automatically manages loading → success/error.
                </>
              )}
            </DocsP>
          </ShowcaseDocs>
        }
        examples={examples}
      />
    </>
  );
}
