import { useState } from "react";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  DocsH3,
  DocsP,
  DocsCode,
} from "@/dev/components/showcase";

import { type Size } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/micro/dialog";
import { DialogPreset } from "@/components/macro/dialog-preset";
import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { MonoSelect } from "@/dev/components/mono-select";
import { XIcon } from "lucide-react";

// ──────────────────────────────────────────────────────────
// Macro Showcase
// ──────────────────────────────────────────────────────────
function DialogMacroShowcase({ globalSize }: { globalSize: Size }) {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="space-y-10">
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Basic Usage"
          description="DialogPreset với title, description và footer đơn giản."
          codeString={`<DialogPreset
  title="Update Subscription"
  description="Are you sure you want to upgrade your plan to Pro? This will charge your card immediately."
  trigger={<Button variant="outline">Upgrade Plan</Button>}
  footer={
    <>
      <Button variant="ghost">Cancel</Button>
      <Button color="primary">Confirm</Button>
    </>
  }
/>
`}
        >
          <DialogPreset
            size={globalSize}
            title="Update Subscription"
            description="Are you sure you want to upgrade your plan to Pro? This will charge your card immediately."
            trigger={
              <Button variant="outline" size={globalSize}>
                Upgrade Plan
              </Button>
            }
            footer={
              <>
                <Button variant="ghost" size={globalSize}>
                  Cancel
                </Button>
                <Button color="primary" size={globalSize}>
                  Confirm
                </Button>
              </>
            }
          />
        </ExampleSection>

        <ExampleSection
          label="Forms & Custom Content"
          description="Sử dụng children để render form hoặc nội dung phức tạp."
          codeString={`<DialogPreset
  title="Edit profile"
  description="Make changes to your profile here. Click save when you're done."
  trigger={<Button variant="outline">Edit Profile</Button>}
  footer={<Button type="submit">Save changes</Button>}
>
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
</DialogPreset>
`}
        >
          <DialogPreset
            size={globalSize}
            title="Edit profile"
            description="Make changes to your profile here. Click save when you're done."
            trigger={
              <Button variant="outline" size={globalSize}>
                Edit Profile
              </Button>
            }
            footer={
              <Button type="submit" size={globalSize}>
                Save changes
              </Button>
            }
          >
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
          </DialogPreset>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="No Close Button"
          description="Ẩn nút X ở góc trên bằng showCloseButton={false}."
          codeString={`<DialogPreset
  showCloseButton={false}
  title="Terms of Service"
  description="You must accept the new terms to continue using the application."
  trigger={<Button variant="outline">View Terms</Button>}
  footer={
    <>
      <Button variant="outline">Decline</Button>
      <Button>Accept</Button>
    </>
  }
>
  <p className="text-sm text-muted-foreground">
    By clicking accept, you agree to our updated Terms of Service and Privacy Policy.
  </p>
</DialogPreset>
`}
        >
          <DialogPreset
            size={globalSize}
            showCloseButton={false}
            title="Terms of Service"
            description="You must accept the new terms to continue using the application."
            trigger={
              <Button variant="outline" size={globalSize}>
                View Terms
              </Button>
            }
            footer={
              <>
                <Button variant="outline" size={globalSize}>
                  Decline
                </Button>
                <Button size={globalSize}>Accept</Button>
              </>
            }
          >
            <p className="text-sm text-muted-foreground">
              By clicking accept, you agree to our updated Terms of Service and
              Privacy Policy.
            </p>
          </DialogPreset>
        </ExampleSection>

        <ExampleSection
          label="Large Content Sizing"
          description="Sử dụng size='lg' cho nội dung lớn hơn."
          codeString={`<DialogPreset
  title="Detailed Report"
  description="Monthly analytics and performance overview."
  trigger={<Button variant="outline">View Report</Button>}
  footer={<Button>Download PDF</Button>}
>
  <div className="h-[200px] flex items-center justify-center rounded-md border border-dashed bg-muted/20">
    <span className="text-muted-foreground text-sm">Large Content Area</span>
  </div>
</DialogPreset>
`}
        >
          <DialogPreset
            size={globalSize}
            title="Detailed Report"
            description="Monthly analytics and performance overview."
            trigger={
              <Button variant="outline" size={globalSize}>
                View Report
              </Button>
            }
            footer={<Button size={globalSize}>Download PDF</Button>}
          >
            <div className="h-[200px] flex items-center justify-center rounded-md border border-dashed bg-muted/20">
              <span className="text-muted-foreground text-sm">
                Large Content Area
              </span>
            </div>
          </DialogPreset>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Controlled State"
          description="Sử dụng open và onOpenChange để quản lý trạng thái đóng mở bằng React state."
          codeString={`<div className="w-full flex flex-col gap-4 items-center justify-center">
  <div className="flex gap-4 items-center">
    <Button onClick={() => setControlledOpen(true)} variant="outline">
      Open Controlled Dialog
    </Button>
    <span className="text-sm text-muted-foreground font-mono">
      State: {controlledOpen ? "true" : "false"}
    </span>
  </div>

  <DialogPreset
    open={controlledOpen}
    onOpenChange={setControlledOpen}
    title="Controlled Dialog"
    description="Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài."
    footer={
      <Button color="primary" onClick={() => setControlledOpen(false)}>
        Close Manually
      </Button>
    }
  >
    <p className="text-sm text-foreground">Bạn có thể đóng bằng nút bên dưới hoặc dấu X.</p>
  </DialogPreset>
</div>
`}
        >
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-4 items-center">
              <Button
                onClick={() => setControlledOpen(true)}
                variant="outline"
                size={globalSize}
              >
                Open Controlled Dialog
              </Button>
              <span className="text-sm text-muted-foreground font-mono">
                State: {controlledOpen ? "true" : "false"}
              </span>
            </div>

            <DialogPreset
              open={controlledOpen}
              onOpenChange={setControlledOpen}
              size={globalSize}
              title="Controlled Dialog"
              description="Trạng thái của hộp thoại này được quản lý hoàn toàn bởi React state bên ngoài."
              footer={
                <Button
                  color="primary"
                  onClick={() => setControlledOpen(false)}
                  size={globalSize}
                >
                  Close Manually
                </Button>
              }
            >
              <p className="text-sm text-foreground">
                Bạn có thể đóng bằng nút bên dưới hoặc dấu X.
              </p>
            </DialogPreset>
          </div>
        </ExampleSection>

        <ExampleSection
          label="Sticky Footer (Long Content)"
          description="Layout in-flow giúp footer luôn dính ở dưới cùng khi có thanh cuộn."
          codeString={`<DialogPreset
  trigger={
    <Button variant="outline">
      View Long Content
    </Button>
  }
  title="Terms & Conditions"
  description="Cuộn xuống dưới cùng để có thể đồng ý với điều khoản."
  footer={
    <div className="flex w-full sm:justify-end gap-2">
      <DialogClose
        render={<Button variant="ghost" />}
      >
        Cancel
      </DialogClose>
      <Button>I Agree</Button>
    </div>
  }
>
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
</DialogPreset>
`}
        >
          <DialogPreset
            trigger={
              <Button variant="outline" size={globalSize}>
                View Long Content
              </Button>
            }
            size={globalSize}
            title="Terms & Conditions"
            description="Cuộn xuống dưới cùng để có thể đồng ý với điều khoản."
            footer={
              <div className="flex w-full sm:justify-end gap-2">
                <DialogClose
                  render={<Button variant="ghost" size={globalSize} />}
                >
                  Cancel
                </DialogClose>
                <Button size={globalSize}>I Agree</Button>
              </div>
            }
          >
            <div className="flex h-[800px] flex-col items-center justify-between rounded-md border border-dashed bg-muted/20 py-8">
              <span className="text-sm font-medium text-muted-foreground">
                START OF CONTENT
              </span>
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">👇</span>
                <span className="text-sm text-muted-foreground">
                  Keep scrolling
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                END OF CONTENT
              </span>
            </div>
          </DialogPreset>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// Micro Showcase
// ──────────────────────────────────────────────────────────
function DialogMicroShowcase({ globalSize }: { globalSize: Size }) {
  const [controlledOpen, setControlledOpen] = useState(false);
  const contentClass =
    globalSize === "sm"
      ? "sm:max-w-md"
      : globalSize === "md"
        ? "sm:max-w-lg"
        : "sm:max-w-xl";

  return (
    <div className="space-y-10">
      <ExampleGrid columns={2}>
        <ExampleSection
          label="Basic Usage"
          description="Sử dụng các thành phần rời rạc để tạo dialog cơ bản."
          codeString={`<Dialog>
  <DialogTrigger
    render={
      <Button variant="outline">
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
        render={<Button variant="ghost" />}
      >
        Cancel
      </DialogClose>
      <Button color="primary">
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
`}
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

        <ExampleSection
          label="Forms & Custom Content"
          description="Sử dụng form bên trong DialogContent."
          codeString={`<Dialog>
  <DialogTrigger
    render={
      <Button variant="outline">
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
      <Button type="submit">
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
`}
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
            </DialogContent>
          </Dialog>
        </ExampleSection>

        <ExampleSection
          label="Large Content Sizing"
          description="Sử dụng sm:max-w-lg cho nội dung lớn hơn."
          codeString={`<Dialog>
  <DialogTrigger
    render={
      <Button variant="outline">
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
      <Button>Download PDF</Button>
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
`}
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
        <ExampleSection
          label="Controlled State"
          description="Sử dụng open và onOpenChange để quản lý trạng thái đóng mở bằng React state."
          codeString={`<div className="w-full flex flex-col gap-4 items-center justify-center">
  <div className="flex gap-4 items-center">
    <Button onClick={() => setControlledOpen(true)} variant="outline">
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
        <Button color="primary" onClick={() => setControlledOpen(false)}>
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
`}
        >
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-4 items-center">
              <Button
                onClick={() => setControlledOpen(true)}
                variant="outline"
                size={globalSize}
              >
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
                    Trạng thái của hộp thoại này được quản lý hoàn toàn bởi
                    React state bên ngoài.
                  </DialogDescription>
                </DialogHeader>
                <p className="text-sm text-foreground">
                  Bạn có thể đóng bằng nút bên dưới hoặc dấu X.
                </p>
                <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t bg-muted/50 p-4">
                  <Button
                    color="primary"
                    onClick={() => setControlledOpen(false)}
                    size={globalSize}
                  >
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

        <ExampleSection
          label="Sticky Footer (Long Content)"
          description="Ghi đè class của DialogContent thành flex-col để khóa scroll ở phần body."
          codeString={`<Dialog>
  <DialogTrigger
    render={
      <Button variant="outline">
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
        render={<Button variant="ghost" />}
      >
        Cancel
      </DialogClose>
      <Button>I Agree</Button>
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
`}
        >
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  View Long Content
                </Button>
              }
            />
            <DialogContent
              className={cn(
                contentClass,
                "flex flex-col gap-0 p-0 overflow-hidden",
              )}
            >
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
                    <span className="text-sm text-muted-foreground">
                      Keep scrolling
                    </span>
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

// ──────────────────────────────────────────────────────────
// Main Showcase
// ──────────────────────────────────────────────────────────
export default function DialogShowcase() {
  const [globalSize, setGlobalSize] = useState<Size>("md");

  return (
    <Showcase
      title="Dialog"
      description="Một cửa sổ phương thức làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi."
      actions={
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as Size)}
          options={[
            { value: "sm", label: "Size: sm" },
            { value: "md", label: "Size: md" },
            { value: "lg", label: "Size: lg" },
          ]}
        />
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <DialogMicroShowcase globalSize={globalSize} />,
        },
        {
          label: "Macro (Preset)",
          content: <DialogMacroShowcase globalSize={globalSize} />,
        },
      ]}
      generalConcept={
        <ShowcaseDocs>
          <DocsH3>Cấu trúc và Định tuyến</DocsH3>
          <DocsP>
            <DocsCode>DialogPreset</DocsCode> là một component Macro giúp rút
            gọn API của Dialog, bao gồm Trigger, Header, Content và Footer.
          </DocsP>
          <DocsP>
            Dialog luôn được render thông qua Portal để tránh bị che khuất bởi
            các container có <DocsCode>overflow: hidden</DocsCode> hoặc{" "}
            <DocsCode>z-index</DocsCode> thấp.
          </DocsP>
        </ShowcaseDocs>
      }
    />
  );
}
