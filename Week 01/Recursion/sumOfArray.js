const sumArray = (arr, index = 0) => {
  if (index === arr.length) {
    return 0;
  }

  return arr[index] + sumArray(arr, index + 1);
};

const array = [1, 2, 3, 4, 5];
const result = sumArray(array);
console.log(result);

function getTheSubsets(nums) {
  let result = []; // Stores all subsets (power set)
  let temp = []; // Stores a current subset during the backtracking process

  function recursive(nums, index) {
    // Base case: If we've considered all elements
    if (nums.length === index) {
      return result.push([...temp]); // Push a copy of current subset to result
    }

    // Include the current element in the subset
    temp.push(nums[index]);
    // Recurse to the next element, with the current element included
    recursive(nums, index + 1);

    // Exclude the current element (backtrack)
    temp.pop();
    // Recurse to the next element, with the current element excluded
    recursive(nums, index + 1);
  }

  // Start the recursive process from index 0
  recursive(nums, 0);
  return result;
}

const powerSet = getTheSubsets([1, 2, 3]);
console.log(powerSet);
