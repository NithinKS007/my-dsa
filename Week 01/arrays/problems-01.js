function removeDuplicates(arr) {
  if (arr.length === 0) return 0; // handle empty array

  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[count] !== arr[i]) {
      count++;
      arr[count] = arr[i];
    }
  }

  return count + 1; // new length of the array
}


function findSecondLargest(arr) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}


function rotateArray(nums, k) {
  const size = nums.length;
  if (size === 0) return nums;  // Edge case: empty array

  k = k % size;  // Handle k larger than array size
  if (k === 0) return nums;  // Edge case: no need to rotate if k is 0 or multiple of size

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);

  return nums;
}

function reverse(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
}

function countCharacterFrequencies(str) {
  const frequencies = {};
  for (let char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  return frequencies;
}

function firstNonRepeatingCharacter(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) return char;
  }

  return null;
}

//palindrome

// ✅ 19. Find the Missing Number in an Array from 1 to N
let series = [1, 2, 3, 5]; // Missing 4
let n = 5;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = series.reduce((acc, val) => acc + val, 0);
console.log("Missing Number:", expectedSum - actualSum);
// ✅ 4. Check if a Number is Prime
let num = 7;
let isPrime = true;
if (num <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log("Is Prime:", isPrime);
// remove duplicates witout usign built in method

// find first and last occurence of an element in an array

// Find the first or last occurrence of a target element in a sorted array with duplicates.

// Given a sorted array, find the smallest positive integer that is missing.

// Given a sorted array, find the largest element less than or equal to a target value.

// Given an array of book pages and k students, allocate books such that the maximum pages assigned to a student is minimized.

// Write a function to find the node with the maximum value in the linked list.

// Write a function to split a linked list into two halves. If the list has an odd number of nodes, the extra node should go to the first half.

// Write a function to delete every alternate node in the linked list.

// Write a function to search for a specific value in the linked list

// Write a function to count the total number of nodes in the linked list

// Remove Duplicates from Unsorted List

// Write a function that takes two arrays and returns an array of their intersection.  
function findTheLastOccurence(nums, target) {
  let left = 0
  let right = nums.length - 1
  let lastOccurence = -1 
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] == target) {
      lastOccurence = middle
      left = middle + 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else if (nums[middle] > target) {
      right = middle - 1
    }
  }
  return lastOccurence
}