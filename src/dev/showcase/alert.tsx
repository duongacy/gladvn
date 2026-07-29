import { useState } from "react";

import {
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
  XIcon
} from "lucide-react";

import { AlertPreset } from "../../components/macro/alert-preset";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from "../../components/micro/alert";
import { Button } from "../../components/micro/button";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsLi,
  DocsP,
  DocsUl,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function AlertMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [controlledOpen, setControlledOpen] = useState(true);

  return (
    <div className="space-y-10">
      <ShowcaseExample title="Controlled vs Uncontrolled" code={`<div className="space-y-4 px-2 py-4">
    <DocsUl>
      <DocsLi>
        <b>Uncontrolled (Mặc định):</b> Nếu truyền{" "}
        <DocsCode>dismissible=true</DocsCode>, component tự
        quản lý state để tắt (ẩn) Alert khi click vào nút X.
      </DocsLi>
      <DocsLi>
        <b>Controlled:</b> Có thể kiểm soát state đóng/mở
        thông qua React state và truyền hàm vào{" "}
        <DocsCode>onDismiss</DocsCode>. Tuy nhiên thông
        thường Alert chỉ bị huỷ (unmount), nên nếu bạn kiểm
        soát thì hãy render nó có điều kiện bên ngoài.
      </DocsLi>
    </DocsUl>
  </div>`} preview={
                  <>
          <div className="space-y-4 px-2 py-4">
                    <DocsUl>
                      <DocsLi>
                        <b>Uncontrolled (Mặc định):</b> Nếu truyền{" "}
                        <DocsCode>dismissible=true</DocsCode>, component tự quản lý state
                        để tắt (ẩn) Alert khi click vào nút X.
                      </DocsLi>
                      <DocsLi>
                        <b>Controlled:</b> Có thể kiểm soát state đóng/mở thông qua React
                        state và truyền hàm vào <DocsCode>onDismiss</DocsCode>. Tuy nhiên
                        thông thường Alert chỉ bị huỷ (unmount), nên nếu bạn kiểm soát thì
                        hãy render nó có điều kiện bên ngoài.
                      </DocsLi>
                    </DocsUl>
                  </div>
                  </>
                } />

      <ExampleGrid>
        <ShowcaseExample title="Tiêu chuẩn (Standard)" description="Truyền props trực tiếp thay vì lồng children." code={`<AlertPreset
    color="info"
    title="Có bản cập nhật mới"
    description="Phiên bản 2.0.4 đã sẵn sàng để tải xuống."
    icon={<InfoIcon />}
  />`} preview={
                      <>
              <AlertPreset
                          color="info"
                          size={globalSize}
                          title="Có bản cập nhật mới"
                          description="Phiên bản 2.0.4 đã sẵn sàng để tải xuống."
                          icon={<InfoIcon />}
                        />
                      </>
                    } />

        <ShowcaseExample title="Tự Đóng (Dismissible)" description="Thêm dismissible=true để hiển thị nút [X]. Thử bấm vào nút X bên dưới." code={`<AlertPreset
    color="warning"
    title="Phiên bản sắp hết hạn"
    description="Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút."
    icon={<TriangleAlertIcon />}
    dismissible
  />`} preview={
                      <>
              <AlertPreset
                          color="warning"
                          size={globalSize}
                          title="Phiên bản sắp hết hạn"
                          description="Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút."
                          icon={<TriangleAlertIcon />}
                          dismissible
                        />
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Controlled" description="Quản lý trạng thái đóng mở thông qua state bên ngoài bằng React (Conditional Rendering)." code={`const [controlledOpen, setControlledOpen] = useState(true);
return (
  <>
    <div className="mb-4">
      <Button size="sm" variant="outline" onClick={() => setControlledOpen(true)} disabled={controlledOpen}>
        Mở lại Alert
      </Button>
    </div>
    {controlledOpen && (
      <AlertPreset 
        color="destructive"
        size="${globalSize}"
        title="Bảo trì hệ thống" 
        description="Hệ thống sẽ tạm ngừng hoạt động để bảo trì vào lúc nửa đêm." 
        icon={<TriangleAlertIcon />}
        dismissible
        onDismiss={() => setControlledOpen(false)}
      />
    )}
  </>
);`} preview={
                      <>
              <div className="flex w-full flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">
                              State:{" "}
                              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                                {controlledOpen ? "true" : "false"}
                              </code>
                            </p>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs"
                              onClick={() => setControlledOpen(true)}
                              disabled={controlledOpen}
                            >
                              Mở lại Alert
                            </Button>
                          </div>
                          {controlledOpen && (
                            <AlertPreset
                              color="destructive"
                              size={globalSize}
                              title="Bảo trì hệ thống"
                              description="Hệ thống sẽ tạm ngừng hoạt động để bảo trì vào lúc nửa đêm."
                              icon={<TriangleAlertIcon />}
                              dismissible
                              onDismiss={() => setControlledOpen(false)}
                            />
                          )}
                        </div>
                      </>
                    } />

        <ShowcaseExample title="Nội Dung Phức Tạp (Complex Content)" description="Có thể truyền ReactNode hoặc thay thế toàn bộ bằng thẻ children." code={`<div className="flex w-full flex-col gap-4 max-w-xl">
    <AlertPreset
      color="success"
      title="Thanh toán thành công"
      icon={<CheckCircle2Icon />}
      dismissible
      action={
        <Button
          size="sm"
          variant="outline"
          className="h-7 px-2 text-xs"
        >
          Xem biên lai
        </Button>
      }
    >
      <p className="text-sm mt-1 text-success/90">
        Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.
      </p>
    </AlertPreset>
  </div>`} preview={
                      <>
              <div className="flex w-full flex-col gap-4 max-w-xl">
                          <AlertPreset
                            color="success"
                            size={globalSize}
                            title="Thanh toán thành công"
                            icon={<CheckCircle2Icon />}
                            dismissible
                            action={
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 px-2 text-xs"
                              >
                                Xem biên lai
                              </Button>
                            }
                          >
                            <p className="text-sm mt-1 text-success/90">
                              Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.
                            </p>
                          </AlertPreset>
                        </div>
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function AlertMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      {/* ── Semantic Colors ──────────────────────── */}
      <ShowcaseExample title="Màu Sắc Ngữ Nghĩa (Semantic Colors)" description="Mỗi màu sắc truyền đạt một mức độ khẩn cấp hoặc ý nghĩa khác nhau." code={`<Alert color="info" className="flex items-start">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Có bản cập nhật mới</AlertTitle>
      <AlertDescription>
        Phiên bản 2.0.4 đã sẵn sàng để tải xuống. Hãy cập
        nhật để trải nghiệm tính năng mới.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="success" className="flex items-start">
    <AlertIcon
      render={<CheckCircle2Icon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Đã lưu thành công</AlertTitle>
      <AlertDescription>
        Các thay đổi của bạn đã được đồng bộ lên đám mây.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="warning" className="flex items-start">
    <AlertIcon
      render={<TriangleAlertIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Phiên bản sắp hết hạn</AlertTitle>
      <AlertDescription>
        Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút nữa.
        Vui lòng lưu lại công việc.
      </AlertDescription>
    </div>
  </Alert>

  <Alert color="destructive" className="flex items-start">
    <AlertIcon
      render={<XCircleIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Kết nối thất bại</AlertTitle>
      <AlertDescription>
        Không thể kết nối đến cơ sở dữ liệu. Vui lòng kiểm
        tra lại đường truyền mạng.
      </AlertDescription>
    </div>
  </Alert>`} preview={
                  <>
          <Alert color="info" size={globalSize} className="flex items-start">
                    <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                    <div className="flex-1 space-y-0.5">
                      <AlertTitle>Có bản cập nhật mới</AlertTitle>
                      <AlertDescription>
                        Phiên bản 2.0.4 đã sẵn sàng để tải xuống. Hãy cập nhật để trải
                        nghiệm tính năng mới.
                      </AlertDescription>
                    </div>
                  </Alert><Alert color="success" size={globalSize} className="flex items-start">
                    <AlertIcon
                      render={<CheckCircle2Icon />}
                      className="mt-0.5 shrink-0"
                    />
                    <div className="flex-1 space-y-0.5">
                      <AlertTitle>Đã lưu thành công</AlertTitle>
                      <AlertDescription>
                        Các thay đổi của bạn đã được đồng bộ lên đám mây.
                      </AlertDescription>
                    </div>
                  </Alert><Alert color="warning" size={globalSize} className="flex items-start">
                    <AlertIcon
                      render={<TriangleAlertIcon />}
                      className="mt-0.5 shrink-0"
                    />
                    <div className="flex-1 space-y-0.5">
                      <AlertTitle>Phiên bản sắp hết hạn</AlertTitle>
                      <AlertDescription>
                        Phiên đăng nhập của bạn sẽ hết hạn trong 5 phút nữa. Vui lòng lưu
                        lại công việc.
                      </AlertDescription>
                    </div>
                  </Alert><Alert
                    color="destructive"
                    size={globalSize}
                    className="flex items-start"
                  >
                    <AlertIcon render={<XCircleIcon />} className="mt-0.5 shrink-0" />
                    <div className="flex-1 space-y-0.5">
                      <AlertTitle>Kết nối thất bại</AlertTitle>
                      <AlertDescription>
                        Không thể kết nối đến cơ sở dữ liệu. Vui lòng kiểm tra lại đường
                        truyền mạng.
                      </AlertDescription>
                    </div>
                  </Alert>
                  </>
                } />

      <ExampleGrid>
        {/* ── Default (no color) ───────────────────── */}
        <ShowcaseExample title="Cơ bản (Basic)" description="Hiển thị Alert với màu sắc mặc định (info)." code={`<Alert className="flex items-start">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5">
      <AlertTitle>Chú ý!</AlertTitle>
      <AlertDescription>
        Bạn có thể thêm các component vào dự án bằng cách sử
        dụng CLI.
      </AlertDescription>
    </div>
  </Alert>`} preview={
                      <>
              <Alert size={globalSize} className="flex items-start">
                          <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                          <div className="flex-1 space-y-0.5">
                            <AlertTitle>Chú ý!</AlertTitle>
                            <AlertDescription>
                              Bạn có thể thêm các component vào dự án bằng cách sử dụng CLI.
                            </AlertDescription>
                          </div>
                        </Alert>
                      </>
                    } />

        {/* ── With Action ───────────────────── */}
        <ShowcaseExample title="Có Nút Hành Động (With Action)" description="Alert kèm theo một nút tắt (dismiss) được đặt ở góc trên bên phải." code={`<Alert color="info" className="flex items-start relative">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <div className="flex-1 space-y-0.5 pr-8">
      <AlertTitle>Tính năng mới</AlertTitle>
      <AlertDescription>
        Hãy khám phá trang thống kê dashboard hoàn toàn mới
        của chúng tôi.
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
  </Alert>`} preview={
                      <>
              <Alert
                          color="info"
                          size={globalSize}
                          className="flex items-start relative"
                        >
                          <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                          <div className="flex-1 space-y-0.5 pr-8">
                            <AlertTitle>Tính năng mới</AlertTitle>
                            <AlertDescription>
                              Hãy khám phá trang thống kê dashboard hoàn toàn mới của chúng
                              tôi.
                            </AlertDescription>
                          </div>
                          <AlertAction className="absolute right-1 top-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="size-6 p-0 group-data-[size=sm]/alert:size-5 group-data-[size=lg]/alert:size-7"
                              iconOnly
                            >
                              <XIcon className="size-3.5 group-data-[size=sm]/alert:size-3 group-data-[size=lg]/alert:size-4" />
                            </Button>
                          </AlertAction>
                        </Alert>
                      </>
                    } />
      </ExampleGrid>

      {/* ── Minimal (no title) ───────────────────── */}
      <ShowcaseExample title="Tối Giản (Minimal)" description="Alert chỉ có nội dung mô tả, không có tiêu đề." code={`<Alert color="info" className="flex items-start">
    <AlertIcon
      render={<InfoIcon />}
      className="mt-0.5 shrink-0"
    />
    <AlertDescription className="flex-1">
      Bạn có thể thêm các component vào dự án bằng cách sử
      dụng CLI.
    </AlertDescription>
  </Alert>
  <Alert color="warning" className="flex items-start">
    <AlertIcon
      render={<TriangleAlertIcon />}
      className="mt-0.5 shrink-0"
    />
    <AlertDescription className="flex-1">
      Bản dùng thử của bạn sẽ hết hạn trong 3 ngày nữa.
    </AlertDescription>
  </Alert>`} preview={
                  <>
          <Alert color="info" size={globalSize} className="flex items-start">
                    <AlertIcon render={<InfoIcon />} className="mt-0.5 shrink-0" />
                    <AlertDescription className="flex-1">
                      Bạn có thể thêm các component vào dự án bằng cách sử dụng CLI.
                    </AlertDescription>
                  </Alert><Alert color="warning" size={globalSize} className="flex items-start">
                    <AlertIcon
                      render={<TriangleAlertIcon />}
                      className="mt-0.5 shrink-0"
                    />
                    <AlertDescription className="flex-1">
                      Bản dùng thử của bạn sẽ hết hạn trong 3 ngày nữa.
                    </AlertDescription>
                  </Alert>
                  </>
                } />

      {/* ── Text Only (no icon) ───────────────────── */}
      <ShowcaseExample title="Chỉ Có Chữ (Text Only)" description="Alert đơn giản không có icon — layout tự nhiên." code={`<Alert color="success" className="flex flex-col gap-0.5">
    <AlertTitle>Thanh toán thành công</AlertTitle>
    <AlertDescription>
      Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.
    </AlertDescription>
  </Alert>
  <Alert
    color="destructive"
    className="flex flex-col gap-0.5"
  >
    <AlertTitle>Tài khoản bị khoá</AlertTitle>
    <AlertDescription>
      Vui lòng liên hệ với bộ phận hỗ trợ để mở khoá tài
      khoản.
    </AlertDescription>
  </Alert>`} preview={
                  <>
          <Alert
                    color="success"
                    size={globalSize}
                    className="flex flex-col gap-0.5"
                  >
                    <AlertTitle>Thanh toán thành công</AlertTitle>
                    <AlertDescription>
                      Hoá đơn #1234 của bạn đã được thanh toán hoàn tất.
                    </AlertDescription>
                  </Alert><Alert
                    color="destructive"
                    size={globalSize}
                    className="flex flex-col gap-0.5"
                  >
                    <AlertTitle>Tài khoản bị khoá</AlertTitle>
                    <AlertDescription>
                      Vui lòng liên hệ với bộ phận hỗ trợ để mở khoá tài khoản.
                    </AlertDescription>
                  </Alert>
                  </>
                } />

      {/* ── Use Case Comparison ─────────────────────── */}
      <ShowcaseExample title="🧭 So sánh Use Case" description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <CheckCircle2Icon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Thông báo chuẩn, cho phép tự đóng
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Phần lớn các cảnh báo trong ứng dụng đều đi kèm
        Icon, Tiêu đề, Nội dung, và nút X để tự tắt
        (Dismiss). Dùng Macro sẽ tiết kiệm cực kỳ nhiều
        code.
      </p>

      <div className="rounded-lg bg-muted/50 p-3">
        <AlertPreset
          color="info"
          size="sm"
          title="Có bản cập nhật mới"
          description="Phiên bản 2.0.4 đã sẵn sàng để tải xuống."
          icon={<InfoIcon />}
          dismissible
        />
      </div>

      <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
        <p className="text-xs font-medium text-green-700 dark:text-green-400">
          ✅ Dùng{" "}
          <code className="font-mono">AlertPreset</code> —
          Prop{" "}
          <code className="font-mono">dismissible</code> tự
          động xử lý state tắt Alert.
        </p>
      </div>
    </div>

    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <CheckCircle2Icon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Giao diện Alert không theo chuẩn
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Khi bạn cần tạo một Alert với layout đặc biệt, ví dụ
        như không có icon, hoặc muốn chèn form vào giữa.
        Macro sẽ bị hạn chế vì đã chốt sẵn layout Flexbox
        ngang.
      </p>

      <div className="rounded-lg bg-muted/50 p-3">
        <Alert
          color="warning"
          size="sm"
          className="flex flex-col gap-0.5"
        >
          <AlertTitle>Bản dùng thử hết hạn</AlertTitle>
          <AlertDescription>
            Chỉ còn 3 ngày nữa. Vui lòng thanh toán!
          </AlertDescription>
          <Button
            variant="soft"
            color="warning"
            size="sm"
            className="mt-2 w-fit"
          >
            Nâng Cấp Ngay
          </Button>
        </Alert>
      </div>

      <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
        <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
          ✅ Dùng <code className="font-mono">Alert</code>{" "}
          (Micro) — Bạn tự viết class{" "}
          <code className="font-mono">flex-col</code>, tự
          chèn nội dung thoải mái.
        </p>
      </div>
    </div>
  </div>`} preview={
                  <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* ── Story 1: Macro wins ── */}
                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                          <CheckCircle2Icon className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Story 1 · Dùng Macro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Thông báo chuẩn, cho phép tự đóng
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Phần lớn các cảnh báo trong ứng dụng đều đi kèm Icon, Tiêu đề, Nội
                        dung, và nút X để tự tắt (Dismiss). Dùng Macro sẽ tiết kiệm cực kỳ
                        nhiều code.
                      </p>

                      <div className="rounded-lg bg-muted/50 p-3">
                        <AlertPreset
                          color="info"
                          size="sm"
                          title="Có bản cập nhật mới"
                          description="Phiên bản 2.0.4 đã sẵn sàng để tải xuống."
                          icon={<InfoIcon />}
                          dismissible
                        />
                      </div>

                      <div className="rounded-md border border-green-500/20 bg-green-500/5 px-3 py-2">
                        <p className="text-xs font-medium text-green-700 dark:text-green-400">
                          ✅ Dùng <code className="font-mono">AlertPreset</code> — Prop{" "}
                          <code className="font-mono">dismissible</code> tự động xử lý
                          state tắt Alert.
                        </p>
                      </div>
                    </div>

                    {/* ── Story 2: Micro wins ── */}
                    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                          <CheckCircle2Icon className="size-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Story 2 · Dùng Micro
                          </p>
                          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                            Giao diện Alert không theo chuẩn
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Khi bạn cần tạo một Alert với layout đặc biệt, ví dụ như không có
                        icon, hoặc muốn chèn form vào giữa. Macro sẽ bị hạn chế vì đã chốt
                        sẵn layout Flexbox ngang.
                      </p>

                      <div className="rounded-lg bg-muted/50 p-3">
                        <Alert
                          color="warning"
                          size="sm"
                          className="flex flex-col gap-0.5"
                        >
                          <AlertTitle>Bản dùng thử hết hạn</AlertTitle>
                          <AlertDescription>
                            Chỉ còn 3 ngày nữa. Vui lòng thanh toán!
                          </AlertDescription>
                          <Button
                            variant="soft"
                            color="warning"
                            size="sm"
                            className="mt-2 w-fit"
                          >
                            Nâng Cấp Ngay
                          </Button>
                        </Alert>
                      </div>

                      <div className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-2">
                        <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                          ✅ Dùng <code className="font-mono">Alert</code> (Micro) — Bạn
                          tự viết class <code className="font-mono">flex-col</code>, tự
                          chèn nội dung thoải mái.
                        </p>
                      </div>
                    </div>
                  </div>
                  </>
                } />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function AlertShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Alert"
      description="Hiển thị một thông báo nổi bật để thu hút sự chú ý của người dùng."
      guideline={
        <ShowcaseDocs>
          <DocsP>
            Dùng để hiển thị một thông báo quan trọng thu hút sự chú ý của người
            dùng (ví dụ: lỗi, cảnh báo, hoặc thông báo thành công). Không nên
            dùng Alert cho các thông báo mang tính tạm thời tự biến mất (hãy
            dùng Toast/Sonner).
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AlertMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <AlertMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
