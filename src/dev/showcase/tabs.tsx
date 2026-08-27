import React from "react";
import { BellIcon, CreditCardIcon, UserIcon } from "lucide-react";

import { TabsPreset } from "../../components/macro/tabs-preset";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/micro/tabs";
import { useI18n } from "../components/dev-context";
import { ConfigurableShowcase } from "../components/showcase";

function useTabsExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Tabs cơ bản truyền qua mảng items.",
          "Basic tabs passed through items array."
        ),
        macroCode: `<TabsPreset
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
      )
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
      )
    },
  ]}
/>`,
        macroPreview: (
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
        ),
        microCode: `<Tabs defaultValue="account" className="w-full">
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
</Tabs>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Tab bị vô hiệu hóa", "Disabled Tab"),
        description: t(
          "Tab không thể tương tác do thuộc tính disabled.",
          "Non-interactive tab due to disabled attribute."
        ),
        macroCode: `<TabsPreset
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
      )
    },
    {
      value: "advanced",
      title: "Advanced (Pro)",
      content: <></>,
      disabled: true
    },
  ]}
/>`,
        macroPreview: (
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
        ),
      },
      {
        title: t("Dạng đường viền", "Line Variant"),
        description: t(
          "Sử dụng prop variant='line' để hiển thị tabs kiểu gạch chân (phong cách thanh điều hướng).",
          "Use variant='line' prop to display underlined tabs (navigation bar style)."
        ),
        macroCode: `<div className="max-w-lg">
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
        )
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
        )
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
        )
      },
    ]}
  />
</div>`,
        macroPreview: (
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
        ),
        microCode: `<Tabs defaultValue="music" className="w-full max-w-lg">
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
</Tabs>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Nội dung phức tạp", "Complex Content"),
        description: t(
          "Hiển thị các component phức tạp như form bên trong nội dung tab.",
          "Display complex components like forms inside tab content."
        ),
        macroCode: `<div className="max-w-lg">
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
        )
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
        )
      },
    ]}
  />
</div>`,
        macroPreview: (
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
          </div>
        ),
      },
      {
        title: t("Kèm Icon", "With Icons"),
        description: t(
          "Thêm icon tuỳ chỉnh vào bên trong Tab Trigger.",
          "Add custom icons inside Tab Trigger."
        ),
        microCode: `<Tabs defaultValue="profile" className="w-full">
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
</Tabs>`,
        microPreview: (
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
        ),
      },
      {
        title: t("Xếp dọc", "Vertical Orientation"),
        description: t(
          "Sắp xếp danh sách tab theo chiều dọc bên trái và nội dung bên phải.",
          "Arrange the tab list vertically on the left and content on the right."
        ),
        microCode: `<Tabs
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
</Tabs>`,
        microPreview: (
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
                  Update your personal information and manage your public
                  profile.
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
        ),
      },
    ],
    [t]
  );
}

export default function TabsShowcase() {
  const t = useI18n();
  const examples = useTabsExamples();

  return (
    <ConfigurableShowcase
      title="Tabs"
      description={t(
        "Tập hợp các tab panel được hiển thị lần lượt, chuyển đổi khi click vào tab tương ứng.",
        "A set of tab panels that are displayed one at a time, switching when the corresponding tab is clicked."
      )}
      examples={examples}
    />
  );
}
