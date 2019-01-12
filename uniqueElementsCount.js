//using forEach
function uniqueCount(arr) {
  var unique = {};
  arr.forEach(element => {
    unique[element] = (unique[element] || 0) + 1;
  });
  return Object.keys(unique).length;
}

uniqueCount([1, 2, 3, 4, 4, 4, 6, 6, 3, 4]);

//using sort
function countUniqueValues(a) {
  a.sort();
  if (a.length == 0) return 0;
  var i = 0;
  for (var j = 1; j < a.length; j++) {
    if (a[i] !== a[j]) {
      i++;
      a[i] = a[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 3, 4, 4, 4, 6, 6, 3, 4]);
