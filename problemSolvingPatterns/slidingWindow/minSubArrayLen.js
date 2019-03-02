/*

Write a function which accepts two parameters - an array of
positive integers, and a positive integer. This function
should return the minimal length of a contiguous subarray
of which the sum is greater or equal to the integer passed
to the function. If there isn't one, return 0 instead.

*/

function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let sum = arr[0];
  let minLength = Infinity;

  if (sum >= num) {
    return 1;
  }

  while (end < arr.length) {
    if (start - end === minLength || sum === num) {
      start++;
      end++;
      sum = sum + (arr[end] || 0) - (arr[start - 1] || 0);
    } else if (sum > num) {
      start++;
      sum -= (arr[start - 1] || 0);
      if (start > end) {
        end++;
        sum += (arr[end] || 0);
      }
    } else {
      end++;
      sum += (arr[end] || 0);
    }

    if (end - start + 1 < minLength && sum >= num) {
      minLength = end - start + 1;
      if (minLength === 1) {
        return 1;
      }
    }
  }

  return minLength === Infinity ? 0 : minLength;
}