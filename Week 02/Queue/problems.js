const q = require("./queueWithArray")
const stack = require("../Stack/stackWithArray")

// Given a queue, reverse its elements using a stack.
function reverseQueueUsingStack() {
  while (q.items.length > 0) {
    stack.items.push(q.dequeue());
  }

  while (stack.items.length > 0) {
    q.enqueue(stack.items.pop());
  }

  console.log(JSON.stringify(q.items));
}
