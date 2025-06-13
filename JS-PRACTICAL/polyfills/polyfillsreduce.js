if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

const example = (arr) => {
  return arr.myReduce((acc, num) => acc + num, 0);
};

const ar = [1, 2, 3, 4, 5];
console.log(example(ar));
