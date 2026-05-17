function reverseWords(str) {
  let words = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      words[words.length] = word;
      word = "";
    }
  }

  words[words.length] = word;

  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) {
      result += " ";
    }
  }

  console.log(result);
}

reverseWords("i love coding");
