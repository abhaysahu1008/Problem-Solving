//question:- input=12.34 output= ['1', '2', '3', '4']

function removeDecimal(digits) {
  let temp = digits;
  while (temp % 1 !== 0) {
    temp = temp * 10;
  }

  console.log(temp);
}

removeDecimal(12.34);
