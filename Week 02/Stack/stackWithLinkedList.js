class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  push(value) {
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

  pop() {
    if (this.isEmpty()) {
      console.log("The list is empty, nothing to remove");
      return null;
    }

    let poppedValue;
    if (this.size === 1) {
      poppedValue = this.head.value;
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current !== null && current.next !== this.tail) {
        current = current.next;
      }
      poppedValue = this.tail.value;
      current.next = null;
      this.tail = current;
    }

    this.size--;
    return poppedValue;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }
    return this.head.value;
  }

  print() {
    let current = this.head;
    let result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

const stack = new LinkedListStack();

stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.print());

stack.pop();

console.log(stack.print());
