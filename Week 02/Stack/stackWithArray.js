class Stack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getSize() {
    return this.stack.length;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return;
    }
    return this.stack[this.stack.length - 1];
  }
  print() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
    } else {
      console.log("Stack contents: ", this.stack);
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();
