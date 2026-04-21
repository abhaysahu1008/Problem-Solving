function pat6(n) {
  let mid = Math.ceil(n / 2);

  for (let i = 1; i <= n; i++) {
    let str = "";

    let spaces, stars;

    if (i <= mid) {
      spaces = mid - i;
      stars = 2 * i - 1;
    } else {
      spaces = i - mid;
      stars = 2 * (n - i) + 1;
    }

    str += " ".repeat(spaces);
    str += "*".repeat(stars);

    console.log(str);
  }
}

pat6(5);
