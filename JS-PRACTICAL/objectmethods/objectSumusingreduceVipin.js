const sum = (ar) => {
  return ar.reduce((acc, curr) => {
    Object.values(curr).forEach((value) => {
      acc += value;
    });
    return acc;
  }, 0);
};

const ar = [
  { a: 12, b: 10 },
  { a: 13, b: 14 },
];
console.log(sum(ar));
