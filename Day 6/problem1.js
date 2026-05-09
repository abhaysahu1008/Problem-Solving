function maxFrequencyCharacter(str) {
  if (!str || str.length === 0) return null;

  let freq = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > maxCount) {
      maxChar = char;
      maxCount = freq[char];
    }
  }

  return maxChar;
}

console.log(maxFrequencyCharacter("success"));
