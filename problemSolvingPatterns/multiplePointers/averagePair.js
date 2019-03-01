/*

Given a sorted array of integers and a target average, determine if there
is a pair of values in the array where the average of the pair equals the
target average. There may be more than one pair that matches the average
target.

*/

function averagePair(arr, targetAverage) {
  let lowValIndex = 0;
  let highValIndex = arr.length - 1;
  let currentAverage = 0

  while (lowValIndex < highValIndex) {
    currentAverage = (arr[lowValIndex] + arr[highValIndex]) / 2;
    if (currentAverage === targetAverage) {
      return true;
    }

    if (currentAverage < targetAverage) {
      lowValIndex += 1;
    } else {
      highValIndex -=1;
    }
  }

  return false;
}