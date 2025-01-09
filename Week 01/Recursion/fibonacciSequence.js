const fibSequence = (n) => {
  const fibSequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibSequence[i] = 0;
    } else if (i === 1) {
      fibSequence[i] = 1;
    } else {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
  }

  return fibSequence;
};

console.log(fibSequence(7));

const recursiveFebonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFebonacci(n - 1) + recursiveFebonacci(n - 2);
};

console.log(recursiveFebonacci(6));
