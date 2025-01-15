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
  }

  isEmpty() {
    return this.head === null;
  }
  push(value) {
    const newnode = new Node(value);

    if (this.isEmpty()) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.next = this.head;
      this.head = newnode;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }
    const poppednode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }
    return poppednode.value;
  }
  peek() {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return
    }
    return this.head.value;
  }

  print(){
    let current = this.head
    let result = []

    while(current!==null){

       result.push(current.value)
       current = current.next
    }
    return result
  }
}

const stack = new LinkedListStack();

stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.print());

stack.pop()
 
console.log(stack.print());