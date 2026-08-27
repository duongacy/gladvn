import React from "react";
import { Button } from "../../components/micro/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/micro/drawer";
import { useDevContext, useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";

function useDrawerExamples() {
  const t = useI18n();
  const { size: globalSize } = useDevContext();

  return React.useMemo(
    () => [
      {
        title: t("Ngăn kéo Dưới", "Bottom Drawer"),
        description: t(
          "Drawer mặc định trượt từ dưới lên.",
          "Default drawer that slides up from the bottom."
        ),
        microCode: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Bottom</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0">
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" className="h-8 w-8 rounded-full" onClick={() => {}}>-</Button>
          <div className="flex-1 text-center">
            <div className="text-7xl font-bold tracking-tighter">350</div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
          </div>
          <Button variant="outline" size="sm" className="h-8 w-8 rounded-full" onClick={() => {}}>+</Button>
        </div>
      </div>
      <DrawerFooter>
        <Button>Confirm</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`,
        microPreview: (
          <Drawer>
            <DrawerTrigger asChild>
              <Button size={globalSize} variant="outline">
                Open Bottom
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>
                    Set your daily activity goal.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size={globalSize === "sm" ? "sm" : "md"}
                      className="h-8 w-8 rounded-full"
                      onClick={() => {}}
                    >
                      -
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        350
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size={globalSize === "sm" ? "sm" : "md"}
                      className="h-8 w-8 rounded-full"
                      onClick={() => {}}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <DrawerFooter>
                  <Button size={globalSize}>Confirm</Button>
                  <DrawerClose asChild>
                    <Button size={globalSize} variant="outline">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ),
      },
      {
        title: t("Tin nhắn đơn giản", "Simple Message"),
        description: t(
          "Drawer với nội dung văn bản đơn giản.",
          "Drawer with simple text content."
        ),
        microCode: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Show Info</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>About this feature</DrawerTitle>
        <DrawerDescription>
          This feature is currently in beta. Some functionality may be limited or change without notice.
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Got it</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`,
        microPreview: (
          <Drawer>
            <DrawerTrigger asChild>
              <Button size={globalSize} variant="outline">
                Show Info
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>About this feature</DrawerTitle>
                  <DrawerDescription>
                    This feature is currently in beta. Some functionality may be
                    limited or change without notice. We appreciate your
                    feedback as we work to improve the experience.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button size={globalSize} variant="outline">
                      Got it
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ),
      },
      {
        title: t("Ngăn kéo Trái / Phải", "Left / Right Drawers"),
        description: t(
          "Drawer mở từ cạnh trái hoặc phải — phù hợp cho Sidebar và Filter panel.",
          "Drawers opening from the left or right — suitable for Sidebar and Filter panels."
        ),
        microCode: `<div className="flex gap-4">
  <Drawer direction="left">
    <DrawerTrigger asChild>
      <Button variant="outline">Open Left</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Sidebar Menu</DrawerTitle>
        <DrawerDescription>
          Navigation from the left side of the screen.
        </DrawerDescription>
      </DrawerHeader>
      <div className="flex-1 p-4">
        <ul className="space-y-4 text-sm">
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button variant="outline">Open Right</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Filters</DrawerTitle>
        <DrawerDescription>Search filters from the right side.</DrawerDescription>
      </DrawerHeader>
      <div className="flex-1 space-y-2 p-4">
        <div className="h-4 w-1/2 rounded bg-muted" />
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>
      <DrawerFooter>
        <Button>Apply Filters</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</div>`,
        microPreview: (
          <div className="flex gap-4">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button size={globalSize} variant="outline">
                  Open Left
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Sidebar Menu</DrawerTitle>
                  <DrawerDescription>
                    Navigation from the left side of the screen.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 p-4">
                  <ul className="space-y-4 text-sm">
                    <li>Dashboard</li>
                    <li>Settings</li>
                    <li>Profile</li>
                  </ul>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button size={globalSize} variant="outline">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button size={globalSize} variant="outline">
                  Open Right
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                  <DrawerDescription>
                    Search filters from the right side.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 space-y-2 p-4">
                  <div className="h-4 w-1/2 rounded bg-muted" />
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-2/3 rounded bg-muted" />
                </div>
                <DrawerFooter>
                  <Button size={globalSize}>Apply Filters</Button>
                  <DrawerClose asChild>
                    <Button size={globalSize} variant="outline">
                      Cancel
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ),
      },
      {
        title: t("Ngăn kéo Trên", "Top Drawer"),
        description: t(
          "Drawer mở từ phía trên — phù hợp cho notifications, alerts, hoặc search.",
          "Drawer opening from the top — suitable for notifications, alerts, or search."
        ),
        microCode: `<Drawer direction="top">
  <DrawerTrigger asChild>
    <Button variant="outline">Open Top</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>New Notification</DrawerTitle>
        <DrawerDescription>You have 3 unread notifications.</DrawerDescription>
      </DrawerHeader>
      <div className="space-y-2 px-4 pb-2 text-sm text-muted-foreground">
        <p>🔔 Your order has been shipped.</p>
        <p>🔔 A new comment on your post.</p>
        <p>🔔 Your subscription renews in 3 days.</p>
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Dismiss all</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`,
        microPreview: (
          <Drawer direction="top">
            <DrawerTrigger asChild>
              <Button size={globalSize} variant="outline">
                Open Top
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>New Notification</DrawerTitle>
                  <DrawerDescription>
                    You have 3 unread notifications.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="space-y-2 px-4 pb-2 text-sm text-muted-foreground">
                  <p>🔔 Your order has been shipped.</p>
                  <p>🔔 A new comment on your post.</p>
                  <p>🔔 Your subscription renews in 3 days.</p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button size={globalSize} variant="outline">
                      Dismiss all
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ),
      },
    ],
    [globalSize, t]
  );
}

export default function DrawerShowcase() {
  const t = useI18n();
  const examples = useDrawerExamples();

  return (
    <ConfigurableShowcase
      title="Drawer"
      description={t(
        "Panel trượt ra từ cạnh màn hình — thường dùng cho bottom sheet, sidebar trên mobile.",
        "Panel sliding out from the edge of the screen — commonly used for bottom sheets, sidebars on mobile."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              "Sử dụng Drawer (Ngăn kéo) để hiển thị thông tin hoặc tuỳ chọn bổ sung mà không làm mất bối cảnh hiện tại của người dùng. Tương tự như Dialog nhưng chủ yếu xuất hiện từ các cạnh màn hình (thường là từ dưới lên trên thiết bị di động).",
              "Use the Drawer to display additional information or options without losing the user's current context. Similar to a Dialog but primarily appears from the edges of the screen (typically from the bottom up on mobile devices)."
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
