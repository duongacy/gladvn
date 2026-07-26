import { useState } from "react";

import {
  BoxIcon,
  CheckCircle2Icon,
  LayersIcon,
  PlusIcon,
  SendIcon,
  SettingsIcon,
  ShieldAlertIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react";

import { SelectPreset } from "../../components/macro/select-preset";
import { Avatar, AvatarFallback } from "../../components/micro/avatar";
import { Button } from "../../components/micro/button";
import { Spinner } from "../../components/micro/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/micro/tooltip";
import { SectionHeader } from "../../dev/components/showcase";
import { Size } from "../../lib/types";

export default function ButtonsSection() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => setIsSending(false), 1500);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1500);
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Buttons"
        description="Comprehensive collection of interactive elements with full state management and accessibility."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {}
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <ShieldAlertIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Danger Zone</h3>
              <p className="text-xs text-muted-foreground">
                Destructive actions
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 flex flex-col gap-3">
            <p className="text-sm font-medium">Delete Workspace</p>
            <p className="text-xs text-muted-foreground">
              This action cannot be undone. All data will be lost.
            </p>
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
                        {isDeleting && <Spinner />}
                        {!isDeleting && <Trash2Icon />}
                        {isDeleting && "Đang xoá..."}
                        {!isDeleting && "Xoá vĩnh viễn"}
                      </Button>
                    }
                  />
                  <TooltipContent>Irreversible action!</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {}
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <SendIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Form Actions</h3>
              <p className="text-xs text-muted-foreground">Primary workflows</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <UserIcon className="size-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="h-2 w-20 rounded-full bg-muted-foreground/20 mb-1" />
                <div className="h-2 w-32 rounded-full bg-muted-foreground/10" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Button
                size={globalSize}
                variant="ghost"
                color="secondary"
                className="px-2"
                iconOnly
              >
                <SettingsIcon className="size-4" />
              </Button>
              <Button
                size={globalSize}
                color="primary"
                disabled={isSending}
                onClick={handleSend}
              >
                {isSending && <Spinner />}
                {!isSending && <CheckCircle2Icon />}
                {isSending && "Đang lưu..."}
                {!isSending && "Lưu thay đổi"}
              </Button>
            </div>
          </div>
        </div>

        {}
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 items-center justify-center rounded-xl bg-info/10 text-info">
              <LayersIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Quick Actions</h3>
              <p className="text-xs text-muted-foreground">Icon-only buttons</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center p-6 border border-border rounded-xl bg-card shadow-sm mt-4">
            <Button size={globalSize} variant="soft" color="primary" iconOnly>
              <PlusIcon />
            </Button>
            <Button size={globalSize} variant="soft" color="secondary" iconOnly>
              <SettingsIcon />
            </Button>
            <Button
              size={globalSize}
              variant="soft"
              color="destructive"
              iconOnly
            >
              <Trash2Icon />
            </Button>
          </div>
        </div>
      </div>

      {}
      <div className="rounded-2xl border border-border bg-card/40 overflow-hidden shadow-sm">
        <div className="border-b border-b-border bg-muted/30 px-6 py-4">
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
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Variant
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Primary
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Secondary
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Destructive
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Success
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Warning
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Info
                </th>
                <th className="pb-4 font-medium text-muted-foreground text-sm">
                  Tertiary
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {(["solid", "soft", "outline", "ghost", "link"] as const).map(
                (variant) => (
                  <tr
                    key={variant}
                    className="group hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 pr-4">
                      <span className="text-sm font-medium capitalize">
                        {variant}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <Button
                        size={globalSize}
                        variant={variant}
                        color="primary"
                      >
                        Button
                      </Button>
                    </td>
                    <td className="py-4 pr-4">
                      <Button
                        size={globalSize}
                        variant={variant}
                        color="secondary"
                      >
                        Button
                      </Button>
                    </td>
                    <td className="py-4 pr-4">
                      <Button
                        size={globalSize}
                        variant={variant}
                        color="destructive"
                      >
                        Button
                      </Button>
                    </td>
                    <td className="py-4 pr-4">
                      <Button
                        size={globalSize}
                        variant={variant}
                        color="success"
                      >
                        Button
                      </Button>
                    </td>
                    <td className="py-4 pr-4">
                      <Button
                        size={globalSize}
                        variant={variant}
                        color="warning"
                      >
                        Button
                      </Button>
                    </td>
                    <td className="py-4 pr-4">
                      <Button size={globalSize} variant={variant} color="info">
                        Button
                      </Button>
                    </td>
                    <td className="py-4 pr-4">
                      <Button
                        size={globalSize}
                        variant={variant}
                        color="tertiary"
                      >
                        Button
                      </Button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
