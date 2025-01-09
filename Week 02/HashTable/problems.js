//Find Duplicate Characters in a String
const findDuplicateCharactersInString = (string) => {
  const map = new Map();
  const duplicates = [];

  for (let char of string) {
    let count = map.get(char);
    if (count === undefined) {
      map.set(char, 1);
    } else {
      map.set(char, count + 1);
    }
  }

  for (let [key, value] of map) {
    if (value > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
};

console.log(
  "Duplicates in the given string",
  findDuplicateCharactersInString("NithinKS".toLocaleLowerCase())
);

//check a string contains duplicates
const checkForDuplicates = (string) => {
  const map = new Map();

  for (let s of string) {
    if (map.has(s)) {
      map.set(s, true);
    } else {
      map.set(s, false);
    }
  }

  return map;
};

console.log(
  "does it contain duplicates",
  checkForDuplicates("Nithinks".toLocaleLowerCase())
);

//two sum

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.get(complement) !== undefined) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }

  return null;
}

console.log("Two sum", twoSum([2, 7, 11, 15], 9));

//  You’re given a list of string, and you need to group anagrams together. 

const groupAnagrams = (strs) => {
  const map = new Map();

  for (let str of strs) {
    const sorted = str.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values());
};

// Give an array of integers, find the k most frequent elements. 

topKFrequent = function (nums, k) {
  const map = new Map();

  for (let n of nums) {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      map.set(n, map.get(n) + 1);
    }
  }

  let array = Array.from(map.entries());

  let sorted = array.sort((a, b) => b[1] - a[1]);
  let result = [];
  let i = 0;
  while (i < k) {
    result.push(sorted[i][0]);
    i++;
  }

  return result;
};

 // Find the Intersection of Two Arrays
 function intersection(nums1, nums2) {
  const map = new Map();
  const result = [];
  for (const num of nums1) {
      map.set(num, true);
  }
  for (const num of nums2) {
      if (map.has(num)) {
          result.push(num);
          map.delete(num); 
      }
  }
  return result;
}
console.log(intersection([1,2,33,2,5],[112,2,33,2,55]));