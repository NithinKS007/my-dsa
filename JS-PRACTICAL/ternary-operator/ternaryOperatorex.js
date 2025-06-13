const x = 20;

const trueState = x > 10 ? "x is greater than 10" : "x is less than 10";
console.log(trueState);

const ages = [20, 15, 25, 30];
const beverages = ages.map((age) => (age >= 21 ? "Beer" : "Juice"));
console.log(beverages);
