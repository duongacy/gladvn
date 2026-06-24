import { useState } from "react"
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Progress,
  Skeleton,
  Slider,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Alert,
  AlertDescription,
} from "../index"
import {
  SunIcon,
  MoonIcon,
  ZapIcon,
  ShieldCheckIcon,
  LayersIcon,
  PaletteIcon,
  BoxIcon,
  ToggleLeftIcon,
  TypeIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from "lucide-react"

// ── Data ────────────────────────────────────────────────────────────────────
const VARIANTS = ["solid", "outline", "soft", "ghost", "link"] as const
const COLORS = ["primary", "secondary", "destructive", "warning", "success", "info", "tertiary"] as const
const SIZES = ["sm", "md", "lg"] as const

const NAV = [
  { id: "overview", label: "Overview", icon: LayersIcon },
  { id: "buttons", label: "Buttons", icon: BoxIcon },
  { id: "forms", label: "Forms", icon: TypeIcon },
  { id: "feedback", label: "Feedback", icon: AlertCircleIcon },
  { id: "display", label: "Display", icon: PaletteIcon },
  { id: "interactive", label: "Interactive", icon: ToggleLeftIcon },
]

const STATS = [
  { label: "Components", value: "55" },
  { label: "Tokens", value: "40+" },
  { label: "Variants", value: "5×7" },
  { label: "Dark Mode", value: "✓" },
]

const COLOR_INFO = {
  primary: { label: "Primary", description: "Main action" },
  secondary: { label: "Secondary", description: "Alternative" },
  destructive: { label: "Destructive", description: "Danger / Delete" },
  warning: { label: "Warning", description: "Caution" },
  success: { label: "Success", description: "Confirm / Done" },
  info: { label: "Info", description: "Information" },
  tertiary: { label: "Tertiary", description: "Extra / Beta" },
}

// ── Sub-components ───────────────────────────────────────────────────────────
function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6 border-b pb-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}

function ShowcaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card">
      <div className="border-b px-4 py-2.5">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function ColorSwatch({ color }: { color: typeof COLORS[number] }) {
  const info = COLOR_INFO[color]
  return (
    <div className="flex flex-col gap-1.5 items-center">
      <div
        className="h-10 w-10 rounded-lg border shadow-sm"
        style={{ background: `var(--color-${color})` }}
      />
      <span className="text-[10px] font-medium text-muted-foreground">{info.label}</span>
    </div>
  )
}

// ── Sections ─────────────────────────────────────────────────────────────────
function OverviewSection() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border bg-card p-4 text-center">
            <div className="text-2xl font-bold tracking-tight">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Color palette */}
      <ShowcaseBlock title="Color Tokens">
        <div className="flex flex-wrap gap-4">
          {COLORS.map((c) => (
            <ColorSwatch key={c} color={c} />
          ))}
        </div>
      </ShowcaseBlock>

      {/* Quick example */}
      <ShowcaseBlock title="Quick Example">
        <Card className="max-w-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>New release 🎉</CardTitle>
              <Badge variant="secondary">v0.2.1</Badge>
            </div>
            <CardDescription>@duongy96/sadcn is now available on npm</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="rounded-md bg-muted px-3 py-2 font-mono text-xs">
              npm install @duongy96/sadcn
            </div>
            <Progress value={72} />
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm" color="success">Install now</Button>
            <Button size="sm" variant="outline">Learn more</Button>
          </CardFooter>
        </Card>
      </ShowcaseBlock>
    </div>
  )
}

