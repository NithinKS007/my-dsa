class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const newnode = new Node(value);
    if (this.isEmpty()) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
    this.size++;
  }
  append(value) {
    const newnode = new Node(value);
    if (this.isEmpty()) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let current = this.head;
      while (current !== null) {
        console.log("values in the linked list are :", current.value);
        current = current.next;
      }
    }
  }

  findMiddle() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    if (this.size <= 2) {
      console.log("There is no middle to delete");
      return;
    }
    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }

    console.log("Middle element:", slowPointer.value);
  }
  findMiddleDelete() {
    if (this.size <= 2) {
      console.log("There is no middle to delete");
      return;
    }
    let slowPointer = this.head;
    let fastPointer = this.head;
    let prev = null;

    while (fastPointer !== null && fastPointer.next !== null) {
      prev = slowPointer;
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    prev.next = slowPointer.next;
    this.size--;
  }
  countNodes() {
    if (this.isEmpty()) {
      console.log("List is empty", 0);
      return;
    }
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }

    console.log("No of Nodes", count);
  }
  removeDuplicates() {
    let current = this.head;
    while (current !== null) {
      let runner = current;
      while (runner.next !== null) {
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  frequency() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    let frequency = {};
    while (current !== null) {
      if (frequency[current.value]) {
        frequency[current.value]++;
      } else {
        frequency[current.value] = 1;
      }
      current = current.next;
    }

    return frequency;
  }
  largest() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    let largest = -Infinity;
    while (current !== null) {
      if (current.value > largest) {
        largest = current.value;
      }
      current = current.next;
    }

    return largest;
  }
  secondLargest() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let current = this.head;

    while (current !== null) {
      if (current.value > largest) {
        secondLargest = largest;
        largest = current.value;
      } else if (current.value > secondLargest && current.value !== largest) {
        secondLargest = current.value;
      }

      current = current.next;
    }

    return { largest, secondLargest };
  }
  insertAfter(value, afterValue) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === afterValue) {
        const newNode = new Node(value);
        newNode.next = curr.next;
        curr.next = newNode;
        if (curr.next === null) {
          this.tail = newNode;
        }

        this.size++;
        return;
      }
      curr = curr.next;
    }
  }
  insertBefore(value, beforeValue) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    if (this.head.value === beforeValue) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      if (curr.value === beforeValue) {
        const newNode = new Node(value);
        prev.next = newNode;
        newNode.next = curr;
        this.size++;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }
  deleteValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    // Special case: head contains the value
    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null; // If the list becomes empty, set tail to null
      }
      this.size--;
      console.log("Value deleted:", value);
      return;
    }
    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current; // If we deleted the last node, update tail
        }
        this.size--;
        console.log("Value deleted:", value);
        return;
      }
      current = current.next;
    }

    console.log("Value not found in the list.");
  }
  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let prev = null;
    let next = null;
    let current = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
}

const list = new LinkedList();
