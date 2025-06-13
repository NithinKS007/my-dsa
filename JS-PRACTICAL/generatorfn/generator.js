// Write a generator function that takes an array of numbers and yields each number one by one.
// function* printNumbers(array) {
//   for (let number of array) {
//     yield number;
//   }
// }
// const numbers = printNumbers([11, 22, 3, 4, 55]);

// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);

// Create a generator function that takes an array of numbers and yields only the even numbers.

// function* printEven(array) {
//   for (let number of array) {
//     if (number % 2 === 0) {
//       yield number;
//     }
//   }
// }

// const array = [122, 45, 1, 3, 6];
// const answers = printEven(array);
// for (let evenNumber of answers) {
//     console.log(evenNumber);
//   }
// console.log(answers.next().value);
// console.log(answers.next().value);
// console.log(answers.next().value);

// Write a generator function that takes an array of numbers and yields the square of each number.
// function* square(array) {
//   for (let number of array) {
//     yield number * number;
//   }
// }


// const squareData = square([1, 2, 3, 4, 5]);

// for (let number of squareData) {
//   console.log(number);
// }

// Create a generator function that takes an array of numbers and yields the cumulative sum of 
// the numbers one by 
// one.
// function* sumCalculate(array) {
//   let sum = 0;
//   for (let number of array) {
//     yield (sum += number);
//   }
// }

// const sumData = sumCalculate([1, 2, 3, 4, 5]);

// console.log(sumData.next().value);
// console.log(sumData.next().value);

// Filtering and Mapping with Generator:

// Write a generator function that filters out negative numbers from an array and then maps the remaining numbers by doubling them.
// Example input: [1, -2, 3, -4, 5]
// Output: 2, 6, 10
// Flattening Nested Arrays:

// Write a generator function that flattens a nested array of any depth (recursive flattening).
// Example input: [1, [2, [3, [4]]]]
// Output: 1, 2, 3, 4
// Unique Values from Array:

// Create a generator function that yields only unique values from an array.
// Example input: [1, 2, 2, 3, 3, 3, 4]
// Output: 1, 2, 3, 4
// Advanced Array Questions:
// Array of Fibonacci Numbers:

// Write a generator function that takes an array of numbers and yields the Fibonacci sequence up to the maximum value in the array.
// Example input: [10, 20, 30]
// Output: 1, 1, 2, 3, 5, 8, 13, 21
// Group Array by Size:

// Create a generator function that takes an array and a size n, and yields subarrays of size n.
// Example input: [1, 2, 3, 4, 5, 6], size 2
// Output: [1, 2], [3, 4], [5, 6]
// Array from Iterating Over Object Keys:

// Write a generator function that takes an object and yields each key from the object as an array element.
// Example input: {a: 1, b: 2, c: 3}
// Output: 'a', 'b', 'c'
// Merge Two Arrays with a Generator:
// Create a generator function that merges two arrays and yields the merged values one by one, alternating between the two arrays.
// Example input: [1, 3, 5], [2, 4, 6]
// Output: 1, 2, 3, 4, 5, 6
// Find Intersection of Two Arrays:
// Write a generator function that yields the common elements between two arrays.
// Example input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: 3, 4
// Challenge Array Questions:
// Rotate an Array:
// Write a generator function that rotates an array to the right by n positions.
// Example input: [1, 2, 3, 4, 5], n = 2
// Output: 4, 5, 1, 2, 3
// Sliding Window Sum:
// Create a generator function that takes an array and a window size n, and yields the sum of each window of size n.
// Example input: [1, 2, 3, 4, 5, 6], n = 3
// Output: 6, 9, 12, 15
// Running Average of Array:
// Write a generator function that calculates and yields the running average of an array as you iterate over it.
// Example input: [1, 2, 3, 4]
// Output: 1, 1.5, 2, 2.5

