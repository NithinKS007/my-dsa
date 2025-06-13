if (!Array.prototype.myfilter) {
  Array.prototype.myfilter = function (callback) {
    let newAr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        newAr.push(this[i]);
      }
    }
    return newAr;
  };
}

const example = (ar) => {
  return ar.myfilter((num) => num % 2 == 0);
};
const ar = [1, 2, 3, 4, 5];
console.log(example(ar));
