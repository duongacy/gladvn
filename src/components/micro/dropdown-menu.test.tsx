
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

describe("DropdownMenu", () => {
  it("[3C.5-01] [P1] renders trigger correctly and content is hidden initially", () => {
    // Given
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const trigger = screen.getByRole("button", { name: "Open Menu" });
    // Then
    expect(trigger).toBeInTheDocument();

    // Base UI Menu might not use role="dialog" or "menu" before open, but it's hidden
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("[3C.5-02] [P1] opens the menu when trigger is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const trigger = screen.getByRole("button", { name: "Open Menu" });
    // When
    await user.click(trigger);

    // Then
    await waitFor(() => {
      const menu = screen.getByRole("menu");
      expect(menu).toBeInTheDocument();
      expect(screen.getByText("My Account")).toBeInTheDocument();
      expect(
        screen.getByRole("menuitem", { name: "Profile" }),
      ).toBeInTheDocument();
    });
  });

  it("[3C.5-03] [P1] closes the menu when an item is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    // When
    await user.click(screen.getByRole("button", { name: "Open Menu" }));

    // Then
    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    const menuItem = screen.getByRole("menuitem", { name: "Profile" });
    await user.click(menuItem);

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });

  it("[3C.5-04] [P1] supports keyboard navigation (ArrowDown, Escape)", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const trigger = screen.getByRole("button", { name: "Open Menu" });
    // When
    await user.tab();
    // Then
    expect(trigger).toHaveFocus();

    // Open with ArrowDown or Enter
    await user.keyboard("[Enter]");

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    // Close with Escape
    await user.keyboard("[Escape]");

    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });
});
