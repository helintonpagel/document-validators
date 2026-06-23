import { describe, it } from "node:test";
import assert from "node:assert";
import { validateCnh } from "../index.js";

describe("validateCnh", () => {
  it("should return true for a valid CNH", () => {
    assert.strictEqual(validateCnh("07739353700"), true);
  });

  it("should return false for an invalid CNH", () => {
    assert.strictEqual(validateCnh("07739353710"), false);
  });

  it("should return false for a CNH with invalid length", () => {
    assert.strictEqual(validateCnh("7739353700"), false);
  });

  it("should return false for a CNH with all digits the same", () => {
    assert.strictEqual(validateCnh("11111111111"), false);
  });
});
