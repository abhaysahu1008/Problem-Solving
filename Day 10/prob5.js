function mergeArrays(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
}

mergeArrays([1, 2, 7, 77, 3], [4, 5, 4, 5, 6]);
