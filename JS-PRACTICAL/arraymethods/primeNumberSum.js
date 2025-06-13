function isPrime(num) {
    if (num <= 1) return false; 
    if (num % 2 === 0) return false; 
    if (num === 2) return true; 
   
    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) { 
        if (num % i === 0) return false;
    }
    return true;
}


const getPrimeSum = (array) => {
    return array.reduce((acc, curr) => {
        if (isPrime(curr)) {
            return acc + curr;
        } else {
            return acc;
        }
    }, 0); 
};
