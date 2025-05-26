const isValid = (s) => {
    const stack = [];
    const matchingBrackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let char of s) {
        if (char in matchingBrackets) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false; 
            }
            const topElement = stack.pop(); 
            if (matchingBrackets[topElement] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()"));     
console.log(isValid("()[]{}"));  

const removeMiddle = (stack) => {
    const n = stack.length;
    if (n === 0) return "Stack is empty";
    
    const middleIndex = Math.floor(n / 2);
    let tempStack = [];

    for (let i = 0; i < middleIndex; i++) {
        tempStack.push(stack.pop());
    }

    stack.pop();

    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
};

const sortStack = (originalStack) => {
    let tempStack = [];

    while (originalStack.length) {
        let currentElement = originalStack.pop();
        while (tempStack.length && tempStack[tempStack.length - 1] > currentElement) {
            originalStack.push(tempStack.pop());
        }
        tempStack.push(currentElement);
    }

    return tempStack;
};

const reverseStackUsingAuxilliaryStack = () => {
  const auxStack = [];
  while (this.stack.length) {
    auxStack.push(this.pop());
  }
  this.stack = auxStack;
}
reverseStackUsingRecursion(stack) {
  if (stack.length > 0) {
    const temp = stack.pop();
    this.reverseStackUsingRecursion(stack);
    this.insertElementInReverseOrder(stack, temp);
  }
}
const insertElementInReverseOrder = (stack, elementToInsert) => {
  if (stack.length == 0) {
    stack.push(elementToInsert);  // If the stack is empty, just push the element
    return;
  }
  const temp = stack.pop();  // Pop the top element
  this.insertElementInReverseOrder(stack, elementToInsert);  // Recursively insert
  stack.push(temp);  // Push the popped element back to the stack
}
sortStackUsingAuxStack(stack = this.stack) {
  const auxStack = [];
  while (stack.length > 0) {
    const temp = stack.pop();
    while (auxStack.length > 0 && auxStack[auxStack.length - 1] > temp) {
      stack.push(auxStack.pop());  // Move elements from auxStack back to stack
    }
    auxStack.push(temp);  // Push the current element to auxStack
  }
  this.stack = auxStack;  // At the end, auxStack will have sorted elements
}
sortStackUsingRecursion(stack = this.stack) {
  if (stack.length > 0) {
    const temp = stack.pop();
    this.sortStackUsingRecursion(stack);
    this.insertElementInOrder(stack, temp);
  }
}
insertElementInOrder(stack, elementToInsert) {
  if (stack.length == 0 || stack[stack.length - 1] > elementToInsert) {
    stack.push(elementToInsert);  // Insert the element in order if stack is empty or top of stack is greater
    return;
  }
  const temp = stack.pop();  // Pop the top element
  this.insertElementInOrder(stack, elementToInsert);  // Recursively insert the element
  stack.push(temp);  // Push the popped element back to the stack
}

function reverseStringUsingStack(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedString = "";
  const size = stack.size();
  for (let i = 0; i < size; i++) {
    reversedString += stack.pop();
  }
  return reversedString;
}

console.log(reverseStringUsingStack("hello"));
let originalStack = [34, 3, 31, 98, 92, 23];
console.log("Original Stack: ", originalStack);
let sortedStack = sortStack(originalStack);
console.log("Sorted Stack: ", sortedStack);

let stack = [1, 2, 3, 4, 5];
console.log("Original stack:", stack);
removeMiddle(stack);
console.log("Stack after removing middle element:", stack);
