import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Input } from "./input";

describe("Input", () => {
  
  it("[3C.2-01] [P1] renders correctly with default props", () => {
    
    render(<Input placeholder="Enter email" />);
    const input = screen.getByPlaceholderText("Enter email");
    
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("[3C.2-02] [P1] applies sizing correctly", () => {
    
    render(<Input placeholder="Small input" size="sm" />);
    const input = screen.getByPlaceholderText("Small input");

    expect(input.className).toContain("h-7");
  });

  it("[3C.2-03] [P1] merges custom classNames properly", () => {
    
    render(<Input placeholder="Classy input" className="custom-test-class" />);
    const input = screen.getByPlaceholderText("Classy input");
    
    expect(input).toHaveClass("custom-test-class");
  });

  it("[3C.2-04] [P1] handles user typing correctly", async () => {
    
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Type here");
    
    await user.type(input, "Hello");

    expect(input).toHaveValue("Hello");
    expect(handleChange).toHaveBeenCalled();
  });

  it("[3C.2-05] [P1] can be focused and activated via keyboard", async () => {
    
    const user = userEvent.setup();
    render(<Input placeholder="Focus me" />);

    const input = screen.getByPlaceholderText("Focus me");

    await user.tab();
    
    expect(input).toHaveFocus();
  });

  it("[3C.2-06] [P1] handles disabled state correctly and blocks typing", async () => {
    
    const user = userEvent.setup();
    render(<Input placeholder="Disabled" disabled />);

    const input = screen.getByPlaceholderText("Disabled");
    
    expect(input).toBeDisabled();

    await user.type(input, "Hello");
    expect(input).toHaveValue("");
  });

  it("[3C.2-07] [P1] forwards the ref to the underlying DOM element", () => {
    
    const ref = React.createRef<HTMLInputElement>();
    render(
      <Input ref={ref} placeholder="Ref input" defaultValue="ref value" />,
    );
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.value).toBe("ref value");
  });
});
