import { useState } from "react";

import {
  InfoIcon,
  LogOutIcon,
  MailWarningIcon,
  MessageSquareWarningIcon,
  ShieldAlertIcon,
  TrashIcon,
  XIcon
} from "lucide-react";

import { AlertDialogPreset } from "../../components/macro/alert-dialog-preset";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,

  AlertDialogTitle,
  AlertDialogTrigger
} from "../../components/micro/alert-dialog";
import { Button } from "../../components/micro/button";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function AlertDialogMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Hành Động Nguy Danger (Destructive)"
          description="Sử dụng actionColor='destructive' để tạo nút hành động nguy hiểm."
          codeString={`<AlertDialogPreset
    trigger={
      <Button variant="outline" color="destructive">
        Xoá Tài Khoản
      </Button>
    }
    title="Bạn có chắc chắn muốn xoá?"
    description="Hành động này không thể hoàn tác. Tài khoản và toàn bộ dữ liệu của bạn trên hệ thống sẽ bị xoá vĩnh viễn."
    cancelLabel="Huỷ"
    actionLabel="Xoá"
    actionColor="destructive"
    onAction={() => console.log("Đã xoá!")}
  />`}
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={
              <Button variant="outline" color="destructive" size={globalSize}>
                Xoá Tài Khoản
              </Button>
            }
            title="Bạn có chắc chắn muốn xoá?"
            description="Hành động này không thể hoàn tác. Tài khoản và toàn bộ dữ liệu của bạn trên hệ thống sẽ bị xoá vĩnh viễn."
            cancelLabel="Huỷ"
            actionLabel="Xoá"
            actionColor="destructive"
            onAction={() => console.log("Đã xoá!")}
          />
        </ExampleSection>

        <ExampleSection
          label="Xác Nhận Tiêu Chuẩn"
          description="Dialog xác nhận thông thường chỉ với Text."
          codeString={`<AlertDialogPreset
    trigger={<Button variant="outline">Đăng Xuất</Button>}
    title="Đăng xuất khỏi tài khoản?"
    description="Bạn sẽ cần nhập lại thông tin đăng nhập để truy cập vào tài khoản."
    cancelLabel="Ở Lại"
    actionLabel="Đăng Xuất"
    onAction={() => console.log("Logged out!")}
  />`}
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={
              <Button variant="outline" size={globalSize}>
                Đăng Xuất
              </Button>
            }
            title="Đăng xuất khỏi tài khoản?"
            description="Bạn sẽ cần nhập lại thông tin đăng nhập để truy cập vào tài khoản."
            cancelLabel="Ở Lại"
            actionLabel="Đăng Xuất"
            onAction={() => console.log("Logged out!")}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Kèm Media (Icon/Image)"
          description="Tự động chia cột Flexbox Side-by-Side khi truyền prop 'icon'."
          codeString={`<AlertDialogPreset
    trigger={
      <Button variant="outline" color="warning">
        Thu Hồi Quyền
      </Button>
    }
    icon={
      <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
        <ShieldAlertIcon className="text-warning" />
      </div>
    }
    title="Thu hồi quyền truy cập API?"
    description="Tất cả các ứng dụng đang sử dụng API key này sẽ bị mất quyền truy cập ngay lập tức."
    cancelLabel="Giữ Lại"
    actionLabel="Thu Hồi"
    actionColor="warning"
    onAction={() => console.log("Revoked!")}
  />`}
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={
              <Button variant="outline" color="warning" size={globalSize}>
                Thu Hồi Quyền
              </Button>
            }
            icon={
              <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
                <ShieldAlertIcon className="text-warning" />
              </div>
            }
            title="Thu hồi quyền truy cập API?"
            description="Tất cả các ứng dụng đang sử dụng API key này sẽ bị mất quyền truy cập ngay lập tức."
            cancelLabel="Giữ Lại"
            actionLabel="Thu Hồi"
            actionColor="warning"
            onAction={() => console.log("Revoked!")}
          />
        </ExampleSection>

        <ExampleSection
          label="Trạng Thái Controlled"
          description="Quản lý trạng thái đóng mở thông qua React State thay vì dùng prop Trigger."
          codeString={`const [controlledOpen, setControlledOpen] = useState(false);
return (
  <>
    <Button variant="outline" color="info" onClick={() => setControlledOpen(true)}>
      Bật Chế Độ Máy Bay
    </Button>
    <AlertDialogPreset
      open={controlledOpen}
      onOpenChange={setControlledOpen}
      size="${globalSize}"
      title="Bật chế độ máy bay?"
      description="Tất cả các kết nối mạng bao gồm Wi-Fi và Bluetooth sẽ bị ngắt."
      cancelLabel="Huỷ"
      actionLabel="Đồng Ý"
      actionColor="info"
      onAction={() => console.log("Airplane mode on!")}
    />
  </>
);`}
        >
          <div className="flex w-full flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground">
              State:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                {controlledOpen ? "true" : "false"}
              </code>
            </p>
            <Button
              variant="outline"
              color="info"
              size={globalSize}
              onClick={() => setControlledOpen(true)}
            >
              Bật Chế Độ Máy Bay
            </Button>
            <AlertDialogPreset
              open={controlledOpen}
              onOpenChange={setControlledOpen}
              size={globalSize}
              title="Bật chế độ máy bay?"
              description="Tất cả các kết nối mạng bao gồm Wi-Fi và Bluetooth sẽ bị ngắt."
              cancelLabel="Huỷ"
              actionLabel="Đồng Ý"
              actionColor="info"
              onAction={() => console.log("Airplane mode on!")}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Custom Button Variants"
          description="Tuỳ chỉnh variant cho cả nút Action (soft) và Cancel (ghost) thông qua actionVariant/cancelVariant."
          codeString={`<AlertDialogPreset
    trigger={
      <Button variant="outline">Custom Variants</Button>
    }
    icon={
      <div className="flex size-full items-center justify-center rounded-full bg-info/10">
        <MailWarningIcon className="text-info" />
      </div>
    }
    title="Gửi phản hồi?"
    description="Phản hồi của bạn sẽ được gửi ẩn danh tới đội ngũ phát triển."
    cancelLabel="Bỏ qua"
    cancelVariant="ghost"
    actionLabel="Gửi"
    actionColor="info"
    actionVariant="soft"
    onAction={() => console.log("Feedback sent!")}
  />`}
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={
              <Button variant="outline" size={globalSize}>
                Custom Variants
              </Button>
            }
            icon={
              <div className="flex size-full items-center justify-center rounded-full bg-info/10">
                <MailWarningIcon className="text-info" />
              </div>
            }
            title="Gửi phản hồi?"
            description="Phản hồi của bạn sẽ được gửi ẩn danh tới đội ngũ phát triển."
            cancelLabel="Bỏ qua"
            cancelVariant="ghost"
            actionLabel="Gửi"
            actionColor="info"
            actionVariant="soft"
            onAction={() => console.log("Feedback sent!")}
          />
        </ExampleSection>

        <ExampleSection
          label="Children (Nội dung bổ sung)"
          description="Prop children cho phép chèn thêm nội dung tuỳ ý vào phần Header."
          codeString={`<AlertDialogPreset
    trigger={
      <Button variant="outline" color="warning">
        Báo Cáo Lỗi
      </Button>
    }
    title="Báo cáo lỗi hệ thống"
    description="Vui lòng kiểm tra thông tin lỗi bên dưới trước khi gửi."
    cancelLabel="Huỷ"
    actionLabel="Gửi Báo Cáo"
    actionColor="warning"
    onAction={() => console.log("Report sent!")}
  >
    <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
      <p>Error Code: ERR_NETWORK_TIMEOUT</p>
      <p>Timestamp: 2026-07-05T14:30:00Z</p>
      <p>Module: api/gateway</p>
    </div>
  </AlertDialogPreset>`}
        >
          <AlertDialogPreset
            size={globalSize}
            trigger={
              <Button variant="outline" color="warning" size={globalSize}>
                Báo Cáo Lỗi
              </Button>
            }
            title="Báo cáo lỗi hệ thống"
            description="Vui lòng kiểm tra thông tin lỗi bên dưới trước khi gửi."
            cancelLabel="Huỷ"
            actionLabel="Gửi Báo Cáo"
            actionColor="warning"
            onAction={() => console.log("Report sent!")}
          >
            <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
              <p>Error Code: ERR_NETWORK_TIMEOUT</p>
              <p>Timestamp: 2026-07-05T14:30:00Z</p>
              <p>Module: api/gateway</p>
            </div>
          </AlertDialogPreset>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Giao Diện Nhỏ (Compact)"
          description="Khi dùng size='sm', nội dung sẽ được căn giữa và footer tự động dàn hàng ngang 2 cột."
          codeString={`<AlertDialogPreset
    size="sm"
    trigger={
      <Button variant="outline">Xác Nhận Nhanh</Button>
    }
    icon={
      <div className="flex size-full items-center justify-center rounded-full bg-muted">
        <InfoIcon />
      </div>
    }
    title="Xác nhận hành động?"
    description="Đây là dialog dạng nhỏ, phù hợp cho các thao tác nhanh với 2 nút nằm ngang."
    cancelLabel="Không"
    actionLabel="Có"
  />`}
        >
          <AlertDialogPreset
            size="sm"
            trigger={
              <Button variant="outline" size={globalSize}>
                Xác Nhận Nhanh
              </Button>
            }
            icon={
              <div className="flex size-full items-center justify-center rounded-full bg-muted">
                <InfoIcon />
              </div>
            }
            title="Xác nhận hành động?"
            description="Đây là dialog dạng nhỏ, phù hợp cho các thao tác nhanh với 2 nút nằm ngang."
            cancelLabel="Không"
            actionLabel="Có"
          />
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function AlertDialogMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Sử dụng Cơ bản"
          description="Lắp ráp thủ công các khối Header, Title, Description, Footer."
          codeString={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline">Mở Dialog Trắng</Button>
      }
    />
    
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Cấu trúc nguyên thuỷ
          </AlertDialogTitle>
          <AlertDialogDescription>
            Không có bất kỳ layout "thần thánh" nào ép buộc
            ở đây. Các thành phần chỉ xếp dọc (flex-col) mặc
            định.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Huỷ bỏ</AlertDialogCancel>
          <AlertDialogAction>Tiếp tục</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Mở Dialog Trắng
                </Button>
              }
            />

              <AlertDialogContent size={globalSize}>
                <AlertDialogHeader>
                  <AlertDialogTitle>Cấu trúc nguyên thuỷ</AlertDialogTitle>
                  <AlertDialogDescription>
                    Không có bất kỳ layout "thần thánh" nào ép buộc ở đây. Các
                    thành phần chỉ xếp dọc (flex-col) mặc định.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel size={globalSize}>
                    Huỷ bỏ
                  </AlertDialogCancel>
                  <AlertDialogAction size={globalSize}>
                    Tiếp tục
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            
          </AlertDialog>
        </ExampleSection>

        <ExampleSection
          label="Tự Do Custom Layout"
          description="Bởi vì Micro component rất 'dumb', bạn có thể tự chèn thẻ div, custom flexbox để làm ra bất kỳ giao diện nào."
          codeString={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline" color="warning">
          Giao Diện Custom
        </Button>
      }
    />
    
      <AlertDialogContent className="border-warning/50">
        <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
          <div className="size-16 rounded-lg bg-warning/20 border border-warning" />
          <AlertDialogHeader className="sm:text-left">
            <AlertDialogTitle className="text-warning">
              Cảnh báo Tùy chỉnh
            </AlertDialogTitle>
            <AlertDialogDescription>
              Icon đang nằm bên trái, hoặc có thể dời sang
              phải tuỳ ý bạn vì bạn đang kiểm soát HTML.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter className="border-t-0 bg-transparent">
          <AlertDialogCancel className="w-full">
            Tôi đã hiểu
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" color="warning" size={globalSize}>
                  Giao Diện Custom
                </Button>
              }
            />

              <AlertDialogContent
                size={globalSize}
                className="border-warning/50"
              >
                <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
                  <div className="size-16 rounded-lg bg-warning/20 border border-warning" />
                  <AlertDialogHeader className="sm:text-left">
                    <AlertDialogTitle className="text-warning">
                      Cảnh báo Tùy chỉnh
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý
                      bạn vì bạn đang kiểm soát HTML.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter className="border-t-0 bg-transparent">
                  <AlertDialogCancel size={globalSize} className="w-full">
                    Tôi đã hiểu
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            
          </AlertDialog>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="AlertDialogMedia"
          description="Khối chứa Icon/Image, tự scale theo size của AlertDialogContent."
          codeString={`<AlertDialog>
    <AlertDialogTrigger
      render={<Button variant="outline">Với Media</Button>}
    />
    
      <AlertDialogContent>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
          <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
            <ShieldAlertIcon className="text-warning" />
          </AlertDialogMedia>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Cảnh báo bảo mật
            </AlertDialogTitle>
            <AlertDialogDescription>
              AlertDialogMedia là khối div chứa icon, tự
              động scale kích thước theo data-size của
              AlertDialogContent.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Huỷ</AlertDialogCancel>
          <AlertDialogAction color="warning">
            Xác nhận
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Với Media
                </Button>
              }
            />

              <AlertDialogContent size={globalSize}>
                <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
                  <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
                    <ShieldAlertIcon className="text-warning" />
                  </AlertDialogMedia>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cảnh báo bảo mật</AlertDialogTitle>
                    <AlertDialogDescription>
                      AlertDialogMedia là khối div chứa icon, tự động scale kích
                      thước theo data-size của AlertDialogContent.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel size={globalSize}>Huỷ</AlertDialogCancel>
                  <AlertDialogAction size={globalSize} color="warning">
                    Xác nhận
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            
          </AlertDialog>
        </ExampleSection>

        <ExampleSection
          label="AlertDialogClose"
          description="Primitive đóng dialog cơ bản, cho phép render bất kỳ element nào (không bị ép thành Button)."
          codeString={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline">Dialog Có Nút X</Button>
      }
    />
    
      <AlertDialogContent>
        <AlertDialogClose className="absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
          <XIcon className="size-4" />
          <span className="sr-only">Đóng</span>
        </AlertDialogClose>
        <AlertDialogHeader>
          <AlertDialogTitle>
            AlertDialogClose
          </AlertDialogTitle>
          <AlertDialogDescription>
            Khác với AlertDialogCancel (luôn render Button),
            AlertDialogClose là bare-bone — bạn có thể
            render icon X, link, hay bất kỳ thứ gì.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Huỷ</AlertDialogCancel>
          <AlertDialogAction>Đồng ý</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Dialog Có Nút X
                </Button>
              }
            />

              <AlertDialogContent size={globalSize}>
                <AlertDialogClose className="absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
                  <XIcon className="size-4" />
                  <span className="sr-only">Đóng</span>
                </AlertDialogClose>
                <AlertDialogHeader>
                  <AlertDialogTitle>AlertDialogClose</AlertDialogTitle>
                  <AlertDialogDescription>
                    Khác với AlertDialogCancel (luôn render Button),
                    AlertDialogClose là bare-bone — bạn có thể render icon X,
                    link, hay bất kỳ thứ gì.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel size={globalSize}>Huỷ</AlertDialogCancel>
                  <AlertDialogAction size={globalSize}>
                    Đồng ý
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            
          </AlertDialog>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid>
        <ExampleSection
          label="Action Colors"
          description="AlertDialogAction hỗ trợ prop color để thay đổi ngữ nghĩa hành động."
          codeString={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline" color="destructive">
          Xoá Tài Khoản
        </Button>
      }
    />
    
      <AlertDialogContent>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
          <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
            <TrashIcon className="text-destructive" />
          </AlertDialogMedia>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Xoá tài khoản vĩnh viễn?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tất cả dữ liệu sẽ bị xoá và không thể khôi
              phục.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Huỷ</AlertDialogCancel>
          <AlertDialogAction color="destructive">
            Xoá vĩnh viễn
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" color="destructive" size={globalSize}>
                  Xoá Tài Khoản
                </Button>
              }
            />

              <AlertDialogContent size={globalSize}>
                <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
                  <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
                    <TrashIcon className="text-destructive" />
                  </AlertDialogMedia>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Xoá tài khoản vĩnh viễn?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Tất cả dữ liệu sẽ bị xoá và không thể khôi phục.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel size={globalSize}>Huỷ</AlertDialogCancel>
                  <AlertDialogAction size={globalSize} color="destructive">
                    Xoá vĩnh viễn
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            
          </AlertDialog>
        </ExampleSection>

        <ExampleSection
          label="Action & Cancel Variants"
          description="Tuỳ chỉnh variant cho cả Action (soft) và Cancel (ghost)."
          codeString={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline">Custom Variants</Button>
      }
    />
    
      <AlertDialogContent>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
          <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
            <LogOutIcon />
          </AlertDialogMedia>
          <AlertDialogHeader>
            <AlertDialogTitle>Đăng xuất?</AlertDialogTitle>
            <AlertDialogDescription>
              Phiên đăng nhập của bạn sẽ kết thúc. Bạn cần
              nhập lại mật khẩu để quay lại.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">
            Ở lại
          </AlertDialogCancel>
          <AlertDialogAction variant="soft" color="info">
            Đăng xuất
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
        >
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Custom Variants
                </Button>
              }
            />

              <AlertDialogContent size={globalSize}>
                <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
                  <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
                    <LogOutIcon />
                  </AlertDialogMedia>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Đăng xuất?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Phiên đăng nhập của bạn sẽ kết thúc. Bạn cần nhập lại mật
                      khẩu để quay lại.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel size={globalSize} variant="ghost">
                    Ở lại
                  </AlertDialogCancel>
                  <AlertDialogAction
                    size={globalSize}
                    variant="soft"
                    color="info"
                  >
                    Đăng xuất
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            
          </AlertDialog>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Use Case Comparison ─────────────────────── */}
      <ExampleSection
        label="🧭 So sánh Use Case"
        description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro."
        fullWidth
        codeString={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <ShieldAlertIcon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Xác nhận chuẩn mực với Icon
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Bạn cần làm một dialog xác nhận xoá với layout
        Side-by-Side (Icon nằm bên trái trên màn hình lớn,
        nằm ở trên cùng trên màn hình nhỏ).
      </p>

      <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
        <AlertDialogPreset
          size="sm"
          trigger={
            <Button variant="outline" size="sm">
              Xem Demo
            </Button>
          }
          icon={
            <div className="flex size-full items-center justify-center rounded-full bg-muted">
              <InfoIcon />
            </div>
          }
          title="Xác nhận thao tác"
          description="Macro bọc mọi thứ vào một component duy nhất."
          cancelLabel="Huỷ"
          actionLabel="Tiếp tục"
        />
      </div>

      <div className="rounded-md border border-border border-green-500/20 bg-green-500/5 px-3 py-2">
        <p className="text-xs font-medium text-green-700 dark:text-green-400">
          ✅ Dùng{" "}
          <code className="font-mono">
            AlertDialogPreset
          </code>{" "}
          — Viết đúng 1 element. Tự động xử lý Grid/Flex
          responsive siêu phức tạp.
        </p>
      </div>
    </div>

    {}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <MessageSquareWarningIcon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Custom Layout độc lạ
          </h3>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Designer yêu cầu một Modal có Layout đặc thù: Image
        bự ở trên cùng, Text ở dưới, Footer có 3 nút. Không
        có bất kỳ Preset nào support layout này.
      </p>

      <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button variant="outline" size="sm">
                Xem Demo
              </Button>
            }
          />
          
            <AlertDialogContent size="sm">
              <div className="h-24 w-full rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground">
                Custom Image
              </div>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tùy biến 100%
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
                <Button className="w-full">Action 1</Button>
                <Button
                  color="secondary"
                  variant="soft"
                  className="w-full"
                >
                  Action 2
                </Button>
                <AlertDialogCancel className="w-full">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          
        </AlertDialog>
      </div>

      <div className="rounded-md border border-border border-blue-500/20 bg-blue-500/5 px-3 py-2">
        <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
          ✅ Dùng{" "}
          <code className="font-mono">AlertDialog</code>{" "}
          (Micro) — Không bị ràng buộc bởi bất kỳ layout
          định sẵn nào. Lắp ráp thẻ tự do.
        </p>
      </div>
    </div>
  </div>`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ── Story 1: Macro wins ── */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                <ShieldAlertIcon className="size-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 1 · Dùng Macro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Xác nhận chuẩn mực với Icon
                </h3>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Bạn cần làm một dialog xác nhận xoá với layout Side-by-Side (Icon
              nằm bên trái trên màn hình lớn, nằm ở trên cùng trên màn hình
              nhỏ).
            </p>

            <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
              <AlertDialogPreset
                size="sm"
                trigger={
                  <Button variant="outline" size="sm">
                    Xem Demo
                  </Button>
                }
                icon={
                  <div className="flex size-full items-center justify-center rounded-full bg-muted">
                    <InfoIcon />
                  </div>
                }
                title="Xác nhận thao tác"
                description="Macro bọc mọi thứ vào một component duy nhất."
                cancelLabel="Huỷ"
                actionLabel="Tiếp tục"
              />
            </div>

            <div className="rounded-md border border-border border-green-500/20 bg-green-500/5 px-3 py-2">
              <p className="text-xs font-medium text-green-700 dark:text-green-400">
                ✅ Dùng <code className="font-mono">AlertDialogPreset</code> —
                Viết đúng 1 element. Tự động xử lý Grid/Flex responsive siêu
                phức tạp.
              </p>
            </div>
          </div>

          {/* ── Story 2: Micro wins ── */}
          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                <MessageSquareWarningIcon
                  className="size-4"
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Story 2 · Dùng Micro
                </p>
                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                  Custom Layout độc lạ
                </h3>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Designer yêu cầu một Modal có Layout đặc thù: Image bự ở trên
              cùng, Text ở dưới, Footer có 3 nút. Không có bất kỳ Preset nào
              support layout này.
            </p>

            <div className="rounded-lg bg-muted/50 p-3 flex justify-center">
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button variant="outline" size="sm">
                      Xem Demo
                    </Button>
                  }
                />

                  <AlertDialogContent size="sm">
                    <div className="h-24 w-full rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground">
                      Custom Image
                    </div>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Tùy biến 100%</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex-col gap-2 sm:flex-col">
                      <Button className="w-full">Action 1</Button>
                      <Button
                        color="secondary"
                        variant="soft"
                        className="w-full"
                      >
                        Action 2
                      </Button>
                      <AlertDialogCancel className="w-full">
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                
              </AlertDialog>
            </div>

            <div className="rounded-md border border-border border-blue-500/20 bg-blue-500/5 px-3 py-2">
              <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                ✅ Dùng <code className="font-mono">AlertDialog</code> (Micro) —
                Không bị ràng buộc bởi bất kỳ layout định sẵn nào. Lắp ráp thẻ
                tự do.
              </p>
            </div>
          </div>
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function AlertDialogShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Alert Dialog"
      description="Dialog gián đoạn yêu cầu người dùng xác nhận các hành động quan trọng hoặc mang tính phá hủy."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để làm gián đoạn người dùng với một thông báo hoặc xác nhận cực
            kỳ quan trọng, thường mang tính phá huỷ (như Xoá dữ liệu, Đăng xuất)
            hoặc không thể hoàn tác. Yêu cầu người dùng phải hành động rõ ràng
            thì mới thoát được cửa sổ.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <AlertDialogMicroShowcase globalSize={globalSize} /> },
        {
          label: "Macro (Preset)",
          content: <AlertDialogMacroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
