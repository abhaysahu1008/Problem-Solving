function findSecondLargest(arr) {
  let largest = -Infinity;
  let slargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      slargest = largest;
      largest = arr[i];
    } else if (arr[i] > slargest && arr[i] !== largest) {
      slargest = arr[i];
    }
  }

  if (slargest === -Infinity) {
    console.log("No second largest element");
  } else {
    console.log("largest:", largest);
    console.log("second largest:", slargest);
  }
}

findSecondLargest([10, 20, 4, 45, 99]);
