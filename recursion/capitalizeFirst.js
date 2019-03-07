/*

Write a recursive function which accepts an array of strings
and capitilizes the first letter of each string in the array

*/

function capitalizeFirst(arr) {
  arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  if (arr.length === 1) {
    return arr;
  }

  return [arr[0]].concat(capitalizeFirst(arr.slice(1)));
}
