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
  RadioGroup,
  RadioGroupItem,
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  Calendar,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  NativeSelect,
  NativeSelectOption,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
  Field,
  FieldTitle,
  FieldDescription,
  FieldError,
  FieldContent,
} from "../../index"
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


import { SectionHeader, ShowcaseBlock, ColorSwatch } from "../components/showcase"
import { VARIANTS, COLORS, SIZES, STATS, COLOR_INFO } from "../data"

export default function OverviewSection() {
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