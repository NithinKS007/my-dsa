class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is full");
    } else {
      this.queue[this.rear] = value;
      this.rear = (this.rear + 1) % this.size;
      return true;
    }
  }

  dequeue() {
    if (this.front === this.rear) {
      console.log("Queue is empty");
      return null;
    } else {
      const dequeuedValue = this.queue[this.front];
      this.front = (this.front + 1) % this.size;
      return dequeuedValue;
    }
  }
}
