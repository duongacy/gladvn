import { BellIcon, CreditCardIcon, UserIcon } from "lucide-react";

import { TabsPreset } from "../../components/macro/tabs-preset";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/micro/tabs";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";

// ──────────────────────────────────────────────────────────
// SECTION 1: Macro Content
// ──────────────────────────────────────────────────────────
function TabsMacroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Tiêu chuẩn (Standard)"
          description="Tabs cơ bản truyền qua mảng items."
          codeString={`<TabsPreset
    defaultValue="account"
    className="w-full"
    items={[
      {
        value: "account",
        title: "Account",
        content: (
          <div className="rounded-xl border border-border bg-card p-4 mt-2">
            <h4 className="font-medium">Account</h4>
            <p className="text-sm text-muted-foreground">
              Account settings here.
            </p>
          </div>
        ),
      },
      {
        value: "password",
        title: "Password",
        content: (
          <div className="rounded-xl border border-border bg-card p-4 mt-2">
            <h4 className="font-medium">Password</h4>
            <p className="text-sm text-muted-foreground">
              Change your password here.
            </p>
          </div>
        ),
      },
    ]}
  />`}
        >
          <TabsPreset
            defaultValue="account"
            className="w-full"
            items={[
              {
                value: "account",
                title: "Account",
                content: (
                  <div className="rounded-xl border border-border bg-card p-4 mt-2">
                    <h4 className="font-medium">Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Account settings here.
                    </p>
                  </div>
                ),
              },
              {
                value: "password",
                title: "Password",
                content: (
                  <div className="rounded-xl border border-border bg-card p-4 mt-2">
                    <h4 className="font-medium">Password</h4>
                    <p className="text-sm text-muted-foreground">
                      Change your password here.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </ExampleSection>

        <ExampleSection
          label="Tab bị vô hiệu hóa (Disabled Tab)"
          description="Tab không thể tương tác do thuộc tính disabled."
          codeString={`<TabsPreset
    defaultValue="general"
    className="w-full"
    items={[
      {
        value: "general",
        title: "General",
        content: (
          <div className="rounded-xl border border-border bg-card p-4 mt-2">
            <h4 className="font-medium">General</h4>
            <p className="text-sm text-muted-foreground">
              General settings.
            </p>
          </div>
        ),
      },
      {
        value: "advanced",
        title: "Advanced (Pro)",
        content: <></>,
        disabled: true,
      },
    ]}
  />`}
        >
          <TabsPreset
            defaultValue="general"
            className="w-full"
            items={[
              {
                value: "general",
                title: "General",
                content: (
                  <div className="rounded-xl border border-border bg-card p-4 mt-2">
                    <h4 className="font-medium">General</h4>
                    <p className="text-sm text-muted-foreground">
                      General settings.
                    </p>
                  </div>
                ),
              },
              {
                value: "advanced",
                title: "Advanced (Pro)",
                content: <></>,
                disabled: true,
              },
            ]}
          />
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Dạng đường viền (Line Variant)"
        description="Sử dụng prop variant='line' để hiển thị tabs kiểu gạch chân (phong cách thanh điều hướng)."
        fullWidth
        codeString={`<div className="max-w-lg">
    <TabsPreset
      defaultValue="overview"
      variant="line"
      listClassName="w-full justify-start border-b border-b-border rounded-none px-0"
      className="w-full"
      items={[
        {
          value: "overview",
          title: "Overview",
          content: (
            <div className="pt-4">
              <h4 className="font-medium">Overview</h4>
              <p className="text-sm text-muted-foreground">
                High-level project statistics and activity
                feed.
              </p>
            </div>
          ),
        },
        {
          value: "analytics",
          title: "Analytics",
          content: (
            <div className="pt-4">
              <h4 className="font-medium">Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Charts and data visualizations.
              </p>
            </div>
          ),
        },
        {
          value: "reports",
          title: "Reports",
          content: (
            <div className="pt-4">
              <h4 className="font-medium">Reports</h4>
              <p className="text-sm text-muted-foreground">
                Generated reports and exports.
              </p>
            </div>
          ),
        },
      ]}
    />
  </div>`}
      >
        <div className="max-w-lg">
          <TabsPreset
            defaultValue="overview"
            variant="line"
            listClassName="w-full justify-start border-b border-b-border rounded-none px-0"
            className="w-full"
            items={[
              {
                value: "overview",
                title: "Overview",
                content: (
                  <div className="pt-4">
                    <h4 className="font-medium">Overview</h4>
                    <p className="text-sm text-muted-foreground">
                      High-level project statistics and activity feed.
                    </p>
                  </div>
                ),
              },
              {
                value: "analytics",
                title: "Analytics",
                content: (
                  <div className="pt-4">
                    <h4 className="font-medium">Analytics</h4>
                    <p className="text-sm text-muted-foreground">
                      Charts and data visualizations.
                    </p>
                  </div>
                ),
              },
              {
                value: "reports",
                title: "Reports",
                content: (
                  <div className="pt-4">
                    <h4 className="font-medium">Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      Generated reports and exports.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </ExampleSection>

      <ExampleSection
        label="Nội dung phức tạp (Complex Content)"
        description="Hiển thị các component phức tạp như form bên trong nội dung tab."
        fullWidth
        codeString={`<div className="max-w-lg">
    <TabsPreset
      defaultValue="login"
      className="w-full"
      items={[
        {
          value: "login",
          title: "Login",
          content: (
            <div className="rounded-xl border border-border bg-card p-6 mt-2 flex flex-col gap-4">
              <div className="text-lg font-semibold">
                Welcome Back
              </div>
              <div className="h-10 w-full bg-muted rounded-md" />
              <div className="h-10 w-full bg-muted rounded-md" />
              <button className="bg-primary text-primary-foreground h-10 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
          ),
        },
        {
          value: "register",
          title: "Register",
          content: (
            <div className="rounded-xl border border-border bg-card p-6 mt-2 flex flex-col gap-4">
              <div className="text-lg font-semibold">
                Create Account
              </div>
              <div className="h-10 w-full bg-muted rounded-md" />
              <div className="h-10 w-full bg-muted rounded-md" />
              <div className="h-10 w-full bg-muted rounded-md" />
              <button className="bg-primary text-primary-foreground h-10 rounded-md text-sm font-medium">
                Sign Up
              </button>
            </div>
          ),
        },
      ]}
    />
  </div>`}
      >
        <div className="max-w-lg">
          <TabsPreset
            defaultValue="login"
            className="w-full"
            items={[
              {
                value: "login",
                title: "Login",
                content: (
                  <div className="rounded-xl border border-border bg-card p-6 mt-2 flex flex-col gap-4">
                    <div className="text-lg font-semibold">Welcome Back</div>
                    <div className="h-10 w-full bg-muted rounded-md" />
                    <div className="h-10 w-full bg-muted rounded-md" />
                    <button className="bg-primary text-primary-foreground h-10 rounded-md text-sm font-medium">
                      Sign In
                    </button>
                  </div>
                ),
              },
              {
                value: "register",
                title: "Register",
                content: (
                  <div className="rounded-xl border border-border bg-card p-6 mt-2 flex flex-col gap-4">
                    <div className="text-lg font-semibold">Create Account</div>
                    <div className="h-10 w-full bg-muted rounded-md" />
                    <div className="h-10 w-full bg-muted rounded-md" />
                    <div className="h-10 w-full bg-muted rounded-md" />
                    <button className="bg-primary text-primary-foreground h-10 rounded-md text-sm font-medium">
                      Sign Up
                    </button>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content
// ──────────────────────────────────────────────────────────
function TabsMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Cơ bản (Default)"
          description="Tabs nguyên thuỷ lắp ráp thủ công."
          codeString={`<Tabs defaultValue="account" className="w-full">
    <TabsList className="w-full">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="rounded-xl border border-border bg-card p-4 mt-2">
        <h4 className="font-medium">Account</h4>
        <p className="text-sm text-muted-foreground">
          Make changes to your account here.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="rounded-xl border border-border bg-card p-4 mt-2">
        <h4 className="font-medium">Password</h4>
        <p className="text-sm text-muted-foreground">
          Change your password here.
        </p>
      </div>
    </TabsContent>
  </Tabs>`}
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="rounded-xl border border-border bg-card p-4 mt-2">
                <h4 className="font-medium">Account</h4>
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="rounded-xl border border-border bg-card p-4 mt-2">
                <h4 className="font-medium">Password</h4>
                <p className="text-sm text-muted-foreground">
                  Change your password here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          label="Kèm Icon (With Icons)"
          description="Thêm icon tuỳ chỉnh vào bên trong Tab Trigger."
          codeString={`<Tabs defaultValue="profile" className="w-full">
    <TabsList className="w-full">
      <TabsTrigger value="profile">
        <UserIcon data-icon="inline-start" />
        Profile
      </TabsTrigger>
      <TabsTrigger value="notifications">
        <BellIcon data-icon="inline-start" />
        Notifications
      </TabsTrigger>
    </TabsList>
    <TabsContent value="profile">
      <div className="rounded-xl border border-border bg-card p-4 mt-2">
        <h4 className="font-medium">Profile</h4>
        <p className="text-sm text-muted-foreground">
          Update your name, avatar and bio.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="notifications">
      <div className="rounded-xl border border-border bg-card p-4 mt-2">
        <h4 className="font-medium">Notifications</h4>
        <p className="text-sm text-muted-foreground">
          Choose what notifications you receive.
        </p>
      </div>
    </TabsContent>
  </Tabs>`}
        >
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="profile">
                <UserIcon data-icon="inline-start" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <BellIcon data-icon="inline-start" />
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="rounded-xl border border-border bg-card p-4 mt-2">
                <h4 className="font-medium">Profile</h4>
                <p className="text-sm text-muted-foreground">
                  Update your name, avatar and bio.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="rounded-xl border border-border bg-card p-4 mt-2">
                <h4 className="font-medium">Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Choose what notifications you receive.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Dạng đường viền (Line Variant)"
        description="Tabs có kiểu gạch chân (không nền)."
        fullWidth
        codeString={`<Tabs defaultValue="music" className="w-full max-w-lg">
    <TabsList
      variant="line"
      className="w-full justify-start border-b border-b-border rounded-none px-0"
    >
      <TabsTrigger value="music">Music</TabsTrigger>
      <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
      <TabsTrigger value="live">Live</TabsTrigger>
    </TabsList>
    <TabsContent value="music">
      <div className="pt-4">
        <h4 className="font-medium">Music Library</h4>
        <p className="text-sm text-muted-foreground">
          Your top played songs and albums.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="podcasts">
      <div className="pt-4">
        <h4 className="font-medium">Podcasts</h4>
        <p className="text-sm text-muted-foreground">
          Episodes from your subscriptions.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="live">
      <div className="pt-4">
        <h4 className="font-medium">Live Radio</h4>
        <p className="text-sm text-muted-foreground">
          Tune in to live broadcasts.
        </p>
      </div>
    </TabsContent>
  </Tabs>`}
      >
        <Tabs defaultValue="music" className="w-full max-w-lg">
          <TabsList
            variant="line"
            className="w-full justify-start border-b border-b-border rounded-none px-0"
          >
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
          </TabsList>
          <TabsContent value="music">
            <div className="pt-4">
              <h4 className="font-medium">Music Library</h4>
              <p className="text-sm text-muted-foreground">
                Your top played songs and albums.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="podcasts">
            <div className="pt-4">
              <h4 className="font-medium">Podcasts</h4>
              <p className="text-sm text-muted-foreground">
                Episodes from your subscriptions.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="live">
            <div className="pt-4">
              <h4 className="font-medium">Live Radio</h4>
              <p className="text-sm text-muted-foreground">
                Tune in to live broadcasts.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ExampleSection>

      <ExampleSection
        label="Xếp dọc (Vertical Orientation)"
        description="Sắp xếp danh sách tab theo chiều dọc bên trái và nội dung bên phải."
        fullWidth
        codeString={`<Tabs
    defaultValue="profile"
    orientation="vertical"
    className="w-full max-w-xl"
  >
    <TabsList className="w-40 shrink-0">
      <TabsTrigger value="profile">
        <UserIcon data-icon="inline-start" />
        Profile
      </TabsTrigger>
      <TabsTrigger value="notifications">
        <BellIcon data-icon="inline-start" />
        Notifications
      </TabsTrigger>
      <TabsTrigger value="billing">
        <CreditCardIcon data-icon="inline-start" />
        Billing
      </TabsTrigger>
    </TabsList>
    <TabsContent value="profile">
      <div className="rounded-xl border border-border bg-card p-4">
        <h4 className="font-medium">Profile</h4>
        <p className="text-sm text-muted-foreground">
          Update your personal information and manage your
          public profile.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="notifications">
      <div className="rounded-xl border border-border bg-card p-4">
        <h4 className="font-medium">Notifications</h4>
        <p className="text-sm text-muted-foreground">
          Choose what notifications you receive and how.
        </p>
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="rounded-xl border border-border bg-card p-4">
        <h4 className="font-medium">Billing</h4>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and payment methods.
        </p>
      </div>
    </TabsContent>
  </Tabs>`}
      >
        <Tabs
          defaultValue="profile"
          orientation="vertical"
          className="w-full max-w-xl"
        >
          <TabsList className="w-40 shrink-0">
            <TabsTrigger value="profile">
              <UserIcon data-icon="inline-start" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <BellIcon data-icon="inline-start" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="billing">
              <CreditCardIcon data-icon="inline-start" />
              Billing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <div className="rounded-xl border border-border bg-card p-4">
              <h4 className="font-medium">Profile</h4>
              <p className="text-sm text-muted-foreground">
                Update your personal information and manage your public profile.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="notifications">
            <div className="rounded-xl border border-border bg-card p-4">
              <h4 className="font-medium">Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Choose what notifications you receive and how.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="billing">
            <div className="rounded-xl border border-border bg-card p-4">
              <h4 className="font-medium">Billing</h4>
              <p className="text-sm text-muted-foreground">
                Manage your subscription and payment methods.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point
// ──────────────────────────────────────────────────────────
export default function TabsShowcase() {
  return (
    <Showcase
      title="Tabs"
      description="Tập hợp các tab panel được hiển thị lần lượt, chuyển đổi khi click vào tab tương ứng."
      generalConcept={
        <div className="space-y-4">
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Macro</DocsH3>
            <DocsP>
              <DocsCode>TabsPreset</DocsCode> là một component đóng gói sẵn,
              nhận vào mảng <DocsCode>items</DocsCode> chứa thông tin cấu hình
              của các tabs (value, title, content, disabled, ...). Thích hợp cho
              các tab đơn giản, render từ dữ liệu cấu hình có sẵn.
            </DocsP>
          </ShowcaseDocs>
          <ShowcaseDocs>
            <DocsH3>Khi nào nên dùng Micro</DocsH3>
            <DocsP>
              Dùng <DocsCode>Tabs</DocsCode> và các thành phần con (
              <DocsCode>TabsList</DocsCode>, <DocsCode>TabsTrigger</DocsCode>,{" "}
              <DocsCode>TabsContent</DocsCode>) khi bạn muốn tự kiểm soát cấu
              trúc HTML, muốn đính kèm Icon vào Trigger, hoặc xây dựng các dạng
              Tab không theo khuôn mẫu (ví dụ: đặt List dọc, List rời rạc).
            </DocsP>
          </ShowcaseDocs>
        </div>
      }
      tabs={[
        { label: "Micro (Primitive)", content: <TabsMicroShowcase /> },
        { label: "Macro (Preset)", content: <TabsMacroShowcase /> },
      ]}
    />
  );
}
