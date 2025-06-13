function Car(color, model) {
    let car = {};
    car.color = color;
    car.model = model;
    return car;
}

const myCar = Car("red", "Toyota");
console.log(myCar.color); // Outputs: red
console.log(myCar.model); // Outputs: Toyota

function createUser(name, email) {
    return {
      name: name,
      email: email,
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
  }
  
  const user1 = createUser("Alice", "alice@example.com");
  const user2 = createUser("Bob", "bob@example.com");
  
  user1.greet(); // Hello, my name is Alice!
  user2.greet(); // Hello, my name is Bob!
  