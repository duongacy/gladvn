import * as React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

describe("Sheet", () => {
  it("[3C.15-01] [P1] renders trigger correctly and content is hidden initially", () => {
    // Given
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );

    const trigger = screen.getByRole("button", { name: "Open Sheet" });
    // Then
    expect(trigger).toBeInTheDocument();

    // Content should not be in the document
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("[3C.15-02] [P1] opens the sheet when trigger is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );

    const trigger = screen.getByRole("button", { name: "Open Sheet" });
    // When
    await user.click(trigger);

    // Then
    await waitFor(() => {
      const sheet = screen.getByRole("dialog");
      expect(sheet).toBeInTheDocument();
      expect(screen.getByText("Sheet Title")).toBeInTheDocument();
      expect(screen.getByText("Sheet description")).toBeInTheDocument();
    });
  });

  it("[3C.15-03] [P1] closes the sheet when default Close button is clicked", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent showCloseButton={true}>
          <SheetTitle>Sheet Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    // Open
    // When
    await user.click(screen.getByRole("button", { name: "Open Sheet" }));

    // Then
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    // Close via default 'X' button
    const closeBtn = screen.getByRole("button", { name: "Close" });
    await user.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("[3C.15-04] [P1] closes the sheet when Escape is pressed", async () => {
    // Given
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
        </SheetContent>
      </Sheet>,
    );

    // When
    await user.click(screen.getByRole("button", { name: "Open Sheet" }));

    // Then
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    await user.keyboard("[Escape]");

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
