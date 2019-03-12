/*

Assume the input is an array of numbers. Bubble sort
returns the array sorted in ascending order.

*/

function bubbleSort(arr) {
  let temp;
  let hasSwapOccured;

  for (let i = arr.length - 1; i >= 0; i--) {
    hasSwapOccured = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwapOccured = true;
      }
    }
    if (!hasSwapOccured) {
      break;
    }
  }
  return arr;
}