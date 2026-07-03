# Component Catalog

## Micro Components (54 files)

### Form Controls

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Accordion** | `accordion.tsx` | `@base-ui/react/accordion` | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` |
| **Checkbox** | `checkbox.tsx` | `@base-ui/react/checkbox` | `Checkbox`, `CheckboxIndicator` |
| **Combobox** | `combobox.tsx` | `@base-ui/react` (composite) | `Combobox`, `ComboboxInput`, `ComboboxContent`, `ComboboxList`, `ComboboxItem`, `ComboboxGroup`, `ComboboxLabel`, `ComboboxEmpty`, `ComboboxSeparator`, `ComboboxChips`, `ComboboxChip`, `ComboboxChipsInput`, `ComboboxTrigger`, `ComboboxValue`, `ComboboxCollection` |
| **Input** | `input.tsx` | `@base-ui/react/input` | `Input`, `InputProps` |
| **Input OTP** | `input-otp.tsx` | `input-otp` | `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator` |
| **Native Select** | `native-select.tsx` | Custom | `NativeSelect`, `NativeSelectProps` |
| **Radio Group** | `radio-group.tsx` | `@base-ui/react/radio` | `RadioGroup`, `RadioGroupItem`, `RadioGroupIndicator` |
| **Select** | `select.tsx` | `@base-ui/react/select` | `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator` |
| **Slider** | `slider.tsx` | `@base-ui/react/slider` | `Slider`, `SliderTrack`, `SliderIndicator`, `SliderThumb`, `SliderControl` |
| **Switch** | `switch.tsx` | `@base-ui/react/switch` | `Switch`, `SwitchThumb` |
| **Textarea** | `textarea.tsx` | Custom | `Textarea`, `TextareaProps` |
| **Toggle** | `toggle.tsx` | `@base-ui/react/toggle` | `Toggle` |
| **Toggle Group** | `toggle-group.tsx` | `@base-ui/react/toggle-group` | `ToggleGroup`, `ToggleGroupItem` |

### Form Layout

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Field** | `field.tsx` | Custom | `Field`, `FieldLabel`, `FieldContent`, `FieldDescription`, `FieldError`, `FieldErrors` |
| **Input Group** | `input-group.tsx` | Custom | `InputGroup`, `InputGroupAddon`, `InputGroupIcon` |
| **Label** | `label.tsx` | Custom | `Label` |

### Navigation

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Breadcrumb** | `breadcrumb.tsx` | Custom | `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator`, `BreadcrumbPage`, `BreadcrumbEllipsis` |
| **Navigation Menu** | `navigation-menu.tsx` | `@base-ui/react/navigation-menu` | `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`, `NavigationMenuViewport` |
| **Pagination** | `pagination.tsx` | Custom | `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationPrevious`, `PaginationNext`, `PaginationLink`, `PaginationEllipsis` |
| **Sidebar** | `sidebar.tsx` | Custom | (Multiple sidebar parts) |
| **Tabs** | `tabs.tsx` | `@base-ui/react/tabs` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |

### Data Display

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Avatar** | `avatar.tsx` | `@base-ui/react/avatar` | `Avatar`, `AvatarImage`, `AvatarFallback` |
| **Badge** | `badge.tsx` | Custom (cva) | `Badge`, `badgeVariants` |
| **Calendar** | `calendar.tsx` | `react-day-picker` | `Calendar` |
| **Card** | `card.tsx` | Custom | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| **Carousel** | `carousel.tsx` | `embla-carousel-react` | `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`, `CarouselDots` |
| **Chart** | `chart.tsx` | `recharts` | `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent` |
| **Empty** | `empty.tsx` | Custom | `Empty`, `EmptyIcon`, `EmptyTitle`, `EmptyDescription`, `EmptyAction` |
| **Progress** | `progress.tsx` | `@base-ui/react/progress` | `Progress`, `ProgressTrack`, `ProgressIndicator`, `ProgressLabel`, `ProgressValue` |
| **Skeleton** | `skeleton.tsx` | Custom | `Skeleton` |
| **Table** | `table.tsx` | Custom | `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`, `TableFooter` |

### Feedback

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Alert** | `alert.tsx` | Custom (cva) | `Alert`, `AlertTitle`, `AlertDescription`, `AlertIcon` |
| **Alert Dialog** | `alert-dialog.tsx` | `@base-ui/react/alert-dialog` | `AlertDialog`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel` |
| **Sonner** | `sonner.tsx` | `sonner` | `Toaster` |
| **Spinner** | `spinner.tsx` | Custom | `Spinner` |
| **Tooltip** | `tooltip.tsx` | `@base-ui/react/tooltip` | `Tooltip`, `TooltipTrigger`, `TooltipContent` |

