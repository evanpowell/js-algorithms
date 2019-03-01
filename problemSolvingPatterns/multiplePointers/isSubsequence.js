/*

Write a function which takes in two strings and checks whether the
characters in the first string form a subsequence of the characters
in the second string. In other words, the function should check
whether the characters in the first string appear somewhere in the
second string, without their order changing.

*/

function isSubsequence(str1, str2) {
  let str1Index = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[str1Index] === str2[i]) {
      str1Index++;
    }
    if (str1Index === str1.length) {
      return true;
    }
  }

  return false;
}