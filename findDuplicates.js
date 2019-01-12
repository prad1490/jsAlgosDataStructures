function countChar(str) {
  var results = {};
  for (var item of str) {
    var item = item.toLowerCase();
    if (/[a-z0-9]/.test(item)) {
      if (results[item] > 0) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    } else {
      return "Not a valid string!!!!";
    }
  }
  return results;
}
countChar("wefewff");
