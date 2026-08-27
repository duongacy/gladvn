import React from "react";
import { FolderIcon, Package2Icon, SettingsIcon, UserIcon } from "lucide-react";

import {
  Sidebar,
  SidebarLabel,
  SidebarLogo,
  SidebarMenuItem,
  SidebarMenuItemList,
  useSidebarToggle,
} from "../../components/micro/sidebar";
import { useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";

function useSidebarExamples() {
  const t = useI18n();
  const { sidebarRef, toggleSidebar, defaultState } =
    useSidebarToggle("expanded");

  return React.useMemo(
    () => [
      {
        title: "Dumb Component Architecture",
        description: t(
          "Sidebar không có transition width, sử dụng display: none để ẩn ngay lập tức, không gây hiệu ứng giật khung.",
          "Sidebar without width transition, uses display: none to hide instantly, preventing layout jitter."
        ),
        microCode: `const { sidebarRef, toggleSidebar, defaultState } = useSidebarToggle("expanded");

return (
  <div className="flex h-125 w-full">
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
);`,
        microPreview: (
          <div className="rounded-xl border border-border overflow-hidden flex h-125 w-full bg-background">
            <Sidebar
              ref={sidebarRef}
              defaultState={defaultState}
              expandedWidth={300}
            >
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

                <div className="flex flex-col gap-1">
                  <SidebarLabel icon={<UserIcon />} text="Team" />
                  <SidebarMenuItemList>
                    <SidebarMenuItem text="Members" />
                    <SidebarMenuItem text="Permissions" />
                  </SidebarMenuItemList>
                </div>
              </div>

              <div className="p-2 border-t border-sidebar-border mt-auto">
                <SidebarLabel icon={<SettingsIcon />} text="Settings" />
              </div>
            </Sidebar>

            <main className="flex-1 flex flex-col bg-muted/10 p-6">
              <h1 className="text-xl font-bold">Main Application</h1>
              <p className="text-muted-foreground mt-4">
                Please click the State menu at the top, or click the Toggle
                button below to switch between Expanded and Collapsed.
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
        ),
      },
    ],
    [t, sidebarRef, toggleSidebar, defaultState]
  );
}

export default function SidebarShowcase() {
  const t = useI18n();
  const examples = useSidebarExamples();

  return (
    <ConfigurableShowcase
      title="Sidebar (Ultra Primitive)"
      description={t(
        "Sidebar nguyên thuỷ nhất, chỉ nhận context state, CSS thuần tuý đóng mở tức thì.",
        "The most primitive sidebar, receives only context state, pure CSS instant toggle."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              <>
                Sidebar tối giản chỉ dùng CSS và DOM attribute để chuyển trạng
                thái expanded/collapsed. Không có JS transition, không
                re-render. Sử dụng useSidebarToggle hook để toggle bằng direct
                DOM mutation.
              </>,
              <>
                Minimalist sidebar uses only CSS and DOM attributes to toggle
                expanded/collapsed state. No JS transition, no re-render. Uses
                useSidebarToggle hook for toggling via direct DOM mutation.
              </>
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
