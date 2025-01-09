class LinkedListStack {
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
    return this.list.print();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
}

const stack = new LinkedListStack();

stack.push(20);
stack.push(10);
stack.push(30);
stack.print();

