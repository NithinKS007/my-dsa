class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(capacity) {
    this.buckets = new Array(capacity);
    this.capacity = capacity;
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const newNode = new Node(key, value);
    if (!this.buckets[index]) {
      this.buckets[index] = newNode;
    } else {
      let current = this.buckets[index];
      while (current !== null) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (current.next === null) {
          current.next = newNode;
          return;
        }
        current = current.next;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i];
      if (current) {
        let pairs = [];
        while (current !== null) {
          pairs.push(`${current.key} => ${current.value}`);
          current = current.next;
        }
        console.log(`Bucket ${i}: ${pairs.join(", ")}`);
      } else {
        console.log(`list => empty ${i}`);
      }
    }
  }
}

const table = new HashTable(10);
table.set("name", "John");
table.set("age", "30");
table.set("country", "USA");
table.set("name", "Jane"); // Update value for 'name'
table.set("city", "New York");

console.log(table.get("name")); // "Jane"
console.log(table.get("age")); // "30"
console.log(table.get("country")); // "USA"
console.log(table.get("city")); // "New York"

table.display();
