// function Math(n) {
//   const whole = n / 1 - (n % 1);
//   console.log(whole);
//   const fract = n % 1;
//   console.log(fract);
// }
// Math(5.75);

function Count(n) {
  let integerPart = 0;
  let decimalPart = 0;
  let factor = 1;

  // separate integer part manually
  while (n >= 1) {
    n = n - 1;
    integerPart++;
  }

  // now n is fractional part
  while (n > 0) {
    n = n * 10;
    let digit = 0;

    // extract digit without Math.floor
    while (n >= 1) {
      n = n - 1;
      digit++;
    }

    decimalPart++;
  }

  console.log("Integer digits:", integerPart.toString().length);
  console.log("Fraction digits:", decimalPart);
}

Count(12.345);
