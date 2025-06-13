// Find min and max in a single function with reduce
const findMinMax = (arr) => {
  return arr.reduce(
    (acc, curr) => {
      if (curr < acc.min) {
        acc.min = curr;
      }
      if (curr > acc.max) {
        acc.max = curr;
      }
      return acc;
    },
    { min: Infinity, max: -Infinity }
  );
};

const array1 = [10, 5, 7, 3, 12, 20, 2];
const { min, max } = findMinMax(array1);
console.log("Smallest element:", min);
console.log("Largest element:", max);

// Find the largest even number with reduce
const largestEven = (ar) => {
  return ar.reduce((acc, curr) => {
    if (curr % 2 === 0 && curr > acc) {
      return curr;
    }
    return acc;
  }, -Infinity);
};

const array2 = [12, 25, 34, 13, 14, 35];
const result2 = largestEven(array2);
console.log(result2);

// Find the largest number using reduce
const isLargest = (array) => {
  return array.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    }
    return acc;
  }, -Infinity);
};

const array3 = [10, 29, 37, 47];
const result3 = isLargest(array3);
console.log(result3);

// Find the longest string using reduce
const longestString = (array) => {
  return array.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      return curr;
    }
    return acc;
  }, "");
};

const array4 = ["apple", "banana", "orange"];
const result4 = longestString(array4);
console.log(result4);

// Get second largest even number
const getSecondLargestEven = (ar) => {
  const evenNumbers = ar.filter((num) => num % 2 === 0);
  if (evenNumbers.length < 2) return null; // No second largest if less than 2 even numbers
  return evenNumbers.reduce(
    (acc, curr) => {
      if (curr > acc.largest) {
        acc.secondLargest = acc.largest;
        acc.largest = curr;
      } else if (curr > acc.secondLargest && curr !== acc.largest) {
        acc.secondLargest = curr;
      }
      return acc;
    },
    { largest: -Infinity, secondLargest: -Infinity }
  ).secondLargest;
};

const ar = [3, 54, 242, 4, 2];
const result = getSecondLargestEven(ar);
console.log(result);

// Sum of all even numbers
const sumOfAllEvenNumbers = (array) => {
  return array.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      return acc + curr;
    }
    return acc;
  }, 0);
};

const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result5 = sumOfAllEvenNumbers(array5);
console.log(result5);

// Find the second smallest even number
const issecSmallest = (ar) => {
  const evenNumbers = ar.filter((num) => num % 2 === 0);

  return evenNumbers.reduce(
    (acc, curr) => {
      if (curr < acc.smallest) {
        acc.secondSmallest = acc.smallest;
        acc.smallest = curr;
      } else if (curr !== acc.smallest && curr < acc.secondSmallest) {
        acc.secondSmallest = curr;
      }
      return acc;
    },
    { smallest: Infinity, secondSmallest: Infinity }
  ).secondSmallest;
};

const ar2 = [12, 23, 21, 4, 15];
const result6 = issecSmallest(ar2);
console.log(result6);
