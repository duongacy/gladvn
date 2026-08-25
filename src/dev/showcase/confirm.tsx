"use client";

import { useState } from "react";

import {
  LogOutIcon,
  MailWarningIcon,
  ShieldAlertIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";

import { ConfirmPreset } from "../../components/macro/confirm-preset";
import {
  Confirm,
  ConfirmContent,
  ConfirmDescription,
  ConfirmFooter,
  ConfirmHeader,
  ConfirmMedia,
  ConfirmTitle,
} from "../../components/micro/confirm";
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

// Helper components for stateful examples
function DestructiveExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" color="destructive" size={globalSize} onClick={() => setOpen(true)}>
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
        onNo={() => setOpen(false)}
        onYes={() => {
          console.log("Deleted!");
          setOpen(false);
        }}
      />
    </>
  );
}

function StandardExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size={globalSize} onClick={() => setOpen(true)}>
        Log Out
      </Button>
      <ConfirmPreset
        open={open}
        size={globalSize}
        title="Log out of your account?"
        description="You will need to re-enter your credentials to access your account."
        noLabel="Stay"
        yesLabel="Log Out"
        onNo={() => setOpen(false)}
        onYes={() => {
          console.log("Logged out!");
          setOpen(false);
        }}
      />
    </>
  );
}

function IconExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" color="warning" size={globalSize} onClick={() => setOpen(true)}>
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
        onNo={() => setOpen(false)}
        onYes={() => {
          console.log("Revoked!");
          setOpen(false);
        }}
      />
    </>
  );
}

function CustomVariantsExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size={globalSize} onClick={() => setOpen(true)}>
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
        onNo={() => setOpen(false)}
        onYes={() => {
          console.log("Feedback sent!");
          setOpen(false);
        }}
      />
    </>
  );
}

function ChildrenExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" color="warning" size={globalSize} onClick={() => setOpen(true)}>
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
        onNo={() => setOpen(false)}
        onYes={() => {
          console.log("Report sent!");
          setOpen(false);
        }}
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

function ConfirmMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Nguy hiểm", "Destructive")}
          description={t(
            "Sử dụng yesColor='destructive' để tạo nút hành động nguy hiểm.",
            "Use yesColor='destructive' to create a dangerous action button."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" color="destructive" onClick={() => setOpen(true)}>
  Delete Account
</Button>

<ConfirmPreset
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
/>`}
          preview={<DestructiveExample globalSize={globalSize} />}
        />

        <ShowcaseExample
          title={t("Confirm tiêu chuẩn", "Standard Confirmation")}
          description={t(
            "Dialog xác nhận thông thường chỉ với Text.",
            "Standard confirmation dialog with just text."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Log Out</Button>

<ConfirmPreset
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
/>`}
          preview={<StandardExample globalSize={globalSize} />}
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Biểu tượng/Hình ảnh", "Icon/Image")}
          description={t(
            "Tự động chia cột Flexbox Side-by-Side khi truyền prop 'icon'.",
            "Automatically splits into a Side-by-Side Flexbox layout when the 'icon' prop is passed."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" color="warning" onClick={() => setOpen(true)}>
  Revoke Access
</Button>

<ConfirmPreset
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
  onNo={() => setOpen(false)}
  onYes={() => {
    console.log("Revoked!");
    setOpen(false);
  }}
/>`}
          preview={<IconExample globalSize={globalSize} />}
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Tùy chỉnh Variant của Nút", "Custom Button Variants")}
          description={t(
            "Tuỳ chỉnh variant cho cả nút Yes (soft) và No (ghost) thông qua yesVariant/noVariant.",
            "Customize the variant for both the Yes (soft) and No (ghost) buttons via yesVariant/noVariant."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>
  Custom Variants
</Button>

<ConfirmPreset
  open={open}
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
  onNo={() => setOpen(false)}
  onYes={() => {
    console.log("Feedback sent!");
    setOpen(false);
  }}
/>`}
          preview={<CustomVariantsExample globalSize={globalSize} />}
        />

        <ShowcaseExample
          title={t("Thành phần con (Children)", "Children")}
          description={t(
            "Prop children cho phép chèn thêm nội dung tuỳ ý vào phần Header.",
            "The children prop allows inserting arbitrary content into the Header section."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" color="warning" onClick={() => setOpen(true)}>
  Report Bug
</Button>

<ConfirmPreset
  open={open}
  title="System error report"
  description="Please check the error information below before sending."
  noLabel="Cancel"
  yesLabel="Send Report"
  yesColor="warning"
  onNo={() => setOpen(false)}
  onYes={() => {
    console.log("Report sent!");
    setOpen(false);
  }}
>
  <div className="mt-2 rounded-md border border-border bg-muted/50 p-3 font-mono text-xs text-muted-foreground">
    <p>Error Code: ERR_NETWORK_TIMEOUT</p>
    <p>Timestamp: 2026-07-05T14:30:00Z</p>
    <p>Module: api/gateway</p>
  </div>
</ConfirmPreset>`}
          preview={<ChildrenExample globalSize={globalSize} />}
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────

function BasicMicroExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size={globalSize} onClick={() => setOpen(true)}>
        Open Blank Dialog
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent size={globalSize}>
          <ConfirmHeader>
            <ConfirmTitle>Primitive Structure</ConfirmTitle>
            <ConfirmDescription>
              Không có bất kỳ layout "thần thánh" nào ép buộc ở đây. Các thành phần chỉ xếp dọc (flex-col) mặc định.
            </ConfirmDescription>
          </ConfirmHeader>
          <ConfirmFooter>
            <Button variant="outline" size={globalSize} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button size={globalSize} onClick={() => setOpen(false)}>
              Continue
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function CustomLayoutMicroExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" color="warning" size={globalSize} onClick={() => setOpen(true)}>
        Custom Interface
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent size={globalSize} className="border-warning/50">
          <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
            <div className="size-16 rounded-lg bg-warning/20 border border-warning" />
            <ConfirmHeader className="sm:text-left">
              <ConfirmTitle className="text-warning">Custom Warning</ConfirmTitle>
              <ConfirmDescription>
                Icon đang nằm bên trái, hoặc có thể dời sang phải tuỳ ý bạn vì bạn đang kiểm soát HTML.
              </ConfirmDescription>
            </ConfirmHeader>
          </div>
          <ConfirmFooter className="border-t-0 bg-transparent">
            <Button variant="outline" size={globalSize} className="w-full" onClick={() => setOpen(false)}>
              I understand
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function MediaMicroExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size={globalSize} onClick={() => setOpen(true)}>
        With Media
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent size={globalSize}>
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
            <Button variant="outline" size={globalSize} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="warning" size={globalSize} onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function CloseMicroExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size={globalSize} onClick={() => setOpen(true)}>
        Dialog With X Button
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent size={globalSize}>
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
            <Button variant="outline" size={globalSize} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button size={globalSize} onClick={() => setOpen(false)}>
              Agree
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function ActionColorMicroExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" color="destructive" size={globalSize} onClick={() => setOpen(true)}>
        Delete Account
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent size={globalSize}>
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
            <Button variant="outline" size={globalSize} onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="destructive" size={globalSize} onClick={() => setOpen(false)}>
              Delete Permanently
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function ActionVariantsMicroExample({ globalSize }: { globalSize: Size }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" size={globalSize} onClick={() => setOpen(true)}>
        Custom Variants
      </Button>
      <Confirm open={open} onOpenChange={setOpen}>
        <ConfirmContent size={globalSize}>
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
            <Button variant="ghost" size={globalSize} onClick={() => setOpen(false)}>
              Stay
            </Button>
            <Button variant="soft" color="info" size={globalSize} onClick={() => setOpen(false)}>
              Đăng xuất
            </Button>
          </ConfirmFooter>
        </ConfirmContent>
      </Confirm>
    </>
  );
}

function ConfirmMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Sử dụng cơ bản", "Basic Usage")}
          description={t(
            "Lắp ráp thủ công các khối Header, Title, Description, Footer.",
            "Manually assemble the Header, Title, Description, and Footer blocks."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Open Blank Dialog</Button>

<Confirm open={open} onOpenChange={setOpen}>
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
</Confirm>`}
          preview={<BasicMicroExample globalSize={globalSize} />}
        />

        <ShowcaseExample
          title={t("Tự do tùy chỉnh Layout", "Free Custom Layout")}
          description={t(
            "Bởi vì Micro component rất 'dumb', bạn có thể tự chèn thẻ div, custom flexbox để làm ra bất kỳ giao diện nào.",
            "Because the Micro component is 'dumb', you can insert div tags and custom flexbox to create any interface."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" color="warning" onClick={() => setOpen(true)}>Custom Interface</Button>

<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent className="border-warning/50">
    <div className="flex flex-col-reverse items-center justify-center gap-4 py-4 sm:flex-row">
      <div className="size-16 rounded-lg bg-warning/20 border border-warning" />
      <ConfirmHeader className="sm:text-left">
        <ConfirmTitle className="text-warning">Custom Warning</ConfirmTitle>
        <ConfirmDescription>
          The icon is on the left, but you can move it to the right as you control the HTML.
        </ConfirmDescription>
      </ConfirmHeader>
    </div>
    <ConfirmFooter className="border-t-0 bg-transparent">
      <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>I understand</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`}
          preview={<CustomLayoutMicroExample globalSize={globalSize} />}
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Phương tiện (Media)", "ConfirmMedia")}
          description={t(
            "Khối chứa Icon/Image, tự scale theo size của ConfirmContent.",
            "A block containing an Icon/Image that automatically scales according to the size of ConfirmContent."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>With Media</Button>

<Confirm open={open} onOpenChange={setOpen}>
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
</Confirm>`}
          preview={<MediaMicroExample globalSize={globalSize} />}
        />

        <ShowcaseExample
          title={t("Nút Close tùy chỉnh", "Custom Close Button")}
          description={t(
            "Tạo nút đóng (X) thủ công nếu cần thiết.",
            "Create a manual close (X) button if needed."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Dialog With X Button</Button>

<Confirm open={open} onOpenChange={setOpen}>
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
</Confirm>`}
          preview={<CloseMicroExample globalSize={globalSize} />}
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Màu sắc hành động", "Action Colors")}
          description={t(
            "Sử dụng prop color trên Button để thay đổi ngữ nghĩa hành động.",
            "Use the color prop on Button to change the semantic meaning of the action."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" color="destructive" onClick={() => setOpen(true)}>Delete Account</Button>

<Confirm open={open} onOpenChange={setOpen}>
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
</Confirm>`}
          preview={<ActionColorMicroExample globalSize={globalSize} />}
        />

        <ShowcaseExample
          title={t("Variant cho Action & Cancel", "Action & Cancel Variants")}
          description={t(
            "Tuỳ chỉnh variant cho cả Action (soft) và Cancel (ghost) qua component Button tiêu chuẩn.",
            "Customize the variant for both Action (soft) and Cancel (ghost) via standard Button components."
          )}
          code={`const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Custom Variants</Button>

<Confirm open={open} onOpenChange={setOpen}>
  <ConfirmContent>
    <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
      <ConfirmMedia className="mx-auto mb-2 shrink-0 sm:mx-0 sm:mb-0">
        <LogOutIcon />
      </ConfirmMedia>
      <ConfirmHeader>
        <ConfirmTitle>Log out?</ConfirmTitle>
        <ConfirmDescription>
          Your session will end. You will need to re-enter your password to log back in.
        </ConfirmDescription>
      </ConfirmHeader>
    </div>
    <ConfirmFooter>
      <Button variant="ghost" onClick={() => setOpen(false)}>Stay</Button>
      <Button variant="soft" color="info" onClick={() => setOpen(false)}>Đăng xuất</Button>
    </ConfirmFooter>
  </ConfirmContent>
</Confirm>`}
          preview={<ActionVariantsMicroExample globalSize={globalSize} />}
        />
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function ConfirmShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Confirm"
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
      micro={{ content: <ConfirmMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <ConfirmMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
