import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TabsPreset } from "./tabs-preset";

const items = [
  { value: "tab1", title: "Tab 1", content: "Content 1" },
  { value: "tab2", title: "Tab 2", content: "Content 2" },
  { value: "tab3", title: "Tab 3", content: "Content 3", disabled: true },
];

describe("TabsPreset", () => {
  it("renders all tab triggers", () => {
    render(<TabsPreset items={items} defaultValue="tab1" />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("renders the active tab content", () => {
    render(<TabsPreset items={items} defaultValue="tab1" />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("renders correct number of triggers", () => {
    const { container } = render(<TabsPreset items={items} defaultValue="tab1" />);
    const triggers = container.querySelectorAll("[data-slot='tabs-trigger']");
    expect(triggers.length).toBe(3);
  });
});
