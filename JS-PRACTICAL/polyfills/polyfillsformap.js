if (!Array.prototype.mymap) {
  Array.prototype.mymap = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i));
    }
    return newArray;
  };
}
function sample(arr) {
  return arr.mymap((num) => {
    return num * 2;
  });
}

const ex = [1, 2, 3];
console.log(sample(ex));
