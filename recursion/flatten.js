/*

Write a recursive function which accepts an array of arrays
and return a new array with all values flattened.

*/

function flatten(arr) {
  let flatArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatten(item));
    } else {
      flatArr.push(item);
    }
  }
  
  return flatArr;
}