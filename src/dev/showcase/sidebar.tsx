import { SectionHeader, ExampleSection } from "@/dev/components/showcase";
import { Package2Icon, SettingsIcon, UserIcon, FolderIcon, MoreHorizontalIcon } from "lucide-react";

import {
  Sidebar,
  SidebarLogo,
  SidebarLabel,
  SidebarMenuItemList,
  SidebarMenuItem,
  useSidebarToggle,
} from "@/components/micro/sidebar";

export default function SidebarShowcase() {
  const { sidebarRef, toggleSidebar, defaultState } = useSidebarToggle("expanded");

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Sidebar (Ultra Primitive)"
        description="Sidebar nguyên thủy nhất, chỉ nhận context state, không có JS lằng nhằng, CSS thuần túy đóng mở tức thì."
      >
      </SectionHeader>

      <ExampleSection
        label="Dumb Component Architecture"
        description="Sidebar không có transition width, sử dụng display: none để ẩn ngay lập tức, không gây hiệu ứng giật khung."
        fullWidth
        codeString={`const { sidebarRef, toggleSidebar, defaultState } = useSidebarToggle("expanded");

return (
  <div className="flex h-[500px] w-full">
    <Sidebar ref={sidebarRef} defaultState={defaultState} expandedWidth={300}>
      <SidebarLogo icon={<Package2Icon />} text="Acme Corp" />
      <div className="flex-1 py-2 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <SidebarLabel icon={<FolderIcon />} text="Projects" />
          <SidebarMenuItemList>
            <SidebarMenuItem text="Active Projects" />
            <SidebarMenuItem text="Archived Projects" />
            <SidebarMenuItem text="Templates" />
          </SidebarMenuItemList>
        </div>
      </div>
    </Sidebar>
    <main className="flex-1 p-6">
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </main>
  </div>
);`}
      >
        <div className="rounded-xl border overflow-hidden flex h-[500px] w-full bg-background">
          <Sidebar ref={sidebarRef} defaultState={defaultState} expandedWidth={300}>
            {/* Logo */}
            <SidebarLogo icon={<Package2Icon />} text="Acme Corp" />

            {/* Menu chính */}
            <div className="flex-1 py-2 flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <SidebarLabel icon={<FolderIcon />} text="Projects" />
                <SidebarMenuItemList>
                  <SidebarMenuItem text="Active Projects" />
                  <SidebarMenuItem text="Archived Projects" />
                  <SidebarMenuItem text="Templates" />
                </SidebarMenuItemList>
              </div>

              <div className="flex flex-col gap-1">
                <SidebarLabel icon={<UserIcon />} text="Team" />
                <SidebarMenuItemList>
                  <SidebarMenuItem text="Members" />
                  <SidebarMenuItem text="Permissions" />
                </SidebarMenuItemList>
              </div>

            </div>

            {/* Footer */}
            <div className="p-2 border-t border-sidebar-border mt-auto">
              <SidebarLabel icon={<SettingsIcon />} text="Settings" />
            </div>
          </Sidebar>

          <main className="flex-1 flex flex-col bg-muted/10 p-6">
            <h1 className="text-xl font-bold">Main Application</h1>
            <p className="text-muted-foreground mt-4">
              Hãy bấm menu State ở phía trên cùng, hoặc bấm nút Toggle bên dưới để chuyển qua lại giữa Expanded và Collapsed.
            </p>
            <div className="mt-6">
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90 transition-colors"
                onClick={toggleSidebar}
              >
                Toggle Sidebar (Direct DOM Mutation)
              </button>
            </div>
          </main>
        </div>
      </ExampleSection>
    </div>
  );
}
