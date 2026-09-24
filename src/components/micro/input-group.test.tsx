import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

describe("InputGroup - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi thẻ con nằm trong Context", () => {
    render(
      <InputGroup>
        <InputGroupAddon>icon</InputGroupAddon>
        <InputGroupInput />
        <InputGroupText>text</InputGroupText>
        <InputGroupButton>btn</InputGroupButton>
        <InputGroupTextarea />
      </InputGroup>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 [InputGroup] văng warn khi <InputGroupAddon> dùng ngoài Context", () => {
    render(<InputGroupAddon>test</InputGroupAddon>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputGroupAddon> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [InputGroup] văng warn khi <InputGroupText> dùng ngoài Context", () => {
    render(<InputGroupText>test</InputGroupText>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputGroupText> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [InputGroup] văng warn khi <InputGroupButton> dùng ngoài Context", () => {
    render(<InputGroupButton>test</InputGroupButton>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputGroupButton> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [InputGroup] văng warn khi <InputGroupInput> dùng ngoài Context", () => {
    render(<InputGroupInput />);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputGroupInput> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [InputGroup] văng warn khi <InputGroupTextarea> dùng ngoài Context", () => {
    render(<InputGroupTextarea />);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <InputGroupTextarea> phải được dùng bên trong",
      ),
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(
      <InputGroup size="lg" data-testid="root" />,
    );
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });
});
