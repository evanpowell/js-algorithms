/*

Write a recursive function which returns true if the string passed
to it is a palindrome or false if it is not.

*/


function isPalindrome(str) {
  if (str.length <= 3) {
      return str[0] === str[str.length - 1];
  }
  if (str[0] !== str[str.length - 1]) {
      return false;
  }
  
  return isPalindrome(str.slice(1, str.length - 1));
}
