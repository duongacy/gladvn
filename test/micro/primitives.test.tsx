import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/micro/collapsible";
import { Kbd, KbdGroup } from "@/components/micro/kbd";
import { Separator } from "@/components/micro/separator";
import { Skeleton } from "@/components/micro/skeleton";
import { Spinner } from "@/components/micro/spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/micro/table";
import {
  ThemeProvider,
  ThemeWrapper,
  useTheme,
} from "@/components/micro/theme-provider";
import { Toggle } from "@/components/micro/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/micro/toggle-group";

function ThemeConsumer() {
  const theme = useTheme();
  return (
    <div>
      <span data-testid="theme-mode">{theme?.mode}</span>
      <button type="button" onClick={theme?.toggleMode}>
        Toggle Theme
      </button>
    </div>
  );
}

describe("Core Micro Primitives", () => {
  it("Table renders header, sortable column head, body, footer, and caption", async () => {
    const user = userEvent.setup();
    const handleSort = vi.fn();

    render(
      <Table>
        <TableCaption>Recent Invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead
              sortDirection="asc"
              sortOptions={["asc", "desc", "none"]}
              onSort={handleSort}
            >
              Invoice
            </TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>,
    );

    expect(screen.getByText("Recent Invoices")).toBeInTheDocument();
    expect(screen.getByText("INV001")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Invoice" }));
    expect(handleSort).toHaveBeenCalledWith("desc");
  });

  it("Toggle and ToggleGroup switch pressed states and propagate context attributes", async () => {
    const user = userEvent.setup();

    render(
      <div>
        <Toggle aria-label="Toggle Bold">B</Toggle>
        <ToggleGroup variant="outline" size="sm" defaultValue={["left"]}>
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
        </ToggleGroup>
      </div>,
    );

    const toggleBtn = screen.getByRole("button", { name: "Toggle Bold" });
    expect(toggleBtn).toHaveAttribute("aria-pressed", "false");
    await user.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute("aria-pressed", "true");

    const leftItem = screen.getByRole("button", { name: "Left" });
    expect(leftItem).toHaveAttribute("data-variant", "outline");
    expect(leftItem).toHaveAttribute("data-size", "sm");
    expect(leftItem).toHaveAttribute("aria-pressed", "true");
  });

  it("Collapsible toggles panel visibility when trigger is clicked", async () => {
    const user = userEvent.setup();

    render(
      <Collapsible>
        <CollapsibleTrigger>Show Details</CollapsibleTrigger>
        <CollapsibleContent>Hidden details content</CollapsibleContent>
      </Collapsible>,
    );

    await user.click(screen.getByRole("button", { name: "Show Details" }));
    expect(screen.getByText("Hidden details content")).toBeInTheDocument();
  });

  it("Separator, Skeleton, Spinner, and Kbd render with expected data-slots and roles", () => {
    const { container } = render(
      <div>
        <Separator orientation="vertical" />
        <Skeleton data-testid="sk" className="h-4 w-20" />
        <Spinner size="lg" />
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>,
    );

    expect(container.querySelector("[data-slot='separator']")).toHaveAttribute(
      "data-orientation",
      "vertical",
    );
    expect(screen.getByTestId("sk")).toHaveAttribute("data-slot", "skeleton");
    expect(screen.getByRole("status", { name: "Loading" })).toHaveAttribute(
      "data-slot",
      "spinner",
    );
    expect(
      container.querySelector("[data-slot='kbd-group']"),
    ).toBeInTheDocument();
    expect(screen.getByText("⌘")).toHaveAttribute("data-slot", "kbd");
  });

  it("ThemeProvider and ThemeWrapper manage and tunnel theme state", async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider defaultMode="light">
        <ThemeConsumer />
        <ThemeWrapper>
          <span data-testid="wrapped-child">Portalled Node</span>
        </ThemeWrapper>
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-mode")).toHaveTextContent("light");
    expect(screen.getByTestId("wrapped-child").parentElement).toHaveClass(
      "light",
    );

    await user.click(screen.getByRole("button", { name: "Toggle Theme" }));
    expect(screen.getByTestId("theme-mode")).toHaveTextContent("dark");
    expect(screen.getByTestId("wrapped-child").parentElement).toHaveClass(
      "dark",
    );
  });
});
