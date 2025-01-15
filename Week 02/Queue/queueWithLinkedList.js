class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return this.head === null;
  }
  enqueue(value) {
    const newnode = new Node(value);

    if (this.isEmpty()) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const removedData = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedData;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.head.value;
  }
}
