import {
  AlertCircleIcon,
  CheckCircle2Icon
} from "lucide-react"
import { useContext } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../index"
import { ShowcaseSizeContext } from "../App"


import { SectionHeader, ShowcaseBlock } from "../components/showcase"
import { COLOR_INFO, COLORS, SIZES, VARIANTS } from "../data"

export default function ButtonsSection() {
  const globalSize = useContext(ShowcaseSizeContext)

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
                  <Button variant={v} color={c} size={globalSize}>
                    {COLOR_INFO[c].label}
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <div className="grid gap-5 sm:grid-cols-2">
        <ShowcaseBlock title="Icons & Spacing">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size={globalSize}>Default</Button>
              <Button size={globalSize}>
                <CheckCircle2Icon />
                <span>With Icon</span>
              </Button>
              <Button size={globalSize} color="secondary" variant="soft">
                <AlertCircleIcon />
              </Button>
            </div>
          </div>
        </ShowcaseBlock>

        <ShowcaseBlock title="States">
          <div className="flex flex-wrap gap-2">
            <Button size={globalSize}>Normal</Button>
            <Button size={globalSize} disabled>Disabled</Button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger render={<Button size={globalSize} variant="outline">Tooltip</Button>} />
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