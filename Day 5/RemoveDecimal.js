function RemoveDecimal(n) {
  while (n % 1 != 0) {
    n = n * 10;
  }
  console.log(n);
}

RemoveDecimal(12.34);
