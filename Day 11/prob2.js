function RotateAnArray(arr, K) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i >= K) {
      newArr[i] = arr[i - K];
    } else {
      newArr[i] = arr[K + i + 1];
    }
  }
  console.log(newArr);
}

RotateAnArray([1, 2, 3, 4, 5], 2);
