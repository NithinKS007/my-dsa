class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let result = [];
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      while (current !== null) {
        result.push(current.value);
        current = current.next;
      }
    }
    return result;
  }

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return "Nothing to remove, the list is empty";
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteLast() {
    if (this.isEmpty()) {
      return "Nothing to remove, the list is empty";
    }
    if (this.size === 1) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next && current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
  }

  findMiddle() {
    if (this.isEmpty()) {
      console.log("List is empty");
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

  removeEvenNumbers() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    while (this.head && this.head.value % 2 === 0) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value % 2 === 0) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
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
    console.log("Number of Nodes:", count);
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
      frequency[current.value] = (frequency[current.value] || 0) + 1;
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

  getNodeAtIndex(index) {
    if (index < 1 || index > this.size) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let i = 1;
    while (current) {
      if (index === i) {
        console.log("data =>", current.value);
        return;
      }
      i++;
      current = current.next;
    }
  }

  insertAfter(value, afterValue) {
    let current = this.head;
    while (current !== null) {
      if (current.value === afterValue) {
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }
      current = current.next;
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
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  mergeTwoSortedLinkedLists(list1, list2) {
    let p1 = list1.head;
    let p2 = list2.head;
    let mergedList = new LinkedList();

    while (p1 !== null || p2 !== null) {
      if (p1 === null) {
        mergedList.append(p2.value);
        p2 = p2.next;
      } else if (p2 === null) {
        mergedList.append(p1.value);
        p1 = p1.next;
      } else {
        if (p1.value < p2.value) {
          mergedList.append(p1.value);
          p1 = p1.next;
        } else {
          mergedList.append(p2.value);
          p2 = p2.next;
        }
      }
    }

    return mergedList;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    this.head = this.head.next;
    this.size--;
    console.log("Removed from front.");
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.size === 1) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next && current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
    this.size--;
    console.log("Removed from end.");
  }

  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index.");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    const newNode = new Node(value);
    prev.next = newNode;
    newNode.next = current;
    this.size++;
    console.log(`Inserted ${value} at index ${index}`);
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index.");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      console.log("Removed from index 0");
      return;
    }

    let current = this.head;
    let count = 0;

    while (count < index - 1) {
      current = current.next;
      count++;
    }

    current.next = current.next.next;
    this.size--;
    console.log(`Removed from index ${index}`);
  }

  detectCycle() {
    if (this.isEmpty()) {
      console.log("List is empty, no cycle.");
      return false;
    }

    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer !== null && fastPointer.next !== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
        console.log("Cycle detected!");
        return true;
      }
    }
    console.log("No cycle detected.");
    return false;
  }

  findNthNode(n) {
    if (n <= 0 || n > this.size) {
      console.log("Out of bounds");
      return;
    }
    let current = this.head;
    let count = 1;
    while (current !== null) {
      if (count === n) {
        return current.value;
      }
      current = current.next;
      count++;
    }
    return -1;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(9);
list.append(890);
list.append(80);

console.log(list.print());
console.log(list.findNthNode(3));
console.log(list.removeNthFromEndSimpleMethod(5));
