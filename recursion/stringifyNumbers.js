/*

Write a function which takes in an object and returns a new object
in which all number values are converted to strings.

*/

function stringifyNumbers(obj) {
  let newObj;
  if (Array.isArray(obj)) {
    newObj = [];
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'number') {
        newObj.push(obj[i].toString());
      }
      else if (typeof obj[i] === 'object') {
        newObj.push(stringifyNumbers(obj[i]));
      } else {
        newObj.push(obj[i]);
      }
    }
  } else {
    newObj = {}
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      }
      else if (typeof obj[key] === 'object') {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
}
