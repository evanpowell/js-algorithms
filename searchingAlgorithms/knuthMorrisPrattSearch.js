function kmpSearch(str, w) {
  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (w[j] === str[i]) {
      j ++;
      i ++;
    }
  }
}

function buildTable(w) {
  let table = [-1];
  let k = 0;
  let charAtI,
      charAtK;

  for (let i = 1; i < w.length; i++) {
    charAtI = w[i];
    charAtK = w[k];
    if (w[i] === w[k]) {
      table[i] === table[k];
    } else {
      table[i] = k;
      k = table[k];

      while (k >= 0 && w[i] !== w[k]) {
        k = table[k];
      }
    }

    k++;
  }

  table.push(k);

  return table;
}

buildTable('ABCDABD');