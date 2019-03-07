/*

Write a recursive function that return the sum of all
even numbers in an object which may contain nested objects.

*/

function nestedEvenSum(obj) {
  let sum = 0;
  let value;

  for (let key in obj) {
    value = obj[key];
    if (value % 2 === 0) {
      sum += value;
    } else if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
}
