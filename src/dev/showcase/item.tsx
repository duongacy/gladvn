import { useState } from "react";
import {
  Item,
  ItemGroup,
  ItemHeader,
  ItemFooter,
  ItemSeparator,
  ItemMedia,
  ItemActions,
  ItemContent,
  ItemTitle,
  ItemDescription,
  Button,
  MonoSelect,
} from "../../index";
import {
  SectionHeader,
  ExampleSection,
  ExampleGrid,
} from "../components/showcase";
import { CheckIcon, HeartIcon, MoreVerticalIcon, UserIcon } from "lucide-react";

export default function ItemShowcase() {
  const [globalSize, setGlobalSize] = useState<"default" | "sm" | "xs">(
    "default",
  );

  return (
    <div className="space-y-10">
      <SectionHeader
        title="Item"
        description="A flexible container for list items or structured content blocks."
      >
        <MonoSelect
          value={globalSize}
          onValueChange={(v) => setGlobalSize(v as any)}
          options={[
            { value: "xs", label: "Size: xs" },
            { value: "sm", label: "Size: sm" },
            { value: "default", label: "Size: default" },
          ]}
        />
      </SectionHeader>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Basic Content"
          description="A structured item with title and description."
        >
          <Item size={globalSize} className="w-full">
            <ItemContent>
              <ItemTitle>Basic Item Content</ItemTitle>
              <ItemDescription>
                This item shows structured text.
              </ItemDescription>
            </ItemContent>
          </Item>
        </ExampleSection>

        <ExampleSection
          label="With Media"
          description="Item with an icon or avatar slot."
        >
          <Item size={globalSize} className="w-full">
            <ItemMedia className="bg-primary/10 text-primary rounded-md p-2">
              <UserIcon className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>User Profile</ItemTitle>
              <ItemDescription>Manage your account</ItemDescription>
            </ItemContent>
          </Item>
        </ExampleSection>
      </ExampleGrid>

      <ExampleGrid columns={2}>
        <ExampleSection
          label="Variants"
          description="Different visual styles (outline, muted)."
        >
          <div className="flex flex-col gap-3 w-full">
            <Item variant="outline" size={globalSize}>
              <ItemContent>
                <ItemTitle>Outline Variant</ItemTitle>
              </ItemContent>
            </Item>
            <Item variant="muted" size={globalSize}>
              <ItemContent>
                <ItemTitle>Muted Variant</ItemTitle>
              </ItemContent>
            </Item>
          </div>
        </ExampleSection>

        <ExampleSection
          label="With Actions"
          description="Item with trailing action buttons."
        >
          <Item size={globalSize} className="w-full">
            <ItemContent>
              <ItemTitle>Actionable Item</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm" className="size-8 p-0">
                <HeartIcon className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" className="size-8 p-0">
                <MoreVerticalIcon className="size-4" />
              </Button>
            </ItemActions>
          </Item>
        </ExampleSection>
      </ExampleGrid>

      <ExampleSection
        label="Item Group"
        description="Grouped items with separators."
      >
        <ItemGroup className="w-full max-w-sm mx-auto">
          <Item size={globalSize}>
            <ItemContent>
              <ItemTitle>Account Settings</ItemTitle>
            </ItemContent>
          </Item>
          <ItemSeparator />
          <Item size={globalSize}>
            <ItemContent>
              <ItemTitle>Notification Preferences</ItemTitle>
            </ItemContent>
          </Item>
          <ItemSeparator />
          <Item size={globalSize}>
            <ItemContent>
              <ItemTitle className="text-destructive">Delete Account</ItemTitle>
            </ItemContent>
          </Item>
        </ItemGroup>
      </ExampleSection>

      <ExampleSection
        label="With Header and Footer"
        description="Complex item with specific placement regions."
      >
        <Item
          size={globalSize}
          className="w-full max-w-sm mx-auto flex-col items-start gap-2"
        >
          <ItemHeader className="text-xs text-muted-foreground">
            Order #12345
          </ItemHeader>
          <ItemContent>
            <ItemTitle>Mechanical Keyboard v2</ItemTitle>
          </ItemContent>
          <ItemFooter className="text-xs text-success flex items-center gap-1">
            <CheckIcon className="size-3" /> Delivered
          </ItemFooter>
        </Item>
      </ExampleSection>
    </div>
  );
}
