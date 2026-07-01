import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarHeader,
  SidebarFooter,
  SidebarInput,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
  SidebarTrigger,
  SidebarSeparator,
  SidebarInset,
  SidebarGroupAction,
  SidebarMenuSkeleton,
  SelectPreset} from "@/index";
import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { MoreHorizontalIcon, ChevronRightIcon, PlusIcon } from "lucide-react";

import { type Size } from "@/lib/types";

export default function SidebarShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Sidebar"
        description="A composable, accessible sidebar component."
      >
        <SelectPreset
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
          className="w-[120px] h-8 text-xs bg-background"
        />
      </SectionHeader>

      <ExampleSection
        label="Comprehensive Sidebar"
        description="Sidebar with header, footer, search input, actions, badges, and submenus."
      >
        <div className="rounded-xl border overflow-hidden flex h-[500px] w-full">
          <SidebarProvider>
            <Sidebar variant="sidebar">
              <SidebarHeader className="p-4 border-b">
                <div className="font-semibold text-lg">Acme Corp</div>
              </SidebarHeader>
              <SidebarContent>
                <div className="p-4">
                  <SidebarInput placeholder="Search..." />
                </div>
                <SidebarGroup>
                  <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                  <SidebarGroupAction title="Add">
                    <PlusIcon />
                  </SidebarGroupAction>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          size={globalSize}
                          isActive
                        >
                          <span>Dashboard</span>
                        </SidebarMenuButton>
                        <SidebarMenuBadge>12</SidebarMenuBadge>
                        <SidebarMenuAction>
                          <MoreHorizontalIcon />
                        </SidebarMenuAction>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          variant="outline"
                          size={globalSize}
                        >
                          <span>Projects</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton isActive>
                              Active
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                              Archived
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          size={globalSize}
                        >
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                  <SidebarGroupLabel>Recent</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuSkeleton showIcon />
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuSkeleton showIcon />
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter className="p-4 border-t text-sm text-muted-foreground">
                v1.2.0
              </SidebarFooter>
              <SidebarRail />
            </Sidebar>
            <SidebarInset>
              <header className="h-14 border-b px-4 flex items-center gap-4">
                <SidebarTrigger />
                <SidebarSeparator orientation="vertical" className="h-6" />
                <span className="font-medium text-sm">Dashboard</span>
              </header>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-muted-foreground bg-muted/10">
                Main content area
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ExampleSection>
    </div>
  );
}
