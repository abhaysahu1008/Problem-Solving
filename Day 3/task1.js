//question:- input=1234 output= ['1', '2', '3', '4']

function digitsToNumber(digits) {
  let result = [];
  while (digits > 0) {
    const lastDigit = digits % 10;
    result[result.length] = lastDigit + "";
    digits = (digits - lastDigit) / 10;
  }

  let finalArr = [];
  for (let i = result.length - 1; i >= 0; i--) {
    finalArr[finalArr.length] = result[i];
  }
  console.log(finalArr);
}

digitsToNumber(1234);
