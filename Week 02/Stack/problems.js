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
