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
}
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
