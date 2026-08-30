import {
  BarChart3Icon,
  BellIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon
} from "lucide-react";
import * as React from "react";
import { DatePicker } from "../macro";
import { Avatar, AvatarFallback, AvatarImage } from "../micro/avatar";
import { Badge } from "../micro/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../micro/breadcrumb";
import { Button } from "../micro/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../micro/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../micro/dropdown-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../micro/hover-card";
import { Input } from "../micro/input";
import { Progress } from "../micro/progress";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../micro/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../micro/table";

const SidebarContent = () => (
  <>
    <div className="flex h-16 items-center border-b border-border px-6">
      <LayoutDashboardIcon className="mr-2 size-5 text-primary" />
      <span className="font-bold text-lg">Gladvn App</span>
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
  </>
);

export default function DashboardBlock() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen w-full bg-muted/20">
      {/* Sidebar Desktop */}
      <aside className="hidden w-64 flex-col border-r border-border bg-background md:flex">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b border-border bg-background px-4 md:px-6">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" iconOnly className="md:hidden">
                  <MenuIcon className="size-5" />
                </Button>
              }
            />
            <SheetContent side="left" className="w-64 p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <SidebarContent />
            </SheetContent>
          </Sheet>

          {/* Breadcrumb Navigation */}
          <div className="hidden sm:flex flex-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex-1 sm:flex-none flex justify-end">
            <div className="relative w-full max-w-sm sm:w-64">
              <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full pl-9 bg-muted/50 rounded-full" />
            </div>
          </div>

          <Button variant="ghost" iconOnly className="text-muted-foreground relative shrink-0">
            <BellIcon className="size-5" />
            <span className="absolute top-1 right-1 size-2 rounded-full bg-destructive border-2 border-background"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger render={<button className="outline-none shrink-0" />}>
              <Avatar className="size-8 ring-2 ring-primary/20 hover:ring-primary/50 transition-all cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <p className="text-muted-foreground mt-1">Here's an overview of your business today.</p>
            </div>
            <div className="flex items-center gap-2">
              <DatePicker
                mode="single"
                value={date}
                onValueChange={setDate}
              />
              <Button color="primary">Download Report</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl">$45,231.89</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground">
                  <span className="text-success font-medium">+20.1%</span> from last month
                </p>
                <div className="space-y-1">
                  <div className="flex text-xs justify-between">
                    <span>Monthly Goal</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-1.5" />
                </div>
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
              <CardContent className="h-[350px] flex items-center justify-center border-t border-border/50 bg-muted/10 rounded-b-xl">
                <p className="text-sm text-muted-foreground">Chart placeholder</p>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>You made 265 sales this month.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00", status: "success" },
                      { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00", status: "pending" },
                      { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "$299.00", status: "success" },
                      { name: "William Kim", email: "will@email.com", amount: "$99.00", status: "failed" },
                    ].map((sale, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <HoverCard>
                            <HoverCardTrigger
                              render={
                                <div className="flex items-center gap-3 cursor-pointer">
                                  <Avatar className="size-8">
                                    <AvatarFallback>{sale.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                  </Avatar>
                                  <div className="space-y-0.5">
                                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                                    <p className="text-xs text-muted-foreground">{sale.email}</p>
                                  </div>
                                </div>
                              }
                            />
                            <HoverCardContent className="w-80">
                              <div className="flex justify-between space-x-4">
                                <Avatar>
                                  <AvatarFallback>{sale.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">@{sale.name.toLowerCase().replace(' ', '')}</h4>
                                  <p className="text-sm">Premium customer since 2023.</p>
                                  <div className="flex items-center pt-2">
                                    <span className="text-xs text-muted-foreground">Last active 2 hours ago</span>
                                  </div>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell>
                          {sale.status === "success" && <Badge variant="soft" color="success">Paid</Badge>}
                          {sale.status === "pending" && <Badge variant="outline" color="warning">Pending</Badge>}
                          {sale.status === "failed" && <Badge variant="soft" color="destructive">Failed</Badge>}
                        </TableCell>
                        <TableCell className="text-right font-medium">{sale.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
