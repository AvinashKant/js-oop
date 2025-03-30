/*
Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
*/



var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  const m = num1.length;
  const n = num2.length;
  const result = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    let carry = 0;
    for (let j = n - 1; j >= 0; j--) {
      const product = parseInt(num1[i]) * parseInt(num2[j]);
      const total = product + result[i + j + 1] + carry;
      result[i + j + 1] = total % 10;
      carry = Math.floor(total / 10);
    }
    result[i] += carry;
  }

  // Remove leading zeros
  let start = 0;
  while (start < result.length && result[start] === 0) {
    start++;
  }

  return result.slice(start).join("");
};