const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([8, 20, -2, 4, -6]));

// Pass 1 (i = 0):
// Compare 8 and 20: No swap, because 8 < 20.

// Compare 20 and -2: Swap them, because 20 > -2. New array: [8, -2, 20, 4, -6].

// Compare 20 and 4: Swap them, because 20 > 4. New array: [8, -2, 4, 20, -6].

// Compare 20 and -6: Swap them, because 20 > -6. New array: [8, -2, 4, -6, 20].

// After Pass 1, the largest number 20 is in its correct position.

// Pass 2 (i = 1):
// Compare 8 and -2: Swap them, because 8 > -2. New array: [-2, 8, 4, -6, 20].

// Compare 8 and 4: Swap them, because 8 > 4. New array: [-2, 4, 8, -6, 20].

// Compare 8 and -6: Swap them, because 8 > -6. New array: [-2, 4, -6, 8, 20].

// After Pass 2, the second-largest number 8 is in its correct position.

// Pass 3 (i = 2):
// Compare -2 and 4: No swap, because -2 < 4.

// Compare 4 and -6: Swap them, because 4 > -6. New array: [-2, -6, 4, 8, 20].

// After Pass 3, 4 is in its correct position.

// Pass 4 (i = 3):
// Compare -2 and -6: Swap them, because -2 > -6. New array: [-6, -2, 4, 8, 20].

// Now, the array is sorted.