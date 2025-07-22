const { capitalize, reverseString } = require("./index.js");
//A capitalize function that takes a string and returns it with the first character capitalized.
test("capitalizes first character", () => {
  expect(capitalize("abcdef")).toBe("Abcdef");
});

//A reverseString function that takes a string and returns it reversed.
test("reverses string", () => {
  expect(reverseString("abCdef")).toBe("fedCba");
});
//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

//A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
