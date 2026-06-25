import { useContext } from "react"
import {
  Alert,
  AlertDescription,
  Calendar,
  Checkbox,
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldTitle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
  MonoSelect,
  NativeSelect,
  NativeSelectOption,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Textarea
} from "../../index"
import { ShowcaseSizeContext } from "../App"


import { SectionHeader, ShowcaseBlock } from "../components/showcase"

export default function FormsSection() {
  const globalSize = useContext(ShowcaseSizeContext)

  return (
    <div className="space-y-5">
      <SectionHeader title="Forms" description="Input, Select, Checkbox, Slider, Textarea and more" />

      {/* Use CSS Columns for a Masonry-like layout so tall blocks don't leave empty spaces */}
      <div className="columns-1 md:columns-2 gap-5 space-y-5 [&>div]:break-inside-avoid">

        {/* 1. TEXT FIELDS */}
        <ShowcaseBlock title="Text Fields">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Default Input</Label>
              <Input size={globalSize} className="w-full" placeholder="Enter value..." />
            </div>

            <Separator />

            <div className="space-y-1.5">
              <Label>Textarea</Label>
              <Textarea size={globalSize} className="w-full" rows={3} placeholder="Write something..." />
            </div>

            <div className="space-y-1.5">
              <Label>Textarea</Label>
              <Textarea size={globalSize} className="w-full" rows={3} placeholder="Write something..." />
            </div>

            <Separator />

            <div className="space-y-1.5">
              <Label>Input Group</Label>
              <InputGroup size={globalSize}>
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
              <InputOTP size={globalSize} maxLength={6}>
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
          </div>
        </ShowcaseBlock>

        {/* 2. PICKERS & DROPDOWNS */}
        <ShowcaseBlock title="Pickers & Dropdowns">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>Select (Custom)</Label>
              <Select>
                <SelectTrigger size={globalSize} className="w-full">
                  <SelectValue placeholder="Pick a framework..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="vite">Vite</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Select (Grouped)</Label>
              <Select>
                <SelectTrigger size={globalSize} className="w-full">
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
              <Label>MonoSelect</Label>
              <MonoSelect
                size={globalSize}
                className="w-full"
                placeholder="Flat list..."
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                ]}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Native Select</Label>
              <NativeSelect size={globalSize} defaultValue="mac">
                <NativeSelectOption value="mac">macOS</NativeSelectOption>
                <NativeSelectOption value="win">Windows</NativeSelectOption>
                <NativeSelectOption value="linux">Linux</NativeSelectOption>
              </NativeSelect>
            </div>

            <Separator />

            <div className="space-y-1.5">
              <Label>Combobox</Label>
              <Combobox>
                <ComboboxInput size={globalSize} placeholder="Search framework..." />
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

        {/* 3. TOGGLES & SELECTORS */}
        <ShowcaseBlock title="Toggles & Selectors">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label className="mb-1 block">Checkboxes</Label>
              {["TypeScript", "ESLint", "Tailwind CSS"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Checkbox size={globalSize} id={`check-${item}`} defaultChecked={item === "TypeScript"} />
                  <Label htmlFor={`check-${item}`}>{item}</Label>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-2">
              <Label className="mb-1 block">Radio Group</Label>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-2">
                  <RadioGroupItem size={globalSize} value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem size={globalSize} value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem size={globalSize} value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label className="mb-1 block">Switches</Label>
              {["Notifications", "Dark Mode", "Auto-save"].map((item, i) => (
                <div key={item} className="flex items-center justify-between">
                  <Label>{item}</Label>
                  <Switch size={globalSize} defaultChecked={i === 0} />
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label>Slider (Volume)</Label>
                <Slider size={globalSize} defaultValue={[60]} max={100} step={1} />
              </div>
              <div className="space-y-1.5">
                <Label>Slider (Range)</Label>
                <Slider size={globalSize} defaultValue={[20, 80]} max={100} step={1} />
              </div>
            </div>
          </div>
        </ShowcaseBlock>

        {/* 4. FORM LAYOUT & CALENDAR */}
        <div className="space-y-5 break-inside-avoid">
          <ShowcaseBlock title="Form Field Layout">
            <Field>
              <FieldTitle>Email address</FieldTitle>
              <FieldDescription>We will not share your email with anyone.</FieldDescription>
              <FieldContent>
                <Input size={globalSize} type="email" placeholder="you@example.com" />
              </FieldContent>
              <FieldError errors={[{ message: "Please enter a valid email address." }]} />
            </Field>
          </ShowcaseBlock>

          <ShowcaseBlock title="Calendar">
            <div className="flex justify-center rounded-md border p-2 bg-background">
              <Calendar size={globalSize} mode="single" captionLayout="dropdown" startMonth={new Date(1990, 0)} endMonth={new Date(2050, 11)} />
            </div>
          </ShowcaseBlock>
        </div>

        {/* 5. VALIDATION UX */}
        <ShowcaseBlock title="Validation UX (Error States)">
          <div className="space-y-5">
            <Alert variant="destructive" className="py-2.5">
              <AlertDescription className="text-xs">
                <strong>New Parity UX:</strong> Error states only show a red ring when the user focuses/tabs into the field. Otherwise, they just show a red border. Try clicking them below!
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label>Input</Label>
                <Input size={globalSize} aria-invalid placeholder="Invalid text" />
              </div>

              <div className="space-y-1.5">
                <Label>InputGroup</Label>
                <InputGroup size={globalSize}>
                  <InputGroupAddon><InputGroupText>@</InputGroupText></InputGroupAddon>
                  <InputGroupInput aria-invalid placeholder="username" />
                </InputGroup>
              </div>

              <div className="space-y-1.5">
                <Label>Select</Label>
                <Select>
                  <SelectTrigger size={globalSize} aria-invalid><SelectValue placeholder="Invalid selection..." /></SelectTrigger>
                  <SelectContent><SelectItem value="1">1</SelectItem></SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>NativeSelect</Label>
                <NativeSelect size={globalSize} aria-invalid defaultValue="">
                  <NativeSelectOption value="" disabled>Select option...</NativeSelectOption>
                </NativeSelect>
              </div>

              <div className="space-y-1.5">
                <Label>InputOTP</Label>
                <InputOTP size={globalSize} maxLength={3}>
                  <InputOTPGroup>
                    <InputOTPSlot aria-invalid index={0} />
                    <InputOTPSlot aria-invalid index={1} />
                    <InputOTPSlot aria-invalid index={2} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex gap-6 pt-3">
                <div className="flex items-center gap-2">
                  <Checkbox size={globalSize} aria-invalid id="err-check2" />
                  <Label htmlFor="err-check2">Check</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroup defaultValue="">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem size={globalSize} aria-invalid value="1" id="err-radio2" />
                      <Label htmlFor="err-radio2">Radio</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center gap-2">
                  <Switch size={globalSize} aria-invalid id="err-switch2" />
                  <Label htmlFor="err-switch2">Switch</Label>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseBlock>

      </div>
    </div>
  )
}