function freqOfChar(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }
  return frequency;
}

console.log(freqOfChar("banana"));
