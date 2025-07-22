function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, factor) {
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const uppers = lowers.toUpperCase();

  // Helper function to shift a character within a given alphabet
  function shiftChar(char, alphabet) {
    const index = alphabet.indexOf(char);
    if (index === -1) return char; // not in alphabet
    // Use modulo to wrap around the alphabet
    const shiftedIndex = (index + factor) % 26;
    return alphabet[(shiftedIndex + 26) % 26]; // handle negative shifts
  }

  let encryptedStr = "";

  for (let char of str) {
    if (lowers.includes(char)) {
      encryptedStr += shiftChar(char, lowers);
    } else if (uppers.includes(char)) {
      encryptedStr += shiftChar(char, uppers);
    } else {
      encryptedStr += char;
    }
  }

  return encryptedStr;
}
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};

console.log(caesarCipher("Hello", 3));
