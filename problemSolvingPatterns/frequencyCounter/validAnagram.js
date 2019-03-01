// Given two strings, determine if the strings are anagrams of eachother.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  const charFrequencyBalanceCounter = {};
  
  for (let char of str1) {
    charFrequencyBalanceCounter[char] = ++charFrequencyBalanceCounter[char] || 1;
  }
  
  for (let char of str2) {
    if (!(char in charFrequencyBalanceCounter)) {
      return false;
    }

    charFrequencyBalanceCounter[char] -= 1;
  }

  for (let frequencyBalance of Object.values(charFrequencyBalanceCounter)) {
    if (frequencyBalance !== 0) {
      return false;
    }
  }

  return true;
}