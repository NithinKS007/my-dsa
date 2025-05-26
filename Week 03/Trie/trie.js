class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!(char in curr.children)) {
        return false;
      }
      curr = curr.children[char];
    }
    return curr.isEndOfWord;
  }

  startsWithPrefix(prefix) {
    let curr = this.root;
    for (const char of prefix) {
      if (!(char in curr.children)) {
        return false;
      }
      curr = curr.children[char];
    }
    return true;
  }

  autoComplete(prefix) {
    let curr = this.root;
    let result = [];
    for (let char of prefix) {
      if (!(char in curr.children)) {
        return result;
      }
      curr = curr.children[char];
    }

    this.getWords(curr, prefix, result);
    return result;
  }

  getWords(curr, word, result) {
    if (curr.isEndOfWord) {
      result.push(word);
    }

    for (let char in curr.children) {
      this.getWords(curr.children[char], word + char, result);
    }
  }
  // Longest Common Prefix
  // Given an array of strings, find the longest common prefix among them
  longestCommonPrefix(strs) {
    //insert all the words in to the trie
    for (let word of strs) {
      this.insert(word);
    }

    let prefix = "";
    let current = this.root;

    while (Object.keys(current.children).length === 1 && !current.isEndOfWord) {
      let char = Object.keys(current.children)[0]; // Get the only child
      prefix += char;
      current = current.children[char];
    }

    return prefix;
  }
  // When working with a tree, if a node has multiple children, it indicates that there are different possible paths to
  // follow, which creates a divergence in the path. This means that the prefix you're following is no longer common across
  // all branches, and the paths start to differ. However, if a node has exactly one child, it means you’re still following
  // the same path because  there’s no branching or divergence yet. In this case, you can continue down that path,
  // as the prefix remains shared across all the nodes. Therefore,
  // important to only continue when there’s exactly one child, ensuring you stay on the common path without branching off.
  // Input: ["flower", "flow", "flight"] → Output: "fl"

  // Given a string, count the number of distinct substrings using a Trie
  // Input: "abab" → Output: 7 (distinct substrings: "a", "b", "ab", "ba", "aba", "bab", "abab")

delete(word) {
        let current = this.root;
        let path = [];
        for (let char of word) {
            if (!(char in current.children)) {
                return 
            }
            path.push({ node: current, char });
            current = current.children[char];
        }

        // Step 2: Check if word exists
        if (!current.isEndOfWord) {
            return; // Word not fully present
        }

        // Unmark the end of the word
        current.isEndOfWord = false;

        // Step 3: Clean up unnecessary nodes (backtrack)
        for (let i = path.length - 1; i >= 0; i--) {
            let { node, char } = path[i];
            let child = node.children[char];

            // Check if child has no children
            let hasNoChildren = Object.keys(child.children).length === 0;

            // If child has no children and is not end of another word, remove it
            if (hasNoChildren && !child.isEndOfWord) {
                delete node.children[char];
            } else {
                break; // Stop cleanup if node is part of another word
            }
        }
    }
}

const longestCommonPrefix = function (strs) {
  let longest = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let tempPrefix = "";
    let j = 0;
    while (j < longest.length && longest[j] === strs[i][j]) {
      tempPrefix += longest[j];
      j++;
    }
    longest = tempPrefix;
  }

  return longest;
};
const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("bat");
trie.insert("ball");

console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.search("bat"));
console.log(trie.search("ball"));
console.log(trie.search("bats"));

console.log(trie.startsWithPrefix("app"));
console.log(trie.startsWithPrefix("ba"));
console.log(trie.startsWithPrefix("xyz"));

console.log(trie.autoComplete("ba"));

// {
//   children: {
//     'c': {
//       children: {
//         'a': {
//           children: {
//             't': {
//               children: {},
//               isEndOfWord: true
//             },
//             'r': {
//               children: {},
//               isEndOfWord: true
//             }
//           },
//           isEndOfWord: false
//         }
//       },
//       isEndOfWord: false
//     },
//     'd': {
//       children: {
//         'o': {
//           children: {
//             'g': {
//               children: {},
//               isEndOfWord: true
//             }
//           },
//           isEndOfWord: false
//         }
//       },
//       isEndOfWord: false
//     }
//   },
//   isEndOfWord: false
// }

//                         root
//                          |
//           ----------------|-----------------
//          |                                  |
//          c                                  d
//          |                                  |
//       ----                              ------
//      |    |                            |       |
//      a    a                           o       (empty)
//      |     |                           |
//    ----   ----                       g(end)
//   |    | |    |
//  t(end) r(end)(empty)
