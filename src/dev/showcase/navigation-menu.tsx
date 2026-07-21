import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "../../components/micro/navigation-menu";
import {
  DocsP,
  ExampleSection,
  Showcase,
  ShowcaseDocs,
} from "../../dev/components/showcase";
import { cn } from "../../lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        render={
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        }
      />
    </li>
  );
});
ListItem.displayName = "ListItem";

// ──────────────────────────────────────────────────────────
// SECTION 2: Micro Content (không export)
// ──────────────────────────────────────────────────────────
function NavigationMenuMicroShowcase() {
  return (
    <div className="space-y-10 mt-6">
      <ExampleSection
        label="Default"
        description="Điều hướng đa cấp với bảng thả xuống."
        codeString={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink
              render={
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                />
              }
            >
              <div className="mb-2 mt-4 text-lg font-medium">
                gladcn/ui
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                Beautifully designed components built with Radix UI and
                Tailwind CSS.
              </p>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem
            href="/docs/primitives/typography"
            title="Typography"
          >
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          <ListItem
            title="Alert Dialog"
            href="/docs/primitives/alert-dialog"
          >
            A modal dialog that interrupts the user with important
            content and expects a response.
          </ListItem>
          <ListItem
            title="Hover Card"
            href="/docs/primitives/hover-card"
          >
            For sighted users to preview content available behind a
            link.
          </ListItem>
          <ListItem title="Progress" href="/docs/primitives/progress">
            Displays an indicator showing the completion progress of a
            task.
          </ListItem>
          <ListItem
            title="Scroll-area"
            href="/docs/primitives/scroll-area"
          >
            Visually or semantically separates content.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink
        href="/docs"
        className={navigationMenuTriggerStyle()}
      >
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuPortal>
    <NavigationMenuPositioner />
  </NavigationMenuPortal>
</NavigationMenu>
`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>

              
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        render={
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          />
                        }
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          gladcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>

              
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem
                      title="Alert Dialog"
                      href="/docs/primitives/alert-dialog"
                    >
                      A modal dialog that interrupts the user with important
                      content and expects a response.
                    </ListItem>
                    <ListItem
                      title="Hover Card"
                      href="/docs/primitives/hover-card"
                    >
                      For sighted users to preview content available behind a
                      link.
                    </ListItem>
                    <ListItem title="Progress" href="/docs/primitives/progress">
                      Displays an indicator showing the completion progress of a
                      task.
                    </ListItem>
                    <ListItem
                      title="Scroll-area"
                      href="/docs/primitives/scroll-area"
                    >
                      Visually or semantically separates content.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/docs"
                className={navigationMenuTriggerStyle()}
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuPortal>
            <NavigationMenuPositioner />
          </NavigationMenuPortal>
        </NavigationMenu>
      </ExampleSection>

      <ExampleSection
        label="Disabled State"
        description="Menu trigger ở trạng thái vô hiệu hóa."
        codeString={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger disabled>Disabled Trigger</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-4 w-[200px]">Content will not be visible</div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuPortal>
    <NavigationMenuPositioner />
  </NavigationMenuPortal>
</NavigationMenu>
`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger disabled>
                Disabled Trigger
              </NavigationMenuTrigger>

              
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    Content will not be visible
                  </div>
                </NavigationMenuContent>
              
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuPortal>
            <NavigationMenuPositioner />
          </NavigationMenuPortal>
        </NavigationMenu>
      </ExampleSection>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// SECTION 3: Entry point (export default)
// ──────────────────────────────────────────────────────────
export default function NavigationMenuShowcase() {
  return (
    <Showcase
      title="Navigation Menu"
      description="Thanh điều hướng đa cấp với panel thả xuống — dùng cho header navigation."
      generalConcept={
        <ShowcaseDocs>
          <DocsP>
            Navigation Menu là một hệ thống điều hướng chính (thường nằm ở
            header) cho phép người dùng khám phá trang web thông qua các danh
            sách mục và bảng thả xuống mượt mà.
          </DocsP>
        </ShowcaseDocs>
      }
      tabs={[
        {
          label: "Micro (Primitive)",
          content: <NavigationMenuMicroShowcase />,
        },
      ]}
    />
  );
}
