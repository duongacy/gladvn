import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  
  it("[3C.1-01] [P1] renders correctly with default props", () => {
    
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-variant", "solid");
    expect(button).toHaveAttribute("data-color", "primary");
  });

  it("[3C.1-02] [P1] applies custom variants and colors", () => {
    
    render(
      <Button variant="outline" color="destructive">
        Delete
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Delete" });
    
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-color", "destructive");
  });

  it("[3C.1-03] [P1] merges custom classNames properly", () => {
    
    render(<Button className="custom-test-class">Classy Button</Button>);
    const button = screen.getByRole("button", { name: "Classy Button" });
    
    expect(button).toHaveClass("custom-test-class");
  });

  it("[3C.1-04] [P1] supports iconOnly attribute to render as square", () => {
    
    render(<Button iconOnly>Icon</Button>);
    const button = screen.getByRole("button", { name: "Icon" });
    
    expect(button).toHaveClass("aspect-square");
  });

  it("[3C.1-05] [P1] fires onClick event when clicked", async () => {
    
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    const button = screen.getByRole("button", { name: "Click" });
    
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("[3C.1-06] [P1] can be focused and activated via keyboard", async () => {
    
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Submit</Button>);

    const button = screen.getByRole("button", { name: "Submit" });

    await user.tab();
    
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("[3C.1-07] [P1] handles disabled state correctly and blocks clicks", async () => {
    
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Disabled Button" });
    
    expect(button).toBeDisabled();

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("[3C.1-08] [P1] forwards the ref to the underlying DOM element", () => {
    
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe("Ref Button");
  });

  it("[3C.1-09] [P1] supports polymorphism via render prop (Base UI 'render' pattern)", () => {
    
    render(<Button render={<a href="/home" />} nativeButton={false}>Link Button</Button>);
    const link = screen.getByText("Link Button");
    
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveAttribute("data-variant", "solid");
  });
});
