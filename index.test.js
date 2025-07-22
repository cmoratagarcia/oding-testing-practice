const { capitalize, reverseString, calculator } = require("./index.js");
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
  expect(calculator.add(10, 500)).toBe(600);
});
test("subtracts 2 numbers", () => {
  expect(calculator.subtract(10, 500)).toBe(-400);
});
test("divides 2 numbers", () => {
  expect(calculator.divide(10, 500)).toBe(0.02);
});
test("multiplies 2 numbers", () => {
  expect(calculator.multiply(10, 500)).toBe(5000);
});
//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
