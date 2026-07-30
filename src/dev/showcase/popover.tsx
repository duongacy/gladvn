import { Bell, Settings } from "lucide-react";

import { Button } from "../../components/micro/button";
import { Input } from "../../components/micro/input";
import { Label } from "../../components/micro/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../../components/micro/popover";
import { useDevContext, useI18n } from "../../dev/components/dev-context";
import {
  DocsP,
  ExampleGrid,
  Showcase,
  ShowcaseDocs,
  ShowcaseExample,
} from "../../dev/components/showcase";
import { type Size } from "../../lib/types";

function PopoverMicroShowcase({ globalSize }: { globalSize: Size }) {
  const t = useI18n();

  return (
    <div className="space-y-10">
      <ExampleGrid>
        <ShowcaseExample
          title={t("Mặc định (Default)", "Default")}
          description={t(
            "Cửa sổ Popover tiêu chuẩn.",
            "Standard Popover window.",
          )}
          code={`<Popover>
  <PopoverTrigger
    render={
      <Button variant="outline" size="${globalSize}">
        Open Popover
      </Button>
    }
  />
  <PopoverContent className="w-80" sideOffset={8}>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>
        Set dimensions for the layer.
      </PopoverDescription>
    </PopoverHeader>
    <div className="grid gap-4 mt-4">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          defaultValue="100%"
          className="col-span-2 h-8"
        />
      </div>
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          defaultValue="200px"
          className="col-span-2 h-8"
        />
      </div>
    </div>
  </PopoverContent>
</Popover>
`}
          preview={
            <>
              <Popover>
                <PopoverTrigger
                  render={
                    <Button variant="outline" size={globalSize}>
                      Open Popover
                    </Button>
                  }
                />

                <PopoverContent className="w-80" sideOffset={8}>
                  <PopoverHeader>
                    <PopoverTitle>Dimensions</PopoverTitle>
                    <PopoverDescription>
                      Set dimensions for the layer.
                    </PopoverDescription>
                  </PopoverHeader>
                  <div className="grid gap-4 mt-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        defaultValue="200px"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          }
        />

        <ShowcaseExample
          title={t("Kích hoạt bằng Icon (Icon Trigger)", "Icon Trigger")}
          description={t(
            "Mở Popover bằng Icon Button.",
            "Open Popover with an Icon Button.",
          )}
          code={`<div className="flex gap-4">
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="md"
            iconOnly
            className="rounded-full"
          >
            <Bell className="size-4" />
          </Button>
        }
      />
      
        <PopoverContent
          className="w-64"
          sideOffset={8}
          align="start"
        >
          <PopoverHeader>
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>
              You have 3 unread messages.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      
    </Popover>

    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="md" iconOnly>
            <Settings className="size-4" />
          </Button>
        }
      />
      
        <PopoverContent className="w-56" sideOffset={8}>
          <PopoverHeader>
            <PopoverTitle>Quick Settings</PopoverTitle>
          </PopoverHeader>
          <div className="flex flex-col gap-2 mt-2">
            <Button
              variant="ghost"
              className="justify-start"
            >
              Account
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
            >
              Appearance
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-destructive hover:text-destructive"
            >
              Log out
            </Button>
          </div>
        </PopoverContent>
      
    </Popover>
  </div>`}
          preview={
            <>
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="ghost"
                        size={globalSize}
                        iconOnly
                        className="rounded-full"
                      >
                        <Bell className="size-4" />
                      </Button>
                    }
                  />

                  <PopoverContent className="w-64" sideOffset={8} align="start">
                    <PopoverHeader>
                      <PopoverTitle>Notifications</PopoverTitle>
                      <PopoverDescription>
                        You have 3 unread messages.
                      </PopoverDescription>
                    </PopoverHeader>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger
                    render={
                      <Button variant="outline" size={globalSize} iconOnly>
                        <Settings className="size-4" />
                      </Button>
                    }
                  />

                  <PopoverContent className="w-56" sideOffset={8}>
                    <PopoverHeader>
                      <PopoverTitle>Quick Settings</PopoverTitle>
                    </PopoverHeader>
                    <div className="flex flex-col gap-2 mt-2">
                      <Button variant="ghost" className="justify-start">
                        Account
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        Appearance
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start text-destructive hover:text-destructive"
                      >
                        Log out
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </>
          }
        />
      </ExampleGrid>

      <ShowcaseExample
        title={t("Vị trí (Placement)", "Placement")}
        description={t(
          "Popover có thể hiển thị ở nhiều hướng khác nhau so với trigger (Top, Bottom, Left, Right).",
          "Popover can be displayed in different directions relative to the trigger (Top, Bottom, Left, Right).",
        )}
        code={`<Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">top</Button>
    </PopoverTrigger>
    
      <PopoverContent
        side="top"
        sideOffset={8}
        className="w-48 text-center text-sm p-4"
      >
        Displays on the <strong>top</strong>
      </PopoverContent>
    
  </Popover>`}
        preview={
          <>
            <div className="flex flex-wrap items-center justify-center gap-4 py-8">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <Popover key={side}>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        size={globalSize}
                        className="capitalize"
                      >
                        {side}
                      </Button>
                    }
                  />

                  <PopoverContent
                    side={side}
                    sideOffset={8}
                    className="w-48 text-center text-sm p-4"
                  >
                    Displays on the{" "}
                    <strong className="capitalize">{side}</strong>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function PopoverShowcase() {
  const { size: globalSize } = useDevContext();
  const t = useI18n();
  return (
    <Showcase
      title={t("Popover", "Popover")}
      description={t(
        "Hiển thị nội dung phong phú trong một portal, được kích hoạt bởi một nút bấm.",
        "Displays rich content in a portal, triggered by a button.",
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Dùng Popover khi bạn cần hiển thị thêm tuỳ chọn hoặc thông tin chi tiết mà không làm rời rạc mạch hiển thị hiện tại.",
              "Use Popover when you need to display additional options or details without disrupting the current flow.",
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      micro={{ content: <PopoverMicroShowcase globalSize={globalSize} /> }}
    />
  );
}
