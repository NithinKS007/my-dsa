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
  