function RemoveDuplicate(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] >= 1) {
      newStr += str[i];
      freq[str[i]] = 0;
    }
  }

  console.log(newStr);
}

RemoveDuplicate("progrpppamming");
