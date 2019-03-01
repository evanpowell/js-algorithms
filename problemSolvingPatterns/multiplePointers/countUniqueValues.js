// Given a sorted array, return the number of unique values in the array

function countUniqueValues(arr) {
  // if array is empty, there are no unique pairs
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}