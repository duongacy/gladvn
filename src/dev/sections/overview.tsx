import {
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Label,
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Progress,
} from "../../index"
import {
  BoxIcon,
  PaletteIcon,
  ZapIcon,
  LayersIcon,
  ComponentIcon,
  PaintbrushIcon
} from "lucide-react"

import { ColorSwatch } from "../components/showcase"
import { COLORS, STATS } from "../data"

export default function OverviewSection() {
  return (
    <div className="space-y-6">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* 🌟 Hero Banner - Span 2 cols */}
        <div className="md:col-span-2 row-span-2 relative overflow-hidden rounded-2xl border bg-card/40 p-6 md:p-8 shadow-sm transition-all hover:shadow-md hover:bg-card/60 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div>
              <Badge variant="secondary" className="mb-3 px-2.5 py-0.5 shadow-sm">
                ✨ sadcn UI v0.2.1
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Crafted for Perfection
              </h2>
              <p className="text-muted-foreground max-w-[400px]">
                A premium collection of components designed for modern, highly-interactive web applications. Focus on building your product, we handle the pixels.
              </p>
            </div>
            
            {/* Component Collage */}
            <div className="relative h-[240px] mt-8 w-full">
              {/* Floating elements */}
              <div className="absolute top-0 right-4 lg:right-12 hover:-translate-y-1 transition-transform duration-300">
                <Card className="w-[220px] shadow-xl bg-background/80 backdrop-blur-md border-primary/20">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <div className="size-2 rounded-full bg-success animate-pulse" />
                      Systems Online
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Progress value={85} className="h-1.5" />
                    <p className="text-[10px] text-muted-foreground mt-2">All services are operating normally.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute bottom-4 left-0 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col gap-3 p-4 rounded-xl border bg-card/50 backdrop-blur-md shadow-lg w-[260px]">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Dark Mode</Label>
                    <Switch defaultChecked />
                  </div>
                  <Select defaultValue="system">
                    <SelectTrigger size="sm">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300">
                <Button size="lg" className="shadow-xl shadow-primary/20">
                  <ZapIcon className="size-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 📦 Quick Example - Span 1 col */}
        <div className="md:col-span-1 rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 group flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                <BoxIcon className="size-5" />
              </div>
              <h3 className="font-semibold">Quick Install</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Available on npm. Add sadcn to your project in seconds.
            </p>
            <div className="rounded-lg bg-muted/50 px-3 py-2.5 font-mono text-xs border flex items-center justify-between">
              <span className="truncate">npm i @duongy96/sadcn</span>
            </div>
          </div>
          <Button className="w-full mt-6" variant="secondary">
            Copy Command
          </Button>
        </div>

        {/* 📊 Stats Grid - Span 1 col, 2x2 grid inside */}
        <div className="md:col-span-1 grid grid-cols-2 gap-4">
          {STATS.map((s, i) => {
            const icons = [<ComponentIcon />, <LayersIcon />, <PaintbrushIcon />, <ZapIcon />]
            return (
              <div key={s.label} className="rounded-2xl border bg-card/40 p-4 flex flex-col items-center justify-center text-center shadow-sm transition-all hover:shadow-md hover:bg-muted/50 group">
                <div className="text-muted-foreground/50 mb-2 group-hover:text-primary/50 transition-colors [&>svg]:size-5">
                  {icons[i % icons.length]}
                </div>
                <div className="text-3xl font-bold tracking-tighter group-hover:text-primary transition-colors">{s.value}</div>
                <div className="mt-1 text-[10px] uppercase font-medium tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            )
          })}
        </div>

        {/* 🎨 Color Tokens - Span 3 cols */}
        <div className="md:col-span-3 rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md group">
          <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <PaletteIcon className="size-5 text-primary" />
                Color Tokens
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Beautifully crafted semantic colors that adapt to any theme.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {COLORS.map((c) => (
              <div key={c} className="transition-transform duration-200 hover:-translate-y-1 hover:scale-105">
                <ColorSwatch color={c} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}