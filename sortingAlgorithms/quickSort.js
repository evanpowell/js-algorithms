function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}


function pivotHelper(arr, start, end) {
  let pivot = arr[start];
  let swapIdx = start;
  let temp;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      if (i !== swapIdx) {
        swap(arr, i, swapIdx);
      }
    }
  }
  if (swapIdx !== start) {
    swap(arr, start, swapIdx);
  }
  return swapIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// pivot
// [1,4,2,5,7,6,8]