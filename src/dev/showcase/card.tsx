import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label, MonoSelect, Badge } from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";

export default function CardShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader title="Card" description="Displays a card with header, content, and footer.">
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      {/* ── Standard Card ── */}
      <ExampleSection label="Standard Card" description="Complete card with header, content and footer.">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
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
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Content Only ── */}
        <ExampleSection label="Content Only" description="Minimal card without header or footer.">
          <Card className="w-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                This is a simple content-only card without a header or footer. Useful for wrapping any content in a card container.
              </p>
            </CardContent>
          </Card>
        </ExampleSection>

        {/* ── Header Only ── */}
        <ExampleSection label="Header Only" description="Card with just a title and description.">
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Notifications</CardTitle>
                <Badge variant="secondary">3 new</Badge>
              </div>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
          </Card>
        </ExampleSection>
      </ExampleGrid>

      {/* ── Stats Cards ── */}
      <ExampleSection label="Stats Cards" description="Real-world metric/KPI card layout.">
        <ExampleGrid columns={3}>
          {[
            { title: "Total Revenue", value: "$45,231.89", desc: "+20.1% from last month" },
            { title: "Subscriptions", value: "+2,350", desc: "+180.1% from last month" },
            { title: "Active Now", value: "+573", desc: "+201 since last hour" },
          ].map((stat) => (
            <Card key={stat.title} className="w-full">
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </ExampleGrid>
      </ExampleSection>
    </div>
  );
}
