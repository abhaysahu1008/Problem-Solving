function CountElements(arr, element) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  console.log(count);
}

CountElements([1, 4, 4, 4, 2], 4);
