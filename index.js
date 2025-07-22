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

function caesarCipher(string, factor) {
  const lowers = "abcdefghijklmnopqrstuvwxyz";
  const uppers = lowers.toUpperCase();
  let encryptedStr = "";
  let index = 0;

  for (let i = 0; i < string.length; i++) {
    if (lowers.indexOf(string.charAt(i)) !== -1) {
      index = lowers.indexOf(string.charAt(i));
      encryptedStr += lowers.charAt(index + factor);
    } else if (uppers.indexOf(string.charAt(i)) !== -1) {
      index = uppers.indexOf(string.charAt(i));
      encryptedStr += uppers.charAt(index + factor);
    } else {
      encryptedStr += string.charAt(i);
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
