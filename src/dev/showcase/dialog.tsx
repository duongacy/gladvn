import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/micro/dialog";
import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { MonoSelect } from "@/dev/components/mono-select";
import { XIcon } from "lucide-react";

export default function DialogShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");
  const [controlledOpen, setControlledOpen] = useState(false);
  const contentClass = globalSize === "sm" ? "sm:max-w-md" : globalSize === "md" ? "sm:max-w-lg" : "sm:max-w-xl";

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Dialog"
        description="Một cửa sổ phương thức làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        {/* ── Basic Usage ── */}
        <ExampleSection
          label="Basic Usage"
          description="Sử dụng các thành phần rời rạc để tạo dialog cơ bản."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Upgrade Plan
                </Button>
              }
            />
            <DialogContent className={contentClass}>
              <DialogHeader>
                <DialogTitle>Update Subscription</DialogTitle>
                <DialogDescription>
                  Are you sure you want to upgrade your plan to Pro? This will
                  charge your card immediately.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4">
                <DialogClose
                  render={<Button variant="ghost" size={globalSize} />}
                >
                  Cancel
                </DialogClose>
                <Button color="primary" size={globalSize}>
                  Confirm
                </Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size="sm"
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </ExampleSection>

        {/* ── Forms & Custom Content ── */}
        <ExampleSection
          label="Forms & Custom Content"
          description="Sử dụng form bên trong DialogContent."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Edit Profile
                </Button>
              }
            />
            <DialogContent className={contentClass}>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4">
                <Button type="submit" size={globalSize}>
                  Save changes
                </Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size="sm"
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        {/* ── No Close Button ── */}
        <ExampleSection
          label="No Close Button"
          description="Không render nút XIcon thủ công."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  View Terms
                </Button>
              }
            />
            <DialogContent className={contentClass}>
              <DialogHeader>
                <DialogTitle>Terms of Service</DialogTitle>
                <DialogDescription>
                  You must accept the new terms to continue using the
                  application.
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                By clicking accept, you agree to our updated Terms of Service
                and Privacy Policy.
              </p>
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4">
                <DialogClose
                  render={<Button variant="outline" size={globalSize} />}
                >
                  Decline
                </DialogClose>
                <Button size={globalSize}>Accept</Button>
              </DialogFooter>
              {/* No XIcon DialogClose here */}
            </DialogContent>
          </Dialog>
        </ExampleSection>

        {/* ── Large Content Sizing ── */}
        <ExampleSection
          label="Large Content Sizing"
          description="Sử dụng sm:max-w-lg cho nội dung lớn hơn."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  View Report
                </Button>
              }
            />
            <DialogContent className={contentClass}>
              <DialogHeader>
                <DialogTitle>Detailed Report</DialogTitle>
                <DialogDescription>
                  Monthly analytics and performance overview.
                </DialogDescription>
              </DialogHeader>
              <div className="flex h-[200px] items-center justify-center rounded-md border border-dashed bg-muted/20">
                <span className="text-sm text-muted-foreground">
                  Large Content Area
                </span>
              </div>
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4">
                <Button size={globalSize}>Download PDF</Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size="sm"
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        {/* ── Controlled State ── */}
        <ExampleSection
          label="Controlled State"
          description="Sử dụng open và onOpenChange để quản lý trạng thái đóng mở bằng React state."
          codeString={`const [open, setOpen] = React.useState(false)

return (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button variant="outline">Open Controlled Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Controlled Dialog</DialogTitle>
        <DialogDescription>
          Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={() => setOpen(false)}>
          Close Manually
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)`}
        >
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-4 items-center">
              <Button onClick={() => setControlledOpen(true)} variant="outline" size={globalSize}>
                Open Controlled Dialog
              </Button>
              <span className="text-sm text-muted-foreground font-mono">
                State: {controlledOpen ? "true" : "false"}
              </span>
            </div>

            <Dialog open={controlledOpen} onOpenChange={setControlledOpen}>
              <DialogContent className={contentClass}>
                <DialogHeader>
                  <DialogTitle>Controlled Dialog</DialogTitle>
                  <DialogDescription>
                    Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài.
                  </DialogDescription>
                </DialogHeader>
                <p className="text-sm text-foreground">Bạn có thể đóng bằng nút bên dưới hoặc dấu X.</p>
                <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4">
                  <Button color="primary" onClick={() => setControlledOpen(false)} size={globalSize}>
                    Close Manually
                  </Button>
                </DialogFooter>
                <DialogClose
                  render={
                    <Button
                      variant="ghost"
                      className="absolute top-2 right-2"
                      size="sm"
                      iconOnly
                    />
                  }
                >
                  <XIcon />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </ExampleSection>

        {/* ── Sticky Footer (Manual Micro) ── */}
        <ExampleSection
          label="Sticky Footer (Long Content)"
          description="Ghi đè class của DialogContent thành flex-col để khóa scroll ở phần body."
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  View Long Content
                </Button>
              }
            />
            <DialogContent className={cn(contentClass, "flex flex-col gap-0 p-0 overflow-hidden")}>
              <DialogHeader className="shrink-0 p-4 pb-0">
                <DialogTitle>Terms & Conditions</DialogTitle>
                <DialogDescription>
                  Cuộn xuống dưới cùng để có thể đồng ý với điều khoản.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 min-h-0 overflow-y-auto p-4">
                <div className="flex h-[800px] flex-col items-center justify-between rounded-md border border-dashed bg-muted/20 py-8">
                  <span className="text-sm font-medium text-muted-foreground">
                    START OF CONTENT
                  </span>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl">👇</span>
                    <span className="text-sm text-muted-foreground">Keep scrolling</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    END OF CONTENT
                  </span>
                </div>
              </div>
              <DialogFooter className="shrink-0 rounded-b-xl border-t bg-muted/50 p-4">
                <DialogClose
                  render={<Button variant="ghost" size={globalSize} />}
                >
                  Cancel
                </DialogClose>
                <Button size={globalSize}>I Agree</Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size="sm"
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}
