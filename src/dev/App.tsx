import { useState, createContext } from "react"
import { Badge, Switch, Separator, useTheme, MonoSelect } from "../../src/index"
import { LayersIcon } from "lucide-react"
import { NAV } from "./data"
import OverviewSection from "./sections/overview"
import ButtonsSection from "./sections/buttons"
import FormsSection from "./sections/forms"
import FeedbackSection from "./sections/feedback"
import DisplaySection from "./sections/display"
import InteractiveSection from "./sections/interactive"

export const ShowcaseSizeContext = createContext<"sm" | "md" | "lg">("md")

export default function App() {
  const theme = useTheme()
  const [active, setActive] = useState("overview")
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md")

  const sections: Record<string, React.ReactNode> = {
    overview: <OverviewSection />,
    buttons: <ButtonsSection />,
    forms: <FormsSection />,
    feedback: <FeedbackSection />,
    display: <DisplaySection />,
    interactive: <InteractiveSection />,
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
              <LayersIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm">@duongy96/sadcn</span>
            <Badge variant="secondary" className="text-[10px]">v0.2.1</Badge>
          </div>
          <div className="flex items-center gap-2">
            <MonoSelect 
              value={globalSize} 
              onValueChange={(v) => setGlobalSize(v as any)}
              options={[
                { value: "sm", label: "Size: sm" },
                { value: "md", label: "Size: md" },
                { value: "lg", label: "Size: lg" },
              ]}
            />
            <Separator orientation="vertical" className="h-4 mx-2" />
            <span className="text-xs text-muted-foreground mr-1">Dark</span>
            <Switch
              checked={theme?.mode === "dark"}
              onCheckedChange={(v) => theme?.setMode(v ? "dark" : "light")}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px] gap-0">
        {/* Sidebar */}
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r pt-6 px-3 hidden md:block">
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Components
          </p>
          <nav className="space-y-0.5">
            {NAV.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors text-left ${active === id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
              >
                <Icon className="size-4 shrink-0" />
                {label}
              </button>
            ))}
          </nav>

          <Separator className="my-4" />
          <div className="px-2 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Install</p>
            <div className="rounded-md bg-muted px-2.5 py-2 font-mono text-[10px] text-muted-foreground break-all">
              npm i @duongy96/sadcn
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 px-6 py-8">
          {/* Mobile nav */}
          <div className="mb-6 flex gap-1.5 overflow-x-auto pb-1 md:hidden">
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${active === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          <ShowcaseSizeContext.Provider value={globalSize}>
            {sections[active]}
          </ShowcaseSizeContext.Provider>
        </main>
      </div>
    </div>
  )
}
