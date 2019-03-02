/*

Write a function called power which accepts a positive base and
a positve exponent. The function should return the power of the
base to the exponent.

*/

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}
