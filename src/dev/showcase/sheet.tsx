import { Button, Input, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/index";;
import { ExampleSection, SectionHeader } from "@/dev/components/showcase";

export default function SheetShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Sheet"
        description="Extends the Dialog component to display content that complements the main content of the screen."
      />

      <ExampleSection
        label="Directions"
        description="Sheet can slide from any edge."
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
