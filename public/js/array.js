Array.prototype.searchThroughArray = function(searchTerm) {
  newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i].indexOf(searchTerm) > -1) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
