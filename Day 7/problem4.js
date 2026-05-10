function CountWords(str) {
  let count = 0;
  let inWord = false;

  for (let char of str) {
    if (char !== " " && !inWord) {
      count++;
      inWord = true;
    } else if (char === " ") {
      inWord = false;
    }
  }

  return count;
}

console.log(CountWords(" Hi there   fvdnlfvlf dfvnldfvnldf world"));
