/*

Implement a function which accepts a variable number of arguments
and checks whether there are any duplicates among them

Restrictions:

Time - O(n)
Space - O(n)

*/

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  
  let i = 0;
  let j = 1;

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    }

    i++;
    j++;
  }

  return false;
}