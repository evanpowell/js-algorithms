/*

Write a recursive function which accepts an array and a
callback. The function returns true if any single value
in the array returns true when passed to the callback.
Otherwise it returns false.

*/

function someRecursive(arr, cb) {
  if (!arr.length) {
    return false;
  }

  if (cb(arr.pop())) {
    return true;
  }

  return someRecursive(arr, cb);
}