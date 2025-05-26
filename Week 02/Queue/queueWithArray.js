class Queue {
  constructor() {
    this.queue = [];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  peek() {
    return this.isEmpty() ? null : this.queue[0];
  }
  getSize() {
    return this.queue.length;
  }
  print() {
    console.log(this.queue);
  }
  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }
}

const queue = new Queue();

console.log("The queue is empty : ", queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
queue.dequeue(4);
queue.print();

module.exports = { queue };
