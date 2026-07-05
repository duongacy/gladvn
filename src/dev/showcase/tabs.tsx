import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/micro/tabs";
import { SettingsIcon, UserIcon, BellIcon, CreditCardIcon } from "lucide-react";

export default function TabsShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Tabs"
        description="Một tập hợp các phần nội dung được xếp lớp—được gọi là bảng tab—được hiển thị lần lượt."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Default"
          description="Tabs cơ bản với mặc định."
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Account</h4>
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Password</h4>
                <p className="text-sm text-muted-foreground">
                  Change your password here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          label="Disabled Tab"
          description="Một hoặc nhiều tab bị vô hiệu hoá."
        >
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="advanced" disabled>
                Advanced
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">General Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Manage your general preferences.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="security">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Security Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Configure two-factor authentication.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Line Variant"
        description="Tabs có kiểu gạch chân thay vì nền."
        fullWidth
      >
        <div className="max-w-lg">
          <Tabs defaultValue="music" className="w-full">
            <TabsList
              variant="line"
              className="w-full justify-start border-b rounded-none px-0"
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
        </div>
      </ExampleSection>

      <ExampleSection
        label="With Icons"
        description="Tabs kết hợp biểu tượng và nhãn."
        fullWidth
      >
        <div className="max-w-lg">
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
              <TabsTrigger value="settings">
                <SettingsIcon data-icon="inline-start" />
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Profile</h4>
                <p className="text-sm text-muted-foreground">
                  Update your name, avatar and bio.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Choose what notifications you receive.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Configure your app preferences.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ExampleSection>

      <ExampleSection
        label="Vertical Orientation"
        description="Tabs xếp dọc với nội dung bên phải."
        fullWidth
      >
        <div className="max-w-xl">
          <Tabs
            defaultValue="profile"
            orientation="vertical"
            className="w-full"
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
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Profile</h4>
                <p className="text-sm text-muted-foreground">
                  Update your personal information and manage your public
                  profile.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Notifications</h4>
                <p className="text-sm text-muted-foreground">
                  Choose what notifications you receive and how.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="billing">
              <div className="rounded-xl border bg-card p-4">
                <h4 className="font-medium">Billing</h4>
                <p className="text-sm text-muted-foreground">
                  Manage your subscription and payment methods.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ExampleSection>
    </div>
  );
}
