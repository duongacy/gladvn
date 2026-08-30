import React from "react";
import { CardPreset } from "@/components/macro/card-preset";
import { Button } from "@/components/micro/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/micro/card";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";

function useCardExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      // 1. Macro mẫu mực đầy đủ props + Micro giải phẫu
      {
        title: t("Tiêu chuẩn", "Standard"),
        description: t(
          "Card với tiêu đề, mô tả, nội dung và footer.",
          "Card with title, description, content, and footer."
        ),
        macroCode: `<CardPreset
  title="Account settings"
  description="Manage settings and preferences for your account."
  footer={<Button>Save changes</Button>}
>
  <div className="grid gap-4">
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="hello@example.com" />
    </div>
  </div>
</CardPreset>`,
        macroPreview: (
          <CardPreset
            size={globalSize}
            title="Account settings"
            description="Manage settings and preferences for your account."
            footer={<Button size={globalSize}>Save changes</Button>}
          >
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" size={globalSize}>Name</Label>
                <Input id="name" placeholder="Enter your name" size={globalSize} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" size={globalSize}>Email</Label>
                <Input id="email" type="email" placeholder="hello@example.com" size={globalSize} />
              </div>
            </div>
          </CardPreset>
        ),
        microCode: `<div className="@container/card size-full">
  <Card className="size-full">
    <CardHeader>
      <CardTitle>Account settings</CardTitle>
      <CardDescription>
        Manage settings and preferences for your account.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="hello@example.com" />
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save changes</Button>
    </CardFooter>
  </Card>
</div>`,
      },

      // 2. Micro-only — Header tuỳ biến phức tạp (Macro gạch ngang)
      {
        title: t("Header tuỳ biến", "Custom Header"),
        description: t(
          "Bố trí badge, nút action và layout tuỳ biến bên trong Header.",
          "Compose badges, action buttons, and custom layouts inside the Header."
        ),
        microCode: `<Card>
  <CardHeader className="border-b border-border bg-muted/40">
    <CardTitle>Team Members</CardTitle>
    <CardDescription>Manage your team and permissions.</CardDescription>
  </CardHeader>
  <CardContent className="divide-y divide-border">
    <div className="flex items-center gap-3 py-3">
      <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold">JD</div>
      <div>
        <p className="text-sm font-medium">Jane Doe</p>
        <p className="text-xs text-muted-foreground">Admin</p>
      </div>
    </div>
    <div className="flex items-center gap-3 py-3">
      <div className="flex size-8 items-center justify-center rounded-full bg-secondary/40 text-xs font-bold">TN</div>
      <div>
        <p className="text-sm font-medium">Trung Nguyen</p>
        <p className="text-xs text-muted-foreground">Editor</p>
      </div>
    </div>
  </CardContent>
</Card>`,
        microPreview: (
          <Card size={globalSize}>
            <CardHeader className="border-b border-border bg-muted/40">
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team and permissions.</CardDescription>
            </CardHeader>
            <CardContent className="divide-y divide-border">
              <div className="flex items-center gap-3 py-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold">JD</div>
                <div>
                  <p className="text-sm font-medium">Jane Doe</p>
                  <p className="text-xs text-muted-foreground">Admin</p>
                </div>
              </div>
              <div className="flex items-center gap-3 py-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-secondary/40 text-xs font-bold">TN</div>
                <div>
                  <p className="text-sm font-medium">Trung Nguyen</p>
                  <p className="text-xs text-muted-foreground">Editor</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ),
      },

      // 3. Micro-only — full-bleed content với p-0 trên CardContent (Macro gạch ngang)
      {
        title: t("Nội dung full-bleed", "Full-bleed Content"),
        description: t(
          "Danh sách không có padding bên trong card.",
          "A borderless list inside a card without inner padding."
        ),
        microCode: `<Card>
  <CardHeader>
    <CardTitle>Recent Activity</CardTitle>
    <CardDescription>Last 24 hours</CardDescription>
  </CardHeader>
  <CardContent className="p-0">
    <div className="divide-y divide-border">
      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-sm">New signups</span>
        <span className="text-sm font-semibold">+24</span>
      </div>
      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-sm">Revenue</span>
        <span className="text-sm font-semibold text-success">$1,420</span>
      </div>
      <div className="flex items-center justify-between px-6 py-3">
        <span className="text-sm">Churn</span>
        <span className="text-sm font-semibold text-destructive">-3</span>
      </div>
    </div>
  </CardContent>
</Card>`,
        microPreview: (
          <Card size={globalSize}>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Last 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm">New signups</span>
                  <span className="text-sm font-semibold">+24</span>
                </div>
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm">Revenue</span>
                  <span className="text-sm font-semibold text-success">$1,420</span>
                </div>
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-sm">Churn</span>
                  <span className="text-sm font-semibold text-destructive">-3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function CardShowcase() {
  const t = useI18n();
  const examples = useCardExamples();

  return (
    <ConfigurableShowcase
      title="Card"
      description={t(
        "Thẻ hiển thị thông tin đóng gói có cấu trúc (tiêu đề, nội dung, footer).",
        "Displays information in a structured card format (title, content, footer)."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng CardPreset khi nội dung có cấu trúc rõ ràng (tiêu đề + nội dung + footer). Dùng Micro khi cần layout tuỳ biến trong Header hoặc bố trí nhiều card trong grid.",
              "Use CardPreset when content has a clear structure (title + content + footer). Use Micro when you need a custom Header layout or multi-card grid arrangements."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
