import { CardPreset } from "../../components/macro/card-preset";
import { Badge } from "../../components/micro/badge";
import { Button } from "../../components/micro/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/micro/card";
import { Input } from "../../components/micro/input";
import { Label } from "../../components/micro/label";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function CardMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample 
          title="Tiêu chuẩn (Standard)" 
          description={t("Card cài sẵn với đầy đủ tiêu đề, nội dung và chân trang.", "Pre-built card with title, content, and footer.")} 
          code={t(`<CardPreset
    title="Cài đặt tài khoản"
    description="Quản lý các cài đặt và tùy chọn cho tài khoản của bạn."
    footer={<Button>Lưu thay đổi</Button>}
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
      Settings form content goes here.
    </div>
  </CardPreset>`, `<CardPreset
    title="Account settings"
    description="Manage settings and preferences for your account."
    footer={<Button>Save changes</Button>}
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
      Settings form content goes here.
    </div>
  </CardPreset>`)} 
          preview={
            <>
              <CardPreset
                size={globalSize}
                title={t("Cài đặt tài khoản", "Account settings")}
                description={t("Quản lý các cài đặt và tùy chọn cho tài khoản của bạn.", "Manage settings and preferences for your account.")}
                footer={<Button size={globalSize}>{t("Lưu thay đổi", "Save changes")}</Button>}
                className="w-full"
              >
                <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
                  Settings form content goes here.
                </div>
              </CardPreset>
            </>
          } 
        />

        <ShowcaseExample 
          title={t("Không có Footer", "Without Footer")} 
          description={t("Bỏ qua prop footer để ẩn hoàn toàn phần chân trang.", "Omit the footer prop to hide the footer section completely.")} 
          code={t(`<CardPreset
    title="Tùy chọn thông báo"
    description="Chọn những thông tin mà bạn muốn nhận thông báo."
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
      Switches and toggles go here.
    </div>
  </CardPreset>`, `<CardPreset
    title="Notification preferences"
    description="Choose what information you want to be notified about."
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
      Switches and toggles go here.
    </div>
  </CardPreset>`)} 
          preview={
            <>
              <CardPreset
                size={globalSize}
                title={t("Tùy chọn thông báo", "Notification preferences")}
                description={t("Chọn những thông tin mà bạn muốn nhận thông báo.", "Choose what information you want to be notified about.")}
                className="w-full"
              >
                <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
                  Switches and toggles go here.
                </div>
              </CardPreset>
            </>
          } 
        />

        <ShowcaseExample 
          title="Custom Title Node" 
          description={t("Tiêu đề hỗ trợ nhận ReactNode thay vì string.", "Title supports ReactNode instead of just a string.")} 
          code={t(`<CardPreset
    title={
      <div className="flex items-center gap-2">
        <span>API Keys</span>
        <Badge color="warning">Experimental</Badge>
      </div>
    }
    description="Quản lý các khóa API bí mật của bạn."
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
      <span className="font-mono">sk_live_123...</span>
      <Button size="sm" variant="outline">
        Copy
      </Button>
    </div>
  </CardPreset>`, `<CardPreset
    title={
      <div className="flex items-center gap-2">
        <span>API Keys</span>
        <Badge color="warning">Experimental</Badge>
      </div>
    }
    description="Manage your secret API keys."
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
      <span className="font-mono">sk_live_123...</span>
      <Button size="sm" variant="outline">
        Copy
      </Button>
    </div>
  </CardPreset>`)} 
          preview={
            <>
              <CardPreset
                size={globalSize}
                title={
                  <div className="flex items-center gap-2">
                    <span>API Keys</span>
                    <Badge color="warning">Experimental</Badge>
                  </div>
                }
                description={t("Quản lý các khóa API bí mật của bạn.", "Manage your secret API keys.")}
                className="w-full"
              >
                <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50 flex items-center justify-between">
                  <span className="font-mono">sk_live_123...</span>
                  <Button size="sm" variant="outline">
                    Copy
                  </Button>
                </div>
              </CardPreset>
            </>
          } 
        />

        <ShowcaseExample 
          title={t("Với Form Controls", "With Form Controls")} 
          description={t("Sử dụng children để đặt input form bên trong nội dung.", "Use children to place a form inside the content.")} 
          code={t(`<CardPreset
    title="Cập nhật hồ sơ"
    description="Thay đổi tên hiển thị và email của bạn."
    footer={
      <div className="flex justify-between w-full">
        <Button variant="ghost">Huỷ</Button>
        <Button>Lưu</Button>
      </div>
    }
    className="w-full"
  >
    <div className="grid gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="macro-name">Name</Label>
        <Input
          id="macro-name"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="macro-email">Email</Label>
        <Input
          id="macro-email"
          type="email"
          placeholder="hello@example.com"
        />
      </div>
    </div>
  </CardPreset>`, `<CardPreset
    title="Update profile"
    description="Change your display name and email address."
    footer={
      <div className="flex justify-between w-full">
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </div>
    }
    className="w-full"
  >
    <div className="grid gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="macro-name">Name</Label>
        <Input
          id="macro-name"
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="macro-email">Email</Label>
        <Input
          id="macro-email"
          type="email"
          placeholder="hello@example.com"
        />
      </div>
    </div>
  </CardPreset>`)} 
          preview={
            <>
              <CardPreset
                size={globalSize}
                title={t("Cập nhật hồ sơ", "Update profile")}
                description={t("Thay đổi tên hiển thị và email của bạn.", "Change your display name and email address.")}
                footer={
                  <div className="flex justify-between w-full">
                    <Button variant="ghost" size={globalSize}>
                      {t("Huỷ", "Cancel")}
                    </Button>
                    <Button size={globalSize}>{t("Lưu", "Save")}</Button>
                  </div>
                }
                className="w-full"
              >
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="macro-name" size={globalSize}>Name</Label>
                    <Input id="macro-name" placeholder="Enter your name" size={globalSize} />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="macro-email" size={globalSize}>Email</Label>
                    <Input
                      id="macro-email"
                      type="email"
                      placeholder="hello@example.com"
                      size={globalSize}

                    />
                  </div>
                </div>
              </CardPreset>
            </>
          } 
        />
      </ExampleGrid>
    </div>
  );
}

function CardMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ShowcaseExample 
        title="Cơ bản (Standard)" 
        description={t("Lắp ráp thủ công từ CardHeader, CardTitle, CardContent, CardFooter.", "Manually assembled from CardHeader, CardTitle, CardContent, CardFooter.")} 
        code={t(`<Card className="w-full max-w-sm">
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
            <Input
              id="name"
              placeholder="Name of your project"
            />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Huỷ</Button>
      <Button>Triển khai</Button>
    </CardFooter>
  </Card>`, `<Card className="w-full max-w-sm">
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
            <Input
              id="name"
              placeholder="Name of your project"
            />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>`)} 
        preview={
          <>
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
                      <Label htmlFor="name" size={globalSize}>Name</Label>
                      <Input id="name" placeholder="Name of your project" size={globalSize} />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size={globalSize}>
                  {t("Huỷ", "Cancel")}
                </Button>
                <Button size={globalSize}>{t("Triển khai", "Deploy")}</Button>
              </CardFooter>
            </Card>
          </>
        } 
      />

      <ExampleGrid>
        <ShowcaseExample 
          title={t("Chỉ có nội dung (Content Only)", "Content Only")} 
          description={t("Dùng Card như một container bọc ngoài đơn giản.", "Use Card as a simple outer container.")} 
          code={t(`<Card className="w-full">
    <CardContent>
      <p className="text-sm text-muted-foreground pt-4 md:pt-6">
        Đây là một thẻ chỉ chứa nội dung, không có header hay footer.
        Hữu ích khi bạn chỉ cần một container có viền và background.
      </p>
    </CardContent>
  </Card>`, `<Card className="w-full">
    <CardContent>
      <p className="text-sm text-muted-foreground pt-4 md:pt-6">
        This is a simple content-only card without a header
        or footer. Useful for wrapping any content in a card
        container.
      </p>
    </CardContent>
  </Card>`)} 
          preview={
            <>
              <Card size={globalSize} className="w-full">
                <CardContent>
                  <p className="text-sm text-muted-foreground pt-4 md:pt-6">
                    {t(
                      "Đây là một thẻ chỉ chứa nội dung, không có header hay footer. Hữu ích khi bạn chỉ cần một container có viền và background.",
                      "This is a simple content-only card without a header or footer. Useful for wrapping any content in a card container."
                    )}
                  </p>
                </CardContent>
              </Card>
            </>
          } 
        />

        <ShowcaseExample 
          title={t("Header đặc chế", "Custom Header")} 
          description={t("Tích hợp menu góc phải mà Preset khó thực hiện.", "Integrates a right-side menu that Preset can't easily do.")} 
          code={t(`<Card className="w-full">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <CardTitle>Thông báo</CardTitle>
            <Badge color="secondary">3 mới</Badge>
          </div>
          <CardDescription>
            Bạn có 3 tin nhắn chưa đọc.
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconOnly
          className="h-8 w-8 rounded-full"
        >
          <span className="sr-only">Open menu</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </CardHeader>
  </Card>`, `<Card className="w-full">
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
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </CardHeader>
  </Card>`)} 
          preview={
            <>
              <Card size={globalSize} className="w-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <CardTitle>{t("Thông báo", "Notifications")}</CardTitle>
                        <Badge color="secondary">{t("3 mới", "3 new")}</Badge>
                      </div>
                      <CardDescription>{t("Bạn có 3 tin nhắn chưa đọc.", "You have 3 unread messages.")}</CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconOnly
                      className="h-8 w-8 rounded-full"
                    >
                      <span className="sr-only">Open menu</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                      >
                        <path
                          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </>
          } 
        />
      </ExampleGrid>

      <ShowcaseExample 
        title={t("Thẻ chỉ số KPI (Stats Cards)", "KPI Stats Cards")} 
        description={t("Thiết kế thẻ dashboard thông dụng trong thực tế.", "Common dashboard card design in practice.")} 
        code={t(`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Tổng doanh thu</CardDescription>
        <CardTitle className="text-3xl">
          $45,231.89
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          +20.1% so với tháng trước
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Lượt đăng ký</CardDescription>
        <CardTitle className="text-3xl">+2,350</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          +180.1% so với tháng trước
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Đang hoạt động</CardDescription>
        <CardTitle className="text-3xl">+573</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          +201 trong giờ qua
        </p>
      </CardContent>
    </Card>
  </div>`, `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-3xl">
          $45,231.89
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
    <Card>
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
    <Card>
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
  </div>`)} 
        preview={
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <Card size={globalSize}>
                <CardHeader className="pb-2">
                  <CardDescription>{t("Tổng doanh thu", "Total Revenue")}</CardDescription>
                  <CardTitle className="text-3xl">$45,231.89</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {t("+20.1% so với tháng trước", "+20.1% from last month")}
                  </p>
                </CardContent>
              </Card>
              <Card size={globalSize}>
                <CardHeader className="pb-2">
                  <CardDescription>{t("Lượt đăng ký", "Subscriptions")}</CardDescription>
                  <CardTitle className="text-3xl">+2,350</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {t("+180.1% so với tháng trước", "+180.1% from last month")}
                  </p>
                </CardContent>
              </Card>
              <Card size={globalSize}>
                <CardHeader className="pb-2">
                  <CardDescription>{t("Đang hoạt động", "Active Now")}</CardDescription>
                  <CardTitle className="text-3xl">+573</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {t("+201 trong giờ qua", "+201 since last hour")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        } 
      />
    </div>
  );
}

export default function CardShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  
  return (
    <Showcase
      title="Card"
      description={t("Thẻ hiển thị thông tin đóng gói có cấu trúc (tiêu đề, nội dung, footer).", "Displays information in a structured card format (title, content, footer).")}
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
      micro={{ content: <CardMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <CardMacroShowcase globalSize={globalSize} /> }}
    />
  );
}
