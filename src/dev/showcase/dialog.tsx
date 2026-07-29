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
  DialogTrigger
} from "../../components/micro/dialog";
import { Input } from "../../components/micro/input";
import { Label } from "../../components/micro/label";
import { useDevContext } from "../../dev/components/dev-context";
import {
  DocsCode,
  DocsH3,
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";
import { cn } from "../../lib/utils";

function DialogMacroShowcase({ globalSize }: { globalSize: Size }) {
  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Basic Usage" description="DialogPreset với title, description và footer đơn giản." code={`<DialogPreset
    title="Update Subscription"
    description="Are you sure you want to upgrade your plan to Pro? This will charge your card immediately."
    trigger={
      <Button variant="outline">Upgrade Plan</Button>
    }
    footer={
      <>
        <Button variant="ghost">Huỷ</Button>
        <Button color="primary">Confirm</Button>
      </>
    }
  />`} preview={
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
                    } />

        <ShowcaseExample title="Forms & Custom Content" description="Sử dụng children để render form hoặc nội dung phức tạp." code={`<DialogPreset
    title="Chỉnh sửa hồ sơ"
    description="Thay đổi thông tin hồ sơ của bạn tại đây. Bấm lưu khi hoàn tất."
    trigger={
      <Button variant="outline">Chỉnh sửa hồ sơ</Button>
    }
    footer={<Button type="submit">Lưu thay đổi</Button>}
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
  </DialogPreset>`} preview={
                      <>
              <DialogPreset
                          size={globalSize}
                          title="Chỉnh sửa hồ sơ"
                          description="Thay đổi thông tin hồ sơ của bạn tại đây. Bấm lưu khi hoàn tất."
                          trigger={
                            <Button variant="outline" size={globalSize}>
                              Chỉnh sửa hồ sơ
                            </Button>
                          }
                          footer={
                            <Button type="submit" size={globalSize}>
                              Lưu thay đổi
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
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="No Close Button" description="Ẩn nút X ở góc trên bằng showCloseButton={false}." code={`<DialogPreset
    showCloseButton={false}
    title="Điều khoản Dịch vụ"
    description="Bạn phải chấp nhận điều khoản mới để tiếp tục sử dụng ứng dụng."
    trigger={<Button variant="outline">View Terms</Button>}
    footer={
      <>
        <Button variant="outline">Decline</Button>
        <Button>Accept</Button>
      </>
    }
  >
    <p className="text-sm text-muted-foreground">
      Bằng cách chọn chấp nhận, bạn đồng ý với Điều khoản của
      Dịch vụ và Chính sách bảo mật.
    </p>
  </DialogPreset>`} preview={
                      <>
              <DialogPreset
                          size={globalSize}
                          showCloseButton={false}
                          title="Điều khoản Dịch vụ"
                          description="Bạn phải chấp nhận điều khoản mới để tiếp tục sử dụng ứng dụng."
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
                            Bằng cách chọn chấp nhận, bạn đồng ý với Điều khoản của Service and
                            Privacy Policy.
                          </p>
                        </DialogPreset>
                      </>
                    } />

        <ShowcaseExample title="Large Content Sizing" description="Sử dụng size='lg' cho nội dung lớn hơn." code={`<DialogPreset
    title="Báo cáo chi tiết"
    description="Phân tích hàng tháng và tổng quan hiệu suất."
    trigger={<Button variant="outline">View Report</Button>}
    footer={<Button>Download PDF</Button>}
  >
    <div className="h-50 flex items-center justify-center rounded-md border border-border border-dashed bg-muted/20">
      <span className="text-muted-foreground text-sm">
        Large Content Area
      </span>
    </div>
  </DialogPreset>`} preview={
                      <>
              <DialogPreset
                          size={globalSize}
                          title="Báo cáo chi tiết"
                          description="Phân tích hàng tháng và tổng quan hiệu suất."
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
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Sticky Footer (Long Content)" description="Layout in-flow giúp footer luôn dính ở dưới cùng khi có thanh cuộn." code={`<DialogPreset
    trigger={
      <Button variant="outline">View Long Content</Button>
    }
    title="Điều khoản & Điều kiện"
    description="Cuộn xuống dưới cùng để có thể đồng ý với điều khoản."
    footer={
      <div className="flex w-full sm:justify-end gap-2">
        <DialogClose render={<Button variant="ghost" />}>
          Cancel
        </DialogClose>
        <Button>Tôi đồng ý</Button>
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
  </DialogPreset>`} preview={
                      <>
              <DialogPreset
                          trigger={
                            <Button variant="outline" size={globalSize}>
                              View Long Content
                            </Button>
                          }
                          size={globalSize}
                          title="Điều khoản & Điều kiện"
                          description="Cuộn xuống dưới cùng để có thể đồng ý với điều khoản."
                          footer={
                            <div className="flex w-full sm:justify-end gap-2">
                              <DialogClose
                                render={<Button variant="ghost" size={globalSize} />}
                              >
                                Cancel
                              </DialogClose>
                              <Button size={globalSize}>Tôi đồng ý</Button>
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
                    } />
      </ExampleGrid>
    </div>
  );
}

function DialogMicroShowcase({ globalSize }: { globalSize: Size }) {
  const contentClass =
    globalSize === "sm"
      ? "sm:max-w-md"
      : globalSize === "md"
        ? "sm:max-w-lg"
        : "sm:max-w-xl";

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample title="Basic Usage" description="Sử dụng các thành phần rời rạc để tạo dialog cơ bản." code={`<Dialog>
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
    
  </Dialog>`} preview={
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
                                  Are you sure you want to upgrade your plan to Pro? This will
                                  charge your card immediately.
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
                      </>
                    } />

        <ShowcaseExample title="Forms & Custom Content" description="Sử dụng form bên trong DialogContent." code={`<Dialog>
    <DialogTrigger
      render={
        <Button variant="outline">Chỉnh sửa hồ sơ</Button>
      }
    />

      <DialogContent className={contentClass}>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa hồ sơ</DialogTitle>
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
          <Button type="submit">Lưu thay đổi</Button>
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
    
  </Dialog>`} preview={
                      <>
              <Dialog>
                          <DialogTrigger
                            render={
                              <Button variant="outline" size={globalSize}>
                                Chỉnh sửa hồ sơ
                              </Button>
                            }
                          />

                            <DialogContent className={contentClass}>
                              <DialogHeader>
                                <DialogTitle>Chỉnh sửa hồ sơ</DialogTitle>
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
                                  Lưu thay đổi
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
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="No Close Button" description="Không render nút XIcon thủ công." code={`<Dialog>
    <DialogTrigger
      render={<Button variant="outline">View Terms</Button>}
    />

      <DialogContent className={contentClass}>
        <DialogHeader>
          <DialogTitle>Điều khoản Dịch vụ</DialogTitle>
          <DialogDescription>
            You must accept the new terms to continue using
            the application.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Bằng cách chọn chấp nhận, bạn đồng ý với Điều khoản
          of Dịch vụ và Chính sách bảo mật.
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
    
  </Dialog>`} preview={
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
                                <DialogTitle>Điều khoản Dịch vụ</DialogTitle>
                                <DialogDescription>
                                  You must accept the new terms to continue using the
                                  application.
                                </DialogDescription>
                              </DialogHeader>
                              <p className="text-sm text-muted-foreground">
                                Bằng cách chọn chấp nhận, bạn đồng ý với Điều khoản của Service
                                and Privacy Policy.
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
                    } />

        <ShowcaseExample title="Large Content Sizing" description="Sử dụng sm:max-w-lg cho nội dung lớn hơn." code={`<Dialog>
    <DialogTrigger
      render={
        <Button variant="outline">View Report</Button>
      }
    />

      <DialogContent className={contentClass}>
        <DialogHeader>
          <DialogTitle>Báo cáo chi tiết</DialogTitle>
          <DialogDescription>
            Phân tích hàng tháng và tổng quan hiệu suất.
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
    
  </Dialog>`} preview={
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
                                <DialogTitle>Báo cáo chi tiết</DialogTitle>
                                <DialogDescription>
                                  Phân tích hàng tháng và tổng quan hiệu suất.
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
                      </>
                    } />
      </ExampleGrid>

      <ExampleGrid>
        <ShowcaseExample title="Sticky Footer (Long Content)" description="Ghi đè class của DialogContent thành flex-col để khóa scroll ở phần body." code={`<Dialog>
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
          <DialogTitle>Điều khoản & Điều kiện</DialogTitle>
          <DialogDescription>
            Cuộn xuống dưới cùng để có thể đồng ý với điều
            khoản.
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
          <Button>Tôi đồng ý</Button>
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
    
  </Dialog>`} preview={
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
                                <DialogTitle>Điều khoản & Điều kiện</DialogTitle>
                                <DialogDescription>
                                  Cuộn xuống dưới cùng để có thể đồng ý với điều khoản.
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
                                <Button size={globalSize}>Tôi đồng ý</Button>
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
                      </>
                    } />

        <ShowcaseExample title="🧭 So sánh Use Case" description="Các kịch bản thực tế giúp bạn quyết định nên dùng Micro hay Macro." code={`<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
            Story 1 · Dùng Macro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Cảnh báo hoặc Form cơ bản
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Khi bạn chỉ cần một tiêu đề, mô tả và vài nút bấm ở
        footer (hoặc 1 form ngắn), Macro giúp bạn không phải
        khai báo hàng loạt component con.
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
            Story 2 · Dùng Micro
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Layout tuỳ chỉnh phức tạp
          </h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        Khi bạn muốn Header có hình ảnh/icon đặc biệt, bỏ
        qua Footer chuẩn, hoặc có layout split-pane phức tạp
        bên trong Dialog. Micro cho phép bạn tự do thay đổi
        từng phần.
      </p>
    </div>
  </div>`} preview={
                      <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 shrink-0 rounded-full bg-green-500/10 p-1.5 text-green-600">
                                <CheckCircle2Icon className="size-4" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  Story 1 · Dùng Macro
                                </p>
                                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                                  Cảnh báo hoặc Form cơ bản
                                </h3>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Khi bạn chỉ cần một tiêu đề, mô tả và vài nút bấm ở footer (hoặc
                              1 form ngắn), Macro giúp bạn không phải khai báo hàng loạt
                              component con.
                            </p>
                          </div>

                          <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1.5 text-blue-600">
                                <LayersIcon className="size-4" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  Story 2 · Dùng Micro
                                </p>
                                <h3 className="mt-0.5 text-sm font-semibold text-foreground">
                                  Layout tuỳ chỉnh phức tạp
                                </h3>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Khi bạn muốn Header có hình ảnh/icon đặc biệt, bỏ qua Footer
                              chuẩn, hoặc có layout split-pane phức tạp bên trong Dialog.
                              Micro cho phép bạn tự do thay đổi từng phần.
                            </p>
                          </div>
                        </div>
                      </>
                    } />
      </ExampleGrid>
    </div>
  );
}

export default function DialogShowcase() {
  const { size: globalSize } = useDevContext();
  return (
    <Showcase
      title="Dialog"
      description="Một cửa sổ phương thức làm gián đoạn người dùng với nội dung quan trọng và mong đợi phản hồi."
      micro={{ content: <DialogMicroShowcase globalSize={globalSize} /> }}
      macro={{ content: <DialogMacroShowcase globalSize={globalSize} /> }}
      guideline={
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
