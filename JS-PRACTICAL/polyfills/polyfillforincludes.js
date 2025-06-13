if (!Array.prototype.includes) {
  Array.prototype.includes = function (search) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === search) {
        return true;
      }
    }
    return false;
  };
}
