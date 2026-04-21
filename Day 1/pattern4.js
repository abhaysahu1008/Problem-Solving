function starPat(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n + i - 1; j++) {
      if (j <= n - i) {
        str += " ";
      } else {
        str+="*";
        if(){

        }
      }
    }
    console.log(str);
  }
}

starPat(5);
