import { useState } from "react";

import {
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";

import { AlertPreset } from "../../components/macro/alert-preset";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "../../components/micro/alert";
import { Button } from "../../components/micro/button";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsLi,
  DocsP,
  DocsUl,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function AlertMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Tiêu chuẩn", "Standard")}
          description={t(
            "Truyền props trực tiếp thay vì lồng children.",
            "Pass props directly instead of nesting children.",
          )}
          code={`<AlertPreset
    color="info"
    title="New update available"
    description="Version 2.0.4 is ready to download."
    icon={<InfoIcon />}
  />`}
          preview={
            <>
              <AlertPreset
                color="info"
                size={globalSize}
                title="New update available"
                description="Version 2.0.4 is ready to download."
                icon={<InfoIcon />}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Tự Đóng", "Dismissible")}
          description={t(
            "Thêm dismissible=true để hiển thị nút [X].",
            "Add dismissible=true to show the [X] button.",
          )}
          code={`<AlertPreset
    color="warning"
    title="Session expiring soon"
    description="Your session will expire in 5 minutes."
    icon={<TriangleAlertIcon />}
    dismissible
  />`}
          preview={
            <>
              <AlertPreset
                color="warning"
                size={globalSize}
                title="Session expiring soon"
                description="Your session will expire in 5 minutes."
                icon={<TriangleAlertIcon />}
                dismissible
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Nội dung phức tạp", "Complex Content")}
          description={t(
            "Có thể truyền ReactNode hoặc thay thế toàn bộ bằng thẻ children.",
            "You can pass a ReactNode or replace everything with children.",
          )}
          code={`<div className="flex w-full flex-col gap-4 max-w-xl">
    <AlertPreset
      color="success"
      title="Payment successful"
      icon={<CheckCircle2Icon />}
      dismissible
      action={
        <Button
          size="sm"
          variant="outline"
          className="h-7 px-2 text-xs"
        >
          View receipt
        </Button>
      }
    >
      <p className="text-sm mt-1 text-success/90">
        Your invoice #1234 has been fully paid.
      </p>
    </AlertPreset>
  </div>`}
          preview={
            <>
              <div className="flex w-full flex-col gap-4 max-w-xl">
                <AlertPreset
                  color="success"
                  size={globalSize}
                  title="Payment successful"
                  icon={<CheckCircle2Icon />}
                  dismissible
                  action={
                    <Button
                      size={globalSize}
                      variant="outline"
                      className="h-7 px-2 text-xs"
                    >
                      View receipt
                    </Button>
                  }
                >
                  <p className="text-sm mt-1 text-success/90">
                    Your invoice #1234 has been fully paid.
                  </p>
                </AlertPreset>
              </div>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function AlertMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      {/* ── Semantic Colors ──────────────────────── */}
      <ShowcaseExample
        title={t("Màu sắc ngữ nghĩa", "Semantic Colors")}
        description={t(
          "Mỗi màu sắc truyền đạt một mức độ khẩn cấp hoặc ý nghĩa khác nhau.",
          "Each color conveys a different level of urgency or meaning.",
        )}
        code={`<div className="flex flex-col gap-4 w-full">
  <Alert color="info" className="flex items-start">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>New update available</AlertTitle>
      <AlertDescription>
        Version 2.0.4 is ready to download. Please update to experience new features.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="success" className="flex items-start">
    <AlertIcon
      render={<CheckCircle2Icon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Saved successfully</AlertTitle>
      <AlertDescription>
        Your changes have been synced to the cloud.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="warning" className="flex items-start">
    <AlertIcon
      render={<TriangleAlertIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Session expiring soon</AlertTitle>
      <AlertDescription>
        Your session will expire in 5 minutes.
        Please save your work.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="destructive" className="flex items-start">
    <AlertIcon
      render={<XCircleIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Connection failed</AlertTitle>
      <AlertDescription>
        Cannot connect to the database. Please check your network connection.
      </AlertDescription>
    </div>
  </Alert>
</div>`}
        preview={
          <>
            <div className="flex flex-col gap-4 w-full">
              <Alert color="info" size={globalSize} className="flex items-start">
                <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                <div className="flex-1 space-y-0.5">
                  <AlertTitle>New update available</AlertTitle>
                  <AlertDescription>
                    Version 2.0.4 is ready to download. Please update to
                    experience new features.
                  </AlertDescription>
                </div>
              </Alert>
              <Alert
                color="success"
                size={globalSize}
                className="flex items-start"
              >
                <AlertIcon
                  render={<CheckCircle2Icon />}
                  className="mt-0.5 shrink-0"
                />
                <div className="flex-1 space-y-0.5">
                  <AlertTitle>Saved successfully</AlertTitle>
                  <AlertDescription>
                    Your changes have been synced to the cloud.
                  </AlertDescription>
                </div>
              </Alert>
              <Alert
                color="warning"
                size={globalSize}
                className="flex items-start"
              >
                <AlertIcon
                  render={<TriangleAlertIcon />}
                  className="mt-0.5 shrink-0"
                />
                <div className="flex-1 space-y-0.5">
                  <AlertTitle>Session expiring soon</AlertTitle>
                  <AlertDescription>
                    Your session will expire in 5 minutes. Please save your work.
                  </AlertDescription>
                </div>
              </Alert>
              <Alert
                color="destructive"
                size={globalSize}
                className="flex items-start"
              >
                <AlertIcon render={<XCircleIcon />} className="mt-0.5 shrink-0" />
                <div className="flex-1 space-y-0.5">
                  <AlertTitle>Connection failed</AlertTitle>
                  <AlertDescription>
                    Cannot connect to the database. Please check your network
                    connection.
                  </AlertDescription>
                </div>
              </Alert>
            </div>
          </>
        }
      />

      <ExampleGrid>
        {/* ── Default (no color) ───────────────────── */}
        <ShowcaseExample
          title={t("Cơ bản", "Basic")}
          description={t(
            "Hiển thị Alert với màu sắc mặc định (info).",
            "Displays Alert with the default color (info).",
          )}
          code={`<Alert className="flex items-start">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Attention!</AlertTitle>
      <AlertDescription>
        You can add components to your project using the CLI.
      </AlertDescription>
    </div>
  </Alert>`}
          preview={
            <>
              <Alert size={globalSize} className="flex items-start">
                <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                <div className="flex-1 space-y-0.5">
                  <AlertTitle>Attention!</AlertTitle>
                  <AlertDescription>
                    You can add components to your project using the CLI.
                  </AlertDescription>
                </div>
              </Alert>
            </>
          }
        />

        {/* ── With Action ───────────────────── */}
        <ShowcaseExample
          title={t("Có nút hành động", "With Action")}
          description={t(
            "Alert kèm theo một nút tắt (dismiss) được đặt ở góc trên bên phải.",
            "Alert accompanied by a dismiss button placed in the top right corner.",
          )}
          code={`<Alert color="info" className="flex items-start relative">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5 pr-8">
      <AlertTitle>New feature</AlertTitle>
      <AlertDescription>
        Explore our brand new dashboard statistics page.
      </AlertDescription>
    </div>
    <AlertAction className="absolute right-1 top-1">
      <Button
        variant="ghost"
        size="sm"
        className="size-6 p-0 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7"
      >
        <XIcon className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
      </Button>
    </AlertAction>
  </Alert>`}
          preview={
            <>
              <Alert
                color="info"
                size={globalSize}
                className="flex items-start relative"
              >
                <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                <div className="flex-1 space-y-0.5 pr-8">
                  <AlertTitle>New feature</AlertTitle>
                  <AlertDescription>
                    Explore our brand new dashboard statistics page.
                  </AlertDescription>
                </div>
                <AlertAction className="absolute right-1 top-1">
                  <Button
                    variant="ghost"
                    size={globalSize}
                    className="size-6 p-0 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7"
                    iconOnly
                  >
                    <XIcon className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
                  </Button>
                </AlertAction>
              </Alert>
            </>
          }
        />
      </ExampleGrid>

      {/* ── Minimal (no title) ───────────────────── */}
      <ShowcaseExample
        title={t("Tối giản", "Minimal")}
        description={t(
          "Alert chỉ có nội dung mô tả, không có tiêu đề.",
          "Alert with only description content, without a title.",
        )}
        code={`<div className="flex flex-col gap-4 w-full">
  <Alert color="info" className="flex items-start">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <AlertDescription className="flex-1">
      You can add components to your project using the CLI.
    </AlertDescription>
  </Alert>
  <Alert color="warning" className="flex items-start">
    <AlertIcon
      render={<TriangleAlertIcon />}
      className="mt-0.5 shrink-0"
    />
    <AlertDescription className="flex-1">
      Your trial will expire in 3 days.
    </AlertDescription>
  </Alert>
</div>`}
        preview={
          <>
            <div className="flex flex-col gap-4 w-full">
              <Alert color="info" size={globalSize} className="flex items-start">
                <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                <AlertDescription className="flex-1">
                  You can add components to your project using the CLI.
                </AlertDescription>
              </Alert>
              <Alert
                color="warning"
                size={globalSize}
                className="flex items-start"
              >
                <AlertIcon
                  render={<TriangleAlertIcon />}
                  className="mt-0.5 shrink-0"
                />
                <AlertDescription className="flex-1">
                  Your trial will expire in 3 days.
                </AlertDescription>
              </Alert>
            </div>
          </>
        }
      />

      {/* ── Text Only (no icon) ───────────────────── */}
      <ShowcaseExample
        title={t("Chỉ có chữ", "Text Only")}
        description={t(
          "Alert đơn giản không có icon — layout tự nhiên.",
          "Simple alert without an icon — natural layout.",
        )}
        code={`<div className="flex flex-col gap-4 w-full">
  <Alert color="success" className="flex flex-col gap-0.5">
    <AlertTitle>Payment successful</AlertTitle>
    <AlertDescription>
      Your invoice #1234 has been fully paid.
    </AlertDescription>
  </Alert>
  <Alert
    color="destructive"
    className="flex flex-col gap-0.5"
  >
    <AlertTitle>Account locked</AlertTitle>
    <AlertDescription>
      Please contact support to unlock your account.
    </AlertDescription>
  </Alert>
</div>`}
        preview={
          <>
            <div className="flex flex-col gap-4 w-full">
              <Alert
                color="success"
                size={globalSize}
                className="flex flex-col gap-0.5"
              >
                <AlertTitle>Payment successful</AlertTitle>
                <AlertDescription>
                  Your invoice #1234 has been fully paid.
                </AlertDescription>
              </Alert>
              <Alert
                color="destructive"
                size={globalSize}
                className="flex flex-col gap-0.5"
              >
                <AlertTitle>Account locked</AlertTitle>
                <AlertDescription>
                  Please contact support to unlock your account.
                </AlertDescription>
              </Alert>
            </div>
          </>
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function AlertShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title={t("Cảnh báo", "Alert")}
      description={t(
        "Hiển thị một thông báo nổi bật để thu hút sự chú ý của người dùng.",
        "Displays a prominent message to grab the user's attention.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị một thông báo quan trọng thu hút sự chú ý của người dùng (ví dụ: lỗi, cảnh báo, hoặc thông báo thành công). Không nên dùng Alert cho các thông báo mang tính tạm thời tự biến mất (hãy dùng Toast/Sonner).",
              "Used to display an important message that grabs the user's attention (e.g. error, warning, or success message). Alert should not be used for temporary self-dismissing notifications (use Toast/Sonner instead).",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AlertMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <AlertMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
