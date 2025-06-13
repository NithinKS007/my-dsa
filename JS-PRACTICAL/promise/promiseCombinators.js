// Function to simulate fetching user data
const fetchUserDataOne = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ userId, name: "Alice" });
      } else if (userId === 2) {
        resolve({ userId, name: "Bob" });
      } else {
        reject(`User with ID ${userId} not found`);
      }
    }, 1000);
  });
};

// Using Promise.all to fetch multiple user data
Promise.all([
  fetchUserDataOne(1),
  fetchUserDataOne(2),
  fetchUserDataOne(3), // This will reject
])
  .then((results) => {
    console.log("All users fetched:", results);
  })
  .catch((error) => {
    console.log("Error while fetching users:", error);
  });
// Promise.all() will run all promises simultaneously and wait for them to resolve.
// If any promise rejects (in this case, fetchUserData(3)),
// it immediately rejects the entire Promise.all chain and goes to the catch block.

// Function simulating different response times for an API request
const fetchDatatwo = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched data in ${timeout} ms`);
    }, timeout);
  });
};

// Using Promise.race to pick the first resolved promise
Promise.race([
  fetchDatatwo(3000),
  fetchDatatwo(1000), // This will resolve first
  fetchDatatwo(500),
])
  .then((result) => {
    console.log("Fastest response:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Promise.race() will return the result of the first promise to resolve.
// Here, the third promise (with a timeout of 500ms) resolves first, and that result is logged.

// Simulating promises that resolve and reject
const fetchDataThree = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`Data received for number: ${num}`);
      } else {
        reject(`Error fetching data for number: ${num}`);
      }
    }, 1000);
  });
};

// Using Promise.allSettled to handle both resolved and rejected promises
Promise.allSettled([
  fetchDataThree(1),
  fetchDataThree(2),
  fetchDataThree(3),
]).then((results) => {
  console.log("All settled results:", results);
});

// Promise.allSettled() waits for all promises to either resolve or reject and provides a list of their outcomes.

// Each result is an object with a status (either fulfilled or rejected), and depending on the outcome,
// it will also contain a value (if resolved) or reason (if rejected).

// Simulating different responses with some rejection
const fetchDatafour = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 1) {
        resolve("First data retrieved successfully!");
      } else {
        reject(`Error with number ${num}`);
      }
    }, num * 1000);
  });
};

// Using Promise.any to return the first resolved promise
Promise.any([fetchDatafour(2), fetchDatafour(3), fetchDatafour(1)])
  .then((result) => {
    console.log("First resolved promise:", result);
  })
  .catch((error) => {
    console.log("All promises rejected:", error);
  });

// Promise.any() returns the result of the first promise to resolve.
// If all promises reject, it rejects with an AggregateError.

// If the first promise (fetchData(1)) resolves, you'll see 
// "First resolved promise: First data retrieved successfully!".
// If all promises fail, it will reject with an error.



// Promise.all: Waits for all promises to resolve (rejects if any fail).
// Promise.race: Resolves or rejects as soon as one promise resolves or rejects.
// Promise.allSettled: Waits for all promises to settle (resolve or reject) and returns their status.
// Promise.any: Resolves as soon as one promise resolves, or rejects if all promises reject.