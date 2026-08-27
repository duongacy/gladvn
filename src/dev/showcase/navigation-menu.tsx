import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/micro/navigation-menu";
import { useI18n } from "../components/dev-context";
import {
  ConfigurableShowcase,
  ShowcaseDocs,
  DocsP,
} from "../components/showcase";
import { cn } from "../../lib/utils";

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
              className
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

function useNavigationMenuExamples() {
  const t = useI18n();

  return React.useMemo(
    () => [
      {
        title: t("Mặc định", "Default"),
        description: t(
          "Điều hướng đa cấp với bảng thả xuống.",
          "Multi-level navigation with a dropdown panel."
        ),
        microCode: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        Getting started
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink
              render={
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                />
              }
            >
              <div className="mb-2 mt-4 text-lg font-medium">
                gladvn/ui
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                Beautifully designed components built with
                Radix UI and Tailwind CSS.
              </p>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and
            Tailwind CSS.
          </ListItem>
          <ListItem
            href="/docs/installation"
            title="Installation"
          >
            How to install dependencies and structure your
            app.
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
      <NavigationMenuTrigger>
        Components
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150 ">
          <ListItem
            title="Confirm"
            href="/docs/primitives/confirm"
          >
            A modal dialog that interrupts the user with
            important content and expects a response.
          </ListItem>
          <ListItem
            title="Hover Card"
            href="/docs/primitives/hover-card"
          >
            For sighted users to preview content available
            behind a link.
          </ListItem>
          <ListItem
            title="Progress"
            href="/docs/primitives/progress"
          >
            Displays an indicator showing the completion
            progress of a task.
          </ListItem>
          <ListItem
            title="Scroll Area"
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
  
  <NavigationMenuPositioner />
</NavigationMenu>`,
        microPreview: (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink
                        render={
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          />
                        }
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          gladvn/ui
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
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150 ">
                    <ListItem title="Confirm" href="/docs/primitives/confirm">
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
                    <ListItem
                      title="Progress"
                      href="/docs/primitives/progress"
                    >
                      Displays an indicator showing the completion progress of a
                      task.
                    </ListItem>
                    <ListItem
                      title="Scroll Area"
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

            <NavigationMenuPositioner />
          </NavigationMenu>
        ),
      },
      {
        title: t("Trạng thái vô hiệu hóa", "Disabled State"),
        description: t(
          "Menu trigger ở trạng thái vô hiệu hóa.",
          "Menu trigger in a disabled state."
        ),
        microCode: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger disabled>
        Disabled Trigger
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="p-4 w-50">
          Content will not be visible
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  
  <NavigationMenuPositioner />
</NavigationMenu>`,
        microPreview: (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger disabled>
                  Disabled Trigger
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <div className="p-4 w-50">Content will not be visible</div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuPositioner />
          </NavigationMenu>
        ),
      },
    ],
    [t]
  );
}

export default function NavigationMenuShowcase() {
  const t = useI18n();
  const examples = useNavigationMenuExamples();

  return (
    <ConfigurableShowcase
      title="Navigation Menu"
      description={t(
        "Thanh điều hướng đa cấp với panel thả xuống — dùng cho header navigation.",
        "Multi-level navigation bar with dropdown panels — used for header navigation."
      )}
      guideline={
        <ShowcaseDocs>
          <DocsP>
            {t(
              <>
                Navigation Menu là một hệ thống điều hướng chính (thường nằm ở
                header) cho phép người dùng khám phá trang web thông qua các
                danh sách mục và bảng thả xuống mượt mà.
              </>,
              <>
                Navigation Menu is a main navigation system (usually located in
                the header) that allows users to explore the website through
                lists of items and smooth dropdown panels.
              </>
            )}
          </DocsP>
        </ShowcaseDocs>
      }
      examples={examples}
    />
  );
}
