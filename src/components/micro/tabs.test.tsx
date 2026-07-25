
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  it("[3C.8-01] [P1] renders correctly and shows default content", () => {
    // Given
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    // Then
    expect(screen.getByRole("tab", { name: "Tab 1" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab 2" })).toBeInTheDocument();

    // Tab 1 content should be visible
    expect(screen.getByText("Content 1")).toBeInTheDocument();

    // Tab 2 content should NOT be visible
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  });

  it("[3C.8-02] [P1] switches content when another tab is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    const tab2 = screen.getByRole("tab", { name: "Tab 2" });
    // When
    await user.click(tab2);

    // Then
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("[3C.8-03] [P1] supports keyboard navigation", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>,
    );

    const tab1 = screen.getByRole("tab", { name: "Tab 1" });
    const tab2 = screen.getByRole("tab", { name: "Tab 2" });

    // When
    await user.tab();
    // Then
    expect(tab1).toHaveFocus();

    // ArrowRight should move focus and potentially activate the next tab
    await user.keyboard("[ArrowRight]");
    await waitFor(() => {
      expect(tab2).toHaveFocus();
    });

    await user.keyboard("[Enter]");

    await waitFor(() => {
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });
  });
});
