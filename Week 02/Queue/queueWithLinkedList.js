class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueWithLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    const removedData = this.head.value;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.size--;
    return removedData;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty, nothing to peek");
      return null;
    }
    return this.head.value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `${current.value} `;
      current = current.next;
    }
    return result;
  }
}
const queue = new QueueWithLinkedList();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);


console.log(queue.print()) 
console.log("Dequeued value:", queue.dequeue());
console.log("Dequeued value:", queue.dequeue());

console.log(queue.print()) 

console.log("Front of the queue:", queue.peek());

queue.enqueue(50);
console.log(queue.print()) 
