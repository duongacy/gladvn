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
        description="Thành phần đặt trước hiển thị chế độ xem tab hoàn chỉnh từ một mảng."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Các tab cơ bản">
          <div className="w-full max-w-lg">
            <TabsPreset
              defaultValue="account"
              items={[
                { value: "account", title: "Account", content: <div className="p-4 border rounded-md mt-2">Account settings here.</div> },
                { value: "password", title: "Mật khẩu", content: <div className="p-4 border rounded-md mt-2">Change your password here.</div> },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="With Disabled Tab" description="Một tab không thể tương tác được.">
          <div className="w-full max-w-lg">
            <TabsPreset
              defaultValue="general"
              items={[
                { value: "general", title: "General", content: <div className="p-4 border rounded-md mt-2">General settings.</div> },
                { value: "advanced", title: "Advanced (Pro Only)", content: <></>, disabled: true },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="Complex Content" description="Hiển thị các thành phần phức tạp như biểu mẫu bên trong nội dung tab.">
          <div className="w-full max-w-lg">
            <TabsPreset
              defaultValue="login"
              items={[
                { 
                  value: "login", 
                  title: "Login", 
                  content: (
                    <div className="p-6 border rounded-md mt-2 flex flex-col gap-4">
                      <div className="text-lg font-semibold">Welcome Back</div>
                      <div className="h-10 w-full bg-muted rounded"></div>
                      <div className="h-10 w-full bg-muted rounded"></div>
                      <button className="bg-primary text-primary-foreground h-10 rounded">Sign In</button>
                    </div>
                  ) 
                },
                { 
                  value: "register", 
                  title: "Register", 
                  content: (
                    <div className="p-6 border rounded-md mt-2 flex flex-col gap-4">
                      <div className="text-lg font-semibold">Create Account</div>
                      <div className="h-10 w-full bg-muted rounded"></div>
                      <button className="bg-primary text-primary-foreground h-10 rounded">Sign Up</button>
                    </div>
                  ) 
                },
              ]}
            />
          </div>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
