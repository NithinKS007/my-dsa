class StackQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(item) {
        this.stack1.push(item);
    }
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

const queue = new StackQueue(); 

queue.enqueue(1);
console.log("Added element: 1");
queue.enqueue(2);
console.log("Added element: 2");

console.log("Removed element:", queue.dequeue()); 
queue.enqueue(3);
console.log("Added element: 3");

console.log("Removed element:", queue.dequeue()); 
console.log("Removed element:", queue.dequeue()); 
