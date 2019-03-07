/*

Given an array of words, return a new array
containing each word capitalized

*/

function capitalizedWords(arr) {
  let capitalizedWordArray = [arr[0].toUpperCase()];
  if (arr.length === 1) {
    return capitalizedWordArray;
  }

  return capitalizedWordArray.concat(capitalizeWords(arr.slice(1)));
}
