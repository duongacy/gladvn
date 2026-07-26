import { Button } from "../../components/micro/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,

  DrawerTitle,
  DrawerTrigger
} from "../../components/micro/drawer";
import {
  DocsP,
  ExampleGrid,
  ExampleSection,
  Showcase,
  ShowcaseDocs
} from "../../dev/components/showcase";

function DrawerMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleGrid>
        <ExampleSection
          label="Bottom Drawer"
          description="Drawer mặc định trượt từ dưới lên."
          codeString={`<Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Bottom</Button>
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
                size="sm"
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
                size="sm"
                className="h-8 w-8 rounded-full"
                onClick={() => {}}
              >
                +
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    
  </Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Bottom</Button>
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
                        size="sm"
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
                        size="sm"
                        className="h-8 w-8 rounded-full"
                        onClick={() => {}}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            
          </Drawer>
        </ExampleSection>

        <ExampleSection
          label="Simple Message"
          description="Drawer với nội dung văn bản đơn giản."
          codeString={`<Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Show Info</Button>
    </DrawerTrigger>
    
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>About this feature</DrawerTitle>
            <DrawerDescription>
              This feature is currently in beta. Some
              functionality may be limited or change without
              notice. We appreciate your feedback as we work
              to improve the experience.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Got it</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    
  </Drawer>`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Show Info</Button>
            </DrawerTrigger>

              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>About this feature</DrawerTitle>
                    <DrawerDescription>
                      This feature is currently in beta. Some functionality may
                      be limited or change without notice. We appreciate your
                      feedback as we work to improve the experience.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Got it</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            
          </Drawer>
        </ExampleSection>
        <ExampleSection
          label="Left / Right Drawers"
          description="Drawer mở từ cạnh trái hoặc phải — phù hợp cho Sidebar và Filter panel."
          codeString={`<Drawer direction="left">
    <DrawerTrigger asChild>
      <Button variant="outline">Open Left</Button>
    </DrawerTrigger>
    
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Sidebar Menu</DrawerTitle>
          <DrawerDescription>
            Điều hướng từ cạnh trái của màn hình.
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
          <DrawerDescription>
            Bộ lọc tìm kiếm từ cạnh phải.
          </DrawerDescription>
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
    
  </Drawer>`}
        >
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">Open Left</Button>
            </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Sidebar Menu</DrawerTitle>
                  <DrawerDescription>
                    Điều hướng từ cạnh trái của màn hình.
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
                  <DrawerDescription>
                    Bộ lọc tìm kiếm từ cạnh phải.
                  </DrawerDescription>
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
        </ExampleSection>

        <ExampleSection
          label="Top Drawer"
          description="Drawer mở từ phía trên — phù hợp cho notifications, alerts, hoặc search."
          codeString={`<Drawer direction="top">
    <DrawerTrigger asChild>
      <Button variant="outline">Open Top</Button>
    </DrawerTrigger>
    
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>New Notification</DrawerTitle>
            <DrawerDescription>
              Bạn có 3 thông báo chưa đọc.
            </DrawerDescription>
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
    
  </Drawer>`}
        >
          <Drawer direction="top">
            <DrawerTrigger asChild>
              <Button variant="outline">Open Top</Button>
            </DrawerTrigger>

              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>New Notification</DrawerTitle>
                    <DrawerDescription>
                      Bạn có 3 thông báo chưa đọc.
                    </DrawerDescription>
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
            
          </Drawer>
        </ExampleSection>
      </ExampleGrid>
    </div>
  );
}

export default function DrawerShowcase() {
  return (
    <Showcase
      title="Drawer"
      description="Panel trượt ra từ cạnh màn hình — thường dùng cho bottom sheet, sidebar trên mobile."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Sử dụng Drawer (Ngăn kéo) để hiển thị thông tin hoặc tuỳ chọn bổ
            sung mà không làm mất bối cảnh hiện tại của người dùng. Tương tự như
            Dialog nhưng chủ yếu xuất hiện từ các cạnh màn hình (thường là từ
            dưới lên trên thiết bị di động).
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <DrawerMicroShowcase /> },
      ]}
    />
  );
}
