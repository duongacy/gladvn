import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from "../../index"
import { SectionHeader, ExampleSection } from "../components/showcase";

export default function SidebarShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Sidebar" description="A composable, accessible sidebar component." />

      <ExampleSection label="Default" description="Sidebar with grouped menu items.">
        <div className="rounded-xl border overflow-hidden flex h-[400px] w-full max-w-2xl">
          <SidebarProvider>
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {['Home', 'Inbox', 'Calendar'].map((item) => (
                        <SidebarMenuItem key={item}>
                          <SidebarMenuButton asChild>
                            <a href="#">
                              <span>{item}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-6 flex flex-col items-center justify-center text-muted-foreground">
              Main content area
            </main>
          </SidebarProvider>
        </div>
      </ExampleSection>
    </div>
  );
}
