import { describe, expect, it } from "vitest";
import { helloWorld } from "../src/index.js";

describe("helloWorld", () => {
  it('should return "Hello World" when no name is provided', () => {
    expect(helloWorld()).toBe("Hello World");
  });

  it("should return personalized greeting when name is provided", () => {
    expect(helloWorld("Alice")).toBe("Hello Alice!");
    expect(helloWorld("Bob")).toBe("Hello Bob!");
  });

  it("should handle empty string as name", () => {
    expect(helloWorld("")).toBe("Hello !");
  });
});
