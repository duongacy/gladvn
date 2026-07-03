import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AccordionPreset } from "./accordion-preset";

const items = [
  { value: "item-1", title: "Section 1", content: "Content for section 1" },
  { value: "item-2", title: "Section 2", content: "Content for section 2" },
  { value: "item-3", title: "Section 3", content: "Content for section 3", disabled: true },
];

describe("AccordionPreset", () => {
  it("renders all accordion triggers", () => {
    render(<AccordionPreset items={items} />);
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.getByText("Section 3")).toBeInTheDocument();
  });

  it("renders correct number of items", () => {
    const { container } = render(<AccordionPreset items={items} />);
    const accordionItems = container.querySelectorAll("[data-slot='accordion-item']");
    expect(accordionItems.length).toBe(3);
  });

  it("renders with empty items array", () => {
    const { container } = render(<AccordionPreset items={[]} />);
    const accordion = container.querySelector("[data-slot='accordion']");
    expect(accordion).toBeInTheDocument();
  });
});
