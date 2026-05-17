function removeDuplicates(arr) {
  let freq = {};
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = true;
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);
}

removeDuplicates([1, 2, 2, 3, 3, 4]);
