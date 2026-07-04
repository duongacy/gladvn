import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/micro/card";
import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { Badge } from "@/components/micro/badge";
import { SelectPreset } from "@/components/macro/select-preset";

export default function CardShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Card"
        description="Displays a card with header, content, and footer."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      {/* ── Standard Card ── */}
      <ExampleSection
        label="Standard Card"
        description="Complete card with header, content and footer."
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
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ExampleSection>

      <ExampleGrid columns={2}>
        {/* ── Content Only ── */}
        <ExampleSection
          label="Content Only"
          description="Minimal card without header or footer."
        >
          <Card size={globalSize} className="w-full">
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a simple content-only card without a header or footer.
                Useful for wrapping any content in a card container.
              </p>
            </CardContent>
          </Card>
        </ExampleSection>

        {/* ── Header Only ── */}
        <ExampleSection
          label="Header Only"
          description="Card with just a title and description."
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
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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

      {/* ── Stats Cards ── */}
      <ExampleSection
        label="Stats Cards"
        description="Real-world metric/KPI card layout."
        fullWidth
      >
        <ExampleGrid columns={3} className="w-full">
          {[
            {
              title: "Total Revenue",
              value: "$45,231.89",
              desc: "+20.1% from last month",
            },
            {
              title: "Subscriptions",
              value: "+2,350",
              desc: "+180.1% from last month",
            },
            {
              title: "Active Now",
              value: "+573",
              desc: "+201 since last hour",
            },
          ].map((stat) => (
            <Card key={stat.title} size={globalSize}>
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
