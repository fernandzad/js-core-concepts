// Definying my own filter version over Array type of object
Array.prototype.myFilter = function (callback) {
  const result = [];
  this.forEach(number => {
    if (callback(number))
      result.push(number);
  });
  return result;
}

const array = [1,3,-4, 12, 123, 100];
const filtered = array.filter(item => item > 10);
filtered

const myFiltered = array.myFilter(item => item > 10);
myFiltered