// Given two positive integers, find out if the two numbers have
// the same frequency of digits.

// Time: O(N)

function sameFrequency(num1, num2) {
  const numStr1 = num1.toString();
  const numStr2 = num2.toString();

  if (numStr1.length !== numStr2.length) {
    return false;
  }

  const lookup = {};

  for (let digit of numStr1) {
    lookup[digit] = ++lookup[digit] || 1;
  }

  for (let digit of numStr2) {
    if (!lookup[digit]) {
      return false;
    }

    lookup[digit] -= 1;
  }

  return true;
}