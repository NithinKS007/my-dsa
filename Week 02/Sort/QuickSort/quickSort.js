const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log("Sorted array : ", quickSort([8, 20, -2, 4, -6]));

// Initial Call: quickSort([8, 20, -2, 4, -6])
// Pivot: -6 (last element).
// Partitioning:

// left: [] (no elements are smaller than -6).

// right: [8, 20, -2, 4] (elements greater than -6).

// Recursive Calls:

// Sort left: quickSort([]) → returns [].

// Sort right: quickSort([8, 20, -2, 4]).

// Recursive Call: quickSort([8, 20, -2, 4])
// Pivot: 4.

// Partitioning:

// left: [-2] (elements smaller than 4).

// right: [8, 20] (elements greater than 4).

// Recursive Calls:

// Sort left: quickSort([-2]) → returns [-2].

// Sort right: quickSort([8, 20]).

// Recursive Call: quickSort([8, 20])
// Pivot: 20.

// Partitioning:

// left: [8] (elements smaller than 20).

// right: [] (no elements are greater than 20).

// Recursive Calls:

// Sort left: quickSort([8]) → returns [8].

// Sort right: quickSort([]) → returns [].

// Result for this call: [8, 20].

// Combining the Results for quickSort([8, 20]):
// quickSort([8, 20]) returns [8, 20].

// Combining the Results for quickSort([8, 20, -2, 4]):
// quickSort([8, 20, -2, 4]) returns [-2, 4, 8, 20].

// Final Combination:
// quickSort([8, 20, -2, 4, -6]) combines everything:

// left = [], pivot = -6, right = [-2, 4, 8, 20]

// Result: [-6, -2, 4, 8, 20]