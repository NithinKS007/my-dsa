const obj1 = {
  name: "name1",
  age: 20,
  place: "kottayam",
};

const userProxy = new Proxy(obj1, {
  get(target, property, receiver) {
    const sensitivePropOfObj = ["name", "age"];

    if (sensitivePropOfObj.includes(property)) {
      console.log(`accessed sensitive property`);
    }

    return Reflect.get(...arguments);
  },
});

console.log(userProxy.name);

const obj2 = {
  name: "name2",
  age: 25,
  place: "london",
};

const P = new Proxy(obj2, {
  set(target, key, value) {
    if (key === "age" && value < 0) {
      throw new Error("the age must be a positive number");
    }
    target[key] = value;
  },
});

P.age = -4;

const obj3 = {
  name: "nameThree",
  age: 50,
  place: "banglore",
};

const Pro = new Proxy(obj3, {
  get(target, key, value) {
    if (key === "name") {
      return target[key].toUpperCase();
    } else {
      return target[key];
    }
  },
});

console.log(Pro.name);
