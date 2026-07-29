import { useState } from "react";

import { CheckCircle2Icon, LayersIcon, XIcon } from "lucide-react";

import { DialogPreset } from "../../components/macro/dialog-preset";
import { Button } from "../../components/micro/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/micro/dialog";
import { Input } from "../../components/micro/input";
import { Label } from "../../components/micro/label";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

function DialogMacroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const contentClass =
    globalSize === "sm"
      ? "sm:max-w-md"
      : globalSize === "md"
        ? "sm:max-w-lg"
        : "sm:max-w-xl";
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Sử dụng cơ bản", "Basic Usage")}
          description={t(
            "DialogPreset với title, description và footer đơn giản.",
            "DialogPreset with simple title, description, and footer.",
          )}
          code={`<DialogPreset
    title="Update Subscription"
    description="Are you sure you want to upgrade your plan to Pro? This will charge your card immediately."
    trigger={
      <Button variant="outline">Upgrade Plan</Button>
    }
    footer={
      <>
        <Button variant="ghost">Cancel</Button>
        <Button color="primary">Confirm</Button>
      </>
    }
  />`}
          preview={
            <>
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Biểu mẫu & Nội dung tùy chỉnh", "Forms & Custom Content")}
          description={t(
            "Sử dụng children để render form hoặc nội dung phức tạp.",
            "Use children to render forms or complex content.",
          )}
          code={`<DialogPreset
    title="Edit profile"
    description="Change your profile information here. Click save when done."
    trigger={
      <Button variant="outline">Edit profile</Button>
    }
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
  </DialogPreset>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Không có nút Đóng", "No Close Button")}
          description={t(
            "Ẩn nút X ở góc trên bằng showCloseButton={false}.",
            "Hide the top-right X button using showCloseButton={false}.",
          )}
          code={`<DialogPreset
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
      By selecting accept, you agree to our Terms of
      Service and Privacy Policy.
    </p>
  </DialogPreset>`}
          preview={
            <>
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
                  By selecting accept, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </DialogPreset>
            </>
          }
        />

        <ShowcaseExample
          title={t("Kích thước Nội dung Lớn", "Large Content Sizing")}
          description={t(
            "Sử dụng size='lg' cho nội dung lớn hơn.",
            "Use size='lg' for larger content.",
          )}
          code={`<DialogPreset
    title="Detailed Report"
    description="Monthly analysis and performance overview."
    trigger={<Button variant="outline">View Report</Button>}
    footer={<Button>Download PDF</Button>}
  >
    <div className="h-50 flex items-center justify-center rounded-md border border-border border-dashed bg-muted/20">
      <span className="text-muted-foreground text-sm">
        Large Content Area
      </span>
    </div>
  </DialogPreset>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t(
            "Sticky Footer (Nội dung dài)",
            "Sticky Footer (Long Content)",
          )}
          description={t(
            "Layout in-flow giúp footer luôn dính ở dưới cùng khi có thanh cuộn.",
            "In-flow layout keeps the footer sticky at the bottom when there is a scrollbar.",
          )}
          code={`<DialogPreset
    trigger={
      <Button variant="outline">View Long Content</Button>
    }
    title="Terms & Conditions"
    description="Scroll to the bottom to agree to the terms."
    footer={
      <div className="flex w-full sm:justify-end gap-2">
        <DialogClose render={<Button variant="ghost" />}>
          Cancel
        </DialogClose>
        <Button>I agree</Button>
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
  </DialogPreset>`}
          preview={
            <>
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
                    <DialogClose
                      render={<Button variant="ghost" size={globalSize} />}
                    >
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
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

function DialogMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();
  const contentClass =
    globalSize === "sm"
      ? "sm:max-w-md"
      : globalSize === "md"
        ? "sm:max-w-lg"
        : "sm:max-w-xl";

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Sử dụng cơ bản", "Basic Usage")}
          description={t(
            "Sử dụng các thành phần rời rạc để tạo dialog cơ bản.",
            "Use discrete components to create a basic dialog.",
          )}
          code={`<Dialog>
    <DialogTrigger
      render={
        <Button variant="outline">Upgrade Plan</Button>
      }
    />

      <DialogContent className={contentClass}>
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
    
  </Dialog>`}
          preview={
            <>
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
                      Are you sure you want to upgrade your plan to Pro? This
                      will charge your card immediately.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
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
            </>
          }
        />

        <ShowcaseExample
          title={t("Biểu mẫu & Nội dung tùy chỉnh", "Forms & Custom Content")}
          description={t(
            "Sử dụng form bên trong DialogContent.",
            "Use a form inside DialogContent.",
          )}
          code={`<Dialog>
    <DialogTrigger
      render={
        <Button variant="outline">Edit profile</Button>
      }
    />

      <DialogContent className={contentClass}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save
            when you're done.
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
            <Label
              htmlFor="username"
              className="text-right"
            >
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
          <Button type="submit">Save changes</Button>
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
    
  </Dialog>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t("Không có nút Đóng", "No Close Button")}
          description={t(
            "Không render nút XIcon thủ công.",
            "Do not manually render the XIcon button.",
          )}
          code={`<Dialog>
    <DialogTrigger
      render={<Button variant="outline">View Terms</Button>}
    />

      <DialogContent className={contentClass}>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            You must accept the new terms to continue using
            the application.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          By selecting accept, you agree to our Terms of Service and Privacy Policy.
        </p>
        <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
          <DialogClose
            render={<Button variant="outline" />}
          >
            Decline
          </DialogClose>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    
  </Dialog>`}
          preview={
            <>
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
                    Bằng cách chọn chấp nhận, bạn đồng ý với Điều khoản của
                    Service and Privacy Policy.
                  </p>
                  <DialogFooter className="-mx-4 -mb-4 mt-4 rounded-b-xl border-t border-t-border bg-muted/50 p-4">
                    <DialogClose
                      render={<Button variant="outline" size={globalSize} />}
                    >
                      Decline
                    </DialogClose>
                    <Button size={globalSize}>Accept</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          }
        />

        <ShowcaseExample
          title={t("Kích thước Nội dung Lớn", "Large Content Sizing")}
          description={t(
            "Sử dụng sm:max-w-lg cho nội dung lớn hơn.",
            "Use sm:max-w-lg for larger content.",
          )}
          code={`<Dialog>
    <DialogTrigger
      render={
        <Button variant="outline">View Report</Button>
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
    
  </Dialog>`}
          preview={
            <>
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
            </>
          }
        />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample
          title={t(
            "Sticky Footer (Nội dung dài)",
            "Sticky Footer (Long Content)",
          )}
          description={t(
            "Ghi đè class của DialogContent thành flex-col để khóa scroll ở phần body.",
            "Override DialogContent's class with flex-col to lock scroll in the body.",
          )}
          code={`<Dialog>
    <DialogTrigger
      render={
        <Button variant="outline">View Long Content</Button>
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
    
  </Dialog>`}
          preview={
            <>
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
                    <DialogClose
                      render={<Button variant="ghost" size={globalSize} />}
                    >
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
            </>
          }
        />

        <ShowcaseExample
          title={t("🧭 So sánh Use Case", "🧭 Use Case Comparison")}
          description={t(
            "Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro.",
            "Practical scenarios to help you decide whether to use Micro or Macro.",
          )}
          code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* ── Story 1: Macro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
          <CheckCircle2Icon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 1 · Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Alert or Basic Form
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        When you only need a title, description, and some buttons in the
        footer (or a short form), Macro saves you from
        declaring many child components.
      </p>
    </div>

    {/* ── Story 2: Micro wins ── */}
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
          <LayersIcon
            className="size-4"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Story 2 · Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Complex Custom Layout
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        When you want a Header with a special image/icon, skip
        the standard Footer, or have a complex split-pane layout
        inside the Dialog. Micro allows you to freely customize
        each part.
      </p>
    </div>
  </div>`}
          preview={
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                      <CheckCircle2Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Story 1 · Macro
                      </p>
                      <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                        Alert or Basic Form
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    When you only need a title, description, and some buttons in
                    the footer (or a short form), Macro saves you from declaring
                    many child components.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                      <LayersIcon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Story 2 · Micro
                      </p>
                      <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                        Complex Custom Layout
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    When you want a Header with a special image/icon, skip the
                    standard Footer, or have a complex split-pane layout inside
                    the Dialog. Micro allows you to freely customize each part.
                  </p>
                </div>
              </div>
            </>
          }
        />
      </ExampleGrid>
    </div>
  );
}

export default function DialogShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title="Dialog"
      description={t(
        "Một cửa sổ phương thức làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi.",
        "A modal window that interrupts the user with important content and expects a response.",
      )}
      micro={{ content: <DialogMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <DialogMacroShowcase globalSize={globalSize} /> }}
      guideline={
        <ShowcaseDocs>
          <DocsH3>Structure and Routing</DocsH3>
          <DocsP>
            <DocsCode>DialogPreset</DocsCode> is a Macro component that
            simplifies the Dialog API, including Trigger, Header, Content, and
            Footer.
          </DocsP>
          <DocsP>
            Dialog is always rendered via Portal to avoid being hidden by
            containers with <DocsCode>overflow: hidden</DocsCode> or a low{" "}
            <DocsCode>z-index</DocsCode>.
          </DocsP>
        </ShowcaseDocs>
      }
    />
  );
}
