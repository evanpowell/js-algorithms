/*

Write a function which accepts a number and adds up all
the numbers from 0 to the number passed to the function.

*/

function recursiveRange(range) {
  function sumHelper(num) {
    if (num === range) {
      return num;
    }

    return num + sumHelper(num + 1);
  }

  return sumHelper(0);
}
