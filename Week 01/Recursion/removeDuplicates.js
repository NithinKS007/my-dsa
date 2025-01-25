const removeDuplicates = (arr, index = 0, result = []) => {
    if (index === arr.length) {
      return result;
    }

    if (!result.includes(arr[index])) {
      result.push(arr[index]);
    }

    return removeDuplicates(arr, index + 1, result);
  };
  
  const arr = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr);
  
  const removeDuplicatesIterative = (arr) => {
    // Loop over each element in the array
    for (let index = 0; index < arr.length; index++) {
        // Compare the current element with all subsequent elements
        for (let i = index + 1; i < arr.length; i++) {
            if (arr[index] === arr[i]) {
                // Shift the elements after the duplicate left by one position
                for (let j = i; j < arr.length - 1; j++) {
                    arr[j] = arr[j + 1];
                }
                arr.length--; // Reduce the length of the array
                i--; // Adjust index since the array has been shortened
            }
        }
    }
    return arr;
};

console.log(removeDuplicatesIterative([1, 2, 3, 3, 4, 5, 99, 5]));
// Output: [1, 2, 3, 4, 5, 99]
