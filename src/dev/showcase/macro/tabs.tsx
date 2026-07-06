import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { TabsPreset } from "@/components/macro/tabs-preset";

export default function MacroTabsShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Tabs (Macro)"
        description="Thành phần preset hiển thị chế độ xem tab hoàn chỉnh từ một mảng items."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Standard"
          description="Tabs cơ bản từ mảng items."
          codeString={`<TabsPreset
  defaultValue="account"
  className="w-full"
  items={[
    {
      value: "account",
      title: "Account",
      content: (
        <div className="rounded-xl border bg-card p-4 mt-2">
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
        <div className="rounded-xl border bg-card p-4 mt-2">
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
                  <div className="rounded-xl border bg-card p-4 mt-2">
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
                  <div className="rounded-xl border bg-card p-4 mt-2">
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
          label="With Disabled Tab"
          description="Một tab không thể tương tác."
          codeString={`<TabsPreset
  defaultValue="general"
  className="w-full"
  items={[
    {
      value: "general",
      title: "General",
      content: (
        <div className="rounded-xl border bg-card p-4 mt-2">
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
                  <div className="rounded-xl border bg-card p-4 mt-2">
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
        label="Line Variant"
        description="Sử dụng prop variant='line' để hiển thị tabs kiểu gạch chân."
        fullWidth
        codeString={`<TabsPreset
  defaultValue="overview"
  variant="line"
  listClassName="w-full justify-start border-b rounded-none px-0"
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
/>`}
      >
        <div className="max-w-lg">
          <TabsPreset
            defaultValue="overview"
            variant="line"
            listClassName="w-full justify-start border-b rounded-none px-0"
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
        label="Complex Content"
        description="Hiển thị các thành phần phức tạp như biểu mẫu bên trong nội dung tab."
        fullWidth
        codeString={`<TabsPreset
  defaultValue="login"
  className="w-full"
  items={[
    {
      value: "login",
      title: "Login",
      content: (
        <div className="rounded-xl border bg-card p-6 mt-2 flex flex-col gap-4">
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
        <div className="rounded-xl border bg-card p-6 mt-2 flex flex-col gap-4">
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
/>`}
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
                  <div className="rounded-xl border bg-card p-6 mt-2 flex flex-col gap-4">
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
                  <div className="rounded-xl border bg-card p-6 mt-2 flex flex-col gap-4">
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
