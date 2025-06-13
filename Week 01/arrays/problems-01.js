//Find the second largest without using any built in method
const findSecondLargest = (arr) => {
  let largest = Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

// Rotate the array k times
function rotateArray(nums, k) {
  const size = nums.length;
  if (size === 0) return nums;

  k = k % size;
  if (k === 0) return nums;

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

//Count the frequencies of each charactor in a string
function countCharacterFrequencies(str) {
  const frequencies = {};
  if (frequencies[char]) {
    frequencies[char] += 1;
  } else {
    frequencies[char] = 1;
  }
  return frequencies;
}

//Find the first non repeating charactor
function firstNonRepeatingCharacter(str) {
  const count = {};

  for (let char of str) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

//Find the missing number from 1 to N
function findMissingNumber(series, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = series.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

//Check the given string is a palindrome using recursion
const isPalindrome = (string, start = 0, end = string.length - 1) => {
  if (start >= end) {
    return true;
  }

  if (string[start] !== string[end]) {
    return false;
  }

  return isPalindrome(string, start + 1, end - 1);
};

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("hello"));

//Find first and last occurence of an element in an array
function findFirstAndLast(arr, target) {
  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (firstIndex === -1) {
        firstIndex = i; // First occurrence found
      }
      lastIndex = i; // Last occurrence found (updates each time)
    }
  }

  return {
    firstOccurrence: firstIndex,
    lastOccurrence: lastIndex,
  };
}

// // Find the first or last occurrence of a target element in a sorted array with duplicates.

// // Given a sorted array, find the smallest positive integer that is missing.

// // Given a sorted array, find the largest element less than or equal to a target value.

// // Given an array of book pages and k students, allocate books such that the maximum pages assigned to a student is minimized.

// // Write a function to find the node with the maximum value in the linked list.

// // Write a function to split a linked list into two halves. If the list has an odd number of nodes, the extra node should go to the first half.

// // Write a function to delete every alternate node in the linked list.

// // Write a function to search for a specific value in the linked list

// // Write a function to count the total number of nodes in the linked list

// // Remove Duplicates from Unsorted List

// // Write a function that takes two arrays and returns an array of their intersection.
// function findTheLastOccurence(nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   let lastOccurence = -1
//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2)
//     if (nums[middle] == target) {
//       lastOccurence = middle
//       left = middle + 1
//     } else if (nums[middle] < target) {
//       left = middle + 1
//     } else if (nums[middle] > target) {
//       right = middle - 1
//     }
//   }
//   return lastOccurence
// }

// // count majority element

// // (5) - Find the Missing Number
// function findMissingNumber() {}
// // (6) - Find Duplicates in an Array

// // ----------------------
// // 1) Find an Element in an Array:

// // Given an array of integers, find the index of a given target value. If not found, return -1.

// // 2) Find the Maximum and Minimum Elements:

// // Traverse the array using linear search to find the largest and smallest elements.

// // 3) Search for the First and Last Occurrence:

// // Find the first and last occurrence of a target value in an array.

// // 4) Count the Occurrences of an Element:

// // Count how many times a target value appears in the array.

// // 5) Find the Missing Number:

// // Given an array containing numbers from 1 to n with one number missing, find the missing number.

// // 6) Find Duplicates in an Array:

// // Traverse an array and find if any element is repeated.

// // 7) Search in a Matrix:

// // Given a 2D matrix (not sorted), implement a linear search to find if a target value exists in the matrix.

// // 8) Find Peak Element:

// // A peak element is an element that is greater than its neighbors. Perform a linear scan to find one peak in the array.

// // Binary Search Problems
// // ----------------------
// // 1) Basic Binary Search:

// // Implement binary search to find the index of a target value in a sorted array.

// // 2) Find First and Last Position of a Target:

// // Given a sorted array, find the first and last index of a target value.

// // 3) Find the Square Root:

// // 4) Search in a Rotated Sorted Array:

// // A sorted array is rotated at some pivot. Search for a target value in the rotated sorted array.

// // 5) Find the Missing Number in Sorted Array:

// // A sorted array contains integers in the range 1 to n with one missing. Use binary search to find the missing number.

// // 6) Find the Peak Element:

// // A peak element is greater than its neighbors. Solve the problem using binary search for O(logn) time complexity.

// // Phase 1: Arrays (Week 1-2)
// // Key Concepts:
// // Array Manipulation

// // Sliding Window

// // Two Pointers

// // Prefix/Suffix Sum

// // Sorting & Searching

// // Binary Search on Arrays

// // Easy Questions:
// // Find the maximum element in an array.

// // Concepts: Array traversal, max function.

// // Find the minimum element in an array.

// // Concepts: Array traversal, min function.

// // Reverse an array.

// // Concepts: Array reversal, swapping.

// // Find the sum of all elements in an array.

// // Concepts: Sum, iteration.

// // Check if an array contains duplicate elements.

// // Concepts: Hashing, Array traversal.

// // Find the second largest element in an array.

// // Concepts: Sorting, comparing elements.

// // Find the intersection of two arrays.

// // Concepts: Hashing, set operations.

// // Move all zeros to the end of the array while maintaining the order of other elements.

// // Concepts: Two-pointer technique, shifting elements.

// // Find the largest sum of a subarray (Kadane’s Algorithm).

// // Concepts: Dynamic Programming (DP), Kadane's Algorithm.

// // Medium Questions:
// // Two Sum Problem: Given an array of integers and a target sum, find two numbers that add up to the target.

// // Concepts: Hashing, Two pointers.

// // Find the majority element (element that appears more than n/2 times).

// // Concepts: Boyer-Moore Voting Algorithm, Hashing.

// // Rotate an array by k positions.

// // Concepts: Array manipulation, reversing parts of the array.

// // Subarray with sum k.

// // Concepts: Sliding window, Hash map.

// // Move all negative numbers to the beginning of the array.

// // Concepts: Partitioning, Two-pointer technique.

// // Find the longest subarray with at most k distinct elements.

// // Concepts: Sliding window, Hash map.

// // Find the pair with the smallest difference in an array.

// // Concepts: Sorting, two-pointer technique.

// // Hard Questions:
// // Median of two sorted arrays.

// // Concepts: Binary Search, partitioning arrays.

// // Search in a rotated sorted array.

// // Concepts: Binary Search.

// // Find the "Kth" largest element in an unsorted array.

// // Concepts: Quickselect, Sorting.

// // Find the number of subarrays with a given sum.

// // Concepts: Hash map, sliding window.

// // Trapping Rain Water.

// // Concepts: Dynamic Programming, Two-pointer technique.

// // Maximum Product Subarray.

// // Concepts: Dynamic Programming, Array manipulation.

// // Phase 2: Linked Lists (Week 3-4)
// // Key Concepts:
// // Linked List Operations (Insertion, Deletion, Reversal)

// // Cycle Detection (Floyd’s Algorithm)

// // Fast and Slow pointers

// // Merge Sorted Linked Lists

// // Intersection of Two Linked Lists

// // Easy Questions:
// // Reverse a singly linked list.

// // Concepts: Iterative and Recursive reversal.

// // Find the middle of a linked list.

// // Concepts: Fast and Slow pointers.

// // Detect a cycle in a linked list.

// // Concepts: Floyd’s Cycle-finding Algorithm (Tortoise and Hare).

// // Merge two sorted linked lists.

// // Concepts: Iterative approach.

// // Remove the Nth node from the end of the linked list.

// // Concepts: Fast and Slow pointers.

// // Medium Questions:
// // Find the intersection point of two linked lists.

// // Concepts: Hashing, Two-pointer technique.

// // Detect a cycle in a linked list and return the node where the cycle begins.

// // Concepts: Floyd’s Cycle-finding Algorithm.

// // Flatten a linked list (a multilevel doubly linked list).

// // Concepts: Depth-first traversal, recursion.

// // Reverse a linked list in groups of size k.

// // Concepts: Iterative reversal, group swapping.

// // Remove duplicates from a sorted linked list.

// // Concepts: Linked List traversal, comparison.

// // Hard Questions:
// // Add two numbers represented by linked lists.

// // Concepts: Linked list manipulation, carry-over addition.

// // Rearrange a linked list in-place such that the odd nodes are followed by even nodes.

// // Concepts: Pointer manipulation.

// // Merge K sorted linked lists.

// // Concepts: Min-heap, priority queue.

// // Flatten a linked list of linked lists (Nested list).

// // Concepts: Recursion, merging sorted lists.

// // Reverse every alternate K nodes in a linked list.

// // Concepts: Group reversal, pointer manipulation.

// // Phase 3: Patterns (Week 5-6)
// // Key Patterns:
// // Sliding Window

// // Two Pointers

// // Backtracking

// // Greedy Algorithms

// // Recursion

// // Divide and Conquer

// // Dynamic Programming

// // Sliding Window Questions:
// // Find the maximum sum of a subarray of size k.

// // Concepts: Sliding window.

// // Longest substring without repeating characters.

// // Concepts: Sliding window, Hash map.

// // Longest subarray with sum k.

// // Concepts: Sliding window, Hash map.

// // Smallest subarray with sum greater than or equal to k.

// // Concepts: Sliding window.

// // Count of subarrays with sum k.

// // Concepts: Sliding window, Hash map.

// // Two Pointers Questions:
// // Find pairs in an array that sum up to a target value.

// // Concepts: Two pointers, Sorting.

// // Reverse a string using two pointers.

// // Concepts: String manipulation, Two-pointer technique.

// // Find the longest palindrome in a string.

// // Concepts: Expand around center.

// // Merge two sorted arrays.

// // Concepts: Two-pointer technique, merging.

// // Valid Palindrome.

// // Concepts: Two-pointer technique, string comparison.

// // Backtracking Questions:
// // Generate all subsets of a set.

// // Concepts: Backtracking.

// // Solve the N-Queens problem.

// // Concepts: Backtracking, Recursion.

// // Generate all possible permutations of a list.

// // Concepts: Backtracking.

// // Solve Sudoku.

// // Concepts: Backtracking, recursion.

// // Subset Sum Problem.

// // Concepts: Backtracking, recursion.

// // Greedy Algorithms Questions:
// // Coin Change problem (Min number of coins).

// // Concepts: Greedy algorithm.

// // Activity Selection Problem.

// // Concepts: Greedy algorithm.

// // Job Sequencing Problem.

// // Concepts: Greedy algorithm, sorting.

// // Huffman Coding (Optimal Merge Pattern).

// // Concepts: Greedy algorithm.

// // Fractional Knapsack Problem.

// // Concepts: Greedy algorithm.

// // Phase 3: Patterns (Week 5-6)
// // Key Patterns:
// // Sliding Window

// // Two Pointers

// // Backtracking

// // Greedy Algorithms

// // Recursion

// // Divide and Conquer

// // Dynamic Programming

// // Sliding Window Questions:
// // Find the maximum sum of a subarray of size k.

// // Concepts: Sliding window.

// // Longest substring without repeating characters.

// // Concepts: Sliding window, Hash map.

// // Longest subarray with sum k.

// // Concepts: Sliding window, Hash map.

// // Smallest subarray with sum greater than or equal to k.

// // Concepts: Sliding window.

// // Count of subarrays with sum k.

// // Concepts: Sliding window, Hash map.

// // Two Pointers Questions:
// // Find pairs in an array that sum up to a target value.

// // Concepts: Two pointers, Sorting.

// // Reverse a string using two pointers.

// // Concepts: String manipulation, Two-pointer technique.

// // Find the longest palindrome in a string.

// // Concepts: Expand around center.

// // Merge two sorted arrays.

// // Concepts: Two-pointer technique, merging.

// // Valid Palindrome.

// // Concepts: Two-pointer technique, string comparison.

// // Backtracking Questions:
// // Generate all subsets of a set.

// // Concepts: Backtracking.

// // Solve the N-Queens problem.

// // Concepts: Backtracking, Recursion.

// // Generate all possible permutations of a list.

// // Concepts: Backtracking.

// // Solve Sudoku.

// // Concepts: Backtracking, recursion.

// // Subset Sum Problem.

// // Concepts: Backtracking, recursion.

// // Greedy Algorithms Questions:
// // Coin Change problem (Min number of coins).

// // Concepts: Greedy algorithm.

// // Activity Selection Problem.

// // Concepts: Greedy algorithm.

// // Job Sequencing Problem.

// // Concepts: Greedy algorithm, sorting.

// // Huffman Coding (Optimal Merge Pattern).

// // Concepts: Greedy algorithm.

// // Fractional Knapsack Problem.

// // Concepts: Greedy algorithm.

// // Dynamic Programming Questions:
// // Fibonacci series using DP.

// // Concepts: Memoization, Tabulation.

// // 0/1 Knapsack Problem.

// // Concepts: DP, recursion.

// // Longest Common Subsequence (LCS).

// // Concepts: DP.

// // Coin Change Problem (Minimum number of coins).

// // Concepts: DP, unbounded knapsack.

// // Longest Increasing Subsequence.

// // Concepts: DP, Binary Search (Patience Sorting).

// Absolutely! I'll break down the **logical thinking** problems into a progressive sequence, starting from **easy** questions and gradually increasing the difficulty. This approach will help you build a solid foundation and maximize your understanding as you move to more challenging problems. I’ll focus on **logical problem-solving skills** and **concepts** that are critical for **coding interviews** and **competitive programming**.

// Here’s the roadmap to maximize your logical thinking, starting from **easy** to **hard**, categorized by **concepts**.

// ---

// ### **Phase 1: Foundational Logical Thinking (Weeks 1-2)**

// At the start, you’ll work on simpler problems that focus on basic problem-solving skills, pattern recognition, and efficient use of basic algorithms.

// ---

// #### **1. Arrays & Strings** (Easy to Medium)

// 1. **Find the Maximum and Minimum of an Array**

//    * Problem: Find the largest and smallest element in an array.
//    * **Concepts**: Array traversal, comparison.
//    * **Skills**: Array manipulation, conditional checks.

// 2. **Reverse an Array**

//    * Problem: Reverse the elements of a given array in place.
//    * **Concepts**: Array reversal, swapping elements.
//    * **Skills**: Array manipulation, pointer swapping.

// 3. **Find Duplicates in an Array**

//    * Problem: Find duplicate elements in an array.
//    * **Concepts**: Hashing, Set data structure.
//    * **Skills**: Hashing for fast lookup, traversal.

// 4. **Two Sum**

//    * Problem: Find two numbers in an array that sum up to a target value.
//    * **Concepts**: Hash map for quick lookup.
//    * **Skills**: Hashing, array traversal.

// 5. **String Reversal**

//    * Problem: Reverse a given string without using additional memory.
//    * **Concepts**: String manipulation, in-place operations.
//    * **Skills**: String traversal, two-pointer technique.

// 6. **Palindrome Check**

//    * Problem: Check if a string is a palindrome.
//    * **Concepts**: String manipulation, two-pointer technique.
//    * **Skills**: Iteration, character comparison.

// ---

// #### **2. Basic Recursion & Backtracking** (Easy to Medium)

// 1. **Factorial Calculation**

//    * Problem: Find the factorial of a number using recursion.
//    * **Concepts**: Base case, recursive calls.
//    * **Skills**: Recursion, understanding of recursive stack.

// 2. **Fibonacci Sequence (Memoized)**

//    * Problem: Find the `n`th Fibonacci number using recursion with memoization.
//    * **Concepts**: Memoization, recursion.
//    * **Skills**: Caching results, recursive calls.

// 3. **Subset Sum Problem (Subset of an Array)**

//    * Problem: Find if a subset of numbers in an array adds up to a given sum.
//    * **Concepts**: Recursion, subset generation.
//    * **Skills**: Recursion, understanding of subsets.

// 4. **N-Queens (Small N)**

//    * Problem: Place `n` queens on an `n x n` chessboard so that no two queens threaten each other.
//    * **Concepts**: Backtracking, constraints.
//    * **Skills**: Recursion, exploring possibilities, pruning invalid solutions.

// ---

// ### **Phase 2: Intermediate Logical Thinking (Weeks 3-4)**

// At this stage, we introduce **dynamic programming**, **sorting**, **greedy algorithms**, and more advanced backtracking to improve your **problem-solving skills** and **logical reasoning**.

// ---

// #### **1. Dynamic Programming (DP)** (Medium)

// 1. **Fibonacci Series (Tabulation)**

//    * Problem: Compute the `n`th Fibonacci number iteratively.
//    * **Concepts**: Dynamic Programming, tabulation.
//    * **Skills**: Bottom-up approach, state transitions.

// 2. **Knapsack Problem (0/1)**

//    * Problem: Given weights and values of items, find the maximum value that can be carried in a knapsack of fixed capacity.
//    * **Concepts**: Dynamic programming, knapsack DP.
//    * **Skills**: Table filling, decision-making.

// 3. **Longest Common Subsequence (LCS)**

//    * Problem: Find the longest subsequence that appears in both strings.
//    * **Concepts**: Dynamic programming, string matching.
//    * **Skills**: Table-based DP solution, recursion.

// 4. **Coin Change Problem (Minimum Coins)**

//    * Problem: Find the minimum number of coins required to make a given amount.
//    * **Concepts**: DP, coin change variation.
//    * **Skills**: Bottom-up approach, state space optimization.

// 5. **Longest Increasing Subsequence**

//    * Problem: Given an array, find the longest strictly increasing subsequence.
//    * **Concepts**: DP, binary search.
//    * **Skills**: DP-based solution with optimization.

// ---

// #### **2. Greedy Algorithms** (Medium to Hard)

// 1. **Activity Selection Problem**

//    * Problem: Given a set of activities with start and finish times, select the maximum number of non-overlapping activities.
//    * **Concepts**: Greedy approach, sorting.
//    * **Skills**: Greedy choice, sorting based on finish times.

// 2. **Fractional Knapsack**

//    * Problem: Given weights and values of items, maximize the value by picking items in fractions.
//    * **Concepts**: Greedy algorithm.
//    * **Skills**: Sorting by value-to-weight ratio, greedy choice.

// 3. **Huffman Coding**

//    * Problem: Construct the optimal prefix code for a set of characters based on their frequencies.
//    * **Concepts**: Greedy approach, priority queues (min-heap).
//    * **Skills**: Priority queue usage, greedy optimization.

// ---

// #### **3. Graph Theory Basics** (Medium)

// 1. **Breadth-First Search (BFS)**

//    * Problem: Implement BFS to traverse a graph or find the shortest path in an unweighted graph.
//    * **Concepts**: Graph traversal, BFS.
//    * **Skills**: Queue-based BFS, distance calculation.

// 2. **Depth-First Search (DFS)**

//    * Problem: Implement DFS to explore a graph or tree.
//    * **Concepts**: Graph traversal, DFS.
//    * **Skills**: Recursive DFS, stack-based DFS.

// 3. **Topological Sort (DFS-based)**

//    * Problem: Perform topological sorting of a directed acyclic graph (DAG).
//    * **Concepts**: DFS, topological sorting.
//    * **Skills**: DFS with backtracking, postorder traversal.

// ---

// ### **Phase 3: Advanced Logical Thinking (Weeks 5-6)**

// At this stage, you’ll be solving **advanced problems** involving **graphs**, **backtracking**, **advanced dynamic programming**, and **optimization problems**. This phase is aimed at improving your logical reasoning and ability to tackle complex problems.

// ---

// #### **1. Advanced Dynamic Programming** (Hard)

// 1. **Word Break Problem**

//    * Problem: Given a string and a dictionary, find if the string can be segmented into a space-separated sequence of dictionary words.
//    * **Concepts**: DP, string matching.
//    * **Skills**: DP with substring checks, space optimization.

// 2. **Palindrome Partitioning**

//    * Problem: Partition a string such that every substring is a palindrome, and return the minimum cuts required.
//    * **Concepts**: DP, palindromes.
//    * **Skills**: DP-based palindrome checking, state transitions.

// 3. **Matrix Chain Multiplication**

//    * Problem: Given a sequence of matrices, find the most efficient way to multiply them.
//    * **Concepts**: DP, matrix multiplication.
//    * **Skills**: DP-based optimization, matrix traversal.

// ---

// #### **2. Backtracking (Advanced)** (Hard)

// 1. **N-Queens Problem (Larger N)**

//    * Problem: Place `n` queens on an `n x n` chessboard in such a way that no two queens threaten each other.
//    * **Concepts**: Backtracking, pruning.
//    * **Skills**: Exploring multiple possibilities, optimizing with pruning.

// 2. **Sudoku Solver**

//    * Problem: Given a partially filled Sudoku board, fill in the missing values.
//    * **Concepts**: Backtracking, constraint propagation.
//    * **Skills**: Recursive backtracking, constraint handling.

// 3. **Combination Sum**

//    * Problem: Find all unique combinations of numbers that sum to a target value.
//    * **Concepts**: Backtracking, pruning.
//    * **Skills**: Recursion, combination generation.

// ---

// #### **3. Graph Theory (Advanced)** (Hard)

// 1. **Dijkstra’s Algorithm**

//    * Problem: Find the shortest path from a source node to all other nodes in a weighted graph.
//    * **Concepts**: Graph theory, shortest path.
//    * **Skills**: Priority queue, greedy approach.

// 2. **Minimum Spanning Tree (Kruskal’s/Prim’s Algorithm)**

//    * Problem: Find the minimum spanning tree of a connected, weighted graph.
//    * **Concepts**: Greedy algorithm, Union-Find (Kruskal), priority queues (Prim).
//    * **Skills**: Disjoint-set operations, greedy optimization.

// 3. **Floyd-Warshall Algorithm**

//    * Problem: Find the shortest paths between all pairs of vertices in a graph.
//    * **Concepts**: Dynamic programming, all-pairs shortest path.
//    * **Skills**: Matrix-based DP, optimization.

// ---

// ### **Phase 4: Master Logical Thinking & Optimization (Weeks 7-8)**

// This phase focuses on highly complex problems, optimization

// techniques, and building solutions that require deep insight and advanced algorithmic thinking.

// 1. **Trapping Rain Water**

//    * Problem: Given an elevation map, compute how much water it can trap after raining.
//    * **Concepts**: Two-pointer technique, dynamic programming.
//    * **Skills**: Optimized DP, space-efficient solutions.

// 2. **Median of Two Sorted Arrays**

//    * Problem: Find the median of two sorted arrays in O(log(min(n, m))) time.
//    * **Concepts**: Binary search, divide and conquer.
//    * **Skills**: Binary search, partitioning.

// 3. **Maximal Rectangle in Binary Matrix**

//    * Problem: Find the largest rectangle containing all 1’s in a binary matrix.
//    * **Concepts**: Dynamic programming, histogram-based approach.
//    * **Skills**: DP optimization, stack-based approach.

// ---

// By following this **progressive roadmap**, you’ll enhance your **logical thinking**, **problem-solving abilities**, and **algorithmic skills**. Each phase will help you build up to the next level while reinforcing your foundational understanding.

// Would you like more details or explanations for specific questions or approaches in the roadmap?

// const a = [{ adf: [{ adf: [4, 34, 34], daf: 5 }] }];

// const sum = (a) => {
//   let sum1 = 0;

//   a[0].adf.forEach((e) => {
//     e.adf.forEach((a) => {
//       sum1 += a;
//     });
//     sum1 += e.daf;
//   });

//   return sum1;
// };

// console.log(sum(a));

// const abc = [
//   { f: 34, l: 4 },
//   { f: 34, l: 4 },
//   { f: 34, l: 4 },
//   { f: 34, l: 4 },
//   { f: 34, l: 4 },
//   { f: 34, l: 4 },
// ];

// const abcSum = (abc) => {
//   let sum1 = 0;
//   abc.forEach((ele) => {
//     sum1 += ele.f + ele.l;
//   });

//   return sum1;
// };

// console.log(abcSum(abc));

// let ab = { b: { c: { d: [2, 3, 4, 5] } } };

// const sum3 = (ab) => {
//   let sum12 = 0;
//   ab.b.c.d.forEach((n) => {
//     sum12 += n;
//   });

//   return sum12;
// };

// console.log(sum3(ab));

// let bc = [{ s: 4 }, { d: 4 }, { f: 4 }];

// const sum4 = (bc) => {
//   let sum = 0;
//   let ar = [];
//   bc.forEach((obj) => {
//     if (obj.s) {
//       ar.push(obj.s);
//     } else if (obj.d) {
//       ar.push(obj.d);
//     } else {
//       ar.push(obj.f);
//     }
//   });

//   ar.forEach(n => {

//     sum+=n
//   })
//   return sum
// };

// console.log(sum4(bc));
// Find the longest repeating char in string “hdhfkuuuu” output should be uuuu

// const longest = (str) => {
//   const strAr = str.split("");

//   let count = {};
//   strAr.forEach((s) => {
//     if (count[s]) {
//       count[s]++;
//     } else {
//       count[s] = 1;
//     }
//   });

//   let maxCount = 0;
//   let h = [];
//   for (let char in count) {
//     if (count[char] > maxCount) {
//       maxCount = count[char];
//     }
//   }

//   for (let char in count) {
//     if (count[char] === maxCount) {
//       for (let i = 0; i < maxCount; i++) {
//         h.push(char);
//       }
//     }
//   }
//   return h.join("")
// };

// console.log(longest("hdhfkuuuu"));

// autocomplete(prefix) {
//     const results = [];  // Array to hold autocomplete results
//     let curr = this.root;

//     // Traverse the Trie to find the end of the prefix
//     for (const char of prefix) {
//         if (!(char in curr.children)) {
//             return results;  // No words found with this prefix
//         }
//         curr = curr.children[char];  // Move to the child node
//     }

//     // Use a stack to iteratively find all words starting from the current node
//     const stack = [{ node: curr, path: prefix }];

//     while (stack.length > 0) {
//         const { node, path } = stack.pop();  // Get the top element from the stack

//         // If this node marks the end of a word, add it to results
//         if (node.isEndOfWord) {
//             results.push(path);  // Add the complete word to results
//         }

//         // Recur for each child node by adding them to the stack
//         for (const char in node.children) {
//             stack.push({ node: node.children[char], path: path + char });  // Build the word
//         }
//     }

//     return results;  // Return all found words
// }

// Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// const linearSearch = (arr,t) =>{

//     for(let i = 0; i < arr.length; i++){

//         if(arr[i]===t){

//             return i
//         }
//     }
//  return -1
// }

// console.log(linearSearch([1,2,3,4,5],1));

// Write a function to implement linear search to find if a number exists in an unsorted array.

// const Q1 = (arr, t) => {

//     for (const n of arr) {

//         if (n === t) {

//             return true
//         }
//     }

//     return false
// }

// console.log(Q1([34, 7, 23, 32, 5, 62, 1], 23))

// Search for a string in an array of strings using linear search.

// const Q2 = (arr, t) => {

//     for (const s of arr) {

//         if (s === t) {

//             return true
//         }
//     }
//     return false
// }

// console.log(Q2(["apple", "banana", "cherry", "date", "fig", "grape"], "date"))

// Modify linear search to return the index of the last occurrence of a target number in an unsorted array.

// const Q3 = (arr, t) => {

//     let lastIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === t) {
//             lastIndex = i;
//         }
//     }

//     return lastIndex;
// }

// console.log(Q3([4, 7, 8, 4, 2, 4, 9], 4))

// Count the number of occurrences of a given element in an unsorted array using linear search.

// const Q4 = (arr, t) => {
//     let count = 0

//     for (const n of arr) {

//         if (n === t) {

//             count++
//         }
//     }
//     return count
// }

// console.log(Q4([5, 3, 9, 3, 5, 7, 3], 3))

// Write a linear search to find the minimum or maximum value in an array.

// const Q5 = (arr) => {

//     let minElement = Infinity
//     let maxElement = -Infinity

//     for (const n of arr) {

//         if (n < minElement) {

//             minElement = n

//         }

//         if (n > maxElement) {

//             maxElement = n
//         }
//     }

//     return { maxElement, minElement }

// }

// console.log(Q5([22, 11, 34, 56, 7, 19, 3]))
