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
  MonoSelect,
} from "../../index";
import { SectionHeader, ExampleSection } from "../components/showcase";
import { MoreHorizontalIcon, ChevronRightIcon } from "lucide-react";

export default function SidebarShowcase() {
  const [globalSize, setGlobalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Sidebar"
        description="A composable, accessible sidebar component."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
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
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          size={globalSize === "md" ? "default" : globalSize}
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
                          size={globalSize === "md" ? "default" : globalSize}
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
                          size={globalSize === "md" ? "default" : globalSize}
                        >
                          <span>Settings</span>
                        </SidebarMenuButton>
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
            <main className="flex-1 flex flex-col">
              <header className="h-14 border-b px-4 flex items-center gap-4">
                <SidebarTrigger />
                <SidebarSeparator orientation="vertical" className="h-6" />
                <span className="font-medium text-sm">Dashboard</span>
              </header>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-muted-foreground bg-muted/10">
                Main content area
              </div>
            </main>
          </SidebarProvider>
        </div>
      </ExampleSection>
    </div>
  );
}
