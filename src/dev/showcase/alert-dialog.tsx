import { useState } from "react";

import {
  InfoIcon,
  LogOutIcon,
  MailWarningIcon,
  MessageSquareWarningIcon,
  ShieldAlertIcon,
  TrashIcon,
  XIcon,
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
  AlertDialogTrigger,
} from "../../components/micro/alert-dialog";
import { Button } from "../../components/micro/button";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";
import { useI18n } from "../components/dev-context";

function AlertDialogMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Nguy hiểm", "Destructive")}
          description={t(
            "Sử dụng actionColor='destructive' để tạo nút hành động nguy hiểm.",
            "Use actionColor='destructive' to create a dangerous action button.",
          )}
          code={`<AlertDialogPreset
    trigger={
      <Button variant="outline" color="destructive">
        Delete Account
      </Button>
    }
    title="Are you sure you want to delete?"
    description="This action cannot be undone. Your account and all its data will be permanently deleted."
    cancelLabel="Cancel"
    actionLabel="Delete"
    actionColor="destructive"
    onAction={() => console.log("Deleted!")}
  />`}
          preview={
            <>
              <AlertDialogPreset
                size={globalSize}
                trigger={
                  <Button
                    variant="outline"
                    color="destructive"
                    size={globalSize}
                  >
                    Delete Account
                  </Button>
                }
                title={"Are you sure you want to delete?"}
                description={
                  "This action cannot be undone. Your account and all its data will be permanently deleted."
                }
                cancelLabel={"Cancel"}
                actionLabel={"Delete"}
                actionColor="destructive"
                onAction={() => console.log("Deleted!")}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Confirm tiêu chuẩn", "Standard Confirmation")}
          description={t(
            "Dialog xác nhận thông thường chỉ với Text.",
            "Standard confirmation dialog with just text.",
          )}
          code={`<AlertDialogPreset
    trigger={<Button variant="outline">Log Out</Button>}
    title="Log out of your account?"
    description="You will need to re-enter your credentials to access your account."
    cancelLabel="Stay"
    actionLabel="Log Out"
    onAction={() => console.log("Logged out!")}
  />`}
          preview={
            <>
              <AlertDialogPreset
                size={globalSize}
                trigger={
                  <Button variant="outline" size={globalSize}>
                    Log Out
                  </Button>
                }
                title={"Log out of your account?"}
                description={
                  "You will need to re-enter your credentials to access your account."
                }
                cancelLabel={"Stay"}
                actionLabel={"Log Out"}
                onAction={() => console.log("Logged out!")}
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Biểu tượng/Hình ảnh", "Icon/Image")}
          description={t(
            "Tự động chia cột Flexbox Side-by-Side khi truyền prop 'icon'.",
            "Automatically splits into a Side-by-Side Flexbox layout when the 'icon' prop is passed.",
          )}
          code={`<AlertDialogPreset
    trigger={
      <Button variant="outline" color="warning">
        Revoke Access
      </Button>
    }
    icon={
      <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
        <ShieldAlertIcon className="text-warning" />
      </div>
    }
    title="Revoke API access?"
    description="All applications using this API key will immediately lose access."
    cancelLabel="Keep"
    actionLabel="Revoke"
    actionColor="warning"
    onAction={() => console.log("Revoked!")}
  />`}
          preview={
            <>
              <AlertDialogPreset
                size={globalSize}
                trigger={
                  <Button variant="outline" color="warning" size={globalSize}>
                    Revoke Access
                  </Button>
                }
                icon={
                  <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
                    <ShieldAlertIcon className="text-warning" />
                  </div>
                }
                title={"Revoke API access?"}
                description={
                  "All applications using this API key will immediately lose access."
                }
                cancelLabel={"Keep"}
                actionLabel={"Revoke"}
                actionColor="warning"
                onAction={() => console.log("Revoked!")}
              />
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Tùy chỉnh Variant của Nút", "Custom Button Variants")}
          description={t(
            "Tuỳ chỉnh variant cho cả nút Action (soft) và Cancel (ghost) thông qua actionVariant/cancelVariant.",
            "Customize the variant for both the Action (soft) and Cancel (ghost) buttons via actionVariant/cancelVariant.",
          )}
          code={`<AlertDialogPreset
    trigger={
      <Button variant="outline">Custom Variants</Button>
    }
    icon={
      <div className="flex size-full items-center justify-center rounded-full bg-info/10">
        <MailWarningIcon className="text-info" />
      </div>
    }
    title="Send feedback?"
    description="Your feedback will be sent anonymously to the development team."
    cancelLabel="Skip"
    cancelVariant="ghost"
    actionLabel="Send"
    actionColor="info"
    actionVariant="soft"
    onAction={() => console.log("Feedback sent!")}
  />`}
          preview={
            <>
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
                title={"Send feedback?"}
                description={
                  "Your feedback will be sent anonymously to the development team."
                }
                cancelLabel={"Skip"}
                cancelVariant="ghost"
                actionLabel={"Send"}
                actionColor="info"
                actionVariant="soft"
                onAction={() => console.log("Feedback sent!")}
              />
            </>
          }
        />

        <ShowcaseExample
          title={t("Thành phần con (Children)", "Children")}
          description={t(
            "Prop children cho phép chèn thêm nội dung tuỳ ý vào phần Header.",
            "The children prop allows inserting arbitrary content into the Header section.",
          )}
          code={`<AlertDialogPreset
    trigger={
      <Button variant="outline" color="warning">
        Report Bug
      </Button>
    }
    title="System error report"
    description="Please check the error information below before sending."
    cancelLabel="Cancel"
    actionLabel="Send Report"
    actionColor="warning"
    onAction={() => console.log("Report sent!")}
  >
    <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
      <p>Error Code: ERR_NETWORK_TIMEOUT</p>
      <p>Timestamp: 2026-07-05T14:30:00Z</p>
      <p>Module: api/gateway</p>
    </div>
  </AlertDialogPreset>`}
          preview={
            <>
              <AlertDialogPreset
                size={globalSize}
                trigger={
                  <Button variant="outline" color="warning" size={globalSize}>
                    Report Bug
                  </Button>
                }
                title={"System error report"}
                description={
                  "Please check the error information below before sending."
                }
                cancelLabel={"Cancel"}
                actionLabel={"Send Report"}
                actionColor="warning"
                onAction={() => console.log("Report sent!")}
              >
                <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
                  <p>Error Code: ERR_NETWORK_TIMEOUT</p>
                  <p>Timestamp: 2026-07-05T14:30:00Z</p>
                  <p>Module: api/gateway</p>
                </div>
              </AlertDialogPreset>
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
function AlertDialogMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Sử dụng cơ bản", "Basic Usage")}
          description={t(
            "Lắp ráp thủ công các khối Header, Title, Description, Footer.",
            "Manually assemble the Header, Title, Description, and Footer blocks.",
          )}
          code={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline">Open Blank Dialog</Button>
      }
    />
    
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Primitive Structure
          </AlertDialogTitle>
          <AlertDialogDescription>
            There is no forced 'magic' layout here. The components simply stack vertically (flex-col) by default.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
          preview={
            <>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button variant="outline" size={globalSize}>
                      Open Blank Dialog
                    </Button>
                  }
                />

                <AlertDialogContent size={globalSize}>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Primitive Structure</AlertDialogTitle>
                    <AlertDialogDescription>
                      Không có bất kỳ layout "thần thánh" nào ép buộc ở đây. Các
                      thành phần chỉ xếp dọc (flex-col) mặc định.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel size={globalSize}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction size={globalSize}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          }
        />

        <ShowcaseExample
          title={t("Tự do tùy chỉnh Layout", "Free Custom Layout")}
          description={t(
            "Bởi vì Micro component rất 'dumb', bạn có thể tự chèn thẻ div, custom flexbox để làm ra bất kỳ giao diện nào.",
            "Because the Micro component is 'dumb', you can insert div tags and custom flexbox to create any interface.",
          )}
          code={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline" color="warning">
          Custom Interface
        </Button>
      }
    />
    
      <AlertDialogContent className="border-warning/50">
        <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
          <div className="size-16 rounded-lg bg-warning/20 border border-warning" />
          <AlertDialogHeader className="sm:text-left">
            <AlertDialogTitle className="text-warning">
              Custom Warning
            </AlertDialogTitle>
            <AlertDialogDescription>
              The icon is on the left, but you can move it to the right as you control the HTML.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter className="border-t-0 bg-transparent">
          <AlertDialogCancel className="w-full">
            I understand
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
          preview={
            <>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button variant="outline" color="warning" size={globalSize}>
                      Custom Interface
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
                        Custom Warning
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý
                        bạn vì bạn đang kiểm soát HTML.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </div>
                  <AlertDialogFooter className="border-t-0 bg-transparent">
                    <AlertDialogCancel size={globalSize} className="w-full">
                      I understand
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Phương tiện (Media)", "AlertDialogMedia")}
          description={t(
            "Khối chứa Icon/Image, tự scale theo size của AlertDialogContent.",
            "A block containing an Icon/Image that automatically scales according to the size of AlertDialogContent.",
          )}
          code={`<AlertDialog>
    <AlertDialogTrigger
      render={<Button variant="outline">With Media</Button>}
    />
    
      <AlertDialogContent>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
          <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
            <ShieldAlertIcon className="text-warning" />
          </AlertDialogMedia>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Security Warning
            </AlertDialogTitle>
            <AlertDialogDescription>
              AlertDialogMedia is a div containing an icon, automatically scaling its size according to the data-size of AlertDialogContent.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction color="warning">
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
          preview={
            <>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button variant="outline" size={globalSize}>
                      With Media
                    </Button>
                  }
                />

                <AlertDialogContent size={globalSize}>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
                    <AlertDialogMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
                      <ShieldAlertIcon className="text-warning" />
                    </AlertDialogMedia>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Security Warning</AlertDialogTitle>
                      <AlertDialogDescription>
                        AlertDialogMedia là khối div chứa icon, tự động scale
                        kích thước theo data-size của AlertDialogContent.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel size={globalSize}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction size={globalSize} color="warning">
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          }
        />

        <ShowcaseExample
          title={t("Nút Close", "AlertDialogClose")}
          description={t(
            "Primitive đóng dialog cơ bản, cho phép render bất kỳ element nào (không bị ép thành Button).",
            "A basic dialog closing primitive that allows rendering any element (not forced to be a Button).",
          )}
          code={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline">Dialog With X Button</Button>
      }
    />
    
      <AlertDialogContent>
        <AlertDialogClose className="absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </AlertDialogClose>
        <AlertDialogHeader>
          <AlertDialogTitle>
            AlertDialogClose
          </AlertDialogTitle>
          <AlertDialogDescription>
            Unlike AlertDialogCancel (which always renders a Button), AlertDialogClose is bare-bone — you can render an X icon, a link, or anything else.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Agree</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
          preview={
            <>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button variant="outline" size={globalSize}>
                      Dialog With X Button
                    </Button>
                  }
                />

                <AlertDialogContent size={globalSize}>
                  <AlertDialogClose className="absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none">
                    <XIcon className="size-4" />
                    <span className="sr-only">Close</span>
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
                    <AlertDialogCancel size={globalSize}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction size={globalSize}>
                      Agree
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Màu sắc hành động", "Action Colors")}
          description={t(
            "AlertDialogAction hỗ trợ prop color để thay đổi ngữ nghĩa hành động.",
            "AlertDialogAction supports the color prop to change the semantic meaning of the action.",
          )}
          code={`<AlertDialog>
    <AlertDialogTrigger
      render={
        <Button variant="outline" color="destructive">
          Delete Account
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
              Delete tài khoản vĩnh viễn?
            </AlertDialogTitle>
            <AlertDialogDescription>
              All data will be deleted and cannot be recovered.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction color="destructive">
            Delete Permanently
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
          preview={
            <>
              <AlertDialog>
                <AlertDialogTrigger
                  render={
                    <Button
                      variant="outline"
                      color="destructive"
                      size={globalSize}
                    >
                      Delete Account
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
                        Delete tài khoản vĩnh viễn?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        All data will be deleted and cannot be recovered.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel size={globalSize}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction size={globalSize} color="destructive">
                      Delete Permanently
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          }
        />

        <ShowcaseExample
          title={t("Variant cho Action & Cancel", "Action & Cancel Variants")}
          description={t(
            "Tuỳ chỉnh variant cho cả Action (soft) và Cancel (ghost).",
            "Customize the variant for both Action (soft) and Cancel (ghost).",
          )}
          code={`<AlertDialog>
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
            <AlertDialogTitle>Log out?</AlertDialogTitle>
            <AlertDialogDescription>
              Your session will end. You will need to re-enter your password to log back in.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">
            Stay
          </AlertDialogCancel>
          <AlertDialogAction variant="soft" color="info">
            Đăng xuất
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  </AlertDialog>`}
          preview={
            <>
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
                      <AlertDialogTitle>Log out?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Phiên đăng nhập của bạn sẽ kết thúc. Bạn cần nhập lại
                        mật khẩu để quay lại.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel size={globalSize} variant="ghost">
                      Stay
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
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function AlertDialogShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Alert Dialog"
      description={
        "An interrupting dialog that requires the user to confirm important or destructive actions."
      }
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để làm gián đoạn người dùng với một thông báo hoặc xác nhận cực kỳ quan trọng, thường mang tính phá huỷ (như Delete dữ liệu, Đăng xuất) hoặc không thể hoàn tác. Yêu cầu người dùng phải hành động rõ ràng thì mới thoát được cửa sổ.",
              "Used to interrupt the user with a critical notification or confirmation, usually destructive (e.g., Delete data, Logout) or irreversible. Requires the user to take a specific action to close the dialog."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <AlertDialogMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <AlertDialogMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
