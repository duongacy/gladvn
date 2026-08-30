import React from "react";
import {
  CheckCircle2,
  Info,
  TriangleAlert,
  XCircle,
  X,
} from "lucide-react";

import { AlertPreset } from "@/components/macro/alert-preset";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@/components/micro/alert";
import { Button } from "@/components/micro/button";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function useAlertExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Cảnh báo cơ bản. Với Preset, truyền props trực tiếp thay vì lồng children.",
          "Basic alert. With Preset, pass props directly instead of nesting children."
        ),
        macroCode: `<AlertPreset
  color="info"
  title="New update available"
  description="Version 2.0.4 is ready to download."
  icon={<Info />}
/>`,
        macroPreview: (
          <AlertPreset
            color="info"
            size={globalSize}
            title="New update available"
            description="Version 2.0.4 is ready to download."
            icon={<Info />}
          />
        ),
        microCode: `<Alert className="flex items-start">
  <AlertIcon
    render={<Info />}
    className="mt-0.5 shrink-0"
  />
  <div className="flex-1 space-y-0.5">
    <AlertTitle>Attention!</AlertTitle>
    <AlertDescription>
      You can add components to your project using the CLI.
    </AlertDescription>
  </div>
</Alert>`,
        microPreview: (
          <Alert size={globalSize} className="flex items-start">
            <AlertIcon render={<Info />} className="mt-0.5 shrink-0" />
            <div className="flex-1 space-y-0.5">
              <AlertTitle>Attention!</AlertTitle>
              <AlertDescription>
                You can add components to your project using the CLI.
              </AlertDescription>
            </div>
          </Alert>
        ),
      },
      {
        title: t("Tự Đóng", "Dismissible"),
        description: t(
          "Thêm nút tắt (dismiss) ở góc trên bên phải.",
          "Add a dismiss button in the top right corner."
        ),
        macroCode: `<AlertPreset
  color="warning"
  title="Session expiring soon"
  description="Your session will expire in 5 minutes."
  icon={<TriangleAlert />}
  dismissible
/>`,
        macroPreview: (
          <AlertPreset
            color="warning"
            size={globalSize}
            title="Session expiring soon"
            description="Your session will expire in 5 minutes."
            icon={<TriangleAlert />}
            dismissible
          />
        ),
        microCode: `<Alert color="info" className="flex items-start relative">
  <AlertIcon
    render={<Info />}
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
      <X className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
    </Button>
  </AlertAction>
</Alert>`,
        microPreview: (
          <Alert
            color="info"
            size={globalSize}
            className="flex items-start relative"
          >
            <AlertIcon render={<Info />} className="mt-0.5 shrink-0" />
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
                <X className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
              </Button>
            </AlertAction>
          </Alert>
        ),
      },
      {
        title: t("Màu sắc ngữ nghĩa", "Semantic Colors"),
        description: t(
          "Mỗi màu sắc truyền đạt một mức độ khẩn cấp hoặc ý nghĩa khác nhau.",
          "Each color conveys a different level of urgency or meaning."
        ),
        microCode: `<div className="flex flex-col gap-4 w-full">
  <Alert color="info" className="flex items-start">
    <AlertIcon
      render={<Info />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>New update available</AlertTitle>
      <AlertDescription>
        Version 2.0.4 is ready to download.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="success" className="flex items-start">
    <AlertIcon
      render={<CheckCircle2 />}
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
      render={<TriangleAlert />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Session expiring soon</AlertTitle>
      <AlertDescription>
        Your session will expire in 5 minutes.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="destructive" className="flex items-start">
    <AlertIcon
      render={<XCircle />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Connection failed</AlertTitle>
      <AlertDescription>
        Cannot connect to the database.
      </AlertDescription>
    </div>
  </Alert>
</div>`,
        microPreview: (
          <div className="flex flex-col gap-4 w-full">
            <Alert color="info" size={globalSize} className="flex items-start">
              <AlertIcon render={<Info />} className="mt-0.5 shrink-0" />
              <div className="flex-1 space-y-0.5">
                <AlertTitle>New update available</AlertTitle>
                <AlertDescription>
                  Version 2.0.4 is ready to download.
                </AlertDescription>
              </div>
            </Alert>
            <Alert
              color="success"
              size={globalSize}
              className="flex items-start"
            >
              <AlertIcon
                render={<CheckCircle2 />}
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
                render={<TriangleAlert />}
                className="mt-0.5 shrink-0"
              />
              <div className="flex-1 space-y-0.5">
                <AlertTitle>Session expiring soon</AlertTitle>
                <AlertDescription>
                  Your session will expire in 5 minutes.
                </AlertDescription>
              </div>
            </Alert>
            <Alert
              color="destructive"
              size={globalSize}
              className="flex items-start"
            >
              <AlertIcon render={<XCircle />} className="mt-0.5 shrink-0" />
              <div className="flex-1 space-y-0.5">
                <AlertTitle>Connection failed</AlertTitle>
                <AlertDescription>
                  Cannot connect to the database.
                </AlertDescription>
              </div>
            </Alert>
          </div>
        ),
      },
      {
        title: t("Nội dung phức tạp", "Complex Content"),
        description: t(
          "Có thể chèn nút hành động phụ hoặc thay thế toàn bộ bằng thẻ children.",
          "You can insert secondary action buttons or replace everything with children."
        ),
        macroCode: `<div className="w-full max-w-xl">
  <AlertPreset
    color="success"
    title="Payment successful"
    icon={<CheckCircle2 />}
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
</div>`,
        macroPreview: (
          <div className="w-full max-w-xl">
            <AlertPreset
              color="success"
              size={globalSize}
              title="Payment successful"
              icon={<CheckCircle2 />}
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
        ),
      },
      {
        title: t("Tối giản", "Minimal"),
        description: t(
          "Alert chỉ có nội dung mô tả, không có tiêu đề.",
          "Alert with only description content, without a title."
        ),
        microCode: `<div className="flex flex-col gap-4 w-full">
  <Alert color="info" className="flex items-start">
    <AlertIcon
      render={<Info />}
      className="mt-0.5 shrink-0"
    />
    <AlertDescription className="flex-1">
      You can add components to your project using the CLI.
    </AlertDescription>
  </Alert>
  <Alert color="warning" className="flex items-start">
    <AlertIcon
      render={<TriangleAlert />}
      className="mt-0.5 shrink-0"
    />
    <AlertDescription className="flex-1">
      Your trial will expire in 3 days.
    </AlertDescription>
  </Alert>
</div>`,
        microPreview: (
          <div className="flex flex-col gap-4 w-full">
            <Alert color="info" size={globalSize} className="flex items-start">
              <AlertIcon render={<Info />} className="mt-0.5 shrink-0" />
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
                render={<TriangleAlert />}
                className="mt-0.5 shrink-0"
              />
              <AlertDescription className="flex-1">
                Your trial will expire in 3 days.
              </AlertDescription>
            </Alert>
          </div>
        ),
      },
      {
        title: t("Chỉ có chữ", "Text Only"),
        description: t(
          "Alert đơn giản không có icon — layout tự nhiên.",
          "Simple alert without an icon — natural layout."
        ),
        microCode: `<div className="flex flex-col gap-4 w-full">
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
</div>`,
        microPreview: (
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
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function AlertShowcase() {
  const t = useI18n();
  const examples = useAlertExamples();

  return (
    <ConfigurableShowcase
      title={t("Cảnh báo", "Alert")}
      description={t(
        "Hiển thị một thông báo nổi bật để thu hút sự chú ý của người dùng.",
        "Displays a prominent message to grab the user's attention."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để hiển thị một thông báo quan trọng thu hút sự chú ý của người dùng (ví dụ: lỗi, cảnh báo, hoặc thông báo thành công). Không nên dùng Alert cho các thông báo mang tính tạm thời tự biến mất (hãy dùng Toast/Sonner).",
              "Used to display an important message that grabs the user's attention (e.g. error, warning, or success message). Alert should not be used for temporary self-dismissing notifications (use Toast/Sonner instead)."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
