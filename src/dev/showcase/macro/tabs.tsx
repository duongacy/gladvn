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
        description="A preset component that renders a complete tab view from an array."
      />

      <ExampleGrid columns={1}>
        <ExampleSection label="Standard" description="Basic tabs.">
          <div className="w-full max-w-lg">
            <TabsPreset
              defaultValue="account"
              items={[
                { value: "account", title: "Account", content: <div className="p-4 border rounded-md mt-2">Account settings here.</div> },
                { value: "password", title: "Password", content: <div className="p-4 border rounded-md mt-2">Change your password here.</div> },
              ]}
            />
          </div>
        </ExampleSection>

        <ExampleSection label="With Disabled Tab" description="A tab that cannot be interacted with.">
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

        <ExampleSection label="Complex Content" description="Rendering complex components like forms inside tab content.">
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
