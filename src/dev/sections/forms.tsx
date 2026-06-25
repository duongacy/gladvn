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
  SelectGroup,
  SelectLabel,
  SelectSeparator,
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
  ThemeProvider,
  MonoSelect,
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

export default function FormsSection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Forms" description="Input, Select, Checkbox, Slider, Textarea and more" />
      <div className="grid gap-5 sm:grid-cols-2">
        <ShowcaseBlock title="Text Inputs">
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Default (w-full)</Label>
              <Input className="w-full" placeholder="Enter value..." />
            </div>
            <div className="space-y-1.5">
              <Label>With error</Label>
              <Input className="w-full" aria-invalid placeholder="Invalid input" />
            </div>
            <div className="space-y-1.5">
              <Label>Sizes</Label>
              <div className="flex flex-col items-start gap-2">
                <Input size="sm" placeholder="Small (sm)" />
                <Input size="md" placeholder="Medium (md - default)" />
                <Input size="lg" placeholder="Large (lg)" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Textarea (w-full)</Label>
              <Textarea className="w-full" rows={3} placeholder="Write something..." />
            </div>
            <div className="space-y-1.5">
              <Label>Textarea with error</Label>
              <Textarea className="w-full" aria-invalid rows={2} placeholder="Invalid text..." />
            </div>
            <div className="space-y-1.5">
              <Label>Textarea Sizes</Label>
              <div className="flex flex-col gap-2">
                <Textarea size="sm" rows={2} placeholder="Small (sm)..." />
                <Textarea size="md" rows={2} placeholder="Medium (md - default)..." />
                <Textarea size="lg" rows={2} placeholder="Large (lg)..." />
              </div>
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Select & Checkbox">
          <div className="space-y-3">
            <div className="space-y-1.5">
              <Label>Custom Select (w-full)</Label>
              <ThemeProvider initialMode="light">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick one..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                  </SelectContent>
                </Select>
              </ThemeProvider>
            </div>

            <div className="space-y-1.5">
              <Label>Composition (grouped)</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pick a fruit..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Citrus</SelectLabel>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="lemon">Lemon</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Berry</SelectLabel>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Select with error</Label>
              <Select>
                <SelectTrigger className="w-full" aria-invalid>
                  <SelectValue placeholder="Invalid selection..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Option 1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Select Sizes</Label>
              <div className="flex flex-col items-start gap-2">
                <Select>
                  <SelectTrigger size="sm">
                    <SelectValue placeholder="Small (sm)..." />
                  </SelectTrigger>
                </Select>
                <Select>
                  <SelectTrigger size="md">
                    <SelectValue placeholder="Medium (md)..." />
                  </SelectTrigger>
                </Select>
                <Select>
                  <SelectTrigger size="lg">
                    <SelectValue placeholder="Large (lg)..." />
                  </SelectTrigger>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>MonoSelect (flat)</Label>
              <MonoSelect
                className="w-full"
                placeholder="Pick a framework..."
                options={[
                  { value: "next", label: "Next.js" },
                  { value: "vite", label: "Vite" },
                  { value: "remix", label: "Remix" },
                  { value: "astro", label: "Astro" },
                ]}
              />
            </div>

            <div className="space-y-1.5">
              <Label>MonoSelect (grouped)</Label>
              <MonoSelect
                className="w-full"
                placeholder="Pick a fruit..."
                options={[
                  { value: "orange", label: "Orange", group: "Citrus" },
                  { value: "lemon", label: "Lemon", group: "Citrus" },
                  { value: "strawberry", label: "Strawberry", group: "Berry" },
                  { value: "blueberry", label: "Blueberry", group: "Berry" },
                ]}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Native Select</Label>
              <NativeSelect defaultValue="mac">
                <NativeSelectOption value="mac">macOS</NativeSelectOption>
                <NativeSelectOption value="win">Windows</NativeSelectOption>
                <NativeSelectOption value="linux">Linux</NativeSelectOption>
              </NativeSelect>
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

        <ShowcaseBlock title="Advanced Inputs">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Input Group</Label>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="sadcn.ui" />
                <InputGroupAddon>
                  <InputGroupText>.com</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>

            <div className="space-y-1.5">
              <Label>Input OTP</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="space-y-1.5">
              <Label>Combobox</Label>
              <Combobox>
                <ComboboxInput placeholder="Search framework..." />
                <ComboboxContent>
                  <ComboboxList>
                    <ComboboxItem value="react">React</ComboboxItem>
                    <ComboboxItem value="vue">Vue</ComboboxItem>
                    <ComboboxItem value="svelte">Svelte</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="Field Layout & Radio">
          <div className="space-y-5">
            <Field>
              <FieldTitle>Email address</FieldTitle>
              <FieldDescription>We will not share your email.</FieldDescription>
              <FieldContent>
                <Input type="email" placeholder="you@example.com" />
              </FieldContent>
              <FieldError errors={[{ message: "Email is required" }]} />
            </Field>

            <div className="space-y-1.5">
              <Label>Radio Group</Label>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
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

        <ShowcaseBlock title="Switch & Calendar">
          <div className="space-y-5">
            <div className="space-y-3">
              {["Notifications", "Dark Mode", "Auto-save"].map((item, i) => (
                <div key={item} className="flex items-center justify-between">
                  <Label>{item}</Label>
                  <Switch defaultChecked={i === 0} />
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Label className="mb-2 block">Calendar</Label>
              <div className="rounded-md border p-2 bg-background flex justify-center">
                <Calendar />
              </div>
            </div>
          </div>
        </ShowcaseBlock>
      </div>
    </div>
  )
}