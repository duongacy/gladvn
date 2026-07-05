import {
  LayersIcon,
  BoxIcon,
  TypeIcon,
  AlertCircleIcon,
  PaletteIcon,
  ToggleLeftIcon,
} from "lucide-react";

export const VARIANTS = ["solid", "outline", "soft", "ghost", "link"] as const;
export const COLORS = [
  "primary",
  "secondary",
  "destructive",
  "warning",
  "success",
  "info",
  "tertiary",
] as const;
export const SIZES = ["sm", "md", "lg"] as const;

export const NAV = [
  { id: "overview", label: "Overview", icon: LayersIcon },
  { id: "buttons", label: "Buttons", icon: BoxIcon },
  { id: "forms", label: "Forms", icon: TypeIcon },
  { id: "feedback", label: "Feedback", icon: AlertCircleIcon },
  { id: "display", label: "Display", icon: PaletteIcon },
  { id: "interactive", label: "Interactive", icon: ToggleLeftIcon },
];

export const STATS = [
  { label: "Components", value: "55" },
  { label: "Tokens", value: "40+" },
  { label: "Variants", value: "5×7" },
  { label: "Dark Mode", value: "✓" },
];

export const COLOR_INFO = {
  primary: { label: "Primary", description: "Main action" },
  secondary: { label: "Secondary", description: "Alternative" },
  destructive: { label: "Destructive", description: "Danger / Delete" },
  warning: { label: "Warning", description: "Caution" },
  success: { label: "Success", description: "Confirm / Done" },
  info: { label: "Info", description: "Information" },
  tertiary: { label: "Tertiary", description: "Extra / Beta" },
};

export const COMPONENTS = [
  { id: "accordion", label: "Accordion", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "alert", label: "Alert", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "alert-dialog", label: "Alert Dialog", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "aspect-ratio", label: "Aspect Ratio", hasMicro: true, hasMacro: false, status: "stable" },
  { id: "avatar", label: "Avatar", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "badge", label: "Badge", hasMicro: true, hasMacro: false, status: "stable" },
  { id: "breadcrumb", label: "Breadcrumb", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "button", label: "Button", hasMicro: true, hasMacro: false, status: "stable" },
  { id: "calendar", label: "Calendar", hasMicro: true, hasMacro: false },
  { id: "card", label: "Card", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "carousel", label: "Carousel", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "chart", label: "Chart", hasMicro: true, hasMacro: false },
  { id: "checkbox", label: "Checkbox", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "collapsible", label: "Collapsible", hasMicro: true, hasMacro: false, status: "stable" },
  { id: "combobox", label: "Combobox", hasMicro: true, hasMacro: true },
  { id: "command", label: "Command", hasMicro: true, hasMacro: false },
  { id: "context-menu", label: "Context Menu", hasMicro: true, hasMacro: false },
  { id: "dialog", label: "Dialog", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "drawer", label: "Drawer", hasMicro: true, hasMacro: false },
  { id: "dropdown-menu", label: "Dropdown Menu", hasMicro: true, hasMacro: false },
  { id: "empty", label: "Empty", hasMicro: true, hasMacro: false },
  { id: "field", label: "Field", hasMicro: true, hasMacro: true },
  { id: "hover-card", label: "Hover Card", hasMicro: true, hasMacro: false },
  { id: "input", label: "Input", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "input-group", label: "Input Group", hasMicro: true, hasMacro: false },
  { id: "input-otp", label: "Input Otp", hasMicro: true, hasMacro: true },
  { id: "item", label: "Item", hasMicro: true, hasMacro: false },
  { id: "kbd", label: "Kbd", hasMicro: true, hasMacro: false },
  { id: "label", label: "Label", hasMicro: true, hasMacro: false },
  { id: "menubar", label: "Menubar", hasMicro: true, hasMacro: false },
  { id: "navigation-menu", label: "Navigation Menu", hasMicro: true, hasMacro: false },
  { id: "pagination", label: "Pagination", hasMicro: true, hasMacro: true },
  { id: "popover", label: "Popover", hasMicro: true, hasMacro: false },
  { id: "progress", label: "Progress", hasMicro: true, hasMacro: true },
  { id: "radio-group", label: "Radio Group", hasMicro: true, hasMacro: true },
  { id: "rhf", label: "React Hook Form", hasMicro: false, hasMacro: true },
  { id: "resizable", label: "Resizable", hasMicro: true, hasMacro: false },
  { id: "scroll-area", label: "Scroll Area", hasMicro: true, hasMacro: false },
  { id: "select", label: "Select", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "separator", label: "Separator", hasMicro: true, hasMacro: false },
  { id: "sheet", label: "Sheet", hasMicro: true, hasMacro: false },
  { id: "sidebar", label: "Sidebar", hasMicro: true, hasMacro: false },
  { id: "skeleton", label: "Skeleton", hasMicro: true, hasMacro: false },
  { id: "slider", label: "Slider", hasMicro: true, hasMacro: true },
  { id: "sonner", label: "Sonner", hasMicro: true, hasMacro: false },
  { id: "spinner", label: "Spinner", hasMicro: true, hasMacro: false },
  { id: "switch", label: "Switch", hasMicro: true, hasMacro: true },
  { id: "table", label: "Table", hasMicro: true, hasMacro: false },
  { id: "tabs", label: "Tabs", hasMicro: true, hasMacro: true },
  { id: "textarea", label: "Textarea", hasMicro: true, hasMacro: true, status: "stable" },
  { id: "toggle", label: "Toggle", hasMicro: true, hasMacro: false },
  { id: "toggle-group", label: "Toggle Group", hasMicro: true, hasMacro: false },
  { id: "tooltip", label: "Tooltip", hasMicro: true, hasMacro: false },
];



