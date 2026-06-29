import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";

export default function DrawerShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Drawer"
        description="A drawer component for React."
      />

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Bottom Drawer"
          description="Default bottom sheet style."
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
          description="Drawer with simple text content."
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
                    This feature is currently in beta. Some functionality may be
                    limited or change without notice. We appreciate your
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
      </ExampleGrid>
    </div>
  );
}
