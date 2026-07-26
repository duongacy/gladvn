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
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function CardMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Card cài sẵn với đầy đủ tiêu đề, nội dung và chân trang."
          codeString={`<CardPreset
    title="Account Settings"
    description="Quản lý các cài đặt và tùy chọn cho tài khoản của bạn."
    footer={<Button>Save Changes</Button>}
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
      Settings form content goes here.
    </div>
  </CardPreset>`}
        >
          <CardPreset
            size={globalSize}
            title="Account Settings"
            description="Quản lý các cài đặt và tùy chọn cho tài khoản của bạn."
            footer={<Button size={globalSize}>Save Changes</Button>}
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Settings form content goes here.
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="Không có Footer"
          description="Bỏ qua prop footer để ẩn hoàn toàn phần chân trang."
          codeString={`<CardPreset
    title="Notification Preferences"
    description="Chọn những thông tin mà bạn muốn nhận thông báo."
    className="w-full"
  >
    <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
      Switches and toggles go here.
    </div>
  </CardPreset>`}
        >
          <CardPreset
            size={globalSize}
            title="Notification Preferences"
            description="Chọn những thông tin mà bạn muốn nhận thông báo."
            className="w-full"
          >
            <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg border border-dashed border-border/50">
              Switches and toggles go here.
            </div>
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="Custom Title Node"
          description="Tiêu đề hỗ trợ nhận ReactNode thay vì string."
          codeString={`<CardPreset
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
  </CardPreset>`}
        >
          <CardPreset
            size={globalSize}
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
          </CardPreset>
        </ExampleSection>

        <ExampleSection
          label="Với Form Controls"
          description="Sử dụng children để đặt input form bên trong nội dung."
          codeString={`<CardPreset
    title="Update Profile"
    description="Thay đổi tên hiển thị và email của bạn."
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
  </CardPreset>`}
        >
          <CardPreset
            size={globalSize}
            title="Update Profile"
            description="Thay đổi tên hiển thị và email của bạn."
            footer={
              <div className="flex justify-between w-full">
                <Button variant="ghost" size={globalSize}>
                  Cancel
                </Button>
                <Button size={globalSize}>Save</Button>
              </div>
            }
            className="w-full"
          >
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="macro-name">Name</Label>
                <Input id="macro-name" placeholder="Enter your name" />
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
          </CardPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

function CardMicroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Cơ bản (Standard)"
        description="Lắp ráp thủ công từ CardHeader, CardTitle, CardContent, CardFooter."
        codeString={`<Card className="w-full max-w-sm">
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
  </Card>`}
      >
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
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size={globalSize}>
              Cancel
            </Button>
            <Button size={globalSize}>Deploy</Button>
          </CardFooter>
        </Card>
      </ExampleSection>

      <ExampleGrid>
        <ExampleSection
          label="Chỉ có nội dung (Content Only)"
          description="Dùng Card như một container bọc ngoài đơn giản."
          codeString={`<Card className="w-full">
    <CardContent>
      <p className="text-sm text-muted-foreground pt-4 md:pt-6">
        This is a simple content-only card without a header
        or footer. Useful for wrapping any content in a card
        container.
      </p>
    </CardContent>
  </Card>`}
        >
          <Card size={globalSize} className="w-full">
            <CardContent>
              <p className="text-sm text-muted-foreground pt-4 md:pt-6">
                This is a simple content-only card without a header or footer.
                Useful for wrapping any content in a card container.
              </p>
            </CardContent>
          </Card>
        </ExampleSection>

        <ExampleSection
          label="Header đặc chế"
          description="Tích hợp menu góc phải mà Preset khó thực hiện."
          codeString={`<Card className="w-full">
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
  </Card>`}
        >
          <Card size={globalSize} className="w-full">
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
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Thẻ chỉ số KPI (Stats Cards)"
        description="Thiết kế thẻ dashboard thông dụng trong thực tế."
        fullWidth
        codeString={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
  </div>`}
      >
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
      </ExampleSection>
    </div>
  );
}

export default function CardShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Card"
      description="Thẻ hiển thị thông tin đóng gói có cấu trúc (tiêu đề, nội dung, footer)."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Dùng để nhóm các thông tin liên quan lại với nhau trong một
            container có cấu trúc rõ ràng. Thường được sử dụng để hiển thị các
            mục dữ liệu, dashboard, hoặc các form nhỏ.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <CardMicroShowcase globalSize={globalSize} /> },
        {
          label: "Macro (Preset)",
          content: <CardMacroShowcase globalSize={globalSize} /> },
      ]}
    />
  );
}
