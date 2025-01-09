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

  autoComplete(word) {
    let curr = this.root;
    let result = [];
    for (let char of word) {
      if (!curr.children[char]) {
        return result;
      }
      curr = curr.children[char];
    }
    function getwords(curr, word) {
      if (curr.isEndOfWord) {
        result.push(word);
      }
      for (let char in curr.children) {
        getwords(curr.children[char], word + char);
      }
    }

    getwords(curr);
    return result;
  }
}
