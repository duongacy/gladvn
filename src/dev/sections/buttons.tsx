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
  SettingsIcon,
  UserIcon,
  ShieldAlertIcon,
  CreditCardIcon,
  BellIcon,
  PlusIcon,
  BoxIcon
} from "lucide-react"
import { useContext, useState } from "react"
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
  Spinner,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from "../../index"
import { ShowcaseSizeContext } from "../App"
import { SectionHeader } from "../components/showcase"

export default function ButtonsSection() {
  const globalSize = useContext(ShowcaseSizeContext)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleSend = () => {
    setIsSending(true)
    setTimeout(() => setIsSending(false), 1500)
  }

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => setIsDeleting(false), 1500)
  }

  return (
    <div className="space-y-6">
      <SectionHeader 
        title="Buttons & Badges" 
        description="Comprehensive collection of interactive elements with full state management and accessibility." 
      />

      {/* Real-world Contexts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Context 1: Danger Zone */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <ShieldAlertIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Danger Zone</h3>
              <p className="text-xs text-muted-foreground">Destructive actions</p>
            </div>
          </div>
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-3">
            <p className="text-sm font-medium">Delete Workspace</p>
            <p className="text-xs text-muted-foreground">This action cannot be undone. All data will be lost.</p>
            <div className="mt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button 
                        size={globalSize} 
                        color="destructive" 
                        className="w-full"
                        disabled={isDeleting}
                        onClick={handleDelete}
                      >
                        {isDeleting ? <Spinner /> : <Trash2Icon />}
                        {isDeleting ? "Deleting..." : "Delete Permanently"}
                      </Button>
                    }
                  />
                  <TooltipContent>Irreversible action!</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Context 2: Form Actions */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SendIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Form Actions</h3>
              <p className="text-xs text-muted-foreground">Primary workflows</p>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-4 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary/10 text-primary"><UserIcon className="size-4"/></AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="h-2 w-20 rounded-full bg-muted-foreground/20 mb-1" />
                <div className="h-2 w-32 rounded-full bg-muted-foreground/10" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Button size={globalSize} variant="ghost" color="secondary" className="px-2">
                <SettingsIcon className="size-4" />
              </Button>
              <Button 
                size={globalSize} 
                color="primary"
                disabled={isSending}
                onClick={handleSend}
              >
                {isSending ? <Spinner /> : <CheckCircle2Icon />}
                {isSending ? "Saving" : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>

        {/* Context 3: Profiles & Badges */}
        <div className="rounded-2xl border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-success/10 text-success">
              <Badge variant="default" className="size-5 p-0 flex items-center justify-center rounded-full"><span className="sr-only">Pro</span></Badge>
            </div>
            <div>
              <h3 className="font-semibold">Profiles & Status</h3>
              <p className="text-xs text-muted-foreground">Avatars and Badges</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-3 rounded-xl border bg-card shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">shadcn</span>
                    <Badge variant="default" className="h-4 text-[9px] px-1.5 py-0">PRO</Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">Premium Plan</span>
                </div>
              </div>
              <ChevronRightIcon className="size-4 text-muted-foreground" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="success">Active</Badge>
              <Badge variant="secondary">Reviewing</Badge>
              <Badge variant="destructive">Suspended</Badge>
              <Badge variant="outline">Draft</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* The Matrix (Variants x Colors) */}
      <div className="rounded-2xl border bg-card/40 overflow-hidden shadow-sm">
        <div className="border-b bg-muted/30 px-6 py-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <BoxIcon className="size-5 text-primary" />
            The Button Matrix
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Comprehensive reference of all variants and semantic colors.
          </p>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr>
                <th className="pb-4 font-medium text-muted-foreground text-sm">Variant</th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">Primary</th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">Secondary</th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">Destructive</th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">Success</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {["solid", "soft", "outline", "ghost", "link"].map((variant) => (
                <tr key={variant} className="group hover:bg-muted/30 transition-colors">
                  <td className="py-4 pr-4">
                    <span className="text-sm font-medium capitalize">{variant}</span>
                  </td>
                  <td className="py-4 pr-4">
                    <Button size={globalSize} variant={variant as any} color="primary">Button</Button>
                  </td>
                  <td className="py-4 pr-4">
                    <Button size={globalSize} variant={variant as any} color="secondary">Button</Button>
                  </td>
                  <td className="py-4 pr-4">
                    <Button size={globalSize} variant={variant as any} color="destructive">Button</Button>
                  </td>
                  <td className="py-4 pr-4">
                    <Button size={globalSize} variant={variant as any} color="success">Button</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Toolbar & Groups */}
      <div className="rounded-2xl border bg-card/40 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-lg">Button Groups & Toolbars</h3>
            <p className="text-sm text-muted-foreground mt-1">For rich text editors and action bars.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-2 rounded-xl border bg-muted/30 w-fit overflow-x-auto">
          <ButtonGroup>
            <Button size={globalSize} variant="outline" color="secondary"><AlignLeftIcon /></Button>
            <Button size={globalSize} variant="outline" color="secondary"><AlignCenterIcon /></Button>
            <Button size={globalSize} variant="outline" color="secondary"><AlignRightIcon /></Button>
            <Button size={globalSize} variant="outline" color="secondary"><AlignJustifyIcon /></Button>
          </ButtonGroup>

          <div className="w-px h-6 bg-border shrink-0" />

          <ButtonGroup>
            <Button size={globalSize} variant="soft" color="secondary" className="font-bold">B</Button>
            <Button size={globalSize} variant="soft" color="secondary" className="italic">I</Button>
            <Button size={globalSize} variant="soft" color="secondary" className="underline">U</Button>
          </ButtonGroup>

          <div className="w-px h-6 bg-border shrink-0" />
          
          <Button size={globalSize} color="primary" variant="soft" className="shrink-0">
            <PlusIcon /> Insert
          </Button>
        </div>
      </div>

    </div>
  )
}