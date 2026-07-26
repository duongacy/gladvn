import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn utility function", () => {
  it("should merge tailwind classes properly", () => {
    expect(cn("px-2 py-1", "bg-red-500")).toBe("px-2 py-1 bg-red-500");
  });

  it("should resolve conflicts favoring the latter class", () => {
    // text-white should override text-black
    expect(cn("text-black", "text-white")).toBe("text-white");
    // px-4 should override px-2
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("should handle conditional classes", () => {
    expect(
      cn("base-class", true && "truthy-class", false && "falsy-class"),
    ).toBe("base-class truthy-class");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["class1", "class2"], "class3")).toBe("class1 class2 class3");
  });

  it("should ignore null and undefined values", () => {
    expect(cn("valid-class", null, undefined, "another-class")).toBe(
      "valid-class another-class",
    );
  });
});
