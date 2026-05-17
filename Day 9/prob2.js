function LongestWord(str) {
  let currWord = "";
  let maxWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      currWord += str[i];
    }

    if (str[i] === " " || i === str.length - 1) {
      if (currWord.length > maxWord.length) {
        maxWord = currWord;
      }
      currWord = "";
    }
  }

  console.log(maxWord);
}

LongestWord("Coding is beautiful");
