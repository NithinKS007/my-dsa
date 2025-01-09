class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    this.list.print();
  }
  enqueue(value) {
    return this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
}

const queue = new LinkedListQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
