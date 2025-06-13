// Encapsulation
// Abstraction

// Inheritance allows a class to inherit properties and methods from another class.
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks
// The Dog class inherits from the Animal class and overrides the speak() method.
// The Dog class can use all methods from Animal but also extends or modifies its functionality by overriding speak().

// Polymorphism
class Shape {
  draw() {
    console.log("Drawing a generic shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

const shapes = [new Circle(), new Square()];

// Polymorphism at runtime
shapes.forEach((shape) => shape.draw());

// The method draw() is overridden in both Circle and Square classes.

// The same draw() method name behaves differently based on the type of the object,
// and the actual method used is determined at runtime.

// Js doesnt have complie time polymorphism
