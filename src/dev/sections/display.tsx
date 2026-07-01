import {
  BellIcon,
  CheckCircle2Icon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/index";

import { SectionHeader, ShowcaseBlock } from "@/dev/components/showcase";

export default function DisplaySection() {
  return (
    <div className="space-y-5">
      <SectionHeader
        title="Data Display"
        description="Avatars, Cards, Accordion, and more"
      />

      {/* Avatar Showcase */}
      <div className="rounded-2xl border bg-card/40 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <UserIcon className="size-5 text-primary" />
              Avatars & Groups
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Smart scaling, group overlaps, and status badges via CSS Delegated
              Logic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sizes & Fallbacks */}
          <div className="rounded-xl border bg-card p-5 shadow-sm flex flex-col gap-4">
            <h4 className="text-sm font-medium text-muted-foreground">
              Sizes & Fallbacks
            </h4>
            <div className="flex items-center gap-6 h-12">
              <Avatar size="sm">
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>

              <Avatar size="lg">
                <AvatarFallback className="bg-primary/10 text-primary">
                  LG
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Group & Badge */}
          <div className="rounded-xl border bg-card p-5 shadow-sm flex flex-col gap-4">
            <h4 className="text-sm font-medium text-muted-foreground">
              Groups & Status Badges
            </h4>
            <div className="flex items-center gap-8 h-12">
              <AvatarGroup>
                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>A1</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    B2
                  </AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                  <AvatarFallback className="bg-destructive/10 text-destructive">
                    C3
                  </AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+3</AvatarGroupCount>
              </AvatarGroup>

              <div className="w-px h-8 bg-border" />

              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                  <AvatarBadge className="bg-success" />
                </Avatar>

                <Avatar size="sm">
                  <AvatarFallback>SM</AvatarFallback>
                  <AvatarBadge className="bg-destructive" />
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Badge Matrix */}
      <div className="rounded-2xl border bg-card/40 overflow-hidden shadow-sm">
        <div className="border-b bg-muted/30 px-6 py-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <ShieldAlertIcon className="size-5 text-primary" />
            The Badge Matrix
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            All variants mapped against different usage contexts (Icons &
            Links).
          </p>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Variant
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Default
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Start Icon
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  End Icon
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Interactive (Link)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {([
                { label: "Secondary", props: { color: "secondary" } },
                { label: "Destructive", props: { color: "destructive" } },
                { label: "Outline", props: { variant: "outline" } },
              ] as const).map(({ label, props }) => (
                  <tr
                    key={label}
                    className="group hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 pr-4">
                      <span className="text-sm font-medium capitalize">
                        {label}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <Badge {...props as any}>Badge</Badge>
                    </td>
                    <td className="py-4 pr-4">
                      <Badge {...props as any}>
                        <CheckCircle2Icon data-icon="inline-start" /> Status
                      </Badge>
                    </td>
                    <td className="py-4 pr-4">
                      <Badge {...props as any}>
                        Updates <BellIcon data-icon="inline-end" />
                      </Badge>
                    </td>
                    <td className="py-4 pr-4">
                      <Badge
                        {...props as any}
                        render={<a href="#link" />}
                      >
                        Clickable
                      </Badge>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ShowcaseBlock title="Cards">
        <div className="grid gap-3 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ZapIcon className="size-4 text-primary" />
                </div>
                <CardTitle className="text-base">Performance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Optimized bundle with tree-shaking support.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" color="primary">
                Learn more →
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <ShieldCheckIcon className="size-4 text-success" />
                </div>
                <CardTitle className="text-base">Type Safe</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full TypeScript support with auto-complete.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" color="success">
                Learn more →
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Accordion">
        <Accordion>
          {[
            {
              q: "How do I install?",
              a: "Run npm install @duongy96/sadcn in your project.",
            },
            {
              q: "Can I customize colors?",
              a: "Yes — copy tokens.css and override any CSS variable.",
            },
            {
              q: "Does it support dark mode?",
              a: "Yes — add the .dark class to your <html> element.",
            },
          ].map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseBlock>
    </div>
  );
}
