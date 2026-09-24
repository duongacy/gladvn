import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSeparator,
  FieldTitle,
} from "./field";

describe("Field - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi thẻ con nằm trong Context", () => {
    render(
      <Field>
        <FieldLabel>Label</FieldLabel>
        <FieldTitle>Title</FieldTitle>
        <FieldContent>Content</FieldContent>
        <FieldDescription>Desc</FieldDescription>
        <FieldSeparator />
        <FieldError>Error</FieldError>
      </Field>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 [Field] văng warn khi <FieldContent> dùng ngoài Context", () => {
    render(<FieldContent>test</FieldContent>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <FieldContent> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [Field] văng warn khi <FieldLabel> dùng ngoài Context", () => {
    render(<FieldLabel>test</FieldLabel>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <FieldLabel> phải được dùng bên trong"),
    );
  });

  it("🚨 [Field] văng warn khi <FieldTitle> dùng ngoài Context", () => {
    render(<FieldTitle>test</FieldTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <FieldTitle> phải được dùng bên trong"),
    );
  });

  it("🚨 [Field] văng warn khi <FieldDescription> dùng ngoài Context", () => {
    render(<FieldDescription>test</FieldDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <FieldDescription> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [Field] văng warn khi <FieldSeparator> dùng ngoài Context", () => {
    render(<FieldSeparator>test</FieldSeparator>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <FieldSeparator> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [Field] văng warn khi <FieldError> dùng ngoài Context", () => {
    render(<FieldError>test</FieldError>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <FieldError> phải được dùng bên trong"),
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(<Field size="lg" data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });
});
