import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
  Button,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../index";
import { SectionHeader, ExampleSection, ExampleGrid } from "../components/showcase";
import { MailIcon, StarIcon, MoreHorizontalIcon, FileTextIcon, ImageIcon, TrashIcon } from "lucide-react";

export default function ItemShowcase() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Item" description="A flexible item container primitive for lists and menus." />

      {/* ── Basic ── */}
      <ExampleSection label="Basic" description="Item with title and description.">
        <div className="rounded-xl border bg-card max-w-md">
          <Item>
            <ItemContent>
              <ItemTitle>Interactive Item</ItemTitle>
              <ItemDescription>A flexible item container primitive for lists and layouts.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </ExampleSection>

      {/* ── With Media ── */}
      <ExampleSection label="With Media" description="Items with icons, images, and avatars using ItemMedia.">
        <ExampleGrid columns={2}>
          <div className="rounded-xl border bg-card overflow-hidden">
            <Item>
              <ItemMedia variant="icon">
                <MailIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Icon Media</ItemTitle>
                <ItemDescription>Using variant="icon" for SVG icons.</ItemDescription>
              </ItemContent>
            </Item>
          </div>
          <div className="rounded-xl border bg-card overflow-hidden">
            <Item>
              <ItemMedia>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Avatar Media</ItemTitle>
                <ItemDescription>Using default variant with an Avatar component.</ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </ExampleGrid>
      </ExampleSection>

      {/* ── Variants ── */}
      <ExampleSection label="Variants" description="Item supports default, outline, and muted variants.">
        <div className="flex flex-col gap-3 max-w-md">
          <Item variant="default">
            <ItemMedia variant="icon"><FileTextIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Default</ItemTitle>
              <ItemDescription>No visible border.</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon"><FileTextIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Outline</ItemTitle>
              <ItemDescription>With a border around the item.</ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="muted">
            <ItemMedia variant="icon"><FileTextIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Muted</ItemTitle>
              <ItemDescription>Subtle muted background.</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </ExampleSection>

      {/* ── With Actions ── */}
      <ExampleSection label="With Actions" description="Items with action buttons on the right side.">
        <div className="rounded-xl border bg-card max-w-md overflow-hidden divide-y">
          <Item>
            <ItemMedia variant="icon"><StarIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Starred Project</ItemTitle>
              <ItemDescription>Last updated 2 hours ago</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="sm" className="size-8 p-0">
                <MoreHorizontalIcon className="size-4" />
              </Button>
            </ItemActions>
          </Item>
          <Item>
            <ItemMedia variant="icon"><ImageIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Design Assets</ItemTitle>
              <ItemDescription>12 files, 48 MB total</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="secondary">New</Badge>
              <Button variant="ghost" size="sm" className="size-8 p-0">
                <TrashIcon className="size-4" />
              </Button>
            </ItemActions>
          </Item>
        </div>
      </ExampleSection>

      {/* ── Item Group ── */}
      <ExampleSection label="Item Group" description="Grouped items with separators using ItemGroup and ItemSeparator.">
        <div className="rounded-xl border bg-card max-w-md overflow-hidden">
          <ItemGroup className="p-2">
            <Item>
              <ItemMedia variant="icon"><MailIcon /></ItemMedia>
              <ItemContent>
                <ItemTitle>Inbox</ItemTitle>
                <ItemDescription>3 unread messages</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia variant="icon"><StarIcon /></ItemMedia>
              <ItemContent>
                <ItemTitle>Starred</ItemTitle>
                <ItemDescription>12 items</ItemDescription>
              </ItemContent>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia variant="icon"><FileTextIcon /></ItemMedia>
              <ItemContent>
                <ItemTitle>Drafts</ItemTitle>
                <ItemDescription>5 drafts saved</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </div>
      </ExampleSection>

      {/* ── Header & Footer ── */}
      <ExampleSection label="Header & Footer" description="Complete item with ItemHeader and ItemFooter spanning full width.">
        <div className="rounded-xl border bg-card max-w-md overflow-hidden">
          <Item variant="outline">
            <ItemHeader>
              <span className="text-xs text-muted-foreground font-mono">PRJ-001</span>
              <Badge variant="default">Active</Badge>
            </ItemHeader>
            <ItemMedia variant="icon"><FileTextIcon /></ItemMedia>
            <ItemContent>
              <ItemTitle>Design System v2</ItemTitle>
              <ItemDescription>Complete redesign of the component library with new tokens and patterns.</ItemDescription>
            </ItemContent>
            <ItemFooter>
              <span className="text-xs text-muted-foreground">Updated 3 days ago</span>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            </ItemFooter>
          </Item>
        </div>
      </ExampleSection>
    </div>
  );
}
