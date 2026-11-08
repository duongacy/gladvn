import React, { useCallback, useState } from "react";

import {
  LogOutIcon,
  MailWarningIcon,
  ShieldAlertIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  DocsP,
  ShowcaseDocs,
} from "~app/components/showcase";

import { ConfirmPreset } from "@/components/macro/confirm-preset";
import { Button } from "@/components/micro/button";
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmMedia,
  ConfirmTitle,
} from "@/components/micro/confirm";
import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";

function DestructiveMacroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleYes = useCallback(() => {
    console.log("Deleted!");
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        color="destructive"
        size={globalSize}
        onClick={handleOpen}
      >
        Delete Account
      </Button>
      <ConfirmPreset
        open={open}
        size={globalSize}
        title="Are you sure you want to delete?"
        description="This action cannot be undone. Your account and all its data will be permanently deleted."
        noLabel="Cancel"
        yesLabel="Delete"
        yesColor="destructive"
        onNo={handleClose}
        onYes={handleYes}
      />
    </>
  );
}

function StandardMacroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleYes = useCallback(() => {
    console.log("Logged out!");
    setOpen(false);
  }, []);

  return (
    <>
      <Button variant="outline" size={globalSize} onClick={handleOpen}>
        Log Out
      </Button>
      <ConfirmPreset
        open={open}
        size={globalSize}
        title="Log out of your account?"
        description="You will need to re-enter your credentials to access your account."
        noLabel="Stay"
        yesLabel="Log Out"
        onNo={handleClose}
        onYes={handleYes}
      />
    </>
  );
}

function IconMacroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleYes = useCallback(() => {
    console.log("Revoked!");
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        color="warning"
        size={globalSize}
        onClick={handleOpen}
      >
        Revoke Access
      </Button>
      <ConfirmPreset
        open={open}
        size={globalSize}
        icon={
          <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
            <ShieldAlertIcon className="text-warning" />
          </div>
        }
        title="Revoke API access?"
        description="All applications using this API key will immediately lose access."
        noLabel="Keep"
        yesLabel="Revoke"
        yesColor="warning"
        onNo={handleClose}
        onYes={handleYes}
      />
    </>
  );
}

function CustomVariantsMacroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleYes = useCallback(() => {
    console.log("Feedback sent!");
    setOpen(false);
  }, []);

  return (
    <>
      <Button variant="outline" size={globalSize} onClick={handleOpen}>
        Custom Variants
      </Button>
      <ConfirmPreset
        open={open}
        size={globalSize}
        icon={
          <div className="flex size-full items-center justify-center rounded-full bg-info/10">
            <MailWarningIcon className="text-info" />
          </div>
        }
        title="Send feedback?"
        description="Your feedback will be sent anonymously to the development team."
        noLabel="Skip"
        noVariant="ghost"
        yesLabel="Send"
        yesColor="info"
        yesVariant="soft"
        onNo={handleClose}
        onYes={handleYes}
      />
    </>
  );
}

function ChildrenMacroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleYes = useCallback(() => {
    console.log("Report sent!");
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        color="warning"
        size={globalSize}
        onClick={handleOpen}
      >
        Report Bug
      </Button>
      <ConfirmPreset
        open={open}
        size={globalSize}
        title="System error report"
        description="Please check the error information below before sending."
        noLabel="Cancel"
        yesLabel="Send Report"
        yesColor="warning"
        onNo={handleClose}
        onYes={handleYes}
      >
        <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
          <p>Error Code: ERR_NETWORK_TIMEOUT</p>
          <p>Timestamp: 2026-07-05T14:30:00Z</p>
          <p>Module: api/gateway</p>
        </div>
      </ConfirmPreset>
    </>
  );
}

function BasicMicroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button variant="outline" size={globalSize} onClick={handleOpen}>
        Open Blank Dialog
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent
          className={cn("w-full", {
            "sm:max-w-sm": globalSize === "sm",
            "sm:max-w-md": globalSize === "md",
            "sm:max-w-lg": globalSize === "lg",
          })}
        >
          <ConfirmHeader>
            <ConfirmTitle>Primitive Structure</ConfirmTitle>
            <ConfirmDescription>
              Không có bất kỳ layout "thần thánh" nào ép buộc ở đây. Các thành
              phần chỉ xếp dọc (flex-col) mặc định.
            </ConfirmDescription>
          </ConfirmHeader>
          <ConfirmFooter>
            <Button variant="outline" size={globalSize} onClick={handleClose}>
              Cancel
            </Button>
            <Button size={globalSize} onClick={handleClose}>
              Continue
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function CustomLayoutMicroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button
        variant="outline"
        color="warning"
        size={globalSize}
        onClick={handleOpen}
      >
        Custom Interface
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent
          className={cn("w-full border-warning/50", {
            "sm:max-w-sm": globalSize === "sm",
            "sm:max-w-md": globalSize === "md",
            "sm:max-w-lg": globalSize === "lg",
          })}
        >
          <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
            <div className="size-16 rounded-lg bg-warning/20 border border-warning shrink-0" />
            <ConfirmHeader className="sm:text-left">
              <ConfirmTitle className="text-warning">
                Custom Warning
              </ConfirmTitle>
              <ConfirmDescription>
                Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý bạn vì
                bạn đang kiểm soát HTML.
              </ConfirmDescription>
            </ConfirmHeader>
          </div>
          <ConfirmFooter className="border-t-0 bg-transparent">
            <Button
              variant="outline"
              size={globalSize}
              className="w-full"
              onClick={handleClose}
            >
              I understand
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function MediaMicroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button variant="outline" size={globalSize} onClick={handleOpen}>
        With Media
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent
          className={cn("w-full", {
            "sm:max-w-sm": globalSize === "sm",
            "sm:max-w-md": globalSize === "md",
            "sm:max-w-lg": globalSize === "lg",
          })}
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
            <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
              <ShieldAlertIcon className="text-warning" />
            </ConfirmMedia>
            <ConfirmHeader>
              <ConfirmTitle>Security Warning</ConfirmTitle>
              <ConfirmDescription>
                ConfirmMedia is a div containing an icon, automatically scaling
                its size according to the data-size of ConfirmContent.
              </ConfirmDescription>
            </ConfirmHeader>
          </div>
          <ConfirmFooter>
            <Button variant="outline" size={globalSize} onClick={handleClose}>
              Cancel
            </Button>
            <Button color="warning" size={globalSize} onClick={handleClose}>
              Confirm
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function CloseMicroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button variant="outline" size={globalSize} onClick={handleOpen}>
        Dialog With X Button
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent
          className={cn("w-full", {
            "sm:max-w-sm": globalSize === "sm",
            "sm:max-w-md": globalSize === "md",
            "sm:max-w-lg": globalSize === "lg",
          })}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
          >
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </button>
          <ConfirmHeader>
            <ConfirmTitle>Custom Close Button</ConfirmTitle>
            <ConfirmDescription>
              Unlike standard confirms, you can render an X icon, a link, or
              anything else to close by simply passing an onClick handler.
            </ConfirmDescription>
          </ConfirmHeader>
          <ConfirmFooter>
            <Button variant="outline" size={globalSize} onClick={handleClose}>
              Cancel
            </Button>
            <Button size={globalSize} onClick={handleClose}>
              Agree
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function ActionColorMicroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button
        variant="outline"
        color="destructive"
        size={globalSize}
        onClick={handleOpen}
      >
        Delete Account
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent
          className={cn("w-full", {
            "sm:max-w-sm": globalSize === "sm",
            "sm:max-w-md": globalSize === "md",
            "sm:max-w-lg": globalSize === "lg",
          })}
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
            <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
              <TrashIcon className="text-destructive" />
            </ConfirmMedia>
            <ConfirmHeader>
              <ConfirmTitle>Delete tài khoản vĩnh viễn?</ConfirmTitle>
              <ConfirmDescription>
                All data will be deleted and cannot be recovered.
              </ConfirmDescription>
            </ConfirmHeader>
          </div>
          <ConfirmFooter>
            <Button variant="outline" size={globalSize} onClick={handleClose}>
              Cancel
            </Button>
            <Button color="destructive" size={globalSize} onClick={handleClose}>
              Delete Permanently
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function ActionVariantsMicroPreview({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button variant="outline" size={globalSize} onClick={handleOpen}>
        Custom Variants
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent
          className={cn("w-full", {
            "sm:max-w-sm": globalSize === "sm",
            "sm:max-w-md": globalSize === "md",
            "sm:max-w-lg": globalSize === "lg",
          })}
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
            <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
              <LogOutIcon />
            </ConfirmMedia>
            <ConfirmHeader>
              <ConfirmTitle>Log out?</ConfirmTitle>
              <ConfirmDescription>
                Phiên đăng nhập của bạn sẽ kết thúc. Bạn cần nhập lại mật khẩu
                để quay lại.
              </ConfirmDescription>
            </ConfirmHeader>
          </div>
          <ConfirmFooter>
            <Button variant="ghost" size={globalSize} onClick={handleClose}>
              Stay
            </Button>
            <Button
              variant="soft"
              color="info"
              size={globalSize}
              onClick={handleClose}
            >
              Đăng xuất
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function useConfirmExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard Confirmation"),
        description: t(
          "Dialog xác nhận thông thường chỉ với Text.",
          "Standard confirmation dialog with just text.",
        ),
        macroCode: `<ConfirmPreset
  open={open}
  title="Log out of your account?"
  description="You will need to re-enter your credentials to access your account."
  noLabel="Stay"
  yesLabel="Log Out"
  onNo={() => setOpen(false)}
  onYes={() => {
    console.log("Logged out!");
    setOpen(false);
  }}
/>`,
        macroPreview: <StandardMacroPreview globalSize={globalSize} />,
        microCode: `<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent>
    <ConfirmHeader>
      <ConfirmTitle>Primitive Structure</ConfirmTitle>
      <ConfirmDescription>
        There is no forced 'magic' layout here. The components simply stack vertically (flex-col) by default.
      </ConfirmDescription>
    </ConfirmHeader>
    <ConfirmFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Continue</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`,
        microPreview: <BasicMicroPreview globalSize={globalSize} />,
      },
      {
        title: t(
          "Nguy hiểm / Màu sắc hành động",
          "Destructive / Action Colors",
        ),
        description: t(
          "Sử dụng prop color='destructive' để tạo nút hành động nguy hiểm.",
          "Use color='destructive' prop to create a dangerous action button.",
        ),
        macroCode: `<ConfirmPreset
  open={open}
  title="Are you sure you want to delete?"
  description="This action cannot be undone. Your account and all its data will be permanently deleted."
  noLabel="Cancel"
  yesLabel="Delete"
  yesColor="destructive"
  onNo={() => setOpen(false)}
  onYes={() => {
    console.log("Deleted!");
    setOpen(false);
  }}
/>`,
        macroPreview: <DestructiveMacroPreview globalSize={globalSize} />,
        microCode: `<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent>
    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
      <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
        <TrashIcon className="text-destructive" />
      </ConfirmMedia>
      <ConfirmHeader>
        <ConfirmTitle>Delete tài khoản vĩnh viễn?</ConfirmTitle>
        <ConfirmDescription>
          All data will be deleted and cannot be recovered.
        </ConfirmDescription>
      </ConfirmHeader>
    </div>
    <ConfirmFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button color="destructive" onClick={() => setOpen(false)}>Delete Permanently</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`,
        microPreview: <ActionColorMicroPreview globalSize={globalSize} />,
      },
      {
        title: t("Biểu tượng / Phương tiện", "Icon / Media"),
        description: t(
          "Tự động chia cột Flexbox Side-by-Side khi có icon/media.",
          "Automatically splits into a Side-by-Side Flexbox layout when there's an icon/media.",
        ),
        macroCode: `<ConfirmPreset
  open={open}
  icon={
    <div className="flex size-full items-center justify-center rounded-full bg-warning/10">
      <ShieldAlertIcon className="text-warning" />
    </div>
  }
  title="Revoke API access?"
  description="All applications using this API key will immediately lose access."
  noLabel="Keep"
  yesLabel="Revoke"
  yesColor="warning"
/>`,
        macroPreview: <IconMacroPreview globalSize={globalSize} />,
        microCode: `<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent>
    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
      <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
        <ShieldAlertIcon className="text-warning" />
      </ConfirmMedia>
      <ConfirmHeader>
        <ConfirmTitle>Security Warning</ConfirmTitle>
        <ConfirmDescription>
          ConfirmMedia is a div containing an icon, automatically scaling its size according to the data-size of ConfirmContent.
        </ConfirmDescription>
      </ConfirmHeader>
    </div>
    <ConfirmFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button color="warning" onClick={() => setOpen(false)}>Confirm</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`,
        microPreview: <MediaMicroPreview globalSize={globalSize} />,
      },
      {
        title: t("Tùy chỉnh Variant của Nút", "Custom Button Variants"),
        description: t(
          "Tuỳ chỉnh variant cho nút Yes và No qua yesVariant/noVariant hoặc custom Button.",
          "Customize the variant for Yes and No buttons via yesVariant/noVariant or custom Buttons.",
        ),
        macroCode: `<ConfirmPreset
  open={open}
  title="Send feedback?"
  description="Your feedback will be sent anonymously to the development team."
  noLabel="Skip"
  noVariant="ghost"
  yesLabel="Send"
  yesColor="info"
  yesVariant="soft"
/>`,
        macroPreview: <CustomVariantsMacroPreview globalSize={globalSize} />,
        microCode: `<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent>
    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
      <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
        <LogOutIcon />
      </ConfirmMedia>
      <ConfirmHeader>
        <ConfirmTitle>Log out?</ConfirmTitle>
        <ConfirmDescription>
          Phiên đăng nhập của bạn sẽ kết thúc. Bạn cần nhập lại mật khẩu để quay lại.
        </ConfirmDescription>
      </ConfirmHeader>
    </div>
    <ConfirmFooter>
      <Button variant="ghost" onClick={() => setOpen(false)}>Stay</Button>
      <Button variant="soft" color="info" onClick={() => setOpen(false)}>Đăng xuất</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`,
        microPreview: <ActionVariantsMicroPreview globalSize={globalSize} />,
      },
      {
        title: t("Tùy chỉnh Layout / Trẻ em", "Custom Layout / Children"),
        description: t(
          "Tự do chèn HTML vào bên trong.",
          "Freely insert HTML inside.",
        ),
        macroCode: `<ConfirmPreset
  open={open}
  title="System error report"
  description="Please check the error information below before sending."
  noLabel="Cancel"
  yesLabel="Send Report"
  yesColor="warning"
>
  <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
    <p>Error Code: ERR_NETWORK_TIMEOUT</p>
    <p>Timestamp: 2026-07-05T14:30:00Z</p>
    <p>Module: api/gateway</p>
  </div>
</ConfirmPreset>`,
        macroPreview: <ChildrenMacroPreview globalSize={globalSize} />,
        microCode: `<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent className="border-warning/50">
    <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
      <div className="size-16 rounded-lg bg-warning/20 border border-warning shrink-0" />
      <ConfirmHeader className="sm:text-left">
        <ConfirmTitle className="text-warning">Custom Warning</ConfirmTitle>
        <ConfirmDescription>
          Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý bạn vì bạn đang kiểm soát HTML.
        </ConfirmDescription>
      </ConfirmHeader>
    </div>
    <ConfirmFooter className="border-t-0 bg-transparent">
      <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>I understand</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`,
        microPreview: <CustomLayoutMicroPreview globalSize={globalSize} />,
      },
      {
        title: t("Nút Close tùy chỉnh", "Custom Close Button"),
        description: t(
          "Tạo nút đóng thủ công ở góc hộp thoại nếu cần thiết.",
          "Create a manual close (X) button if needed.",
        ),
        microCode: `<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent>
    <button 
      type="button" 
      onClick={() => setOpen(false)}
      className="absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
    >
      <XIcon className="size-4" />
      <span className="sr-only">Close</span>
    </button>
    <ConfirmHeader>
      <ConfirmTitle>Custom Close Button</ConfirmTitle>
      <ConfirmDescription>
        Unlike standard confirms, you can render an X icon, a link, or anything else to close by simply passing an onClick handler.
      </ConfirmDescription>
    </ConfirmHeader>
    <ConfirmFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Agree</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`,
        microPreview: <CloseMicroPreview globalSize={globalSize} />,
      },
    ],
    [globalSize, t],
  );
}

export default function ConfirmShowcase() {
  const t = useI18n();
  const examples = useConfirmExamples();

  return (
    <ConfigurableShowcase
      title="Confirm"
      description={t(
        "Hộp thoại gián đoạn yêu cầu người dùng xác nhận các hành động quan trọng hoặc mang tính phá hủy.",
        "An interrupting dialog that requires the user to confirm important or destructive actions.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để làm gián đoạn người dùng với một thông báo hoặc xác nhận cực kỳ quan trọng, thường mang tính phá huỷ (như Delete dữ liệu, Đăng xuất) hoặc không thể hoàn tác. Yêu cầu người dùng phải hành động rõ ràng thì mới thoát được cửa sổ.",
              "Used to interrupt the user with a critical notification or confirmation, usually destructive (e.g., Delete data, Logout) or irreversible. Requires the user to take a specific action to close the dialog.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
