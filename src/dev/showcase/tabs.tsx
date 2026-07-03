import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/micro/tabs";

export default function TabsShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Tabs"
        description="A set of layered sections of content—known as tab panels—that are displayed one at a time."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Default"
          description="Switch between account and password tabs."
        >
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="rounded-xl border bg-card p-6 mt-4">
                <h4 className="font-medium">Account</h4>
                <p className="text-sm text-muted-foreground">
                  Make changes to your account here.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="rounded-xl border bg-card p-6 mt-4">
                <h4 className="font-medium">Password</h4>
                <p className="text-sm text-muted-foreground">
                  Change your password here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ExampleSection>

        <ExampleSection
          label="Line Variant"
          description="Tabs with an underline style."
        >
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
              <div className="p-4 pt-6">
                <h4 className="font-medium">Music Library</h4>
                <p className="text-sm text-muted-foreground">
                  Your top played songs and albums.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="podcasts">
              <div className="p-4 pt-6">
                <h4 className="font-medium">Podcasts</h4>
                <p className="text-sm text-muted-foreground">
                  Episodes from your subscriptions.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="live">
              <div className="p-4 pt-6">
                <h4 className="font-medium">Live Radio</h4>
                <p className="text-sm text-muted-foreground">
                  Tune in to live broadcasts.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
