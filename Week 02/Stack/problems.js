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
console.log(isValid("(]"));      
console.log(isValid("([)]"));    
console.log(isValid("{[]}"));   

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



let originalStack = [34, 3, 31, 98, 92, 23];
console.log("Original Stack: ", originalStack);
let sortedStack = sortStack(originalStack);
console.log("Sorted Stack: ", sortedStack);

let stack = [1, 2, 3, 4, 5];
console.log("Original stack:", stack);
removeMiddle(stack);
console.log("Stack after removing middle element:", stack);
