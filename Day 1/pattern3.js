function pat3(n) {
  for (let i = 1; i <= n; i++) {
    let str = [];

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        str.push("*");
      } else {
        str.push(" ");
      }
    }
    console.log(str.join(""));
  }
}

pat3(5);
