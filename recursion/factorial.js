/*

Write a function which accepts a number and returns the
factorial of that number. A factorial is the product of
an integer and all the integers below it.

*/

function factorial(num) {
  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
}
