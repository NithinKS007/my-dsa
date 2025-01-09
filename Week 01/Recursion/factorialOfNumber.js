const fac = (n) => {
    let f = 1;
    for (let i = 2; i <= n; i++) {
      f *= i;
    }
  
    return f;
  };
  
  console.log(fac(5));
  
  const facRecursion = (n) => {
    if (n === 0) {
      return 1;
    }
  
    return n * facRecursion(n - 1)
  };
  console.log(facRecursion(5));
  