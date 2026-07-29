import { useState } from "react";

import { DownloadIcon, MailIcon, PlusIcon } from "lucide-react";

import { Button, ButtonIcon } from "../../components/micro/button";
import { Spinner } from "../../components/micro/spinner";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function ButtonMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1500);
  };

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => setIsSending(false), 1500);
  };

  return (
    <div className="space-y-10">
      <ShowcaseExample
        title={t("Các biến thể", "Variants")}
        description={t(
          "Tất cả các kiểu hiển thị hiện có.",
          "All available display variants.",
        )}
        code={`<div className="flex flex-wrap items-center gap-4">
  <Button variant="solid">Solid</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`}
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Button size={globalSize} variant="solid">
              Solid
            </Button>
            <Button size={globalSize} variant="outline">
              Outline
            </Button>
            <Button size={globalSize} variant="soft">
              Soft
            </Button>
            <Button size={globalSize} variant="ghost">
              Ghost
            </Button>
            <Button size={globalSize} variant="link">
              Link
            </Button>
          </div>
        }
      />

      <ShowcaseExample
        title={t("Màu sắc", "Colors")}
        description={t(
          "Các màu semantic đi kèm variant solid.",
          "Semantic colors accompanied by the solid variant.",
        )}
        code={`<div className="flex flex-wrap items-center gap-4">
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="destructive">Destructive</Button>
  <Button color="warning">Warning</Button>
  <Button color="success">Success</Button>
  <Button color="info">Info</Button>
  <Button color="tertiary">Tertiary</Button>
  <Button color="muted">Muted</Button>
  <Button color="accent">Accent</Button>
</div>`}
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Button size={globalSize} color="primary">
              Primary
            </Button>
            <Button size={globalSize} color="secondary">
              Secondary
            </Button>
            <Button size={globalSize} color="destructive">
              Destructive
            </Button>
            <Button size={globalSize} color="warning">
              Warning
            </Button>
            <Button size={globalSize} color="success">
              Success
            </Button>
            <Button size={globalSize} color="info">
              Info
            </Button>
            <Button size={globalSize} color="tertiary">
              Tertiary
            </Button>
            <Button size={globalSize} color="muted">
              Muted
            </Button>
            <Button size={globalSize} color="accent">
              Accent
            </Button>
          </div>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Kèm Icon", "With Icon")}
          description={t(
            "Button kèm icon ở đầu hoặc cuối.",
            "Button with an icon at the start or end.",
          )}
          code={`<div className="flex flex-wrap items-center gap-4">
  <Button variant="outline">
    <ButtonIcon render={<MailIcon />} />
    Login with Email
  </Button>
  <Button>
    <ButtonIcon render={<DownloadIcon />} />
    Download
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button size={globalSize} variant="outline">
                <ButtonIcon render={<MailIcon />} />
                Login with Email
              </Button>
              <Button size={globalSize}>
                <ButtonIcon render={<DownloadIcon />} />
                Download
              </Button>
            </div>
          }
        />

        <ShowcaseExample
          title={t("Chỉ Icon", "Icon Only")}
          description={t(
            "Button vuông chỉ chứa icon.",
            "Square button containing only an icon.",
          )}
          code={`<div className="flex flex-wrap items-center gap-4">
  <Button variant="outline" iconOnly={true}>
    <ButtonIcon render={<PlusIcon />} />
  </Button>
  <Button variant="ghost" iconOnly={true}>
    <ButtonIcon render={<MailIcon />} />
  </Button>
  <Button variant="soft" iconOnly={true}>
    <ButtonIcon render={<DownloadIcon />} />
  </Button>
</div>`}
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button size={globalSize} variant="outline" iconOnly={true}>
                <ButtonIcon render={<PlusIcon />} />
              </Button>
              <Button size={globalSize} variant="ghost" iconOnly={true}>
                <ButtonIcon render={<MailIcon />} />
              </Button>
              <Button size={globalSize} variant="soft" iconOnly={true}>
                <ButtonIcon render={<DownloadIcon />} />
              </Button>
            </div>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Vô hiệu hóa", "Disabled")}
        description={t(
          "Button không thể tương tác, hiển thị mờ.",
          "Button cannot be interacted with and appears faded.",
        )}
        code={`<div className="flex flex-wrap items-center gap-4">
  <Button disabled>Solid Disabled</Button>
  <Button variant="outline" disabled>
    Outline Disabled
  </Button>
  <Button variant="soft" disabled>
    Soft Disabled
  </Button>
  <Button variant="ghost" disabled>
    Ghost Disabled
  </Button>
  <Button variant="link" disabled>
    Link Disabled
  </Button>
</div>`}
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <Button size={globalSize} disabled>
              Solid Disabled
            </Button>
            <Button size={globalSize} variant="outline" disabled>
              Outline Disabled
            </Button>
            <Button size={globalSize} variant="soft" disabled>
              Soft Disabled
            </Button>
            <Button size={globalSize} variant="ghost" disabled>
              Ghost Disabled
            </Button>
            <Button size={globalSize} variant="link" disabled>
              Link Disabled
            </Button>
          </div>
        }
      />

      <ExampleGrid>
        <ShowcaseExample
          title={t("Trạng thái tải", "Loading State")}
          description={t(
            "Button kèm Spinner khi đang xử lý async.",
            "Button with Spinner when processing async operations.",
          )}
          code={`<div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
  <Button
    color="primary"
    className="w-full"
    disabled={isSending}
    onClick={handleSend}
  >
    {isSending && <Spinner />}
    {isSending ? "Sending..." : "Send Message"}
  </Button>
  <Button variant="outline" className="w-full">
    Save Draft
  </Button>
</div>`}
          preview={
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <Button
                size={globalSize}
                color="primary"
                className="w-full"
                disabled={isSending}
                onClick={handleSend}
              >
                {isSending && <Spinner />}
                {isSending ? "Sending..." : "Send Message"}
              </Button>
              <Button size={globalSize} variant="outline" className="w-full">
                Save Draft
              </Button>
            </div>
          }
        />

        <ShowcaseExample
          title={t("Nguy hiểm", "Destructive")}
          description={t(
            "Xác nhận hành động nguy hiểm (xoá dữ liệu, huỷ tài khoản...).",
            "Confirm a dangerous action (e.g., delete data, cancel account...).",
          )}
          code={`<div className="w-full max-w-xs mx-auto rounded-lg border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-2">
  <p className="text-sm font-medium">Delete Workspace</p>
  <p className="text-xs text-muted-foreground">
    This action cannot be undone. All data will be lost.
  </p>
  <Button
    color="destructive"
    className="w-full mt-1"
    disabled={isDeleting}
    onClick={handleDelete}
  >
    {isDeleting && <Spinner />}
    {isDeleting ? "Deleting..." : "Delete Permanently"}
  </Button>
</div>`}
          preview={
            <div className="w-full max-w-xs mx-auto rounded-lg border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-2">
              <p className="text-sm font-medium">Delete Workspace</p>
              <p className="text-xs text-muted-foreground">
                This action cannot be undone. All data will be lost.
              </p>
              <Button
                size={globalSize}
                color="destructive"
                className="w-full mt-1"
                disabled={isDeleting}
                onClick={handleDelete}
              >
                {isDeleting && <Spinner />}
                {isDeleting ? "Deleting..." : "Delete Permanently"}
              </Button>
            </div>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function ButtonShowcase() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title={t("Nút (Button)", "Button")}
      description={t(
        "Kích hoạt hành động hoặc sự kiện — ví dụ: submit form, mở dialog.",
        "Triggers an action or event — e.g., submit form, open dialog.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Thành phần cơ bản để người dùng tương tác. Hỗ trợ nhiều variant, màu sắc, icon, và trạng thái loading/disabled. Thường được dùng trong form, dialog, hoặc toolbar.",
              "A fundamental element for user interaction. Supports multiple variants, colors, icons, and loading/disabled states. Commonly used in forms, dialogs, or toolbars.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <ButtonMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
