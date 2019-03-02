/*

Write a function which takes in an array of numbers
and returns the products of them all.

*/

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}
