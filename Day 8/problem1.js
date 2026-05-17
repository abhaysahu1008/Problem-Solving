function ContainsOnlyAlpha(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      !(str[i] >= "a" && str[i] <= "z") &&
      !(str[i] >= "A" && str[i] <= "Z")
    ) {
      return false;
    }

    return true;
  }
}

console.log(ContainsOnlyAlpha("HelloWorld123"));
