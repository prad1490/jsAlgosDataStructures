//O(N2)
function averagePair(ar, avg) {
  ar.sort();
  for (var i = 0; i < ar.length; i++) {
    for (var j = 0; j < avg; j++) {
      if (!(ar[i] + ar[j]) / 2 === avg) continue;
      if ((ar[i] + ar[j]) / 2 === avg) return true;
    }
  }
  return false;
}

//O(N)
function NForm(ar, num) {
  var start = 0;
  var end = ar.length - 1;
  while (start < end) {
    let avg = (ar[start] + ar[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
