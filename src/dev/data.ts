import { LayersIcon, BoxIcon, TypeIcon, AlertCircleIcon, PaletteIcon, ToggleLeftIcon } from "lucide-react"

export const VARIANTS = ["solid", "outline", "soft", "ghost", "link"] as const
export const COLORS = ["primary", "secondary", "destructive", "warning", "success", "info", "tertiary"] as const
export const SIZES = ["sm", "md", "lg"] as const

export const NAV = [
  { id: "overview", label: "Overview", icon: LayersIcon },
  { id: "buttons", label: "Buttons", icon: BoxIcon },
  { id: "forms", label: "Forms", icon: TypeIcon },
  { id: "feedback", label: "Feedback", icon: AlertCircleIcon },
  { id: "display", label: "Display", icon: PaletteIcon },
  { id: "interactive", label: "Interactive", icon: ToggleLeftIcon },
]

export const STATS = [
  { label: "Components", value: "55" },
  { label: "Tokens", value: "40+" },
  { label: "Variants", value: "5×7" },
  { label: "Dark Mode", value: "✓" },
]

export const COLOR_INFO = {
  primary: { label: "Primary", description: "Main action" },
  secondary: { label: "Secondary", description: "Alternative" },
  destructive: { label: "Destructive", description: "Danger / Delete" },
  warning: { label: "Warning", description: "Caution" },
  success: { label: "Success", description: "Confirm / Done" },
  info: { label: "Info", description: "Information" },
  tertiary: { label: "Tertiary", description: "Extra / Beta" },
}