function ButtonsSection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Buttons" description="variant controls visual style, color controls semantic meaning" />

      <ShowcaseBlock title="variant × color matrix">
        <div className="overflow-x-auto">
          {/* Header row */}
          <div className="mb-2 flex items-center gap-2 pl-20">
            {COLORS.map((c) => (
              <div key={c} className="w-24 text-center text-[10px] font-medium text-muted-foreground uppercase">
                {c}
              </div>
            ))}
          </div>
          {VARIANTS.map((v) => (
            <div key={v} className="mb-2 flex items-center gap-2">
              <span className="w-20 shrink-0 text-right text-xs font-mono text-muted-foreground pr-2">{v}</span>
              {COLORS.map((c) => (
                <div key={c} className="w-24 flex justify-center">
                  <Button variant={v} color={c} size="sm">
                    {COLOR_INFO[c].label}
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <div className="grid gap-5 sm:grid-cols-2">
        <ShowcaseBlock title="Sizes & Icons">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((s) => (
                <Button key={s} size={s}>{s}</Button>
              ))}
            </div>
            {/* Auto Gap + Scale */}
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((s) => (
                <Button key={s + "-icon"} size={s}>
                  <CheckCircle2Icon />
                  <span>With Icon ({s})</span>
                </Button>
              ))}
            </div>
            {/* Auto Square */}
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((s) => (
                <Button key={s + "-only"} size={s} color="secondary" variant="soft">
                  <AlertCircleIcon />
                </Button>
              ))}
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="States">
          <div className="flex flex-wrap gap-2">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline">Tooltip</Button>} />
                <TooltipContent>Hey there!</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Badges">
          <div className="flex flex-wrap gap-2">
            {(["default", "secondary", "destructive", "outline"] as const).map((v) => (
              <Badge key={v} variant={v}>{v}</Badge>
            ))}
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Avatars">
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>DY</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
            </Avatar>
          </div>
        </ShowcaseBlock>
      </div>
    </div>
  )
}

function FormsSection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Forms" description="Input, Select, Checkbox, Slider, Textarea and more" />
      <div className="grid gap-5 sm:grid-cols-2">
        <ShowcaseBlock title="Text Inputs">
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Default</Label>
              <Input placeholder="Enter value..." />
            </div>
            <div className="space-y-1.5">
              <Label>With error</Label>
              <Input aria-invalid placeholder="Invalid input" />
            </div>
            <div className="space-y-1.5">
              <Label>Textarea</Label>
              <Textarea rows={3} placeholder="Write something..." />
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Select & Checkbox">
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Framework</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pick one..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="vite">Vite</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 pt-1">
              {["TypeScript", "ESLint", "Tailwind CSS"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox id={item} defaultChecked={item === "TypeScript"} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Slider">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Volume</Label>
              <Slider defaultValue={[60]} max={100} step={1} />
            </div>
            <div className="space-y-1.5">
              <Label>Range</Label>
              <Slider defaultValue={[20, 80]} max={100} step={1} />
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Switch">
          <div className="space-y-3">
            {["Notifications", "Dark Mode", "Auto-save"].map((item, i) => (
              <div key={item} className="flex items-center justify-between">
                <Label>{item}</Label>
                <Switch defaultChecked={i === 0} />
              </div>
            ))}
          </div>
        </ShowcaseBlock>
      </div>
    </div>
  )
}

function FeedbackSection() {
  const alerts = [
    { color: "info", icon: InfoIcon, title: "Info", desc: "Your session will expire in 10 minutes." },
    { color: "success", icon: CheckCircle2Icon, title: "Success", desc: "Your changes have been saved." },
    { color: "warning", icon: TriangleAlertIcon, title: "Warning", desc: "This action cannot be undone easily." },
    { color: "destructive", icon: XCircleIcon, title: "Error", desc: "Failed to connect to the server." },
  ]

  return (
    <div className="space-y-5">
      <SectionHeader title="Feedback" description="Alerts, Progress, Skeleton" />

      <ShowcaseBlock title="Alerts">
        <div className="space-y-3">
          {alerts.map(({ color, icon: Icon, title, desc }) => (
            <div
              key={color}
              className="flex gap-3 rounded-lg border p-3.5"
              style={{
                borderColor: `color-mix(in oklch, var(--color-${color}) 40%, transparent)`,
                background: `color-mix(in oklch, var(--color-${color}) 8%, transparent)`,
              }}
            >
              <Icon
                className="mt-0.5 shrink-0 size-4"
                style={{ color: `var(--color-${color})` }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: `var(--color-${color})` }}>{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <div className="grid gap-5 sm:grid-cols-2">
        <ShowcaseBlock title="Progress">
          <div className="space-y-3">
            {COLORS.filter((_, i) => i < 4).map((c, i) => (
              <div key={c} className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{COLOR_INFO[c].label}</span>
                  <span>{25 * (i + 1)}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${25 * (i + 1)}%`,
                      background: `var(--color-${c})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Skeleton">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-3.5 w-1/3" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <Skeleton className="h-28 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/6" />
            </div>
          </div>
        </ShowcaseBlock>
      </div>
    </div>
  )
}

function DisplaySection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Data Display" description="Cards, Accordion, Tabs" />

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
              <p className="text-sm text-muted-foreground">Optimized bundle with tree-shaking support.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" color="primary">Learn more →</Button>
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
              <p className="text-sm text-muted-foreground">Full TypeScript support with auto-complete.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" color="success">Learn more →</Button>
            </CardFooter>
          </Card>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Accordion">
        <Accordion>
          {[
            { q: "How do I install?", a: "Run npm install @duongy96/sadcn in your project." },
            { q: "Can I customize colors?", a: "Yes — copy tokens.css and override any CSS variable." },
            { q: "Does it support dark mode?", a: "Yes — add the .dark class to your <html> element." },
          ].map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseBlock>
    </div>
  )
}

function InteractiveSection() {
  const [tab, setTab] = useState("preview")
  return (
    <div className="space-y-5">
      <SectionHeader title="Interactive" description="Tabs, Tooltips, Switch" />

      <ShowcaseBlock title="Tabs">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="pt-4">
            <Button color="success">Save changes</Button>
          </TabsContent>
          <TabsContent value="code" className="pt-4">
            <pre className="text-xs bg-muted rounded-md p-3 overflow-x-auto">
              {`<Button color="success">Save changes</Button>`}
            </pre>
          </TabsContent>
          <TabsContent value="props" className="pt-4">
            <div className="text-xs text-muted-foreground space-y-1">
              <div><code>variant</code> — solid | outline | soft | ghost | link</div>
              <div><code>color</code> — primary | secondary | destructive | warning | success | info | tertiary</div>
              <div><code>size</code> — sm | md | lg</div>
            </div>
          </TabsContent>
        </Tabs>
      </ShowcaseBlock>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState("overview")

  const sections: Record<string, React.ReactNode> = {
    overview: <OverviewSection />,
    buttons: <ButtonsSection />,
    forms: <FormsSection />,
    feedback: <FeedbackSection />,
    display: <DisplaySection />,
    interactive: <InteractiveSection />,
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Top nav */}
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
                <LayersIcon className="size-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm">@duongy96/sadcn</span>
              <Badge variant="secondary" className="text-[10px]">v0.2.1</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground mr-1">Dark</span>
              <Switch checked={dark} onCheckedChange={setDark} />
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-6xl gap-0">
          {/* Sidebar */}
          <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r pt-6 px-3 hidden md:block">
            <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Components
            </p>
            <nav className="space-y-0.5">
              {NAV.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors text-left ${
                    active === id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  {label}
                </button>
              ))}
            </nav>

            <Separator className="my-4" />
            <div className="px-2 space-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Install</p>
              <div className="rounded-md bg-muted px-2.5 py-2 font-mono text-[10px] text-muted-foreground break-all">
                npm i @duongy96/sadcn
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0 px-6 py-8">
            {/* Mobile nav */}
            <div className="mb-6 flex gap-1.5 overflow-x-auto pb-1 md:hidden">
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    active === id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {sections[active]}
          </main>
        </div>
      </div>
    </div>
  )
}
