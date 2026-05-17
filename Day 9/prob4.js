// let freq = {
//   a: 3,
//   b: 2,
//   c: 4,
//   d: 1,
// };

function CompressString(str) {
  let freq = {};
  let newStr = "";
  let char = "";

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + freq[str[i]];
  }
}

CompressString("aaabbccccd");
