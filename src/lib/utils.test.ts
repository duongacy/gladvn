import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("should merge tailwind classes properly", () => {
      expect(cn("p-4", "m-4")).toBe("p-4 m-4");
      expect(cn("px-2 py-1", "p-4")).toBe("p-4");
      expect(cn("text-red-500", { "text-blue-500": true })).toBe(
        "text-blue-500",
      );
    });
  });
});
