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

export default function FeedbackSection() {
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