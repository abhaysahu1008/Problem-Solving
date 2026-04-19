function starPat(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= 2 * n - i; j++) {
      if (j < i) {
        str += " ";
      } else {
        str += "*";
      }
    }
    console.log(str);
  }
}

starPat(5);
