import { useState } from "react"
import {
  Alert, AlertDescription, Calendar, Checkbox, Combobox, ComboboxContent, ComboboxInput,
  ComboboxItem, ComboboxList, Field, FieldContent, FieldDescription, FieldError, FieldTitle, FieldLabel,
  Input, InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputOTP,
  InputOTPGroup, InputOTPSeparator, InputOTPSlot, Label, MonoSelect, NativeSelect,
  NativeSelectOption, RadioGroup, RadioGroupItem, Select, SelectContent, SelectGroup,
  SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Separator,
  Slider, Switch, Textarea
} from "../../index"

import { SectionHeader } from "../components/showcase"
import {
  TypeIcon, MousePointerClickIcon, ToggleLeftIcon, LayoutTemplateIcon, TriangleAlertIcon, CalendarIcon
} from "lucide-react"

export default function FormsSection() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md")

  return (
    <div className="space-y-6">
      <SectionHeader title="Forms" description="Input, Select, Checkbox, Slider, Textarea and more">
        <MonoSelect 
          value={globalSize} 
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      {/* Masonry layout */}
      <div className="columns-1 md:columns-2 gap-6 space-y-6 [&>div]:break-inside-avoid">

        {/* 1. TEXT FIELDS */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <TypeIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Text Fields</h3>
              <p className="text-xs text-muted-foreground">Standard text input and entry</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-input">Default Input</FieldLabel>
              <FieldDescription>A standard text input for short strings like names or titles.</FieldDescription>
              <FieldContent>
                <Input id="tf-input" size={globalSize} placeholder="Enter value..." />
              </FieldContent>
            </Field>

            <Separator />

            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-textarea">Textarea</FieldLabel>
              <FieldDescription>Best suited for long-form content, feedback, or biographies.</FieldDescription>
              <FieldContent>
                <Textarea id="tf-textarea" size={globalSize} rows={3} placeholder="Write something..." />
              </FieldContent>
            </Field>

            <Separator />

            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-group">Input Group</FieldLabel>
              <FieldDescription>Combine text inputs with addons for things like URLs or prices.</FieldDescription>
              <FieldContent>
                <InputGroup size={globalSize}>
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="tf-group" placeholder="sadcn.ui" />
                  <InputGroupAddon>
                    <InputGroupText>.com</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>

            <Separator />

            <Field size={globalSize}>
              <FieldLabel htmlFor="tf-otp-0">Input OTP</FieldLabel>
              <FieldDescription>Enter the 6-digit code sent to your phone number.</FieldDescription>
              <FieldContent>
                <InputOTP id="tf-otp-0" size={globalSize} maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FieldContent>
            </Field>
          </div>
        </div>

        {/* 2. PICKERS & DROPDOWNS */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-success/10 text-success">
              <MousePointerClickIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Pickers & Dropdowns</h3>
              <p className="text-xs text-muted-foreground">Selection controls and lists</p>
            </div>
          </div>

          <div className="space-y-4">
            <Field size={globalSize}>
              <FieldLabel>Select (Custom)</FieldLabel>
              <FieldContent>
                <Select>
                  <SelectTrigger size={globalSize}>
                    <SelectValue placeholder="Pick a framework..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="vite">Vite</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>

            <Field size={globalSize}>
              <FieldLabel>Select (Grouped)</FieldLabel>
              <FieldDescription>Options can be visually grouped with labels.</FieldDescription>
              <FieldContent>
                <Select>
                  <SelectTrigger size={globalSize}>
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
              </FieldContent>
            </Field>

            <Field size={globalSize}>
              <FieldLabel>MonoSelect</FieldLabel>
              <FieldContent>
                <MonoSelect
                  size={globalSize}
                  placeholder="Flat list..."
                  options={[
                    { value: "1", label: "Option 1" },
                    { value: "2", label: "Option 2" },
                  ]}
                />
              </FieldContent>
            </Field>

            <Field size={globalSize}>
              <FieldLabel htmlFor="id1">Native Select</FieldLabel>
              <FieldDescription>Uses the browser's built-in dropdown menu. Great for mobile.</FieldDescription>
              <FieldContent>
                <NativeSelect id="id1" size={globalSize} defaultValue="mac">
                  <NativeSelectOption value="mac">macOS</NativeSelectOption>
                  <NativeSelectOption value="win">Windows</NativeSelectOption>
                  <NativeSelectOption value="linux">Linux</NativeSelectOption>
                </NativeSelect>
              </FieldContent>
            </Field>

            <Separator />

            <Field size={globalSize}>
              <FieldLabel>Combobox</FieldLabel>
              <FieldDescription>A select input that allows searching through large datasets.</FieldDescription>
              <FieldContent>
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
              </FieldContent>
            </Field>
          </div>
        </div>

        {/* 3. TOGGLES & SELECTORS */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-info/10 text-info">
              <ToggleLeftIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Toggles & Selectors</h3>
              <p className="text-xs text-muted-foreground">Switches, radios, and sliders</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label size={globalSize} className="mb-2 block text-muted-foreground">Checkboxes</Label>
              <div className="space-y-3">
                {["TypeScript", "ESLint", "Tailwind CSS"].map((item) => (
                  <Field orientation="horizontal" size={globalSize} key={item}>
                    <Checkbox size={globalSize} id={`check-${item}`} defaultChecked={item === "TypeScript"} />
                    <FieldLabel htmlFor={`check-${item}`}>{item}</FieldLabel>
                  </Field>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label size={globalSize} className="mb-2 block text-muted-foreground">Radio Group</Label>
              <RadioGroup defaultValue="comfortable" className="space-y-1">
                <Field orientation="horizontal" size={globalSize}>
                  <RadioGroupItem size={globalSize} value="default" id="r1" />
                  <FieldLabel htmlFor="r1">Default</FieldLabel>
                </Field>
                <Field orientation="horizontal" size={globalSize}>
                  <RadioGroupItem size={globalSize} value="comfortable" id="r2" />
                  <FieldLabel htmlFor="r2">Comfortable</FieldLabel>
                </Field>
                <Field orientation="horizontal" size={globalSize}>
                  <RadioGroupItem size={globalSize} value="compact" id="r3" />
                  <FieldLabel htmlFor="r3">Compact</FieldLabel>
                </Field>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-3">
              <Label size={globalSize} className="mb-2 block text-muted-foreground">Switches</Label>
              <div className="space-y-4">
                {["Notifications", "Dark Mode", "Auto-save"].map((item, i) => (
                  <Field orientation="horizontal" size={globalSize} key={item} className="justify-between">
                    <FieldLabel htmlFor={`switch-${item}`}>{item}</FieldLabel>
                    <Switch id={`switch-${item}`} size={globalSize} defaultChecked={i === 0} />
                  </Field>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Field size={globalSize}>
                <FieldLabel>Slider (Volume)</FieldLabel>
                <FieldContent>
                  <Slider size={globalSize} defaultValue={[60]} max={100} step={1} />
                </FieldContent>
                <FieldDescription>Adjust the media volume globally.</FieldDescription>
              </Field>
              <Field size={globalSize}>
                <FieldLabel>Slider (Range)</FieldLabel>
                <FieldContent>
                  <Slider size={globalSize} defaultValue={[20, 80]} max={100} step={1} />
                </FieldContent>
              </Field>
            </div>
          </div>
        </div>

        {/* 4. FORM LAYOUT */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-secondary/30 text-secondary-foreground">
              <LayoutTemplateIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Form Field Layout</h3>
              <p className="text-xs text-muted-foreground">Composition & structure</p>
            </div>
          </div>
          <Field size={globalSize}>
            <FieldLabel htmlFor="layout-email">Email address</FieldLabel>
            <FieldDescription>We will not share your email with anyone.</FieldDescription>
            <FieldContent>
              <Input id="layout-email" size={globalSize} type="email" placeholder="you@example.com" />
            </FieldContent>
            <FieldError errors={[{ message: "Please enter a valid email address." }]} />
          </Field>
        </div>

        {/* 4.5 CALENDAR */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary">
              <CalendarIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Calendar</h3>
              <p className="text-xs text-muted-foreground">Date picker component</p>
            </div>
          </div>
          <div className="flex justify-center rounded-xl border p-2 bg-card">
            <Calendar size={globalSize} mode="single" captionLayout="dropdown" startMonth={new Date(1990, 0)} endMonth={new Date(2050, 11)} />
          </div>
        </div>

        {/* 5. VALIDATION UX */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md flex flex-col gap-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <TriangleAlertIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-base">Validation UX</h3>
              <p className="text-xs text-muted-foreground">Error states and feedback</p>
            </div>
          </div>

          <div className="space-y-5">
            <Alert variant="destructive" className="py-2.5">
              <AlertDescription className="text-xs">
                <strong>New Parity UX:</strong> Error states only show a red ring when the user focuses/tabs into the field. Otherwise, they just show a red border. Try clicking them below!
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <Field size={globalSize}>
                <FieldLabel htmlFor="err-input-username">Username</FieldLabel>
                <FieldDescription>Choose a unique identifier for your profile.</FieldDescription>
                <FieldContent>
                  <Input id="err-input-username" size={globalSize} aria-invalid placeholder="e.g. john_doe" />
                </FieldContent>
                <FieldError errors={[{ message: "Username is already taken by another user." }]} />
              </Field>

              <Field size={globalSize}>
                <FieldLabel htmlFor="err-group">Social Handle</FieldLabel>
                <FieldContent>
                  <InputGroup size={globalSize}>
                    <InputGroupAddon><InputGroupText>@</InputGroupText></InputGroupAddon>
                    <InputGroupInput id="err-group" aria-invalid placeholder="username" />
                  </InputGroup>
                </FieldContent>
                <FieldError errors={[{ message: "Invalid characters in handle." }]} />
              </Field>

              <Field size={globalSize}>
                <FieldLabel>Subscription Plan</FieldLabel>
                <FieldContent>
                  <Select>
                    <SelectTrigger size={globalSize} aria-invalid><SelectValue placeholder="Invalid selection..." /></SelectTrigger>
                    <SelectContent><SelectItem value="1">Pro Plan</SelectItem></SelectContent>
                  </Select>
                </FieldContent>
                <FieldError errors={[{ message: "This plan requires a valid credit card on file." }]} />
              </Field>

              <Field size={globalSize}>
                <FieldLabel htmlFor="err-native">Country</FieldLabel>
                <FieldContent>
                  <NativeSelect id="err-native" size={globalSize} aria-invalid defaultValue="">
                    <NativeSelectOption value="" disabled>Select option...</NativeSelectOption>
                  </NativeSelect>
                </FieldContent>
                <FieldError errors={[{ message: "Service is not available in the selected region." }]} />
              </Field>

              <Field size={globalSize}>
                <FieldLabel htmlFor="err-otp">Authentication Code</FieldLabel>
                <FieldContent>
                  <InputOTP id="err-otp" size={globalSize} maxLength={3}>
                    <InputOTPGroup>
                      <InputOTPSlot aria-invalid index={0} />
                      <InputOTPSlot aria-invalid index={1} />
                      <InputOTPSlot aria-invalid index={2} />
                    </InputOTPGroup>
                  </InputOTP>
                </FieldContent>
                <FieldError errors={[{ message: "The code you entered has expired." }]} />
              </Field>

              <div className="flex flex-col gap-4 pt-3">
                <Field orientation="horizontal" size={globalSize}>
                  <Checkbox size={globalSize} aria-invalid id="err-check2" />
                  <FieldContent>
                    <FieldLabel htmlFor="err-check2">Accept Terms & Conditions</FieldLabel>
                    <FieldError errors={[{ message: "You must accept the terms to proceed." }]} />
                  </FieldContent>
                </Field>
                
                <RadioGroup defaultValue="">
                  <Field orientation="horizontal" size={globalSize}>
                    <RadioGroupItem size={globalSize} aria-invalid value="1" id="err-radio2" />
                    <FieldContent>
                      <FieldLabel htmlFor="err-radio2">Agree to Marketing Emails</FieldLabel>
                      <FieldError errors={[{ message: "Please make a valid selection." }]} />
                    </FieldContent>
                  </Field>
                </RadioGroup>
                
                <Field orientation="horizontal" size={globalSize}>
                  <Switch size={globalSize} aria-invalid id="err-switch2" />
                  <FieldContent>
                    <FieldLabel htmlFor="err-switch2">Enable 2FA</FieldLabel>
                    <FieldError errors={[{ message: "You cannot disable 2FA for admin accounts." }]} />
                  </FieldContent>
                </Field>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}