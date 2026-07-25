import * as React from "react";
import { 
  BarChart3Icon, 
  HomeIcon, 
  LayoutDashboardIcon, 
  SettingsIcon, 
  UsersIcon, 
  BellIcon, 
  SearchIcon,
  MenuIcon
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/micro/avatar";
import { Button } from "../components/micro/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/micro/card";
import { Input } from "../components/micro/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../components/micro/dropdown-menu";

export default function DashboardBlock() {
  return (
    <div className="flex min-h-screen w-full bg-muted/20">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-border bg-background md:flex">
        <div className="flex h-16 items-center border-b border-border px-6">
          <LayoutDashboardIcon className="mr-2 size-5 text-primary" />
          <span className="font-bold">Gladvn App</span>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <Button variant="soft" color="primary" className="w-full justify-start">
            <HomeIcon className="mr-2 size-4" /> Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <BarChart3Icon className="mr-2 size-4" /> Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <UsersIcon className="mr-2 size-4" /> Customers
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <SettingsIcon className="mr-2 size-4" /> Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b border-border bg-background px-6">
          <Button variant="ghost" iconOnly className="md:hidden">
            <MenuIcon className="size-5" />
          </Button>
          
          <div className="flex-1">
            <div className="relative w-full max-w-sm">
              <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full pl-9 bg-muted/50" />
            </div>
          </div>
          
          <Button variant="ghost" iconOnly className="text-muted-foreground relative">
            <BellIcon className="size-5" />
            <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive border-2 border-background"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger render={<button className="outline-none" />}>
              <Avatar className="size-8 ring-2 ring-primary/20 hover:ring-primary/50 transition-all cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem color="destructive">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground mt-1">Here's an overview of your business today.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Download Report</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success font-medium">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Subscriptions</CardDescription>
                <CardTitle className="text-2xl">+2350</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success font-medium">+180.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Sales</CardDescription>
                <CardTitle className="text-2xl">+12,234</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success font-medium">+19%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Active Now</CardDescription>
                <CardTitle className="text-2xl">+573</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  <span className="text-destructive font-medium">-24</span> since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t border-border/50 bg-muted/10 rounded-b-xl">
                <p className="text-sm text-muted-foreground">Chart placeholder</p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Avatar className="size-9 hidden sm:flex">
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Olivia Martin</p>
                      <p className="text-xs text-muted-foreground">olivia.martin@email.com</p>
                    </div>
                    <div className="font-medium text-sm">+$1,999.00</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
