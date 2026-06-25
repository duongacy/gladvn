import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  SendIcon,
  Trash2Icon,
  MailIcon,
  SettingsIcon
} from "lucide-react"
import { useContext } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  ButtonGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Spinner
} from "../../index"
import { ShowcaseSizeContext } from "../App"
import { SectionHeader, ShowcaseBlock } from "../components/showcase"

export default function ButtonsSection() {
  const globalSize = useContext(ShowcaseSizeContext)

  return (
    <div className="space-y-8">
      <SectionHeader 
        title="Buttons & Badges" 
        description="Comprehensive collection of interactive elements with full state management and accessibility." 
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* VARIANTS */}
        <ShowcaseBlock title="Variants">
          <div className="flex flex-wrap items-center gap-3">
            <Button size={globalSize} variant="solid">Solid (Default)</Button>
            <Button size={globalSize} variant="soft">Soft</Button>
            <Button size={globalSize} variant="outline">Outline</Button>
            <Button size={globalSize} variant="ghost">Ghost</Button>
            <Button size={globalSize} variant="link">Link</Button>
          </div>
        </ShowcaseBlock>

        {/* COLORS */}
        <ShowcaseBlock title="Semantic Colors">
          <div className="flex flex-wrap items-center gap-3">
            <Button size={globalSize} color="primary">Primary</Button>
            <Button size={globalSize} color="secondary">Secondary</Button>
            <Button size={globalSize} color="info">Info</Button>
            <Button size={globalSize} color="success">Success</Button>
            <Button size={globalSize} color="warning">Warning</Button>
            <Button size={globalSize} color="destructive">Destructive</Button>
          </div>
        </ShowcaseBlock>

        {/* ICONS & STATES */}
        <ShowcaseBlock title="Icons & States">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size={globalSize}>
                <MailIcon />
                <span>With Icon</span>
              </Button>
              <Button size={globalSize} color="secondary">
                <span>Next Step</span>
                <ChevronRightIcon />
              </Button>
              <Button size={globalSize} variant="outline" color="secondary">
                <SettingsIcon />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size={globalSize} disabled>
                <Spinner />
                <span>Please wait</span>
              </Button>
              <Button size={globalSize} disabled>Disabled</Button>
            </div>
          </div>
        </ShowcaseBlock>

        {/* GROUPS & TOOLTIPS */}
        <ShowcaseBlock title="Button Groups & Interactions">
          <div className="flex flex-col gap-4">
            <ButtonGroup>
              <Button size={globalSize} variant="outline" color="secondary"><AlignLeftIcon /></Button>
              <Button size={globalSize} variant="outline" color="secondary"><AlignCenterIcon /></Button>
              <Button size={globalSize} variant="outline" color="secondary"><AlignRightIcon /></Button>
              <Button size={globalSize} variant="outline" color="secondary"><AlignJustifyIcon /></Button>
            </ButtonGroup>

            <div className="flex flex-wrap items-center gap-3 mt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger render={<Button size={globalSize} variant="soft" color="destructive"><Trash2Icon /> Delete</Button>} />
                  <TooltipContent>Irreversible action!</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger render={<Button size={globalSize} color="success"><SendIcon /> Send</Button>} />
                  <TooltipContent side="right">Send message now</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </ShowcaseBlock>

        {/* BADGES */}
        <ShowcaseBlock title="Badges">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">New</Badge>
            <Badge variant="secondary">In Progress</Badge>
            <Badge variant="destructive">Failed</Badge>
            <Badge variant="outline">Draft</Badge>
          </div>
        </ShowcaseBlock>

        {/* AVATARS */}
        <ShowcaseBlock title="Avatars">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-muted text-muted-foreground border border-border">CD</AvatarFallback>
            </Avatar>
          </div>
        </ShowcaseBlock>
      </div>
    </div>
  )
}