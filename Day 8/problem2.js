function ReverseTheWords(str) {
  let word = "";
  let inWord = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      inWord = false;
    } else {
      inWord = true;
      word += str[i];
    }
  }
}

ReverseTheWords("I love coding");
