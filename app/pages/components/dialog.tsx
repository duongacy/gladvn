import React from "react";
import { XIcon } from "lucide-react";

import { DialogPreset } from "@/components/macro/dialog-preset";
import { Button } from "@/components/micro/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/micro/dialog";
import { Input } from "@/components/micro/input";
import { Label } from "@/components/micro/label";
import { useDevContext, useI18n } from "~app/components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "~app/components/showcase";
import { cn } from "@/lib/utils";

function useDialogExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  const contentClass =
    globalSize === "sm"
      ? "sm:max-w-md"
      : globalSize === "md"
        ? "sm:max-w-lg"
        : "sm:max-w-xl";

  return React.useMemo(
    () => [
      {
        title: t("Sử dụng cơ bản", "Basic Usage"),
        description: t(
          "DialogPreset với title, description và footer đơn giản.",
          "DialogPreset with simple title, description, and footer."
        ),
        macroCode: `<DialogPreset
  title="Update Subscription"
  description="Are you sure you want to upgrade your plan to Pro? This will charge your card immediately."
  trigger={<Button variant="outline">Upgrade Plan</Button>}
  footer={
    <>
      <Button variant="ghost">Cancel</Button>
      <Button color="primary">Confirm</Button>
    </>
  }
/>`,
        macroPreview: (
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
        ),
        microCode: `<Dialog>
  <DialogTrigger
    render={<Button variant="outline">Upgrade Plan</Button>}
  />
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Update Subscription</DialogTitle>
      <DialogDescription>
        Are you sure you want to upgrade your plan to
        Pro? This will charge your card immediately.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
      <DialogClose render={<Button variant="ghost" />}>
        Cancel
      </DialogClose>
      <Button color="primary">Confirm</Button>
    </DialogFooter>
    <DialogClose
      render={
        <Button variant="ghost" className="absolute top-2 right-2" size="sm" iconOnly />
      }
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </DialogClose>
  </DialogContent>
</Dialog>`,
        microPreview: (
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
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
                <DialogClose render={<Button variant="ghost" size={globalSize} />}>
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
                    size={globalSize}
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        title: t("Biểu mẫu & Nội dung tùy chỉnh", "Forms & Custom Content"),
        description: t(
          "Sử dụng children để render form hoặc nội dung phức tạp.",
          "Use children to render forms or complex content."
        ),
        macroCode: `<DialogPreset
  title="Edit profile"
  description="Change your profile information here. Click save when done."
  trigger={<Button variant="outline">Edit profile</Button>}
  footer={<Button type="submit">Save changes</Button>}
>
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">Name</Label>
      <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="username" className="text-right">Username</Label>
      <Input id="username" defaultValue="@peduarte" className="col-span-3" />
    </div>
  </div>
</DialogPreset>`,
        macroPreview: (
          <DialogPreset
            size={globalSize}
            title="Edit profile"
            description="Change your profile information here. Click save when done."
            trigger={
              <Button variant="outline" size={globalSize}>
                Edit profile
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
        ),
        microCode: `<Dialog>
  <DialogTrigger
    render={<Button variant="outline">Edit profile</Button>}
  />
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input id="username" defaultValue="@peduarte" className="col-span-3" />
      </div>
    </div>
    <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
      <Button type="submit">Save changes</Button>
    </DialogFooter>
    <DialogClose
      render={
        <Button variant="ghost" className="absolute top-2 right-2" size="sm" iconOnly />
      }
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </DialogClose>
  </DialogContent>
</Dialog>`,
        microPreview: (
          <Dialog>
            <DialogTrigger
              render={
                <Button variant="outline" size={globalSize}>
                  Edit profile
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
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
                <Button type="submit" size={globalSize}>
                  Save changes
                </Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size={globalSize}
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        title: t("Không có nút Đóng", "No Close Button"),
        description: t(
          "Ẩn nút X ở góc trên.",
          "Hide the top-right X button."
        ),
        macroCode: `<DialogPreset
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
    By selecting accept, you agree to our Terms of Service and Privacy Policy.
  </p>
</DialogPreset>`,
        macroPreview: (
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
              By selecting accept, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </DialogPreset>
        ),
        microCode: `<Dialog>
  <DialogTrigger
    render={<Button variant="outline">View Terms</Button>}
  />
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Terms of Service</DialogTitle>
      <DialogDescription>
        You must accept the new terms to continue using the application.
      </DialogDescription>
    </DialogHeader>
    <p className="text-sm text-muted-foreground">
      By selecting accept, you agree to our Terms of Service and Privacy Policy.
    </p>
    <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
      <DialogClose render={<Button variant="outline" />}>
        Decline
      </DialogClose>
      <Button>Accept</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        microPreview: (
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
                  You must accept the new terms to continue using the application.
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                By selecting accept, you agree to our Terms of Service and Privacy Policy.
              </p>
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
                <DialogClose render={<Button variant="outline" size={globalSize} />}>
                  Decline
                </DialogClose>
                <Button size={globalSize}>Accept</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        title: t("Kích thước Nội dung Lớn", "Large Content Sizing"),
        description: t(
          "Thay đổi className max-w-lg cho nội dung lớn hơn.",
          "Use a different max-w class for larger content."
        ),
        macroCode: `<DialogPreset
  title="Detailed Report"
  description="Monthly analysis and performance overview."
  trigger={<Button variant="outline">View Report</Button>}
  footer={<Button>Download PDF</Button>}
>
  <div className="h-50 flex items-center justify-center rounded-md border border-border border-dashed bg-muted/20">
    <span className="text-muted-foreground text-sm">Large Content Area</span>
  </div>
</DialogPreset>`,
        macroPreview: (
          <DialogPreset
            size={globalSize}
            title="Detailed Report"
            description="Monthly analysis and performance overview."
            trigger={
              <Button variant="outline" size={globalSize}>
                View Report
              </Button>
            }
            footer={<Button size={globalSize}>Download PDF</Button>}
          >
            <div className="h-50 flex items-center justify-center rounded-md border border-border border-dashed bg-muted/20">
              <span className="text-muted-foreground text-sm">
                Large Content Area
              </span>
            </div>
          </DialogPreset>
        ),
        microCode: `<Dialog>
  <DialogTrigger
    render={<Button variant="outline">View Report</Button>}
  />
  <DialogContent className="sm:max-w-lg">
    <DialogHeader>
      <DialogTitle>Detailed Report</DialogTitle>
      <DialogDescription>
        Monthly analysis and performance overview.
      </DialogDescription>
    </DialogHeader>
    <div className="flex h-50 items-center justify-center rounded-md border border-border border-dashed bg-muted/20">
      <span className="text-sm text-muted-foreground">
        Large Content Area
      </span>
    </div>
    <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
      <Button>Download PDF</Button>
    </DialogFooter>
    <DialogClose
      render={
        <Button variant="ghost" className="absolute top-2 right-2" size="sm" iconOnly />
      }
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </DialogClose>
  </DialogContent>
</Dialog>`,
        microPreview: (
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
                  Monthly analysis and performance overview.
                </DialogDescription>
              </DialogHeader>
              <div className="flex h-50 items-center justify-center rounded-md border border-border border-dashed bg-muted/20">
                <span className="text-sm text-muted-foreground">
                  Large Content Area
                </span>
              </div>
              <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
                <Button size={globalSize}>Download PDF</Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size={globalSize}
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        ),
      },
      {
        title: t("Sticky Footer", "Sticky Footer (Long Content)"),
        description: t(
          "Layout in-flow giúp footer luôn dính ở dưới cùng khi có thanh cuộn.",
          "In-flow layout keeps the footer sticky at the bottom when there is a scrollbar."
        ),
        macroCode: `<DialogPreset
  trigger={<Button variant="outline">View Long Content</Button>}
  title="Terms & Conditions"
  description="Scroll to the bottom to agree to the terms."
  footer={
    <div className="flex w-full sm:justify-end gap-2">
      <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
      <Button>I agree</Button>
    </div>
  }
>
  <div className="flex h-200 flex-col items-center justify-between rounded-md border border-border border-dashed bg-muted/20 py-8">
    <span className="text-sm font-medium text-muted-foreground">START OF CONTENT</span>
    <div className="flex flex-col items-center gap-2">
      <span className="text-4xl">👇</span>
      <span className="text-sm text-muted-foreground">Keep scrolling</span>
    </div>
    <span className="text-sm font-medium text-muted-foreground">END OF CONTENT</span>
  </div>
</DialogPreset>`,
        macroPreview: (
          <DialogPreset
            trigger={
              <Button variant="outline" size={globalSize}>
                View Long Content
              </Button>
            }
            size={globalSize}
            title="Terms & Conditions"
            description="Scroll to the bottom to agree to the terms."
            footer={
              <div className="flex w-full sm:justify-end gap-2">
                <DialogClose render={<Button variant="ghost" size={globalSize} />}>
                  Cancel
                </DialogClose>
                <Button size={globalSize}>I agree</Button>
              </div>
            }
          >
            <div className="flex h-200 flex-col items-center justify-between rounded-md border border-border border-dashed bg-muted/20 py-8">
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
        ),
        microCode: `<Dialog>
  <DialogTrigger
    render={<Button variant="outline">View Long Content</Button>}
  />
  <DialogContent className="sm:max-w-md flex flex-col gap-0 p-0 overflow-hidden">
    <DialogHeader className="shrink-0 p-4 pb-0">
      <DialogTitle>Terms & Conditions</DialogTitle>
      <DialogDescription>
        Scroll to the bottom to agree to the terms.
      </DialogDescription>
    </DialogHeader>
    <div className="flex-1 min-h-0 overflow-y-auto p-4">
      <div className="flex h-200 flex-col items-center justify-between rounded-md border border-border border-dashed bg-muted/20 py-8">
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
    <DialogFooter className="shrink-0 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
      <DialogClose render={<Button variant="ghost" />}>
        Cancel
      </DialogClose>
      <Button>I agree</Button>
    </DialogFooter>
    <DialogClose
      render={
        <Button variant="ghost" className="absolute top-2 right-2" size="sm" iconOnly />
      }
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </DialogClose>
  </DialogContent>
</Dialog>`,
        microPreview: (
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
                "flex flex-col gap-0 p-0 overflow-hidden"
              )}
            >
              <DialogHeader className="shrink-0 p-4 pb-0">
                <DialogTitle>Terms & Conditions</DialogTitle>
                <DialogDescription>
                  Scroll to the bottom to agree to the terms.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 min-h-0 overflow-y-auto p-4">
                <div className="flex h-200 flex-col items-center justify-between rounded-md border border-border border-dashed bg-muted/20 py-8">
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
              <DialogFooter className="shrink-0 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
                <DialogClose render={<Button variant="ghost" size={globalSize} />}>
                  Cancel
                </DialogClose>
                <Button size={globalSize}>I agree</Button>
              </DialogFooter>
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    className="absolute top-2 right-2"
                    size={globalSize}
                    iconOnly
                  />
                }
              >
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        ),
      },
    ],
    [globalSize, contentClass, t]
  );
}

export default function DialogShowcase() {
  const t = useI18n();
  const examples = useDialogExamples();

  return (
    <ConfigurableShowcase
      title="Dialog"
      description={t(
        "Cửa sổ nổi hiển thị phía trên nội dung chính của trang.",
        "A modal window that appears on top of the main content."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Sử dụng Dialog để yêu cầu người dùng thực hiện một tác vụ hoặc thu thập thông tin quan trọng mà không làm mất bối cảnh hiện tại. Ngăn người dùng tương tác với phần còn lại của ứng dụng cho đến khi Dialog được đóng lại.",
              "Use Dialog to require the user to perform a task or collect important information without losing the current context. It prevents interaction with the rest of the app until closed."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
