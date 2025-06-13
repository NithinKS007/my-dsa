const isPalindrome = (word) => {
  const reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
};

const word = "malayalam";
console.log(isPalindrome(word));

const isPalindromeWord = (word) => {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

const word1 = "madam";
const word2 = "racecar";

console.log(isPalindromeWord(word1));
console.log(isPalindromeWord(word2));
