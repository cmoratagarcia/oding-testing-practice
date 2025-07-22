const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./index.js");
//A capitalize function that takes a string and returns it with the first character capitalized.
test("capitalizes first character", () => {
  expect(capitalize("abcdef")).toBe("Abcdef");
});

//A reverseString function that takes a string and returns it reversed.
test("reverses string", () => {
  expect(reverseString("abCdef")).toBe("fedCba");
});
//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
test("adds 2 numbers", () => {
  expect(calculator.add(10, 500)).toBe(510);
});
test("subtracts 2 numbers", () => {
  expect(calculator.subtract(50, 2)).toBe(48);
});
test("divides 2 numbers", () => {
  expect(calculator.divide(10, 500)).toBe(0.02);
});
test("multiplies 2 numbers", () => {
  expect(calculator.multiply(10, 500)).toBe(5000);
});
//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
test("shifts characters by factor", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});
test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("preserves punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
test("returns correct object", () => {
  const result = analyzeArray([40, 25, 3, 166, 7]);
  expect(result.min).toBe(3);
  expect(result.max).toBe(166);
  expect(result.length).toBe(5);
  expect(result.average).toBeCloseTo(48.2, 1); // 1 = 1 decimal precision
});
