function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);

  const digitBuckets = {};
  let currentDigit;
  
  for (let k = 1; k <= maxDigitCount; k++) {
    for (let num of arr) {
      currentDigit = getDigit(num, k);
      if (!digitBuckets[currentDigit]) {
        digitBuckets[currentDigit] = [];
      }

      digitBuckets[currentDigit].push(num);
    }

    arr = [];

    for (let i = 0; i <= 9; i++) {
      arr = arr.concat(digitBuckets[i] || []);
      digitBuckets[i] = [];
    }
  }

  return arr;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }

  return maxDigits;
}

function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}
