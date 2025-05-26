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
  removeMiddle() {
    let count = 0;
    const tempStack = [];
    const middle = this.getMiddle();
    while (count <= middle) {
      if (count == middle) {
        this.items.pop();
      } else {
        tempStack.push(this.items.pop());
      }
      count++;
    }

    while (tempStack.length > 0) {
      this.items.push(tempStack.pop());
    }
  }
  getMiddle() {
    const size = this.getSize();
    const middle = Math.floor(size / 2);
    console.log("middle =>", middle);
    return middle;
  }

  reverseString(str) {
    for (let i = 0; i < str.length; i++) {
      this.stack.push(str[i]);
    }
    let reversedStr = "";
    while (this.stack.length > 0) {
      reversedStr += this.stack.pop();
    }
    return reversedStr;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();

module.exports = { stack };
