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

export default function ButtonsSection() {
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