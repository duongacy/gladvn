import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "../../index"
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function TabsShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Tabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time." />

      <ExampleSection label="Default" description="Switch between account and password tabs.">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="rounded-xl border bg-card p-6">
              <h4 className="font-medium">Account</h4>
              <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="rounded-xl border bg-card p-6">
              <h4 className="font-medium">Password</h4>
              <p className="text-sm text-muted-foreground">Change your password here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </ExampleSection>
    </div>
  );
}
