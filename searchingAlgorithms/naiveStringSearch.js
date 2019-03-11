function naiveStringSearch(str, substr) {
  let count = 0;
  let currentChar;
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < substr.length; j++) {
      currentChar = str[i + j];
      if (substr[j] !== currentChar) {
        break;
      } else if (j === substr.length - 1) {
        count++;
      }
    }
  }
  return count;
}