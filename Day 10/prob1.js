function findMinAndMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("MIN:", min);
  console.log("MAX:", max);
}

findMinAndMax([10, 25, 26, 18]);
