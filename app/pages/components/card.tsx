import { MoreHorizontal } from "lucide-react";
import React from "react";
import { CardPreset } from "@/components/macro/card-preset";
import { Badge } from "@/components/micro/badge";
import { Button } from "@/components/micro/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/micro/card";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function useCardExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Card cài sẵn với đầy đủ tiêu đề, nội dung và chân trang. Có thể dùng Macro Preset hoặc tự lắp ráp bằng Micro.",
          "Pre-built card with title, content, and footer. Can use Macro Preset or assemble manually via Micro."
        ),
        macroCode: `<CardPreset
  title="Account settings"
  description="Manage settings and preferences for your account."
  footer={<Button>Save changes</Button>}
>
  <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
    Settings form content goes here.
  </div>
</CardPreset>`,
        macroPreview: (
          <CardPreset
            size={globalSize}
            title="Account settings"
            description="Manage settings and preferences for your account."
            footer={<Button size={globalSize}>Save changes</Button>}
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Settings form content goes here.
            </div>
          </CardPreset>
        ),
        microCode: `<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>
      Deploy your new project in one-click.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`,
        microPreview: (
          <Card size={globalSize} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" size={globalSize}>
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Name of your project"
                      size={globalSize}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" size={globalSize}>
                Cancel
              </Button>
              <Button size={globalSize}>Deploy</Button>
            </CardFooter>
          </Card>
        ),
      },
      {
        title: t("Tùy biến thành phần", "Component Variations"),
        description: t(
          "Bỏ qua các prop title/footer ở Macro hoặc các component Header/Footer ở Micro để tạo card chỉ có nội dung.",
          "Omit title/footer props in Macro or Header/Footer components in Micro to create content-only cards."
        ),
        macroCode: `<CardPreset>
  <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
    This is a simple content-only card without a header
    or footer.
  </div>
</CardPreset>`,
        macroPreview: (
          <CardPreset size={globalSize}>
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              This is a simple content-only card without a header
              or footer.
            </div>
          </CardPreset>
        ),
        microCode: `<Card>
  <CardContent>
    <p className="text-sm text-muted-foreground pt-4 md:pt-6">
      This is a simple content-only card without a header or footer.
      Useful for wrapping any content in a card container.
    </p>
  </CardContent>
</Card>`,
        microPreview: (
          <Card size={globalSize}>
            <CardContent>
              <p className="text-sm text-muted-foreground pt-4 md:pt-6">
                This is a simple content-only card without a header or footer.
                Useful for wrapping any content in a card container.
              </p>
            </CardContent>
          </Card>
        ),
      },
      {
        title: t("Header đặc chế", "Custom Header"),
        description: t(
          "Với Macro, tiêu đề hỗ trợ nhận ReactNode. Với Micro, có thể bố trí linh hoạt các nút và nội dung bổ sung vào thẻ Header.",
          "With Macro, title supports ReactNode. With Micro, you can flexibly layout buttons and additional content in the Header."
        ),
        macroCode: `<CardPreset
  title={
    <div className="flex items-center gap-2">
      <span>API Keys</span>
      <Badge color="warning">Experimental</Badge>
    </div>
  }
  description="Manage your secret API keys."
>
  <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
    <span className="font-mono">sk_live_123...</span>
    <Button size="sm" variant="outline">
      Copy
    </Button>
  </div>
</CardPreset>`,
        macroPreview: (
          <CardPreset
            size={globalSize}
            title={
              <div className="flex items-center gap-2">
                <span>API Keys</span>
                <Badge color="warning">Experimental</Badge>
              </div>
            }
            description="Manage your secret API keys."
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
              <span className="font-mono">sk_live_123...</span>
              <Button size={globalSize} variant="outline">
                Copy
              </Button>
            </div>
          </CardPreset>
        ),
        microCode: `<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <CardTitle>Notifications</CardTitle>
          <Badge color="secondary">3 new</Badge>
        </div>
        <CardDescription>
          You have 3 unread messages.
        </CardDescription>
      </div>
      <Button
        variant="ghost"
        size="sm"
        iconOnly
        className="h-8 w-8 rounded-full"
      >
        <span className="sr-only">Open menu</span>
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  </CardHeader>
</Card>`,
        microPreview: (
          <Card size={globalSize}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <CardTitle>Notifications</CardTitle>
                    <Badge color="secondary">3 new</Badge>
                  </div>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size={globalSize}
                  iconOnly
                  className="h-8 w-8 rounded-full"
                >
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
          </Card>
        ),
      },
      {
        title: t("Với Form Controls", "With Form Controls"),
        description: t(
          "Sử dụng children để đặt input form bên trong nội dung.",
          "Use children to place a form inside the content."
        ),
        macroCode: `<CardPreset
  title="Update profile"
  description="Change your display name and email address."
  footer={
    <div className="flex justify-between w-full">
      <Button variant="ghost">Cancel</Button>
      <Button>Save</Button>
    </div>
  }
>
  <div className="grid gap-4">
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="macro-name">Name</Label>
      <Input id="macro-name" placeholder="Enter your name" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="macro-email">Email</Label>
      <Input id="macro-email" type="email" placeholder="hello@example.com" />
    </div>
  </div>
</CardPreset>`,
        macroPreview: (
          <CardPreset
            size={globalSize}
            title="Update profile"
            description="Change your display name and email address."
            footer={
              <div className="flex justify-between w-full">
                <Button variant="ghost" size={globalSize}>
                  Cancel
                </Button>
                <Button size={globalSize}>Save</Button>
              </div>
            }
          >
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="macro-name" size={globalSize}>
                  Name
                </Label>
                <Input
                  id="macro-name"
                  placeholder="Enter your name"
                  size={globalSize}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="macro-email" size={globalSize}>
                  Email
                </Label>
                <Input
                  id="macro-email"
                  type="email"
                  placeholder="hello@example.com"
                  size={globalSize}
                />
              </div>
            </div>
          </CardPreset>
        ),
        microCode: `<Card>
  <CardHeader>
    <CardTitle>Update profile</CardTitle>
    <CardDescription>
      Change your display name and email address.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="micro-name">Name</Label>
        <Input id="micro-name" placeholder="Enter your name" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="micro-email">Email</Label>
        <Input id="micro-email" type="email" placeholder="hello@example.com" />
      </div>
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`,
        microPreview: (
          <Card size={globalSize}>
            <CardHeader>
              <CardTitle>Update profile</CardTitle>
              <CardDescription>
                Change your display name and email address.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="micro-name" size={globalSize}>
                    Name
                  </Label>
                  <Input
                    id="micro-name"
                    placeholder="Enter your name"
                    size={globalSize}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="micro-email" size={globalSize}>
                    Email
                  </Label>
                  <Input
                    id="micro-email"
                    type="email"
                    placeholder="hello@example.com"
                    size={globalSize}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size={globalSize}>
                Cancel
              </Button>
              <Button size={globalSize}>Save</Button>
            </CardFooter>
          </Card>
        ),
      },
      {
        title: t("Thẻ chỉ số KPI", "KPI Stats Cards"),
        description: t(
          "Thiết kế thẻ dashboard thông dụng trong thực tế.",
          "Common dashboard card design in practice."
        ),
        microCode: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Total Revenue</CardDescription>
      <CardTitle className="text-3xl">$45,231.89</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Subscriptions</CardDescription>
      <CardTitle className="text-3xl">+2,350</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-xs text-muted-foreground">+180.1% from last month</p>
    </CardContent>
  </Card>
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Active Now</CardDescription>
      <CardTitle className="text-3xl">+573</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-xs text-muted-foreground">+201 since last hour</p>
    </CardContent>
  </Card>
</div>`,
        microPreview: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Card size={globalSize}>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-3xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card size={globalSize}>
              <CardHeader className="pb-2">
                <CardDescription>Subscriptions</CardDescription>
                <CardTitle className="text-3xl">+2,350</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card size={globalSize}>
              <CardHeader className="pb-2">
                <CardDescription>Active Now</CardDescription>
                <CardTitle className="text-3xl">+573</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
        ),
      },
      {
        title: t("Heading Hierarchy (as prop)", "Heading Hierarchy (as prop)"),
        description: t(
          "Dùng prop `as` để tuỳ chỉnh cấp heading của CardTitle, đảm bảo đúng cấu trúc HTML ngữ nghĩa trong từng ngữ cảnh trang.",
          "Use the `as` prop to customise the heading level of CardTitle, ensuring correct semantic HTML hierarchy for each page context."
        ),
        microCode: `{/* Default: renders as <h3> */}
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Default heading (h3)</CardTitle>
    <CardDescription>This renders as an h3 by default.</CardDescription>
  </CardHeader>
</Card>

{/* Inside a section already scoped to h2 */}
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle as="h4">Nested heading (h4)</CardTitle>
    <CardDescription>Use as="h4" when the page already has h2 and h3 above.</CardDescription>
  </CardHeader>
</Card>`,
        microPreview: (
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Card size={globalSize}>
              <CardHeader>
                <CardTitle>Default heading (h3)</CardTitle>
                <CardDescription>This renders as an h3 by default.</CardDescription>
              </CardHeader>
            </Card>
            <Card size={globalSize}>
              <CardHeader>
                <CardTitle as="h4">Nested heading (h4)</CardTitle>
                <CardDescription>Use as="h4" when the page already has h2 and h3 above.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function CardShowcase() {
  const t = useI18n();
  const examples = useCardExamples();

  return (
    <ConfigurableShowcase
      title="Card"
      description={t(
        "Thẻ hiển thị thông tin đóng gói có cấu trúc (tiêu đề, nội dung, footer).",
        "Displays information in a structured card format (title, content, footer)."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng để nhóm các thông tin liên quan lại với nhau trong một container có cấu trúc rõ ràng. Thường được sử dụng để hiển thị các mục dữ liệu, dashboard, hoặc các form nhỏ.",
              "Use to group related information in a structured container. Commonly used to display data items, dashboards, or small forms."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
