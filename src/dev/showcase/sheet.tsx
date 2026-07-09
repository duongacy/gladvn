import { ExampleSection, SectionHeader } from "@/dev/components/showcase";
import { Button } from "@/components/micro/button";
import { Input } from "@/components/micro/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/micro/sheet";

export default function SheetShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Sheet"
        description="Mở rộng thành phần Hộp thoại để hiển thị nội dung bổ sung cho nội dung chính của màn hình."
      />

      <ExampleSection
        label="Directions"
        description="Tấm có thể trượt từ bất kỳ cạnh nào."
        codeString={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <span className="text-right text-sm">Name</span>
        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button type="submit">Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <div className="grid grid-cols-2 gap-2">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger
                render={<Button variant="outline" className="capitalize" />}
              >
                {side}
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <span className="text-right text-sm">Name</span>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose render={<Button variant="outline" />}>
                    Cancel
                  </SheetClose>
                  <Button type="submit">Save changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </ExampleSection>
    </div>
  );
}
