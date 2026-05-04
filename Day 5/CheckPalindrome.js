function isPalindrome(str) {
  let leftindex = 0;
  let rightindex = str.length - 1;

  while (leftindex < rightindex) {
    if (str[leftindex] !== str[rightindex]) return false;
    leftindex++;
    rightindex--;
  }
  return true;
}

console.log(isPalindrome("racecar"));
