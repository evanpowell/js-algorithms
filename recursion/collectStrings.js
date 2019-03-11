/*

Write a function which accepts an object and returns an array
of all the values in the object that have a type of string.

*/

function collectStrings(obj) {
  let stringArray = [];

  if (Array.isArray(obj)) {
    for (let value of obj) {
      if (typeof value === 'string') {
        stringArray.push(value);
      } else if (typeof value === 'object') {
        stringArray = stringArray.concat(collectStrings(value));
      }
    }
  } else {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        stringArray.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        stringArray = stringArray.concat(collectStrings(obj[key]));
      }
    }
  }

  return stringArray;
}
