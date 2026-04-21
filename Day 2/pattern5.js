function pat5(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += (i + j + 1) % 2;
    }

    console.log(str);
  }
}
pat5(5);
