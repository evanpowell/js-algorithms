function naiveStringSearch(str, substr) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < substr.length; j++) {
      if (substr[j] !== str[i + j]) {
        break;
      } else if (j === substr.length - 1) {
        count++;
      }
    }
  }
  return count;
}