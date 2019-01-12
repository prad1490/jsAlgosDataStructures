function uniqueCount(arr) {
  var unique = {};
  arr.forEach(element => {
    unique[element] = (unique[element] || 0) + 1;
  });
  return Object.keys(unique).length;
}

var t1 = performance.now();
uniqueCount([1, 2, 3, 4, 4, 4, 6, 6, 3, 4]);
var t2 = performance.now();
console.log((t2 - t1) / 1000 + "seconds");
