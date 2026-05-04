function SplitNumberToDigits(n) {
  let count = 0;
  let arr = [];
  while (n > 0) {
    let lastDigit = n % 10;
    n = n / 10 - (n % 10) / 10;
    arr[count] = lastDigit;
    count++;
  }
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[arr.length - i - 1];
  }
  console.log(temp);
}

SplitNumberToDigits(12345);
