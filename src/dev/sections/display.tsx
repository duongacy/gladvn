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

export default function DisplaySection() {
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