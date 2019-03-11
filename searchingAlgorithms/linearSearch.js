/*

Given an array and a value, find the index of that value
within the array by looping through it. If the value is
never found, return -1.

*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
