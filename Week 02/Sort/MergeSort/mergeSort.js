// The idea is to recursively divide the array into smaller subarrays until the subarrays contain only one element
// , and then merge these subarrays back together in sorted order.

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};
const merge = (leftArr, rightArr) => {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
};
console.log("Sorted Array", mergeSort([3, 1, -5, -33, 85, 6, -8]));

// Base Case:

// If the array (arr) has fewer than 2 elements (i.e., an empty array or a single element array),
//  we return the array as it is because it's already "sorted" in this case.

// Recursive Case:

// If the array has more than 1 element, we:

// Find the middle index of the array (middle = Math.floor(arr.length / 2)).

// Split the array into two halves:

// left contains the elements from the start of the array to the middle.

// right contains the elements from the middle to the end of the array.

// Recursively apply mergeSort to both the left and right subarrays. 
// These recursive calls will eventually reduce the subarrays to arrays of length 1.

// Once the subarrays are sorted, we merge them back together using the merge function.


// Merging Process:

// The goal of merge is to merge two sorted arrays (left and right) into one sorted array (sorted).

// We compare the first element of both arrays (left[0] and right[0]):

// If the element in left is smaller, we shift it out of left and push it into the sorted array.

// If the element in right is smaller (or equal), we shift it out of right and push it into sorted.

// This process continues until one of the arrays (left or right) is empty.

// After the while loop, we concatenate whatever is left in both left and right to the sorted array. 
// This is necessary because once one array is empty, the other array must already be sorted,
//  so we can just append the rest of it.