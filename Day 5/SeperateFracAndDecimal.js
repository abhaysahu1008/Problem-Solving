function SeperateDecimal(n) {
  const fract = Number((n % 1).toFixed(10));
  const deci = n - fract;
  console.log("fract:", fract + " " + "Deci:", deci);
}

SeperateDecimal(12.34);
