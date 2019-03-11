function binarySearch(arr, val) {
  if (arr.length === 1) {
    return arr[0] === val ? 0 : -1;
  }

  let left = 0;
  let right = arr.length -1;
  let i;
  let currentVal;


  while (left < right) {
    i = Math.floor((left + right) / 2);
    currentVal = arr[i];

    if (currentVal === val) {
      return i;
    } else if (currentVal > val) {
      right = i - 1;
    } else if (currentVal < val) {
      left = i + 1;
    }
  }

  return -1;
}