### Overlay

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Command** | `command.tsx` | `cmdk` | `Command`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandSeparator`, `CommandShortcut`, `CommandDialog` |
| **Context Menu** | `context-menu.tsx` | `@base-ui/react/menu` | (Multiple parts) |
| **Dialog** | `dialog.tsx` | `@base-ui/react/dialog` | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose` |
| **Drawer** | `drawer.tsx` | `vaul` | `Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`, `DrawerClose` |
| **Dropdown Menu** | `dropdown-menu.tsx` | `@base-ui/react/menu` | (Multiple parts) |
| **Hover Card** | `hover-card.tsx` | `@base-ui/react/popover` | `HoverCard`, `HoverCardTrigger`, `HoverCardContent` |
| **Menubar** | `menubar.tsx` | `@base-ui/react/menubar` | (Multiple parts) |
| **Popover** | `popover.tsx` | `@base-ui/react/popover` | `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverClose` |
| **Sheet** | `sheet.tsx` | `@base-ui/react/dialog` | `Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`, `SheetClose` |

### Layout & Utility

| Component | File | Base UI | Exports |
|---|---|---|---|
| **Aspect Ratio** | `aspect-ratio.tsx` | Custom | `AspectRatio` |
| **Button** | `button.tsx` | Custom (cva) | `Button`, `buttonVariants` |
| **Collapsible** | `collapsible.tsx` | `@base-ui/react/collapsible` | `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` |
| **Direction** | `direction.tsx` | Custom | `DirectionProvider` |
| **Item** | `item.tsx` | Custom (cva) | `Item` |
| **Kbd** | `kbd.tsx` | Custom | `Kbd` |
| **Resizable** | `resizable.tsx` | `react-resizable-panels` | `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle` |
| **Scroll Area** | `scroll-area.tsx` | `@base-ui/react/scroll-area` | `ScrollArea`, `ScrollBar` |
| **Separator** | `separator.tsx` | `@base-ui/react/separator` | `Separator` |
| **Theme Provider** | `theme-provider.tsx` | `next-themes` | `ThemeProvider`, `ThemeToggle` |

---

## Macro Presets (18 files)

| Preset | File | Micro Source | Props |
|---|---|---|---|
| **AccordionPreset** | `accordion-preset.tsx` | `accordion.tsx` | `items: AccordionPresetItem[]` |
| **AvatarPreset** | `avatar-preset.tsx` | `avatar.tsx` | `src?`, `alt?`, `fallback?` |
| **BreadcrumbPreset** | `breadcrumb-preset.tsx` | `breadcrumb.tsx` | `items: BreadcrumbPresetItem[]` |
| **CarouselPreset** | `carousel-preset.tsx` | `carousel.tsx` | `items: ReactNode[]`, `showArrows?`, `showDots?` |
| **CheckboxPreset** | `checkbox-preset.tsx` | `checkbox.tsx` | `label?`, `description?`, `errorMessage?` |
| **ComboboxPreset** | `combobox-preset.tsx` | `combobox.tsx` | `options: ComboboxOption[]`, `label?`, `placeholder?` |
| **FieldPreset** | `field-preset.tsx` | `field.tsx` | `label?`, `description?`, `errorMessage?`, `children` |
| **InputOTPPreset** | `input-otp-preset.tsx` | `input-otp.tsx` | `maxLength`, `label?`, `description?` |
| **InputPreset** | `input-preset.tsx` | `input.tsx` | `label?`, `description?`, `errorMessage?` |
| **NativeSelectPreset** | `native-select-preset.tsx` | `native-select.tsx` | `label?`, `description?`, `errorMessage?` |
| **PaginationPreset** | `pagination-preset.tsx` | `pagination.tsx` | `totalPages`, `currentPage`, `onPageChange` |
| **ProgressPreset** | `progress-preset.tsx` | `progress.tsx` | `value?`, `label?`, `showValue?` |
| **RadioGroupPreset** | `radio-group-preset.tsx` | `radio-group.tsx` | `options: RadioGroupOption[]`, `label?` |
| **SelectPreset** | `select-preset.tsx` | `select.tsx` | `options: SelectOption[]`, `placeholder?` |
| **SliderPreset** | `slider-preset.tsx` | `slider.tsx` | `label?`, `description?`, `errorMessage?` |
| **SwitchPreset** | `switch-preset.tsx` | `switch.tsx` | `label?`, `description?`, `errorMessage?` |
| **TabsPreset** | `tabs-preset.tsx` | `tabs.tsx` | `items: TabsPresetItem[]` |
| **TextareaPreset** | `textarea-preset.tsx` | `textarea.tsx` | `label?`, `description?`, `errorMessage?` |

---

## Test Coverage

| Test File | Component | Tests |
|---|---|---|
| `button.test.tsx` | Button (micro) | 2 |
| `accordion-preset.test.tsx` | AccordionPreset | 3 |
| `checkbox-preset.test.tsx` | CheckboxPreset | 7 |
| `field-preset.test.tsx` | FieldPreset | 7 |
| `input-preset.test.tsx` | InputPreset | 8 |
| `progress-preset.test.tsx` | ProgressPreset | 7 |
| `slider-preset.test.tsx` | SliderPreset | 6 |
| `switch-preset.test.tsx` | SwitchPreset | 7 |
| `tabs-preset.test.tsx` | TabsPreset | 3 |
| `textarea-preset.test.tsx` | TextareaPreset | 6 |
| `utils.test.ts` | cn utility | 1 |
| **Total** | | **57 tests** |
