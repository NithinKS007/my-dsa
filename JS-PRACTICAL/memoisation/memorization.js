const square = (n) => {
  const memo = {};
  if (memo[n] != undefined) {
    return memo[n];
  } else {
    const result = n * n;
    memo[n] = result;
    return result;
  }
};

console.log(square(10));
