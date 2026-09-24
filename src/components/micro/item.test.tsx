import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  ItemActions,
  ItemHeader,
  ItemFooter,
} from "./item";

describe("Item - Defensive Context", () => {
  let consoleWarnMock: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleWarnMock = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnMock.mockRestore();
  });

  it("✅ KHÔNG warn khi thẻ con nằm trong Context", () => {
    render(
      <Item>
        <ItemMedia>
          <span />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Title</ItemTitle>
          <ItemDescription>Desc</ItemDescription>
        </ItemContent>
        <ItemActions>
          <button>ok</button>
        </ItemActions>
        <ItemHeader>header</ItemHeader>
        <ItemFooter>footer</ItemFooter>
      </Item>,
    );
    expect(consoleWarnMock).not.toHaveBeenCalled();
  });

  it("🚨 [Item] văng warn khi <ItemMedia> dùng ngoài Context", () => {
    render(<ItemMedia>test</ItemMedia>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <ItemMedia> phải được dùng bên trong"),
    );
  });

  it("🚨 [Item] văng warn khi <ItemContent> dùng ngoài Context", () => {
    render(<ItemContent>test</ItemContent>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <ItemContent> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [Item] văng warn khi <ItemTitle> dùng ngoài Context", () => {
    render(<ItemTitle>test</ItemTitle>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <ItemTitle> phải được dùng bên trong"),
    );
  });

  it("🚨 [Item] văng warn khi <ItemDescription> dùng ngoài Context", () => {
    render(<ItemDescription>test</ItemDescription>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <ItemDescription> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [Item] văng warn khi <ItemActions> dùng ngoài Context", () => {
    render(<ItemActions>test</ItemActions>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "[gladvn] <ItemActions> phải được dùng bên trong",
      ),
    );
  });

  it("🚨 [Item] văng warn khi <ItemHeader> dùng ngoài Context", () => {
    render(<ItemHeader>test</ItemHeader>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <ItemHeader> phải được dùng bên trong"),
    );
  });

  it("🚨 [Item] văng warn khi <ItemFooter> dùng ngoài Context", () => {
    render(<ItemFooter>test</ItemFooter>);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      expect.stringContaining("[gladvn] <ItemFooter> phải được dùng bên trong"),
    );
  });

  it("✅ Root có data-size đúng trên DOM", () => {
    const { getByTestId } = render(<Item size="lg" data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "lg");
  });

  it("✅ Root có data-slot='item' trên DOM", () => {
    const { getByTestId } = render(<Item data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-slot", "item");
  });

  it("✅ data-size mặc định là 'md'", () => {
    const { getByTestId } = render(<Item data-testid="root" />);
    expect(getByTestId("root")).toHaveAttribute("data-size", "md");
  });
});
