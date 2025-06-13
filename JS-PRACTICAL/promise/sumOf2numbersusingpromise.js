function sum(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 === "number" || typeof num2 === "number") {
      reject(`not a valid number`);
    } else {
      resolve(num1 + num2);
    }
  });
}

sum(10, 20)
  .then((value) => {
    console.log(`result of the given values are : ${value}`);
  })
  .catch((error) => {
    console.log(`error received : ${error}`);
  });
