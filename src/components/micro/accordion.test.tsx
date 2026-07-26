
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

describe("Accordion", () => {
  it("[3C.13-01] [P1] renders correctly and is closed by default", () => {
    
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Section 1" });
    
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    const content = screen.queryByText("Content 1");
    if (content) {
      expect(content).not.toBeVisible();
    }
  });

  it("[3C.13-02] [P1] expands the content when trigger is clicked", async () => {
    
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Section 1" });
    
    await user.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText("Content 1")).toBeVisible();
    });
  });

  it("[3C.13-03] [P1] supports keyboard navigation", async () => {
    
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const trigger1 = screen.getByRole("button", { name: "Section 1" });
    const trigger2 = screen.getByRole("button", { name: "Section 2" });

    await user.tab();
    
    expect(trigger1).toHaveFocus();

    await user.tab();
    expect(trigger2).toHaveFocus();

    await user.keyboard("[Enter]");
    await waitFor(() => {
      expect(trigger2).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText("Content 2")).toBeVisible();
    });
  });
});
